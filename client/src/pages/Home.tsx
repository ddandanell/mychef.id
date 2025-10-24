import SEO from '@/components/SEO';
import HeroSection from '@/components/HeroSection';
import ExperienceOverview from '@/components/ExperienceOverview';
import HowItWorks from '@/components/HowItWorks';
import WhyChoose from '@/components/WhyChoose';
import TrustBadges from '@/components/TrustBadges';
import Testimonials from '@/components/Testimonials';
import ChefProfiles from '@/components/ChefProfiles';
import LocationsSection from '@/components/LocationsSection';
import OccasionsGrid from '@/components/OccasionsGrid';
import PricingSection from '@/components/PricingSection';
import SampleMenus from '@/components/SampleMenus';
import FAQSection from '@/components/FAQSection';
import BookingTips from '@/components/BookingTips';
import VillaPartners from '@/components/VillaPartners';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieBanner from '@/components/CookieBanner';

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Hire a Private Chef at Home in Bali & Indonesia | myCHEF Indonesia"
        description="Experience personalized fine dining in your villa with myCHEF Indonesia. Professional private chefs from Rp 800,000/hour serving Bali. Perfect match chef selection. Book on WhatsApp +62 822-3756-5997."
        canonical="https://mychef.id"
        ogType="website"
      />
      <HeroSection />
      <ExperienceOverview />
      <HowItWorks />
      <WhyChoose />
      <TrustBadges />
      <Testimonials />
      <ChefProfiles />
      <LocationsSection />
      <OccasionsGrid />
      <PricingSection />
      <SampleMenus />
      <FAQSection />
      <BookingTips />
      <VillaPartners />
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}
