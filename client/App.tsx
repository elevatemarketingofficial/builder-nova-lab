import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import HomeownerServiceRequest from "./pages/HomeownerServiceRequest";
import Homes from "./pages/Homes";
import Home1691A from "./pages/Home1691A";
import OceansideII from "./pages/OceansideII";
import Home1724A from "./pages/Home1724A";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/homeowner-service-request"
            element={<HomeownerServiceRequest />}
          />
          <Route path="/homes" element={<Homes />} />
          <Route path="/homes/home-1691-a" element={<Home1691A />} />
          <Route path="/homes/oceanside-ii" element={<OceansideII />} />
          <Route path="/homes/home-1724-a" element={<Home1724A />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
