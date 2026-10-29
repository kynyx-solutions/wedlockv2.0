import type { Metadata } from "next";
import { statSync } from "node:fs";
import path from "node:path";
import media from "@/data/media.json";
import { Picture, type MediaSlug } from "@/components/Picture";
import { MEDIA_ITEMS, UPLOADS, FOLDERS } from "./data";
import { MediaGrid, type GridItem } from "./MediaGrid";

export const metadata: Metadata = {
  title: "Media library",
  description: "Upload, compress and reuse photos and videos across the website.",
};

const MEDIA = media as Record<string, { w: number; h: number; widths: number[] }>;

/** Real size in KB of a served file, or null if it is missing. */
function fileKB(slug: MediaSlug, width: number, ext: "avif" | "webp") {
  try {
    return Math.round(statSync(path.join(process.cwd(), "public", "media", `${slug}-${width}.${ext}`)).size / 1024);
  } catch {
    return null;
  }
}

function buildItems(): GridItem[] {
  return MEDIA_ITEMS.map((m) => {
    const entry = MEDIA[m.slug];
    // A phone (≈400 px wide at 2× density) loads the ~960 px AVIF.
    const phoneW = entry.widths.find((w) => w >= 960) ?? entry.widths[entry.widths.length - 1];
    const phoneKB = fileKB(m.slug, phoneW, "avif");
    const saved = phoneKB ? Math.round((1 - phoneKB / (m.origMB * 1024)) * 100) : null;
    return {
      slug: m.slug,
      alt: m.alt,
      used: m.used,
      usedIn: m.usedIn,
      size: phoneKB ? `${m.origMB.toFixed(1)} MB → ${phoneKB} KB` : `${m.origMB.toFixed(1)} MB`,
      original: `${m.origDims ? `${m.origDims} · ` : ""}${m.origMB.toFixed(1)} MB JPG`,
      stored: `${entry.w} × ${entry.h} px master`,
      served: `AVIF ${entry.widths.join(" / ")} px`,
      phone: phoneKB ? `${phoneKB} KB (${saved}% smaller)` : "—",
      thumb: <Picture slug={m.slug} alt={m.alt} sizes="(min-width: 1024px) 200px, 45vw" className="block aspect-[4/3] w-full object-cover" />,
      large: <Picture slug={m.slug} alt={m.alt} sizes="(min-width: 1024px) 360px, 92vw" className="block aspect-[4/3] w-full rounded-lg object-cover" />,
    };
  });
}

export default function AdminMediaPage() {
  const items = buildItems();
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <span className="text-[13px] text-fern">Website · 412 photos · 9 videos · sample data</span>
        <h1 className="m-0 font-serif text-[36px] font-light leading-[1.05] sm:text-[44px]">Media library</h1>
      </div>

      <section className="flex flex-wrap items-center justify-between gap-5 rounded-xl border-[1.5px] border-dashed border-champagne bg-white px-6 py-[22px]">
        <div className="flex max-w-[560px] flex-col gap-1">
          <strong className="text-base font-semibold">Drop photos or videos here</strong>
          <span className="text-[13px] text-fern">
            Photos are shrunk in your browser before upload and saved in four sizes as AVIF and WebP. Videos are trimmed to a short, silent loop. The original is kept safely in storage.
          </span>
        </div>
        <button type="button" className="cursor-pointer rounded-[2px] bg-ink px-[18px] py-3 text-xs font-semibold uppercase tracking-[0.12em] text-ivory hover:bg-moss">
          Choose files
        </button>
        <div className="flex flex-[1_1_100%] flex-col gap-2 border-t border-stone pt-3.5">
          {UPLOADS.map((u) => (
            <div key={u.name} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3.5 gap-y-1.5 text-[13px] sm:grid-cols-[minmax(0,1fr)_220px_auto]">
              <span className="truncate">{u.name}</span>
              <span
                role="progressbar"
                aria-label={`${u.name} upload`}
                aria-valuenow={u.pct}
                aria-valuemin={0}
                aria-valuemax={100}
                className="order-last col-span-2 h-1.5 overflow-hidden rounded-[3px] bg-stone sm:order-none sm:col-span-1"
              >
                <span className="block h-full bg-moss" style={{ width: `${u.pct}%` }} />
              </span>
              <span className="text-fern">{u.note}</span>
            </div>
          ))}
        </div>
      </section>

      <MediaGrid items={items} folders={FOLDERS} />
    </div>
  );
}
