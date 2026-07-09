import InfiniteLogoCarousel from "./InfiniteLogoCarousel";
import {
  Layers,
  Cloud,
  Database,
  Globe,
  Cpu,
  Zap,
  Shield,
  LineChart,
  ShoppingCart,
  CreditCard,
  MessageSquare,
  BarChart,
} from "lucide-react";

const TrustedBySection = () => {
  const enterpriseLogos = [
    { name: "Google Analytics", icon: <LineChart className="w-5 h-5" /> },
    { name: "Shopify", icon: <ShoppingCart className="w-5 h-5" /> },
    { name: "Stripe", icon: <CreditCard className="w-5 h-5" /> },
    { name: "Sentry", icon: <Shield className="w-5 h-5" /> },
    { name: "Mixpanel", icon: <BarChart className="w-5 h-5" /> },
    { name: "Slack", icon: <MessageSquare className="w-5 h-5" /> },
    { name: "AWS", icon: <Cloud className="w-5 h-5" /> },
    { name: "MongoDB", icon: <Database className="w-5 h-5" /> },
  ];

  const moreLogos = [
    { name: "Vercel", icon: <Globe className="w-5 h-5" /> },
    { name: "Datadog", icon: <Cpu className="w-5 h-5" /> },
    { name: "Segment", icon: <Layers className="w-5 h-5" /> },
    { name: "Amplitude", icon: <Zap className="w-5 h-5" /> },
    { name: "HubSpot", icon: <MessageSquare className="w-5 h-5" /> },
    { name: "Salesforce", icon: <Cloud className="w-5 h-5" /> },
    { name: "Zendesk", icon: <Shield className="w-5 h-5" /> },
    { name: "Intercom", icon: <MessageSquare className="w-5 h-5" /> },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Section divider */}
      <div className="section-divider mb-20" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm font-medium uppercase tracking-wider mb-2">
            Trusted by innovative teams worldwide
          </p>
          <p className="text-foreground text-lg">
            Seamlessly integrate with your favorite tools
          </p>
        </div>
      </div>

      {/* Logo Carousels */}
      <div className="space-y-6">
        <InfiniteLogoCarousel logos={enterpriseLogos} direction="left" speed="normal" />
        <InfiniteLogoCarousel logos={moreLogos} direction="right" speed="slow" />
      </div>
    </section>
  );
};

export default TrustedBySection;
