import { useEffect, useRef } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  /**
   * Per-page structured data (e.g. Service, FAQPage, BreadcrumbList).
   * Site-wide Organization/WebSite/ProfessionalService is in client/index.html.
   * Do NOT include aggregateRating here unless it comes from a verified review system.
   * Do NOT include placeholder addresses — we are a service-area business.
   */
  structuredData?: object | object[];
  pathWithoutLang?: string;
}

const FORBIDDEN_KEYS = ['aggregateRating', 'review'] as const;

function stripForbidden<T>(obj: T): T {
  if (Array.isArray(obj)) {
    return obj.map(stripForbidden) as unknown as T;
  }
  if (obj && typeof obj === 'object') {
    const cleaned: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(obj as Record<string, unknown>)) {
      if ((FORBIDDEN_KEYS as readonly string[]).includes(key)) continue;
      cleaned[key] = stripForbidden(value);
    }
    return cleaned as unknown as T;
  }
  return obj;
}

export default function SEO({
  title,
  description,
  canonical,
  ogImage = 'https://mychef.id/og-image.jpg',
  ogType = 'website',
  keywords,
  structuredData,
}: SEOProps) {
  const structuredDataIdRef = useRef(`seo-page-jsonld-${Math.random().toString(36).slice(2, 11)}`);

  const baseUrl = 'https://mychef.id';
  const canonicalUrl = canonical || baseUrl;

  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);

    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:type', ogType, true);
    setMeta('og:url', canonicalUrl, true);
    setMeta('og:image', ogImage, true);
    setMeta('og:site_name', 'myCHEF Indonesia', true);
    setMeta('og:locale', 'en_ID', true);

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);
    setMeta('twitter:url', canonicalUrl);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    const scriptId = structuredDataIdRef.current;
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (structuredData) {
      const cleaned = stripForbidden(structuredData);
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        script.setAttribute('data-seo-page', 'true');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(cleaned);
    } else if (script) {
      script.remove();
    }

    return () => {
      const toRemove = document.getElementById(scriptId);
      if (toRemove) toRemove.remove();
    };
  }, [title, description, canonicalUrl, ogImage, ogType, keywords, structuredData]);

  return null;
}
