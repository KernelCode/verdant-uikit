# Build an ECOMMERCE kit from BASE — the brief for your editor

You are turning this **base canvas** into a complete, production-grade **ecommerce
storefront UI kit** for the [uikit.studio](https://uikit.studio) gallery — a theme in
the spirit of **Salla, Zid, and Shopify**, tuned for the **Saudi / Khaliji market**.
This works in any AI editor (Claude Code, Codex, Cursor, …). The **developer** supplies
the creative brief (the brand, the mood, the kind of store); **this document** tells you
how to build it the uikit way and **how big and how finished it must be.**

> This is the **`type: "ecommerce"`** variant of [`build.md`](./build.md). It keeps every
> non-negotiable there (original · full · consistent · runnable+bilingual · responsive ·
> documented · agent-ready) but **swaps the required pages** from the SaaS set
> (landing · pricing · dashboard · components) to the **storefront set** below.

> Paste your brief here, e.g.:
> *"An abaya & modest-fashion store — warm sand + olive, an elegant Arabic serif,
> generous product imagery, COD + Tabby. Souky, premium, trustworthy."*

---

## Non-negotiables (same bar as build.md)

1. **Be ORIGINAL** — invent this store's own structure, hero/banner composition, and
   signature merchandising components. Never recolor another kit. Reuse *patterns*
   (product card, filter rail, price tag), never another kit's *theme* or *page rhythm*.
2. **Be FULL** — a real storefront, not a sampler (see the required pages below).
3. **Be CONSISTENT** — one mood board across storefront, listing, product, and cart.
4. **Be RUNNABLE + bilingual** — `cd react && pnpm install && pnpm dev` just works.
   **Arabic is the primary, first-class locale** for this market: AR + full RTL by
   default, plus EN. Load a real Arabic typeface. A dark-mode toggle that flips every token.
5. **Be RESPONSIVE** — mobile-first (most Khaliji shoppers are on phones). Verify at
   ~375 / 768 / 1280px. The filter rail becomes a bottom sheet/drawer on mobile; the
   product grid reflows; the cart becomes a full screen.
6. **Be DOCUMENTED** — every color, radius, font, breakpoint is a token in
   `design/theme.css` **and** `design/tokens.json`, shown in the README **and** reflected
   in `uikit.json`. No magic numbers in JSX. (Mind the Tailwind v4 `var()` gotcha:
   `rounded-[var(--radius-lg)]`, never `rounded-[--radius-lg]`.)
7. **Be AGENT-READY** — ship `AGENTS.md` + `llms.txt` at the repo root so another
   developer's agent can reproduce this exact storefront from one URL.

---

## Required pages (the ecommerce set — replace the stubs)

Build these as real routes in the runnable app (`react/src/routes/*`):

- **Storefront home (`/`)** — the shopfront: a hero/promo **banner** (or carousel), a
  **category grid**, **featured collections**, a **best-sellers / new-arrivals** product
  rail, a promo strip (e.g. free-shipping / seasonal sale), a **trust + payment row**
  (mada · Apple Pay · Tabby · Tamara · STC Pay · COD), and a real footer.
- **Products / listing (`/products`)** — the catalog: a **search bar**, a **filter panel**
  (price range · category · brand · color · size · rating · availability), a **sort**
  control, a responsive **product grid**, result count, **pagination or infinite scroll**,
  and **empty + loading** states. Filtering is the centerpiece — make it real and dense.
- **Product detail / preview (`/product`)** — the conversion page: an **image gallery**
  (thumbnails + zoom), title, **price** with SAR + sale/strikethrough, **rating + reviews**,
  **variant selectors** (color swatches, size pills), a **quantity stepper**, an
  **add-to-cart / buy-now** CTA, a **delivery estimate** + COD note, an accordion of
  details/shipping/returns, and a **related products** rail.
- **Cart / checkout (`/cart`)** — cart **line items** (image, variant, qty stepper,
  remove), a **coupon** field, an **order summary** (subtotal · shipping · VAT 15% · total
  in SAR), a **free-shipping progress** bar, and a checkout step exposing local **payment
  options** (mada · Apple Pay · Tabby/Tamara split · STC Pay · COD / الدفع عند الاستلام).
- **Components showcase (`/components`)** — the "see everything" page: color swatches
  (light + dark), the type scale, fonts, the radius scale, and **every** component in
  **all** its variants — now featuring the ecommerce components below.

If a page would feel thin next to a real Salla/Zid/Shopify storefront, it is not done.

## Signature components to build (every variant + state)

On top of the primitives (Button, Input, Card, Badge, Container), ship the storefront set:

- **ProductCard** (image, title, price, rating, wishlist, quick-add; sale/new/sold-out badges)
- **PriceTag** (SAR ﷼ / "ر.س", sale + strikethrough, per-unit)
- **RatingStars** · **ReviewCard**
- **VariantSwatch** (color) + **SizePills** (with sold-out/disabled states)
- **QuantityStepper**
- **FilterPanel** / **FacetGroup** (checkbox, price range, color/size facets) + **SortSelect**
- **CartLine** + **CartDrawer** / mini-cart
- **CollectionCard** · **CategoryTile** · **Breadcrumb**
- status **Badge** (sale · new · sold-out · low-stock) · **TrustBadges** (payment + secure)
- a promo **Marquee/strip** and a **FreeShippingBar**

## Saudi / Khaliji styling guidance

- **Arabic-first + RTL primary.** Default the app to AR; the layout must flip correctly
  (`dir="rtl"`, logical properties, `text-start`, arrows `rtl:rotate-180`). Translate all
  copy — never leave English in Arabic mode.
- **Currency:** SAR — show ﷼ or "ر.س". Apply **VAT 15%** in the order summary.
- **Local payments & trust:** mada, Apple Pay, **Tabby / Tamara** (BNPL — "قسّمها على 4"),
  STC Pay, and **COD (الدفع عند الاستلام)**. Surface these as trust badges and checkout options.
- **Delivery cues:** delivery estimate, free-shipping threshold, fast-shipping/returns badges.
- **Merchandising:** product-imagery-forward, generous whitespace, conversion-focused.
  Reference Salla/Zid storefront conventions for layout *patterns* — but design your **own**
  identity (don't clone their themes).

## Definition of done

1. `pnpm dev` shows a complete, original storefront across all five pages.
2. Full design system: light **and** dark, full type scale, every component + states.
3. Storefront, listing (with real search + filters), product, and cart are all *full* screens.
4. AR (primary) + EN + RTL + dark all correct.
5. `npx uikit-cli validate` passes; `uikit.json` has `"type": "ecommerce"` and describes the surface.
6. Assets in `screenshots/`: `landing.png` (the storefront), plus product/listing captures
   and a `preview.webm` clip.
7. Agent-ready: `AGENTS.md` + `llms.txt` at the repo root, in sync with `design/`.

See [`build.md`](./build.md) for the shared rules (tokens, RTL checklist, assets, Tailwind
v4 notes) and [`extend.md`](./extend.md) to grow the kit.
