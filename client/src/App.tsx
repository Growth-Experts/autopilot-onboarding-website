import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Solutions from "@/pages/Solutions";
import CaseStudies from "@/pages/CaseStudies";
import Contact from "@/pages/Contact";
import BookDemo from "@/pages/BookDemo";
import { useEffect } from "react";
import { useLocation } from "wouter";

function ScrollToTop() {
  const [pathname] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

import EmployeeOnboarding from "@/pages/EmployeeOnboarding";
import ResellerOnboarding from "@/pages/ResellerOnboarding";
import VendorOnboarding from "@/pages/VendorOnboarding";
import CustomerOnboarding from "@/pages/CustomerOnboarding";

import CaseStudyLAWD from "@/pages/CaseStudyLAWD";
import CaseStudySyntech from "@/pages/CaseStudySyntech";
import CaseStudyTalksure from "@/pages/CaseStudyTalksure";
import CaseStudyYMCA from "@/pages/CaseStudyYMCA";

function Router() {
  return (
    <div className="flex flex-col min-h-screen font-montserrat">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/solutions/employee" component={EmployeeOnboarding} />
          <Route path="/solutions/reseller" component={ResellerOnboarding} />
          <Route path="/solutions/vendor" component={VendorOnboarding} />
          <Route path="/solutions/customer" component={CustomerOnboarding} />
          <Route path="/solutions/partner" component={ResellerOnboarding} />
          <Route path="/solutions/:type" component={Solutions} />
          <Route path="/case-studies" component={CaseStudies} />
          <Route path="/case-studies/lawd" component={CaseStudyLAWD} />
          <Route path="/case-studies/syntech" component={CaseStudySyntech} />
          <Route path="/case-studies/talksure" component={CaseStudyTalksure} />
          <Route path="/case-studies/ymca" component={CaseStudyYMCA} />
          <Route path="/contact" component={Contact} />
          <Route path="/book-demo" component={BookDemo} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
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
