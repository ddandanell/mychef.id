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

const LANGUAGES = [
  { 
    code: 'en', 
    name: 'English', 
    nativeName: 'English',
    flag: '🇬🇧'
  },
  { 
    code: 'id', 
    name: 'Indonesian', 
    nativeName: 'Bahasa Indonesia',
    flag: '🇮🇩'
  }
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
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
            Choose Your Language
          </DialogTitle>
          <DialogDescription className="text-center text-foreground/60 text-sm">
            Pilih Bahasa Anda
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
                <span className="text-3xl" role="img" aria-label={language.name}>
                  {language.flag}
                </span>
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
