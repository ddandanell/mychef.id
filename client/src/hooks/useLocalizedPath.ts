import { useLocation } from 'wouter';
import { isValidLanguage, type SupportedLanguage } from '@/lib/routes';

export function useLocalizedPath() {
  const [location] = useLocation();
  
  const getCurrentLanguage = (): SupportedLanguage => {
    const pathParts = location.split('/').filter(Boolean);
    if (pathParts[0] === 'en' || pathParts[0] === 'id') {
      return pathParts[0];
    }
    const storedLang = localStorage.getItem('i18nextLng');
    if (storedLang === 'en' || storedLang === 'id') {
      return storedLang as SupportedLanguage;
    }
    return 'en';
  };

  const language = getCurrentLanguage();

  const getLocalizedPath = (path: string): string => {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const pathParts = cleanPath.split('/').filter(Boolean);
    
    if (pathParts[0] === 'en' || pathParts[0] === 'id') {
      return `/${language}/${pathParts.slice(1).join('/')}`;
    }
    
    return `/${language}${cleanPath === '/' ? '' : cleanPath}`;
  };

  const getPathWithoutLanguage = (): string => {
    const pathParts = location.split('/').filter(Boolean);
    if (pathParts.length > 0 && isValidLanguage(pathParts[0])) {
      const remaining = pathParts.slice(1).join('/');
      return remaining ? `/${remaining}` : '/';
    }
    return location;
  };

  return { language, getLocalizedPath, getPathWithoutLanguage };
}
