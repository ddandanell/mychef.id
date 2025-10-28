import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  structuredData?: object;
}

export default function SEO({
  title,
  description,
  canonical = 'https://mychef.id',
  ogImage = 'https://mychef.id/og-image.jpg',
  ogType = 'website',
  keywords = 'private chef Bali, personal chef Indonesia, chef at home Bali, villa chef Seminyak, private dining Bali, cook for hire Bali, Airbnb chef Bali',
  structuredData,
}: SEOProps) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Basic meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', canonical, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:site_name', 'myCHEF Indonesia', true);
    updateMetaTag('og:locale', 'en_ID', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);

    // Handle structured data (JSON-LD)
    const STRUCTURED_DATA_ID = 'seo-structured-data';
    let structuredDataScript = document.getElementById(STRUCTURED_DATA_ID) as HTMLScriptElement | null;
    
    if (structuredData) {
      if (!structuredDataScript) {
        structuredDataScript = document.createElement('script') as HTMLScriptElement;
        structuredDataScript.id = STRUCTURED_DATA_ID;
        structuredDataScript.type = 'application/ld+json';
        document.head.appendChild(structuredDataScript);
      }
      structuredDataScript.textContent = JSON.stringify(structuredData);
    } else if (structuredDataScript) {
      // Remove structured data if none provided
      structuredDataScript.remove();
    }
  }, [title, description, canonical, ogImage, ogType, keywords, structuredData]);

  return null;
}
