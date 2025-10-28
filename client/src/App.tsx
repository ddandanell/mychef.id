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
