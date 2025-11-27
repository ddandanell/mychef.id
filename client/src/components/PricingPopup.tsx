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

    const lastShownTime = localStorage.getItem('pricingPopupLastShown');
    const now = Date.now();
    const MIN_INTERVAL = 2 * 60 * 1000; // 2 minutes in milliseconds

    // Check if we should show the popup
    const shouldShow = !lastShownTime || (now - parseInt(lastShownTime)) >= MIN_INTERVAL;

    if (!shouldShow) return;

    const timer = setTimeout(() => {
      setShowPopup(true);
      localStorage.setItem('pricingPopupLastShown', now.toString());
    }, 10000); // Show after 10 seconds

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
        <div className="bg-gradient-to-r from-primary/15 to-primary/8 p-4 md:p-5 flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary" />
            <div>
              <p className="font-bold text-sm text-primary">Award-Winning Chefs</p>
              <p className="text-xs text-primary/80">6+ years, Chefs from around the world</p>
            </div>
          </div>
          <button
            onClick={() => setShowPopup(false)}
            className="text-primary hover:text-primary/80 transition-colors"
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
              <p className="text-xs text-foreground/70">Standard rate:</p>
              <p className="text-base md:text-lg font-bold text-primary">800,000</p>
              <p className="text-xs text-foreground/50">IDR/hr</p>
            </div>

            {/* Weekly */}
            <div className="bg-primary/10 rounded-lg p-3 text-center border border-primary/20 ring-2 ring-primary/30">
              <p className="text-xs text-foreground/70 font-semibold mb-1">Weekly</p>
              <p className="text-xs text-foreground/70">Hour rate:</p>
              <p className="text-base md:text-lg font-bold text-primary">350,000</p>
              <p className="text-xs text-foreground/50">IDR • 7+ days</p>
            </div>

            {/* Monthly */}
            <div className="bg-primary/5 rounded-lg p-3 text-center border border-primary/10">
              <p className="text-xs text-foreground/60 font-semibold mb-1">Monthly</p>
              <p className="text-xs text-foreground/70">Hour rate:</p>
              <p className="text-base md:text-lg font-bold text-primary">250,000</p>
              <p className="text-xs text-foreground/50">IDR</p>
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
