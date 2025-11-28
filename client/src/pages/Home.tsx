import SEO from '@/components/SEO';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ExperienceOverview from '@/components/ExperienceOverview';
import HowItWorks from '@/components/HowItWorks';
import WhyChoose from '@/components/WhyChoose';
import TrustBadges from '@/components/TrustBadges';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ChefProfiles from '@/components/ChefProfiles';
import ChefShowcase from '@/components/ChefShowcase';
import ChefGallery from '@/components/ChefGallery';
import DishGallery from '@/components/DishGallery';
import LocationsSection from '@/components/LocationsSection';
import OccasionsGrid from '@/components/OccasionsGrid';
import PricingSection from '@/components/PricingSection';
import IngredientShoppingSection from '@/components/IngredientShoppingSection';
import SampleMenus from '@/components/SampleMenus';
import FAQSection from '@/components/FAQSection';
import BookingTips from '@/components/BookingTips';
import VillaPartners from '@/components/VillaPartners';
import PartyAddons from '@/components/PartyAddons';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieBanner from '@/components/CookieBanner';
import { SideAccents } from '@/components/AnimatedDecorations';
import MotivationalPopup from '@/components/MotivationalPopup';
import TrustBadgesCompact from '@/components/TrustBadgesCompact';
import TrustpilotSection from '@/components/TrustpilotSection';
import PricingPopup from '@/components/PricingPopup';
import CalculatorCTA from '@/components/CalculatorCTA';
import ReviewPlatforms from '@/components/ReviewPlatforms';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <SideAccents />
      <MotivationalPopup />
      <PricingPopup />
      <SEO 
        title="Private Chef Bali & Jakarta | Best Private Chef Indonesia | Catering Jakarta | myCHEF"
        description="Indonesia's #1 private chef service. Book the best private chef in Bali, Jakarta & Indonesia for villa parties, weddings, corporate events. Premium catering Jakarta. Luxury chef Indonesia since 2012. Private dining & healthy meal delivery. From Rp 800,000/hour."
        canonical="https://mychef.id"
        ogType="website"
        keywords="private chef bali, private chef jakarta, private chef indonesia, catering jakarta, best private chef indonesia, luxury chef indonesia, private chef for events, wedding catering indonesia, private dining indonesia, healthy meal delivery indonesia, private chef booking indonesia, chef for hire indonesia, villa chef bali, personal chef jakarta"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "https://mychef.id",
          "name": "myCHEF Indonesia",
          "alternateName": ["myCHEF Bali", "myCHEF Jakarta", "Private Chef Indonesia"],
          "description": "Indonesia's premier private chef booking service offering luxury in-villa dining, corporate catering, wedding celebrations, and healthy meal delivery across Bali and Jakarta since 2012.",
          "url": "https://mychef.id",
          "logo": "https://mychef.id/logo.png",
          "image": "https://mychef.id/og-image.jpg",
          "telephone": "+62-822-3756-5997",
          "email": "indonesia@mychef.id",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bali",
            "addressCountry": "ID"
          },
          "areaServed": [
            { "@type": "City", "name": "Bali" },
            { "@type": "City", "name": "Jakarta" },
            { "@type": "Country", "name": "Indonesia" }
          ],
          "priceRange": "Rp 800,000 - Rp 1,200,000+",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "bestRating": "5",
            "ratingCount": "500"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Private Chef Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Private Chef Bali" }},
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Catering Jakarta" }},
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wedding Catering Indonesia" }},
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Events" }}
            ]
          }
        }}
      />
      <Header />
      <HeroSection />
      <TrustBadgesCompact />
      <ExperienceOverview />
      <HowItWorks />
      <ChefGallery />
      <DishGallery />
      <WhyChoose />
      <TrustBadges />
      <TrustpilotSection />
      <TestimonialCarousel />
      <ReviewPlatforms />
      <ChefShowcase />
      <ChefProfiles />
      <LocationsSection />
      <OccasionsGrid />
      <CalculatorCTA />
      <PricingSection />
      <IngredientShoppingSection />
      <SampleMenus />
      <FAQSection />
      <BookingTips />
      <VillaPartners />
      <PartyAddons />
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}
