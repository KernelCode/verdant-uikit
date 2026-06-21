import { ArrowRight, Bell, ChevronLeft, ShieldCheck, ShoppingBag, Truck, Undo2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "../components/badge";
import { Container } from "../components/container";
import { IconButton } from "../components/icon-button";
import { PriceTag } from "../components/price-tag";
import { ProductCard } from "../components/product-card";
import { TrustBadges } from "../components/trust-badges";
import { PRODUCTS, SPOTLIGHT } from "../data/products";
import { useI18n } from "../i18n";
import { useStore } from "../lib/store";

const perkIcons = [Undo2, ShieldCheck, Truck];

export function Storefront() {
  const { t } = useI18n();
  const { favorites, toggleFavorite } = useStore();
  const h = t.commerce.hero;
  const s = t.commerce.storefront;
  const hero = SPOTLIGHT; // the clean, sculptural Sienna cutout headlines the hero
  const best = PRODUCTS.slice(0, 4);

  return (
    <main className="pb-28 md:pb-0">
      {/* ════ MOBILE: the "Make Space For Something Better" hero ════ */}
      <section className="md:hidden">
        <div className="relative overflow-hidden bg-ink text-ink-foreground">
          <div className="dotted pointer-events-none absolute inset-0 text-ink-foreground/10" />
          <Container className="relative max-w-md px-6 pt-14 pb-8">
            <div className="flex items-center justify-between">
              <IconButton variant="outline" className="border-ink-foreground/30 text-ink-foreground" aria-label={t.commerce.product.back}>
                <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
              </IconButton>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.2em] text-ink-foreground/80">
                <ShoppingBag className="h-3.5 w-3.5" /> {h.eyebrow}
              </span>
              <IconButton variant="outline" className="border-ink-foreground/30 text-ink-foreground" aria-label="Notifications">
                <Bell className="h-5 w-5" />
              </IconButton>
            </div>

            <h1 className="mt-7 font-display text-[2.75rem] font-extrabold leading-[1.05] tracking-tight">
              {h.title[0]}
              <br />
              <span className="text-brand-300">{h.title[1]}</span> {h.title[2]}
            </h1>

            <div className="relative mt-8">
              <span className="pointer-events-none absolute bottom-2 left-1/2 h-3 w-3/5 -translate-x-1/2 rounded-[100%] bg-black/30 blur-md" />
              <img src={hero.hero} alt={h.featured} className="relative mx-auto h-72 w-auto object-contain drop-shadow-2xl" />
              <Badge variant="discount" className="absolute end-2 top-6 px-2.5 py-1.5">
                -{hero.discount}%
              </Badge>
            </div>

            <div className="mt-2 rounded-[var(--radius-xl)] bg-card p-5 text-center text-foreground shadow-[var(--shadow-pop)]">
              <p className="font-display text-lg font-bold">{h.featured}</p>
              <PriceTag price={hero.price} size="md" className="mt-1 justify-center" />
            </div>

            <Link
              to="/products"
              className="mt-5 flex h-14 items-center justify-center gap-2 rounded-full bg-card font-display font-bold text-foreground shadow-[var(--shadow-pop)] transition-transform active:scale-95"
            >
              {h.cta} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Container>
        </div>

        {/* Mobile bestsellers + perks */}
        <Container className="max-w-md px-6 py-8">
          <SectionHead title={s.featuredTitle} to="/products" cta={s.viewAll} />
          <div className="mt-4 grid grid-cols-2 gap-4">
            {best.slice(0, 2).map((p) => (
              <ProductCard key={p.id} product={p} favorite={favorites.has(p.id)} onToggleFavorite={toggleFavorite} />
            ))}
          </div>
          <Perks />
          <TrustBadges className="mt-6 justify-center" />
        </Container>
      </section>

      {/* ════ DESKTOP: split hero + collections + bestsellers ════ */}
      <section className="hidden md:block">
        <div className="relative overflow-hidden bg-ink text-ink-foreground">
          <div className="dotted pointer-events-none absolute inset-0 text-ink-foreground/10" />
          <Container className="relative grid grid-cols-2 items-center gap-8 py-16">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-foreground/25 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-ink-foreground/80">
                <ShoppingBag className="h-3.5 w-3.5" /> {h.eyebrow}
              </span>
              <h1 className="mt-6 font-display text-7xl font-extrabold leading-[1.02] tracking-tight">
                {h.title[0]} <span className="text-brand-300">{h.title[1]}</span> {h.title[2]}
              </h1>
              <p className="mt-5 max-w-md text-lg text-ink-muted">{h.body}</p>
              <div className="mt-8 flex items-center gap-3">
                <Link
                  to="/products"
                  className="inline-flex h-14 items-center gap-2 rounded-full bg-card px-8 font-display font-bold text-foreground transition-transform active:scale-95"
                >
                  {h.cta} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </Link>
                <Link
                  to="/product?id=sienna"
                  className="inline-flex h-14 items-center gap-2 rounded-full border border-ink-foreground/30 px-8 font-display font-bold text-ink-foreground"
                >
                  {h.featured}
                </Link>
              </div>
              <TrustBadges className="mt-10 [&>span]:border-ink-foreground/20 [&>span]:bg-transparent [&>span]:text-ink-foreground/70" />
            </div>
            <div className="relative">
              <span className="pointer-events-none absolute bottom-4 left-1/2 h-4 w-3/5 -translate-x-1/2 rounded-[100%] bg-black/30 blur-lg" />
              <img src={hero.hero} alt={h.featured} className="relative mx-auto h-[26rem] w-auto object-contain drop-shadow-2xl" />
              <div className="absolute bottom-6 end-6 rounded-[var(--radius-xl)] bg-card p-4 text-foreground shadow-[var(--shadow-pop)]">
                <p className="font-display text-sm font-bold">{h.featured}</p>
                <PriceTag price={hero.price} oldPrice={hero.oldPrice} size="md" />
              </div>
            </div>
          </Container>
        </div>

        <Container className="py-14">
          <Perks desktop />

          <div className="mt-14">
            <SectionHead title={s.featuredTitle} to="/products" cta={s.viewAll} desktop />
            <p className="mt-1 text-muted-foreground">{s.featuredBody}</p>
            <div className="mt-6 grid grid-cols-2 gap-5 lg:grid-cols-4">
              {best.map((p) => (
                <ProductCard key={p.id} product={p} favorite={favorites.has(p.id)} onToggleFavorite={toggleFavorite} />
              ))}
            </div>
          </div>
        </Container>

        {/* Free-shipping CTA band */}
        <div className="bg-brand text-brand-foreground">
          <Container className="flex items-center justify-between gap-4 py-8">
            <p className="font-display text-2xl font-bold">{s.freeShipping}</p>
            <Link to="/products" className="inline-flex h-12 items-center gap-2 rounded-full bg-brand-foreground px-6 font-bold text-brand">
              {s.viewAll} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          </Container>
        </div>
        <footer className="border-t border-border">
          <Container className="flex items-center justify-between py-8 text-sm text-muted-foreground">
            <span className="font-display text-lg font-extrabold text-foreground">{t.brand}</span>
            <span>© {new Date().getFullYear()} · {t.tagline}</span>
          </Container>
        </footer>
      </section>
    </main>
  );
}

function SectionHead({ title, to, cta, desktop }: { title: string; to: string; cta: string; desktop?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className={desktop ? "font-display text-3xl font-extrabold tracking-tight" : "font-display text-xl font-extrabold tracking-tight"}>
        {title}
      </h2>
      <Link to={to} className="inline-flex items-center gap-1 text-sm font-semibold text-brand">
        {cta} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
      </Link>
    </div>
  );
}

function Perks({ desktop }: { desktop?: boolean }) {
  const { t } = useI18n();
  return (
    <div className={desktop ? "grid grid-cols-3 gap-5" : "mt-7 grid gap-3"}>
      {t.commerce.storefront.perks.map((p, i) => {
        const Icon = perkIcons[i]!;
        return (
          <div key={p.title} className="flex items-center gap-3 rounded-[var(--radius-lg)] border border-border bg-card p-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-50 text-brand">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <p className="font-display text-sm font-bold">{p.title}</p>
              <p className="text-xs text-muted-foreground">{p.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
