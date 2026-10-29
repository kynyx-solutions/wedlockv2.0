import type { MediaSlug } from "@/components/Picture";

/**
 * Sample library items. `origMB` (size of the photo as uploaded) is sample data;
 * the served sizes on the page are read from the real compressed files in /public/media.
 */
export const MEDIA_ITEMS: { slug: MediaSlug; alt: string; origMB: number; origDims?: string; used: string; usedIn: string[] }[] = [
  {
    slug: "floral-mandap",
    alt: "A floral mandap of red gerberas with crystal lights",
    origMB: 8.4,
    origDims: "6000 × 4000",
    used: "Used in 4 places",
    usedIn: ["Home · hero", "Services · Decor & design", "Weddings · Srestha & Vishal (cover)", "Journal · Mandap ideas for 2027"],
  },
  { slug: "haldi-couple", alt: "A couple at their haldi", origMB: 6.1, used: "Used in 2 places", usedIn: ["Services · Planning & curation", "Weddings · grid"] },
  { slug: "sangeet-dance", alt: "Guests dancing at a sangeet", origMB: 7.2, used: "Used in 3 places", usedIn: ["Home · services", "Weddings · grid", "Weddings · Ankita & Anunay"] },
  { slug: "stage-srestha-vishal", alt: "Srestha and Vishal’s floral stage", origMB: 5.8, used: "Used in 1 place", usedIn: ["Home · services"] },
  { slug: "couple-night-lights", alt: "Ankita and Anunay at their reception", origMB: 9.0, used: "Used in 2 places", usedIn: ["Weddings · grid", "Weddings · Ankita & Anunay (cover)"] },
  { slug: "couple-bw-ankita-anunay", alt: "A couple under fairy lights in black and white", origMB: 4.9, used: "Used in 1 place", usedIn: ["Weddings · Ankita & Anunay"] },
  { slug: "decor-better-together", alt: "A living green wall installation with a neon sign", origMB: 6.6, used: "Not used yet", usedIn: [] },
  { slug: "entry-ankita-anunay", alt: "Ankita and Anunay’s welcome board", origMB: 3.7, used: "Used in 1 place", usedIn: ["Weddings · Ankita & Anunay"] },
  { slug: "w-lawn-lanterns-reception", alt: "A lawn reception under strings of paper lanterns", origMB: 7.7, used: "Used in 2 places", usedIn: ["Services · Hospitality & guests", "Weddings · grid"] },
  { slug: "w-stage-greenery-night", alt: "An outdoor stage framed by a wall of greenery at night", origMB: 5.2, used: "Used in 1 place", usedIn: ["Services · Stage & production"] },
  { slug: "w-floral-ceiling-walkway", alt: "A walkway with a ceiling of pink and white flowers", origMB: 4.4, used: "Used in 1 place", usedIn: ["Weddings · grid"] },
  { slug: "w-rings-rose-petals", alt: "Two ring boxes on a plate of red rose petals", origMB: 6.0, used: "Used in 1 place", usedIn: ["Weddings · grid"] },
];

export const UPLOADS = [
  { name: "pooja-karan-sangeet-0142.jpg", pct: 100, note: "7.9 MB → 58 KB ✓" },
  { name: "pooja-karan-haldi-loop.mp4", pct: 64, note: "Compressing video…" },
];

export const FOLDERS = ["All", "Weddings", "Destinations", "Team", "Journal", "Videos"];
