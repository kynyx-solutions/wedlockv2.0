"use client";

import Link from "next/link";
import { useState } from "react";
import { ADMIN, STAGES, STAGE_COLOR, type Lead } from "@/app/admin/data";

const select = "rounded-[2px] border border-line bg-white px-2.5 py-2 text-[13px] text-ink";
const MAIN_CITIES = ["Patna", "Ranchi", "New Delhi"];
const OWNER_SHORT: Record<string, string> = { "Rahul Ranjan": "Rahul R.", "Aliwaris Khan": "Aliwaris K." };

export function LeadsView({ leads }: { leads: Lead[] }) {
  const [view, setView] = useState<"Board" | "List">("Board");
  const [owner, setOwner] = useState("Everyone");
  const [city, setCity] = useState("All cities");
  const [source, setSource] = useState("All sources");
  const [q, setQ] = useState("");

  const shown = leads.filter((l) => {
    if (owner !== "Everyone" && l.owner !== (OWNER_SHORT[owner] ?? owner)) return false;
    if (city === "Destination" ? MAIN_CITIES.includes(l.city) : city !== "All cities" && l.city !== city) return false;
    if (source !== "All sources" && l.source !== source.replace(" form", "")) return false;
    if (q && !l.name.toLowerCase().includes(q.trim().toLowerCase())) return false;
    return true;
  });

  return (
    <>
      <div className="flex flex-wrap items-center gap-2.5">
        <div role="group" aria-label="View" className="flex overflow-hidden rounded-[2px] border border-ink">
          {(["Board", "List"] as const).map((v) => (
            <button
              key={v}
              type="button"
              aria-pressed={view === v}
              onClick={() => setView(v)}
              className={`cursor-pointer px-3.5 py-[9px] text-[13px] ${view === v ? "bg-ink text-ivory" : "bg-transparent text-ink"}`}
            >
              {v}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-1.5 text-[13px] text-fern">
          Owner
          <select value={owner} onChange={(e) => setOwner(e.target.value)} className={select}>
            <option>Everyone</option>
            <option>Unassigned</option>
            <option>Rahul Ranjan</option>
            <option>Aliwaris Khan</option>
          </select>
        </label>
        <label className="flex items-center gap-1.5 text-[13px] text-fern">
          City
          <select value={city} onChange={(e) => setCity(e.target.value)} className={select}>
            <option>All cities</option>
            <option>Patna</option>
            <option>Ranchi</option>
            <option>New Delhi</option>
            <option>Destination</option>
          </select>
        </label>
        <label className="flex items-center gap-1.5 text-[13px] text-fern">
          Source
          <select value={source} onChange={(e) => setSource(e.target.value)} className={select}>
            <option>All sources</option>
            <option>WhatsApp</option>
            <option>Website form</option>
            <option>Instagram</option>
            <option>Referral</option>
          </select>
        </label>
        <label className="flex w-full items-center gap-2 rounded-[2px] border border-line bg-white px-2.5 sm:ml-auto sm:w-auto sm:min-w-[220px]">
          <span className="sr-only">Search leads</span>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search name or phone"
            className="min-w-0 flex-1 border-none bg-transparent py-[9px] text-[13px] outline-none"
          />
        </label>
      </div>

      {view === "Board" ? (
        <>
          <div className="overflow-x-auto pb-2">
            <div className="grid grid-cols-[repeat(6,260px)] items-start gap-3.5">
              {STAGES.map((stage) => {
                const cards = shown.filter((l) => l.stage === stage);
                return (
                  <section key={stage} className="flex flex-col gap-2.5 rounded bg-stone p-3" style={{ borderTop: `3px solid ${STAGE_COLOR[stage]}` }}>
                    <div className="flex items-baseline justify-between px-1 py-0.5">
                      <h2 className="m-0 text-[13px] font-semibold uppercase tracking-[0.1em]">{stage}</h2>
                      <span className="text-[13px] text-fern">{cards.length}</span>
                    </div>
                    {cards.map((k) => (
                      <Link
                        key={k.id}
                        href={ADMIN.lead(k.id)}
                        className="flex flex-col gap-1.5 rounded-xl border border-line bg-white px-3.5 py-3 no-underline hover:border-moss"
                      >
                        <span className="font-semibold">{k.name}</span>
                        <span className="text-[13px] text-fern">
                          {k.date} · {k.city} · {k.guests} guests
                        </span>
                        <span className="flex items-center justify-between text-xs">
                          <span className="rounded-[2px] bg-ivory px-2 py-[3px]">{k.source}</span>
                          <span className="text-fern">{k.owner}</span>
                        </span>
                        <span className={`text-xs font-semibold ${k.late ? "text-[#8C3B2E]" : "text-moss"}`}>{k.due}</span>
                      </Link>
                    ))}
                  </section>
                );
              })}
            </div>
          </div>
          <span className="text-xs text-fern">Drag a card to change its stage. Moving a card to Won offers to create an event.</span>
        </>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-line bg-white">
          <table className="w-full min-w-[820px] border-collapse text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-[0.08em] text-fern">
                <th className="px-5 py-3 font-semibold">Name</th>
                <th className="px-2 py-3 font-semibold">Wedding</th>
                <th className="px-2 py-3 font-semibold">City</th>
                <th className="px-2 py-3 font-semibold">Guests</th>
                <th className="px-2 py-3 font-semibold">Source</th>
                <th className="px-2 py-3 font-semibold">Stage</th>
                <th className="px-2 py-3 font-semibold">Owner</th>
                <th className="py-3 pl-2 pr-5 font-semibold">Next step</th>
              </tr>
            </thead>
            <tbody>
              {shown.map((l) => (
                <tr key={l.id} className="border-t border-stone">
                  <td className="px-5 py-3.5">
                    <Link href={ADMIN.lead(l.id)} className="font-semibold no-underline hover:underline">{l.name}</Link>
                  </td>
                  <td className="px-2 py-3.5">{l.date}</td>
                  <td className="px-2 py-3.5">{l.city}</td>
                  <td className="px-2 py-3.5">{l.guests}</td>
                  <td className="px-2 py-3.5">{l.source}</td>
                  <td className="px-2 py-3.5">
                    <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold">
                      <span className="h-2 w-2 rounded-full" style={{ background: STAGE_COLOR[l.stage] }} aria-hidden="true" />
                      {l.stage}
                    </span>
                  </td>
                  <td className="px-2 py-3.5 text-fern">{l.owner}</td>
                  <td className={`py-3.5 pl-2 pr-5 text-[13px] font-semibold ${l.late ? "text-[#8C3B2E]" : "text-moss"}`}>{l.due}</td>
                </tr>
              ))}
              {shown.length === 0 && (
                <tr className="border-t border-stone">
                  <td colSpan={8} className="px-5 py-6 text-center text-fern">No leads match these filters.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
