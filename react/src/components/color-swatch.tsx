import { cn } from "../lib/cn";

interface ColorSwatchProps {
  colors: string[];
  value: number;
  onChange: (i: number) => void;
  className?: string;
}

/** Row of selectable color dots (the green/orange/charcoal picker). */
export function ColorSwatch({ colors, value, onChange, className }: ColorSwatchProps) {
  return (
    <div className={cn("inline-flex items-center gap-2", className)}>
      {colors.map((c, i) => (
        <button
          key={c + i}
          type="button"
          onClick={() => onChange(i)}
          aria-label={`Color ${i + 1}`}
          aria-pressed={value === i}
          className={cn(
            "h-5 w-5 rounded-full transition-transform active:scale-90",
            value === i ? "ring-2 ring-foreground ring-offset-2 ring-offset-background" : "ring-1 ring-black/10",
          )}
          style={{ backgroundColor: c }}
        />
      ))}
    </div>
  );
}
