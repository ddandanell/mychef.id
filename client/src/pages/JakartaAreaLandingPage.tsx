import { useLocation } from 'wouter';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, FileText, MapPin, Star, CheckCircle2, ChefHat, Clock, Utensils, Users, ShieldCheck, Sparkles, Heart, Calendar, Award, Phone, ArrowRight } from 'lucide-react';
import TrustBadges from '@/components/TrustBadges';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { useLocalizedPath } from '@/hooks/useLocalizedPath';
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
import chefImage1 from '@assets/generated_images/chef_cooking_in_luxury_kitchen.png';
import chefImage2 from '@assets/generated_images/Asian_male_chef_headshot_c57200a1.png';
import galleryImage1 from '@assets/generated_images/luxury_villa_dinner_experience.png';
import galleryImage2 from '@assets/generated_images/Chef_grilling_seafood_poolside_e160ded9.png';
import galleryImage3 from '@assets/generated_images/Intimate_dinner_party_Sanur_605d729e.png';

const HERO_IMAGES = [heroImage1, heroImage2, heroImage3];
const GALLERY_IMAGES = [galleryImage1, galleryImage2, galleryImage3, chefImage1, chefImage2];

interface JakartaAreaLandingPageProps {
  area: JakartaAreaData;
}

const ICON_MAP: Record<string, typeof ChefHat> = {
  chef: ChefHat,
  ingredients: Utensils,
  service: Users,
  custom: Sparkles,
  privacy: ShieldCheck,
  flexible: Clock,
};

