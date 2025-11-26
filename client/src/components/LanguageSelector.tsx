import { Globe, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const FlagGB = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-8 h-5">
    <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
    <clipPath id="t"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath>
    <g clipPath="url(#s)">
      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
    </g>
  </svg>
);

const FlagID = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-8 h-5">
    <rect width="3" height="1" fill="#CE1126"/>
    <rect width="3" height="1" y="1" fill="#fff"/>
  </svg>
);

const LANGUAGES = [
  { 
    code: 'en', 
    name: 'English', 
    nativeName: 'English',
    Flag: FlagGB
  },
  { 
    code: 'id', 
    name: 'Indonesian', 
    nativeName: 'Bahasa Indonesia',
    Flag: FlagID
  }
];

export default function LanguageSelector() {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);

  const currentLanguage = LANGUAGES.find(lang => lang.code === i18n.language) || LANGUAGES[0];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    localStorage.setItem('i18nextLng', languageCode);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon"
          data-testid="button-language-selector"
          aria-label="Select language"
        >
          <Globe className="h-5 w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md" data-testid="dialog-language-selector">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-serif">
            {t('language.title', 'Choose Your Language')}
          </DialogTitle>
          <DialogDescription className="text-center text-foreground/60 text-sm">
            {t('language.subtitle', 'Select your preferred language')}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-3 py-4">
          {LANGUAGES.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`flex items-center justify-between w-full p-4 rounded-lg border-2 transition-all hover-elevate active-elevate-2 ${
                currentLanguage.code === language.code 
                  ? 'border-primary bg-primary/5' 
                  : 'border-border hover:border-primary/50'
              }`}
              data-testid={`button-language-${language.code}`}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-6 rounded overflow-hidden shadow-sm border border-border/30 flex items-center justify-center">
                  <language.Flag />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-lg">{language.nativeName}</div>
                  <div className="text-foreground/60 text-sm">{language.name}</div>
                </div>
              </div>
              {currentLanguage.code === language.code && (
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary-foreground" />
                </div>
              )}
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
