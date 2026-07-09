import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  Users,
  Activity,
  Zap,
  Globe,
  Shield,
  Sparkles,
  DollarSign,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  Database,
  Workflow,
  Lock,
  BarChart3,
} from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import RealtimeChart from "./RealtimeChart";

const CARDS_DATA = [
  {
    id: 0,
    title: "Analytics Dashboard",
    icon: Activity,
    borderColor: "border-primary/30",
    hoverBorder: "hover:border-primary/50",
    badgeColor: "bg-primary/10",
    badgeBorder: "border-primary/30",
    badgeText: "LIVE",
    badgeIcon: Activity,
    badgeTextColor: "text-primary",
    metrics: [
      {
        icon: Users,
        label: "Active Users",
        value: 12847,
        change: "+12.5%",
        isPositive: true,
      },
      {
        icon: TrendingUp,
        label: "Conversion Rate",
        value: "4.8%",
        change: "+2.1%",
        isPositive: true,
      },
      {
        icon: DollarSign,
        label: "Revenue",
        value: "$284K",
        change: "+18.7%",
        isPositive: true,
      },
      {
        icon: Clock,
        label: "Avg. Session",
        value: "5:42",
        change: "+8.3%",
        isPositive: true,
      },
    ],
    alertIcon: Zap,
    alertTitle: "AI-Powered Insight",
    alertDesc: "Traffic spike: +32% from organic search in the last hour",
    alertColor: "text-primary",
    alertBg: "bg-primary/10",
    alertBorder: "border-primary/20",
    showChart: true,
  },
  {
    id: 1,
    title: "Integrations Hub",
    icon: Globe,
    borderColor: "border-accent/30",
    hoverBorder: "hover:border-accent/50",
    badgeColor: "bg-accent/10",
    badgeBorder: "border-accent/30",
    badgeText: "CONNECTED",
    badgeIcon: Globe,
    badgeTextColor: "text-accent",
    metrics: [
      {
        icon: Workflow,
        label: "Connected",
        value: 52,
        change: "Active",
        isPositive: true,
      },
      {
        icon: Database,
        label: "Data Synced",
        value: "2.4TB",
        change: "+12%",
        isPositive: true,
      },
      {
        icon: CheckCircle2,
        label: "Uptime",
        value: "99.9%",
        change: "SLA",
        isPositive: true,
      },
      {
        icon: Zap,
        label: "API Calls",
        value: "847K",
        change: "Today",
        isPositive: true,
      },
    ],
    alertIcon: CheckCircle2,
    alertTitle: "All Systems Operational",
    alertDesc: "52 integrations syncing data seamlessly across your enterprise",
    alertColor: "text-accent",
    alertBg: "bg-accent/10",
    alertBorder: "border-accent/20",
    showChart: false,
  },
  {
    id: 2,
    title: "Security Center",
    icon: Shield,
    borderColor: "border-primary/30",
    hoverBorder: "hover:border-primary/50",
    badgeColor: "bg-primary/10",
    badgeBorder: "border-primary/30",
    badgeText: "SECURE",
    badgeIcon: Shield,
    badgeTextColor: "text-primary",
    metrics: [
      {
        icon: Shield,
        label: "Security Score",
        value: "98%",
        change: "Excellent",
        isPositive: true,
      },
      {
        icon: Lock,
        label: "Threats Blocked",
        value: 2847,
        change: "Today",
        isPositive: true,
      },
      {
        icon: CheckCircle2,
        label: "Compliance",
        value: "100%",
        change: "Active",
        isPositive: true,
      },
      {
        icon: Activity,
        label: "Uptime",
        value: "99.99%",
        change: "SLA",
        isPositive: true,
      },
    ],
    alertIcon: CheckCircle2,
    alertTitle: "All Security Checks Passed",
    alertDesc: "Your data is protected by enterprise-grade security",
    alertColor: "text-primary",
    alertBg: "bg-primary/10",
    alertBorder: "border-primary/20",
    showChart: false,
  },
  {
    id: 3,
    title: "Dashboard Overview",
    icon: BarChart3,
    borderColor: "border-accent/30",
    hoverBorder: "hover:border-accent/50",
    badgeColor: "bg-accent/10",
    badgeBorder: "border-accent/30",
    badgeText: "DASHBOARD",
    badgeIcon: BarChart3,
    badgeTextColor: "text-accent",
    metrics: [
      {
        icon: DollarSign,
        label: "Total Revenue",
        value: "$2.4M",
        change: "+24.5%",
        isPositive: true,
      },
      {
        icon: Users,
        label: "Active Sessions",
        value: "45.2K",
        change: "+12.3%",
        isPositive: true,
      },
      {
        icon: TrendingUp,
        label: "Performance",
        value: "98%",
        change: "+5.2%",
        isPositive: true,
      },
      {
        icon: CheckCircle2,
        label: "Status",
        value: "Online",
        change: "All Systems",
        isPositive: true,
      },
    ],
    alertIcon: TrendingUp,
    alertTitle: "Dashboard Operational",
    alertDesc: "All metrics and systems running at optimal performance",
    alertColor: "text-accent",
    alertBg: "bg-accent/10",
    alertBorder: "border-accent/20",
    showChart: false,
  },
];

