"use client";

import { useState } from "react";
import type { FaqGroup } from "./faqs";

/** Category tabs over the FAQ groups. Every answer is a native <details>, so only the filter needs JS. */
export function FaqBrowser({ groups }: { groups: FaqGroup[] }) {
  const [filter, setFilter] = useState("all");
  const tabs = [{ key: "all", name: "All" }, ...groups];
  const shown = groups.filter((g) => filter === "all" || g.key === filter);

  return (
    <>
      <div className="container-x pb-14">
        <div role="group" aria-label="Filter questions" className="flex flex-wrap gap-2">
          {tabs.map((t) => {
            const on = t.key === filter;
            return (
              <button
                key={t.key}
                type="button"
                aria-pressed={on}
                onClick={() => setFilter(t.key)}
                className={`cursor-pointer rounded-[2px] border-none px-5 py-3 text-[15px] transition-colors ${on ? "bg-ink text-ivory" : "bg-stone text-ink hover:bg-sage"}`}
              >
                {t.name}
              </button>
            );
          })}
        </div>
      </div>

      <section aria-label="Questions" className="container-x flex flex-col gap-14 pb-20 lg:pb-28">
        {shown.map((g) => (
          <div key={g.key} className="grid gap-8 border-t border-ink pt-7 lg:grid-cols-3">
            <div className="flex flex-col gap-1.5">
              <span className="eyebrow">{g.items.length} questions</span>
              <h2 className="m-0 font-serif text-[34px] font-light leading-[1.1] sm:text-[40px]">{g.name}</h2>
            </div>
            <div className="flex min-w-0 flex-col gap-2.5 lg:col-span-2">
              {g.items.map((q) => (
                <details key={q.q} className="rounded-lg bg-stone px-6 py-5">
                  <summary className="cursor-pointer font-serif text-[21px] sm:text-[22px]">{q.q}</summary>
                  <p className="m-0 mt-2.5 text-base text-fern">{q.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
