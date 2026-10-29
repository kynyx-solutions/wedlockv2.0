import type { MediaSlug } from "@/components/Picture";

export type JournalCategory = "Real wedding" | "Planning guide" | "Trends" | "Behind the scenes";

export type Post = {
  cat: JournalCategory;
  date: string;
  read: string;
  title: string;
  dek: string;
  /** Only real client photos that fit the topic; everything else is a PhotoToCome. */
  img?: MediaSlug;
  alt?: string;
  photoLabel?: string;
};

/** "Five décor directions…" → "five-decor-directions…" */
export function slugify(title: string) {
  return title
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const postHref = (title: string) => `/journal/${slugify(title)}`;

export const FEATURED = {
  label: "Editor’s pick · Planning guide",
  title: "The destination wedding timeline: a 12-month blueprint",
  dek: "When to scout, when to book the block, when to fly the florist in.",
  meta: "Wedlock celebration desk · 10 min read · 28 January 2026",
};

export const POSTS: Post[] = [
  { cat: "Real wedding", date: "14 Feb 2026", read: "8 min", title: "Aisha & Arjun: three days on the lake of palaces", dek: "Lakeside pheras timed to sunset and a mirrored sangeet stage for 320 guests.", photoLabel: "from the wedding" },
  { cat: "Trends", date: "6 Jan 2026", read: "6 min", title: "Five décor directions defining 2026 celebrations", dek: "Sculptural florals, heritage revival, monochrome drama and the quiet death of the photo booth.", img: "decor-better-together", alt: "A living green wall with a neon “Better together” sign" },
  { cat: "Real wedding", date: "12 Dec 2025", read: "7 min", title: "Fifty years, one evening: inside the Mehta golden jubilee", dek: "Rebuilding 1975 for two hundred and sixty guests.", photoLabel: "golden jubilee" },
  { cat: "Trends", date: "18 Nov 2025", read: "5 min", title: "The 60-guest wedding: why small is the new statement", dek: "Guest lists are shrinking; budgets aren’t.", img: "w-lounge-twigs-lights", alt: "An intimate lounge of twig arches and warm globe lights" },
  { cat: "Planning guide", date: "2 Oct 2025", read: "6 min", title: "Rain plans that don’t look like regret", dek: "Backup plans guests assume were the original plan.", img: "crystal-walkway", alt: "A covered walkway under crystal globes and greenery" },
  { cat: "Behind the scenes", date: "30 Aug 2025", read: "7 min", title: "The modern family reunion: a playbook", dek: "Diaspora families are gathering with intention again.", photoLabel: "family reunion" },
  { cat: "Planning guide", date: "15 Jul 2025", read: "6 min", title: "How to choose a celebration planner: 9 questions that matter", dek: "Beyond the Instagram grid — the questions that reveal whether a team can actually execute.", img: "w-stage-white-floral", alt: "A white floral wedding stage set up by the Wedlock team" },
];
