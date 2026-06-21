import { Moon, ShoppingBag, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BottomNav } from "../components/bottom-nav";
import { Container } from "../components/container";
import { useI18n } from "../i18n";
import { cn } from "../lib/cn";
import { useStore } from "../lib/store";

export function Layout() {
  const { t, lang, setLang } = useI18n();
  const { count } = useStore();
  const [dark, setDark] = useState(() =>
    typeof localStorage !== "undefined" ? localStorage.getItem("verdant-theme") === "dark" : false,
  );
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("verdant-theme", dark ? "dark" : "light");
  }, [dark]);

  const navItem = (to: string, label: string, end = false) => (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        cn(
          "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
          isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground",
        )
      }
    >
      {label}
    </NavLink>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Desktop store header — the mobile screens carry their own headers. */}
      <header className="sticky top-0 z-40 hidden border-b border-border bg-background/85 backdrop-blur md:block">
        <Container className="flex h-[4.5rem] items-center justify-between gap-3">
          <NavLink to="/" className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-[var(--radius-sm)] bg-brand text-brand-foreground">
              <ShoppingBag className="h-5 w-5" />
            </span>
            {t.brand}
          </NavLink>

          <nav className="flex items-center gap-1">
            {navItem("/", t.commerceNav.storefront, true)}
            {navItem("/products", t.commerceNav.products)}
            {navItem("/product", t.commerceNav.product)}
            {navItem("/components", t.nav.components)}
          </nav>

          <div className="flex items-center gap-2">
            <div className="flex items-center rounded-full border border-border p-0.5 font-mono text-xs">
              <button
                onClick={() => setLang("en")}
                className={cn("rounded-full px-2.5 py-1", lang === "en" ? "bg-foreground text-background" : "text-muted-foreground")}
              >
                EN
              </button>
              <button
                onClick={() => setLang("ar")}
                className={cn("rounded-full px-2.5 py-1", lang === "ar" ? "bg-foreground text-background" : "text-muted-foreground")}
              >
                ع
              </button>
            </div>
            <button
              onClick={() => setDark((d) => !d)}
              className="rounded-full border border-border p-2.5 text-foreground hover:bg-muted"
              aria-label="Toggle dark mode"
            >
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <NavLink
              to="/cart"
              className="relative inline-flex h-11 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform active:scale-95"
            >
              <ShoppingBag className="h-4 w-4" />
              {t.commerceNav.cart}
              {count > 0 ? (
                <span className="grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-[10px] font-bold text-accent-foreground">
                  {count}
                </span>
              ) : null}
            </NavLink>
          </div>
        </Container>
      </header>

      {/* Mobile floating language + theme controls (top-end). */}
      <div className="fixed end-3 top-3 z-50 flex items-center gap-2 md:hidden">
        <button
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
          className="grid h-9 min-w-9 place-items-center rounded-full bg-card/90 px-2 font-mono text-xs font-bold shadow-[var(--shadow-soft)] backdrop-blur"
          aria-label="Toggle language"
        >
          {lang === "en" ? "ع" : "EN"}
        </button>
        <button
          onClick={() => setDark((d) => !d)}
          className="grid h-9 w-9 place-items-center rounded-full bg-card/90 shadow-[var(--shadow-soft)] backdrop-blur"
          aria-label="Toggle dark mode"
        >
          {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </button>
      </div>

      <Outlet />
      <BottomNav />
    </div>
  );
}
