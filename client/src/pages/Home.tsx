import HeroSection from '@/components/HeroSection';
import ExperienceOverview from '@/components/ExperienceOverview';
import HowItWorks from '@/components/HowItWorks';
import WhyChoose from '@/components/WhyChoose';
import Testimonials from '@/components/Testimonials';
import ChefProfiles from '@/components/ChefProfiles';
import LocationsSection from '@/components/LocationsSection';
import OccasionsGrid from '@/components/OccasionsGrid';
import PricingSection from '@/components/PricingSection';
import SampleMenus from '@/components/SampleMenus';
import FAQSection from '@/components/FAQSection';
import BookingTips from '@/components/BookingTips';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import CookieBanner from '@/components/CookieBanner';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ExperienceOverview />
      <HowItWorks />
      <WhyChoose />
      <Testimonials />
      <ChefProfiles />
      <LocationsSection />
      <OccasionsGrid />
      <PricingSection />
      <SampleMenus />
      <FAQSection />
      <BookingTips />
      <Footer />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
}
