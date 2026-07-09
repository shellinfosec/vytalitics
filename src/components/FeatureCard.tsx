import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  delay?: number;
}

const FeatureCard = ({
  icon,
  title,
  description,
  className,
  delay = 0,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "glass-card p-8 group interactive-card cursor-default",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
      </div>

      {/* Icon */}
      <div className="relative w-14 h-14 mb-6 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
        <span className="text-primary">{icon}</span>
      </div>

      {/* Content */}
      <h3 className="relative text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="relative text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

export default FeatureCard;
