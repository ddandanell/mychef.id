import { useEffect, useState } from 'react';
import { useLocation } from 'wouter';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SiWhatsapp } from 'react-icons/si';
import { CheckCircle2, ArrowLeft, Loader2 } from 'lucide-react';
import { getWhatsAppURL, getWhatsAppCTA } from '@/lib/whatsappCTA';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactConfirm() {
  const [, setLocation] = useLocation();
  const { getLocalizedPath } = useLocalizedPath();
  const { language } = useLanguage();
  const [countdown, setCountdown] = useState(2);
  const [whatsappURL, setWhatsappURL] = useState('');
  const [ctaLabel, setCtaLabel] = useState('');

  useEffect(() => {
    // Get source from URL query parameters
    const params = new URLSearchParams(window.location.search);
    const source = params.get('source') || 'default';
    
    // Get the appropriate WhatsApp URL and CTA details
    const url = getWhatsAppURL(source);
    const cta = getWhatsAppCTA(source);
    
    setWhatsappURL(url);
    setCtaLabel(cta.label || 'General Inquiry');

    // Send custom GA event for conversion tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'contact_initiation', {
        event_category: 'Contact',
        event_label: source,
        value: 1
      });
    }

    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Auto-redirect after 2 seconds
    const redirectTimer = setTimeout(() => {
      // Use location.href for auto-redirect to avoid popup blockers
      window.location.href = url;
    }, 2000);

    // Cleanup timers on unmount
    return () => {
      clearInterval(countdownInterval);
      clearTimeout(redirectTimer);
    };
  }, [setLocation]);

  const handleContinueNow = () => {
    // Manual click can use _blank since it's a direct user gesture
    window.open(whatsappURL, '_blank');
  };

  const handleGoBack = () => {
    setLocation(getLocalizedPath('/'));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/30 px-4">
      <SEO 
        title="Connecting to WhatsApp | myCHEF Indonesia"
        description="Connecting you to myCHEF Indonesia via WhatsApp for instant support and booking assistance. Get quick responses from our professional team in Bali."
        canonical="https://mychef.id/contact/confirm"
        ogType="website"
      />
      <Header />
      <Card className="max-w-lg w-full p-8 md:p-12 text-center space-y-6">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
            <div className="relative bg-primary/10 rounded-full p-4">
              <SiWhatsapp className="w-16 h-16 text-primary" />
            </div>
          </div>
        </div>

        {/* Main Message */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2 text-primary">
            <CheckCircle2 className="w-6 h-6" />
            <h1 className="text-2xl md:text-3xl font-bold">Connecting You to Our Team!</h1>
          </div>
          
          <p className="text-lg text-foreground/80">
            You're now being connected to myCHEF Indonesia via WhatsApp
          </p>

          {ctaLabel && (
            <p className="text-sm text-foreground/60">
              Topic: <span className="font-semibold text-foreground">{ctaLabel}</span>
            </p>
          )}
        </div>

        {/* Response Time Promise */}
        <div className="bg-muted/50 rounded-lg p-4">
          <p className="text-sm text-foreground/80">
            <span className="font-semibold text-primary">We reply within 10 minutes</span>
            <br />
            09:00 - 22:00 WIB Daily
          </p>
        </div>

        {/* Auto-redirect countdown */}
        {countdown > 0 ? (
          <div className="flex items-center justify-center gap-2 text-foreground/60">
            <Loader2 className="w-4 h-4 animate-spin" />
            <p className="text-sm">
              Opening WhatsApp in {countdown} second{countdown !== 1 ? 's' : ''}...
            </p>
          </div>
        ) : (
          <p className="text-sm text-foreground/60">Opening WhatsApp now...</p>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <Button
            onClick={handleContinueNow}
            size="lg"
            className="flex-1 gap-2"
            data-testid="button-continue-whatsapp"
          >
            <SiWhatsapp className="w-5 h-5" />
            Continue to WhatsApp Now
          </Button>
          
          <Button
            onClick={handleGoBack}
            size="lg"
            variant="outline"
            className="gap-2"
            data-testid="button-go-back"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
      </Card>
    </div>
  );
}
