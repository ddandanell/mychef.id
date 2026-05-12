import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy, useEffect } from "react";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import PaymentTerms from "@/pages/PaymentTerms";
import JoinOurTeam from "@/pages/JoinOurTeam";
import ContactConfirm from "@/pages/ContactConfirm";
import QuoteFunnel from "@/pages/QuoteFunnel";
import AdminQuotes from "@/pages/AdminQuotes";
import PricingCalculator from "@/pages/PricingCalculator";
import CalculationModel2 from "@/pages/CalculationModel2";
import RecommendedServices from "@/pages/RecommendedServices";
import NotFound from "@/pages/not-found";

const SeminyakPage = lazy(() => import("@/pages/SeminyakPage"));
const CangguPage = lazy(() => import("@/pages/CangguPage"));
const UbudPage = lazy(() => import("@/pages/UbudPage"));
const SanurPage = lazy(() => import("@/pages/SanurPage"));
const NusaDuaPage = lazy(() => import("@/pages/NusaDuaPage"));
const UluwatuPage = lazy(() => import("@/pages/UluwatuPage"));
const JimbaranPage = lazy(() => import("@/pages/JimbaranPage"));
const KutaPage = lazy(() => import("@/pages/KutaPage"));
const LegianPage = lazy(() => import("@/pages/LegianPage"));
const KerobokanPage = lazy(() => import("@/pages/KerobokanPage"));
const PetitengetPage = lazy(() => import("@/pages/PetitengetPage"));
const BerawaPage = lazy(() => import("@/pages/BerawaPage"));
const PererenanPage = lazy(() => import("@/pages/PererenanPage"));
const TanahLotPage = lazy(() => import("@/pages/TanahLotPage"));
const TabananPage = lazy(() => import("@/pages/TabananPage"));
const DenpasarPage = lazy(() => import("@/pages/DenpasarPage"));
const GianyarPage = lazy(() => import("@/pages/GianyarPage"));
const TegallalangPage = lazy(() => import("@/pages/TegallalangPage"));
const AmedPage = lazy(() => import("@/pages/AmedPage"));
const LovinaPage = lazy(() => import("@/pages/LovinaPage"));
const CandidasaPage = lazy(() => import("@/pages/CandidasaPage"));
const PadangBaiPage = lazy(() => import("@/pages/PadangBaiPage"));
const BukitPage = lazy(() => import("@/pages/BukitPage"));
const UngasanPage = lazy(() => import("@/pages/UngasanPage"));
const PecatuPage = lazy(() => import("@/pages/PecatuPage"));
const JakartaPage = lazy(() => import("@/pages/JakartaPage"));

import JakartaAreaLandingPage from "@/pages/JakartaAreaLandingPage";
import { JAKARTA_AREA_DATA } from "@shared/jakartaAreaData";

const VillaPartiesPage = lazy(() => import("@/pages/services/VillaPartiesPage"));
const RomanticDinnersPage = lazy(() => import("@/pages/services/RomanticDinnersPage"));
const BirthdayCelebrationsPage = lazy(() => import("@/pages/services/BirthdayCelebrationsPage"));
const FamilyReunionsPage = lazy(() => import("@/pages/services/FamilyReunionsPage"));
const CorporateEventsPage = lazy(() => import("@/pages/services/CorporateEventsPage"));
const WeddingCelebrationsPage = lazy(() => import("@/pages/services/WeddingCelebrationsPage"));
const CookingClassesPage = lazy(() => import("@/pages/services/CookingClassesPage"));
const WeeklyMealPrepPage = lazy(() => import("@/pages/services/WeeklyMealPrepPage"));

