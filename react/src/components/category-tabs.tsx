import type { CategoryId } from "../data/products";
import { useI18n } from "../i18n";
import { cn } from "../lib/cn";

interface CategoryTabsProps {
  categories: CategoryId[];
  value: CategoryId;
  onChange: (c: CategoryId) => void;
  className?: string;
}

/** Horizontal scroll row of category pills; active = filled near-black. */
export function CategoryTabs({ categories, value, onChange, className }: CategoryTabsProps) {
  const { t } = useI18n();
  return (
    <div className={cn("flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", className)}>
      {categories.map((c) => (
        <button
          key={c}
          type="button"
          onClick={() => onChange(c)}
          className={cn(
            "shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
            value === c
              ? "bg-primary text-primary-foreground"
              : "bg-card text-muted-foreground hover:text-foreground",
          )}
        >
          {t.commerce.categories[c]}
        </button>
      ))}
    </div>
  );
}
