import { useEffect, useRef } from 'react';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  structuredData?: object;
  pathWithoutLang?: string;
}

export default function SEO({
  title,
  description,
  canonical,
  ogImage = 'https://mychef.id/og-image.jpg',
  ogType = 'website',
  keywords = 'private chef Bali, personal chef Indonesia, chef at home Bali, villa chef Seminyak, private dining Bali, cook for hire Bali, Airbnb chef Bali',
  structuredData,
  pathWithoutLang,
}: SEOProps) {
  const structuredDataIdRef = useRef(`seo-structured-data-${Math.random().toString(36).substr(2, 9)}`);
  const { language, getPathWithoutLanguage } = useLocalizedPath();
  
  const currentPath = pathWithoutLang || getPathWithoutLanguage();
  const baseUrl = 'https://mychef.id';
  
  const canonicalUrl = canonical || `${baseUrl}/${language}${currentPath === '/' ? '' : currentPath}`;
  const enUrl = `${baseUrl}/en${currentPath === '/' ? '' : currentPath}`;
  const idUrl = `${baseUrl}/id${currentPath === '/' ? '' : currentPath}`;
  
  useEffect(() => {
    document.title = title;

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

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:url', canonicalUrl, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:site_name', 'myCHEF Indonesia', true);
    updateMetaTag('og:locale', language === 'id' ? 'id_ID' : 'en_ID', true);
    updateMetaTag('og:locale:alternate', language === 'id' ? 'en_ID' : 'id_ID', true);

    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonicalUrl);

    const updateHreflangLink = (lang: string, url: string) => {
      let link = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', lang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    };

    updateHreflangLink('en', enUrl);
    updateHreflangLink('id', idUrl);
    updateHreflangLink('x-default', enUrl);

    const currentScriptId = structuredDataIdRef.current;
    let existingScript = document.getElementById(currentScriptId) as HTMLScriptElement | null;
    
    if (structuredData) {
      if (!existingScript) {
        existingScript = document.createElement('script') as HTMLScriptElement;
        existingScript.id = currentScriptId;
        existingScript.setAttribute('data-seo-structured-data', 'true');
        existingScript.type = 'application/ld+json';
        document.head.appendChild(existingScript);
      }
      existingScript.textContent = JSON.stringify(structuredData);
    } else if (existingScript) {
      existingScript.remove();
    }

    return () => {
      const scriptToRemove = document.getElementById(currentScriptId);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [title, description, canonicalUrl, ogImage, ogType, keywords, structuredData, language, enUrl, idUrl]);

  return null;
}
