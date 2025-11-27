import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MessageCircle, Star, Users, ShieldCheck, CheckCircle, Clock, ArrowLeft, PartyPopper, Heart, Cake, Briefcase, Church, ChefHat, Calendar } from 'lucide-react';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import InternalLinks from '@/components/InternalLinks';
import type { ServiceData } from '@shared/serviceData';

import heroImage1 from '@assets/generated_images/Chef_preparing_satay_villa_kitchen_633e507a.png';
import heroImage2 from '@assets/generated_images/Beachside_dining_sunset_Seminyak_c50d5157.png';
import heroImage3 from '@assets/generated_images/Family_gathering_Ubud_home_e8a96e97.png';

const HERO_IMAGES = [heroImage1, heroImage2, heroImage3];

const iconMap: Record<string, typeof PartyPopper> = {
  PartyPopper,
  Heart,
  Cake,
  Users,
  Briefcase,
  Church,
  ChefHat,
  Calendar
};

interface ServiceLandingPageProps {
  service: ServiceData;
}

export default function ServiceLandingPage({ service }: ServiceLandingPageProps) {
  const [, setLocation] = useLocation();
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);
  const IconComponent = iconMap[service.icon] || ChefHat;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    setLocation(`/contact/confirm?source=service-${service.slug}`);
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://mychef.id/services/${service.slug}`,
    "name": service.name,
    "description": service.metaDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "myCHEF Indonesia",
      "url": "https://mychef.id",
      "telephone": "+62-822-3756-5997",
      "email": "indonesia@mychef.id"
    },
    "areaServed": {
      "@type": "State",
      "name": "Bali"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "150"
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title={`${service.name} | Private Chef Services | myCHEF Indonesia`}
        description={service.metaDescription}
        canonical={`https://mychef.id/services/${service.slug}`}
        ogType="website"
        keywords={`${service.name.toLowerCase()} Bali, private chef ${service.name.toLowerCase()}, ${service.slug} catering, Bali villa ${service.name.toLowerCase()}`}
        structuredData={structuredData}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {HERO_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`${service.name} - myCHEF Indonesia ${index + 1}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>
        ))}
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Button
            variant="ghost"
            onClick={() => setLocation('/')}
            className="mb-6 text-white border border-white/30 hover:bg-white/10"
            data-testid="button-back-home"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('servicePage.backToHome')}
          </Button>

          <div className="flex items-center justify-center gap-2 mb-4">
            <IconComponent className="w-10 h-10 text-white" />
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight" data-testid="text-service-headline">
            {service.heroTitle}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/95 mb-6 leading-relaxed max-w-3xl mx-auto" data-testid="text-service-description">
            {service.heroDescription}
          </p>

          <div className="flex items-center justify-center gap-4 mb-6 flex-wrap">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-white font-medium">{t('hero.rating')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Users className="w-4 h-4 text-white" />
              <span className="text-white font-medium">{t('servicePage.eventsCount')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span className="text-white font-medium">{t('servicePage.insured')}</span>
            </div>
          </div>

          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2 shadow-xl"
            data-testid="button-hero-cta"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            {t('servicePage.getQuote')}
          </Button>

          <div className="flex items-center justify-center gap-2 mt-4 text-white/90">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{t('servicePage.replyTime')}</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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

      {/* Introduction Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-center mb-8" data-testid="text-intro-headline">
            {t('servicePage.about')} {service.name}
          </h2>
          <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed">
            {service.content.introduction.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-6">{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-center mb-12" data-testid="text-offer-headline">
            {t('servicePage.whatWeOffer')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.content.whatWeOffer.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-center mb-12" data-testid="text-process-headline">
            {t('servicePage.howItWorks')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.content.howItWorks.map((step, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-2">
                    {index + 1}
                  </div>
                  <CardTitle className="text-base">{t('servicePage.step')} {index + 1}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 text-sm">{step}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-center mb-12">
            {t('servicePage.ourExperiences')} {service.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HERO_IMAGES.map((image, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src={image}
                  alt={`${service.name} experience ${index + 1}`}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-center mb-12" data-testid="text-why-headline">
            {t('servicePage.whyChooseUs')} {service.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.content.whyChooseUs.map((reason, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Star className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <p className="text-foreground/80">{reason}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold mb-6" data-testid="text-pricing-headline">
            {t('servicePage.pricing')}
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            {service.content.pricing}
          </p>
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2"
            data-testid="button-pricing-cta"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            {t('servicePage.getQuote')}
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-center mb-12" data-testid="text-faq-headline">
            {t('servicePage.faq')}
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {service.content.faq.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`} 
                className="border-2 rounded-lg px-6 bg-card hover-elevate"
                data-testid={`accordion-faq-${index}`}
              >
                <AccordionTrigger className="text-left hover:no-underline py-5">
                  <span className="font-semibold text-base pr-4">{item.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 leading-relaxed pb-5">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl lg:text-4xl font-semibold text-primary-foreground mb-6">
            {t('servicePage.readyToPlan')} {service.name}?
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8">
            {t('servicePage.contactToday')}
          </p>
          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-white hover:bg-white text-foreground px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2 shadow-xl"
            data-testid="button-final-cta"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            {t('cta.whatsapp')}
          </Button>
        </div>
      </section>

      <InternalLinks currentSlug={service.slug} />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
