import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import StackedMockupCards from "./StackedMockupCards";
import AnimatedCounter from "./AnimatedCounter";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="hero-glow w-full h-[600px] top-0" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium fade-in-up">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Analytics Platform</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight fade-in-up-delay-1">
              <span className="text-foreground">Unified Analytics for </span>
              <span className="gradient-text">Modern Enterprises</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg fade-in-up-delay-2">
              Connect 50+ tools, unlock AI insights, and make data-driven
              decisions faster. One dashboard to rule them all.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up-delay-3">
              <Button variant="hero" size="xl" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="hero-outline" size="xl" className="group">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-4 fade-in-up-delay-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">
                  <AnimatedCounter end={50} suffix="+" />
                </div>
                <div className="text-xs text-muted-foreground">Integrations</div>
              </div>
              <div className="w-px h-10 bg-border/50" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">
                  <AnimatedCounter end={10} suffix="K+" />
                </div>
                <div className="text-xs text-muted-foreground">Active Teams</div>
              </div>
              <div className="w-px h-10 bg-border/50" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">
                  <AnimatedCounter end={99} suffix="%" />
                </div>
                <div className="text-xs text-muted-foreground">Uptime SLA</div>
              </div>
            </div>
          </div>

          {/* Right Content - Stacked Mockup Cards */}
          <div className="relative fade-in-up-delay-2">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50" />
            <StackedMockupCards />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
