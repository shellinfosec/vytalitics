import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  ShoppingCart,
  CreditCard,
  Shield,
  BarChart,
  MessageSquare,
  Cloud,
  Database,
  Globe,
  Cpu,
  Layers,
  Zap,
  Mail,
  Smartphone,
  Lock,
  FileText,
} from "lucide-react";

const IntegrationsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "analytics", label: "Analytics" },
    { id: "ecommerce", label: "E-Commerce" },
    { id: "monitoring", label: "Monitoring" },
    { id: "communication", label: "Communication" },
  ];

  const integrations = [
    { name: "Google Analytics", icon: <LineChart className="w-6 h-6" />, category: "analytics", color: "from-orange-500/20 to-orange-600/20" },
    { name: "Shopify", icon: <ShoppingCart className="w-6 h-6" />, category: "ecommerce", color: "from-green-500/20 to-green-600/20" },
    { name: "Stripe", icon: <CreditCard className="w-6 h-6" />, category: "ecommerce", color: "from-purple-500/20 to-purple-600/20" },
    { name: "Sentry", icon: <Shield className="w-6 h-6" />, category: "monitoring", color: "from-red-500/20 to-red-600/20" },
    { name: "Mixpanel", icon: <BarChart className="w-6 h-6" />, category: "analytics", color: "from-blue-500/20 to-blue-600/20" },
    { name: "Slack", icon: <MessageSquare className="w-6 h-6" />, category: "communication", color: "from-pink-500/20 to-pink-600/20" },
    { name: "AWS", icon: <Cloud className="w-6 h-6" />, category: "monitoring", color: "from-yellow-500/20 to-yellow-600/20" },
    { name: "MongoDB", icon: <Database className="w-6 h-6" />, category: "monitoring", color: "from-green-500/20 to-green-600/20" },
    { name: "Vercel", icon: <Globe className="w-6 h-6" />, category: "monitoring", color: "from-gray-500/20 to-gray-600/20" },
    { name: "Datadog", icon: <Cpu className="w-6 h-6" />, category: "monitoring", color: "from-purple-500/20 to-purple-600/20" },
    { name: "Segment", icon: <Layers className="w-6 h-6" />, category: "analytics", color: "from-teal-500/20 to-teal-600/20" },
    { name: "Amplitude", icon: <Zap className="w-6 h-6" />, category: "analytics", color: "from-blue-500/20 to-blue-600/20" },
    { name: "Mailchimp", icon: <Mail className="w-6 h-6" />, category: "communication", color: "from-yellow-500/20 to-yellow-600/20" },
    { name: "Twilio", icon: <Smartphone className="w-6 h-6" />, category: "communication", color: "from-red-500/20 to-red-600/20" },
    { name: "Auth0", icon: <Lock className="w-6 h-6" />, category: "monitoring", color: "from-orange-500/20 to-orange-600/20" },
    { name: "Notion", icon: <FileText className="w-6 h-6" />, category: "communication", color: "from-gray-500/20 to-gray-600/20" },
  ];

  const filteredIntegrations =
    activeCategory === "all"
      ? integrations
      : integrations.filter((i) => i.category === activeCategory);

  return (
    <section id="integrations" className="py-24 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Seamless Integrations
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Connect your entire{" "}
            <span className="gradient-text-primary">tech stack</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            50+ integrations with the tools you already use. Set up in minutes,
            not hours.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-glow-sm"
                  : "bg-card/50 text-muted-foreground hover:bg-card hover:text-foreground border border-border/50"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {filteredIntegrations.map((integration, index) => (
            <div
              key={integration.name}
              className={cn(
                "glass-card p-6 flex flex-col items-center gap-3 group interactive-card cursor-pointer",
                "transition-all duration-500"
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div
                className={cn(
                  "w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br border border-border/30 group-hover:border-primary/30 transition-colors duration-300",
                  integration.color
                )}
              >
                <span className="text-foreground">{integration.icon}</span>
              </div>
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center">
                {integration.name}
              </span>
            </div>
          ))}
        </div>

        {/* More integrations CTA */}
        <div className="text-center mt-12">
          <Button variant="hero-outline" size="lg">
            View All 50+ Integrations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
