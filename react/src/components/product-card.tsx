import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import type { Product } from "../data/products";
import { useI18n } from "../i18n";
import { cn } from "../lib/cn";
import { Badge } from "./badge";
import { PriceTag } from "./price-tag";

interface ProductCardProps {
  product: Product;
  favorite?: boolean;
  onToggleFavorite?: (id: string) => void;
  className?: string;
}

/**
 * The catalog product card — chair on a soft stage, a floating discount pill,
 * a centered name + price, and a heart that fills near-black when favorited
 * (the distinctive overlapping circle from the reference).
 */
export function ProductCard({ product, favorite = false, onToggleFavorite, className }: ProductCardProps) {
  const { t } = useI18n();
  return (
    <div
      className={cn(
        "group relative mb-5 flex flex-col rounded-[var(--radius-lg)] bg-card p-3 pb-7 text-center shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1",
        className,
      )}
    >
      {product.discount ? (
        <Badge variant="discount" className="absolute end-4 top-4 z-10 px-2.5 py-1.5 text-[0.7rem]">
          -{product.discount}%
        </Badge>
      ) : null}

      <Link
        to={`/product?id=${product.id}`}
        className="relative grid aspect-square place-items-center overflow-hidden rounded-[var(--radius-md)] bg-stage"
        aria-label={product.name}
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-[90%] w-[90%] object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </Link>

      <Link to={`/product?id=${product.id}`} className="mt-3 block truncate font-display text-[0.95rem] font-bold tracking-tight">
        {product.name}
      </Link>
      <PriceTag price={product.price} size="md" className="mt-1 justify-center" />

      <button
        type="button"
        onClick={() => onToggleFavorite?.(product.id)}
        aria-label={t.commerce.favorite}
        aria-pressed={favorite}
        className={cn(
          "absolute -bottom-4 left-1/2 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full transition-transform active:scale-90 rtl:translate-x-1/2",
          favorite
            ? "bg-primary text-primary-foreground shadow-[var(--shadow-pop)]"
            : "border border-border bg-card text-foreground shadow-[var(--shadow-soft)] hover:bg-muted",
        )}
      >
        <Heart className="h-[18px] w-[18px]" fill={favorite ? "currentColor" : "none"} />
      </button>
    </div>
  );
}
