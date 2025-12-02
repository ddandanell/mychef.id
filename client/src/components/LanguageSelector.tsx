import { Check } from 'lucide-react';
import { useId } from 'react';
import { useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { isValidLanguage } from '@/lib/routes';

const FlagGB = ({ uid }: { uid: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-5 h-3.5 sm:w-6 sm:h-4 rounded-sm overflow-hidden">
    <defs>
      <clipPath id={`s-${uid}`}><path d="M0,0 v30 h60 v-30 z"/></clipPath>
      <clipPath id={`t-${uid}`}><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
    </defs>
    <g clipPath={`url(#s-${uid})`}>
      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#t-${uid})`} stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
    </g>
  </svg>
);

const FlagID = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-5 h-3.5 sm:w-6 sm:h-4 rounded-sm overflow-hidden">
    <rect width="3" height="1" fill="#CE1126"/>
    <rect width="3" height="1" y="1" fill="#fff"/>
  </svg>
);

type SupportedLanguage = 'en' | 'id';

const LANGUAGES: { code: SupportedLanguage; name: string; flagType: 'gb' | 'id' }[] = [
  { 
    code: 'en', 
    name: 'English',
    flagType: 'gb'
  },
  { 
    code: 'id', 
    name: 'Bahasa Indonesia',
    flagType: 'id'
  }
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [location, setLocation] = useLocation();
  const uid = useId();

  const getCurrentLanguage = (): SupportedLanguage => {
    const pathParts = location.split('/').filter(Boolean);
    if (pathParts[0] === 'en' || pathParts[0] === 'id') {
      return pathParts[0];
    }
    const storedLang = localStorage.getItem('i18nextLng');
    if (storedLang === 'en' || storedLang === 'id') {
      return storedLang;
    }
    return 'en';
  };

  const currentLangCode = getCurrentLanguage();
  const currentLanguage = LANGUAGES.find(lang => lang.code === currentLangCode) || LANGUAGES[0];

  const renderFlag = (flagType: 'gb' | 'id', index: number) => {
    if (flagType === 'gb') {
      return <FlagGB uid={`${uid}-${index}`} />;
    }
    return <FlagID />;
  };

  const handleLanguageChange = (newLang: SupportedLanguage) => {
    const pathParts = location.split('/').filter(Boolean);
    let pathWithoutLang = location;
    
    if (pathParts.length > 0 && isValidLanguage(pathParts[0])) {
      pathWithoutLang = '/' + pathParts.slice(1).join('/');
    }
    
    const newPath = `/${newLang}${pathWithoutLang === '/' ? '' : pathWithoutLang}`;
    
    i18n.changeLanguage(newLang);
    localStorage.setItem('i18nextLng', newLang);
    setLocation(newPath);
  };

  return (
    <div className="flex items-center gap-1 sm:gap-2">
      {LANGUAGES.map((language, index) => (
        <button
          key={language.code}
          onClick={() => handleLanguageChange(language.code)}
          className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg transition-all hover-elevate active-elevate-2 border font-semibold text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 min-h-[36px] sm:min-h-[40px] ${
            currentLanguage.code === language.code 
              ? 'bg-primary text-primary-foreground border-primary shadow-md' 
              : 'border-muted hover:border-primary/50 text-foreground bg-white/50'
          }`}
          title={language.name}
          data-testid={`button-language-${language.code}`}
          aria-label={`Switch to ${language.name}`}
        >
          <div className="flex items-center gap-1 sm:gap-1.5">
            {renderFlag(language.flagType, index)}
            <span className="hidden sm:inline">{language.code.toUpperCase()}</span>
            {currentLanguage.code === language.code && (
              <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-2" />
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
