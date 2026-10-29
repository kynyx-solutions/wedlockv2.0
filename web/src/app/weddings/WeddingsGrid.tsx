"use client";

import { useState } from "react";

export type WeddingKind = "wedding" | "haldi" | "sangeet" | "decor";

const OPTS: [WeddingKind | "all", string][] = [
  ["all", "All"],
  ["wedding", "Weddings"],
  ["haldi", "Haldi & Mehendi"],
  ["sangeet", "Sangeet & Reception"],
  ["decor", "Décor"],
];

/**
 * Filter bar + grid. Cards are rendered on the server and passed in,
 * so the image manifest never ships to the browser.
 */
export function WeddingsGrid({ cards }: { cards: { key: string; type: WeddingKind; node: React.ReactNode }[] }) {
  const [filter, setFilter] = useState<WeddingKind | "all">("all");
  const shown = cards.filter((c) => filter === "all" || c.type === filter);

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4 border-y border-line py-4">
        <div role="group" aria-label="Filter weddings" className="flex flex-wrap gap-2">
          {OPTS.map(([key, label]) => (
            <button
              key={key}
              type="button"
              aria-pressed={filter === key}
              onClick={() => setFilter(key)}
              className={`cursor-pointer rounded-[2px] px-[18px] py-[11px] text-[15px] ${filter === key ? "bg-ink text-ivory" : "bg-stone text-ink"}`}
            >
              {label}
            </button>
          ))}
        </div>
        <span className="text-[15px] text-fern" aria-live="polite">
          {shown.length} {shown.length === 1 ? "celebration" : "celebrations"}
        </span>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((c) => (
          <div key={c.key} className="flex flex-col">
            {c.node}
          </div>
        ))}
      </div>
    </>
  );
}
