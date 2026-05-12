#!/bin/sh
# Vercel ignoreCommand for mychef.id.
#
# Exit 0 => Vercel SKIPS the build (no deploy)
# Exit !0 => Vercel PROCEEDS with the build (deploy)
#
# We want to skip builds when a commit only touched:
#  - seo-iterations/        (data/report artefacts from the 5-day SEO loop)
#  - .github/workflows/     (CI changes don't affect the deployed site)
#
# Any commit that touches application code, content, schema, or styles
# falls through to a normal build.

changed=$(git diff --name-only HEAD HEAD~1 2>/dev/null || true)
if [ -z "$changed" ]; then
  # First commit on a branch / shallow clone: build to be safe.
  exit 1
fi

# Anything outside the ignore-prefixes triggers a build.
echo "$changed" | grep -v -E '^(seo-iterations/|\.github/)' | grep -q .
