/**
 * Postbuild: per-page HTML generator + fresh sitemap.
 *
 * Why: the React app is a SPA, so every URL ships the same shell HTML.
 * Pre-render HTML is what Google, Bing, ChatGPT, Perplexity, and SERP previews see.
 * If every URL has the homepage <title>, canonical, and og:* tags, all city/service pages
 * are interpreted as duplicates of the homepage.
 *
 * What this does:
 *   1. Reads dist/public/index.html (the SPA shell built by Vite)
 *   2. For each marketing route (cities, services, keyword pages, key static pages):
 *      - Rewrites <title>, meta description, canonical, og:*, twitter:*
 *      - Injects per-page JSON-LD (Service / WebPage + BreadcrumbList + FAQPage)
 *      - Writes to dist/public/{slug}/index.html
 *   3. Regenerates dist/public/sitemap.xml with current dates and the full route set.
 *
 * Vercel serves dist/public/{slug}/index.html before falling through to the SPA rewrite.
 * The React app still mounts on top — same UX, just with proper SEO HTML underneath.
 */

import { promises as fs } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { CITY_DATA, type CityData } from '../shared/cityData';
import { HOMEPAGE_FAQS, FAQ_MASTER } from '../shared/faqs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST_PUBLIC = resolve(__dirname, '../dist/public');
const ORIGIN = 'https://mychef.id';
const TODAY = new Date().toISOString().slice(0, 10);

interface PageConfig {
  slug: string; // empty string means homepage
  title: string;
  description: string;
  ogImage?: string;
  schema?: object | object[];
  changefreq?: 'daily' | 'weekly' | 'monthly';
  priority?: number;
}

// ---- HTML escaping ----
function attr(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function clip(s: string, n: number): string {
  if (s.length <= n) return s;
  return s.slice(0, n - 1).trimEnd() + '…';
}

// ---- City pages ----
function cityPage(city: CityData): PageConfig {
  const url = `${ORIGIN}/${city.slug}`;
  const title = `Private Chef in ${city.name}, Bali — Villa Dining from Rp 800k/hr | myCHEF`;
  const description = clip(
    `Book a background-checked private chef in ${city.name}, Bali. ${city.heroDescription} 3-hour minimum, equipment + cleanup included. WhatsApp booking.`,
    155
  );
  return {
    slug: city.slug,
    title,
    description,
    changefreq: 'weekly',
    priority: 0.85,
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${url}#service`,
        name: `Private Chef in ${city.name}, Bali`,
        serviceType: `Private chef and in-villa dining in ${city.name}, Bali`,
        description: `${city.description} Background-checked private chefs for villa dining, parties, weddings, and recurring household chef arrangements in ${city.name}.`,
        provider: { '@id': `${ORIGIN}/#organization` },
        areaServed: {
          '@type': 'City',
          name: city.name,
          containedInPlace: { '@type': 'AdministrativeArea', name: 'Bali, Indonesia' },
          geo: city.coordinates,
        },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'IDR',
          price: '800000',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '800000',
            priceCurrency: 'IDR',
            unitText: 'HOUR',
            minPrice: '2400000',
            description: 'From Rp 800,000 per hour, 3-hour minimum',
          },
        },
      },
      // Place schema with sub-area listing — explicit entity definition for local SEO + AI search.
      // Lists the actual neighborhoods served within this city so Google + AI can map mychef.id to
      // each sub-area as a service location.
      {
        '@context': 'https://schema.org',
        '@type': 'Place',
        '@id': `${url}#place`,
        name: `${city.name}, Bali`,
        description: `${city.name} is a Bali neighborhood served by myCHEF Indonesia. Sub-areas covered: ${city.areas.join(', ')}.`,
        geo: city.coordinates,
        containedInPlace: { '@type': 'AdministrativeArea', name: 'Bali, Indonesia' },
        amenityFeature: city.areas.slice(0, 12).map(area => ({
          '@type': 'LocationFeatureSpecification',
          name: `Private chef service in ${area}`,
          value: true,
        })),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
          { '@type': 'ListItem', position: 2, name: 'Bali', item: `${ORIGIN}/` },
          { '@type': 'ListItem', position: 3, name: city.name, item: url },
        ],
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: city.faqItems.map(f => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
    ],
  };
}

