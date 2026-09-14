import {readFile,access} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const pages=['index.html','catalogue.html','product.html','story.html','contact.html'];
for(const page of pages){await access(path.join(root,page));const html=await readFile(path.join(root,page),'utf8');if(!html.includes('app.js'))throw new Error(`${page} is missing shared commerce JavaScript`);}
const data=JSON.parse(await readFile(path.join(root,'data/source-products.json'),'utf8'));
const variants=data.products.reduce((n,p)=>n+p.variants.length,0);
if(data.products.length!==16||variants!==215)throw new Error(`Unexpected catalogue shape: ${data.products.length} products, ${variants} variants`);
console.log(`Checked ${pages.length} routes, ${data.products.length} products and ${variants} variants.`);
