import { cn } from "@/lib/utils";

interface Logo {
  name: string;
  icon: React.ReactNode;
}

interface InfiniteLogoCarouselProps {
  logos: Logo[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

const InfiniteLogoCarousel = ({
  logos,
  direction = "left",
  speed = "normal",
  className,
}: InfiniteLogoCarouselProps) => {
  const speedClass = {
    slow: "[animation-duration:60s]",
    normal: "[animation-duration:30s]",
    fast: "[animation-duration:20s]",
  };

  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "flex gap-12 items-center",
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right",
          speedClass[speed],
          "hover:[animation-play-state:paused]"
        )}
        style={{ width: "fit-content" }}
      >
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div
            key={`logo-1-${index}`}
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card/30 border border-border/30 backdrop-blur-sm transition-all duration-300 hover:bg-card/50 hover:border-primary/30 min-w-fit"
          >
            <span className="text-muted-foreground">{logo.icon}</span>
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              {logo.name}
            </span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <div
            key={`logo-2-${index}`}
            className="flex items-center gap-3 px-6 py-3 rounded-xl bg-card/30 border border-border/30 backdrop-blur-sm transition-all duration-300 hover:bg-card/50 hover:border-primary/30 min-w-fit"
          >
            <span className="text-muted-foreground">{logo.icon}</span>
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteLogoCarousel;
