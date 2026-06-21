import { ChevronLeft, Heart, Minus, Move3d, Plus, Truck } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Badge } from "../components/badge";
import { ColorSwatch } from "../components/color-swatch";
import { Container } from "../components/container";
import { IconButton } from "../components/icon-button";
import { PriceTag } from "../components/price-tag";
import { ProductCard } from "../components/product-card";
import { RatingStars } from "../components/rating-stars";
import { PRODUCTS, productById } from "../data/products";
import { useI18n } from "../i18n";
import { useStore } from "../lib/store";

export function Product() {
  const { t } = useI18n();
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { add, favorites, toggleFavorite } = useStore();
  const product = productById(params.get("id") ?? undefined);
  const p = t.commerce.product;

  const [color, setColor] = useState(0);
  const [qty, setQty] = useState(1);
  const fav = favorites.has(product.id);
  const total = product.price * qty;

  const related = useMemo(() => PRODUCTS.filter((x) => x.id !== product.id).slice(0, 4), [product.id]);
  const fmt = (n: number) => `${t.commerce.currency}${n.toLocaleString(t.commerce.locale)}`;

  return (
    <main className="pb-28 md:pb-16">
      {/* ════ MOBILE: matches the Sienna product screen ════ */}
      <div className="md:hidden">
        <div className="relative bg-stage">
          <Container className="max-w-md px-5 pt-14">
            <div className="flex items-center justify-between">
              <IconButton variant="white" onClick={() => navigate(-1)} aria-label={p.back}>
                <ChevronLeft className="h-5 w-5 rtl:rotate-180" />
              </IconButton>
              <IconButton
                variant={fav ? "solid" : "white"}
                onClick={() => toggleFavorite(product.id)}
                aria-label={t.commerce.favorite}
              >
                <Heart className="h-5 w-5" fill={fav ? "currentColor" : "none"} />
              </IconButton>
            </div>

            <div className="mt-4 flex justify-center">
              <ColorSwatch colors={product.swatches} value={color} onChange={setColor} />
            </div>

            <div className="relative mt-2 pb-10">
              <img src={product.hero} alt={product.name} className="mx-auto h-80 w-auto object-contain" />
              <span className="absolute inset-x-0 bottom-8 mx-auto h-3 w-2/3 rounded-[100%] bg-foreground/10 blur-md" />
              <button className="absolute bottom-2 left-1/2 grid h-11 w-11 -translate-x-1/2 place-items-center rounded-full bg-card text-foreground shadow-[var(--shadow-pop)] rtl:translate-x-1/2" aria-label="View in 3D">
                <Move3d className="h-5 w-5" />
              </button>
            </div>
          </Container>
        </div>

        {/* white sheet */}
        <div className="-mt-6 rounded-t-[var(--radius-2xl)] bg-background">
          <Container className="max-w-md px-6 py-7">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h1 className="font-display text-2xl font-extrabold tracking-tight">{product.name}</h1>
                <RatingStars value={product.rating} reviews={product.reviews} className="mt-2" />
              </div>
              {product.discount ? <Badge variant="sale">-{product.discount}%</Badge> : null}
            </div>
            <p className="mt-3 leading-relaxed text-muted-foreground">{p.description}</p>

            <div className="mt-5 flex items-center justify-between">
              <PriceTag price={product.price} oldPrice={product.oldPrice} size="lg" />
              <div className="flex items-center gap-3">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-9 w-9 place-items-center rounded-full bg-muted" aria-label="Decrease">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-5 text-center font-display text-lg font-bold tabular-nums">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="grid h-9 w-9 place-items-center rounded-full bg-muted" aria-label="Increase">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <Truck className="h-4 w-4 text-brand" /> {p.delivery}
            </p>

            <button
              onClick={() => add(product, qty, color)}
              className="mt-5 flex h-15 w-full items-center justify-center rounded-full bg-primary py-4 font-display text-lg font-bold text-primary-foreground transition-transform active:scale-95"
            >
              {p.buy} {fmt(total)}
            </button>

            <RelatedRail related={related} />
          </Container>
        </div>
      </div>

      {/* ════ DESKTOP: gallery + details, two columns ════ */}
      <div className="hidden md:block">
        <Container className="py-10">
          <Link to="/products" className="inline-flex items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-foreground">
            <ChevronLeft className="h-4 w-4 rtl:rotate-180" /> {t.commerceNav.products}
          </Link>

          <div className="mt-6 grid grid-cols-2 gap-10">
            <div className="relative grid place-items-center rounded-[var(--radius-2xl)] bg-stage p-10">
              {product.discount ? <Badge variant="sale" className="absolute end-6 top-6">-{product.discount}%</Badge> : null}
              <img src={product.hero} alt={product.name} className="h-[28rem] w-auto object-contain" />
              <span className="absolute inset-x-16 bottom-12 h-4 rounded-[100%] bg-foreground/10 blur-md" />
            </div>

            <div className="flex flex-col">
              <h1 className="font-display text-5xl font-extrabold tracking-tight">{product.name}</h1>
              <RatingStars value={product.rating} reviews={product.reviews} className="mt-3" />
              <p className="mt-4 max-w-md text-lg leading-relaxed text-muted-foreground">{p.description}</p>

              <div className="mt-6">
                <p className="mb-2 font-display text-sm font-bold uppercase tracking-wide text-muted-foreground">{p.color}</p>
                <ColorSwatch colors={product.swatches} value={color} onChange={setColor} />
              </div>

              <dl className="mt-6 grid grid-cols-2 gap-3">
                {p.specs.map((s) => (
                  <div key={s.k} className="rounded-[var(--radius-md)] border border-border bg-card px-4 py-3">
                    <dt className="text-xs text-muted-foreground">{s.k}</dt>
                    <dd className="font-display font-bold">{s.v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-auto pt-8">
                <div className="flex items-end justify-between">
                  <PriceTag price={product.price} oldPrice={product.oldPrice} size="lg" />
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground">{p.quantity}</span>
                    <div className="flex items-center gap-3">
                      <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-10 w-10 place-items-center rounded-full bg-muted" aria-label="Decrease">
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-6 text-center font-display text-lg font-bold tabular-nums">{qty}</span>
                      <button onClick={() => setQty((q) => q + 1)} className="grid h-10 w-10 place-items-center rounded-full bg-muted" aria-label="Increase">
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => add(product, qty, color)}
                  className="mt-5 flex h-15 w-full items-center justify-center rounded-full bg-primary py-4 font-display text-lg font-bold text-primary-foreground transition-transform active:scale-95"
                >
                  {p.buy} {fmt(total)}
                </button>
                <p className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground">
                  <Truck className="h-4 w-4 text-brand" /> {p.shippingBody}
                </p>
              </div>
            </div>
          </div>

          <RelatedRail related={related} desktop />
        </Container>
      </div>
    </main>
  );
}

function RelatedRail({ related, desktop }: { related: typeof PRODUCTS; desktop?: boolean }) {
  const { t } = useI18n();
  const { favorites, toggleFavorite } = useStore();
  return (
    <div className={desktop ? "mt-16" : "mt-8"}>
      <h2 className="font-display text-xl font-extrabold tracking-tight md:text-2xl">{t.commerce.product.related}</h2>
      <div className={desktop ? "mt-6 grid grid-cols-4 gap-5" : "mt-4 grid grid-cols-2 gap-4"}>
        {(desktop ? related : related.slice(0, 2)).map((x) => (
          <ProductCard key={x.id} product={x} favorite={favorites.has(x.id)} onToggleFavorite={toggleFavorite} />
        ))}
      </div>
    </div>
  );
}
