import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Cookie } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom duration-500">
      <div className="max-w-6xl mx-auto bg-card border-2 border-primary/20 rounded-xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 p-6">
          <div className="flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Cookie className="w-6 h-6 text-primary" />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2" data-testid="text-cookie-title">
              We Use Cookies
            </h3>
            <p className="text-sm text-foreground/70 leading-relaxed" data-testid="text-cookie-description">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              By clicking "Accept All", you consent to our use of cookies. Read our{' '}
              <a href="/privacy-policy" className="text-primary hover:underline font-medium">
                Privacy Policy
              </a>{' '}
              to learn more about how we handle your data.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 ml-auto">
            <Button
              variant="outline"
              onClick={handleDecline}
              className="hover-elevate"
              data-testid="button-cookie-decline"
            >
              Decline
            </Button>
            <Button
              onClick={handleAccept}
              className="bg-primary hover:bg-primary text-primary-foreground hover-elevate active-elevate-2"
              data-testid="button-cookie-accept"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