// ---- Service pages ----
interface ServiceDef { slug: string; name: string; intent: string; }
const SERVICES: ServiceDef[] = [
  { slug: 'services/villa-parties',         name: 'Villa Parties',         intent: 'private chef for villa parties in Bali' },
  { slug: 'services/romantic-dinners',      name: 'Romantic Dinners',      intent: 'romantic private dinner chef in Bali' },
  { slug: 'services/birthday-celebrations', name: 'Birthday Celebrations', intent: 'private chef for birthday in Bali' },
  { slug: 'services/family-reunions',       name: 'Family Reunions',       intent: 'private chef for family reunions in Bali' },
  { slug: 'services/corporate-events',      name: 'Corporate Events',      intent: 'private chef for corporate events in Bali' },
  { slug: 'services/wedding-celebrations',  name: 'Wedding Celebrations',  intent: 'wedding private chef in Bali' },
  { slug: 'services/cooking-classes',       name: 'Cooking Classes',       intent: 'private chef cooking classes in Bali' },
  { slug: 'services/weekly-meal-prep',      name: 'Weekly Meal Prep',      intent: 'weekly chef meal prep in Bali' },
];
function servicePage(s: ServiceDef): PageConfig {
  const url = `${ORIGIN}/${s.slug}`;
  const title = `${s.name} — Private Chef Service in Bali | myCHEF`;
  const description = clip(
    `${s.name} with a background-checked private chef across Bali. From Rp 800,000/hr, 3-hour minimum, all equipment + cleanup included. WhatsApp booking.`,
    155
  );
  return {
    slug: s.slug,
    title,
    description,
    changefreq: 'monthly',
    priority: 0.7,
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${url}#service`,
        name: `${s.name} — Private Chef in Bali`,
        serviceType: s.intent,
        description: `${s.name} delivered by myCHEF Indonesia's network of background-checked private chefs across Bali villas, homes, and event venues.`,
        provider: { '@id': `${ORIGIN}/#organization` },
        areaServed: { '@type': 'AdministrativeArea', name: 'Bali, Indonesia' },
        offers: { '@type': 'Offer', priceCurrency: 'IDR', price: '800000' },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${ORIGIN}/services/villa-parties` },
          { '@type': 'ListItem', position: 3, name: s.name, item: url },
        ],
      },
    ],
  };
}

// ---- Keyword pages (Indonesia-wide intent) ----
interface KeywordDef { slug: string; title: string; description: string; }
const KEYWORD_PAGES: KeywordDef[] = [
  { slug: 'best-private-chef-indonesia',     title: 'Best Private Chef in Indonesia — Bali Villa Dining | myCHEF', description: 'Indonesia\'s leading private chef booking service. Background-checked chefs across Bali. From Rp 800k/hr.' },
  { slug: 'private-chef-for-events',         title: 'Private Chef for Events in Bali — Villa, Wedding, Corporate | myCHEF', description: 'Event chefs for villa parties, weddings, and corporate gatherings across Bali. WhatsApp booking.' },
  { slug: 'luxury-chef-indonesia',           title: 'Luxury Private Chef Indonesia — In-Villa Fine Dining | myCHEF', description: 'Luxury private chef service for Bali villas: Mediterranean, Asian fusion, and Balinese tasting menus.' },
  { slug: 'wedding-catering-indonesia',      title: 'Wedding Catering in Bali — Private Chef + Sommelier | myCHEF', description: 'Wedding chef and catering teams in Bali. Multi-course menus, sommelier add-on, full setup and cleanup.' },
  { slug: 'private-dining-indonesia',        title: 'Private Dining Indonesia — In-Villa Chef Service | myCHEF', description: 'Private dining at home in Bali: chef arrives, cooks, plates, and serves. From Rp 800k/hr, 3-hr min.' },
  { slug: 'healthy-meal-delivery-indonesia', title: 'Healthy Meal Prep in Bali — Weekly Chef Service | myCHEF', description: 'Weekly chef meal-prep in Bali for expat families and long-term renters. Dietary-restricted menus on request.' },
  { slug: 'private-chef-booking-indonesia',  title: 'Book a Private Chef in Indonesia — WhatsApp Booking | myCHEF', description: 'Book a background-checked private chef across Bali in under an hour via WhatsApp +62 822-3756-5997.' },
  { slug: 'chef-for-hire-indonesia',         title: 'Chef for Hire in Indonesia — Bali Private Chef | myCHEF', description: 'Hire a private chef in Bali for one night, weekly, or full-time household arrangements. WhatsApp booking.' },
];
function keywordPage(k: KeywordDef): PageConfig {
  const url = `${ORIGIN}/${k.slug}`;
  return {
    slug: k.slug,
    title: k.title,
    description: clip(k.description, 155),
    changefreq: 'monthly',
    priority: 0.7,
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: k.title,
        description: k.description,
        isPartOf: { '@id': `${ORIGIN}/#website` },
        about: { '@id': `${ORIGIN}/#organization` },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
          { '@type': 'ListItem', position: 2, name: k.title, item: url },
        ],
      },
    ],
  };
}

