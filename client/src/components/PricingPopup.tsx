import { useState, useEffect } from 'react';
import { X, TrendingUp, Globe } from 'lucide-react';
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

  const handleCalculator = () => {
    window.location.href = '/calculator';
  };

  const handleWhatsApp = () => {
    window.location.href = '/contact/confirm?source=popup';
  };

  return (
    <div className="fixed bottom-24 right-6 md:bottom-32 md:right-8 z-50 animate-in slide-in-from-bottom-4 duration-500">
      <div className="bg-white dark:bg-card rounded-xl shadow-2xl border border-primary/20 overflow-hidden max-w-sm">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary/80 p-4 md:p-5 flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary-foreground" />
            <div>
              <p className="font-bold text-sm text-primary-foreground">Award-Winning Chefs</p>
              <p className="text-xs text-primary-foreground/90">6+ years, Chefs from around the world</p>
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
        <div className="p-4 md:p-5 space-y-4">
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

          <p className="text-xs text-foreground/70 text-center leading-relaxed">
            ✓ Professional chefs from 20+ countries
            <br />
            ✓ All services included & full cleanup
            <br />
            ✓ South Bali premium service area
          </p>

          {/* Two Action Buttons */}
          <div className="space-y-2">
            <Button
              onClick={handleCalculator}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hover-elevate active-elevate-2"
              data-testid="button-popup-calculator"
            >
              Calculate Your Price
            </Button>
            <Button
              onClick={handleWhatsApp}
              className="w-full bg-primary/20 hover:bg-primary/30 text-primary font-semibold hover-elevate active-elevate-2 border border-primary/30"
              data-testid="button-popup-booking"
            >
              Get Booking Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
