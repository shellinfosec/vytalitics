import FeatureCard from "./FeatureCard";
import {
  Plug,
  Brain,
  Bell,
  FileText,
  Gauge,
  Lock,
  LayoutDashboard,
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Plug className="w-6 h-6" />,
      title: "50+ Integrations",
      description:
        "Effortlessly connect Google Analytics, Shopify, Stripe, Sentry, Mixpanel, and more with minimal setup time.",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Insights",
      description:
        "Leverage artificial intelligence to unlock deep, predictive insights about user behavior and business trends.",
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Real-Time Alerts",
      description:
        "Set custom alerts for traffic anomalies, error spikes, and performance issues. Get notified instantly via email, Slack, or in-app.",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Automated Reports",
      description:
        "Receive beautifully branded PDF or email reports automatically. Schedule daily, weekly, or monthly delivery.",
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Performance Tracking",
      description:
        "Monitor uptime, page speed, core web vitals, and more with intuitive, real-time visualizations.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Enterprise Security",
      description:
        "Bank-level encryption, GDPR compliance, and SOC 2 certification. Your data is always protected.",
    },
  ];

  return (
    <section id="features" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Powerful Features
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything you need to{" "}
            <span className="gradient-text-primary">master your data</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Built for data-driven teams who demand the best. Unify, analyze, and
            act on your data with unprecedented clarity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>

        {/* CTA Card */}
        <div className="mt-16 glass-card p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-6">
              <LayoutDashboard className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Customizable Dashboards
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Tailor your analytics experience with our intuitive drag-and-drop
              builder. Display only the metrics that matter most to your team.
            </p>
            <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300">
              Explore Dashboard Builder
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
