"use client";

import { useState } from "react";
import { waLink } from "@/lib/site";

export type DestinationKind = "palace" | "beach" | "abroad";
type Filter = DestinationKind | "all";

const OPTS: [Filter, string][] = [
  ["all", "All"],
  ["palace", "Rajasthan palaces"],
  ["beach", "Coast & backwaters"],
  ["abroad", "International"],
];

const WA: Record<Filter, string> = {
  all: "Hi Wedlock! I'm exploring destinations for my wedding. Could you suggest a few options for us?",
  palace: "Hi Wedlock! I'm interested in a palace wedding in Rajasthan (Udaipur or Jaipur). Could you share venues and a budget?",
  beach: "Hi Wedlock! I'm interested in a beach or backwater wedding in Goa or Kerala. Could you share venues and a budget?",
  abroad: "Hi Wedlock! I'm planning a wedding abroad (Bali, Phuket, Tuscany or Dubai). Could you share options and a budget?",
};

/**
 * Filter bar + grid. Cards are rendered on the server and passed in,
 * so the image manifest never ships to the browser.
 */
export function DestinationsGrid({ cards }: { cards: { key: string; type: DestinationKind; node: React.ReactNode }[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const shown = cards.filter((c) => filter === "all" || c.type === filter);
  // 4 across when that fills rows better (8, 4, 7…), otherwise 3; the last row stretches either way.
  const wide = shown.length % 4 === 0 || shown.length % 3 === 1;

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div role="group" aria-label="Filter destinations" className="flex flex-wrap gap-2">
          {OPTS.map(([key, label]) => (
            <button
              key={key}
              type="button"
              aria-pressed={filter === key}
              onClick={() => setFilter(key)}
              className={`cursor-pointer rounded-[2px] px-5 py-3 text-[15px] transition-colors duration-200 ${filter === key ? "bg-ink text-ivory" : "bg-stone text-ink"}`}
            >
              {label}
            </button>
          ))}
        </div>
        <span className="text-[15px] text-fern" aria-live="polite">{shown.length} destinations</span>
      </div>
      {/* Fill-row: the last row stretches, so any filter result fills the width */}
      <div className={`fill-row reveal-stagger md:[--cols:2] ${wide ? "lg:[--cols:4]" : "lg:[--cols:3]"}`}>
        {shown.map((c) => (
          <div key={c.key} className="flex flex-col">
            {c.node}
          </div>
        ))}
      </div>
      <a href={waLink(WA[filter])} target="_blank" rel="noopener" className="underline-grow self-start font-medium">
        Ask about these destinations on WhatsApp →
      </a>
    </>
  );
}
