import { useState, useEffect } from 'react';
import { X, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation } from 'wouter';

export default function PricingPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [location] = useLocation();

  // Only show on home page
  const isHomePage = location === '/';

  useEffect(() => {
    if (!isHomePage) return;

    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer);
  }, [isHomePage, location]);

  if (!showPopup || !isHomePage) return null;

  return (
    <div className="fixed bottom-24 right-6 md:bottom-32 md:right-8 z-50 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white dark:bg-card rounded-xl shadow-2xl border border-primary/20 overflow-hidden max-w-sm">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary/80 p-4 md:p-5 flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary-foreground" />
            <div>
              <p className="font-bold text-sm text-primary-foreground">Special Pricing</p>
              <p className="text-xs text-primary-foreground/90">Limited Time Offer</p>
            </div>
          </div>
          <button
            onClick={() => setShowPopup(false)}
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
            data-testid="button-close-pricing-popup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 md:p-5 space-y-3">
          <div className="grid grid-cols-3 gap-2">
            {/* Daily */}
            <div className="bg-primary/5 rounded-lg p-3 text-center border border-primary/10">
              <p className="text-xs text-foreground/60 font-semibold mb-1">Daily</p>
              <p className="text-lg md:text-xl font-bold text-primary">Rp 4M</p>
              <p className="text-xs text-foreground/50 mt-1">per day</p>
            </div>

            {/* Weekly */}
            <div className="bg-primary/10 rounded-lg p-3 text-center border border-primary/20 ring-2 ring-primary/30">
              <p className="text-xs text-foreground/70 font-semibold mb-1">Weekly</p>
              <p className="text-lg md:text-xl font-bold text-primary">Rp 8M</p>
              <p className="text-xs text-foreground/50 mt-1">7+ days</p>
            </div>

            {/* Monthly */}
            <div className="bg-primary/5 rounded-lg p-3 text-center border border-primary/10">
              <p className="text-xs text-foreground/60 font-semibold mb-1">Monthly</p>
              <p className="text-lg md:text-xl font-bold text-primary">Rp 29M</p>
              <p className="text-xs text-foreground/50 mt-1">30+ days</p>
            </div>
          </div>

          <p className="text-xs text-foreground/70 text-center">
            ✓ All chef services included
            <br />
            ✓ Professional cooking & cleanup
            <br />
            ✓ South Bali premium area
          </p>

          <Button
            onClick={() => window.location.href = '/calculator'}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover-elevate active-elevate-2"
            data-testid="button-popup-calculator"
          >
            Get Instant Quote →
          </Button>
        </div>
      </div>
    </div>
  );
}
