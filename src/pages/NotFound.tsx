import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Home, 
  Search, 
  Sparkles, 
  BarChart3, 
  Zap,
  TrendingUp,
  Coffee
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedCounter from "@/components/AnimatedCounter";

const NotFound = () => {
  const location = useLocation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const insights = [
    { icon: <TrendingUp className="w-5 h-5" />, label: "Pages Analyzed Today", value: 2847 },
    { icon: <BarChart3 className="w-5 h-5" />, label: "Insights Generated", value: 12493 },
    { icon: <Zap className="w-5 h-5" />, label: "Real-time Alerts Sent", value: 847 },
  ];

  const quickLinks = [
    { label: "View Features", href: "/#features" },
    { label: "Explore Integrations", href: "/#integrations" },
    { label: "Check Pricing", href: "/#pricing" },
    { label: "Contact Support", href: "/#" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 relative overflow-hidden pt-20">
        {/* Dynamic glow following mouse */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full pointer-events-none transition-all duration-1000 ease-out opacity-30"
          style={{
            background: "radial-gradient(circle, hsl(181 82% 26% / 0.3) 0%, transparent 70%)",
            left: mousePosition.x - 300,
            top: mousePosition.y - 300,
          }}
        />

        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="hero-glow w-full h-[400px] top-0" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* 404 Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8 fade-in-up">
              <Coffee className="w-4 h-4" />
              <span>Error 404</span>
            </div>

            {/* Animated 404 Number */}
            <div className="relative mb-8 fade-in-up-delay-1">
              <h1 className="text-[150px] md:text-[200px] font-black leading-none gradient-text opacity-20 select-none">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="glass-card p-8 animate-float">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center">
                      <Sparkles className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <div className="text-left">
                      <p className="text-foreground font-semibold text-lg">Brewing Insights</p>
                      <p className="text-muted-foreground text-sm">This page is still cooking...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Message */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 fade-in-up-delay-2">
              Oops! This page is{" "}
              <span className="gradient-text-primary">still brewing</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 fade-in-up-delay-3">
              Our AI is working hard to analyze every corner of the web, but it seems 
              this particular page hasn't been discovered yet. Let's get you back on track!
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 fade-in-up-delay-3">
              <Link to="/">
                <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                  <Home className="w-5 h-5" />
                  Back to Home
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button variant="hero-outline" size="xl" className="group">
                <Search className="w-5 h-5" />
                Search Platform
              </Button>
            </div>

            {/* Live Stats Section */}
            <div className="glass-card p-8 mb-12">
              <p className="text-muted-foreground text-sm uppercase tracking-wider mb-6">
                While you're here, check out what Vytalitics is doing right now
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                {insights.map((insight, index) => (
                  <div 
                    key={insight.label}
                    className="p-4 rounded-xl bg-card/50 border border-border/30 group hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                        {insight.icon}
                      </div>
                      <span className="text-sm text-muted-foreground">{insight.label}</span>
                    </div>
                    <div className="text-3xl font-bold text-foreground">
                      <AnimatedCounter end={insight.value} duration={2000 + index * 500} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="fade-in-up-delay-3">
              <p className="text-muted-foreground text-sm mb-4">Quick navigation</p>
              <div className="flex flex-wrap justify-center gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="px-4 py-2 rounded-full bg-card/50 border border-border/30 text-sm text-muted-foreground hover:text-foreground hover:border-primary/30 hover:bg-card transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Fun Message */}
            <div className="mt-16 p-6 rounded-2xl border border-dashed border-border/50">
              <p className="text-muted-foreground text-sm">
                <span className="text-primary font-medium">Fun fact:</span> Our AI has analyzed over{" "}
                <span className="text-foreground font-semibold">1.2 billion</span> data points today. 
                Unfortunately, this URL wasn't one of them! 🤖
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
