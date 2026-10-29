import media from "@/data/media.json";

type Entry = { w: number; h: number; ratio: number; widths: number[]; blur: string };
const MEDIA = media as Record<string, Entry>;

export type MediaSlug = keyof typeof media;

type Props = {
  slug: MediaSlug;
  alt: string;
  /** Matches the rendered width, e.g. "(min-width: 1024px) 50vw, 100vw" */
  sizes: string;
  className?: string;
  /** Above-the-fold images: load eagerly with high priority */
  priority?: boolean;
  position?: string;
};

/**
 * Serves pre-compressed AVIF/WebP files from /media (see scripts/optimize-images.mjs).
 * No runtime image optimisation, so nothing counts against Vercel's quota.
 */
export function Picture({ slug, alt, sizes, className = "", priority = false, position }: Props) {
  const m = MEDIA[slug];
  const set = (ext: string) => m.widths.map((w) => `/media/${slug}-${w}.${ext} ${w}w`).join(", ");
  const fallback = m.widths.find((w) => w >= 960) ?? m.widths.at(-1);
  return (
    <picture>
      <source type="image/avif" srcSet={set("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={set("webp")} sizes={sizes} />
      <img
        src={`/media/${slug}-${fallback}.webp`}
        alt={alt}
        width={m.w}
        height={m.h}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        decoding="async"
        className={className}
        style={{ backgroundImage: `url(${m.blur})`, backgroundSize: "cover", objectPosition: position }}
      />
    </picture>
  );
}

/** Honest stand-in until the client supplies a real photo. */
export function PhotoToCome({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div role="img" aria-label={`Photo to come: ${label}`} className={`flex items-end bg-placeholder p-4 ${className}`}>
      <span className="rounded-[2px] bg-ivory/80 px-2.5 py-1 text-xs text-fern">Photo to come · {label}</span>
    </div>
  );
}
