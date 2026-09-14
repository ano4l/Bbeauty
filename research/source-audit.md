# Bambï Beauty source-store audit

Captured from `https://bambibeautsa.myshopify.com` on 14 September 2026 (Africa/Johannesburg).

## Catalogue snapshot

- 16 published products
- 215 variants
- 209 currently available variants
- 155 product images in the source catalogue; 48 local source images retained for the redesign (up to three per product)
- Price span: R1,182 to R23,490
- Two fully sold-out products: Lunna Curls and the Double Drawn Natural Brown Luxe Virgin unit
- Source-of-truth export: `data/source-products.json`

| Product | Variants | Price range | Available variants |
| --- | ---: | ---: | ---: |
| Pineapple Curls •13x4 HD lace, Soft curl | 6 | R8,999–R14,500 | 6 |
| Bouncy Curl 5x5 Glue-less 20” inches | 1 | R4,999 | 1 |
| CORPORATE BOB, 5×5 HD, Double Drawn, Pre-Bleached Wear & Go | 1 | R3,499 | 1 |
| Lunna Curls 250% density 13x4 transparent lace | 3 | R3,250–R4,229 | 0 |
| Virgin Hd Lace Closures & Frontals | 19 | R1,474–R3,640 | 19 |
| Virgin Super Straight Frontal Wig (Hd lace) | 22 | R2,789–R9,120 | 22 |
| Virgin Bodywave 13x4 Transparent lace | 22 | R2,984–R7,321 | 22 |
| Vietnamese luxe collection – wear & go, Ombré units, bonestraight | 24 | R4,515–R14,363 | 24 |
| Virgin Blond 613 Straight Wig (Transparent Lace) | 22 | R2,320–R8,999 | 22 |
| Virgin Deep Curly Wig Transparent lace | 22 | R2,880–R7,999 | 22 |
| Virgin Super Straight Bob Wig (Glueless Hd Lace) | 6 | R2,789–R3,899 | 6 |
| Double drawn, 5x5 Glueless Natural brown, Luxe Virgin unit, Transparent lace | 3 | R3,699–R5,598 | 0 |
| Raw Bob Wig (Hd Lace) | 6 | R3,520–R4,980 | 6 |
| Raw Cambodian Natural straight (BUNDLES) | 10 | R1,182–R4,594 | 10 |
| Raw 13×4 Hd lace, Burmese Curly wig | 24 | R6,210–R23,490 | 24 |
| Raw Cambodian 5x5 Glueless Hd lace Natural straight | 24 | R5,899–R22,349 | 24 |

## Current experience: what should be retained

- The black-and-white brand base is appropriate for premium hair.
- The product photography is authentic and varied enough to become the main visual material.
- The store has a clear differentiator: raw Cambodian hair, limited processing, HD lace, and wear-and-go options.
- Existing policy, contact, tracking, and account destinations are already present and should remain discoverable.

## Current experience: redesign priorities

1. The homepage hierarchy is underdeveloped. The first viewport is mostly a texture image with a small generic Shop Now button; it does not establish provenance, quality, or why the price premium is justified.
2. Navigation and body typography are very small on desktop. Important product discovery and service links compete at the same visual weight.
3. The current full-page render leaves large blank regions while below-fold sections await scroll-triggered presentation. Content should remain visible without animation or if animation fails.
4. The philosophy copy is long, dense, and set in a narrow small block. Its strongest sales ideas should be edited into an editorial story with proof points and progressive disclosure.
5. The catalogue has large variant matrices (up to 24 options) but the homepage exposes only shallow cards. The redesign needs a readable variant selector with live price and availability.
6. Product naming, capitalization, punctuation, and `HD/Hd` treatment are inconsistent in the source. Commercial titles are preserved in product surfaces, while surrounding navigation and editorial copy should be normalized.
7. The current refund page still contains a placeholder timeframe in the Black Friday defect clause. The redesign should link to the policy rather than restating or silently modifying that legal text.
8. Shipping copy says a minimum 12 business days of processing. This expectation belongs near the top of the journey and again in the bag.
9. Search, collection discovery, filtering, and sorting need to be first-class because the catalogue spans raw, virgin, blond, straight, curly, bob, bundles, closures, and frontals.
10. The visual system needs a consistent luxury rhythm: campaign-scale imagery, more breathing room, stronger serif display type, precise sans-serif utility copy, and restrained bronze accents.

## Content facts carried into the redesign

- Contact: `bambi.southafrica@gmail.com`
- Processing: minimum 12 business days before shipment
- Brand positioning: raw Cambodian hair, with selected high-pressure steaming for additional textures while aiming to retain quality and durability
- Prototype boundary: the local redesign demonstrates browsing, variant selection, and a persistent bag; live payment and Shopify order creation are not connected
