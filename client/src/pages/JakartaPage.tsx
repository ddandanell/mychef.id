import { useState, useEffect } from 'react';
import { useLocation } from 'wouter';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MessageCircle, FileText, MapPin, Star, CheckCircle2, ShoppingCart, ChefHat, Users, Building2, Utensils, Calendar, Award } from 'lucide-react';
import SEO from '@/components/SEO';
import Header from '@/components/Header';
import TrustBadges from '@/components/TrustBadges';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import SampleMenus from '@/components/SampleMenus';
import ExperienceOverview from '@/components/ExperienceOverview';
import ChefGallery from '@/components/ChefGallery';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import InternalLinks from '@/components/InternalLinks';
import { Link } from 'wouter';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import heroImage1 from '@assets/generated_images/Chef_preparing_satay_villa_kitchen_633e507a.png';
import heroImage2 from '@assets/generated_images/Beachside_dining_sunset_Seminyak_c50d5157.png';
import heroImage3 from '@assets/generated_images/Family_gathering_Ubud_home_e8a96e97.png';

const HERO_IMAGES = [heroImage1, heroImage2, heroImage3];

const jakartaAreas = [
  'Central Jakarta', 'South Jakarta', 'North Jakarta', 'West Jakarta', 'East Jakarta',
  'Menteng', 'Kemang', 'Senopati', 'SCBD', 'Pondok Indah', 'Kebayoran Baru',
  'PIK (Pantai Indah Kapuk)', 'Kelapa Gading', 'Kuningan', 'Sudirman'
];

const jakartaServices = [
  { icon: Building2, title: 'Corporate Catering Jakarta', description: 'Premium corporate event catering, board meetings, and office celebrations' },
  { icon: Utensils, title: 'Private Chef Jakarta', description: 'In-home dining experiences with background-checked professional chefs' },
  { icon: Calendar, title: 'Wedding Catering Jakarta', description: 'Elegant wedding receptions, engagement parties, and bridal events' },
  { icon: Users, title: 'Event Catering Jakarta', description: 'Birthday parties, anniversaries, family reunions, and special occasions' },
];

