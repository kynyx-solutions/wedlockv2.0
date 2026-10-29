"use client";

import { useState } from "react";
import Link from "next/link";
import { waLink } from "@/lib/site";
import {
  ADDONS, CITIES, DECOR, FUNCTIONS, VENUES, estimate, formatInr,
  type AddonKey, type Choices, type FunctionKey,
} from "@/data/calculator-rates";

const PRESETS = [100, 250, 400, 600, 1000];

const chip = (on: boolean) =>
  `cursor-pointer rounded-[2px] border-none px-[18px] py-[11px] text-[15px] ${on ? "bg-ink text-ivory" : "bg-ivory text-ink hover:bg-sage"}`;
const card = (on: boolean) =>
  `flex cursor-pointer flex-col gap-0.5 rounded border-none px-4 py-3.5 text-left ${on ? "bg-ink text-ivory" : "bg-ivory text-ink hover:bg-sage"}`;

function Step({ n, title, children }: { n: string; title: React.ReactNode; children: React.ReactNode }) {
  return (
    <fieldset className="m-0 flex flex-col gap-3.5 rounded-[10px] border-none bg-stone p-6 sm:px-7">
      <legend className="float-left flex items-baseline gap-3 p-0">
        <span className="font-serif text-lg text-gold">{n}</span>
        <span className="font-serif text-[26px] leading-tight">{title}</span>
      </legend>
      <div className="clear-both">{children}</div>
    </fieldset>
  );
}

