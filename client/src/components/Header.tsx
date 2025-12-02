import { Link } from 'wouter';
import { ChefHat, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import LanguageSelector from './LanguageSelector';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { getLocalizedPath } = useLocalizedPath();
  const { t } = useTranslation();
  
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/30 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link href={getLocalizedPath('/')} data-testid="link-header-logo">
            <div className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-lg px-2 py-1.5 -ml-2 transition-all duration-200">
              <div className="p-1.5 rounded-lg bg-primary/10">
                <ChefHat className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <span className="font-serif font-bold text-lg sm:text-xl tracking-tight">myCHEF</span>
            </div>
          </Link>
          
          <div className="flex md:hidden items-center gap-1 px-2 py-1 rounded-full" style={{ backgroundColor: 'hsl(var(--primary-light))', borderColor: 'hsl(var(--primary-light-border))' }}>
            <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-bold text-foreground/90">4.9</span>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="hidden md:flex items-center gap-3 px-4 py-2 rounded-lg border" 
            style={{ backgroundColor: 'hsl(var(--primary-light))', borderColor: 'hsl(var(--primary-light-border))' }}
          >
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  data-testid={`icon-star-${star}`}
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground/90" data-testid="text-header-rating">
              4.9/5
            </span>
            <span className="text-sm font-medium text-foreground/70" data-testid="text-header-reviews">
              • 50+ {t('hero.reviews', 'Reviews')}
            </span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="flex items-center"
          >
            <LanguageSelector />
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
