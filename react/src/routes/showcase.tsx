import { Heart } from "lucide-react";
import { useState } from "react";
import { Badge } from "../components/badge";
import { Button } from "../components/button";
import { ColorSwatch } from "../components/color-swatch";
import { Container } from "../components/container";
import { IconButton } from "../components/icon-button";
import { PriceTag } from "../components/price-tag";
import { ProductCard } from "../components/product-card";
import { QuantityStepper } from "../components/quantity-stepper";
import { RatingStars } from "../components/rating-stars";
import { TrustBadges } from "../components/trust-badges";
import { FEATURED, PRODUCTS } from "../data/products";
import { useI18n } from "../i18n";
import { useStore } from "../lib/store";

const SWATCHES: { name: string; var: string }[] = [
  { name: "brand", var: "--color-brand" },
  { name: "accent", var: "--color-accent" },
  { name: "ink", var: "--color-ink" },
  { name: "background", var: "--color-background" },
  { name: "card", var: "--color-card" },
  { name: "muted", var: "--color-muted" },
  { name: "stage", var: "--color-stage" },
  { name: "foreground", var: "--color-foreground" },
];

const RADII = ["--radius-sm", "--radius-md", "--radius-lg", "--radius-xl", "--radius-2xl"];

export function Showcase() {
  const { t } = useI18n();
  const { favorites, toggleFavorite } = useStore();
  const sc = t.commerce.showcase;
  const [color, setColor] = useState(0);
  const [qty, setQty] = useState(1);

  return (
    <main className="pb-28 md:pb-16">
      <Container className="px-5 pt-14 md:max-w-6xl md:px-6 md:pt-12">
        <header>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.brand}</p>
          <h1 className="mt-1 font-display text-4xl font-extrabold tracking-tight md:text-5xl">{sc.title}</h1>
          <p className="mt-2 max-w-xl text-muted-foreground">{sc.subtitle}</p>
        </header>

        <Section title={sc.colors}>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {SWATCHES.map((s) => (
              <div key={s.name} className="overflow-hidden rounded-[var(--radius-md)] border border-border">
                <div className="h-16" style={{ backgroundColor: `var(${s.var})` }} />
                <div className="bg-card px-3 py-2">
                  <p className="font-display text-sm font-bold capitalize">{s.name}</p>
                  <p className="font-mono text-[0.65rem] text-muted-foreground">{s.var}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section title={sc.typography}>
          <div className="space-y-2 rounded-[var(--radius-lg)] border border-border bg-card p-6">
            <p className="font-display text-5xl font-extrabold tracking-tight">Make space for better.</p>
            <p className="font-display text-2xl font-bold">Plus Jakarta Sans · Thmanyah Sans (ع)</p>
            <p className="text-base text-muted-foreground">Body copy in the same family — calm, legible, premium.</p>
            <p className="font-mono text-sm text-muted-foreground">SPACE MONO · micro-labels &amp; prices</p>
            <p className="font-display text-3xl font-bold" dir="rtl">اصنع مساحةً لشيءٍ أجمل</p>
          </div>
        </Section>

        <Section title={sc.radius}>
          <div className="flex flex-wrap gap-4">
            {RADII.map((r) => (
              <div key={r} className="text-center">
                <div className="h-20 w-20 border-2 border-brand bg-brand-50" style={{ borderRadius: `var(${r})` }} />
                <p className="mt-2 font-mono text-[0.65rem] text-muted-foreground">{r}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section title={sc.components}>
          <div className="grid gap-4 md:grid-cols-2">
            <Tile label="Buttons">
              <div className="flex flex-wrap items-center gap-3">
                <Button>Buy now</Button>
                <Button variant="brand">Brand</Button>
                <Button variant="white">Shop more</Button>
                <Button variant="outline">Outline</Button>
                <IconButton variant="solid"><Heart className="h-5 w-5" /></IconButton>
              </div>
            </Tile>
            <Tile label="Badges">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="discount">-5%</Badge>
                <Badge variant="sale">-10%</Badge>
                <Badge variant="soft">New</Badge>
                <Badge variant="solid">Bestseller</Badge>
                <Badge variant="outline">Lounge</Badge>
              </div>
            </Tile>
            <Tile label="Price · Rating">
              <div className="flex flex-col gap-3">
                <PriceTag price={550} oldPrice={580} size="lg" />
                <RatingStars value={4.8} reviews={96} />
              </div>
            </Tile>
            <Tile label="Color · Quantity">
              <div className="flex items-center justify-between">
                <ColorSwatch colors={FEATURED.swatches} value={color} onChange={setColor} />
                <QuantityStepper value={qty} onChange={setQty} />
              </div>
            </Tile>
            <Tile label="Product card">
              <div className="mx-auto w-44">
                <ProductCard product={FEATURED} favorite={favorites.has(FEATURED.id)} onToggleFavorite={toggleFavorite} />
              </div>
            </Tile>
            <Tile label="Payments &amp; trust">
              <TrustBadges />
            </Tile>
          </div>
        </Section>

        <Section title={sc.screens}>
          <p className="-mt-3 mb-5 text-muted-foreground">{sc.screensBody}</p>
          <div className="grid gap-5 sm:grid-cols-3">
            {PRODUCTS.slice(0, 3).map((p) => (
              <ProductCard key={p.id} product={p} favorite={favorites.has(p.id)} onToggleFavorite={toggleFavorite} />
            ))}
          </div>
        </Section>
      </Container>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="mb-5 font-display text-2xl font-extrabold tracking-tight">{title}</h2>
      {children}
    </section>
  );
}

function Tile({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-border bg-card p-5">
      <p className="mb-4 font-mono text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
      {children}
    </div>
  );
}