// ---- Static pages ----
const STATIC_PAGES: PageConfig[] = [
  {
    slug: 'jakarta',
    title: 'Private Chef in Jakarta — In-Villa Dining & Catering | myCHEF',
    description: 'Background-checked private chefs in Jakarta: Menteng, Kebayoran Baru, SCBD, Senayan, Pondok Indah, Kemang. From Rp 800k/hr, 3-hour minimum. WhatsApp booking.',
    changefreq: 'weekly', priority: 0.85,
  },
  {
    slug: 'villa-partners',
    title: 'Villa Manager Chef Partnership in Bali — myCHEF Indonesia',
    description: 'myCHEF supplies background-checked private chefs to Bali villas, villa-rental agencies, and concierge teams. On-call coverage, liability insurance, 13+ year track record.',
    changefreq: 'monthly', priority: 0.7,
  },
  {
    slug: 'about',
    title: 'About myCHEF Indonesia — Private Chef Service in Bali Since 2012',
    description: 'myCHEF is Bali\'s longest-running private chef booking service. Background-checked chefs, 13+ years in Bali hospitality, 24 service areas. Office in Denpasar.',
    changefreq: 'monthly', priority: 0.85,
  },
  {
    slug: 'menus',
    title: 'Sample Menus — Private Chef in Bali | myCHEF Indonesia',
    description: 'Sample menus from myCHEF private chefs in Bali: Mediterranean, Asian fusion, Balinese, modern European, vegan, dietary-restricted. Custom menus for every occasion.',
    changefreq: 'monthly', priority: 0.8,
  },
  {
    slug: 'menus/mediterranean',
    title: 'Mediterranean Private Chef Menu in Bali — Sample Menus | myCHEF',
    description: 'Sample Mediterranean menus from myCHEF private chefs in Bali. 3-course villa dinners, 5-course tasting menus, family-style sharing feasts. From Rp 4.2M for 6 guests.',
    changefreq: 'monthly', priority: 0.8,
  },
  {
    slug: 'menus/balinese',
    title: 'Balinese Private Chef Menu in Bali — Sample Menus | myCHEF',
    description: 'Sample traditional + modern Balinese menus from myCHEF private chefs. Rijsttafel sharing feasts, modern Balinese tasting menus. From Rp 4.8M for 6-8 guests.',
    changefreq: 'monthly', priority: 0.75,
  },
  {
    slug: 'menus/asian-fusion',
    title: 'Asian Fusion Private Chef Menu in Bali — Sample Menus | myCHEF',
    description: 'Sample Asian fusion menus from myCHEF private chefs in Bali. Pan-Asian tasting menus, family-style sharing. Modern Indonesian + Japanese + Thai + Korean.',
    changefreq: 'monthly', priority: 0.75,
  },
  {
    slug: 'menus/vegan',
    title: 'Vegan & Plant-Based Private Chef Menu in Bali | myCHEF',
    description: 'Sample vegan + plant-based menus from myCHEF private chefs in Bali. Tasting menus, Mediterranean sharing feasts. From Rp 4.6M for 8 guests.',
    changefreq: 'monthly', priority: 0.75,
  },
  {
    slug: 'chefs',
    title: 'Our Private Chefs in Bali — Background-Checked & Certified | myCHEF',
    description: 'Meet myCHEF\'s network of background-checked private chefs in Bali. Mediterranean, Balinese, Asian fusion, vegan, wedding catering specialists. Insured, food-safety certified.',
    changefreq: 'monthly', priority: 0.75,
  },
  {
    slug: 'faq',
    title: 'Private Chef in Bali — Frequently Asked Questions | myCHEF Indonesia',
    description: '20 common questions about hiring a private chef in Bali: pricing, booking, cuisines, dietary restrictions, service area, trust & safety. Direct answers from myCHEF Indonesia.',
    changefreq: 'monthly', priority: 0.8,
    schema: [
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        '@id': 'https://mychef.id/faq#faqs',
        mainEntity: FAQ_MASTER.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.id/' },
          { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://mychef.id/faq' },
        ],
      },
    ],
  },
  {
    slug: 'quote',
    title: 'Get a Private Chef Quote in Bali — Custom Menu | myCHEF',
    description: 'Tell us about your event in Bali — we send a custom menu and price within 24 hours. Or WhatsApp us for an instant quote.',
    changefreq: 'monthly', priority: 0.9,
  },
  {
    slug: 'calculator',
    title: 'Private Chef Pricing Calculator — Bali | myCHEF',
    description: 'Estimate the cost of a private chef in Bali by guests, hours, and add-ons. Transparent pricing from Rp 800k/hr.',
    changefreq: 'monthly', priority: 0.7,
  },
  {
    slug: 'recommended-services',
    title: 'Recommended Bali Services — Villas, Photographers, Florists | myCHEF',
    description: 'Trusted partners for villa rental, photography, florists, and event planning across Bali — vetted by the myCHEF team.',
    changefreq: 'monthly', priority: 0.5,
  },
  {
    slug: 'join-our-team',
    title: 'Careers — Join the myCHEF Indonesia Team in Bali',
    description: 'Apply to join myCHEF as a private chef, support team member, or operations partner. Bali-based, since 2012.',
    changefreq: 'monthly', priority: 0.4,
  },
  {
    slug: 'privacy-policy',
    title: 'Privacy Policy | myCHEF Indonesia',
    description: 'How myCHEF Indonesia collects, uses, and protects your personal information.',
    changefreq: 'monthly', priority: 0.2,
  },
  {
    slug: 'terms-of-service',
    title: 'Terms of Service | myCHEF Indonesia',
    description: 'Terms governing the use of myCHEF Indonesia\'s private chef booking service.',
    changefreq: 'monthly', priority: 0.2,
  },
  {
    slug: 'payment-terms',
    title: 'Payment Terms | myCHEF Indonesia',
    description: 'Deposit, balance, refund, and cancellation terms for myCHEF private chef bookings in Bali.',
    changefreq: 'monthly', priority: 0.2,
  },
];

