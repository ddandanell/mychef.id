import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, FileText, MapPin, Star, CheckCircle2, ShoppingCart, ChefHat, Users, Shield } from 'lucide-react';
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
        title={`Private Chef ${city.name} | ${city.tagline} | Best Private Chef Bali | myCHEF Indonesia`}
        description={`Book the best private chef in ${city.name}, Bali. ${city.description} Professional background-checked chefs for villa dining, parties, weddings & events. Private chef Indonesia since 2012. From Rp 800,000/hour.`}
        canonical={`https://mychef.id/${city.slug}`}
        ogType="website"
        keywords={`private chef ${city.name}, private chef bali, private chef indonesia, best private chef ${city.name}, villa chef ${city.name}, personal chef ${city.name}, chef for hire ${city.name}, private dining ${city.name}, ${city.name} chef services, ${city.name} catering, wedding catering ${city.name}, ${city.areas.join(', ')}`}
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
            {city.heroTitle || <>{t('cityPages.privateChefServices')}<br />{t('cityPages.in')} {city.name}</>}
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

      {/* Extended Content Section - SEO Optimized */}
      {city.extendedContent && (
        <>
          {/* Main Intro Section */}
          <section className="py-16 lg:py-24 bg-card">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8 sm:mb-12">
                {city.extendedContent.mainHeading}
              </h2>
              <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
                {'introParagraphs' in city.extendedContent && city.extendedContent.introParagraphs?.map((paragraph, index) => (
                  <p key={index} className="text-base sm:text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {'paragraphs' in city.extendedContent && city.extendedContent.paragraphs?.map((paragraph, index) => (
                  <p key={index} className="text-base sm:text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 sm:mt-12 px-4 sm:px-0">
                <Button
                  size="lg"
                  onClick={handleQuoteClick}
                  variant="outline"
                  className="w-full sm:w-auto px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2"
                  data-testid="button-extended-content-quote"
                >
                  <FileText className="w-6 h-6 mr-2" />
                  {t('cta.getQuote')}
                </Button>
                <Button
                  size="lg"
                  onClick={handleWhatsAppClick}
                  className="w-full sm:w-auto bg-primary hover:bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2"
                  data-testid="button-extended-content-whatsapp"
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  {t('cta.whatsapp')}
                </Button>
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          {'whyChooseSection' in city.extendedContent && city.extendedContent.whyChooseSection && (
            <section className="py-16 lg:py-24 bg-background">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-4">
                  {city.extendedContent.whyChooseSection.title}
                </h2>
                <p className="text-center text-foreground/70 text-lg max-w-3xl mx-auto mb-12">
                  {city.extendedContent.whyChooseSection.intro}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {city.extendedContent.whyChooseSection.benefits.map((benefit, index) => (
                    <Card key={index} className="hover-elevate">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3 mb-3">
                          <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                          <h3 className="text-lg font-semibold">{benefit.title}</h3>
                        </div>
                        <p className="text-foreground/70 text-sm leading-relaxed pl-9">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Benefits Section */}
          {'benefitsSection' in city.extendedContent && city.extendedContent.benefitsSection && (
            <section className="py-16 lg:py-24 bg-card">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8">
                  {city.extendedContent.benefitsSection.title}
                </h2>
                <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
                  {city.extendedContent.benefitsSection.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-base sm:text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Customize Section */}
          {'customizeSection' in city.extendedContent && city.extendedContent.customizeSection && (
            <section className="py-16 lg:py-24 bg-background">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8">
                  {city.extendedContent.customizeSection.title}
                </h2>
                <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
                  {city.extendedContent.customizeSection.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-base sm:text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Diverse Cuisines Section */}
          {'diverseCuisinesSection' in city.extendedContent && city.extendedContent.diverseCuisinesSection && (
            <section className="py-16 lg:py-24 bg-card">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8">
                  {city.extendedContent.diverseCuisinesSection.title}
                </h2>
                <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
                  {city.extendedContent.diverseCuisinesSection.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-base sm:text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Chefs Section */}
          {'chefsSection' in city.extendedContent && city.extendedContent.chefsSection && (
            <section className="py-16 lg:py-24 bg-background">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">
                      {city.extendedContent.chefsSection.title}
                    </h2>
                    <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                      {city.extendedContent.chefsSection.intro}
                    </p>
                    {city.extendedContent.chefsSection.paragraphs.map((paragraph, index) => (
                      <p key={index} className="text-foreground/70 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Chef Specializations</h3>
                    <div className="space-y-3">
                      {city.extendedContent.chefsSection.specializations.map((spec, index) => (
                        <div key={index} className="flex items-center gap-3 bg-card p-3 rounded-lg">
                          <ChefHat className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-foreground/80">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Occasions Section */}
          {'occasionsSection' in city.extendedContent && city.extendedContent.occasionsSection && (
            <section className="py-16 lg:py-24 bg-card">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8">
                  {city.extendedContent.occasionsSection.title}
                </h2>
                <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
                  {city.extendedContent.occasionsSection.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-base sm:text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Villa Services Section */}
          {'villaServicesSection' in city.extendedContent && city.extendedContent.villaServicesSection && (
            <section className="py-16 lg:py-24 bg-background">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-4">
                  {city.extendedContent.villaServicesSection.title}
                </h2>
                <p className="text-center text-foreground/70 text-lg max-w-3xl mx-auto mb-8">
                  {city.extendedContent.villaServicesSection.intro}
                </p>
                <div className="max-w-4xl mx-auto mb-12">
                  {city.extendedContent.villaServicesSection.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-foreground/80 mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {city.extendedContent.villaServicesSection.services.map((service, index) => (
                    <Card key={index} className="hover-elevate">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                        <p className="text-foreground/70 text-sm">{service.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Booking Section */}
          {'bookingSection' in city.extendedContent && city.extendedContent.bookingSection && (
            <section className="py-16 lg:py-24 bg-card">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-4">
                  {city.extendedContent.bookingSection.title}
                </h2>
                <p className="text-center text-foreground/70 text-lg max-w-3xl mx-auto mb-12">
                  {city.extendedContent.bookingSection.intro}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {city.extendedContent.bookingSection.steps.map((step, index) => (
                    <div key={index} className="text-center">
                      <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-foreground/70">{step.description}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 px-4 sm:px-0">
                  <Button
                    size="lg"
                    onClick={handleWhatsAppClick}
                    className="w-full sm:w-auto bg-primary hover:bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2"
                    data-testid="button-booking-section-whatsapp"
                  >
                    <MessageCircle className="w-6 h-6 mr-2" />
                    {t('cta.whatsapp')}
                  </Button>
                </div>
              </div>
            </section>
          )}

          {/* Luxury Dining Section */}
          {'luxuryDiningSection' in city.extendedContent && city.extendedContent.luxuryDiningSection && (
            <section className="py-16 lg:py-24 bg-background">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8">
                  {city.extendedContent.luxuryDiningSection.title}
                </h2>
                <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
                  {city.extendedContent.luxuryDiningSection.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-base sm:text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Local Ingredients Section */}
          {'localIngredientsSection' in city.extendedContent && city.extendedContent.localIngredientsSection && (
            <section className="py-16 lg:py-24 bg-card">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8">
                  {city.extendedContent.localIngredientsSection.title}
                </h2>
                <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
                  {city.extendedContent.localIngredientsSection.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-base sm:text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Pricing Section */}
          {'pricingSection' in city.extendedContent && city.extendedContent.pricingSection && (
            <section className="py-16 lg:py-24 bg-background">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-4">
                  {city.extendedContent.pricingSection.title}
                </h2>
                <p className="text-center text-foreground/70 text-lg max-w-3xl mx-auto mb-12">
                  {city.extendedContent.pricingSection.intro}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {city.extendedContent.pricingSection.categories.map((category, index) => (
                    <Card key={index} className="hover-elevate">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                        <ul className="space-y-3">
                          {category.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-2 text-sm text-foreground/70">
                              <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Safety Section */}
          {'safetySection' in city.extendedContent && city.extendedContent.safetySection && (
            <section className="py-16 lg:py-24 bg-card">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-4">
                  {city.extendedContent.safetySection.title}
                </h2>
                <p className="text-center text-foreground/70 text-lg max-w-3xl mx-auto mb-12">
                  {city.extendedContent.safetySection.intro}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {city.extendedContent.safetySection.guarantees.map((guarantee, index) => (
                    <Card key={index} className="hover-elevate border-l-4 border-l-primary">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <Shield className="w-6 h-6 text-primary flex-shrink-0" />
                          <div>
                            <h3 className="font-semibold mb-1">{guarantee.title}</h3>
                            <p className="text-sm text-foreground/70">{guarantee.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Testimonials Section */}
          {'testimonialsSection' in city.extendedContent && city.extendedContent.testimonialsSection && (
            <section className="py-16 lg:py-24 bg-background">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-12">
                  {city.extendedContent.testimonialsSection.title}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {city.extendedContent.testimonialsSection.testimonials.map((testimonial, index) => (
                    <Card key={index} className="hover-elevate">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          ))}
                        </div>
                        <p className="text-foreground/80 mb-4 italic text-sm leading-relaxed">"{testimonial.quote}"</p>
                        <div className="border-t pt-4">
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-foreground/60">{testimonial.event}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Sample Menu Section */}
          {'sampleMenuSection' in city.extendedContent && city.extendedContent.sampleMenuSection && (
            <section className="py-16 lg:py-24 bg-card">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-4">
                  {city.extendedContent.sampleMenuSection.title}
                </h2>
                <p className="text-center text-foreground/70 text-lg max-w-3xl mx-auto mb-12">
                  {city.extendedContent.sampleMenuSection.intro}
                </p>
                {city.extendedContent.sampleMenuSection.menus.map((menu, menuIndex) => (
                  <Card key={menuIndex} className="mb-6">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-6 text-center">{menu.name}</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {menu.courses.map((course, courseIndex) => (
                          <div key={courseIndex}>
                            <h4 className="font-semibold text-primary mb-2">{course.category}</h4>
                            <ul className="space-y-1">
                              {course.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-sm text-foreground/70">{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* Elevate Vacation Section */}
          {'elevateVacationSection' in city.extendedContent && city.extendedContent.elevateVacationSection && (
            <section className="py-16 lg:py-24 bg-primary/5">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8">
                  {city.extendedContent.elevateVacationSection.title}
                </h2>
                <div className="prose prose-lg max-w-none text-foreground/80 space-y-6 mb-10">
                  {city.extendedContent.elevateVacationSection.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-base sm:text-lg leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button
                    size="lg"
                    onClick={handleQuoteClick}
                    variant="outline"
                    className="w-full sm:w-auto px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2"
                    data-testid="button-elevate-quote"
                  >
                    <FileText className="w-6 h-6 mr-2" />
                    {t('cta.getQuote')}
                  </Button>
                  <Button
                    size="lg"
                    onClick={handleWhatsAppClick}
                    className="w-full sm:w-auto bg-primary hover:bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2"
                    data-testid="button-elevate-whatsapp"
                  >
                    <MessageCircle className="w-6 h-6 mr-2" />
                    {t('cta.whatsapp')}
                  </Button>
                </div>
              </div>
            </section>
          )}
        </>
      )}

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
