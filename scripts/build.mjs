import { cp, mkdir, readFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const out = path.join(root, 'dist');
const catalog = JSON.parse(await readFile(path.join(root, 'data/source-products.json'), 'utf8'));
if (!catalog.products?.length) throw new Error('Product catalogue is empty');
await mkdir(out, { recursive: true });
for (const file of ['index.html', 'catalogue.html', 'product.html', 'story.html', 'contact.html', 'styles.css', 'cinematic.css', 'app.js', 'assets', 'data']) {
  await access(path.join(root, file));
  await cp(path.join(root, file), path.join(out, file), { recursive: true });
}
console.log(`Built storefront: ${catalog.products.length} products, ${catalog.products.reduce((n, p) => n + p.variants.length, 0)} variants.`);