// HOMEPAGE_FAQS + FAQ_MASTER are imported from ../shared/faqs above so the
// React components AND this script use the same source of truth.

// ---- Build the full route set ----
const HOMEPAGE: PageConfig = {
  slug: '',
  title: 'Private Chef in Bali — In-Villa Dining Since 2012 | myCHEF',
  description: 'Book a background-checked private chef in your Bali villa. Mediterranean & international menus, 3-hour minimum, transparent pricing. WhatsApp booking.',
  changefreq: 'weekly', priority: 1.0,
  schema: [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': 'https://mychef.id/#home-service',
      serviceType: 'Private chef booking and in-villa dining',
      provider: { '@id': 'https://mychef.id/#organization' },
      areaServed: [{ '@type': 'AdministrativeArea', name: 'Bali, Indonesia' }],
      offers: {
        '@type': 'Offer',
        priceCurrency: 'IDR',
        price: '800000',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '800000',
          priceCurrency: 'IDR',
          unitText: 'HOUR',
          minPrice: '2400000',
          description: 'From Rp 800,000 per hour, 3-hour minimum',
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': 'https://mychef.id/#faqs',
      mainEntity: HOMEPAGE_FAQS.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://mychef.id/' },
      ],
    },
  ],
};

function allPages(): PageConfig[] {
  return [
    HOMEPAGE,
    ...Object.values(CITY_DATA).map(cityPage),
    ...SERVICES.map(servicePage),
    ...KEYWORD_PAGES.map(keywordPage),
    ...STATIC_PAGES,
  ];
}

