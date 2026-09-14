# Bambï Beauty storefront concept

A responsive, browsable redesign using the current Bambï Beauty catalogue: all 16 products, 215 variants, exact prices, availability, descriptions, and locally saved product imagery.

## Run locally

From the `Bambi Beauty` folder, start any static file server. For example:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173`.

## Prototype boundary

This is a standalone design prototype. Search, filtering, product details, variant pricing, availability, and a persistent local bag are functional. It is not connected to Shopify checkout, inventory mutation, payments, email marketing, or order creation. The checkout action clearly sends clients to the live Bambï Beauty store.

The commercial source of truth remains `data/source-products.json`; source images are retained in `assets/products/`.
