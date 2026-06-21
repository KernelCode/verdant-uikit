import { Heart, Home, Settings, ShoppingBag } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useI18n } from "../i18n";
import { cn } from "../lib/cn";

const items = [
  { to: "/", icon: Home, key: "home" as const, end: true },
  { to: "/cart", icon: Heart, key: "saved" as const, badge: true },
  { to: "/products", icon: ShoppingBag, key: "shop" as const },
  { to: "/components", icon: Settings, key: "more" as const },
];

/** Floating mobile tab bar (md:hidden) — active tab fills near-black. */
export function BottomNav({ className }: { className?: string }) {
  const { t } = useI18n();
  return (
    <nav
      className={cn(
        "fixed inset-x-0 bottom-4 z-40 mx-auto flex w-[min(92%,22rem)] items-center justify-between rounded-full border border-border bg-card/95 p-2 shadow-[var(--shadow-pop)] backdrop-blur md:hidden",
        className,
      )}
    >
      {items.map(({ to, icon: Icon, key, end, badge }) => (
        <NavLink
          key={key}
          to={to}
          end={end}
          aria-label={t.commerce.tabs[key]}
          className={({ isActive }) =>
            cn(
              "relative grid h-12 w-12 place-items-center rounded-full transition-colors",
              isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
            )
          }
        >
          <Icon className="h-5 w-5" />
          {badge ? (
            <span className="absolute end-2 top-2 grid h-4 min-w-4 place-items-center rounded-full bg-accent px-1 text-[9px] font-bold text-accent-foreground">
              2
            </span>
          ) : null}
        </NavLink>
      ))}
    </nav>
  );
}