// ---- HTML transform ----
function transformHtml(template: string, page: PageConfig): string {
  const url = page.slug ? `${ORIGIN}/${page.slug}` : `${ORIGIN}/`;
  const ogImage = page.ogImage ?? 'https://mychef.id/og-image.jpg';

  let html = template;

  // <title>
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${attr(page.title)}</title>`);

  // meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/i,
    `<meta name="description" content="${attr(page.description)}" />`
  );

  // canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${attr(url)}" />`
  );

  // og:url, og:title, og:description, og:image
  html = html.replace(
    /<meta property="og:url" content="[^"]*"\s*\/?>/i,
    `<meta property="og:url" content="${attr(url)}" />`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/i,
    `<meta property="og:title" content="${attr(page.title)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"\s*\/?>/i,
    `<meta property="og:description" content="${attr(page.description)}" />`
  );
  html = html.replace(
    /<meta property="og:image" content="[^"]*"\s*\/?>/i,
    `<meta property="og:image" content="${attr(ogImage)}" />`
  );

  // robots — upgrade index,follow → include max-image-preview:large + max-snippet:-1 (better SERP visuals)
  html = html.replace(
    /<meta name="robots" content="[^"]*"\s*\/?>/i,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`
  );

  // hreflang — self-reference for English + x-default; Indonesian /id/ routes will be added when wired
  const hreflangBlock = `    <link rel="alternate" hreflang="en" href="${attr(url)}" />\n    <link rel="alternate" hreflang="x-default" href="${attr(url)}" />`;
  if (!html.includes('hreflang=')) {
    html = html.replace('<link rel="canonical"', `${hreflangBlock}\n    <link rel="canonical"`);
  }

  // twitter
  html = html.replace(
    /<meta name="twitter:url" content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:url" content="${attr(url)}" />`
  );
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:title" content="${attr(page.title)}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:description" content="${attr(page.description)}" />`
  );
  html = html.replace(
    /<meta name="twitter:image" content="[^"]*"\s*\/?>/i,
    `<meta name="twitter:image" content="${attr(ogImage)}" />`
  );

  // Inject per-page JSON-LD before </head>
  if (page.schema) {
    const schemas = Array.isArray(page.schema) ? page.schema : [page.schema];
    const blocks = schemas
      .map(s => `    <script type="application/ld+json" data-prerender="page">${JSON.stringify(s)}</script>`)
      .join('\n');
    html = html.replace('</head>', `${blocks}\n  </head>`);
  }

  return html;
}

// ---- Sitemap ----
function buildSitemap(pages: PageConfig[]): string {
  const entries = pages.map(p => {
    const loc = p.slug ? `${ORIGIN}/${p.slug}` : `${ORIGIN}/`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${p.changefreq ?? 'monthly'}</changefreq>
    <priority>${(p.priority ?? 0.5).toFixed(1)}</priority>
  </url>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;
}

// ---- Run ----
async function main() {
  console.log(`[postbuild] reading template from ${DIST_PUBLIC}/index.html`);
  const template = await fs.readFile(resolve(DIST_PUBLIC, 'index.html'), 'utf8');
  const pages = allPages();
  console.log(`[postbuild] generating ${pages.length} per-page HTML files`);

  let written = 0;
  for (const page of pages) {
    if (!page.slug) {
      // Homepage: rewrite root index.html in place
      const html = transformHtml(template, page);
      await fs.writeFile(resolve(DIST_PUBLIC, 'index.html'), html, 'utf8');
      written++;
      continue;
    }
    const dir = resolve(DIST_PUBLIC, page.slug);
    await fs.mkdir(dir, { recursive: true });
    const html = transformHtml(template, page);
    await fs.writeFile(resolve(dir, 'index.html'), html, 'utf8');
    written++;
  }
  console.log(`[postbuild] wrote ${written} HTML files`);

  // Sitemap
  const sitemap = buildSitemap(pages);
  await fs.writeFile(resolve(DIST_PUBLIC, 'sitemap.xml'), sitemap, 'utf8');
  console.log(`[postbuild] regenerated sitemap.xml with ${pages.length} URLs (lastmod=${TODAY})`);
}

main().catch(err => {
  console.error('[postbuild] FAILED:', err);
  process.exit(1);
});
