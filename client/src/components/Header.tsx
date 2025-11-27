import { Link } from 'wouter';
import { ChefHat } from 'lucide-react';
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
          
          <div className="flex items-center gap-2">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
}
