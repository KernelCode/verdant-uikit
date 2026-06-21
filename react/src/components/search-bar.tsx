import { SlidersHorizontal } from "lucide-react";
import { Search } from "lucide-react";
import { useI18n } from "../i18n";
import { cn } from "../lib/cn";

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
  onFilter?: () => void;
  className?: string;
}

/** Pill search field with a trailing filter button (Catalog screen). */
export function SearchBar({ value, onChange, onFilter, className }: SearchBarProps) {
  const { t } = useI18n();
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute inset-y-0 start-4 my-auto h-5 w-5 text-muted-foreground" />
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={t.commerce.searchPlaceholder}
          className="h-12 w-full rounded-full border border-border bg-card ps-12 pe-4 text-foreground shadow-[var(--shadow-soft)] outline-none transition-colors placeholder:text-muted-foreground focus:border-ring"
        />
      </div>
      <button
        type="button"
        onClick={onFilter}
        aria-label={t.commerce.filters}
        className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-soft)] transition-transform active:scale-90"
      >
        <SlidersHorizontal className="h-5 w-5" />
      </button>
    </div>
  );
}
