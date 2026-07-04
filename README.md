# Latte & Co.

A premium, minimalist e-commerce storefront for pet toys, inspired by the clean, spacious aesthetic of sicora.co. Built with Next.js 16 (App Router), Tailwind CSS v4, and Stripe Checkout.

See [PROJECT_STATUS.md](./PROJECT_STATUS.md) for a full breakdown of what's built, what's stubbed, and what to pick up next.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

You'll need a `.env.local` with your own Stripe test keys (see `PROJECT_STATUS.md` for the exact variable names) — it's gitignored and not included in this repo.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **Tailwind CSS v4** (CSS-based `@theme` tokens, no `tailwind.config.js`)
- **Stripe** (`stripe` + `@stripe/stripe-js`) for Checkout Sessions
- **React Context** for cart state (no external state library)
