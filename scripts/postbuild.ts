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
  // Cooking classes are a learning experience — Course schema beats generic Service
  const isCookingClass = s.slug === 'services/cooking-classes';
  return {
    slug: s.slug,
    title,
    description,
    changefreq: 'monthly',
    priority: 0.7,
    schema: [
      isCookingClass ? {
        '@context': 'https://schema.org',
        '@type': 'Course',
        '@id': `${url}#course`,
        name: 'Private Chef Cooking Class in Bali',
        description: 'Hands-on cooking class delivered by a myCHEF private chef in your villa kitchen. Choose Mediterranean, Balinese, Asian fusion, or vegan technique. Small-group friendly.',
        provider: { '@type': 'Organization', '@id': `${ORIGIN}/#organization` },
        educationalLevel: 'Beginner to intermediate',
        teaches: ['Mediterranean cooking technique', 'Traditional Balinese cooking (rijsttafel, sambal, betutu)', 'Asian fusion technique', 'Plant-based cooking', 'Knife skills + plating'],
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'Onsite',
          location: { '@type': 'Place', name: 'Your Bali villa or home', address: { '@type': 'PostalAddress', addressRegion: 'Bali', addressCountry: 'ID' } },
        },
      } : {
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
        speakable: {
          '@type': 'SpeakableSpecification',
          xpath: ["/html/head/title", "//*[@data-prerender='page']"],
        },
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

// ---- llms-full.txt content (extended AI search context with full FAQ) ----
function buildLlmsFullTxt(): string {
  const lines: string[] = [
    '# myCHEF Indonesia — full context for AI search engines',
    '',
    '> Bali-based private chef booking service operating since 2012.',
    '> Background-checked chefs, 24 service areas, WhatsApp +62 822-3756-5997.',
    '',
    '## Frequently asked questions (homepage)',
    '',
  ];
  for (const f of HOMEPAGE_FAQS) {
    lines.push(`### ${f.q}`, '', f.a, '');
  }
  lines.push('', '## Extended FAQ (20 questions, 8 categories)', '');
  for (const f of FAQ_MASTER) {
    lines.push(`### ${f.cat ? '[' + f.cat + '] ' : ''}${f.q}`, '', f.a, '');
  }
  lines.push(
    '',
    '## Service areas (24 Bali neighborhoods)',
    '',
    Object.values(CITY_DATA).map(c => `- ${c.name} (${c.areas.slice(0, 4).join(', ')})`).join('\n'),
    '',
    '## Pricing',
    '',
    '- Chef fee: from Rp 800,000 per hour (3-hour minimum)',
    '- Ingredients: separate, billed at cost',
    '- Add-on staff: waiter Rp 300k/hr, bartender Rp 400k/hr, sommelier Rp 500k/hr',
    '- Equipment, plating, and cleanup are included in the chef rate',
    '',
    '## Cuisines',
    '',
    '- [Mediterranean](https://mychef.id/menus/mediterranean)',
    '- [Balinese](https://mychef.id/menus/balinese)',
    '- [Asian Fusion](https://mychef.id/menus/asian-fusion)',
    '- [Vegan / Plant-based](https://mychef.id/menus/vegan)',
    '- Modern European, dietary-restricted (gluten-free, halal, kosher)',
    '',
    '## Office',
    '',
    'Jl. Tukad Barito Timur III No.16, Panjer, Denpasar Selatan, Kota Denpasar, Bali 80226',
    'Email: indonesia@mychef.id | WhatsApp: +62 822-3756-5997',
    'Hours: 09:00-22:00 WIB daily',
    '',
  );
  return lines.join('\n');
}

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
      speakable: {
        '@type': 'SpeakableSpecification',
        xpath: ["/html/head/title", "//*[@data-prerender='page']"],
      },
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

  // Inject performance hints: preload critical font weight + hero image
  const perfHints = `    <link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap" />
    <link rel="dns-prefetch" href="//www.googletagmanager.com" />`;
  if (!html.includes('rel="preload" as="style"')) {
    html = html.replace('</head>', `${perfHints}\n  </head>`);
  }

  // Inject pre-render internal-link block right before </body> so non-JS crawlers
  // (AI engines, simple bots, Lighthouse pre-render scoring) see internal navigation
  // even before React mounts. Hidden visually with display:none — purely for crawlers.
  // The visible Footer (React-rendered) handles human navigation.

  // Per-city semantic boost: if this is a city page, add a "Recommended cuisines for {city}"
  // block with high-relevance internal links to specific menu pages (canggu→mediterranean+vegan, etc.)
  const citySlugMatch = page.slug && CITY_TO_CUISINE[page.slug];
  const cityName = citySlugMatch ? Object.values(CITY_DATA).find(c => c.slug === page.slug)?.name : null;
  const semanticBlock = citySlugMatch && cityName ? `        <h2>Recommended cuisines for ${cityName}</h2>
        <ul>
          ${citySlugMatch.map(c => `<li><a href="/menus/${c}">${c.charAt(0).toUpperCase() + c.slice(1).replace('-', ' ')} private chef menu in ${cityName}</a></li>`).join('\n          ')}
        </ul>` : '';

  const internalLinks = `    <div hidden aria-hidden="true" data-prerender="internal-links">
      <nav>
${semanticBlock}
        <h2>Bali areas served by myCHEF</h2>
        <ul>
          ${Object.values(CITY_DATA).map(c => `<li><a href="/${c.slug}">Private chef in ${c.name}, Bali</a></li>`).join('\n          ')}
        </ul>
        <h2>Sample menus by cuisine</h2>
        <ul>
          <li><a href="/menus">All sample menus</a></li>
          <li><a href="/menus/mediterranean">Mediterranean private chef menu</a></li>
          <li><a href="/menus/balinese">Balinese private chef menu</a></li>
          <li><a href="/menus/asian-fusion">Asian Fusion private chef menu</a></li>
          <li><a href="/menus/vegan">Vegan private chef menu</a></li>
        </ul>
        <h2>Services</h2>
        <ul>
          <li><a href="/services/villa-parties">Villa parties</a></li>
          <li><a href="/services/romantic-dinners">Romantic dinners</a></li>
          <li><a href="/services/birthday-celebrations">Birthday celebrations</a></li>
          <li><a href="/services/wedding-celebrations">Wedding celebrations</a></li>
          <li><a href="/services/corporate-events">Corporate events</a></li>
          <li><a href="/services/cooking-classes">Cooking classes</a></li>
          <li><a href="/services/weekly-meal-prep">Weekly meal prep</a></li>
        </ul>
        <h2>About</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About myCHEF</a></li>
          <li><a href="/chefs">Our chefs</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/villa-partners">Villa partner programme</a></li>
          <li><a href="/quote">Get a custom quote</a></li>
          <li><a href="/calculator">Pricing calculator</a></li>
          <li><a href="/jakarta">Private chef Jakarta</a></li>
        </ul>
      </nav>
    </div>`;
  html = html.replace('</body>', `${internalLinks}\n  </body>`);

  return html;
}

// ---- Sitemap (with image sitemap extension) ----
const HOMEPAGE_IMAGES = [
  { loc: `${ORIGIN}/og-image.jpg`, title: 'myCHEF Indonesia — Private chef in Bali villa', caption: 'Forbes-featured private chef plating a Mediterranean villa dinner in Bali' },
  { loc: `${ORIGIN}/logo.png`, title: 'myCHEF Indonesia logo', caption: 'myCHEF Indonesia — Bali private chef booking service since 2012' },
];
const CITY_IMAGES = (cityName: string) => [
  { loc: `${ORIGIN}/og-image.jpg`, title: `Private chef in ${cityName}, Bali`, caption: `myCHEF private chef preparing a villa dinner in ${cityName}, Bali` },
];

function buildSitemap(pages: PageConfig[]): string {
  const cityNames = new Set(Object.values(CITY_DATA).map(c => c.slug));
  const entries = pages.map(p => {
    const loc = p.slug ? `${ORIGIN}/${p.slug}` : `${ORIGIN}/`;
    let images: { loc: string; title: string; caption: string }[] = [];
    if (!p.slug) {
      images = HOMEPAGE_IMAGES;
    } else if (cityNames.has(p.slug)) {
      const city = Object.values(CITY_DATA).find(c => c.slug === p.slug);
      if (city) images = CITY_IMAGES(city.name);
    }
    const imageBlock = images.map(img => `    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
    </image:image>`).join('\n');
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${p.changefreq ?? 'monthly'}</changefreq>
    <priority>${(p.priority ?? 0.5).toFixed(1)}</priority>${imageBlock ? '\n' + imageBlock : ''}
  </url>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${entries.join('\n')}
</urlset>
`;
}

// ---- Per-city → menu semantic cross-links ----
// Maps each city slug to the cuisine slug(s) most-requested in that area, based on
// myCHEF's 13-year operational history. Used to add high-relevance internal links
// in the pre-render HTML internal-link block for each city page.
const CITY_TO_CUISINE: Record<string, string[]> = {
  canggu: ['mediterranean', 'vegan'],         // wellness + beach club crowd
  seminyak: ['mediterranean', 'asian-fusion'], // luxury restaurant scene
  ubud: ['vegan', 'balinese'],                 // wellness + traditional
  uluwatu: ['mediterranean', 'asian-fusion'],  // cliff villa fine dining
  'nusa-dua': ['mediterranean'],                // resort dining
  sanur: ['balinese', 'mediterranean'],         // family-friendly + traditional
  jimbaran: ['asian-fusion', 'mediterranean'],  // beachfront seafood
  kuta: ['asian-fusion', 'balinese'],           // value tourism
  legian: ['asian-fusion'],
  kerobokan: ['mediterranean', 'vegan'],
  petitenget: ['mediterranean'],
  berawa: ['mediterranean', 'vegan'],
  pererenan: ['mediterranean', 'vegan'],
  'tanah-lot': ['balinese'],
  tabanan: ['balinese', 'vegan'],
  denpasar: ['balinese', 'asian-fusion'],
  gianyar: ['balinese'],
  tegallalang: ['vegan', 'balinese'],
  amed: ['asian-fusion'],
  lovina: ['asian-fusion', 'balinese'],
  candidasa: ['balinese'],
  'padang-bai': ['balinese', 'asian-fusion'],
  bukit: ['mediterranean'],
  ungasan: ['mediterranean'],
  pecatu: ['mediterranean'],
};

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

  // llms-full.txt — extended context for AI search engines (full FAQ + areas + pricing)
  const llmsFull = buildLlmsFullTxt();
  await fs.writeFile(resolve(DIST_PUBLIC, 'llms-full.txt'), llmsFull, 'utf8');
  console.log(`[postbuild] wrote llms-full.txt (${llmsFull.length} bytes)`);
}

main().catch(err => {
  console.error('[postbuild] FAILED:', err);
  process.exit(1);
});
