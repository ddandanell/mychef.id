import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en.json';

const resources = {
  en: { translation: en },
  zh: { translation: en },
  hi: { translation: en },
  es: { translation: en },
  ar: { translation: en },
  fr: { translation: en }
};

const detectionOptions = {
  order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
  lookupQuerystring: 'lng',
  lookupCookie: 'i18nextLng',
  lookupLocalStorage: 'i18nextLng',
  caches: ['localStorage', 'cookie'],
  excludeCacheFor: ['cimode'],
  cookieMinutes: 10080,
  cookieOptions: { path: '/', sameSite: 'strict' as const }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    supportedLngs: ['en', 'zh', 'hi', 'es', 'ar', 'fr'],
    detection: detectionOptions,
    interpolation: {
      escapeValue: false
    },
    debug: false
  });

export default i18n;
