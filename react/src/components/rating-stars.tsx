import { Star } from "lucide-react";
import { cn } from "../lib/cn";

interface RatingStarsProps {
  value: number;
  reviews?: number;
  size?: number;
  className?: string;
}

/** Five stars with a fractional fill + optional review count. */
export function RatingStars({ value, reviews, size = 16, className }: RatingStarsProps) {
  return (
    <span className={cn("inline-flex items-center gap-1.5", className)}>
      <span className="inline-flex">
        {Array.from({ length: 5 }).map((_, i) => {
          const fill = Math.max(0, Math.min(1, value - i));
          return (
            <span key={i} className="relative" style={{ width: size, height: size }}>
              <Star className="absolute inset-0 text-border" style={{ width: size, height: size }} strokeWidth={1.5} />
              <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                <Star className="text-accent" style={{ width: size, height: size }} fill="currentColor" strokeWidth={1.5} />
              </span>
            </span>
          );
        })}
      </span>
      <span className="font-mono text-xs text-muted-foreground">
        {value.toFixed(1)}
        {reviews != null ? ` (${reviews})` : ""}
      </span>
    </span>
  );
}
