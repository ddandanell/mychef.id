import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Star, Users } from 'lucide-react';
import heroImage1 from '@assets/generated_images/Chef_preparing_satay_villa_kitchen_633e507a.png';
import heroImage2 from '@assets/generated_images/Beachside_dining_sunset_Seminyak_c50d5157.png';
import heroImage3 from '@assets/generated_images/Family_gathering_Ubud_home_e8a96e97.png';

const HERO_IMAGES = [heroImage1, heroImage2, heroImage3];
const WHATSAPP_NUMBER = '+6282237565997';

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER.replace(/\+/g, '')}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
      ))}
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6" data-testid="text-hero-headline">
          Hire a Private Chef at Home in Bali & Indonesia
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-3xl mx-auto" data-testid="text-hero-subheadline">
          Experience personalized fine dining in your villa, home, or beachfront property. From Seminyak to Ubud, Canggu to Nusa Dua.
        </p>
        
        <div className="flex items-center justify-center gap-4 mb-8 text-white/90 text-sm md:text-base flex-wrap">
          <div className="flex items-center gap-2" data-testid="badge-serving-since">
            <Star className="w-5 h-5" />
            <span>Serving Indonesia since 2012</span>
          </div>
          <span className="hidden md:inline">•</span>
          <div className="flex items-center gap-2" data-testid="badge-happy-guests">
            <Users className="w-5 h-5" />
            <span>1000+ Happy Guests</span>
          </div>
        </div>

        <Button
          size="lg"
          onClick={handleWhatsAppClick}
          className="bg-primary hover:bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2"
          data-testid="button-hero-whatsapp-cta"
        >
          <MessageCircle className="w-6 h-6 mr-2" />
          Get Your Custom Quote on WhatsApp
        </Button>

        <p className="text-white/80 mt-6 text-sm md:text-base" data-testid="text-pricing-info">
          Professional chefs from Rp 800,000/hour - Get instant pricing via WhatsApp
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
