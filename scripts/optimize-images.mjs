/**
 * Image optimizer — resizes & compresses images in public/images.
 * Keeps original filenames/extensions so no code references break.
 * Run: node scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import { readdir, stat, writeFile, rename, rm } from 'node:fs/promises';
import { join } from 'node:path';

const IMG_DIR = join(process.cwd(), 'public', 'images');
const MAX_WIDTH = 1600;
const QUALITY = 78;
const MIN_SIZE = 200 * 1024; // only process files above 200KB

const isImage = (name) => /\.(jpe?g|png)$/i.test(name);

let saved = 0;
let processed = 0;

async function optimize(name) {
  const file = join(IMG_DIR, name);
  const before = await stat(file);
  if (before.size < MIN_SIZE) return;

  const buf = await sharp(file).metadata();
  if (buf.width <= MAX_WIDTH && name.endsWith('.jpg')) {
    // still recompress to shrink (jpeg only)
  }

  const ext = name.toLowerCase().endsWith('.png') ? 'png' : 'jpeg';
  let out;
  if (ext === 'jpeg') {
    out = await sharp(file)
      .rotate()
      .resize({ width: Math.min(MAX_WIDTH, buf.width), withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toBuffer();
  } else {
    out = await sharp(file)
      .rotate()
      .resize({ width: Math.min(MAX_WIDTH, buf.width), withoutEnlargement: true })
      .png({ compressionLevel: 9, palette: false })
      .toBuffer();
  }

  if (out.length < before.size) {
    // Write via tmp + atomic rename: OneDrive locks can block in-place writes.
    const tmp = file + '.opt.tmp';
    await writeFile(tmp, out);
    let renamed = false;
    for (let attempt = 0; attempt < 8 && !renamed; attempt++) {
      try {
        await rename(tmp, file);
        renamed = true;
      } catch (err) {
        await new Promise((r) => setTimeout(r, 1000));
        if (attempt === 7) {
          console.warn(`SKIP (locked): ${name} — ${err.code}`);
          try { await rm(tmp, { force: true }); } catch {}
          return;
        }
      }
    }
    const mb = (n) => (n / 1024 / 1024).toFixed(2);
    console.log(`${mb(before.size)}MB -> ${mb(out.length)}MB  ${name}`);
    saved += before.size - out.length;
    processed++;
  }
}

try {
  const files = (await readdir(IMG_DIR)).filter(isImage);
  for (const f of files) await optimize(f);
  console.log(`\nOptimized ${processed} files, saved ${(saved / 1024 / 1024).toFixed(2)}MB total.`);
} catch (err) {
  console.error(err);
  process.exit(1);
}