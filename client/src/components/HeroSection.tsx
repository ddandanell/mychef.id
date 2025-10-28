import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Star, Users, ShieldCheck, Clock, FileText } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';
import heroImage1 from '@assets/generated_images/Chef_preparing_satay_villa_kitchen_633e507a.png';
import heroImage2 from '@assets/generated_images/Beachside_dining_sunset_Seminyak_c50d5157.png';
import heroImage3 from '@assets/generated_images/Family_gathering_Ubud_home_e8a96e97.png';

const HERO_IMAGES = [heroImage1, heroImage2, heroImage3];

export default function HeroSection() {
  const [, setLocation] = useLocation();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    setLocation('/contact/confirm?source=hero');
  };

  const handleQuoteClick = () => {
    setLocation('/contact/confirm?source=hero');
  };

  const handleViewReviews = () => {
    const testimonialsSection = document.getElementById('testimonials');
    if (testimonialsSection) {
      testimonialsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-muted">
      {HERO_IMAGES.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`myCHEF Indonesia hero ${index + 1}`}
            className="w-full h-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
      ))}
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <button 
          onClick={handleViewReviews}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-4 sm:mb-6 hover-elevate active-elevate-2 transition-all cursor-pointer" 
          data-testid="badge-rating"
          aria-label="View customer reviews"
        >
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-white font-semibold">4.9/5</span>
          <span className="text-white/80 text-sm">• 1000+ Reviews</span>
        </button>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight" data-testid="text-hero-headline">
          Hire a Private Chef at Home in Bali
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-2" data-testid="text-hero-subheadline">
          Experience personalized fine dining in your villa, home, or beachfront property. Serving all of Bali from Seminyak to Ubud, Canggu to Nusa Dua.
        </p>
        
        <div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 flex-wrap">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-2" data-testid="badge-experience">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="text-white text-sm sm:text-base font-medium">1000+ Experiences</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-2" data-testid="badge-insured">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="text-white text-sm sm:text-base font-medium">100% Insured</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-2" data-testid="badge-since">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="text-white text-sm sm:text-base font-medium">Since 2012</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={handleQuoteClick}
            className="bg-white hover:bg-white text-foreground px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-semibold hover-elevate active-elevate-2 shadow-xl border-2 border-white"
            data-testid="button-hero-quote-cta"
          >
            <FileText className="w-5 h-5 md:w-6 md:h-6 mr-2" />
            <span className="hidden sm:inline">Reserve Your Private Chef</span>
            <span className="sm:hidden">Reserve Chef</span>
          </Button>
          
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-primary text-primary-foreground px-6 md:px-8 py-5 md:py-6 text-base md:text-lg font-semibold hover-elevate active-elevate-2 shadow-xl"
            data-testid="button-hero-whatsapp-cta"
          >
            <MessageCircle className="w-5 h-5 md:w-6 md:h-6 mr-2" />
            <span className="hidden sm:inline">Start Planning Today</span>
            <span className="sm:hidden">Plan Event</span>
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-4 text-white/90" data-testid="text-response-time">
          <Clock className="w-4 h-4" />
          <span className="text-sm sm:text-base">We reply within 10 minutes • 09:00-22:00 WIB Daily</span>
        </div>

        <p className="text-white/70 mt-4 text-xs sm:text-sm px-4" data-testid="text-pricing-info">
          From Rp 800,000/hour • Background-checked chefs • Secure online payment & cash (IDR)
        </p>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {HERO_IMAGES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImage ? 'bg-white w-8' : 'bg-white/50'
            }`}
            data-testid={`button-carousel-dot-${index}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
