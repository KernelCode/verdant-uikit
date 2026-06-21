import { useI18n } from "../i18n";
import { cn } from "../lib/cn";

interface PriceTagProps {
  price: number;
  oldPrice?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "text-base",
  md: "text-xl",
  lg: "text-3xl sm:text-4xl",
};

/** Localized price with the store currency + optional strikethrough old price. */
export function PriceTag({ price, oldPrice, size = "md", className }: PriceTagProps) {
  const { t } = useI18n();
  const fmt = (n: number) => `${t.commerce.currency}${n.toLocaleString(t.commerce.locale)}`;
  return (
    <span className={cn("inline-flex items-baseline gap-2 font-display font-extrabold tracking-tight", sizes[size], className)}>
      <span>{fmt(price)}</span>
      {oldPrice ? (
        <span className="text-[0.6em] font-semibold text-muted-foreground line-through">{fmt(oldPrice)}</span>
      ) : null}
    </span>
  );
}