const BestPrivateChefIndonesiaPage = lazy(() => import("@/pages/keywords/BestPrivateChefIndonesiaPage"));
const PrivateChefForEventsPage = lazy(() => import("@/pages/keywords/PrivateChefForEventsPage"));
const LuxuryChefIndonesiaPage = lazy(() => import("@/pages/keywords/LuxuryChefIndonesiaPage"));
const WeddingCateringIndonesiaPage = lazy(() => import("@/pages/keywords/WeddingCateringIndonesiaPage"));
const PrivateDiningIndonesiaPage = lazy(() => import("@/pages/keywords/PrivateDiningIndonesiaPage"));
const HealthyMealDeliveryIndonesiaPage = lazy(() => import("@/pages/keywords/HealthyMealDeliveryIndonesiaPage"));
const PrivateChefBookingIndonesiaPage = lazy(() => import("@/pages/keywords/PrivateChefBookingIndonesiaPage"));
const ChefForHireIndonesiaPage = lazy(() => import("@/pages/keywords/ChefForHireIndonesiaPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const MenusPage = lazy(() => import("@/pages/MenusPage"));
const MenusMediterraneanPage = lazy(() => import("@/pages/MenusMediterraneanPage"));
const VillaPartnersHubPage = lazy(() => import("@/pages/VillaPartnersHubPage"));
const MenusBalinesePage = lazy(() => import("@/pages/MenusBalinesePage"));
const MenusAsianFusionPage = lazy(() => import("@/pages/MenusAsianFusionPage"));
const MenusVeganPage = lazy(() => import("@/pages/MenusVeganPage"));
const ChefsPage = lazy(() => import("@/pages/ChefsPage"));
const FAQMasterPage = lazy(() => import("@/pages/FAQMasterPage"));
const ContentPage = lazy(() => import("@/pages/ContentPage"));
import { CONTENT_PAGES } from "@/pages/content-pages";

function Router() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/jakarta" component={JakartaPage} />
      <Route path="/private-chef-menteng">
        {() => <JakartaAreaLandingPage area={JAKARTA_AREA_DATA['menteng']} />}
      </Route>
      <Route path="/private-chef-kebayoran-baru">
        {() => <JakartaAreaLandingPage area={JAKARTA_AREA_DATA['kebayoran-baru']} />}
      </Route>
      <Route path="/private-chef-pondok-indah">
        {() => <JakartaAreaLandingPage area={JAKARTA_AREA_DATA['pondok-indah']} />}
      </Route>
      <Route path="/private-chef-senayan">
        {() => <JakartaAreaLandingPage area={JAKARTA_AREA_DATA['senayan']} />}
      </Route>
      <Route path="/private-chef-scbd">
        {() => <JakartaAreaLandingPage area={JAKARTA_AREA_DATA['scbd']} />}
      </Route>
      <Route path="/private-chef-kemang">
        {() => <JakartaAreaLandingPage area={JAKARTA_AREA_DATA['kemang']} />}
      </Route>
      <Route path="/private-chef-pantai-indah-kapuk">
        {() => <JakartaAreaLandingPage area={JAKARTA_AREA_DATA['pantai-indah-kapuk']} />}
      </Route>
      <Route path="/private-chef-kelapa-gading">
        {() => <JakartaAreaLandingPage area={JAKARTA_AREA_DATA['kelapa-gading']} />}
      </Route>
      <Route path="/private-chef-kuningan">
        {() => <JakartaAreaLandingPage area={JAKARTA_AREA_DATA['kuningan']} />}
      </Route>
      <Route path="/private-chef-puri-indah">
        {() => <JakartaAreaLandingPage area={JAKARTA_AREA_DATA['puri-indah']} />}
      </Route>
      <Route path="/seminyak" component={SeminyakPage} />
      <Route path="/canggu" component={CangguPage} />
      <Route path="/ubud" component={UbudPage} />
      <Route path="/sanur" component={SanurPage} />
      <Route path="/nusa-dua" component={NusaDuaPage} />
      <Route path="/uluwatu" component={UluwatuPage} />
      <Route path="/jimbaran" component={JimbaranPage} />
      <Route path="/kuta" component={KutaPage} />
      <Route path="/legian" component={LegianPage} />
      <Route path="/kerobokan" component={KerobokanPage} />
      <Route path="/petitenget" component={PetitengetPage} />
      <Route path="/berawa" component={BerawaPage} />
      <Route path="/pererenan" component={PererenanPage} />
      <Route path="/tanah-lot" component={TanahLotPage} />
      <Route path="/tabanan" component={TabananPage} />
      <Route path="/denpasar" component={DenpasarPage} />
      <Route path="/gianyar" component={GianyarPage} />
      <Route path="/tegallalang" component={TegallalangPage} />
      <Route path="/amed" component={AmedPage} />
      <Route path="/lovina" component={LovinaPage} />
      <Route path="/candidasa" component={CandidasaPage} />
      <Route path="/padang-bai" component={PadangBaiPage} />
      <Route path="/bukit" component={BukitPage} />
      <Route path="/ungasan" component={UngasanPage} />
      <Route path="/pecatu" component={PecatuPage} />
      <Route path="/services/villa-parties" component={VillaPartiesPage} />
      <Route path="/services/romantic-dinners" component={RomanticDinnersPage} />
      <Route path="/services/birthday-celebrations" component={BirthdayCelebrationsPage} />
      <Route path="/services/family-reunions" component={FamilyReunionsPage} />
      <Route path="/services/corporate-events" component={CorporateEventsPage} />
      <Route path="/services/wedding-celebrations" component={WeddingCelebrationsPage} />
      <Route path="/services/cooking-classes" component={CookingClassesPage} />
      <Route path="/services/weekly-meal-prep" component={WeeklyMealPrepPage} />
      <Route path="/best-private-chef-indonesia" component={BestPrivateChefIndonesiaPage} />
      <Route path="/private-chef-for-events" component={PrivateChefForEventsPage} />
      <Route path="/luxury-chef-indonesia" component={LuxuryChefIndonesiaPage} />
      <Route path="/wedding-catering-indonesia" component={WeddingCateringIndonesiaPage} />
      <Route path="/private-dining-indonesia" component={PrivateDiningIndonesiaPage} />
      <Route path="/healthy-meal-delivery-indonesia" component={HealthyMealDeliveryIndonesiaPage} />
      <Route path="/private-chef-booking-indonesia" component={PrivateChefBookingIndonesiaPage} />
      <Route path="/chef-for-hire-indonesia" component={ChefForHireIndonesiaPage} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/payment-terms" component={PaymentTerms} />
      <Route path="/join-our-team" component={JoinOurTeam} />
      <Route path="/contact/confirm" component={ContactConfirm} />
      <Route path="/quote" component={QuoteFunnel} />
      <Route path="/calculator" component={PricingCalculator} />
      <Route path="/calculator2" component={CalculationModel2} />
      <Route path="/recommended-services" component={RecommendedServices} />
      <Route path="/about" component={AboutPage} />
      <Route path="/menus" component={MenusPage} />
      <Route path="/menus/mediterranean" component={MenusMediterraneanPage} />
      <Route path="/villa-partners" component={VillaPartnersHubPage} />
      <Route path="/menus/balinese" component={MenusBalinesePage} />
      <Route path="/menus/asian-fusion" component={MenusAsianFusionPage} />
      <Route path="/menus/vegan" component={MenusVeganPage} />
      <Route path="/chefs" component={ChefsPage} />
      <Route path="/faq" component={FAQMasterPage} />
      {Object.values(CONTENT_PAGES).map((p) => (
        <Route key={p.slug} path={`/${p.slug}`}>
          {() => <ContentPage {...p} />}
        </Route>
      ))}
      <Route path="/admin/quotes" component={AdminQuotes} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Suspense fallback={<div className="w-full h-screen flex items-center justify-center"><p>Loading...</p></div>}>
          <Router />
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
