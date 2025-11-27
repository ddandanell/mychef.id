import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, FileText, MapPin, Star, CheckCircle2, ShoppingCart, ChefHat, Users } from 'lucide-react';
import { useLocation } from 'wouter';
import TrustBadges from '@/components/TrustBadges';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import SampleMenus from '@/components/SampleMenus';
import ExperienceOverview from '@/components/ExperienceOverview';
import ChefGallery from '@/components/ChefGallery';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import InternalLinks from '@/components/InternalLinks';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { CityData } from '@shared/cityData';
import heroImage1 from '@assets/generated_images/Chef_preparing_satay_villa_kitchen_633e507a.png';
import heroImage2 from '@assets/generated_images/Beachside_dining_sunset_Seminyak_c50d5157.png';
import heroImage3 from '@assets/generated_images/Family_gathering_Ubud_home_e8a96e97.png';

const HERO_IMAGES = [heroImage1, heroImage2, heroImage3];

interface CityLandingPageProps {
  city: CityData;
}

export default function CityLandingPage({ city }: CityLandingPageProps) {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    setLocation(`/contact/confirm?source=city-${city.slug}`);
  };

  const handleQuoteClick = () => {
    setLocation(`/contact/confirm?source=city-${city.slug}`);
  };

  // Generate city-specific structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://mychef.id/${city.slug}`,
    "name": `myCHEF Indonesia - ${city.name}`,
    "alternateName": `myCHEF ${city.name}`,
    "description": `${city.description} Professional private chef booking service serving ${city.name}, Bali.`,
    "url": `https://mychef.id/${city.slug}`,
    "logo": "https://mychef.id/logo.png",
    "image": "https://mychef.id/og-image.jpg",
    "telephone": "+62-822-3756-5997",
    "email": "indonesia@mychef.id",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": "Bali",
      "addressCountry": "ID"
    },
    "geo": city.coordinates,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "22:00"
    },
    "priceRange": "Rp 800,000 - Rp 1,200,000+",
    "currenciesAccepted": "IDR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "containedInPlace": {
        "@type": "State",
        "name": "Bali"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "150"
    },
    "sameAs": [
      "https://www.instagram.com/mychefindonesia/",
      "https://www.facebook.com/mychefindonesia/"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Private Chef Services in ${city.name}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Private Chef Service",
            "description": `Professional private chef service for intimate dinners, family gatherings, and special events in ${city.name}, Bali`,
            "areaServed": city.areas
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title={`${city.tagline} | myCHEF Indonesia`}
        description={`${city.description} Professional background-checked private chefs serving ${city.name} since 2012. Book on WhatsApp +62 822-3756-5997.`}
        canonical={`https://mychef.id/${city.slug}`}
        ogType="website"
        keywords={`private chef ${city.name}, personal chef ${city.name}, chef at home ${city.name}, villa chef ${city.name}, private dining ${city.name}, ${city.name} chef services, ${city.areas.join(', ')}`}
        structuredData={structuredData}
      />
      <Header />

      {/* Hero Section */}
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
              alt={`myCHEF ${city.name} hero ${index + 1}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>
        ))}
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4 text-white" />
            <span className="text-white">{city.name}, Bali</span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6" data-testid="text-hero-headline">
            {t('cityPages.privateChefServices')}<br />{t('cityPages.in')} {city.name}
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/95 mb-8 max-w-3xl mx-auto">
            {city.heroDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full sm:w-auto px-4 sm:px-0">
            <Button
              size="lg"
              onClick={handleQuoteClick}
              className="w-full sm:w-auto bg-white hover:bg-white text-foreground px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2 shadow-xl border-2 border-white"
              data-testid="button-hero-quote"
            >
              <FileText className="w-6 h-6 mr-2" />
              {t('cta.getQuote')}
            </Button>
            
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto bg-primary hover:bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2 shadow-xl"
              data-testid="button-hero-whatsapp"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              {t('cta.whatsapp')}
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="font-semibold text-white">{t('hero.rating')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <span className="font-semibold text-white">{t('servicePage.eventsCount')}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <span className="font-semibold text-white">{t('cityPages.backgroundChecked')}</span>
            </div>
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

      <ExperienceOverview />
      <ChefGallery />

      {/* Areas Served */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-semibold text-center mb-8 sm:mb-12">
            {t('cityPages.weServeAllAreas', { city: city.name })}
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
            {city.areas.map((area, index) => (
              <div 
                key={index} 
                className="bg-primary/10 text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base"
                data-testid={`badge-area-${index}`}
              >
                {area}
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-background border-2">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{t('cityPages.about')} {city.name}</h3>
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4 sm:mb-6">
                  {city.localInsights}
                </p>
                <div className="border-t pt-4 sm:pt-6">
                  <h4 className="font-semibold mb-3 text-sm sm:text-base">{t('cityPages.popularVenuesWeServe')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {city.popularVenues.map((venue, index) => (
                      <span 
                        key={index} 
                        className="text-xs sm:text-sm bg-accent/20 px-2 sm:px-3 py-1 rounded-md"
                      >
                        {venue}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-semibold text-center mb-8 sm:mb-12">
            {t('cityPages.howToBookIn', { city: city.name })}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{t('cityPages.step1.title')}</h3>
              <p className="text-sm text-foreground/70">{t('cityPages.step1.description', { city: city.name })}</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <FileText className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{t('cityPages.step2.title')}</h3>
              <p className="text-sm text-foreground/70">{t('cityPages.step2.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{t('cityPages.step3.title')}</h3>
              <p className="text-sm text-foreground/70">{t('cityPages.step3.description', { city: city.name })}</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Star className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{t('cityPages.step4.title')}</h3>
              <p className="text-sm text-foreground/70">{t('cityPages.step4.description')}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
            <Button
              size="lg"
              onClick={handleQuoteClick}
              variant="outline"
              className="w-full sm:w-auto px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2"
              data-testid="button-how-it-works-quote"
            >
              <FileText className="w-6 h-6 mr-2" />
              {t('cta.getQuote')}
            </Button>
            
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto bg-primary hover:bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2"
              data-testid="button-how-it-works-whatsapp"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              {t('cta.whatsapp')}
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-semibold text-center mb-3 sm:mb-4">
            {t('cityPages.transparentPricingIn', { city: city.name })}
          </h2>
          <p className="text-center text-sm sm:text-base text-foreground/70 mb-2">{t('cityPages.noHiddenFees')}</p>
          <p className="text-xs sm:text-sm text-center text-foreground/60 mb-8 sm:mb-12 px-4">
            {t('cityPages.paymentInfo')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <Card>
              <CardContent className="p-4 sm:p-6">
                <ChefHat className="w-7 h-7 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold mb-2">{t('pricing.chefServiceFees')}</h3>
                <div className="text-xl sm:text-2xl font-bold text-primary mb-2">Rp 800,000 - 1,200,000+/hour</div>
                <p className="text-xs sm:text-sm text-foreground/70 mb-3">{t('pricing.minimumHours')}</p>
                <ul className="text-xs sm:text-sm text-foreground/80 space-y-1">
                  <li>• {t('pricing.equipmentProvided')}</li>
                  <li>• {t('pricing.cleanupIncluded')}</li>
                  <li>• {t('pricing.beautifulPresentation')}</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 sm:p-6">
                <ShoppingCart className="w-7 h-7 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold mb-2">{t('pricing.ingredientShopping')}</h3>
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-2 sm:p-3 mb-2 sm:mb-3">
                  <p className="text-xs font-semibold text-primary mb-1">{t('pricing.mostPopular')}</p>
                  <p className="text-xs sm:text-sm font-semibold">{t('pricing.chefArrivesEarly')}</p>
                  <p className="text-xs text-foreground/70 mt-1">{t('pricing.chefArrivesEarlyDesc')}</p>
                </div>
                <p className="text-xs text-foreground/70">{t('pricing.otherOptions')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 sm:p-6">
                <Users className="w-7 h-7 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold mb-2">{t('pricing.additionalStaff')}</h3>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div>
                    <div className="font-bold text-primary">Rp 300,000/hour</div>
                    <p className="text-foreground/70">{t('pricing.waiter')}</p>
                  </div>
                  <div>
                    <div className="font-bold text-primary">Rp 400,000/hour</div>
                    <p className="text-foreground/70">{t('pricing.bartender')}</p>
                  </div>
                  <div>
                    <div className="font-bold text-primary">Rp 500,000/hour</div>
                    <p className="text-foreground/70">{t('pricing.sommelier')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <TrustBadges />
      <TestimonialCarousel />
      <SampleMenus />

      {/* City-Specific FAQ */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-semibold mb-3 sm:mb-4">
              {t('cityPages.faqHeadline', { city: city.name })}
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 px-4">
              {t('cityPages.faqSubheadline', { city: city.name })}
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {city.faqItems.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-2 rounded-lg px-4 sm:px-6 bg-card hover-elevate"
                data-testid={`accordion-faq-${index}`}
              >
                <AccordionTrigger 
                  className="text-left hover:no-underline py-4 sm:py-5"
                  data-testid={`button-faq-${index}-trigger`}
                >
                  <span className="font-semibold text-sm sm:text-base pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent 
                  className="text-sm sm:text-base text-foreground/80 leading-relaxed pb-4 sm:pb-5"
                  data-testid={`text-faq-${index}-answer`}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-sm sm:text-base text-foreground/70 mb-4 sm:mb-6 px-4">{t('cityPages.stillHaveQuestions', { city: city.name })}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto bg-primary hover:bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2"
                data-testid="button-faq-whatsapp"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                {t('cta.whatsapp')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <InternalLinks currentSlug={city.slug} />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
