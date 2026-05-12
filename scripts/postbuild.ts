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
import { CONTENT_PAGES } from '../client/src/pages/content-pages';

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
  /** Per-page geo position meta tag (overrides site-wide). Format: "lat;lng". */
  geoPosition?: string;
  /** Pre-render body content injected as <noscript> + visible-when-JS-off block.
   *  Indexed by Google + AI engines as page text without requiring JS execution. */
  bodyContent?: string;
}

/** Escape HTML special chars for safe inline insertion. */
function htmlEsc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
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
  // Per-city SEO override falls through to generic template when not set.
  // Used for cities where the default "Villa Dining from Rp 800k/hr" framing
  // mismatches actual search intent (e.g. Denpasar's residential audience — SEOdata #815).
  const title = city.seoTitle
    || `Private Chef in ${city.name}, Bali — Villa Dining from Rp 800k/hr | myCHEF`;
  const description = clip(
    city.seoDescription
      || `Book a background-checked private chef in ${city.name}, Bali. ${city.heroDescription} 3-hour minimum, equipment + cleanup included. WhatsApp booking.`,
    155
  );
  // Visible-text pre-render body content. Indexed by Google + AI engines without JS.
  // React mounts on top of #root and visually replaces this; SEO content stays in HTML.
  const bodyContent = `<h1>Private Chef in ${htmlEsc(city.name)}, Bali</h1>
<p><strong>${htmlEsc(city.tagline)}</strong></p>
<p>${htmlEsc(city.description)}</p>
<p>${htmlEsc(city.heroDescription)}</p>
<h2>About ${htmlEsc(city.name)}</h2>
<p>${htmlEsc(city.localInsights)}</p>
<h2>Areas in ${htmlEsc(city.name)} myCHEF serves</h2>
<ul>${city.areas.map(a => `<li>${htmlEsc(a)}</li>`).join('')}</ul>
<h2>Popular venues in ${htmlEsc(city.name)}</h2>
<ul>${city.popularVenues.map(v => `<li>${htmlEsc(v)}</li>`).join('')}</ul>
<h2>How private chef booking works in ${htmlEsc(city.name)}</h2>
<ol>
  <li>WhatsApp +62 822-3756-5997 with your event date, guest count, and any cuisine or dietary preferences.</li>
  <li>Receive chef profile + sample menu within an hour during operating hours.</li>
  <li>Chef arrives 2–3 hours before service, shops, cooks, plates, serves, and cleans the kitchen.</li>
  <li>You enjoy a private restaurant in your own villa — no transport, no reservation hunt, no cleanup.</li>
</ol>
<h2>Pricing in ${htmlEsc(city.name)}</h2>
<p>From Rp 800,000 per hour, 3-hour minimum. Ingredients billed at cost. Add-on staff: waiter Rp 300k/hr, bartender Rp 400k/hr, sommelier Rp 500k/hr.</p>
<h2>Frequently asked questions — private chef in ${htmlEsc(city.name)}</h2>
${city.faqItems.map(f => `<h3>${htmlEsc(f.question)}</h3><p>${htmlEsc(f.answer)}</p>`).join('\n')}`;
  return {
    slug: city.slug,
    title,
    description,
    changefreq: 'weekly',
    priority: 0.85,
    geoPosition: `${city.coordinates.latitude};${city.coordinates.longitude}`,
    bodyContent,
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
// Service titles rewritten 2026-05-13 based on SEOdata #815 evidence:
// /services/* folder got 692 impressions, 0 CLICKS across 4 pages in 90 days.
// Old titles "{Name} — Private Chef Service in Bali" are too generic for SERP.
// New titles add concrete value props (sommelier / bartender / photographer / scale)
// to make the click compelling.
interface ServiceDef { slug: string; name: string; intent: string; clickMagnetTitle: string; clickMagnetDescription: string; }
const SERVICES: ServiceDef[] = [
  {
    slug: 'services/villa-parties', name: 'Villa Parties',
    intent: 'private chef for villa parties in Bali',
    clickMagnetTitle: 'Bali Villa Parties — Private Chef + Bartender + BBQ Setup | myCHEF',
    clickMagnetDescription: 'Full villa party catering in Bali: private chef, bartender, BBQ grill, sound system, sushi bar or teppanyaki. 8-50 guests, all-in pricing. WhatsApp booking.',
  },
  {
    slug: 'services/romantic-dinners', name: 'Romantic Dinners',
    intent: 'romantic private dinner chef in Bali',
    clickMagnetTitle: 'Romantic Dinner in a Bali Villa — Chef + Sommelier + Setup | myCHEF',
    clickMagnetDescription: 'Private romantic dinner in your Bali villa or beachfront. Multi-course tasting menu, sommelier wine pairing, candle + flower setup. From Rp 4.5M for 2 guests.',
  },
  {
    slug: 'services/birthday-celebrations', name: 'Birthday Celebrations',
    intent: 'private chef for birthday in Bali',
    clickMagnetTitle: 'Birthday Catering in Bali — Private Chef + Cake + Photographer | myCHEF',
    clickMagnetDescription: 'Birthday catering in your Bali villa: private chef, custom multi-course menu, surprise cake course, photographer + decor coordination. 4-30 guests.',
  },
  {
    slug: 'services/family-reunions', name: 'Family Reunions',
    intent: 'private chef for family reunions in Bali',
    clickMagnetTitle: 'Family Reunion in Bali — Multi-Generational Private Chef Dinner | myCHEF',
    clickMagnetDescription: 'Family reunion dinners in Bali for 6-30 guests. Kid-friendly menu options + adult tasting menus at the same table. Indonesian, Mediterranean, dietary-restricted.',
  },
  {
    slug: 'services/corporate-events', name: 'Corporate Events',
    intent: 'corporate event catering in Bali',
    clickMagnetTitle: 'Corporate Event Catering Bali — Private Chef Teams 8-100 Guests | myCHEF',
    clickMagnetDescription: 'Corporate event catering in Bali: private chef teams, multi-course tasting menus, sommelier wine pairing. Welcome dinners, offsites, retreats. 8-100 guests.',
  },
  {
    slug: 'services/wedding-celebrations', name: 'Wedding Celebrations',
    intent: 'wedding private chef in Bali',
    clickMagnetTitle: 'Wedding Dinner in Bali — Rehearsal + Reception Chef Catering | myCHEF',
    clickMagnetDescription: 'Wedding catering in Bali: rehearsal dinner (8-30 guests) and intimate wedding reception. Multi-course tasting menus, sommelier + waiter teams, dietary handling.',
  },
  {
    slug: 'services/cooking-classes', name: 'Cooking Classes',
    intent: 'private chef cooking classes in Bali',
    clickMagnetTitle: 'Cooking Class in Bali — Hands-On Private Chef in Your Villa | myCHEF',
    clickMagnetDescription: 'Hands-on cooking class in your Bali villa with a private chef. Learn Mediterranean, Balinese, Asian fusion, or vegan technique. Small groups, market-fresh ingredients.',
  },
  {
    slug: 'services/weekly-meal-prep', name: 'Weekly Meal Prep',
    intent: 'weekly chef meal prep in Bali',
    clickMagnetTitle: 'Weekly Meal Prep in Bali — Private Chef Visits Your Villa | myCHEF',
    clickMagnetDescription: 'Weekly private chef meal prep in your Bali villa. 1-3 sessions per week, custom menu, dietary-restricted (vegan/gluten-free/halal). From Rp 2.5M per session.',
  },
];
function servicePage(s: ServiceDef): PageConfig {
  const url = `${ORIGIN}/${s.slug}`;
  const title = s.clickMagnetTitle;
  const description = clip(s.clickMagnetDescription, 165);
  // Cooking classes are a learning experience — Course schema beats generic Service
  const isCookingClass = s.slug === 'services/cooking-classes';
  const bodyContent = `<h1>${htmlEsc(s.name)} — Private Chef Service in Bali</h1>
<p>myCHEF Indonesia provides ${htmlEsc(s.intent)} across all major Bali neighborhoods. Background-checked, food-safety certified chefs cook in your villa or event venue, plate and serve, and clean up after — the same model as a private restaurant in your own home.</p>
<h2>Why book ${htmlEsc(s.name.toLowerCase())} with myCHEF</h2>
<ul>
  <li>13+ year operating history in Bali (since 2012)</li>
  <li>Every chef background-checked + food-safety certified</li>
  <li>Commercial liability insurance on every booking</li>
  <li>Custom menu — Mediterranean, Asian fusion, Balinese, vegan, dietary-restricted</li>
  <li>Equipment, plating, and cleanup all included</li>
  <li>Average WhatsApp response under 10 minutes</li>
</ul>
<h2>What's included</h2>
<ul>
  <li>Chef labor (cooking, plating, presentation)</li>
  <li>Kitchen cleanup after service</li>
  <li>Standard cooking equipment + chef knives</li>
  <li>Menu consultation before the event</li>
  <li>Ingredient sourcing (billed at cost separately)</li>
</ul>
<h2>How it works</h2>
<ol>
  <li>WhatsApp +62 822-3756-5997 with date, area, guest count, and any cuisine preferences.</li>
  <li>Receive chef profile + sample menu within an hour during operating hours.</li>
  <li>Chef arrives 2–3 hours before service, shops, cooks, plates, and serves.</li>
  <li>You enjoy the meal — chef cleans up before leaving.</li>
</ol>
<h2>Pricing for ${htmlEsc(s.name.toLowerCase())} in Bali</h2>
<p>From Rp 800,000 per hour, 3-hour minimum. Ingredients billed at cost. Add-on staff: waiter Rp 300,000/hr, bartender Rp 400,000/hr, sommelier Rp 500,000/hr.</p>
<p>WhatsApp +62 822-3756-5997 — most ${htmlEsc(s.name.toLowerCase())} bookings confirmed within an hour.</p>`;
  return {
    slug: s.slug,
    title,
    description,
    changefreq: 'monthly',
    priority: 0.7,
    bodyContent,
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
// Per-keyword body content map — maps keyword slug to a custom intro paragraph.
// Used by keywordPage() to generate unique pre-render bodyContent for each keyword target.
const KEYWORD_LEAD: Record<string, string> = {
  'best-private-chef-indonesia': "Looking for the best private chef in Indonesia? myCHEF Indonesia has been Bali's longest-running private chef booking service since 2012, with background-checked chefs across 24 Bali neighborhoods plus Jakarta. We've cooked thousands of villa dinners — Mediterranean, Balinese, Asian fusion, vegan, and dietary-restricted menus. WhatsApp +62 822-3756-5997 — most bookings confirmed in under an hour.",
  'private-chef-for-events': 'myCHEF places private chefs at events across Bali — villa parties, wedding rehearsal dinners, corporate offsites, milestone birthdays, retreat catering. Chef arrives at your venue, shops fresh, cooks on-site, plates and serves, cleans up. Equipment, plating, and cleanup all included in the chef rate.',
  'luxury-chef-indonesia': 'Luxury private chef service in Indonesia — multi-course tasting menus delivered in your villa kitchen by chefs trained at international hotel groups and European restaurants. Sommelier wine pairing available, dedicated waiter and bartender add-ons, full menu customisation. The same restaurant-grade experience as a Michelin tasting menu, set in your own villa terrace overlooking Bali rice fields or beachfront.',
  'wedding-catering-indonesia': 'myCHEF Indonesia handles wedding catering for intimate Bali weddings (8-50 guests). Chef teams scaled to event size, multi-course tasting menus or family-style sharing feasts, sommelier-paired wines, full waiter and bartender service. Years of experience with Bali villa kitchens, wedding planners, and the timing demands of ceremony + cocktail + reception sequences.',
  'private-dining-indonesia': 'Private dining in Indonesia means a chef in your villa kitchen cooking a custom menu — not pre-made catering trays delivered cold. myCHEF chefs shop fresh, cook on-site, plate each course directly to your guests, and clean up before leaving. The interactive private-restaurant experience, in your home.',
  'healthy-meal-delivery-indonesia': 'Looking for healthy meal delivery in Indonesia? myCHEF goes one better — a private chef cooks fresh in YOUR kitchen on a weekly meal-prep contract. Anti-inflammatory, low-sugar, organic-only, vegan, gluten-free, paleo, low-carb — all customisable. Better than meal delivery: nothing pre-cooked, nothing reheated, the chef adjusts to your taste.',
  'private-chef-booking-indonesia': 'Book a private chef in Indonesia in under an hour. WhatsApp +62 822-3756-5997 with date, area, guest count, and any cuisine or dietary preferences. Receive a chef profile and sample menu within an hour during operating hours (09:00-22:00 WIB daily). Booking 2+ days in advance gives the widest chef + menu choice; same-day booking usually possible in Canggu, Seminyak, Ubud.',
  'chef-for-hire-indonesia': 'Hire a chef in Indonesia for one night, weekly meal-prep, or full-time household chef placement. myCHEF handles the chef sourcing, background-check, food-safety certification, and ongoing operations support. You get a vetted professional chef without managing the recruitment, payroll, or HR overhead. From single-night villa dinners (Rp 800k/hr, 3-hour min) to long-term household chef contracts.',
};

function keywordPage(k: KeywordDef): PageConfig {
  const url = `${ORIGIN}/${k.slug}`;
  const lead = KEYWORD_LEAD[k.slug] || k.description;
  const bodyContent = `<h1>${htmlEsc(k.title.split('|')[0].trim())}</h1>
<p>${htmlEsc(lead)}</p>
<h2>Why myCHEF</h2>
<ul>
  <li>Operating in Bali since 2012 — 13+ year track record</li>
  <li>Background-checked + food-safety certified chefs</li>
  <li>Commercial liability insurance on every booking</li>
  <li>Custom menus — Mediterranean, Asian fusion, Balinese, vegan, halal, dietary-restricted</li>
  <li>Equipment, plating, and cleanup included in the chef rate</li>
  <li>WhatsApp response under 10 minutes during operating hours</li>
</ul>
<h2>Pricing</h2>
<p>From Rp 800,000 per hour (3-hour minimum) plus ingredients at cost. Add-on staff: waiter Rp 300k/hr, bartender Rp 400k/hr, sommelier Rp 500k/hr. Equipment, plating, and cleanup are included.</p>
<h2>Service area across Indonesia</h2>
<p>All major Bali neighborhoods (Canggu, Seminyak, Ubud, Uluwatu, Nusa Dua, Sanur, Jimbaran, Kuta, plus 16 other areas) and central Jakarta (Menteng, Kebayoran Baru, SCBD, Senayan, Pondok Indah, Kemang, and 4 other areas).</p>
<h2>How to book</h2>
<ol>
  <li>WhatsApp +62 822-3756-5997 with date, area, guest count, cuisine + dietary preferences.</li>
  <li>Receive chef profile + sample menu within an hour.</li>
  <li>50% deposit reserves the chef for your dates.</li>
  <li>Chef arrives 2-3 hours before service, cooks, plates, serves, cleans up.</li>
</ol>
<h2>Common cuisines requested</h2>
<p>Mediterranean (most-requested for villa dinners), traditional Balinese (rijsttafel + bebek betutu), Asian fusion (pan-Asian + Japanese sashimi), modern European tasting menus, vegan + plant-based, halal-certified, gluten-free, and any dietary-restricted combination.</p>`;
  return {
    slug: k.slug,
    title: k.title,
    description: clip(k.description, 155),
    changefreq: 'monthly',
    priority: 0.7,
    bodyContent,
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
    bodyContent: `<h1>Private Chef in Jakarta — In-Villa Dining &amp; Corporate Catering</h1>
<p>myCHEF Indonesia supplies background-checked private chefs across Jakarta — for villa rentals, expat homes, corporate dinners, wedding rehearsals, and recurring household chef arrangements. Same model as our Bali operation: chef arrives, shops, cooks, plates, serves, cleans the kitchen.</p>
<h2>Jakarta neighborhoods we cover</h2>
<ul>
  <li><a href="/private-chef-menteng">Menteng</a></li>
  <li><a href="/private-chef-kebayoran-baru">Kebayoran Baru</a></li>
  <li><a href="/private-chef-pondok-indah">Pondok Indah</a></li>
  <li><a href="/private-chef-senayan">Senayan</a></li>
  <li><a href="/private-chef-scbd">SCBD</a></li>
  <li><a href="/private-chef-kemang">Kemang</a></li>
  <li><a href="/private-chef-pantai-indah-kapuk">Pantai Indah Kapuk</a></li>
  <li><a href="/private-chef-kelapa-gading">Kelapa Gading</a></li>
  <li><a href="/private-chef-kuningan">Kuningan</a></li>
  <li><a href="/private-chef-puri-indah">Puri Indah</a></li>
</ul>
<h2>Cuisines available in Jakarta</h2>
<p>Mediterranean, modern European, Asian fusion, traditional Indonesian, vegan, and dietary-restricted menus (gluten-free, dairy-free, halal, kosher).</p>
<h2>Pricing in Jakarta</h2>
<p>From Rp 800,000 per hour, 3-hour minimum. Ingredients billed at cost. Add-on staff: waiter Rp 300k/hr, bartender Rp 400k/hr, sommelier Rp 500k/hr.</p>
<p>WhatsApp +62 822-3756-5997 — most Jakarta bookings confirmed within an hour during operating hours.</p>`,
  },
  {
    slug: 'villa-partners',
    title: 'Villa Manager Chef Partnership in Bali — myCHEF Indonesia',
    description: 'myCHEF supplies background-checked private chefs to Bali villas, villa-rental agencies, and concierge teams. On-call coverage, liability insurance, 13+ year track record.',
    changefreq: 'monthly', priority: 0.7,
    bodyContent: `<h1>Villa Manager Chef Partnership in Bali</h1>
<p>myCHEF supplies background-checked private chefs to villa-rental agencies, concierge teams, and villa managers across Bali on a recurring partnership basis. Your guests get a private chef in their villa within hours; you get a 13-year operator covering liability, food safety, and consistent service quality.</p>
<h2>On-call coverage, 09:00–22:00 WIB</h2><p>Average WhatsApp response under 10 minutes. Most bookings confirmed within an hour, including same-day in Canggu, Seminyak, Ubud.</p>
<h2>Background-checked + insured</h2><p>Every chef is identity-verified, criminal-checked, and food-safety certified. Commercial liability insurance covers every booking.</p>
<h2>Single point of contact</h2><p>One account manager handles all bookings for your villa portfolio. One WhatsApp thread, one invoice schedule.</p>
<h2>Consistent guest experience</h2><p>Standardised menu briefing, plating, and clean-up protocol across every chef.</p>
<h2>Partnership models</h2>
<ul>
  <li><strong>Per-booking referral:</strong> standard chef rate, you take a referral commission.</li>
  <li><strong>White-label chef supply:</strong> chefs operate under your villa brand.</li>
  <li><strong>Resident chef placement:</strong> long-stay chef on-site weekly or full-time.</li>
</ul>
<h2>How to start</h2>
<ol>
  <li>WhatsApp +62 822-3756-5997 mentioning "villa partnership" + your portfolio size.</li>
  <li>30-minute call: pricing, commission structure, chef briefing protocol.</li>
  <li>Trial booking: one chef, one villa, one weekend.</li>
  <li>Roll out across your portfolio with the partnership terms that fit your model.</li>
</ol>`,
  },
  {
    slug: 'about',
    title: 'About myCHEF Indonesia — Private Chef Service in Bali Since 2012',
    description: 'myCHEF is Bali\'s longest-running private chef booking service. Background-checked chefs, 13+ years in Bali hospitality, 24 service areas. Office in Denpasar.',
    changefreq: 'monthly', priority: 0.85,
    bodyContent: `<h1>About myCHEF Indonesia — Bali's Private Chef Service Since 2012</h1>
<p>myCHEF Indonesia has been booking professional private chefs into Bali villas, family homes, and event venues for over 13 years. We started small in 2012 with a handful of chefs in Seminyak; today we serve 24 neighborhoods across Bali plus Jakarta, with a roster of background-checked chefs covering Mediterranean, modern European, Asian fusion, Balinese, vegan, and dietary-restricted menus.</p>
<h2>Operating since 2012</h2>
<p>13+ years of private dining in Bali villas. We have been booking chefs since the year most Bali villa-rental companies were founded.</p>
<h2>Every chef is background-checked</h2>
<p>Identity verified, criminal background checked, and food-safety certified before joining the roster. Every booking is covered by commercial liability insurance.</p>
<h2>24 Bali neighborhoods covered</h2>
<p>Canggu, Seminyak, Uluwatu, Ubud, Nusa Dua, Sanur, Jimbaran, Kuta, Pererenan, Berawa, Petitenget, Kerobokan, Legian, Pecatu, Bukit, Ungasan, Tabanan, Tanah Lot, Tegallalang, Gianyar, Denpasar, Lovina, Amed, Candidasa, Padang Bai.</p>
<h2>Real chefs, real food</h2>
<p>Our chefs are professional cooks with restaurant experience — many trained in Europe or at international hotel groups before joining myCHEF. They cook on the spot in your kitchen, not pre-made catering food.</p>
<h2>Office</h2>
<p>Jl. Tukad Barito Timur III No.16, Panjer, Denpasar Selatan, Kota Denpasar, Bali 80226.</p>
<p>WhatsApp +62 822-3756-5997 · indonesia@mychef.id · 09:00–22:00 WIB daily.</p>`,
  },
  {
    slug: 'menus',
    title: 'Sample Menus — Private Chef in Bali | myCHEF Indonesia',
    description: 'Sample menus from myCHEF private chefs in Bali: Mediterranean, Asian fusion, Balinese, modern European, vegan, dietary-restricted. Custom menus for every occasion.',
    changefreq: 'monthly', priority: 0.8,
    bodyContent: `<h1>Sample Menus by Cuisine — Private Chef in Bali</h1>
<p>Browse sample menus our chefs cook regularly across Bali. Every booking is fully customised to your guests, dietary needs, occasion, and the produce that's freshest in the market that morning. Use these as starting points — your final menu will be unique to your event.</p>
<h2>Mediterranean</h2><p>Olive oil, fresh seafood, charred vegetables, slow-cooked lamb. Perfect for Bali's coastal lifestyle and warm-evening villa dining.</p>
<h2>Asian Fusion</h2><p>Modern interpretations of Indonesian, Thai, Japanese and Chinese flavors — designed to surprise and delight without losing the essence.</p>
<h2>Traditional Balinese</h2><p>Authentic rijsttafel, satay, lawar, and bebek betutu prepared by chefs trained in classical Balinese technique.</p>
<h2>Modern European</h2><p>Plated multi-course tasting menus in the style of contemporary European fine dining — French, Italian, Nordic.</p>
<h2>Vegan & Plant-Based</h2><p>Full-flavor plant-based menus that don't compromise — for vegan guests, mixed groups, and wellness retreats.</p>
<h2>Dietary Restricted</h2><p>Gluten-free, dairy-free, halal, kosher, low-carb, paleo. Tell us the restriction; the chef builds the menu.</p>`,
  },
  {
    slug: 'menus/mediterranean',
    title: 'Mediterranean Private Chef Menu in Bali — Sample Menus | myCHEF',
    description: 'Sample Mediterranean menus from myCHEF private chefs in Bali. 3-course villa dinners, 5-course tasting menus, family-style sharing feasts. From Rp 4.2M for 6 guests.',
    changefreq: 'monthly', priority: 0.8,
    bodyContent: `<h1>Mediterranean Private Chef Menu — Bali</h1>
<p>Mediterranean cooking is the most-requested cuisine for myCHEF villa dinners in Bali — olive oil, charred vegetables, fresh seafood from Jimbaran, slow-cooked lamb, brown-butter pasta. These three sample menus are the starting points our chefs work from. Every menu is rebuilt for your guests, dietary needs, and what's freshest in the market that morning.</p>
<h2>Three-Course Mediterranean Villa Dinner</h2>
<p>Rp 4.2M for 6 guests, all-in (chef + ingredients).</p>
<ul>
  <li><strong>Starter:</strong> Burrata, heirloom tomatoes, basil oil, sourdough crisps</li>
  <li><strong>Main:</strong> Slow-cooked lamb shoulder, saffron jus, charred fennel, smoked cauliflower</li>
  <li><strong>Dessert:</strong> Coconut panna cotta, Tegallalang strawberries, basil sugar</li>
</ul>
<h2>Five-Course Mediterranean Tasting Menu</h2>
<p>Rp 7.8M for 6 guests, all-in (chef + ingredients + sommelier add-on optional).</p>
<ul>
  <li><strong>Amuse-bouche:</strong> Olive tapenade on charred bread, Sicilian anchovy</li>
  <li><strong>First:</strong> Burrata, peach, balsamic, basil</li>
  <li><strong>Second:</strong> Hand-rolled cavatelli, brown butter, sage, brown crab</li>
  <li><strong>Third:</strong> Wood-fired sea bass, salsa verde, charred lemon</li>
  <li><strong>Dessert:</strong> Affogato with house-made vanilla gelato</li>
</ul>
<h2>Family-Style Mediterranean Sharing Feast</h2>
<p>Rp 5.5M for 8-10 guests, all-in (chef + ingredients).</p>
<ul>
  <li><strong>Mezze:</strong> Hummus, tzatziki, baba ganoush, charred flatbread, olives, dolma</li>
  <li><strong>Salad:</strong> Fattoush — heirloom tomato, cucumber, sumac, pomegranate, mint</li>
  <li><strong>Mains (sharing):</strong> Whole roast lamb shoulder, saffron rice, roasted aubergine, slow-grilled vegetables</li>
  <li><strong>Dessert:</strong> Baklava, honey ice cream, fresh figs</li>
</ul>
<p>WhatsApp +62 822-3756-5997 for a Mediterranean menu tailored to your event.</p>`,
  },
  {
    slug: 'menus/balinese',
    title: 'Balinese Private Chef Menu in Bali — Sample Menus | myCHEF',
    description: 'Sample traditional + modern Balinese menus from myCHEF private chefs. Rijsttafel sharing feasts, modern Balinese tasting menus. From Rp 4.8M for 6-8 guests.',
    changefreq: 'monthly', priority: 0.75,
    bodyContent: `<h1>Balinese Private Chef Menu — Bali</h1>
<p>Traditional Balinese cooking — base genep spice pastes, slow-roasted bebek betutu wrapped in banana leaf, sambal trio, lawar — prepared in your villa kitchen by chefs trained in classical Balinese technique. We can also do modern Balinese tasting menus that reframe traditional flavors as plated multi-course dining.</p>
<h2>Traditional Balinese Rijsttafel — Sharing Feast</h2>
<p>Rp 4.8M for 6-8 guests, all-in.</p>
<ul>
  <li><strong>Mezze:</strong> Lawar (vegetable + coconut salad), sambal matah, urap, tempeh manis, krupuk</li>
  <li><strong>Mains:</strong> Bebek betutu (slow-roasted duck), ikan bakar (grilled fish), satay lilit, ayam pelalah, sayur urap</li>
  <li><strong>Sides:</strong> Steamed rice, yellow rice, sambal trio (matah, terasi, hijau)</li>
  <li><strong>Dessert:</strong> Dadar gulung (pandan crepes), klepon, tropical fruit selection</li>
</ul>
<h2>Modern Balinese Tasting Menu — 5 Courses</h2>
<p>Rp 6.8M for 6 guests, all-in.</p>
<ul>
  <li><strong>Amuse-bouche:</strong> Sambal matah on coconut crisp, jicama, lime</li>
  <li><strong>First:</strong> Lawar of green papaya, betel leaf, smoked candlenut</li>
  <li><strong>Second:</strong> Sayur tabu broth, banana flower, kaffir lime, soft tofu</li>
  <li><strong>Main:</strong> Bebek betutu — slow-roasted duck wrapped in banana leaf, base genep spice paste, yellow rice</li>
  <li><strong>Dessert:</strong> Coconut + palm sugar custard, black rice, fresh mango</li>
</ul>
<p>WhatsApp +62 822-3756-5997 for a Balinese menu tailored to your event.</p>`,
  },
  {
    slug: 'menus/asian-fusion',
    title: 'Asian Fusion Private Chef Menu in Bali — Sample Menus | myCHEF',
    description: 'Sample Asian fusion menus from myCHEF private chefs in Bali. Pan-Asian tasting menus, family-style sharing. Modern Indonesian + Japanese + Thai + Korean.',
    changefreq: 'monthly', priority: 0.75,
    bodyContent: `<h1>Asian Fusion Private Chef Menu — Bali</h1>
<p>Modern Asian fusion — Japanese sashimi, Thai broths, Sichuan chili crisp, Korean fried chicken, hand-pulled noodles. Our chefs interpret pan-Asian flavors for villa dining without losing the essence of each cuisine.</p>
<h2>Pan-Asian Tasting Menu — 5 Courses</h2>
<p>Rp 5.8M for 6 guests, all-in (chef + ingredients).</p>
<ul>
  <li><strong>Amuse-bouche:</strong> Yellowtail sashimi, ponzu, jalapeño, micro shiso</li>
  <li><strong>First:</strong> Tom yum cappuccino with prawn dumpling, lemongrass air</li>
  <li><strong>Second:</strong> Hand-pulled biang biang noodles, brown butter, chili crisp, soft yolk</li>
  <li><strong>Main:</strong> Miso-glazed black cod, charred bok choy, ginger jus, sesame foam</li>
  <li><strong>Dessert:</strong> Pandan crème brûlée, coconut sorbet, palm sugar caramel</li>
</ul>
<h2>Family-Style Asian Fusion Sharing</h2>
<p>Rp 5.2M for 8-10 guests, all-in.</p>
<ul>
  <li><strong>Sharing Cold:</strong> Tuna tataki, smashed cucumber, Sichuan chili oil, coriander</li>
  <li><strong>Sharing Hot:</strong> Korean fried chicken, gochujang glaze, pickled daikon, sesame</li>
  <li><strong>Mains:</strong> Whole roast duck (Peking-style), pancakes, hoisin, spring onion</li>
  <li><strong>Sides:</strong> Garlic bok choy, jasmine rice, kimchi</li>
  <li><strong>Dessert:</strong> Mango sticky rice, coconut cream, salted palm sugar</li>
</ul>
<p>WhatsApp +62 822-3756-5997 for an Asian fusion menu tailored to your event.</p>`,
  },
  {
    slug: 'menus/vegan',
    title: 'Vegan & Plant-Based Private Chef Menu in Bali | myCHEF',
    description: 'Sample vegan + plant-based menus from myCHEF private chefs in Bali. Tasting menus, Mediterranean sharing feasts. From Rp 4.6M for 8 guests.',
    changefreq: 'monthly', priority: 0.75,
    bodyContent: `<h1>Vegan &amp; Plant-Based Private Chef Menu — Bali</h1>
<p>Full-flavor plant-based menus that don't compromise. For vegan guests, mixed groups, wellness retreats, and yoga teacher trainings. We work with local Tegallalang and Tabanan organic farms for the freshest produce.</p>
<h2>Plant-Based Tasting Menu — 5 Courses</h2>
<p>Rp 5.4M for 6 guests, all-in (chef + ingredients).</p>
<ul>
  <li><strong>Amuse-bouche:</strong> Smoked beetroot tartare, capers, dill, sourdough crisp</li>
  <li><strong>First:</strong> Charred cauliflower, romesco, hazelnut crumble, parsley oil</li>
  <li><strong>Second:</strong> Hand-rolled cavatelli, brown-butter mushroom ragu, lemon zest</li>
  <li><strong>Main:</strong> Wood-roasted celeriac steak, miso jus, charred greens, smoked salt</li>
  <li><strong>Dessert:</strong> Coconut + dark chocolate ganache, raspberry coulis, cocoa nibs</li>
</ul>
<h2>Vegan Mediterranean Sharing Feast</h2>
<p>Rp 4.6M for 8 guests, all-in.</p>
<ul>
  <li><strong>Mezze:</strong> Hummus, baba ganoush, muhammara, olives, dolma, charred flatbread</li>
  <li><strong>Salad:</strong> Fattoush — heirloom tomato, cucumber, sumac, pomegranate, mint, sourdough</li>
  <li><strong>Mains (sharing):</strong> Slow-roasted whole cauliflower, tahini, pomegranate. Stuffed peppers with farro + walnut. Roasted aubergine with smoked tomato</li>
  <li><strong>Dessert:</strong> Vegan baklava, coconut ice cream, fresh figs</li>
</ul>
<p>WhatsApp +62 822-3756-5997 for a vegan menu tailored to your event.</p>`,
  },
  {
    slug: 'chefs',
    title: 'Our Private Chefs in Bali — Background-Checked & Certified | myCHEF',
    description: 'Meet myCHEF\'s network of background-checked private chefs in Bali. Mediterranean, Balinese, Asian fusion, vegan, wedding catering specialists. Insured, food-safety certified.',
    changefreq: 'monthly', priority: 0.75,
    bodyContent: `<h1>Our Private Chefs in Bali</h1>
<p>myCHEF's chef network covers the full spectrum of cuisines and event types across Bali. Every chef on the roster has been identity-verified, criminal-checked, and food-safety certified before their first booking. Many trained in European restaurants or international hotel groups before joining myCHEF.</p>
<h2>Background-checked</h2><p>Every chef is identity-verified and criminal-record-checked. Many hold international hospitality references.</p>
<h2>Food-safety certified</h2><p>HACCP-aware kitchen practice, allergen handling protocols, temperature control — all standard.</p>
<h2>Insured & supported</h2><p>Commercial liability insurance covers every booking. Operations team on WhatsApp throughout your event.</p>
<h2>Specializations on the roster</h2>
<ul>
  <li>Mediterranean & modern European</li>
  <li>Traditional Balinese (rijsttafel, betutu, lawar)</li>
  <li>Asian fusion (Japanese, Thai, Korean)</li>
  <li>Vegan and plant-based</li>
  <li>Wedding multi-course catering</li>
  <li>Wood-fired and grill cooking</li>
  <li>Pastry and dessert specialists</li>
  <li>Sommelier-paired tasting menus</li>
  <li>Private retreat and yoga-event cooking</li>
  <li>Halal-certified menu design</li>
  <li>Gluten-free and allergen-managed kitchens</li>
  <li>Children-friendly menu adaptation</li>
</ul>`,
  },
  {
    slug: 'faq',
    title: 'Private Chef in Bali — Frequently Asked Questions | myCHEF Indonesia',
    description: '20 common questions about hiring a private chef in Bali: pricing, booking, cuisines, dietary restrictions, service area, trust & safety. Direct answers from myCHEF Indonesia.',
    changefreq: 'monthly', priority: 0.8,
    bodyContent: `<h1>Private Chef in Bali — Frequently Asked Questions</h1>
<p>20 of the most common questions guests ask about hiring a private chef in Bali. Don't see your question? WhatsApp +62 822-3756-5997 — we respond in under 10 minutes during operating hours.</p>
${FAQ_MASTER.map(f => `<h2>${htmlEsc(f.cat || '')}: ${htmlEsc(f.q)}</h2><p>${htmlEsc(f.a)}</p>`).join('\n')}`,
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
  // Jakarta neighborhood pages: pre-render gives Google a correct canonical + Indonesian-language title.
  // Without this entry Vercel falls back to homepage index.html, which sets canonical to https://mychef.id/
  // and signals these pages are duplicates of the homepage. Full rich content is served by the React SPA.
  {
    slug: 'private-chef-menteng',
    title: 'Sewa Chef ke Rumah di Menteng Jakarta | Private Chef Profesional — myCHEF',
    description: 'Sewa private chef ke rumah di Menteng Jakarta Pusat. Menu fine dining custom, harga dari Rp 800k/jam. Chef berpengalaman & terverifikasi. WhatsApp sekarang!',
    changefreq: 'weekly', priority: 0.8,
    bodyContent: `<h1>Sewa Chef ke Rumah di Menteng Jakarta</h1>
<p>myCHEF Indonesia menyediakan layanan private chef profesional di kawasan Menteng, Jakarta Pusat. Chef berpengalaman datang ke rumah Anda, memasak menu fine dining custom, menyajikan hidangan, dan membereskan dapur — layanan lengkap mulai dari Rp 800.000/jam (minimum 3 jam).</p>
<h2>Apa itu private chef (sewa chef ke rumah)?</h2>
<p>Private chef adalah chef profesional yang Anda sewa untuk memasak langsung di dapur Anda. Berbeda dengan catering, private chef belanja bahan segar, memasak di tempat, menyajikan tiap hidangan langsung ke meja tamu, lalu membereskan dapur sebelum pulang.</p>
<h2>Harga private chef di Menteng</h2>
<p>Mulai Rp 800.000 per jam, minimum 3 jam. Bahan-bahan ditagih terpisah sesuai harga pasar. Staf tambahan: pelayan Rp 300.000/jam, bartender Rp 400.000/jam, sommelier Rp 500.000/jam.</p>
<h2>Area yang dilayani di Menteng</h2>
<p>Kami melayani seluruh kawasan Menteng tanpa biaya transportasi tambahan: Menteng Dalam, Menteng Atas, Menteng Tenggara, Gondangdia, Pegangsaan, Cikini, Kebon Sirih, dan sekitarnya.</p>
<h2>Cara pesan</h2>
<ol>
  <li>WhatsApp +62 822-3756-5997 dengan tanggal acara, jumlah tamu, dan preferensi menu.</li>
  <li>Terima profil chef + contoh menu dalam waktu satu jam (jam operasional 09:00-22:00 WIB).</li>
  <li>Chef tiba 2-3 jam sebelum serving time, belanja bahan, memasak, menyajikan, dan membereskan dapur.</li>
</ol>`,
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
    '## Sub-area pages (specific Bali neighborhoods within cities)',
    '',
    '- Echo Beach, Canggu — https://mychef.id/echo-beach-private-chef',
    '- Batu Bolong, Canggu — https://mychef.id/batu-bolong-private-chef',
    '- Bingin, Uluwatu — https://mychef.id/bingin-private-chef',
    '- Penestanan, Ubud — https://mychef.id/penestanan-private-chef',
    '',
    '## Specialty event pages',
    '',
    '- Retreat catering (yoga, wellness, corporate, YTT) — https://mychef.id/retreats',
    '- Catering alternative positioning — https://mychef.id/catering',
    '- Proposal dinner with sommelier + setup — https://mychef.id/proposal-dinner',
    '- Honeymoon villa dinners — https://mychef.id/honeymoon-chef',
    '- Villa partnership for villa managers — https://mychef.id/villa-partners',
    '',
    '## Guides',
    '',
    '- Complete booking guide — https://mychef.id/guide/private-chef-bali',
    '- Bali / Indonesian cuisine glossary — https://mychef.id/guide/bali-cuisine-glossary',
    '',
    '## Pricing',
    '',
    '- Chef fee: from Rp 800,000 per hour (3-hour minimum)',
    '- Ingredients: separate, billed at cost',
    '- Add-on staff: waiter Rp 300k/hr, bartender Rp 400k/hr, sommelier Rp 500k/hr',
    '- Equipment, plating, and cleanup are included in the chef rate',
    '- Specialty pricing: proposal dinner Rp 6M for 2 (5-course + sommelier), honeymoon dinner from Rp 4.5M for 2 (3-course)',
    '',
    '## Cuisines (sample menus published)',
    '',
    '- [Mediterranean](https://mychef.id/menus/mediterranean) — 3-course Rp 4.2M, 5-course Rp 7.8M, family-style Rp 5.5M',
    '- [Balinese](https://mychef.id/menus/balinese) — rijsttafel Rp 4.8M, modern tasting Rp 6.8M',
    '- [Asian Fusion](https://mychef.id/menus/asian-fusion) — pan-Asian tasting Rp 5.8M, family sharing Rp 5.2M',
    '- [Vegan / Plant-based](https://mychef.id/menus/vegan) — plant tasting Rp 5.4M, Mediterranean sharing Rp 4.6M',
    '- [Modern European](https://mychef.id/menus/modern-european) — 6-course tasting Rp 7.2M, Italian sharing Rp 5.8M',
    '- [Halal-certified](https://mychef.id/menus/halal) — multi-course Rp 5.4M, Indonesian sharing Rp 4.5M',
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
  bodyContent: `<h1>Private Chef in Bali — In-Villa Dining Since 2012</h1>
<p>Background-checked private chefs cook Mediterranean and international tasting menus in your villa. From Rp 800,000 per hour, 3-hour minimum. WhatsApp +62 822-3756-5997 — most bookings confirmed in under an hour.</p>
<p>myCHEF is Bali's longest-running private chef booking service. Our chefs arrive at your villa, shop for ingredients, cook a custom menu in your kitchen, plate and serve, then clean up. Mediterranean, modern European, Asian fusion, Balinese, vegan and dietary-restricted menus. Serving Canggu, Seminyak, Uluwatu, Ubud, Nusa Dua, Sanur, Jimbaran, and 17 other Bali areas.</p>
<h2>Why myCHEF</h2>
<ul>
  <li>Operating in Bali since 2012 — 13+ year track record</li>
  <li>Every chef background-checked + food-safety certified</li>
  <li>Commercial liability insurance on every booking</li>
  <li>Transparent pricing: from Rp 800k/hour, 3-hour minimum</li>
  <li>Equipment, plating, and cleanup all included in the chef rate</li>
  <li>Average WhatsApp response under 10 minutes during operating hours</li>
</ul>
<h2>Pricing</h2>
<p>Chef fee: from Rp 800,000 per hour, 3-hour minimum. Ingredients billed at cost. Add-on staff: waiter Rp 300,000/hr, bartender Rp 400,000/hr, sommelier Rp 500,000/hr.</p>
<h2>Service area — 24 Bali neighborhoods</h2>
<p>Canggu, Seminyak, Petitenget, Kerobokan, Legian, Kuta, Jimbaran, Uluwatu, Pecatu, Bukit, Ungasan, Nusa Dua, Sanur, Denpasar, Tabanan, Tanah Lot, Ubud, Tegallalang, Gianyar, Lovina, Amed, Candidasa, Padang Bai, plus Pererenan and Berawa.</p>
<h2>Cuisines</h2>
<p>Mediterranean, modern European, Asian fusion, traditional Balinese, vegan, and dietary-restricted menus (gluten-free, dairy-free, kosher, halal). Each chef profile shows their specializations.</p>
<h2>Common occasions booked</h2>
<ul>
  <li>One-night villa dinners (most-booked event type)</li>
  <li>Birthdays, anniversaries, proposals</li>
  <li>Wedding rehearsal dinners and small ceremonies</li>
  <li>Corporate offsite dinners and retreats</li>
  <li>Recurring weekly meal-prep for expat families</li>
  <li>Full-time household chef arrangements</li>
</ul>
<h2>Frequently asked questions</h2>
${HOMEPAGE_FAQS.map(f => `<h3>${htmlEsc(f.q)}</h3><p>${htmlEsc(f.a)}</p>`).join('\n')}
<h2>Contact myCHEF</h2>
<p>WhatsApp: +62 822-3756-5997 (primary)<br>
Email: indonesia@mychef.id<br>
Hours: 09:00–22:00 WIB daily<br>
Office: Jl. Tukad Barito Timur III No.16, Panjer, Denpasar Selatan, Kota Denpasar, Bali 80226</p>`,
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

function contentPageToConfig(cp: typeof CONTENT_PAGES[keyof typeof CONTENT_PAGES]): PageConfig {
  // Build pre-render bodyContent from the structured ContentPageProps (same data the
  // React component uses to render — single source of truth, no copy duplication).
  const sections = cp.sections.map(s => {
    let html = `<h2>${s.heading.replace(/</g, '&lt;')}</h2>`;
    if (s.body && typeof s.body === 'string') html += `<p>${(s.body as string).replace(/</g, '&lt;')}</p>`;
    if (s.bullets) html += `<ul>${s.bullets.map(b => `<li>${b.replace(/</g, '&lt;')}</li>`).join('')}</ul>`;
    if (s.steps) html += `<ol>${s.steps.map(st => `<li><strong>${st.title.replace(/</g, '&lt;')}:</strong> ${st.description.replace(/</g, '&lt;')}</li>`).join('')}</ol>`;
    return html;
  }).join('\n');
  const bodyContent = `<h1>${cp.h1.replace(/</g, '&lt;')}</h1>
<p>${cp.lead.replace(/</g, '&lt;')}</p>
${sections}`;
  return {
    slug: cp.slug,
    title: cp.title,
    description: cp.description,
    schema: cp.structuredData as object | object[],
    changefreq: 'monthly',
    priority: 0.75,
    bodyContent,
  };
}

function allPages(): PageConfig[] {
  return [
    HOMEPAGE,
    ...Object.values(CITY_DATA).map(cityPage),
    ...SERVICES.map(servicePage),
    ...KEYWORD_PAGES.map(keywordPage),
    ...STATIC_PAGES,
    ...Object.values(CONTENT_PAGES).map(contentPageToConfig),
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

  // Per-page geo:position (city pages) — overrides the site-wide ID-BA region tag with the
  // exact coordinates so Google can place each city page on its local map graph.
  if (page.geoPosition) {
    if (/<meta name="geo\.position"/i.test(html)) {
      html = html.replace(/<meta name="geo\.position"[^>]*\/?>/i, `<meta name="geo.position" content="${attr(page.geoPosition)}" />`);
    } else {
      html = html.replace('</head>', `    <meta name="geo.position" content="${attr(page.geoPosition)}" />\n  </head>`);
    }
    // ICBM is the older co-equivalent of geo.position; harmless to ship both
    if (/<meta name="ICBM"/i.test(html)) {
      html = html.replace(/<meta name="ICBM"[^>]*\/?>/i, `<meta name="ICBM" content="${attr(page.geoPosition.replace(';', ', '))}" />`);
    } else {
      html = html.replace('</head>', `    <meta name="ICBM" content="${attr(page.geoPosition.replace(';', ', '))}" />\n  </head>`);
    }
  }

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

  // Pre-render visible body content (indexed by crawlers + AI engines without JS).
  // Wrapped in <noscript> so it only renders when JS is off — React mounts on top
  // and replaces #root with the interactive UI when JS is on.
  const bodyContentBlock = page.bodyContent ? `    <noscript>
      <main data-prerender="body-content">
        ${page.bodyContent}
      </main>
    </noscript>` : '';

  const internalLinks = `${bodyContentBlock}
    <div hidden aria-hidden="true" data-prerender="internal-links">
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

  // sitemap.html — human-readable sitemap. Vercel serves this directly. Useful for users
  // who want to see the site structure, and for accessibility / non-JS browsing.
  const groups: Record<string, PageConfig[]> = {
    'Home + key entry points': pages.filter(p => p.slug === '' || ['quote','calculator','about','chefs','faq','villa-partners','jakarta'].includes(p.slug)),
    'Bali areas (24 cities + 4 sub-areas)': pages.filter(p => Object.values(CITY_DATA).some(c => c.slug === p.slug) || ['echo-beach-private-chef','batu-bolong-private-chef','bingin-private-chef','penestanan-private-chef','sayan-private-chef','padang-padang-private-chef','pererenan-private-chef','sanur-beach-private-chef'].includes(p.slug)),
    'Specialty event pages': pages.filter(p => ['retreats','catering','proposal-dinner','honeymoon-chef'].includes(p.slug)),
    'Service pages': pages.filter(p => p.slug.startsWith('services/')),
    'Sample menus by cuisine': pages.filter(p => p.slug.startsWith('menus')),
    'Guides': pages.filter(p => p.slug.startsWith('guide/')),
    'Keyword landing pages': pages.filter(p => ['best-private-chef-indonesia','private-chef-for-events','luxury-chef-indonesia','wedding-catering-indonesia','private-dining-indonesia','healthy-meal-delivery-indonesia','private-chef-booking-indonesia','chef-for-hire-indonesia'].includes(p.slug)),
    'Trust + legal': pages.filter(p => ['privacy-policy','terms-of-service','payment-terms','recommended-services','join-our-team'].includes(p.slug)),
  };
  const htmlSitemap = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Sitemap — myCHEF Indonesia | Private Chef in Bali</title>
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://mychef.id/sitemap.html">
<meta name="description" content="Complete site map for myCHEF Indonesia — every page on the private chef booking service for Bali.">
<style>
body{font-family:system-ui,-apple-system,sans-serif;max-width:900px;margin:2rem auto;padding:0 1rem;line-height:1.6;color:#222}
h1{font-size:2rem;margin-bottom:0.5rem}
h2{font-size:1.3rem;margin-top:2rem;color:#0a4a3c;border-bottom:2px solid #0a4a3c33;padding-bottom:0.3rem}
ul{list-style:none;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:0.3rem}
a{color:#0a4a3c;text-decoration:none}
a:hover{text-decoration:underline}
small{color:#666;display:block;margin-top:1.5rem}
</style>
</head>
<body>
<h1>Sitemap — myCHEF Indonesia</h1>
<p>${pages.length} pages on this site. Private chef booking service for Bali, operating since 2012.</p>
${Object.entries(groups).map(([name, list]) => list.length > 0 ? `<h2>${name}</h2>
<ul>${list.map(p => `<li><a href="/${p.slug}">${p.title.replace(' | myCHEF Indonesia', '').replace(' | myCHEF', '').replace(/&/g, '&amp;')}</a></li>`).join('')}</ul>` : '').join('\n')}
<small>This sitemap is for humans. The XML sitemap for search engines is at <a href="/sitemap.xml">/sitemap.xml</a>.</small>
</body>
</html>`;
  await fs.writeFile(resolve(DIST_PUBLIC, 'sitemap.html'), htmlSitemap, 'utf8');
  console.log(`[postbuild] wrote sitemap.html (${htmlSitemap.length} bytes, ${pages.length} pages)`);
}

main().catch(err => {
  console.error('[postbuild] FAILED:', err);
  process.exit(1);
});
