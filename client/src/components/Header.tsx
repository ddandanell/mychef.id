import { Link } from 'wouter';
import { ChefHat, Star } from 'lucide-react';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link href="/" className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-lg px-2 py-1" data-testid="link-header-logo">
            <ChefHat className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            <span className="font-serif font-bold text-lg sm:text-xl">myCHEF</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-3 px-4 py-2 bg-primary/5 rounded-lg border border-primary/10">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5, 6].map((star) => (
                <Star
                  key={star}
                  className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  data-testid={`icon-star-${star}`}
                />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-medium text-foreground/80" data-testid="text-header-stars">
              Our guests have been talking...
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
}