function JakartaAreaLandingPage({ area }: JakartaAreaLandingPageProps) {
  const [, setLocation] = useLocation();
  const { getLocalizedPath } = useLocalizedPath();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(area.ctaWhatsAppMessage);
    window.open(`https://wa.me/6282237565997?text=${message}`, '_blank');
  };

  const handleQuoteClick = () => {
    setLocation(getLocalizedPath(`/contact/confirm?source=jakarta-${area.slug}`));
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
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-muted">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGES[0]}
            alt={`Private Chef ${area.name}`}
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4 text-white" />
            <span className="text-white">{area.name}, {area.region}</span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6" data-testid="text-hero-headline">
            {area.heroTitle}
          </h1>
          
          <p className="text-lg lg:text-xl text-white/95 mb-8 max-w-4xl mx-auto leading-relaxed">
            {area.heroSubtitle}
          </p>

          <ul className="text-left max-w-2xl mx-auto mb-8 space-y-3">
            {area.heroBullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-3 text-white/90">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm sm:text-base">{bullet}</span>
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
              Minta Penawaran Gratis
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

          {/* Hero Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {area.heroStats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4">
                <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8">
            {area.introSection.title}
          </h2>
          <div className="prose prose-lg max-w-none text-foreground/80 space-y-6">
            {area.introSection.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-base sm:text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {GALLERY_IMAGES.map((img, index) => (
              <div key={index} className={`relative overflow-hidden rounded-xl ${index === 0 ? 'col-span-2 row-span-2' : ''}`}>
                <img
                  src={img}
                  alt={`Private Chef ${area.name} Gallery ${index + 1}`}
                  className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Overview */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
              {area.experienceOverview.title}
            </h2>
            <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
              {area.experienceOverview.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {area.experienceOverview.features.map((feature, index) => {
              const IconComponent = ICON_MAP[feature.icon] || ChefHat;
              return (
                <Card key={index} className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
              {area.whyChooseUs.title}
            </h2>
            <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
              {area.whyChooseUs.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {area.whyChooseUs.reasons.map((reason, index) => (
              <Card key={index} className="hover-elevate border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{reason.title}</h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-12 bg-primary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-semibold text-primary-foreground mb-4">
            Siap Mencoba Layanan Private Chef?
          </h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
            Konsultasi gratis, tanpa komitmen. Tim kami siap membantu merencanakan pengalaman kuliner istimewa untuk Anda.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto bg-white hover:bg-white text-foreground px-8 py-6 text-lg font-semibold hover-elevate"
              data-testid="button-cta-banner-whatsapp"
            >
              <Phone className="w-6 h-6 mr-2" />
              Hubungi via WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
              {area.howItWorks.title}
            </h2>
            <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
              {area.howItWorks.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {area.howItWorks.steps.map((step, index) => (
              <div key={index} className="text-center relative">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-foreground/70">{step.description}</p>
                {index < area.howItWorks.steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-3 w-6 h-6 text-primary/50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
              {area.occasions.title}
            </h2>
            <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
              {area.occasions.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {area.occasions.items.map((occasion, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-5">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{occasion.name}</h3>
                  <p className="text-sm text-foreground/70">{occasion.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Examples */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
              {area.menuExamples.title}
            </h2>
            <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
              {area.menuExamples.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {area.menuExamples.packages.map((pkg, index) => (
              <Card key={index} className="hover-elevate overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Utensils className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {pkg.priceRange}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                  <p className="text-foreground/70 mb-4 text-sm">{pkg.description}</p>
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
          <div className="text-center mt-8">
            <Button
              size="lg"
              onClick={handleQuoteClick}
              className="bg-primary hover:bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2"
              data-testid="button-menu-quote"
            >
              <FileText className="w-6 h-6 mr-2" />
              Dapatkan Penawaran Menu Custom
            </Button>
          </div>
        </div>
      </section>

      {/* Chef Highlight */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">
                {area.chefHighlight.title}
              </h2>
              <p className="text-foreground/80 mb-6 text-lg leading-relaxed">
                {area.chefHighlight.description}
              </p>
              <ul className="space-y-3">
                {area.chefHighlight.qualities.map((quality, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{quality}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img
                src={chefImage1}
                alt={`Chef Profesional untuk ${area.name}`}
                className="rounded-2xl shadow-2xl w-full"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm">Chef Terverifikasi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
              {area.pricingInfo.title}
            </h2>
            <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
              {area.pricingInfo.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {area.pricingInfo.tiers.map((tier, index) => (
              <Card key={index} className={`hover-elevate ${index === 1 ? 'ring-2 ring-primary' : ''}`}>
                <CardContent className="p-6 text-center">
                  {index === 1 && (
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4 inline-block">
                      Paling Populer
                    </span>
                  )}
                  <h3 className="text-lg font-semibold mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{tier.rate}</div>
                  <p className="text-sm text-foreground/70">{tier.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="bg-muted rounded-xl p-6 text-center">
            <p className="text-sm text-foreground/80">{area.pricingInfo.note}</p>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
              {area.testimonials.title}
            </h2>
            <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
              {area.testimonials.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {area.testimonials.reviews.slice(0, 6).map((review, index) => (
              <Card key={index} className="hover-elevate">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-4 italic text-sm leading-relaxed">"{review.quote}"</p>
                  <div className="border-t pt-4">
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-foreground/60">{review.event}</p>
                    <p className="text-xs text-foreground/50 mt-1">{review.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Area Details */}
      <section className="py-16 lg:py-20 bg-card">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-center mb-6">
            {area.areaDetails.title}
          </h2>
          <p className="text-center text-foreground/80 mb-8 max-w-3xl mx-auto">
            {area.areaDetails.description}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {area.areaDetails.neighborhoods.map((neighborhood, index) => (
              <span key={index} className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                {neighborhood}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4">
              {area.faq.title}
            </h2>
            <p className="text-foreground/70 text-lg max-w-3xl mx-auto">
              {area.faq.subtitle}
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {area.faq.items.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${area.slug}-${index}`} 
                className="border-2 rounded-lg px-4 sm:px-6 bg-card hover-elevate"
                data-testid={`accordion-faq-${area.slug}-${index}`}
              >
                <AccordionTrigger 
                  className="text-left hover:no-underline py-4 sm:py-5"
                  data-testid={`button-faq-${area.slug}-${index}-trigger`}
                >
                  <span className="font-semibold text-sm sm:text-base pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent 
                  className="text-sm sm:text-base text-foreground/80 leading-relaxed pb-4 sm:pb-5"
                  data-testid={`text-faq-${area.slug}-${index}-answer`}
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
          <Heart className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">
            {area.closingCta.title}
          </h2>
          <p className="text-lg text-foreground/80 mb-4 max-w-2xl mx-auto">
            {area.closingCta.paragraph}
          </p>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            {area.closingCta.secondaryParagraph}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={handleQuoteClick}
              variant="outline"
              className="w-full sm:w-auto px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2"
              data-testid="button-closing-quote"
            >
              <FileText className="w-6 h-6 mr-2" />
              Cek Ketersediaan Tanggal
            </Button>
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto bg-primary hover:bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2"
              data-testid="button-closing-whatsapp"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Konsultasi Gratis via WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default JakartaAreaLandingPage;
