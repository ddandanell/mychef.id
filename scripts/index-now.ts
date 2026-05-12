/**
 * IndexNow ping — push the full sitemap URL list to Bing, Yandex, Naver, Seznam.
 * Run after a deploy when you want to nudge non-Google search engines to re-crawl.
 *
 * Setup is the IndexNow key file at /public/{key}.txt. The key proves we own
 * the domain (or have control of where IndexNow looks).
 *
 * Usage:
 *   tsx scripts/index-now.ts
 *
 * Spec: https://www.indexnow.org/documentation
 */

import { CITY_DATA } from '../shared/cityData';

// Stable key for mychef.id IndexNow ownership. Hosted at /<KEY>.txt and contains the same value.
// Generated once; do not change without also rotating the file.
const INDEXNOW_KEY = 'mychef-indexnow-2026-c5b8e91a47';
const HOST = 'mychef.id';

// All public URLs we want re-crawled. Mirrors postbuild.ts route list.
function allUrls(): string[] {
  const urls: string[] = [
    `https://${HOST}/`,
    `https://${HOST}/about`,
    `https://${HOST}/chefs`,
    `https://${HOST}/faq`,
    `https://${HOST}/menus`,
    `https://${HOST}/menus/mediterranean`,
    `https://${HOST}/menus/balinese`,
    `https://${HOST}/menus/asian-fusion`,
    `https://${HOST}/menus/vegan`,
    `https://${HOST}/menus/modern-european`,
    `https://${HOST}/menus/halal`,
    `https://${HOST}/jakarta`,
    `https://${HOST}/villa-partners`,
    `https://${HOST}/quote`,
    `https://${HOST}/calculator`,
    `https://${HOST}/recommended-services`,
    `https://${HOST}/join-our-team`,
    `https://${HOST}/retreats`,
    `https://${HOST}/catering`,
    `https://${HOST}/proposal-dinner`,
    `https://${HOST}/honeymoon-chef`,
    `https://${HOST}/echo-beach-private-chef`,
    `https://${HOST}/batu-bolong-private-chef`,
    `https://${HOST}/bingin-private-chef`,
    `https://${HOST}/penestanan-private-chef`,
    `https://${HOST}/guide/bali-cuisine-glossary`,
    `https://${HOST}/guide/private-chef-bali`,
    ...['villa-parties','romantic-dinners','birthday-celebrations','family-reunions','corporate-events','wedding-celebrations','cooking-classes','weekly-meal-prep'].map(s => `https://${HOST}/services/${s}`),
    ...Object.values(CITY_DATA).map(c => `https://${HOST}/${c.slug}`),
    ...['best-private-chef-indonesia','private-chef-for-events','luxury-chef-indonesia','wedding-catering-indonesia','private-dining-indonesia','healthy-meal-delivery-indonesia','private-chef-booking-indonesia','chef-for-hire-indonesia'].map(s => `https://${HOST}/${s}`),
  ];
  return urls;
}

async function ping() {
  const urlList = allUrls();
  const body = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
    urlList,
  };
  console.log(`[index-now] sending ${urlList.length} URLs to api.indexnow.org`);
  const r = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  console.log(`[index-now] response: HTTP ${r.status}`);
  const text = await r.text();
  if (text) console.log(`[index-now] body: ${text.substring(0, 500)}`);
  if (r.status === 200 || r.status === 202) {
    console.log('[index-now] ✅ accepted — Bing, Yandex, Seznam, Naver will re-crawl');
  } else if (r.status === 422) {
    console.log('[index-now] ❌ key/keyLocation invalid — verify /public/' + INDEXNOW_KEY + '.txt exists and matches');
  }
}

ping().catch((e) => {
  console.error('[index-now] FAILED:', e);
  process.exit(1);
});
