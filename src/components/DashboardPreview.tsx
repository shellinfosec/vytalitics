import { useEffect, useState, useRef } from "react";
import {
  TrendingUp,
  Users,
  Activity,
  BarChart3,
  Bell,
  Zap,
} from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const DashboardPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const chartBars = [35, 52, 48, 72, 65, 85, 78, 92, 88, 95, 82, 98];

  return (
    <div
      ref={ref}
      className="glass-card p-6 lg:p-8 relative overflow-hidden"
    >
      {/* Dashboard Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-destructive/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="flex items-center gap-2 text-muted-foreground text-sm">
          <Activity className="w-4 h-4 text-green-500" />
          <span>Live</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          icon={<Users className="w-5 h-5" />}
          label="Active Users"
          value={isVisible ? <AnimatedCounter end={12847} /> : "0"}
          trend="+12.5%"
          isVisible={isVisible}
          delay={0}
        />
        <StatCard
          icon={<Activity className="w-5 h-5" />}
          label="Sessions"
          value={isVisible ? <AnimatedCounter end={48293} /> : "0"}
          trend="+8.2%"
          isVisible={isVisible}
          delay={100}
        />
        <StatCard
          icon={<TrendingUp className="w-5 h-5" />}
          label="Conversion"
          value={isVisible ? <><AnimatedCounter end={4} suffix="." /><AnimatedCounter end={8} suffix="%" /></> : "0%"}
          trend="+2.1%"
          isVisible={isVisible}
          delay={200}
        />
        <StatCard
          icon={<BarChart3 className="w-5 h-5" />}
          label="Revenue"
          value={isVisible ? <AnimatedCounter end={284} prefix="$" suffix="K" /> : "$0"}
          trend="+18.7%"
          isVisible={isVisible}
          delay={300}
        />
      </div>

      {/* Chart Area */}
      <div className="bg-background-secondary/50 rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-foreground font-medium">Performance Overview</h4>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-primary" />
              <span className="text-muted-foreground">Traffic</span>
            </span>
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-accent" />
              <span className="text-muted-foreground">Conversions</span>
            </span>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="flex items-end justify-between gap-2 h-40">
          {chartBars.map((height, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-1">
              <div
                className="w-full bg-gradient-to-t from-primary to-primary-glow rounded-t-sm transition-all duration-1000"
                style={{
                  height: isVisible ? `${height}%` : "0%",
                  transitionDelay: `${index * 50}ms`,
                }}
              />
              <span className="text-xs text-muted-foreground/50">
                {["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"][index]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Alert Banner */}
      <div
        className={`flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
        style={{ transitionDelay: "800ms" }}
      >
        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
          <Bell className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <p className="text-foreground text-sm font-medium">
            AI Alert: Traffic spike detected
          </p>
          <p className="text-muted-foreground text-xs">
            32% increase in the last hour from organic search
          </p>
        </div>
        <Zap className="w-5 h-5 text-primary animate-pulse" />
      </div>
    </div>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  trend: string;
  isVisible: boolean;
  delay: number;
}

const StatCard = ({ icon, label, value, trend, isVisible, delay }: StatCardProps) => (
  <div
    className={`p-4 rounded-xl bg-card/50 border border-border/30 transition-all duration-500 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="flex items-center gap-2 text-muted-foreground mb-2">
      {icon}
      <span className="text-xs">{label}</span>
    </div>
    <div className="text-2xl font-bold text-foreground mb-1">{value}</div>
    <span className="text-xs text-green-500 font-medium">{trend}</span>
  </div>
);

export default DashboardPreview;
