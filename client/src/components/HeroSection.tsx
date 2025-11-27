import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Star, Users, ShieldCheck, Clock, FileText } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: 'Romaldo',
    review: 'Some of the best experiences I ever had. The food was incredible, the service was outstanding, and everything was handled perfectly. I felt like royalty in my own villa. Worth every rupiah and then some!',
    rating: 5
  },
  {
    id: 2,
    name: 'Siti',
    country: 'Indonesia',
    review: 'This was the best investment for our villa vacation. Everything was handled perfectly from start to finish. The customized menu, the fresh ingredients from the market, the presentation — absolutely flawless. We already booked them twice!',
    rating: 5
  },
  {
    id: 3,
    name: 'Guest',
    review: 'The private chef experience exceeded all expectations. Professional, delicious, and completely unforgettable. We got to choose exactly what we wanted, and they made it happen. This is how vacation should be!',
    rating: 5
  }
];
import OptimizedImage from '@/components/OptimizedImage';
import forbesImage from '@assets/Forbes-Private-Satff-Private-Chef-Best_1764237669528.webp';
import heroImage1 from '@assets/generated_images/Chef_preparing_satay_villa_kitchen_633e507a.png';
import heroImage2 from '@assets/generated_images/Beachside_dining_sunset_Seminyak_c50d5157.png';
import heroImage3 from '@assets/generated_images/Family_gathering_Ubud_home_e8a96e97.png';

const HERO_IMAGES = [forbesImage, heroImage1, heroImage2, heroImage3];
const IMAGE_DURATIONS = [20000, 5000, 5000, 5000]; // First image: 20 seconds, others: 5 seconds

export default function HeroSection() {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();
  const [currentImage, setCurrentImage] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const rotateImage = () => {
      setCurrentImage((prev) => {
        const nextIndex = (prev + 1) % HERO_IMAGES.length;
        // Schedule next rotation based on the next image's duration
        const nextDuration = IMAGE_DURATIONS[nextIndex];
        setTimeout(rotateImage, nextDuration);
        return nextIndex;
      });
    };
    
    // Start with the first image's duration
    const initialTimeout = setTimeout(rotateImage, IMAGE_DURATIONS[0]);
    
    return () => clearTimeout(initialTimeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
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
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-muted">
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
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-16 lg:py-20">
        <div className="bg-gradient-to-r from-white/10 to-white/5 rounded-lg p-4 border border-white/20 backdrop-blur-sm mb-6 sm:mb-8 max-w-2xl mx-auto">
          <div className="flex items-start gap-3">
            <Star className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5 fill-yellow-400" />
            <div className="flex-1">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="font-semibold text-sm text-white mb-1">{TESTIMONIALS[currentTestimonial].name}</p>
                <p className="text-xs text-white/80 italic">{TESTIMONIALS[currentTestimonial].review}</p>
              </motion.div>
              <div className="flex items-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-1 mt-3">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentTestimonial(idx)}
                className={`h-1.5 rounded-full transition-all ${
                  idx === currentTestimonial ? 'w-4 bg-white' : 'w-2 bg-white/30'
                }`}
                data-testid={`button-hero-testimonial-${idx}`}
              />
            ))}
          </div>
        </div>

        <h1 className="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-3 sm:mb-6 leading-tight" data-testid="text-hero-headline">
          {t('hero.headline')}
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-2xl text-white/95 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-2" data-testid="text-hero-subheadline">
          {t('hero.subheadline')}
        </p>
        
        <div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 flex-wrap">
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-2" data-testid="badge-experience">
            <Users className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="text-white text-sm sm:text-base font-medium">{t('hero.experiences', '1000+ Experiences')}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-2" data-testid="badge-insured">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="text-white text-sm sm:text-base font-medium">{t('hero.insured', '100% Insured')}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-2" data-testid="badge-since">
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
            <span className="text-white text-sm sm:text-base font-medium">{t('hero.since', 'Since 2012')}</span>
          </div>
        </div>

        <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-2 sm:px-0">
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="sm"
              onClick={handleWhatsAppClick}
              className="bg-white hover:bg-white text-foreground px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-base font-semibold hover-elevate active-elevate-2 shadow-2xl border-2 border-white w-full sm:w-auto"
              data-testid="button-hero-whatsapp-cta"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">WhatsApp Now</span>
              <span className="sm:hidden">WhatsApp</span>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button
              size="sm"
              onClick={handleQuoteClick}
              className="bg-primary/90 hover:bg-primary text-primary-foreground px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-base font-semibold hover-elevate active-elevate-2 shadow-xl border border-primary w-full sm:w-auto"
              data-testid="button-hero-quote-cta"
            >
              <FileText className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Get Quote</span>
              <span className="sm:hidden">Quote</span>
            </Button>
          </motion.div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-white text-sm">
          <div className="flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/50 rounded-full px-4 py-2">
            <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
            <span className="font-medium">Limited slots - Book 48+ hours in advance</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-4 text-white/90" data-testid="text-response-time">
          <Clock className="w-4 h-4" />
          <span className="text-sm sm:text-base">{t('hero.replyTime', 'We reply within 10 minutes • 09:00-22:00 WIB Daily')}</span>
        </div>

        <div className="mt-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 max-w-2xl mx-auto">
          <p className="text-white/90 text-xs sm:text-sm font-medium mb-1">
            ✓ 100% Money-Back Guarantee if not satisfied • 10-minute response time • {t('hero.pricingInfo', 'From Rp 800,000/hour')}
          </p>
          <p className="text-white/70 text-xs">Background-checked • Food-certified • 100% Insured • Trusted by 1000+ guests since 2012</p>
        </div>
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
