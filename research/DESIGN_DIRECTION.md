# Design direction

## Design Read

Reading this as: a reservation-led winery landing for adults planning a Mendoza visit, with Chandon's open, celebratory character expressed through landscape-scale photography, confident sans typography, and one vivid red accent.

## Status

This is a first-contact sales hypothesis built from public information. It is not a production redesign and does not claim current pricing, availability, awards, or operational details beyond the cited public sources.

## Dials

- DESIGN_VARIANCE: 7 - asymmetric editorial crops and varied section families, with strict mobile collapse
- MOTION_INTENSITY: 4 - one orchestrated page-load and modest reveal/hover feedback using CSS only
- VISUAL_DENSITY: 3 - atmosphere first, with practical details grouped at booking moments

## Principles

1. Sell the feeling of arrival before listing products.
2. Keep Chandon social and open, not hushed or intimidating.
3. Make every experience understandable in one glance: format, duration, tasting/food, and action.
4. Let Mendoza appear through light, dry landscape, vineyard geometry, gardens, and outdoor tables.
5. Use brand red as a confident hospitality signal, not as a technology-style glow.

## Anti-patterns

- Black-and-gold "luxury wine" cliche
- Cream, brass, and ornamental serif as an automatic premium formula
- Equal three-card SaaS grids
- Dense legacy page-builder sections with every offer at the same weight
- Fake awards, reviews, scarcity, production numbers, sustainability claims, or historical milestones

## Token system

- Page background: Mineral white `#F2F2ED`
- Primary text: Ink `#171714`
- Muted text: Olive grey `#62635D`
- Accent: Chandon red hypothesis `#D93B35`
- Image shade: Wine shadow `#241C1B`
- Border: Ink at 18% opacity
- Theme: light, locked across the page; photography may contain natural dark values
- Accent rule: red is the only chromatic UI accent

## Typography

- Display and body: Geist Sans through `next/font`, using weight and width rather than decorative luxury serif
- Utility labels: Geist Mono, used only for duration and practical details
- H1: compact, uppercase, approximately 64-104 px depending on viewport, maximum two lines
- H2: 40-68 px, short and left aligned
- Body: 17-20 px with 1.5 line height and approximately 58 characters per line
- No italic display flourish and no all-purpose eyebrow above every section

## Layout and composition

- Hero: immersive 16:10 image occupying most of the viewport, with a compact red editorial panel overlapping the lower-left edge
- Immediate choice: two unequal experience panels, classic and premium, instead of a three-card feature row
- Place story: one large landscape image with a narrow text column and tangible route language
- Table story: horizontal full-width dining image paired with short, social copy
- Practical section: quiet grouped facts and direct contact, not a long FAQ table
- Content width: 1440 px maximum, with 24 px mobile and 48-64 px desktop gutters
- Spacing rhythm: 24 / 48 / 80 / 128 px
- Shape rule: square editorial surfaces; buttons may use a restrained 2 px radius, not pills

## Signature element

The memorable device is a red "invitation card" that cuts into the hero photograph and carries the specific promise "Burbujas de Mendoza." It behaves like a printed invitation placed over a travel photograph and returns once as the final booking panel.

## Photography and media

- Original generated concept photography, clearly disclosed in the README
- Hero: candid outdoor sparkling-wine toast at a long table, dry Mendoza light, Andes and vines, adults only, no visible brand labels
- Winery: low modern architecture, vineyard rows, mountain horizon, people small in frame
- Gastronomy: relaxed seasonal table in a garden, sparkling wine, Argentine ingredients, human hands rather than posed faces
- Color grade: sun-washed neutrals, deep natural shadows, restrained red in clothing or table detail
- Avoid: branded bottles, copied Chandon campaigns, barrel close-up cliches, staged sommelier portraits, generic European chateau imagery

## Motion

- CSS-only hero reveal that separates image, wordmark, and invitation card in one short sequence
- Image scale settles by 1-2% on load; hover feedback is limited to buttons and media links
- All animation disabled under `prefers-reduced-motion`
- No parallax, scroll hijack, marquee, or animation library

## Primary CTA behavior

- Label: `Reservar una experiencia`
- Destination: the existing public Chandon Argentina winery page, which contains live SevenRooms reservation entry points
- Secondary CTA: `Ver experiencias`, scrolling to the offer comparison
- Special-format CTA: `Consultar experiencia privada`, using the publicly listed visitor email

## Information architecture

1. Navigation and immersive arrival
2. Core visit options
3. The place and route through the winery
4. Food, gardens, and shared table
5. Other public experience formats
6. Practical planning details
7. Final reservation invitation and responsible-consumption note

## Identity preservation

The direction keeps the visible CHANDON wordmark treatment, all-caps confidence, Spanish voseo, sparkling-wine focus, "anfitriones" language, Mendoza setting, and social celebration. It modernizes composition, hierarchy, and booking clarity without inventing a new logo or converting the brand into a minimal tech product.

## Planned copy boundary

- Factual: public experience names, durations, broad inclusions, contact details, location, and minors note where explicitly published
- Inferred creative framing: hero and section headlines, emotional sequence, and grouping of experiences
- Omitted until discovery: prices, current availability, awards, exact accessibility, languages, capacity, transport, and operational policies not confirmed on the primary page

## Reference roles

- Chandon Australia: social energy and modern global brand expression
- Chandon global wineries: continuity of togetherness and place
- Ruinart: sparkling-wine restraint and architectural pacing
- Riccitelli: contemporary Mendoza character
- Finca Decero: land-to-winery-to-table narrative
