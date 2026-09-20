# Chandon winery experience demo

A one-shot, first-contact landing-page hypothesis for Bodega Chandon in Mendoza. This is a separate, deploy-ready repository created from public information only. It is not an official Chandon website.

## What this demo tests

- A contemporary visual expression that remains recognizably Chandon
- A reservation-first information hierarchy for winery visitors
- Accessible luxury: celebratory, social, and polished without exclusivity theater
- A lean structure that can be refined in place after discovery

## Evidence boundary

Public facts, source URLs, competitor observations, and the design rationale live in [`research/`](./research). The page deliberately omits unverified prices, availability, awards, statistics, certifications, accessibility claims, and operational policies.

The three photographs in `public/images/` were generated specifically for this concept with OpenAI's built-in image generation tool. They are art-direction placeholders, contain no copied brand campaign assets, and do not document the real Chandon property. Replace them with approved brand photography before production use. The public Chandon Argentina wordmark is included only to identify the prospect in this private sales demo.

## Local development

```bash
bun install
bun run dev
```

Open http://localhost:3000.

## Quality checks

```bash
bun run lint
bun run typecheck
bun run build
```

## Deployment

The default target is Vercel.

1. Import this repository into Vercel.
2. Use the detected Next.js settings and Bun lockfile.
3. Optionally set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin so canonical and sitemap URLs use the deployed host.
4. Deploy.

No secrets or backend services are required. The page links to Chandon's existing public reservation surface and published visitor contacts. The demo is intentionally `noindex` so it cannot compete with the prospect's official site. Change that only for an authorized production release.

## Asset and license notes

- Generated concept images: project-specific demo assets; final production usage requires client approval.
- Public prospect wordmark: `public/images/chandon-logo.png`, used only for private sales identification and subject to the brand owner's rights.
- Fonts: Geist and Geist Mono loaded through `next/font`.
- CHANDON is a third-party trademark used here only to identify the prospect in a private sales concept.
- No product photography, testimonials, or campaign copy are bundled.

## Image prompts

The generated assets use the `photorealistic-natural` workflow:

- `hero-mendoza-gold.png`: candid adult toast at a long vineyard table in Mendoza, Andes backdrop, label-free glasses and bottles, space for an editorial panel; blouse retouched to champagne taupe.
- `winery-arrival.png`: contemporary low winery architecture among vines, mountain horizon, two adult visitors small in frame.
- `garden-table-gold.png`: shared seasonal garden lunch with sparkling wine, empanadas, vegetables, and adult hands, with no brand labels; napkins retouched to muted champagne gold.

All prompts explicitly avoided logos, readable labels, text, watermarks, European chateau imagery, and black-and-gold luxury clichés.
