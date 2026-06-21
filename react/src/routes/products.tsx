import { Bell, SlidersHorizontal } from "lucide-react";
import { type ReactNode, useMemo, useState } from "react";
import { CategoryTabs } from "../components/category-tabs";
import { Container } from "../components/container";
import { IconButton } from "../components/icon-button";
import { ProductCard } from "../components/product-card";
import { SearchBar } from "../components/search-bar";
import { CATEGORIES, type CategoryId, type Product, PRODUCTS } from "../data/products";
import { useI18n } from "../i18n";
import { cn } from "../lib/cn";
import { useStore } from "../lib/store";

type SortKey = "featured" | "priceLow" | "priceHigh" | "rating";

export function Products() {
  const { t } = useI18n();
  const { favorites, toggleFavorite } = useStore();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<CategoryId>("lounge");
  const [sort, setSort] = useState<SortKey>("featured");
  const [maxPrice, setMaxPrice] = useState(600);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    const base = q
      ? PRODUCTS.filter((p) => p.name.toLowerCase().includes(q) && p.price <= maxPrice)
      : PRODUCTS.filter((p) => p.category === cat && p.price <= maxPrice);
    const by: Record<SortKey, (a: Product, b: Product) => number> = {
      featured: () => 0,
      priceLow: (a, b) => a.price - b.price,
      priceHigh: (a, b) => b.price - a.price,
      rating: (a, b) => b.rating - a.rating,
    };
    return [...base].sort(by[sort]);
  }, [cat, query, sort, maxPrice]);

  const grid = (cols: string) => (
    <div className={cn("grid gap-4", cols)}>
      {list.map((p) => (
        <ProductCard key={p.id} product={p} favorite={favorites.has(p.id)} onToggleFavorite={toggleFavorite} />
      ))}
    </div>
  );

  return (
    <main className="pb-28 md:pb-16">
      {/* ── Mobile header (matches the Catalog screen) ───────────────── */}
      <div className="md:hidden">
        <Container className="max-w-md px-5 pt-14">
          <div className="flex items-center justify-between">
            <h1 className="font-display text-3xl font-extrabold tracking-tight">{t.commerce.catalog.title}</h1>
            <IconButton variant="white" aria-label="Notifications">
              <Bell className="h-5 w-5" />
            </IconButton>
          </div>
          <SearchBar value={query} onChange={setQuery} className="mt-5" />
          <CategoryTabs categories={CATEGORIES} value={cat} onChange={setCat} className="mt-5" />
          <div className="mt-6">{list.length ? grid("grid-cols-2") : <Empty label={t.commerce.catalog.empty} />}</div>
        </Container>
      </div>

      {/* ── Desktop catalog (filter rail + grid) ─────────────────────── */}
      <div className="hidden md:block">
        <Container className="py-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.brand}</p>
              <h1 className="mt-1 font-display text-4xl font-extrabold tracking-tight">{t.commerce.catalog.title}</h1>
            </div>
            <div className="w-80">
              <SearchBar value={query} onChange={setQuery} />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-[16rem_1fr] gap-8">
            <aside className="space-y-7">
              <FilterGroup title={t.commerce.filters}>
                <div className="flex flex-col gap-1.5">
                  {CATEGORIES.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCat(c)}
                      className={cn(
                        "rounded-full px-4 py-2 text-start text-sm font-semibold transition-colors",
                        cat === c ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted",
                      )}
                    >
                      {t.commerce.categories[c]}
                    </button>
                  ))}
                </div>
              </FilterGroup>

              <FilterGroup title={t.commerce.catalog.priceRange}>
                <input
                  type="range"
                  min={200}
                  max={600}
                  step={10}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[var(--color-brand)]"
                />
                <div className="mt-1 flex justify-between font-mono text-xs text-muted-foreground">
                  <span>{t.commerce.currency}200</span>
                  <span>
                    {t.commerce.currency}
                    {maxPrice}
                  </span>
                </div>
              </FilterGroup>

              <FilterGroup title={t.commerce.catalog.sort}>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  className="h-11 w-full rounded-full border border-border bg-card px-4 text-sm outline-none focus:border-ring"
                >
                  {(Object.keys(t.commerce.catalog.sortOptions) as SortKey[]).map((k) => (
                    <option key={k} value={k}>
                      {t.commerce.catalog.sortOptions[k]}
                    </option>
                  ))}
                </select>
              </FilterGroup>
            </aside>

            <section>
              <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                <SlidersHorizontal className="h-4 w-4" />
                {list.length} {t.commerce.catalog.results}
              </div>
              {list.length ? grid("grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5") : <Empty label={t.commerce.catalog.empty} />}
            </section>
          </div>
        </Container>
      </div>
    </main>
  );
}

function FilterGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="mb-3 font-display text-sm font-bold uppercase tracking-wide text-muted-foreground">{title}</h3>
      {children}
    </div>
  );
}

function Empty({ label }: { label: string }) {
  return (
    <div className="col-span-full mt-6 grid place-items-center rounded-[var(--radius-lg)] border border-dashed border-border p-12 text-center text-muted-foreground">
      {label}
    </div>
  );
}
