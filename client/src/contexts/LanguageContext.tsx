import { createContext, useContext, useEffect, useMemo, type ReactNode } from 'react';
import { useLocation, useRoute } from 'wouter';
import { useTranslation } from 'react-i18next';

type SupportedLanguage = 'en' | 'id';

interface LanguageContextType {
  language: SupportedLanguage;
  setLanguage: (lang: SupportedLanguage) => void;
  getLocalizedPath: (path: string) => string;
  getAlternateLanguagePath: () => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [location, setLocation] = useLocation();
  const { i18n } = useTranslation();

  const language = useMemo((): SupportedLanguage => {
    const pathParts = location.split('/').filter(Boolean);
    if (pathParts[0] === 'en' || pathParts[0] === 'id') {
      return pathParts[0] as SupportedLanguage;
    }
    const storedLang = localStorage.getItem('i18nextLng');
    if (storedLang === 'en' || storedLang === 'id') {
      return storedLang;
    }
    return 'en';
  }, [location]);

  const pathWithoutLanguage = useMemo(() => {
    const pathParts = location.split('/').filter(Boolean);
    if (pathParts[0] === 'en' || pathParts[0] === 'id') {
      return '/' + pathParts.slice(1).join('/');
    }
    return location;
  }, [location]);

  useEffect(() => {
    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
    localStorage.setItem('i18nextLng', language);
  }, [language, i18n]);

  const setLanguage = (newLang: SupportedLanguage) => {
    const newPath = `/${newLang}${pathWithoutLanguage === '/' ? '' : pathWithoutLanguage}`;
    localStorage.setItem('i18nextLng', newLang);
    i18n.changeLanguage(newLang);
    setLocation(newPath);
  };

  const getLocalizedPath = (path: string): string => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const pathParts = cleanPath.split('/').filter(Boolean);
    if (pathParts[0] === 'en' || pathParts[0] === 'id') {
      return `/${language}/${pathParts.slice(1).join('/')}`;
    }
    return `/${language}${cleanPath === '/' ? '' : cleanPath}`;
  };

  const getAlternateLanguagePath = (): string => {
    const alternateLang = language === 'en' ? 'id' : 'en';
    return `/${alternateLang}${pathWithoutLanguage === '/' ? '' : pathWithoutLanguage}`;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, getLocalizedPath, getAlternateLanguagePath }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function LocalizedLink({ href, children, ...props }: { href: string; children: ReactNode; [key: string]: any }) {
  const { getLocalizedPath } = useLanguage();
  const localizedHref = getLocalizedPath(href);
  
  return (
    <a href={localizedHref} {...props}>
      {children}
    </a>
  );
}
