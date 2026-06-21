import { ShoppingBag, Trash2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../components/container";
import { PriceTag } from "../components/price-tag";
import { QuantityStepper } from "../components/quantity-stepper";
import { TrustBadges } from "../components/trust-badges";
import { useI18n } from "../i18n";
import { type CartLine, useStore } from "../lib/store";

const FREE_SHIP_THRESHOLD = 800;

export function Cart() {
  const { t } = useI18n();
  const { lines, setQty, remove, subtotal } = useStore();
  const c = t.commerce.cart;
  const [coupon, setCoupon] = useState("");

  const shipping = subtotal >= FREE_SHIP_THRESHOLD || subtotal === 0 ? 0 : 40;
  const vat = Math.round(subtotal * 0.15);
  const total = subtotal + shipping + vat;
  const fmt = (n: number) => `${t.commerce.currency}${n.toLocaleString(t.commerce.locale)}`;
  const remaining = Math.max(0, FREE_SHIP_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIP_THRESHOLD) * 100);

  if (lines.length === 0) {
    return (
      <main className="pb-28 md:pb-16">
        <Container className="max-w-md px-6 pt-20 text-center md:pt-28">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-muted text-muted-foreground">
            <ShoppingBag className="h-7 w-7" />
          </span>
          <h1 className="mt-5 font-display text-2xl font-extrabold">{c.empty}</h1>
          <Link to="/products" className="mt-6 inline-flex h-12 items-center rounded-full bg-primary px-8 font-bold text-primary-foreground">
            {c.startShopping}
          </Link>
        </Container>
      </main>
    );
  }

  return (
    <main className="pb-28 md:pb-16">
      <Container className="px-5 pt-14 md:max-w-5xl md:px-6 md:pt-10">
        <h1 className="font-display text-3xl font-extrabold tracking-tight md:text-4xl">{c.title}</h1>

        {/* free-shipping progress */}
        <div className="mt-5 rounded-[var(--radius-lg)] border border-border bg-card p-4">
          <p className="text-sm font-semibold">
            {remaining > 0 ? (
              <>
                {fmt(remaining)} <span className="text-muted-foreground">{c.freeShipBar}</span>
              </>
            ) : (
              <span className="text-brand">{c.freeShipDone}</span>
            )}
          </p>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-brand transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="mt-6 grid gap-8 md:grid-cols-[1fr_22rem]">
          {/* lines */}
          <ul className="space-y-4">
            {lines.map((line) => (
              <CartRow key={line.product.id} line={line} onQty={(q) => setQty(line.product.id, q)} onRemove={() => remove(line.product.id)} removeLabel={c.remove} />
            ))}
          </ul>

          {/* summary */}
          <aside className="h-fit rounded-[var(--radius-lg)] border border-border bg-card p-5 md:sticky md:top-24">
            <div className="flex gap-2">
              <input
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder={c.coupon}
                className="h-11 flex-1 rounded-full border border-border bg-input px-4 text-sm outline-none focus:border-ring"
              />
              <button className="h-11 rounded-full bg-foreground px-5 text-sm font-bold text-background">{c.apply}</button>
            </div>

            <dl className="mt-5 space-y-3 text-sm">
              <Row label={c.subtotal} value={fmt(subtotal)} />
              <Row label={c.shipping} value={shipping === 0 ? c.free : fmt(shipping)} />
              <Row label={c.vat} value={fmt(vat)} />
              <div className="border-t border-border pt-3">
                <div className="flex items-center justify-between">
                  <span className="font-display text-base font-bold">{c.total}</span>
                  <PriceTag price={total} size="md" />
                </div>
              </div>
            </dl>

            <button className="mt-5 flex h-14 w-full items-center justify-center rounded-full bg-primary font-display text-lg font-bold text-primary-foreground transition-transform active:scale-95">
              {c.checkout}
            </button>

            <p className="mt-4 text-center text-xs font-semibold text-muted-foreground">{c.payWith}</p>
            <TrustBadges className="mt-2 justify-center" />
          </aside>
        </div>
      </Container>
    </main>
  );
}

function CartRow({ line, onQty, onRemove, removeLabel }: { line: CartLine; onQty: (q: number) => void; onRemove: () => void; removeLabel: string }) {
  return (
    <li className="flex items-center gap-4 rounded-[var(--radius-lg)] border border-border bg-card p-3">
      <div className="grid h-24 w-24 shrink-0 place-items-center rounded-[var(--radius-md)] bg-stage">
        <img src={line.product.image} alt={line.product.name} className="h-[88%] w-[88%] object-contain" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-2">
          <p className="font-display font-bold tracking-tight">{line.product.name}</p>
          <button onClick={onRemove} aria-label={removeLabel} className="text-muted-foreground transition-colors hover:text-accent">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
        <span className="mt-0.5 inline-block h-4 w-4 rounded-full ring-1 ring-black/10" style={{ backgroundColor: line.product.swatches[line.color] }} />
        <div className="mt-2 flex items-center justify-between">
          <PriceTag price={line.product.price} size="sm" />
          <QuantityStepper value={line.qty} onChange={onQty} />
        </div>
      </div>
    </li>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between text-muted-foreground">
      <dt>{label}</dt>
      <dd className="font-semibold text-foreground">{value}</dd>
    </div>
  );
}
