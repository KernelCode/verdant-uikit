import { Minus, Plus } from "lucide-react";
import { cn } from "../lib/cn";

interface QuantityStepperProps {
  value: number;
  onChange: (n: number) => void;
  min?: number;
  max?: number;
  className?: string;
}

/** + [n] − stepper used on the product + cart screens. */
export function QuantityStepper({ value, onChange, min = 1, max = 99, className }: QuantityStepperProps) {
  const dec = () => onChange(Math.max(min, value - 1));
  const inc = () => onChange(Math.min(max, value + 1));
  const btn = "grid h-9 w-9 place-items-center rounded-full bg-card text-foreground shadow-[var(--shadow-soft)] transition-transform active:scale-90 disabled:opacity-40 disabled:active:scale-100";
  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <button type="button" onClick={dec} disabled={value <= min} aria-label="Decrease" className={btn}>
        <Minus className="h-4 w-4" />
      </button>
      <span className="w-6 text-center font-display text-lg font-bold tabular-nums">{value}</span>
      <button type="button" onClick={inc} disabled={value >= max} aria-label="Increase" className={btn}>
        <Plus className="h-4 w-4" />
      </button>
    </div>
  );
}
