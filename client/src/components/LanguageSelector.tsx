import { Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useId } from 'react';
import { Button } from '@/components/ui/button';

const FlagGB = ({ uid }: { uid: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-6 h-4">
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
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-6 h-4">
    <rect width="3" height="1" fill="#CE1126"/>
    <rect width="3" height="1" y="1" fill="#fff"/>
  </svg>
);

const LANGUAGES = [
  { 
    code: 'en', 
    name: 'English',
    flagType: 'gb' as const
  },
  { 
    code: 'id', 
    name: 'Bahasa Indonesia',
    flagType: 'id' as const
  }
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const uid = useId();

  const langCode = (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0];
  const currentLanguage = LANGUAGES.find(lang => lang.code === langCode) || LANGUAGES[0];

  const renderFlag = (flagType: 'gb' | 'id', index: number) => {
    if (flagType === 'gb') {
      return <FlagGB uid={`${uid}-${index}`} />;
    }
    return <FlagID />;
  };

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    localStorage.setItem('i18nextLng', languageCode);
  };

  return (
    <div className="flex items-center gap-2">
      {LANGUAGES.map((language, index) => (
        <button
          key={language.code}
          onClick={() => handleLanguageChange(language.code)}
          className={`px-3 py-2 rounded-lg transition-all hover-elevate active-elevate-2 border font-semibold text-sm flex items-center gap-2 ${
            currentLanguage.code === language.code 
              ? 'bg-primary text-primary-foreground border-primary shadow-lg' 
              : 'border-muted hover:border-primary/50 text-foreground hover:bg-foreground/5'
          }`}
          title={language.name}
          data-testid={`button-language-${language.code}`}
          aria-label={`Switch to ${language.name}`}
        >
          <div className="flex items-center gap-1.5">
            {renderFlag(language.flagType, index)}
            <span className="hidden sm:inline">{language.code.toUpperCase()}</span>
            {currentLanguage.code === language.code && (
              <Check className="w-4 h-4 stroke-2" />
            )}
          </div>
        </button>
      ))}
    </div>
  );
}
