import type { MediaSlug } from "@/components/Picture";
import { FEATURED, POSTS, slugify, type JournalCategory } from "./posts";

export type Article = {
  slug: string;
  cat: JournalCategory;
  date: string;
  read: string;
  title: string;
  dek: string;
  img?: MediaSlug;
  alt?: string;
  photoLabel?: string;
};

/** Slug of the one article whose full body is written (the destination timeline). */
export const TIMELINE_SLUG = slugify(FEATURED.title);

/** Every journal article: the featured blueprint plus all posts. */
export const ARTICLES: Article[] = [
  {
    slug: TIMELINE_SLUG,
    cat: "Planning guide",
    date: "28 January 2026",
    read: "10 min",
    title: FEATURED.title,
    dek: FEATURED.dek,
    photoLabel: "destination timeline",
  },
  ...POSTS.map((p) => ({ ...p, slug: slugify(p.title) })),
];

export const getArticle = (slug: string) => ARTICLES.find((a) => a.slug === slug);
