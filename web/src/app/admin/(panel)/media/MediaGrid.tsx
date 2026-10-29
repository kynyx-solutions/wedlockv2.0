"use client";

import { useState, type ReactNode } from "react";

export type GridItem = {
  slug: string;
  alt: string;
  used: string;
  usedIn: string[];
  size: string;
  original: string;
  stored: string;
  served: string;
  phone: string;
  thumb: ReactNode;
  large: ReactNode;
};

export function MediaGrid({ items, folders }: { items: GridItem[]; folders: string[] }) {
  const [selected, setSelected] = useState(items[0]?.slug);
  const sel = items.find((i) => i.slug === selected) ?? items[0];

  return (
    <div className="flex flex-wrap items-start gap-5">
      <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-3.5">
        <div className="flex flex-wrap gap-2">
          {folders.map((f, i) => (
            <span key={f} className={`rounded-[2px] px-3.5 py-2 text-[13px] ${i === 0 ? "bg-ink text-ivory" : "bg-stone text-ink"}`}>
              {f}
            </span>
          ))}
        </div>
        <ul className="m-0 grid list-none grid-cols-2 gap-3 p-0 sm:grid-cols-[repeat(auto-fill,minmax(170px,1fr))]">
          {items.map((m) => {
            const on = m.slug === sel.slug;
            return (
              <li key={m.slug}>
                <button
                  type="button"
                  onClick={() => setSelected(m.slug)}
                  aria-pressed={on}
                  aria-label={`Select: ${m.alt}`}
                  className={`flex w-full cursor-pointer flex-col overflow-hidden rounded-lg bg-white p-0 text-left ${on ? "border-2 border-gold" : "border border-line hover:border-moss"}`}
                >
                  {m.thumb}
                  <span className="flex flex-col gap-0.5 px-2.5 py-2 text-xs">
                    <span className="font-semibold text-moss">{m.size}</span>
                    <span className="text-fern">{m.used}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <aside aria-label="Selected photo" className="flex min-w-0 flex-[1_1_320px] flex-col gap-3 rounded-xl border border-line bg-white px-5 py-[18px] lg:sticky lg:top-6">
        {sel.large}
        <label className="flex flex-col gap-1.5 text-[13px] font-semibold">
          Alt text (read aloud, helps Google)
          <input key={sel.slug} type="text" defaultValue={sel.alt} className="rounded-[2px] border border-line p-2.5 text-sm font-normal" />
        </label>
        <dl className="m-0 grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[13px]">
          <dt className="text-fern">Original</dt>
          <dd className="m-0">{sel.original}</dd>
          <dt className="text-fern">Kept</dt>
          <dd className="m-0">{sel.stored}</dd>
          <dt className="text-fern">Served</dt>
          <dd className="m-0">{sel.served}</dd>
          <dt className="text-fern">On a phone</dt>
          <dd className="m-0 font-semibold text-moss">{sel.phone}</dd>
        </dl>
        <div className="flex flex-col gap-1 border-t border-stone pt-3">
          <strong className="text-sm font-semibold">{sel.usedIn.length ? sel.used : "Not used yet"}</strong>
          {sel.usedIn.map((w) => (
            <span key={w} className="text-[13px] text-fern">
              {w}
            </span>
          ))}
        </div>
        <button type="button" className="cursor-pointer rounded-[2px] bg-ink p-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-ivory hover:bg-moss">
          Replace everywhere
        </button>
        <span className="text-xs text-fern">
          {sel.usedIn.length
            ? `Upload a new photo and all ${sel.usedIn.length === 1 ? "1 place updates" : `${sel.usedIn.length} places update`} together. The old one stays in Trash for 30 days.`
            : "Upload a new photo to swap this one. The old one stays in Trash for 30 days."}
        </span>
      </aside>
    </div>
  );
}
