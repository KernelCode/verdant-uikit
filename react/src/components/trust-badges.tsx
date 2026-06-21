import { useI18n } from "../i18n";
import { cn } from "../lib/cn";

/** Local payment + trust row (mada · Apple Pay · Tabby · Tamara · STC Pay · COD). */
export function TrustBadges({ className }: { className?: string }) {
  const { t } = useI18n();
  return (
    <div className={cn("flex flex-wrap items-center gap-2", className)}>
      {t.commerce.payments.map((p) => (
        <span
          key={p}
          className="rounded-full border border-border bg-card px-3 py-1.5 font-mono text-[0.7rem] font-bold text-muted-foreground"
        >
          {p}
        </span>
      ))}
    </div>
  );
}
