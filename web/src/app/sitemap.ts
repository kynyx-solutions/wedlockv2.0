import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { WEDDINGS } from "@/data/weddings";
import { ARTICLES } from "./journal/articles";

/** Every public, indexable route. /thank-you (noindex) and /admin are left out on purpose. */
const STATIC: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, freq: "weekly" },
  { path: "/about", priority: 0.7, freq: "monthly" },
  { path: "/services", priority: 0.9, freq: "monthly" },
  { path: "/services/destination-weddings", priority: 0.8, freq: "monthly" },
  { path: "/destinations", priority: 0.8, freq: "monthly" },
  { path: "/destinations/jaipur", priority: 0.7, freq: "monthly" },
  { path: "/wedding-planner-patna", priority: 0.9, freq: "monthly" },
  { path: "/weddings", priority: 0.8, freq: "weekly" },
  { path: "/journal", priority: 0.7, freq: "weekly" },
  { path: "/wedding-budget-calculator", priority: 0.8, freq: "monthly" },
  { path: "/contact", priority: 0.9, freq: "yearly" },
  { path: "/faq", priority: 0.6, freq: "monthly" },
  { path: "/careers", priority: 0.4, freq: "monthly" },
  { path: "/partner", priority: 0.4, freq: "yearly" },
  { path: "/privacy", priority: 0.2, freq: "yearly" },
  { path: "/terms", priority: 0.2, freq: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (p: string) => `${SITE.url}${p === "/" ? "" : p}`;
  return [
    ...STATIC.map((r) => ({ url: url(r.path), changeFrequency: r.freq, priority: r.priority })),
    ...WEDDINGS.map((w) => ({ url: url(`/weddings/${w.slug}`), changeFrequency: "yearly" as const, priority: 0.6 })),
    ...ARTICLES.map((a) => ({ url: url(`/journal/${a.slug}`), changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}
