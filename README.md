# MAISON LA

MAISON LA is a mobile-first members-only platform for discovering and requesting curated luxury venues across Los Angeles. The restored product slice includes quiet-luxury discovery, onboarding, editorial venue pages, reservation requests, concierge chat, VIP profile, and staff-facing venue/admin views.

## Run

```bash
pnpm install
pnpm dev
pnpm check
pnpm build
```

Preview listens on port 3000. Manus OAuth/session behavior from the starter is preserved. The project keeps `/api/health` and the platform config endpoint intact.

## Routes

`/` member home; `/onboarding` preference introduction; `/discover` filters by experience and neighborhood; `/venue/:id` editorial venue page; `/booking/:id` reservation request; `/concierge` concierge workspace; `/profile` VIP preferences and reservations; `/venue-dashboard` venue manager view; `/admin` admin view; `/manus-routes.json` route manifest.

## Design system

Warm ivory, stone, taupe, deep espresso, and muted bronze; Cormorant Garamond display type with Inter UI text; editorial image crops, hairline rules, restrained controls, responsive mobile navigation, and reduced-motion support. Copy is discreet and avoids discount or urgency language.

## Data and integrations

The current interface uses realistic LA seed data for the front-end preview, covering Beverly Hills, Bel Air, Malibu, West Hollywood, Santa Monica, Downtown LA, Brentwood, and Pacific Palisades. Booking and concierge interactions are presented as request states and intentionally do not charge a member. Stripe, SMS/email delivery, calendar sync, and LLM tool-calling remain integration follow-ups behind the existing starter server/tRPC boundary.
