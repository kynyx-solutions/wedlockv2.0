"use client";

import { useState } from "react";

const FILTERS = [
  ["All", ""],
  ["Real weddings", "Real wedding"],
  ["Planning guides", "Planning guide"],
  ["Trends", "Trends"],
  ["Behind the scenes", "Behind the scenes"],
] as const;

type Props = {
  /** Category and searchable text for each card, in the same order as `cards` */
  meta: { cat: string; text: string }[];
  /** Server-rendered article cards */
  cards: React.ReactNode[];
  /** Server-rendered featured article, shown when no filter is applied */
  featured: React.ReactNode;
};

/** Category pills and search for the Journal. Cards stay server-rendered; this only hides them. */
export function JournalBrowser({ meta, cards, featured }: Props) {
  const [cat, setCat] = useState("");
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const visible = meta.map((m) => (!cat || m.cat === cat) && (!q || m.text.toLowerCase().includes(q)));
  const count = visible.filter(Boolean).length;
  // 4 across when that fills rows better (7, 4, 8…), otherwise 3; the last row stretches either way.
  const wide = count % 4 === 0 || count % 3 === 1;

  return (
    <>
      <div className="container-x pb-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
            {FILTERS.map(([label, value]) => {
              const on = cat === value;
              return (
                <button
                  key={label}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setCat(value)}
                  className={`cursor-pointer rounded-[2px] px-[18px] py-[11px] text-[15px] transition-colors duration-200 ${on ? "bg-ink text-ivory" : "bg-stone text-ink hover:text-moss"}`}
                >
                  {label}
                </button>
              );
            })}
          </div>
          <label className="flex w-full items-center gap-2.5 rounded-[2px] bg-stone py-1 pl-[18px] pr-1.5 sm:w-auto sm:min-w-[280px]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
            <span className="sr-only">Search articles</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles"
              className="flex-1 border-none bg-transparent py-2.5 text-[15px] text-ink outline-none"
            />
          </label>
        </div>
      </div>

      {!cat && !q && <div className="container-x pb-16 lg:pb-[72px]">{featured}</div>}

      <section aria-label="Articles" className="container-x flex flex-col gap-8 pb-20 lg:pb-24">
        <p aria-live="polite" className={count ? "sr-only" : "m-0 text-fern"}>
          {count ? `${count} articles` : "No articles match yet. Try another category or search."}
        </p>
        {/* Fill-row: hidden cards drop out and the last row stretches, so any result fills the width */}
        <div className={`fill-row reveal-stagger gap-y-8 [--gap:24px] md:[--cols:2] ${wide ? "lg:[--cols:4]" : "lg:[--cols:3]"}`}>
          {cards.map((card, i) => (
            <div key={i} hidden={!visible[i]}>{card}</div>
          ))}
        </div>
      </section>
    </>
  );
}
