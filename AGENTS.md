# AGENTS.md — Verdant (for any AI editor)

This repo is **Verdant**, a finished **ecommerce furniture storefront** kit. Reproduce
*this* design — don't invent a new one. Read [`llms.txt`](./llms.txt) for the full
token/component spec, and `design/` for the source of truth.

**Identity**
- **Type:** ecommerce storefront (Salla / Zid / Shopify–style), Saudi/Khaliji market.
- **Color:** emerald brand `#1f5c32` · terracotta accent `#cf6a1a` · cream bg `#f4f3ee`
  · near-black actions `#181b17` · deep-forest "ink" hero `#17271b`. Full light + dark.
- **Type:** Plus Jakarta Sans (display/body) · Space Mono (prices/labels) · Thmanyah Sans (Arabic).
- **Radius:** soft; pill buttons/chips; `--radius-lg 1.5rem`, `--radius-2xl 2.5rem`.

**Rules**
1. Build from the tokens in `design/theme.css` + `design/tokens.json` — no off-brand colors.
2. Reuse the components in `react/src/components/` (ProductCard, PriceTag, CategoryTabs,
   QuantityStepper, ColorSwatch, SearchBar, BottomNav, TrustBadges, …).
3. Pages are mobile-first with a `md:` desktop layout. Keep both.
4. **Arabic is first-class:** EN + AR, full RTL (`dir`, logical props, `rtl:` flips).
5. Market details: SAR (﷼), VAT 15%, payments mada · Apple Pay · Tabby · Tamara · STC Pay · COD.
6. Tailwind v4: `rounded-[var(--radius-lg)]`, never `rounded-[--radius-lg]`.

**Run:** `cd react && pnpm install && pnpm dev`. **Validate:** `npx uikit-cli validate`.

> "Build me a furniture store styled exactly like this design:
> github.com/KernelCode/verdant-uikit — match its tokens, fonts, radius and components."
