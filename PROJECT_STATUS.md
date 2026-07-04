# Project Status

Last updated: 2026-07-03

Continuity notes for picking this project back up. Written for whoever (or whichever
Claude session) resumes work next.

## What this is

"Latte & Co." — a premium, minimalist storefront for pet toys, styled after sicora.co
(warm cream background, deep charcoal text, terracotta accent). Next.js 16 App Router
project, no `src/` directory — routes and components live at the project root.

## What's built

- **Color system** — `app/globals.css` defines cream/charcoal/terracotta via Tailwind v4
  `@theme inline` tokens (`bg-background`, `text-foreground`, `bg-accent`, etc.). No
  `tailwind.config.js` — this is Tailwind v4's CSS-first config.
- **Product catalog** — `data/products.ts` exports a typed `Product[]` (id, title, price,
  description, `images: string[]`, eco-friendly `features: string[]`). 14 products.
- **Homepage** (`app/page.tsx`) — hero + responsive product grid (`components/ProductCard.tsx`).
- **Product detail pages** (`app/products/[id]/page.tsx`, `components/ProductDetail.tsx`) —
  dynamic route with `generateStaticParams`, two-column layout, photo gallery with
  thumbnail strip, "Materials & Sustainability" accordion built from `features`.
- **Cart** — `context/CartContext.tsx` (React Context, in-memory only — no persistence,
  resets on page reload) + `components/CartDrawer.tsx` (slide-out drawer with quantity
  steppers, subtotal, checkout button).
- **Checkout** — `app/api/checkout/route.ts` creates a real Stripe Checkout Session
  (`mode: "payment"`) from the cart and returns its `url`; `CartDrawer` redirects the
  browser to it directly (no `@stripe/stripe-js` usage yet, even though it's installed).
- **Images** — `components/ProductImage.tsx` is a shared `next/image` wrapper that
  silently falls back to the existing gradient/title placeholder tile if `src` is
  missing or fails to load (`onError`). Used in the grid, detail gallery, and cart drawer.

## Known gaps / things to double check before this goes live

1. **Pricing needs review.** Several product prices are raw RMB figures transcribed
   as numbers during data entry (e.g. Anchor Potty Tray is `319`, Honey Fleece Pullover
   is `8`) — not converted to USD or repriced for "premium" positioning. Sanity-check
   every price in `data/products.ts` before this is customer-facing.
2. **No Stripe success/cancel pages.** `app/api/checkout/route.ts` redirects back to
   `/?checkout=success` / `/?checkout=canceled` — there's no dedicated page or banner
   that reacts to that query param yet.
3. **Cart doesn't persist.** Refreshing the page empties the cart (state lives only in
   `CartContext`, no `localStorage`/cookie backing).
4. **Multi-image products** — `Anchor Potty Tray` (2 photos), `Comfort Harness Lead`
   (4), and `Harvest Burrow Bed` (5) have real photo galleries. Everything else has
   exactly one photo.
5. **Brand consistency** — the catalog currently mixes actual toys (Foraging Meadow
   Mat, and originally Acorn Puzzle Feeder / Knot & Ball Chew Set, since removed for
   lacking photos) with general pet gear (rain shells, leashes, potty trays, a dog
   bed). Worth a deliberate pass on whether "Latte & Co." stays toy-only or broadens
   its stated positioning.
6. **`.env.local` is required and not in the repo** (by design — it's gitignored).
   You need your own Stripe test keys to run checkout locally:
   ```
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   ```

## Architecture notes worth knowing

- **No `src/` directory** — this was a deliberate choice early on to match the
  existing `create-next-app` scaffold rather than restructure it.
- **Navbar and CartDrawer live in `app/layout.tsx`**, not in individual pages, so
  they're global. `CartProvider` wraps the whole `<body>`.
- **`ProductCard` and the homepage grid are separate from `ProductDetail`** — the grid
  shows one photo, the detail page shows the full gallery via `product.images`.
- Tailwind v4 + Turbopack has occasionally needed a real file edit to `globals.css`
  to pick up new `@theme` tokens during a long-running dev session (a caching quirk,
  not a code bug) — if a color utility silently renders transparent, try re-saving
  `globals.css` before assuming the token definition is wrong.

## Suggested next steps

- Add real success/cancel pages for the Stripe redirect.
- Decide on final pricing and currency display (`$` vs actual USD conversion).
- Add persistence to the cart (localStorage is the simplest option).
- Source photos (or decide to drop) for any future new products before adding them to
  `data/products.ts` — `ProductImage`'s fallback means a missing photo won't break the
  build, but it does mean an easy-to-miss silent gap.
