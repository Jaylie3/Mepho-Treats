# Mepho Treats

A mobile-first Next.js website for Mepho Treats, a small-batch homemade ice cream business in Bergville, KwaZulu-Natal. Phase 1 uses JSON content and WhatsApp checkout; no customer accounts or database.

## Run locally

1. Install Node.js 20.9+.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open http://localhost:3000.

## Quality checks

- `npm run typecheck`
- `npm run test`
- `npm run lint`
- `npm run build`

## Content and configuration

Edit `data/menu.json` to change prices, flavours and ordering settings. The WhatsApp number is currently set to `27837752498`; confirm it before launch. Do not publish allergen statements until the ingredients and cross-contact wording have been verified.

## Deployment

Import the Git repository into Vercel, keep the default Next.js build settings, and attach the confirmed domain. Update `metadataBase` in `app/layout.tsx` when the final domain is known.

## Important launch checks

See `CONTENT-TODO.md` and `OWNER-GUIDE.md`. The supplied owner logo and SVG kit were not present in the coding workspace; replace the CSS illustration slots with the original assets once supplied. Fonts are temporarily loaded from Google Fonts for this prototype; self-host Montserrat ExtraBold and Poppins Medium before production launch.
