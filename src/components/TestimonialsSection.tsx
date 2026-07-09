import TestimonialCarousel from "./TestimonialCarousel";
import AnimatedCounter from "./AnimatedCounter";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Vytalitics transformed how we understand our customers. The AI insights alone have increased our conversion rate by 34%. It's like having a data science team in a box.",
      author: "Sarah Chen",
      role: "VP of Growth",
      company: "TechScale Inc.",
    },
    {
      quote:
        "We went from juggling 12 different analytics tools to one unified dashboard. The time savings alone paid for the platform in the first month.",
      author: "Marcus Rodriguez",
      role: "Head of Analytics",
      company: "GlobalRetail Co.",
    },
    {
      quote:
        "The real-time alerts have saved us countless times. When our traffic spiked 500% during a viral moment, we were prepared because Vytalitics warned us 10 minutes ahead.",
      author: "Emily Thompson",
      role: "CTO",
      company: "Momentum Labs",
    },
    {
      quote:
        "Enterprise-grade security was non-negotiable for us. Vytalitics delivered with SOC 2 compliance while maintaining the best UX I've ever seen in an analytics platform.",
      author: "David Park",
      role: "CISO",
      company: "SecureFinance Corp.",
    },
  ];

  const stats = [
    { value: 34, suffix: "%", label: "Avg. Conversion Increase" },
    { value: 12, suffix: "hrs", label: "Weekly Time Saved" },
    { value: 99.9, suffix: "%", label: "Platform Uptime" },
    { value: 4.9, suffix: "/5", label: "Customer Rating" },
  ];

  return (
    <section className="py-24 relative">
      {/* Background effect + glassmorphism for separation */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent" />
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none flex items-center justify-center">
        <div className="w-full max-w-5xl h-[80%] mx-auto bg-background/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-border/30" style={{filter:'blur(2px)', opacity:0.85}} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
            Customer Success
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Trusted by{" "}
            <span className="gradient-text-primary">10,000+ teams</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            See why industry leaders choose Vytalitics for their analytics needs.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card p-6 text-center group interactive-card"
            >
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
