import { useTranslation } from 'react-i18next';
import { useId } from 'react';
import { motion } from 'framer-motion';

const FlagGB = ({ uid }: { uid: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" className="w-16 h-10">
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
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-16 h-10">
    <rect width="3" height="1" fill="#CE1126"/>
    <rect width="3" height="1" y="1" fill="#fff"/>
  </svg>
);

interface LanguageSplashProps {
  onLanguageSelect: (lang: string) => void;
}

export default function LanguageSplash({ onLanguageSelect }: LanguageSplashProps) {
  const { i18n } = useTranslation();
  const uid = useId();

  const handleSelect = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
    localStorage.setItem('languageSelected', 'true');
    onLanguageSelect(lang);
  };

  return (
    <motion.div 
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-lg w-full mx-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-2 text-foreground">
            myCHEF
          </h1>
          <p className="text-foreground/60 text-lg mb-8">Indonesia</p>
          
          <div className="space-y-3 mb-8">
            <p className="text-xl font-medium text-foreground">Choose Your Language</p>
            <p className="text-foreground/60">Pilih Bahasa Anda</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.button
              onClick={() => handleSelect('en')}
              className="flex flex-col items-center gap-4 p-6 rounded-xl border-2 border-border bg-card hover:border-primary hover:bg-primary/5 transition-all group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-testid="splash-button-english"
            >
              <div className="w-20 h-12 rounded-lg overflow-hidden shadow-md border border-border/30 flex items-center justify-center group-hover:shadow-lg transition-shadow">
                <FlagGB uid={`${uid}-splash-en`} />
              </div>
              <div>
                <div className="font-semibold text-xl text-foreground">English</div>
                <div className="text-foreground/60 text-sm">English</div>
              </div>
            </motion.button>

            <motion.button
              onClick={() => handleSelect('id')}
              className="flex flex-col items-center gap-4 p-6 rounded-xl border-2 border-border bg-card hover:border-primary hover:bg-primary/5 transition-all group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              data-testid="splash-button-indonesian"
            >
              <div className="w-20 h-12 rounded-lg overflow-hidden shadow-md border border-border/30 flex items-center justify-center group-hover:shadow-lg transition-shadow">
                <FlagID />
              </div>
              <div>
                <div className="font-semibold text-xl text-foreground">Bahasa Indonesia</div>
                <div className="text-foreground/60 text-sm">Indonesian</div>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
