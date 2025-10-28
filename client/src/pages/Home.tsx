import SEO from '@/components/SEO';
import { useGeolocation } from '@/contexts/GeolocationContext';
import HeroSection from '@/components/HeroSection';
import ExperienceOverview from '@/components/ExperienceOverview';
import HowItWorks from '@/components/HowItWorks';
import WhyChoose from '@/components/WhyChoose';
import TrustBadges from '@/components/TrustBadges';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ChefProfiles from '@/components/ChefProfiles';
import LocationsSection from '@/components/LocationsSection';
import OccasionsGrid from '@/components/OccasionsGrid';
import PricingSection from '@/components/PricingSection';
import SampleMenus from '@/components/SampleMenus';
import FAQSection from '@/components/FAQSection';
import BookingTips from '@/components/BookingTips';
import VillaPartners from '@/components/VillaPartners';
import PartyAddons from '@/components/PartyAddons';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieBanner from '@/components/CookieBanner';

export default function Home() {
  const { city } = useGeolocation();
  
  return (
    <div className="min-h-screen">
      <SEO 
        title={`Private Chef Services in ${city} | Professional In-Villa Dining | myCHEF Indonesia`}
        description={`Book professional private chefs for in-villa dining in ${city} and across Bali. Background-checked chefs deliver personalized culinary experiences for events, recurring services, and full-time needs.`}
        canonical="https://mychef.id"
        ogType="website"
        keywords={`private chef ${city}, personal chef ${city}, chef at home ${city}, villa chef ${city}, private dining ${city}, private chef Bali, chef services Bali`}
      />
      <HeroSection />
      <ExperienceOverview />
      <HowItWorks />
      <WhyChoose />
      <TrustBadges />
      <TestimonialCarousel />
      <ChefProfiles />
      <LocationsSection />
      <OccasionsGrid />
      <PricingSection />
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