const jakartaFaqItems = [
  {
    question: 'What catering services do you offer in Jakarta?',
    answer: 'We offer comprehensive catering Jakarta services including private chef dining, corporate event catering, wedding catering, birthday celebrations, family reunions, and healthy meal delivery. Our professional chefs serve all Jakarta areas from Menteng to PIK, SCBD to Kemang.'
  },
  {
    question: 'How do I book a private chef in Jakarta?',
    answer: 'Booking a private chef Jakarta is easy! Contact us via WhatsApp with your event details - date, guest count, location, and cuisine preferences. We match you with the perfect chef and send a custom menu proposal within 24 hours. 50% deposit secures your booking.'
  },
  {
    question: 'What areas of Jakarta do you serve?',
    answer: 'We serve all Jakarta areas including Central Jakarta (Menteng, Sudirman), South Jakarta (Kemang, Senopati, Kebayoran Baru, Pondok Indah), North Jakarta (PIK, Kelapa Gading), and East/West Jakarta. Our chefs travel to your home, office, or venue.'
  },
  {
    question: 'How much does catering in Jakarta cost?',
    answer: 'Catering Jakarta pricing starts from Rp 800,000/hour for private chef services. Corporate events from Rp 150,000/person, wedding catering from Rp 200,000/person. Exact pricing depends on guest count, menu complexity, and service duration. Contact us for a free custom quote.'
  },
  {
    question: 'Do you offer corporate catering in Jakarta?',
    answer: 'Yes! Our corporate catering Jakarta services are perfect for board meetings, team celebrations, product launches, client dinners, and office events. We serve Fortune 500 companies, startups, and international organizations across SCBD, Sudirman, and Kuningan.'
  },
  {
    question: 'Can you handle wedding catering in Jakarta?',
    answer: 'Absolutely! Our wedding catering Indonesia services include elegant receptions, intimate ceremonies, engagement parties, and bridal showers. We create custom menus featuring Indonesian, Western, Asian, or fusion cuisines. From 20 to 500+ guests.'
  },
  {
    question: 'What cuisines are available for Jakarta catering?',
    answer: 'Our Jakarta chefs specialize in Indonesian (authentic Padang, Sundanese, Javanese), Western fine dining, Japanese, Chinese, Italian, French, Thai, and creative fusion. We accommodate halal requirements, vegetarian, vegan, and all dietary restrictions.'
  },
  {
    question: 'How far in advance should I book catering in Jakarta?',
    answer: 'For best results, book 1-2 weeks ahead for private dinners, 2-3 weeks for corporate events, and 1-2 months for wedding catering. Peak seasons (Ramadan, Christmas, New Year) require earlier booking. Last-minute requests often possible - just ask!'
  },
  {
    question: 'Do you provide healthy meal delivery in Jakarta?',
    answer: 'Yes! Our healthy meal delivery Indonesia service provides nutritious, chef-prepared meals for busy Jakarta professionals. Options include meal prep (3-5 days), daily delivery, weight management programs, and specialty diets (keto, low-carb, detox).'
  }
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://mychef.id/jakarta",
  "name": "myCHEF Indonesia - Jakarta Catering Services",
  "alternateName": ["Catering Jakarta", "Private Chef Jakarta", "Wedding Catering Jakarta"],
  "description": "Jakarta's premier catering and private chef service. Professional catering for corporate events, weddings, private dining, and healthy meal delivery across all Jakarta areas since 2012.",
  "url": "https://mychef.id/jakarta",
  "logo": "https://mychef.id/logo.png",
  "image": "https://mychef.id/og-image.jpg",
  "telephone": "+62-822-3756-5997",
  "email": "indonesia@mychef.id",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Jakarta",
    "addressRegion": "DKI Jakarta",
    "addressCountry": "ID"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "-6.2088",
    "longitude": "106.8456"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "08:00",
    "closes": "22:00"
  },
  "priceRange": "Rp 800,000 - Rp 2,000,000+",
  "currenciesAccepted": "IDR",
  "areaServed": [
    { "@type": "City", "name": "Jakarta" },
    { "@type": "AdministrativeArea", "name": "South Jakarta" },
    { "@type": "AdministrativeArea", "name": "Central Jakarta" },
    { "@type": "AdministrativeArea", "name": "North Jakarta" }
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "bestRating": "5",
    "ratingCount": "200"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Jakarta Catering Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Catering Jakarta" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Private Chef Jakarta" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wedding Catering Jakarta" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Catering Jakarta" }}
    ]
  }
};

