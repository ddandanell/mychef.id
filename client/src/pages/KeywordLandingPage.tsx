import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  MessageCircle, Star, Users, ShieldCheck, CheckCircle, Clock, 
  ChefHat, ArrowRight, Sparkles, Award, Heart, Calendar
} from 'lucide-react';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieBanner from '@/components/CookieBanner';
import TrustBadgesCompact from '@/components/TrustBadgesCompact';
import ChefGallery from '@/components/ChefGallery';
import DishGallery from '@/components/DishGallery';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import PricingSection from '@/components/PricingSection';
import InternalLinks from '@/components/InternalLinks';
import type { KeywordData } from '@shared/keywordData';

import heroImage1 from '@assets/generated_images/Chef_preparing_satay_villa_kitchen_633e507a.png';
import heroImage2 from '@assets/generated_images/Beachside_dining_sunset_Seminyak_c50d5157.png';
import heroImage3 from '@assets/generated_images/Family_gathering_Ubud_home_e8a96e97.png';
import heroImage4 from '@assets/generated_images/Chef_with_fresh_vegetables_a81e1f2d.png';

const HERO_IMAGES = [heroImage1, heroImage2, heroImage3];

interface KeywordLandingPageProps {
  data: KeywordData;
}

export default function KeywordLandingPage({ data }: KeywordLandingPageProps) {
  const [, setLocation] = useLocation();
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(data.ctaWhatsAppMessage);
    setLocation(`/contact/confirm?source=keyword-${data.slug}&message=${message}`);
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title={data.metaTitle}
        description={data.metaDescription}
        canonical={`https://mychef.id/${data.slug}`}
        ogType="website"
        keywords={`${data.keyword}, ${data.keyword} service, ${data.keyword} bali, ${data.keyword} jakarta, mychef indonesia, private chef indonesia, catering indonesia`}
        structuredData={data.structuredData}
      />
      <Header />

      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {HERO_IMAGES.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`${data.title} - myCHEF Indonesia ${index + 1}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>
        ))}
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="p-3 rounded-full bg-primary/20 backdrop-blur-sm">
              <ChefHat className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight" data-testid="text-keyword-headline">
            {data.heroTitle}
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white/95 mb-6 leading-relaxed max-w-3xl mx-auto" data-testid="text-keyword-description">
            {data.heroSubtitle}
          </p>

          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 flex-wrap">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-2">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-white font-medium text-sm sm:text-base">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-2">
              <Users className="w-4 h-4 text-white" />
              <span className="text-white font-medium text-sm sm:text-base">1000+ Events</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 sm:px-4 py-2">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span className="text-white font-medium text-sm sm:text-base">Insured</span>
            </div>
          </div>

          <Button
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-primary text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold hover-elevate active-elevate-2 shadow-xl"
            data-testid="button-hero-cta"
          >
            <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
            {data.ctaText}
          </Button>

          <div className="flex items-center justify-center gap-2 mt-4 text-white/90">
            <Clock className="w-4 h-4" />
            <span className="text-sm">Reply within 1 hour</span>
          </div>
        </motion.div>

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

      {/* Trust Badges */}
      <TrustBadgesCompact />

      {/* Introduction Section - Main content for SEO */}
      <section className="py-12 sm:py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8" data-testid="text-intro-headline">
              {data.sections.introduction.title}
            </h2>
            <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed">
              {data.sections.introduction.paragraphs.map((paragraph, index) => (
                <p key={index} className="mb-5 sm:mb-6 text-sm sm:text-base leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-10 sm:mb-12" data-testid="text-benefits-headline">
              {data.sections.benefits.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {data.sections.benefits.items.map((benefit, index) => (
                <Card key={index} className="hover-elevate">
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <Sparkles className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-base sm:text-lg">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70 text-sm sm:text-base">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chef Gallery - Reused from homepage */}
      <ChefGallery />

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-10 sm:mb-12" data-testid="text-services-headline">
              {data.sections.services.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {data.sections.services.items.map((service, index) => (
                <div key={index} className="flex items-start gap-3 p-3 sm:p-4 rounded-lg bg-card border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80 text-sm sm:text-base">{service}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dish Gallery - Reused from homepage */}
      <DishGallery />

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-10 sm:mb-12" data-testid="text-process-headline">
              {data.sections.process.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {data.sections.process.steps.map((step, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 rounded-bl-full flex items-start justify-end p-2">
                    <span className="text-2xl font-bold text-primary/30">{index + 1}</span>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base sm:text-lg pr-12">{step.step}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/70 text-sm sm:text-base">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Reused from homepage */}
      <TestimonialCarousel />

      {/* Pricing Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-4" data-testid="text-pricing-headline">
              {data.sections.pricing.title}
            </h2>
            <p className="text-center text-foreground/70 mb-10 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
              {data.sections.pricing.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {data.sections.pricing.packages.map((pkg, index) => (
                <Card key={index} className={`relative ${index === 1 ? 'border-primary shadow-lg' : ''}`}>
                  {index === 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="text-center pb-2 pt-6">
                    <CardTitle className="text-lg sm:text-xl">{pkg.name}</CardTitle>
                    <p className="text-xl sm:text-2xl font-bold text-primary mt-2">{pkg.price}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pkg.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-sm sm:text-base">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      onClick={handleWhatsAppClick}
                      className={`w-full mt-4 sm:mt-6 ${index === 1 ? 'bg-primary' : 'bg-primary/10 text-primary hover:bg-primary/20'}`}
                      variant={index === 1 ? 'default' : 'ghost'}
                      data-testid={`button-pricing-${index}`}
                    >
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-24 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-10 sm:mb-12" data-testid="text-why-headline">
              {data.sections.whyUs.title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {data.sections.whyUs.reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-3 p-3 sm:p-4">
                  <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-foreground/80 text-sm sm:text-base">{reason}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-10 sm:mb-12" data-testid="text-faq-headline">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full space-y-3">
              {data.sections.faq.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border rounded-lg px-4 sm:px-6 bg-card">
                  <AccordionTrigger className="text-left text-sm sm:text-base font-medium py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70 pb-4 text-sm sm:text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
              Ready to Experience {data.title}?
            </h2>
            <p className="text-lg sm:text-xl opacity-90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Contact us today for a personalized quote and let myCHEF Indonesia create your perfect culinary experience.
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={handleWhatsAppClick}
              className="bg-white text-primary hover:bg-white/90 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold hover-elevate active-elevate-2"
              data-testid="button-final-cta"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              {data.ctaText}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="mt-4 text-sm opacity-80">
              Quick response • No commitment • Free consultation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Internal Links for SEO */}
      <InternalLinks currentSlug={data.slug} />

      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}
