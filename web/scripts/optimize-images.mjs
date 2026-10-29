// Compresses source photos into AVIF + WebP at fixed widths and writes a manifest.
// Usage: npm run images
// Sources live outside the app (../assets) and are never modified.
import sharp from "sharp";
import { mkdir, writeFile, stat } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const ASSETS = path.resolve(ROOT, "../assets");
const OUT = path.join(ROOT, "public/media");
const MANIFEST = path.join(ROOT, "src/data/media.json");
const WIDTHS = [480, 960, 1600, 2400];

// slug -> source file (relative to ../assets)
const SOURCES = {
  "couple-night-lights": "client-photos/couple-night-lights.jpg",
  "entry-ankita-anunay": "client-photos/entry-ankita-anunay.jpg",
  "couple-bw-ankita-anunay": "client-photos/couple-bw-ankita-anunay.jpg",
  "stage-srestha-vishal": "client-photos/stage-srestha-vishal.jpg",
  "welcome-sign-srestha-vishal": "client-photos/welcome-sign-srestha-vishal.jpg",
  "sign-srestha-vishal": "client-photos/sign-srestha-vishal.jpg",
  "haldi-couple": "client-photos/haldi-couple.jpg",
  "haldi-couple-close": "client-photos/haldi-couple-close.jpg",
  "haldi-couple-seated": "client-photos/haldi-couple-seated.jpg",
  "mehendi-couple": "client-photos/mehendi-couple.jpg",
  "mehendi-decor": "client-photos/mehendi-decor.jpg",
  "sangeet-dance": "client-photos/sangeet-dance.jpg",
  "floral-mandap": "client-photos/floral-mandap.jpg",
  "crystal-walkway": "client-photos/crystal-walkway.jpg",
  "decor-better-together": "client-photos/decor-better-together.jpg",
  "stage-floral": "client-photos/stage-floral.jpg",
  "bride-closeup": "client-photos/bride-closeup.jpg",
  "bride-phulkari-canopy": "client-photos/bride-phulkari-canopy.jpg",
  "bride-portrait": "client-photos/bride-portrait.jpg",
  "bride-red-veil": "client-photos/bride-red-veil.jpg",
  // Wedlock "Pictures" Drive folder (phone/WhatsApp quality: cards and galleries only)
  "w-couple-red-entrance": "drive-wedlock/couple-red-entrance.jpg",
  "w-couple-stage-portrait": "drive-wedlock/couple-stage-portrait.jpg",
  "w-couple-wedding-candid": "drive-wedlock/couple-wedding-candid.jpg",
  "w-entrance-drapes-florals": "drive-wedlock/entrance-drapes-florals.jpg",
  "w-entrance-red-drapes": "drive-wedlock/entrance-red-drapes.jpg",
  "w-floral-ceiling-walkway": "drive-wedlock/floral-ceiling-walkway.jpg",
  "w-haldi-friends": "drive-wedlock/haldi-friends.jpg",
  "w-haldi-laughter": "drive-wedlock/haldi-laughter.jpg",
  "w-haldi-stage-yellow": "drive-wedlock/haldi-stage-yellow.jpg",
  "w-lawn-lanterns-reception": "drive-wedlock/lawn-lanterns-reception.jpg",
  "w-lounge-twigs-lights": "drive-wedlock/lounge-twigs-lights.jpg",
  "w-mehendi-bride-yellow": "drive-wedlock/mehendi-bride-yellow.jpg",
  "w-mehendi-decor-green": "drive-wedlock/mehendi-decor-green.jpg",
  "w-mehendi-lounge": "drive-wedlock/mehendi-lounge.jpg",
  "w-prewedding-beach": "drive-wedlock/prewedding-beach.jpg",
  "w-prewedding-silhouette": "drive-wedlock/prewedding-silhouette.jpg",
  "w-prewedding-sunset": "drive-wedlock/prewedding-sunset.jpg",
  "w-rings-rose-petals": "drive-wedlock/rings-rose-petals.jpg",
  "w-stage-greenery-night": "drive-wedlock/stage-greenery-night.jpg",
  "w-stage-white-floral": "drive-wedlock/stage-white-floral.jpg",
  "team-aabish-hassan": "team/aabish-hassan.jpg",
  "team-rahul-ranjan": "team/rahul-ranjan.jpg",
  "team-aliwaris-khan": "team/aliwaris-khan.jpg",
};

const exists = (p) => stat(p).then(() => true, () => false);

await mkdir(OUT, { recursive: true });
await mkdir(path.dirname(MANIFEST), { recursive: true });

const manifest = {};
let before = 0;
let after = 0;

for (const [slug, rel] of Object.entries(SOURCES)) {
  const src = path.join(ASSETS, rel);
  const input = sharp(src).rotate();
  const { width, height } = await input.metadata();
  // Never upscale: keep the standard widths below the original, plus the original (capped at 2400).
  const used = [...new Set([...WIDTHS.filter((w) => w < width), Math.min(width, WIDTHS.at(-1))])];
  before += (await stat(src)).size;

  for (const w of used) {
    for (const [ext, opts] of [["avif", { quality: 50, effort: 4 }], ["webp", { quality: 72 }]]) {
      const file = path.join(OUT, `${slug}-${w}.${ext}`);
      if (!(await exists(file))) await sharp(src).rotate().resize({ width: w }).toFormat(ext, opts).toFile(file);
      if (w === 960 && ext === "avif") after += (await stat(file)).size;
    }
  }

  const blur = await sharp(src).rotate().resize(20).webp({ quality: 40 }).toBuffer();
  const ratio = height / width;
  manifest[slug] = { w: width, h: height, ratio: Number(ratio.toFixed(4)), widths: used, blur: `data:image/webp;base64,${blur.toString("base64")}` };
}

await writeFile(MANIFEST, JSON.stringify(manifest, null, 2) + "\n");
const kb = (n) => `${Math.round(n / 1024)} KB`;
console.log(`${Object.keys(manifest).length} images · originals ${kb(before)} → 960px AVIF ${kb(after)}`);
