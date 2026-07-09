import { Suspense, lazy, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustedBySection from "@/components/TrustedBySection";
import FeaturesSection from "@/components/FeaturesSection";

// Lazy load heavy sections
const IntegrationsSection = lazy(() => import("@/components/IntegrationsSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));


const Index = () => {
  useEffect(() => {
    document.title = "Vytalitics - AI-Powered Analytics Platform";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustedBySection />
        <FeaturesSection />


        <Suspense fallback={null}>
          <IntegrationsSection />
        </Suspense>
        <Suspense fallback={null}>
          <TestimonialsSection />
        </Suspense>
        <Suspense fallback={null}>
          <PricingSection />
        </Suspense>
        <Suspense fallback={null}>
          <CTASection />
        </Suspense>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
