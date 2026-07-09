import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  autoPlayInterval?: number;
  className?: string;
}

const TestimonialCarousel = ({
  testimonials,
  autoPlayInterval = 5000,
  className,
}: TestimonialCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isAutoPlaying, autoPlayInterval, testimonials.length]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className={cn("relative", className)}>
      {/* Main testimonial card */}
      <div className="glass-card p-10 md:p-14 relative overflow-hidden">
        {/* Quote icon */}
        <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/20" />

        {/* Testimonial content */}
        <div className="relative z-10">
          <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-light">
            "{testimonials[currentIndex].quote}"
          </p>

          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-primary-foreground font-semibold text-lg">
              {testimonials[currentIndex].author.charAt(0)}
            </div>
            <div>
              <p className="text-foreground font-semibold">
                {testimonials[currentIndex].author}
              </p>
              <p className="text-muted-foreground text-sm">
                {testimonials[currentIndex].role} at{" "}
                {testimonials[currentIndex].company}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="absolute right-8 bottom-8 flex gap-2">
          <button
            onClick={goToPrev}
            className="w-10 h-10 rounded-full border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={goToNext}
            className="w-10 h-10 rounded-full border border-border bg-card/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentIndex
                ? "w-8 bg-primary"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
