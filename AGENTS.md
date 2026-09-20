# Working agreement

This repository is a first-contact sales demo for Chandon Argentina. It is a hypothesis built from public information, not a production site or an official brand asset.

## Preserve

- The public-fact versus inference boundary documented in `research/`.
- The single-page, low-dependency architecture unless discovery adds a real requirement.
- The current visual thesis: social sparkling-wine hospitality, Mendoza landscape, mineral neutrals, and one red accent.
- The disclosure that generated images are conceptual.
- Spanish voseo and concise reservation-first copy.

## Do not add without verified client evidence

- Awards, testimonials, rankings, visitor counts, production figures, founding dates, certifications, sustainability claims, availability, inventory, or prices.
- New locations, facilities, accessibility promises, languages, or service policies.
- Analytics, CRM, forms, or booking integrations.

## Refinement after discovery

Update `research/DESIGN_DIRECTION.md` first when a discovery decision changes the page thesis. Replace generated images with approved brand photography in place where possible. Keep section IDs and the primary reservation path stable unless the client explicitly changes the conversion model.

## Verification

Run:

```bash
bun install --frozen-lockfile
bun run lint
bun run typecheck
bun run build
```

Also inspect 320, 390, 768, 1024, and 1440 pixel widths, keyboard focus, reduced motion, external links, and copy accuracy.
