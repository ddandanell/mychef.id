import { useLocation } from 'wouter';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, FileText, MapPin, Star, CheckCircle2, ChefHat, Clock, Utensils } from 'lucide-react';
import TrustBadges from '@/components/TrustBadges';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import type { JakartaAreaData } from '@shared/jakartaAreaData';
import heroImage1 from '@assets/generated_images/Chef_preparing_satay_villa_kitchen_633e507a.png';
import heroImage2 from '@assets/generated_images/Beachside_dining_sunset_Seminyak_c50d5157.png';
import heroImage3 from '@assets/generated_images/Family_gathering_Ubud_home_e8a96e97.png';

const HERO_IMAGES = [heroImage1, heroImage2, heroImage3];

interface JakartaAreaLandingPageProps {
  area: JakartaAreaData;
}

export default function JakartaAreaLandingPage({ area }: JakartaAreaLandingPageProps) {
  const [, setLocation] = useLocation();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(area.ctaWhatsAppMessage);
    window.open(`https://wa.me/6282237565997?text=${message}`, '_blank');
  };

  const handleQuoteClick = () => {
    setLocation(`/contact/confirm?source=jakarta-${area.slug}`);
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title={area.metaTitle}
        description={area.metaDescription}
        canonical={`https://mychef.id/private-chef-${area.slug}`}
        ogType="website"
        keywords={`private chef ${area.name}, chef profesional ${area.name}, jasa koki pribadi ${area.name}, private dining ${area.name}, chef private untuk acara ${area.name}, layanan koki panggilan ${area.name}, catering eksklusif ${area.name}, ${area.region}`}
        structuredData={area.structuredData}
      />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-muted">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGES[0]}
            alt={`Private Chef ${area.name}`}
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4 text-white" />
            <span className="text-white">{area.name}, {area.region}</span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-hero-headline">
            {area.heroTitle}
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/95 mb-8 max-w-3xl mx-auto">
            {area.heroSubtitle}
          </p>

          <ul className="text-left max-w-xl mx-auto mb-8 space-y-3">
            {area.heroBullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-3 text-white/90">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full sm:w-auto px-4 sm:px-0">
            <Button
              size="lg"
              onClick={handleQuoteClick}
              className="w-full sm:w-auto bg-white hover:bg-white text-foreground px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2 shadow-xl border-2 border-white"
              data-testid="button-hero-quote"
            >
              <FileText className="w-6 h-6 mr-2" />
              Minta Penawaran
            </Button>
            
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto bg-primary hover:bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2 shadow-xl"
              data-testid="button-hero-whatsapp"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              {area.ctaText}
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="font-semibold text-white">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <span className="font-semibold text-white">1000+ Acara</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <span className="font-semibold text-white">Chef Terverifikasi</span>
            </div>
          </div>
        </div>
      </section>

      {/* Local Positioning */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {area.localPositioning.areaType}
            </span>
          </div>
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
            {area.localPositioning.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-12">
            {area.benefits.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {area.benefits.items.map((item, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-12">
            {area.howItWorks.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {area.howItWorks.steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.step}</h3>
                <p className="text-sm text-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto bg-primary hover:bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2"
              data-testid="button-how-it-works-whatsapp"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Hubungi Kami Sekarang
            </Button>
          </div>
        </div>
      </section>

      {/* Menu Examples */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-12">
            {area.menuExamples.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {area.menuExamples.packages.map((pkg, index) => (
              <Card key={index} className="hover-elevate overflow-hidden">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Utensils className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                  <p className="text-foreground/70 mb-4">{pkg.description}</p>
                  <ul className="space-y-2">
                    {pkg.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-12">
            {area.testimonials.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {area.testimonials.reviews.map((review, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-4 italic">"{review.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-foreground/60">{review.event}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-12">
            {area.faq.title}
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {area.faq.items.map((faq, index) => (
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
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 lg:py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">
            {area.closingCta.title}
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            {area.closingCta.paragraph}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={handleQuoteClick}
              variant="outline"
              className="w-full sm:w-auto px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2"
              data-testid="button-cta-quote"
            >
              <FileText className="w-6 h-6 mr-2" />
              Cek Ketersediaan
            </Button>
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto bg-primary hover:bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2"
              data-testid="button-cta-whatsapp"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
