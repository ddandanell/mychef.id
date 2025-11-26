import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import PaymentTerms from "@/pages/PaymentTerms";
import JoinOurTeam from "@/pages/JoinOurTeam";
import ContactConfirm from "@/pages/ContactConfirm";
import QuoteFunnel from "@/pages/QuoteFunnel";
import AdminQuotes from "@/pages/AdminQuotes";
import SeminyakPage from "@/pages/SeminyakPage";
import CangguPage from "@/pages/CangguPage";
import UbudPage from "@/pages/UbudPage";
import SanurPage from "@/pages/SanurPage";
import NusaDuaPage from "@/pages/NusaDuaPage";
import UluwatuPage from "@/pages/UluwatuPage";
import JimbaranPage from "@/pages/JimbaranPage";
import KutaPage from "@/pages/KutaPage";
import LegianPage from "@/pages/LegianPage";
import KerobokanPage from "@/pages/KerobokanPage";
import PetitengetPage from "@/pages/PetitengetPage";
import BerawaPage from "@/pages/BerawaPage";
import PererenanPage from "@/pages/PererenanPage";
import TanahLotPage from "@/pages/TanahLotPage";
import TabananPage from "@/pages/TabananPage";
import DenpasarPage from "@/pages/DenpasarPage";
import GianyarPage from "@/pages/GianyarPage";
import TegallalangPage from "@/pages/TegallalangPage";
import AmedPage from "@/pages/AmedPage";
import LovinaPage from "@/pages/LovinaPage";
import CandidasaPage from "@/pages/CandidasaPage";
import PadangBaiPage from "@/pages/PadangBaiPage";
import BukitPage from "@/pages/BukitPage";
import UngasanPage from "@/pages/UngasanPage";
import PecatuPage from "@/pages/PecatuPage";
import VillaPartiesPage from "@/pages/services/VillaPartiesPage";
import RomanticDinnersPage from "@/pages/services/RomanticDinnersPage";
import BirthdayCelebrationsPage from "@/pages/services/BirthdayCelebrationsPage";
import FamilyReunionsPage from "@/pages/services/FamilyReunionsPage";
import CorporateEventsPage from "@/pages/services/CorporateEventsPage";
import WeddingCelebrationsPage from "@/pages/services/WeddingCelebrationsPage";
import CookingClassesPage from "@/pages/services/CookingClassesPage";
import WeeklyMealPrepPage from "@/pages/services/WeeklyMealPrepPage";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
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
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/payment-terms" component={PaymentTerms} />
      <Route path="/join-our-team" component={JoinOurTeam} />
      <Route path="/contact/confirm" component={ContactConfirm} />
      <Route path="/quote" component={QuoteFunnel} />
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
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
