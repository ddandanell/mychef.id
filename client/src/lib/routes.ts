export const SUPPORTED_LANGUAGES = ['en', 'id'] as const;
export type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

export const BALI_LOCATIONS = [
  'seminyak', 'canggu', 'ubud', 'sanur', 'nusa-dua', 'uluwatu', 'jimbaran',
  'kuta', 'legian', 'kerobokan', 'petitenget', 'berawa', 'pererenan',
  'tanah-lot', 'tabanan', 'denpasar', 'gianyar', 'tegallalang',
  'amed', 'lovina', 'candidasa', 'padang-bai', 'bukit', 'ungasan', 'pecatu'
] as const;

export const JAKARTA_AREAS = [
  'menteng', 'kebayoran-baru', 'pondok-indah', 'senayan', 'scbd',
  'kemang', 'pantai-indah-kapuk', 'kelapa-gading', 'kuningan', 'puri-indah'
] as const;

export const SERVICES = [
  'villa-parties', 'romantic-dinners', 'birthday-celebrations', 'family-reunions',
  'corporate-events', 'wedding-celebrations', 'cooking-classes', 'weekly-meal-prep'
] as const;

export const KEYWORDS = [
  'best-private-chef-indonesia', 'private-chef-for-events', 'luxury-chef-indonesia',
  'wedding-catering-indonesia', 'private-dining-indonesia', 'healthy-meal-delivery-indonesia',
  'private-chef-booking-indonesia', 'chef-for-hire-indonesia'
] as const;

export const CORE_PAGES = [
  '', 'jakarta', 'quote', 'calculator', 'join-our-team',
  'privacy-policy', 'terms-of-service', 'payment-terms'
] as const;

export function isValidLanguage(lang: string): lang is SupportedLanguage {
  return SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage);
}

export function getPathWithoutLanguage(path: string): string {
  const parts = path.split('/').filter(Boolean);
  if (parts.length > 0 && isValidLanguage(parts[0])) {
    return '/' + parts.slice(1).join('/');
  }
  return path;
}

export function getLanguageFromPath(path: string): SupportedLanguage | null {
  const parts = path.split('/').filter(Boolean);
  if (parts.length > 0 && isValidLanguage(parts[0])) {
    return parts[0];
  }
  return null;
}

export function buildLocalizedPath(lang: SupportedLanguage, slug: string): string {
  const cleanSlug = slug.startsWith('/') ? slug.slice(1) : slug;
  return `/${lang}${cleanSlug ? '/' + cleanSlug : ''}`;
}

export function getCanonicalUrl(lang: SupportedLanguage, slug: string): string {
  return `https://mychef.id${buildLocalizedPath(lang, slug)}`;
}

export function getAlternateUrls(slug: string): { en: string; id: string } {
  return {
    en: getCanonicalUrl('en', slug),
    id: getCanonicalUrl('id', slug)
  };
}
