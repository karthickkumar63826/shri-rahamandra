import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ContactModalProvider } from "@/hooks/useContactModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import GurusPage from "@/pages/GurusPage";
import GalleryPage from "@/pages/GalleryPage";
import WorkshopsPage from "@/pages/WorkshopsPage";
import ContactPage from "@/pages/ContactPage";

const queryClient = new QueryClient();

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/gurus" component={GurusPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/workshops" component={WorkshopsPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter>
          <ContactModalProvider>
            <ScrollToTop />
            <Router />
            <WhatsAppButton />
          </ContactModalProvider>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
