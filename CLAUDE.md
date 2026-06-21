# CLAUDE.md — Verdant

Verdant is a finished **ecommerce storefront** kit (`type: ecommerce`): a premium
furniture store, emerald green + terracotta on cream, **Arabic-first / RTL** for the
Saudi-Khaliji market, EN + AR, light + dark.

**Build with the kit — don't reinvent it.** Use the existing tokens and components so
the store stays consistent.

- **Theme** — tokens in `design/theme.css` (Tailwind v4 `@theme`) + `design/tokens.json`.
  Brand `--color-brand` (emerald), `--color-accent` (terracotta), `--color-ink` (hero),
  `--color-stage` (product tile). Reference radius as `rounded-[var(--radius-lg)]`.
- **Components** — `react/src/components/`: Button, IconButton, Badge, Card, Input,
  ProductCard, PriceTag, RatingStars, ColorSwatch, QuantityStepper, SearchBar,
  CategoryTabs, BottomNav, TrustBadges, PhoneFrame. Extend these; don't add one-offs.
- **Pages** — `react/src/routes/`: storefront `/`, catalog `/products`, product
  `/product`, cart `/cart`, showcase `/components`. Each is mobile-first with a desktop
  layout (`md:` breakpoint).
- **Data** — demo products in `react/src/data/products.ts`; cart/favorites in
  `react/src/lib/store.tsx`. Chair images are transparent PNG cutouts in
  `react/src/assets/products/`.
- **i18n** — `react/src/i18n/{en,ar}.ts`. AR is first-class; keep RTL correct
  (`text-start`, `ps/pe`, `rtl:rotate-180`). Prices use `t.commerce.currency`.
- **Market** — SAR (﷼), VAT 15%, payments: mada · Apple Pay · Tabby · Tamara · STC Pay · COD.

Run: `cd react && pnpm install && pnpm dev`. Validate: `npx uikit-cli validate`.