const StackedMockupCards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !isAutoPlay) return;

    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 4);
    }, 6000);

    return () => clearInterval(interval);
  }, [isVisible, isAutoPlay]);

  const handleCardClick = (cardIndex: number) => {
    setIsAutoPlay(false);
    setActiveCard(cardIndex);
    setTimeout(() => setIsAutoPlay(true), 8000);
  };

  const cardVariants = {
    active: {
      x: 0,
      y: 0,
      z: 0,
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      zIndex: 30,
      transition: {
        duration: 1.4,
        ease: [0.645, 0.045, 0.355, 1],
      },
    },
    next: {
      x: "clamp(60px, 10vw, 100px)",
      y: "clamp(-120px, -15vh, -160px)",
      z: -250,
      rotateY: -18,
      rotateX: -8,
      scale: 0.88,
      opacity: 0.5,
      filter: "blur(8px)",
      zIndex: 20,
      transition: {
        duration: 1.4,
        ease: [0.645, 0.045, 0.355, 1],
      },
    },
    back: {
      x: "clamp(120px, 20vw, 180px)",
      y: "clamp(-240px, -30vh, -320px)",
      z: -500,
      rotateY: -32,
      rotateX: -12,
      scale: 0.76,
      opacity: 0.15,
      filter: "blur(14px)",
      zIndex: 10,
      transition: {
        duration: 1.4,
        ease: [0.645, 0.045, 0.355, 1],
      },
    },
    exit: {
      x: "clamp(120px, 20vw, 180px)",
      y: "clamp(-240px, -30vh, -320px)",
      z: -500,
      rotateY: -32,
      rotateX: -12,
      scale: 0.76,
      opacity: 0.15,
      filter: "blur(14px)",
      transition: {
        duration: 1.4,
        ease: [0.645, 0.045, 0.355, 1],
      },
    },
  } as any;

  const getCardPosition = (cardIndex: number) => {
    const position = (cardIndex - activeCard + 4) % 4;
    if (position === 0) return "active";
    if (position === 1) return "next";
    return "back";
  };

  return (
    <div className="w-full">
      {/* 3D Card Carousel Section */}
      <div 
        ref={ref} 
        className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] mb-16" 
        style={{ 
          perspective: "1200px",
          perspectiveOrigin: "50% 40%"
        }}
      >
        <AnimatePresence mode="wait">
          {isVisible && (
            <>
              {[0, 1, 2, 3].map((cardIndex) => {
                const card = CARDS_DATA[cardIndex];
                const position = getCardPosition(cardIndex);
                
                return (
                  <motion.div
                    key={`card-${cardIndex}`}
                    className="absolute inset-0"
                    variants={cardVariants}
                    initial="exit"
                    animate={position}
                    exit="exit"
                    style={{
                      transformStyle: "preserve-3d" as any,
                    }}
                  >
                    {/* Only render overlay for non-active cards */}
                    {getCardPosition(cardIndex) !== "active" && (
                      <div
                        className="absolute inset-0 z-10 cursor-pointer"
                        style={{ pointerEvents: "auto" }}
                        onClick={e => {
                          e.stopPropagation();
                          handleCardClick(cardIndex);
                        }}
                      />
                    )}
                    <div className={`relative z-20 glass-card p-4 sm:p-6 lg:p-8 h-full shadow-2xl border-2 ${card.borderColor} ${card.hoverBorder} transition-all duration-300 rounded-2xl overflow-hidden flex flex-col`}
                      style={{ pointerEvents: "auto" }}
                    >
                      {/* Window Header */}
                      <div className="flex items-center justify-between mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-border/50">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-destructive/80 animate-pulse" />
                          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80 animate-pulse [animation-delay:200ms]" />
                          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary/80 animate-pulse [animation-delay:400ms]" />
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 rounded-full ${card.badgeColor} border ${card.badgeBorder}`}>
                            <card.badgeIcon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${card.badgeTextColor}`} />
                            <span className={`${card.badgeTextColor} text-xs font-semibold`}>{card.badgeText}</span>
                          </div>
                          <span className="hidden sm:inline text-xs text-muted-foreground font-medium">{card.title}</span>
                        </div>
                      </div>

                      {/* Metrics Grid - Responsive */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-6">
                        {card.metrics.map((metric, idx) => (
                          <MetricCard
                            key={idx}
                            icon={<metric.icon className="w-3 h-3 sm:w-4 sm:h-4" />}
                            label={metric.label}
                            value={typeof metric.value === "number" ? <AnimatedCounter end={metric.value} /> : metric.value}
                            change={metric.change}
                            isPositive={metric.isPositive}
                            isVisible={isVisible}
                          />
                        ))}
                      </div>

                      {/* Chart or Info Section - Responsive */}
                      {card.showChart ? (
                        <div className="bg-background-secondary/50 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 h-[200px] sm:h-[280px] lg:h-[320px] border border-border/30 flex-1">
                          <div className="flex flex-col gap-2 sm:gap-4 h-full">
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex items-start gap-2">
                                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                                </div>
                                <div className="min-w-0">
                                  <h4 className="text-foreground font-semibold text-xs sm:text-sm leading-tight">Real-Time</h4>
                                  <p className="text-muted-foreground text-[9px] sm:text-[10px]">Every 2s</p>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 text-[9px] sm:text-xs flex-wrap justify-end">
                                <span className="flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                  <span className="text-muted-foreground hidden sm:inline">Visitors</span>
                                </span>
                                <span className="flex items-center gap-1">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                  <span className="text-muted-foreground hidden sm:inline">Conversions</span>
                                </span>
                              </div>
                            </div>
                            <div className="h-[150px] sm:h-[220px] lg:h-[260px]">
                              <RealtimeChart isVisible={isVisible} />
                            </div>
                          </div>
                        </div>
                      ) : cardIndex === 1 ? (
                        <div className="bg-background-secondary/50 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 border border-border/30 flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                                <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
                              </div>
                              <div className="min-w-0">
                                <h4 className="text-foreground font-semibold text-xs sm:text-sm">Platforms</h4>
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                            {[
                              { name: "SF", color: "bg-blue-500" },
                              { name: "HS", color: "bg-orange-500" },
                              { name: "ST", color: "bg-purple-500" },
                              { name: "GA", color: "bg-yellow-500" },
                              { name: "FB", color: "bg-blue-600" },
                              { name: "LI", color: "bg-blue-700" },
                              { name: "SL", color: "bg-pink-500" },
                              { name: "ZD", color: "bg-primary" },
                            ].map((integration, i) => (
                              <div key={i} className="p-1.5 sm:p-2.5 rounded-lg bg-card/50 border border-border/30 hover:border-accent/30 transition-all">
                                <div className="flex items-center justify-between mb-1">
                                  <div className={`w-4 h-4 sm:w-6 sm:h-6 rounded-md ${integration.color} flex items-center justify-center`}>
                                    <div className="w-1 h-1 sm:w-2 sm:h-2 bg-white rounded-full" />
                                  </div>
                                  <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                                </div>
                                <span className="text-[7px] sm:text-[9px] text-muted-foreground font-medium block">{integration.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="bg-background-secondary/50 rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 border border-border/30 flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                              </div>
                              <h4 className="text-foreground font-semibold text-xs sm:text-sm">Compliance</h4>
                            </div>
                          </div>
                          <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                            {[
                              { name: "SOC2", icon: Shield },
                              { name: "GDPR", icon: Lock },
                              { name: "HIPAA", icon: CheckCircle2 },
                              { name: "ISO", icon: Shield },
                              { name: "PCI", icon: Lock },
                              { name: "CCPA", icon: Shield },
                              { name: "SOX", icon: CheckCircle2 },
                              { name: "FedR", icon: Shield },
                            ].map((cert, i) => {
                              const Icon = cert.icon;
                              return (
                                <div key={i} className="p-1.5 sm:p-2 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/40 transition-all">
                                  <div className="flex flex-col items-center text-center gap-1">
                                    <div className="w-4 h-4 sm:w-6 sm:h-6 rounded-md bg-primary/10 flex items-center justify-center">
                                      <Icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                                    </div>
                                    <span className="text-[7px] sm:text-[9px] text-muted-foreground font-medium leading-tight">{cert.name}</span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Alert Banner */}
                      <div className={`flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl ${card.alertBg} border ${card.alertBorder}`}>
                        <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg ${card.alertBg} flex items-center justify-center flex-shrink-0`}>
                          <card.alertIcon className={`w-3 h-3 sm:w-4 sm:h-4 ${card.alertColor} animate-pulse`} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-foreground text-xs sm:text-sm font-semibold leading-tight">{card.alertTitle}</p>
                          <p className="text-muted-foreground text-[9px] sm:text-[10px] line-clamp-2">{card.alertDesc}</p>
                        </div>
                        <ArrowUpRight className={`w-3 h-3 sm:w-4 sm:h-4 ${card.alertColor} flex-shrink-0`} />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Card Navigation Indicators */}
      <div className="flex items-center justify-center gap-3 mt-12 z-50 relative">
        {[0, 1, 2, 3].map((idx) => (
          <motion.button
            key={idx}
            onClick={e => {
              e.preventDefault();
              e.stopPropagation();
              handleCardClick(idx);
            }}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            className={`rounded-full transition-all cursor-pointer ${
              activeCard === idx ? "w-3 h-3 bg-primary" : "w-2 h-2 bg-border/60 hover:bg-muted-foreground"
            }`}
            aria-label={`Go to card ${idx + 1}`}
            role="tab"
            type="button"
            style={{ pointerEvents: "auto" }}
          />
        ))}
      </div>
    </div>
  );
};

interface MetricCardProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  change: string;
  isPositive: boolean;
  isVisible: boolean;
}

const MetricCard: React.FC<MetricCardProps> = ({
  icon,
  label,
  value,
  change,
  isPositive,
  isVisible,
}) => (
  <div className="flex flex-col gap-1.5 sm:gap-2 p-2 sm:p-3 rounded-lg bg-card/50 border border-border/30">
    <div className="flex items-center gap-1.5 sm:gap-2">
      {icon}
      <div className="text-[9px] sm:text-[10px] font-medium text-muted-foreground leading-tight">{label}</div>
    </div>
    <div className="text-base sm:text-lg font-bold text-foreground">{value}</div>
    <div className={`text-xs font-semibold ${isPositive ? "text-primary" : "text-destructive"}`}>
      {change}
    </div>
  </div>
);

export default StackedMockupCards;
