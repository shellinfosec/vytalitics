import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const calculatePrice = (price: string) => {
    if (price === "Custom") return price;
    const numPrice = parseInt(price);
    return isAnnual ? Math.round(numPrice * 12 * 0.8) : numPrice;
  };
  const plans = [
    {
      name: "Starter",
      price: "49",
      description: "Perfect for small teams getting started with analytics",
      features: [
        "Up to 10 integrations",
        "100K events/month",
        "7-day data retention",
        "Email support",
        "Basic dashboards",
        "Weekly reports",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "149",
      description: "For growing teams that need advanced insights",
      features: [
        "Up to 30 integrations",
        "1M events/month",
        "90-day data retention",
        "Priority support",
        "AI-powered insights",
        "Custom alerts",
        "Automated reports",
        "Team collaboration",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations with custom requirements",
      features: [
        "Unlimited integrations",
        "Unlimited events",
        "Unlimited retention",
        "24/7 dedicated support",
        "Advanced AI features",
        "Custom dashboards",
        "SSO & SAML",
        "SLA guarantee",
        "On-premise option",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Simple Pricing
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Choose your{" "}
            <span className="gradient-text-primary">perfect plan</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            No hidden fees. No surprises. Start free and scale as you grow.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={cn("text-sm font-medium transition-colors", !isAnnual ? "text-foreground" : "text-muted-foreground")}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-12 h-6 rounded-full bg-secondary/30 transition-colors hover:bg-secondary/40 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
            >
              <div
                className={cn(
                  "absolute top-1 left-1 w-4 h-4 rounded-full bg-primary transition-transform duration-300",
                  isAnnual ? "translate-x-6" : "translate-x-0"
                )}
              />
            </button>
            <span className={cn("text-sm font-medium transition-colors", isAnnual ? "text-foreground" : "text-muted-foreground")}>
              Yearly <span className="text-primary text-xs ml-1">(Save 20%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto pt-16">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl p-8 transition-all duration-500 border",
                plan.popular
                  ? "glass-card border-primary/50 shadow-glow scale-105 z-10 !overflow-visible"
                  : "bg-card/50 border-border/50 hover:bg-card/80 hover:border-border hover:-translate-y-2 hover:shadow-lg"
              )}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1 mb-3">
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground">$</span>
                  )}
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price === "Custom" ? "Custom" : calculatePrice(plan.price)}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-muted-foreground">/{isAnnual ? 'year' : 'month'}</span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm">
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-primary/10 p-1">
                      <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                    </div>
                    <span className="text-muted-foreground text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.popular ? "hero" : "outline"}
                className={cn("w-full transition-all duration-300", !plan.popular && "hover:border-primary hover:text-primary")}
                size="lg"
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Trust Note */}
        <p className="text-center text-muted-foreground text-sm mt-12">
          All plans include a 14-day free trial. No credit card required.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
