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
        title="Private Chef in Bali — Restaurant Dining at Your Villa | myCHEF"
        description="A chef in your villa, cooking the menu you choose. Restaurant-quality dining without the restaurant. Bali's longest-running private chef service since 2012. WhatsApp +62 822-3756-5997."
        canonical="https://mychef.id/"
        ogType="website"
        keywords="private chef bali, private chef in your villa, in-villa dining bali, private chef booking bali, mediterranean chef bali, mychef indonesia"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://mychef.id/#home-service",
            "serviceType": "Private chef booking and in-villa dining",
            "provider": { "@id": "https://mychef.id/#organization" },
            "areaServed": [
              { "@type": "AdministrativeArea", "name": "Bali, Indonesia" }
            ],
            "offers": {
              "@type": "Offer",
              "priceCurrency": "IDR",
              "price": "800000",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "800000",
                "priceCurrency": "IDR",
                "unitText": "HOUR",
                "minPrice": "2400000",
                "description": "From Rp 800,000 per hour, 3-hour minimum"
              }
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Private Chef Services",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Private Villa Dinner" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Birthday & Anniversary Dinner" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wedding Celebration Dining" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Event Catering" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Weekly Meal Prep" }},
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Full-Time Household Chef" }}
              ]
            }
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "@id": "https://mychef.id/#faqs",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Who is the best private chef in Bali?",
                "acceptedAnswer": { "@type": "Answer", "text": "myCHEF Indonesia has operated as a private chef booking service in Bali since 2012, with background-checked chefs covering Canggu, Seminyak, Ubud, Uluwatu, Nusa Dua, and 19 other neighborhoods. The 'best' chef depends on the cuisine you want and the size of the event — for a Mediterranean villa dinner, request a chef with EU restaurant experience; for a Balinese feast, request a chef trained in classic Balinese technique. Bookings are confirmed in under an hour via WhatsApp at +62 822-3756-5997." }
              },
              {
                "@type": "Question",
                "name": "How much does a private chef cost in Bali?",
                "acceptedAnswer": { "@type": "Answer", "text": "A private chef in Bali costs from Rp 800,000 per hour with a 3-hour minimum, plus ingredient cost. A typical 4-course dinner for 6 guests runs Rp 3.5M–4.5M total (chef fee + ingredients + cleanup). Additional staff (waiter, bartender, sommelier) are Rp 300,000–500,000 per hour. myCHEF includes equipment, presentation, and cleanup in the chef rate." }
              },
              {
                "@type": "Question",
                "name": "Can I hire a private chef for one night in a Bali villa?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most myCHEF bookings are single-night villa dinners for 4–20 guests. The chef arrives 2–3 hours before service, shops for ingredients en route, cooks in your villa kitchen, plates and serves, and cleans the kitchen before leaving. You only need to provide a kitchen with basic appliances and table settings." }
              },
              {
                "@type": "Question",
                "name": "What cuisines can a private chef in Bali make?",
                "acceptedAnswer": { "@type": "Answer", "text": "myCHEF chefs specialize in Mediterranean, modern European, Asian fusion, traditional Balinese, vegan, and dietary-restricted menus (gluten-free, dairy-free, kosher, halal). Each chef profile shows their specializations. You can request a specific cuisine when booking." }
              },
              {
                "@type": "Question",
                "name": "Is it safe to hire a private chef in your villa in Bali?",
                "acceptedAnswer": { "@type": "Answer", "text": "Every myCHEF chef is background-checked, has verifiable hospitality experience, and is insured under myCHEF's commercial liability policy. The company has operated since 2012 and serves villa management companies, individual travelers, and recurring private clients across Bali." }
              },
              {
                "@type": "Question",
                "name": "How do I book a private chef in Bali?",
                "acceptedAnswer": { "@type": "Answer", "text": "The fastest way is WhatsApp at +62 822-3756-5997 — most bookings are confirmed within an hour. You can also use the quote form on mychef.id. Booking 2+ days in advance gives the widest chef + menu choice; same-day bookings are usually possible in Canggu, Seminyak, and Ubud subject to availability." }
              },
              {
                "@type": "Question",
                "name": "Does myCHEF cover Canggu, Seminyak, Uluwatu, Ubud, and Nusa Dua?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. myCHEF covers all major Bali neighborhoods: Canggu (including Berawa, Echo Beach, Batu Bolong, Pererenan), Seminyak, Petitenget, Kerobokan, Legian, Kuta, Jimbaran, Uluwatu, Nusa Dua, Pecatu, Ubud, Tegallalang, Sanur, Denpasar, Tabanan, Tanah Lot, Gianyar, Lovina, Amed, Candidasa, and Padang Bai." }
              },
              {
                "@type": "Question",
                "name": "Can I hire a chef weekly or full-time for my Bali home?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes. myCHEF places chefs on weekly meal-prep contracts (1–3 sessions per week) and full-time household-chef arrangements for expat families and long-term renters. Weekly meal-prep starts at Rp 2.5M per session." }
              },
              {
                "@type": "Question",
                "name": "Can a private chef cook a birthday or anniversary dinner in Bali?",
                "acceptedAnswer": { "@type": "Answer", "text": "Yes — birthdays, anniversaries, proposals, and milestone dinners are myCHEF's most-booked event type. Add-ons include sommelier wine pairing, professional photography coordination, candle and flower setup, and surprise cake course." }
              },
              {
                "@type": "Question",
                "name": "What's the difference between myCHEF and a Bali catering company?",
                "acceptedAnswer": { "@type": "Answer", "text": "Catering companies cook food off-site and deliver it to you. myCHEF sends a chef into your kitchen who shops, cooks, plates, and serves on the spot — the same model as a private restaurant in your home. Food is fresher and the experience is interactive (chef can describe dishes, take wine cues, and adapt the menu for picky eaters)." }
              }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://mychef.id/" }
            ]
          }
        ]}
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
