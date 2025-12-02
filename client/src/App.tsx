import { Switch, Route, useLocation, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Suspense, lazy, useEffect } from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import { isValidLanguage } from "./lib/routes";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import PaymentTerms from "@/pages/PaymentTerms";
import JoinOurTeam from "@/pages/JoinOurTeam";
import ContactConfirm from "@/pages/ContactConfirm";
import QuoteFunnel from "@/pages/QuoteFunnel";
import AdminQuotes from "@/pages/AdminQuotes";
import PricingCalculator from "@/pages/PricingCalculator";
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

function LanguageRedirect() {
  const [location] = useLocation();
  const pathParts = location.split('/').filter(Boolean);
  
  if (pathParts.length === 0 || !isValidLanguage(pathParts[0])) {
    const storedLang = localStorage.getItem('i18nextLng') || 'en';
    const lang = isValidLanguage(storedLang) ? storedLang : 'en';
    const newPath = `/${lang}${location === '/' ? '' : location}`;
    return <Redirect to={newPath} />;
  }
  
  return null;
}

function LocalizedRoutes() {
  return (
    <Switch>
      <Route path="/:lang" component={Home} />
      <Route path="/:lang/jakarta" component={JakartaPage} />
      <Route path="/:lang/private-chef-menteng">
        {() => <JakartaAreaLandingPage area={JAKARTA_AREA_DATA['menteng']} />}
      </Route>
      <Route path="/:lang/private-chef-kebayoran-baru">
        {() => <JakartaAreaLandingPage area={JAKARTA_AREA_DATA['kebayoran-baru']} />}
      </Route>
      <Route path="/:lang/private-chef-pondok-indah">
        {() => <JakartaAreaLandingPage area={JAKARTA_AREA_DATA['pondok-indah']} />}
      </Route>
      <Route path="/:lang/private-chef-senayan">
        {() => <JakartaAreaLandingPage area={JAKARTA_AREA_DATA['senayan']} />}
      </Route>
      <Route path="/:lang/private-chef-scbd">
        {() => <JakartaAreaLandingPage area={JAKARTA_AREA_DATA['scbd']} />}
      </Route>
      <Route path="/:lang/private-chef-kemang">
        {() => <JakartaAreaLandingPage area={JAKARTA_AREA_DATA['kemang']} />}
      </Route>
      <Route path="/:lang/private-chef-pantai-indah-kapuk">
        {() => <JakartaAreaLandingPage area={JAKARTA_AREA_DATA['pantai-indah-kapuk']} />}
      </Route>
      <Route path="/:lang/private-chef-kelapa-gading">
        {() => <JakartaAreaLandingPage area={JAKARTA_AREA_DATA['kelapa-gading']} />}
      </Route>
      <Route path="/:lang/private-chef-kuningan">
        {() => <JakartaAreaLandingPage area={JAKARTA_AREA_DATA['kuningan']} />}
      </Route>
      <Route path="/:lang/private-chef-puri-indah">
        {() => <JakartaAreaLandingPage area={JAKARTA_AREA_DATA['puri-indah']} />}
      </Route>
      <Route path="/:lang/seminyak" component={SeminyakPage} />
      <Route path="/:lang/canggu" component={CangguPage} />
      <Route path="/:lang/ubud" component={UbudPage} />
      <Route path="/:lang/sanur" component={SanurPage} />
      <Route path="/:lang/nusa-dua" component={NusaDuaPage} />
      <Route path="/:lang/uluwatu" component={UluwatuPage} />
      <Route path="/:lang/jimbaran" component={JimbaranPage} />
      <Route path="/:lang/kuta" component={KutaPage} />
      <Route path="/:lang/legian" component={LegianPage} />
      <Route path="/:lang/kerobokan" component={KerobokanPage} />
      <Route path="/:lang/petitenget" component={PetitengetPage} />
      <Route path="/:lang/berawa" component={BerawaPage} />
      <Route path="/:lang/pererenan" component={PererenanPage} />
      <Route path="/:lang/tanah-lot" component={TanahLotPage} />
      <Route path="/:lang/tabanan" component={TabananPage} />
      <Route path="/:lang/denpasar" component={DenpasarPage} />
      <Route path="/:lang/gianyar" component={GianyarPage} />
      <Route path="/:lang/tegallalang" component={TegallalangPage} />
      <Route path="/:lang/amed" component={AmedPage} />
      <Route path="/:lang/lovina" component={LovinaPage} />
      <Route path="/:lang/candidasa" component={CandidasaPage} />
      <Route path="/:lang/padang-bai" component={PadangBaiPage} />
      <Route path="/:lang/bukit" component={BukitPage} />
      <Route path="/:lang/ungasan" component={UngasanPage} />
      <Route path="/:lang/pecatu" component={PecatuPage} />
      <Route path="/:lang/services/villa-parties" component={VillaPartiesPage} />
      <Route path="/:lang/services/romantic-dinners" component={RomanticDinnersPage} />
      <Route path="/:lang/services/birthday-celebrations" component={BirthdayCelebrationsPage} />
      <Route path="/:lang/services/family-reunions" component={FamilyReunionsPage} />
      <Route path="/:lang/services/corporate-events" component={CorporateEventsPage} />
      <Route path="/:lang/services/wedding-celebrations" component={WeddingCelebrationsPage} />
      <Route path="/:lang/services/cooking-classes" component={CookingClassesPage} />
      <Route path="/:lang/services/weekly-meal-prep" component={WeeklyMealPrepPage} />
      <Route path="/:lang/best-private-chef-indonesia" component={BestPrivateChefIndonesiaPage} />
      <Route path="/:lang/private-chef-for-events" component={PrivateChefForEventsPage} />
      <Route path="/:lang/luxury-chef-indonesia" component={LuxuryChefIndonesiaPage} />
      <Route path="/:lang/wedding-catering-indonesia" component={WeddingCateringIndonesiaPage} />
      <Route path="/:lang/private-dining-indonesia" component={PrivateDiningIndonesiaPage} />
      <Route path="/:lang/healthy-meal-delivery-indonesia" component={HealthyMealDeliveryIndonesiaPage} />
      <Route path="/:lang/private-chef-booking-indonesia" component={PrivateChefBookingIndonesiaPage} />
      <Route path="/:lang/chef-for-hire-indonesia" component={ChefForHireIndonesiaPage} />
      <Route path="/:lang/privacy-policy" component={PrivacyPolicy} />
      <Route path="/:lang/terms-of-service" component={TermsOfService} />
      <Route path="/:lang/payment-terms" component={PaymentTerms} />
      <Route path="/:lang/join-our-team" component={JoinOurTeam} />
      <Route path="/:lang/contact/confirm" component={ContactConfirm} />
      <Route path="/:lang/quote" component={QuoteFunnel} />
      <Route path="/:lang/calculator" component={PricingCalculator} />
      <Route path="/admin/quotes" component={AdminQuotes} />
      <Route component={NotFound} />
    </Switch>
  );
}

function LegacyRedirects() {
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
      <Route path="/admin/quotes" component={AdminQuotes} />
    </Switch>
  );
}

function Router() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const pathParts = location.split('/').filter(Boolean);
  const hasLangPrefix = pathParts.length > 0 && isValidLanguage(pathParts[0]);

  if (hasLangPrefix) {
    return <LocalizedRoutes />;
  }

  return <LegacyRedirects />;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Suspense fallback={<div className="w-full h-screen flex items-center justify-center"><p>Loading...</p></div>}>
            <Router />
          </Suspense>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