export default function JakartaPage() {
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
    setLocation('/contact/confirm?source=jakarta-catering');
  };

  const handleQuoteClick = () => {
    setLocation('/contact/confirm?source=jakarta-catering');
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="Catering Jakarta | Private Chef Jakarta | Best Wedding Catering Indonesia | myCHEF"
        description="Jakarta's #1 catering service. Premium private chef Jakarta, corporate catering, wedding catering Indonesia. Professional chefs for events, parties & healthy meal delivery. Serving Menteng, Kemang, SCBD, PIK & all Jakarta. From Rp 800,000/hour."
        canonical="https://mychef.id/jakarta"
        ogType="website"
        keywords="catering jakarta, private chef jakarta, wedding catering indonesia, corporate catering jakarta, private chef indonesia, catering services jakarta, event catering jakarta, healthy meal delivery jakarta, chef for hire jakarta, best catering jakarta, luxury chef jakarta"
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
              alt={`Catering Jakarta - myCHEF Indonesia ${index + 1}`}
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
            <span className="text-white">Jakarta, Indonesia</span>
          </div>
          
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6" data-testid="text-jakarta-headline">
            Catering Jakarta<br />Private Chef Services
          </h1>
          
          <p className="text-xl lg:text-2xl text-white/95 mb-8 max-w-3xl mx-auto">
            Jakarta's premier catering and private chef service for corporate events, weddings, private dining, and healthy meal delivery. Professional background-checked chefs serving all Jakarta areas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 w-full sm:w-auto px-4 sm:px-0">
            <Button
              size="lg"
              onClick={handleQuoteClick}
              className="w-full sm:w-auto bg-white hover:bg-white text-foreground px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2 shadow-xl border-2 border-white"
              data-testid="button-jakarta-quote"
            >
              <FileText className="w-6 h-6 mr-2" />
              Get Free Quote
            </Button>
            
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto bg-primary hover:bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2 shadow-xl"
              data-testid="button-jakarta-whatsapp"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              WhatsApp Us
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <span className="font-semibold text-white">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <CheckCircle2 className="w-5 h-5 text-white" />
              <span className="font-semibold text-white">1000+ Events</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
              <Award className="w-5 h-5 text-white" />
              <span className="font-semibold text-white">Since 2012</span>
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

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl lg:text-5xl font-semibold mb-4">
              Jakarta Catering Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              From intimate private dinners to large corporate events and weddings, myCHEF Indonesia delivers exceptional catering services across Jakarta.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jakartaServices.map((service, index) => (
              <Card key={index} className="hover-elevate border-2 border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-foreground/70">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ExperienceOverview />
      <ChefGallery />

      {/* Areas Served */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-semibold text-center mb-8 sm:mb-12">
            Catering Services Across All Jakarta Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12">
            {jakartaAreas.map((area, index) => (
              <div 
                key={index} 
                className="bg-primary/10 text-primary px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base"
                data-testid={`badge-jakarta-area-${index}`}
              >
                {area}
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto">
            <Card className="bg-background border-2">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Why Choose myCHEF for Jakarta Catering?</h3>
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed mb-4 sm:mb-6">
                  Jakarta is Indonesia's bustling capital with diverse culinary tastes and high standards for professional catering. Our Jakarta private chefs understand the city's unique demands - from corporate executives in SCBD requiring formal dining to families in Kemang hosting intimate celebrations. We deliver restaurant-quality experiences in your home, office, or venue with complete professionalism.
                </p>
                <div className="border-t pt-4 sm:pt-6">
                  <h4 className="font-semibold mb-3 text-sm sm:text-base">Popular Jakarta Catering Venues</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Private Homes', 'Corporate Offices', 'Rooftop Venues', 'Wedding Halls', 'Garden Parties', 'Luxury Apartments'].map((venue, index) => (
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
            How to Book Catering in Jakarta
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">1. Contact Us</h3>
              <p className="text-sm text-foreground/70">WhatsApp us with your Jakarta event details - date, guests, venue, and cuisine preferences</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <FileText className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">2. Get Custom Quote</h3>
              <p className="text-sm text-foreground/70">Receive a tailored menu proposal and transparent pricing within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">3. Confirm Booking</h3>
              <p className="text-sm text-foreground/70">Approve your menu and secure your date with 50% deposit</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Star className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">4. Enjoy!</h3>
              <p className="text-sm text-foreground/70">Your Jakarta private chef arrives, cooks, serves, and handles complete cleanup</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
            <Button
              size="lg"
              onClick={handleQuoteClick}
              variant="outline"
              className="w-full sm:w-auto px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2"
              data-testid="button-jakarta-hiw-quote"
            >
              <FileText className="w-6 h-6 mr-2" />
              Get Free Quote
            </Button>
            
            <Button
              size="lg"
              onClick={handleWhatsAppClick}
              className="w-full sm:w-auto bg-primary hover:bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2"
              data-testid="button-jakarta-hiw-whatsapp"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              WhatsApp Now
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-semibold text-center mb-3 sm:mb-4">
            Jakarta Catering Pricing
          </h2>
          <p className="text-center text-sm sm:text-base text-foreground/70 mb-2">Transparent pricing with no hidden fees</p>
          <p className="text-xs sm:text-sm text-center text-foreground/60 mb-8 sm:mb-12 px-4">
            50% deposit to confirm, 50% due before service. Payment via bank transfer, credit card, or cash.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <Card>
              <CardContent className="p-4 sm:p-6">
                <ChefHat className="w-7 h-7 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold mb-2">Private Chef Jakarta</h3>
                <div className="text-xl sm:text-2xl font-bold text-primary mb-2">From Rp 800,000/hour</div>
                <p className="text-xs sm:text-sm text-foreground/70 mb-3">Minimum 4 hours</p>
                <ul className="text-xs sm:text-sm text-foreground/80 space-y-1">
                  <li>• Professional equipment provided</li>
                  <li>• Complete kitchen cleanup</li>
                  <li>• Custom menu creation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 sm:p-6">
                <Building2 className="w-7 h-7 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold mb-2">Corporate Catering</h3>
                <div className="text-xl sm:text-2xl font-bold text-primary mb-2">From Rp 150,000/person</div>
                <p className="text-xs sm:text-sm text-foreground/70 mb-3">Minimum 15 persons</p>
                <ul className="text-xs sm:text-sm text-foreground/80 space-y-1">
                  <li>• Board meetings & events</li>
                  <li>• Team celebrations</li>
                  <li>• Client entertainment</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4 sm:p-6">
                <Calendar className="w-7 h-7 sm:w-8 sm:h-8 text-primary mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold mb-2">Wedding Catering</h3>
                <div className="text-xl sm:text-2xl font-bold text-primary mb-2">From Rp 200,000/person</div>
                <p className="text-xs sm:text-sm text-foreground/70 mb-3">Minimum 50 guests</p>
                <ul className="text-xs sm:text-sm text-foreground/80 space-y-1">
                  <li>• Custom wedding menus</li>
                  <li>• Full service staff</li>
                  <li>• Table settings available</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <TrustBadges />
      <TestimonialCarousel />
      <SampleMenus />

      {/* Jakarta FAQ */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-5xl font-semibold mb-3 sm:mb-4">
              Jakarta Catering FAQ
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 px-4">
              Common questions about our Jakarta catering and private chef services
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {jakartaFaqItems.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="border-2 rounded-lg px-4 sm:px-6 bg-card hover-elevate"
                data-testid={`accordion-jakarta-faq-${index}`}
              >
                <AccordionTrigger 
                  className="text-left hover:no-underline py-4 sm:py-5"
                  data-testid={`button-jakarta-faq-${index}-trigger`}
                >
                  <span className="font-semibold text-sm sm:text-base pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent 
                  className="text-sm sm:text-base text-foreground/80 leading-relaxed pb-4 sm:pb-5"
                  data-testid={`text-jakarta-faq-${index}-answer`}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-sm sm:text-base text-foreground/70 mb-4 sm:mb-6 px-4">Still have questions about Jakarta catering?</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 sm:px-0">
              <Button
                size="lg"
                onClick={handleWhatsAppClick}
                className="w-full sm:w-auto bg-primary hover:bg-primary text-primary-foreground px-8 py-6 text-lg font-semibold hover-elevate active-elevate-2"
                data-testid="button-jakarta-faq-whatsapp"
              >
                <MessageCircle className="w-6 h-6 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Links to Bali */}
      <section className="py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="font-semibold text-lg mb-6 text-center">Also Serving Bali</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/seminyak" className="text-sm text-primary hover:underline">Private Chef Seminyak</Link>
            <Link href="/canggu" className="text-sm text-primary hover:underline">Private Chef Canggu</Link>
            <Link href="/ubud" className="text-sm text-primary hover:underline">Private Chef Ubud</Link>
            <Link href="/nusa-dua" className="text-sm text-primary hover:underline">Private Chef Nusa Dua</Link>
            <Link href="/uluwatu" className="text-sm text-primary hover:underline">Private Chef Uluwatu</Link>
            <Link href="/services/wedding-celebrations" className="text-sm text-primary hover:underline">Wedding Catering Bali</Link>
            <Link href="/services/corporate-events" className="text-sm text-primary hover:underline">Corporate Events Bali</Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