export function Calculator() {
  const [c, setC] = useState<Choices>({
    city: "patna",
    guests: 400,
    functions: ["haldi", "mehendi", "sangeet", "wedding", "reception"],
    venue: "banquet",
    decor: "premium",
    addons: ["gifts"],
  });
  const set = (patch: Partial<Choices>) => setC((prev) => ({ ...prev, ...patch }));
  const toggleFn = (k: FunctionKey) =>
    set({ functions: c.functions.includes(k) ? c.functions.filter((x) => x !== k) : [...c.functions, k] });
  const toggleAddon = (k: AddonKey) =>
    set({ addons: c.addons.includes(k) ? c.addons.filter((x) => x !== k) : [...c.addons, k] });

  const r = estimate(c);
  const max = Math.max(...r.lines.map(([, v]) => v));
  const fnNames = (c.functions.length ? c.functions : ["wedding" as const]).map((f) => FUNCTIONS[f].label).join(", ");
  const message = `Hi Wedlock! I used your budget calculator. ${CITIES[c.city].label}, ${c.guests} guests, ${fnNames}; ${VENUES[c.venue].label.toLowerCase()}, ${DECOR[c.decor].label.toLowerCase()} décor. Estimate ${formatInr(r.low)}–${formatInr(r.high)}. Please send the full breakdown.`;

  return (
    <section className="container-x flex flex-col items-start gap-8 pb-20 lg:flex-row lg:pb-28">
      <div className="flex w-full min-w-0 flex-col gap-3.5 lg:flex-[1.6]">
        <Step n="01" title="Where is the wedding?">
          <div className="flex flex-wrap gap-2">
            {Object.entries(CITIES).map(([k, v]) => (
              <button key={k} type="button" aria-pressed={c.city === k} onClick={() => set({ city: k as Choices["city"] })} className={chip(c.city === k)}>{v.label}</button>
            ))}
          </div>
        </Step>

        <Step n="02" title="How many guests at the biggest function?">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center rounded-[2px] bg-ivory">
              <button type="button" aria-label="Fewer guests" onClick={() => set({ guests: Math.max(50, c.guests - 50) })} className="h-12 w-12 cursor-pointer border-none bg-transparent text-xl">−</button>
              <output aria-live="polite" className="min-w-20 text-center font-serif text-[30px]">{c.guests}</output>
              <button type="button" aria-label="More guests" onClick={() => set({ guests: Math.min(3000, c.guests + 50) })} className="h-12 w-12 cursor-pointer border-none bg-transparent text-xl">+</button>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {PRESETS.map((n) => (
                <button key={n} type="button" onClick={() => set({ guests: n })} className={`cursor-pointer rounded-[2px] border border-line px-3.5 py-2 text-sm ${n === c.guests ? "bg-ink text-ivory" : "bg-transparent"}`}>{n}</button>
              ))}
            </div>
          </div>
        </Step>

        <Step n="03" title="Which functions?">
          <div className="flex flex-wrap gap-2">
            {Object.entries(FUNCTIONS).map(([k, v]) => {
              const on = c.functions.includes(k as FunctionKey);
              return <button key={k} type="button" aria-pressed={on} onClick={() => toggleFn(k as FunctionKey)} className={chip(on)}>{on ? "✓" : "+"} {v.label}</button>;
            })}
          </div>
        </Step>

        <Step n="04" title="What kind of venue?">
          <div className="grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
            {Object.entries(VENUES).map(([k, v]) => (
              <button key={k} type="button" aria-pressed={c.venue === k} onClick={() => set({ venue: k as Choices["venue"] })} className={card(c.venue === k)}>
                <span className="font-medium">{v.label}</span><span className="text-[13px] opacity-80">{v.note}</span>
              </button>
            ))}
          </div>
        </Step>

        <Step n="05" title="How grand is the décor?">
          <div className="grid gap-2 sm:grid-cols-3">
            {Object.entries(DECOR).map(([k, v]) => (
              <button key={k} type="button" aria-pressed={c.decor === k} onClick={() => set({ decor: k as Choices["decor"] })} className={card(c.decor === k)}>
                <span className="font-medium">{v.label}</span><span className="text-[13px] opacity-80">{v.note}</span>
              </button>
            ))}
          </div>
        </Step>

        <Step n="06" title={<>Any add-ons? <span className="font-sans text-[15px] text-fern">optional</span></>}>
          <div className="flex flex-wrap gap-2">
            {Object.entries(ADDONS).map(([k, v]) => {
              const on = c.addons.includes(k as AddonKey);
              return <button key={k} type="button" aria-pressed={on} onClick={() => toggleAddon(k as AddonKey)} className={`${chip(on)} !px-4 !py-2.5 !text-sm`}>{on ? "✓" : "+"} {v.label}</button>;
            })}
          </div>
        </Step>
      </div>

      <aside aria-live="polite" className="flex w-full flex-col gap-[18px] rounded-2xl bg-ink p-7 text-ivory sm:p-8 lg:sticky lg:top-6 lg:flex-1">
        <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">Your estimate</span>
        <span className="font-serif text-[46px] font-light leading-none sm:text-[52px]">{formatInr(r.low)} – {formatInr(r.high)}</span>
        <span className="text-sm text-mist">{c.guests} guests · {r.functionCount} function{r.functionCount > 1 ? "s" : ""} · {CITIES[c.city].label}</span>
        <ul className="m-0 flex list-none flex-col gap-3 border-t border-[#3E4438] p-0 pt-[18px]">
          {r.lines.map(([label, v]) => (
            <li key={label} className="flex flex-col gap-1.5">
              <span className="flex justify-between gap-3 text-sm"><span>{label}</span><span className="text-mist-2">{formatInr(v)}</span></span>
              <span className="h-1 overflow-hidden rounded-sm bg-[#3E4438]"><span className="block h-full bg-champagne" style={{ width: `${Math.round((v / max) * 100)}%` }} /></span>
            </li>
          ))}
        </ul>
        <span className="border-t border-[#3E4438] pt-3.5 text-[13px] text-mist">Wedlock’s planning fee is fixed and quoted after your first meeting — never a percentage of vendor bills.</span>
        <a href={waLink(message)} target="_blank" rel="noopener" className="btn bg-ivory text-ink hover:bg-sage hover:text-ink">Get the full breakdown on WhatsApp</a>
        <Link href="/contact" className="text-center text-[15px] text-ivory hover:text-mist-2">Or book a free consultation →</Link>
      </aside>
    </section>
  );
}
