#!/usr/bin/env python3
"""
fetch_data.py — Pull GSC + GA4 data for mychef.id every 5 days.

Reads service-account JSON from $GSC_SA_JSON (GitHub Actions secret, full file
contents inlined as the env value). Reads GA4 property ID from $GA4_PROPERTY_ID.

Writes one timestamped JSON dump to seo-iterations/data/YYYY-MM-DD.json
containing:
  - gsc.queries        — top 250 queries last 28d (page, query, clicks, imp, ctr, position)
  - gsc.pages          — per-page aggregate last 28d
  - ga4.pages          — per-page sessions/engagement/conversions last 28d
  - meta.fetched_at    — ISO timestamp
  - meta.date_range    — start, end
  - meta.errors        — any partial failures (so the next stage knows what data is missing)

Idempotent: re-running on the same day overwrites that day's file.

Failure mode: if GSC or GA4 access is denied (e.g. SA not added yet),
records the error in meta.errors and emits whatever it could fetch.
The next stage still has the previous day's file to fall back to.
"""
from __future__ import annotations

import datetime as dt
import json
import os
import sys
import tempfile
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parents[2]
OUT_DIR = REPO_ROOT / "seo-iterations" / "data"
SITE_URL = "sc-domain:mychef.id"        # GSC domain property
LOOKBACK_DAYS = 28
QUERY_ROW_LIMIT = 250


def load_service_account_creds():
    """Materialize SA JSON from env into a temp file, return Credentials."""
    sa_json = os.environ.get("GSC_SA_JSON", "").strip()
    if not sa_json:
        raise RuntimeError("GSC_SA_JSON env var missing — set it in repo secrets")
    try:
        sa_data = json.loads(sa_json)
    except json.JSONDecodeError as e:
        raise RuntimeError(f"GSC_SA_JSON is not valid JSON: {e}") from e

    # Write to temp file so google-auth can read it (its file-based loader is the most reliable).
    fd, sa_path = tempfile.mkstemp(suffix=".json", prefix="sa-")
    try:
        with os.fdopen(fd, "w") as f:
            json.dump(sa_data, f)
        from google.oauth2 import service_account
        scopes = [
            "https://www.googleapis.com/auth/webmasters.readonly",
            "https://www.googleapis.com/auth/analytics.readonly",
        ]
        return service_account.Credentials.from_service_account_file(sa_path, scopes=scopes)
    finally:
        # Wipe the temp file ASAP — the creds object holds what it needs in memory.
        try:
            os.unlink(sa_path)
        except OSError:
            pass


def fetch_gsc(creds, start_date: str, end_date: str) -> tuple[dict, list[str]]:
    """Returns ({queries, pages}, errors)."""
    from googleapiclient.discovery import build
    from googleapiclient.errors import HttpError

    errors: list[str] = []
    out: dict = {"queries": [], "pages": []}

    try:
        gsc = build("searchconsole", "v1", credentials=creds, cache_discovery=False)
    except Exception as e:
        return out, [f"gsc_build_failed: {e}"]

    # Top queries × pages, last 28d.
    try:
        resp = gsc.searchanalytics().query(
            siteUrl=SITE_URL,
            body={
                "startDate": start_date,
                "endDate": end_date,
                "dimensions": ["page", "query"],
                "rowLimit": QUERY_ROW_LIMIT,
            },
        ).execute()
        for row in resp.get("rows", []):
            page, query = row["keys"]
            out["queries"].append({
                "page": page,
                "query": query,
                "clicks": int(row.get("clicks", 0)),
                "impressions": int(row.get("impressions", 0)),
                "ctr": round(float(row.get("ctr", 0)), 5),
                "position": round(float(row.get("position", 0)), 2),
            })
    except HttpError as e:
        errors.append(f"gsc_queries_failed: status={e.resp.status} reason={e._get_reason()}")
    except Exception as e:
        errors.append(f"gsc_queries_failed: {type(e).__name__}: {e}")

    # Per-page aggregate.
    try:
        resp = gsc.searchanalytics().query(
            siteUrl=SITE_URL,
            body={
                "startDate": start_date,
                "endDate": end_date,
                "dimensions": ["page"],
                "rowLimit": 500,
            },
        ).execute()
        for row in resp.get("rows", []):
            out["pages"].append({
                "page": row["keys"][0],
                "clicks": int(row.get("clicks", 0)),
                "impressions": int(row.get("impressions", 0)),
                "ctr": round(float(row.get("ctr", 0)), 5),
                "position": round(float(row.get("position", 0)), 2),
            })
    except HttpError as e:
        errors.append(f"gsc_pages_failed: status={e.resp.status} reason={e._get_reason()}")
    except Exception as e:
        errors.append(f"gsc_pages_failed: {type(e).__name__}: {e}")

    return out, errors


