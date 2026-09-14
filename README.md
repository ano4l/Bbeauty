# Bambï Beauty

A dependency-light, multi-page luxury storefront concept built from the current Bambï Beauty catalogue snapshot.

## Pages

- `index.html` — cinematic home campaign
- `catalogue.html` — full 16-product shop with search, filters and sorting
- `product.html?handle=<handle>` — exact product, variant and availability view
- `story.html` — Bambï Beauty brand story
- `contact.html` — client care and local contact-form experience

## Run locally

```powershell
npm run check
python -m http.server 4173
```

Open `http://localhost:4173`. Build the Vercel-ready `dist` directory with `npm run build`.

## Commerce boundary

The local catalogue contains all 16 products and 215 exact variants from the source snapshot. Search, filtering, variant selection, availability, galleries, related products and a persistent local bag work across pages. Payments, order creation, live inventory, email delivery and newsletter submission are not connected. Checkout presents this boundary before linking to the live Shopify store.

`data/source-products.json` remains the commercial source of truth. Product imagery is served from `assets/products/`.
