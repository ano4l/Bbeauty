# Vercel deployment

Import `ano4l/Bbeauty` in Vercel and choose the `main` branch.

- Root directory: repository root
- Framework preset: Other
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: none required

The checked-in vercel.json provides the build and output settings. The dependency-free build publishes all five HTML routes, shared CSS and JavaScript, catalogue data, and product images. Research files are excluded from the build output.

Verify locally with `npm run check` and `npm run build`.

This deploys the storefront prototype. Payments, Shopify order creation, live inventory refresh and newsletter subscriptions are not connected. Catalogue pricing and availability are the saved source snapshot, not a live stock feed.

Configuration reference: https://vercel.com/docs/project-configuration