def fetch_ga4(creds, start_date: str, end_date: str) -> tuple[dict, list[str]]:
    """Returns ({pages}, errors)."""
    errors: list[str] = []
    out: dict = {"pages": []}

    property_id = os.environ.get("GA4_PROPERTY_ID", "").strip()
    if not property_id:
        return out, ["ga4_property_id_missing"]

    try:
        from google.analytics.data_v1beta import BetaAnalyticsDataClient
        from google.analytics.data_v1beta.types import (
            RunReportRequest, DateRange, Dimension, Metric,
        )
    except ImportError as e:
        return out, [f"ga4_import_failed: {e}"]

    try:
        client = BetaAnalyticsDataClient(credentials=creds)
        req = RunReportRequest(
            property=f"properties/{property_id}",
            date_ranges=[DateRange(start_date=start_date, end_date=end_date)],
            dimensions=[Dimension(name="pagePath")],
            metrics=[
                Metric(name="screenPageViews"),
                Metric(name="sessions"),
                Metric(name="engagedSessions"),
                Metric(name="averageSessionDuration"),
                Metric(name="conversions"),
            ],
            limit=500,
        )
        resp = client.run_report(req)
        for row in resp.rows:
            out["pages"].append({
                "page": row.dimension_values[0].value,
                "page_views": int(row.metric_values[0].value or 0),
                "sessions": int(row.metric_values[1].value or 0),
                "engaged_sessions": int(row.metric_values[2].value or 0),
                "avg_session_duration_s": round(float(row.metric_values[3].value or 0), 2),
                "conversions": int(float(row.metric_values[4].value or 0)),
            })
    except Exception as e:
        errors.append(f"ga4_run_report_failed: {type(e).__name__}: {e}")

    return out, errors


def main() -> int:
    today = dt.date.today()
    end_date = today.isoformat()
    start_date = (today - dt.timedelta(days=LOOKBACK_DAYS)).isoformat()

    try:
        creds = load_service_account_creds()
    except RuntimeError as e:
        # Hard fail — without credentials we have nothing to record.
        print(f"FATAL: {e}", file=sys.stderr)
        return 1

    gsc_data, gsc_errors = fetch_gsc(creds, start_date, end_date)
    ga4_data, ga4_errors = fetch_ga4(creds, start_date, end_date)

    payload = {
        "meta": {
            "fetched_at": dt.datetime.utcnow().isoformat() + "Z",
            "date_range": {"start": start_date, "end": end_date},
            "site": SITE_URL,
            "errors": gsc_errors + ga4_errors,
        },
        "gsc": gsc_data,
        "ga4": ga4_data,
    }

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    out_path = OUT_DIR / f"{end_date}.json"
    out_path.write_text(json.dumps(payload, indent=2))

    # Also keep a stable "latest" pointer so the next stage doesn't need to guess the date.
    (OUT_DIR / "latest.json").write_text(json.dumps(payload, indent=2))

    # Summary on stdout (visible in GH Actions logs).
    print(json.dumps({
        "out_path": str(out_path.relative_to(REPO_ROOT)),
        "gsc_queries": len(gsc_data["queries"]),
        "gsc_pages": len(gsc_data["pages"]),
        "ga4_pages": len(ga4_data["pages"]),
        "errors": payload["meta"]["errors"],
    }, indent=2))

    return 0


if __name__ == "__main__":
    sys.exit(main())
