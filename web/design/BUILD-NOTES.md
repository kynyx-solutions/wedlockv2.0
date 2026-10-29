# Wedlock web — build notes

Conventions for turning a mockup board (`design/boards/project/*.dc.html`) into a Next.js page.
`src/app/page.tsx` (Home) is the reference implementation: copy its patterns.

## Stack
- Next.js 16.4 App Router, React 19, Tailwind v4. Read `node_modules/next/dist/docs/` before using any Next API you are unsure of (APIs changed).
- Pages are static server components. Only add `"use client"` for real interactivity (filters, forms), in a small separate component.
- Keep client JavaScript minimal (3G/4G performance budget). Prefer `<details>`, links and CSS over JS.

## Reading a board
- Boards are HTML with inline styles plus a `class Component` script whose `renderVals()` holds the list data used by `sc-for` loops. Port the copy and data exactly; do not invent facts.
- `dc-import name="Header" active="x"` → `PageShell active="x"`. `dc-import name="WhatsAppButton" message="..."` → `PageShell waMessage="..."`. `dc-import name="Footer"` → handled by PageShell.
- Mockup links map to routes: Home.dc.html `/`, About `/about`, Services `/services`, ServiceDetail `/services/destination-weddings`, Destinations `/destinations`, Portfolio `/weddings`, WeddingStory `/weddings/<slug>`, Journal `/journal`, Article `/journal/<slug>`, Careers `/careers`, Contact `/contact`, Calculator `/wedding-budget-calculator`, FAQ `/faq`, Partner `/partner`, Privacy `/privacy`, CityPatna `/wedding-planner-patna`, DestinationDetail `/destinations/jaipur`. `#` stays `#`.

## Shared pieces (do not edit these files; build page-local components instead)
- `@/components/PageShell` — header, footer, floating WhatsApp, phone action bar. Props: `active` (NavKey from `@/lib/site`), `waMessage`.
- `@/components/Picture` — `<Picture slug alt sizes className position priority />` serves pre-compressed AVIF/WebP. Use `priority` only for the first, above-the-fold image. `<PhotoToCome label className />` is the honest placeholder.
- `@/lib/site` — `SITE` (phone, email, address, social), `waLink(message)`, `NAV`.
- `globals.css` utilities: `container-x`, `h1`, `h2`, `eyebrow`, `btn btn-dark`, `btn btn-outline`, `btn-soft`, `field`. Colour tokens: `ivory stone sage ink ink-2 moss fern olive gold gold-light champagne line mist mist-2 placeholder`. Fonts: `font-serif` (Cormorant), `font-sans` (Manrope), `font-deva` (Hindi accents).
- Style mapping: `#F6F4EE` ivory, `#ECEAE2` stone, `#DDE1D6` sage, `#23271F` ink, `#2E3328` ink-2, `#56604A` moss, `#4E5548` fern, `#3A4234` olive, `#7E6233` gold, `#C9AE7E` gold-light, `#B8975F` champagne, `#DAD7CC` line, `#BFC5B6` mist, `#DCE0D4` mist-2, `#C9CEC0` placeholder.
- Section rhythm: `py-20 lg:py-28` (mockup 112px), side padding comes from `container-x`. Mobile first: every grid collapses to one column on phones.

## Images: mockup blob id → media slug
Use ONLY these. Anything else in the mockup (destinations, journal stock, the Udaipur story) is mislabelled stock → use `<PhotoToCome label="…" />`.

| blob id (prefix) | slug | what it shows |
| --- | --- | --- |
| 3e241a92 | couple-night-lights | Ankita & Anunay at reception under warm lights |
| 63453a62 | entry-ankita-anunay | welcome board on chevron walkway, gold frames |
| f89d2e44 | couple-bw-ankita-anunay | couple, black & white, fairy lights |
| 5eb4ec15 | stage-srestha-vishal | Srestha & Vishal floral stage, white sofa |
| 8547bebc | welcome-sign-srestha-vishal | arched “Wedding · Srestha Vishal” sign (portrait) |
| (none) | sign-srestha-vishal | S·V monogram sign with lanterns (portrait) |
| bd8513b1 | haldi-couple | haldi couple in yellow, garlands |
| (none) | haldi-couple-close | haldi couple close-up |
| 766a0720 | haldi-couple-seated | haldi couple seated |
| (none) | mehendi-couple | mehendi couple, marigold backdrop (portrait) |
| (none) | mehendi-decor | colourful mehendi stage décor (portrait) |
| 437dd7a9 | sangeet-dance | guests dancing, chevron floor |
| 9c41f598 | floral-mandap | red gerbera mandap, crystal lights |
| 10d38128 | crystal-walkway | walkway under crystal globes & greenery (portrait) |
| 5b18d6ed | decor-better-together | living green wall, neon “Better together” |
| dd600961 | stage-floral | outdoor stage framed in greenery & white flowers (portrait) |
| 9fe9c09d | bride-closeup | bride make-up & maang tikka close-up |
| 1d88ccad | bride-phulkari-canopy | bride under red canopy with latkans |
| (none) | bride-portrait | bride portrait (portrait) |
| 721bfd56 | bride-red-veil | bride smiling beneath red veil |
| 71e5a615 | team-aabish-hassan | portrait, Syed Aabish Hassan (380×573) |
| dc95ae60 | team-rahul-ranjan | portrait, Rahul Ranjan |
| c7c360b4 | team-aliwaris-khan | portrait, Aliwaris Khan |

## Forms
No database yet. Forms are small client components that open WhatsApp with the entered details (see `src/components/QuickEnquiry.tsx`) and say so in a short note. Keep labels, consent checkbox and field order from the mockup.

## SEO
Every page exports `metadata` with a unique `title` (the layout adds “· Wedlock”) and `description`. Dynamic routes use `generateStaticParams` + `generateMetadata` so they prerender.

## Checks before you finish
- `npx tsc --noEmit` and `npm run lint` clean.
- A dev server is already running on http://localhost:3000 — do not start another or run `next build`. `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/<route>` must return 200.
