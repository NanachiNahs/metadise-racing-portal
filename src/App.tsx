import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import MSR from "./pages/MSR";
import Web3Academy from "./pages/Web3Academy";
import ContactUs from "./pages/ContactUs";
import NotFound from "./pages/NotFound";

// Inline Redirect Component
const RedirectKBTA = () => {
  useEffect(() => {
    window.open("https://www.kch-bta.com/", "_blank"); // Opens in a new tab
  }, []);

  return <Navigate to="/home" replace />; // Redirects back to home
};

const RedirectWeb3Academy = () => {
  useEffect(() => {
    window.open("https://metadiseacademy.com/", "_blank"); // Opens in a new tab
  }, []);

  return <Navigate to="/home" replace />; // Redirects back to home
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/msr" element={<MSR />} />
          <Route path="/web3-academy" element={<RedirectWeb3Academy />} />
          <Route path="/kbta" element={<RedirectKBTA />} />
          <Route path="/contact-us" element={<ContactUs />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
