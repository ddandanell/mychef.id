import SEO from '@/components/SEO';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ExperienceOverview from '@/components/ExperienceOverview';
import HowItWorks from '@/components/HowItWorks';
import WhyChoose from '@/components/WhyChoose';
import TrustBadges from '@/components/TrustBadges';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import ChefProfiles from '@/components/ChefProfiles';
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
import { FloatingOrbs, SideAccents } from '@/components/AnimatedDecorations';
import MotivationalPopup from '@/components/MotivationalPopup';
import TrustBadgesCompact from '@/components/TrustBadgesCompact';
import TrustpilotSection from '@/components/TrustpilotSection';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <FloatingOrbs />
      <SideAccents />
      <MotivationalPopup />
      <SEO 
        title="Private Chef Bali | Professional In-Villa Dining Services | myCHEF Indonesia"
        description="Experience culinary excellence with myCHEF Indonesia's private chef services in Bali. Expert chefs, personalized menus, and premium ingredients delivered to your villa. Serving Seminyak, Ubud, Canggu & more since 2012. From Rp 800,000/hour."
        canonical="https://mychef.id"
        ogType="website"
        keywords="private chef Bali, personal chef Bali, villa chef, in-home dining Bali, professional chef services, gourmet meals Bali, private dining Seminyak, chef hire Ubud, Canggu chef services, restaurant-quality home dining, background-checked chefs"
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
      <ChefProfiles />
      <LocationsSection />
      <OccasionsGrid />
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
