"use client";

import { useState } from "react";
import { SITE, waLink } from "@/lib/site";

export type Role = { title: string; team: string; city: string; type: string };

const TEAMS = ["Planning", "Design", "Production", "Hospitality", "Sales", "Marketing"];
const CITIES = ["Patna", "Ranchi", "New Delhi"];

const applyMessage = (r: Role) =>
  `Hi Wedlock! I'd like to apply for the ${r.title} role (${r.team}, ${r.city}). Could you tell me how to send my CV?`;

/** Open roles with Team / City filters. "Apply" opens WhatsApp until an applications inbox exists. */
export function RoleList({ roles }: { roles: Role[] }) {
  const [team, setTeam] = useState("");
  const [city, setCity] = useState("");
  const shown = roles.filter((r) => (!team || r.team === team) && (!city || r.city === city));

  const select = "rounded-[2px] border-none bg-stone px-4 py-[11px] text-[15px] text-ink";
  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <h2 className="h2 m-0">Open roles</h2>
        <div className="flex flex-wrap gap-2.5">
          <label className="flex items-center gap-2 text-sm text-fern">
            Team
            <select value={team} onChange={(e) => setTeam(e.target.value)} className={select}>
              <option value="">All teams</option>
              {TEAMS.map((t) => <option key={t}>{t}</option>)}
            </select>
          </label>
          <label className="flex items-center gap-2 text-sm text-fern">
            City
            <select value={city} onChange={(e) => setCity(e.target.value)} className={select}>
              <option value="">All cities</option>
              {CITIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </label>
        </div>
      </div>

      <ul aria-live="polite" className="m-0 flex list-none flex-col gap-2.5 p-0">
        {shown.map((r) => (
          <li key={r.title}>
            <a
              href={waLink(applyMessage(r))}
              target="_blank"
              rel="noopener"
              className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 rounded-lg bg-stone px-5 py-5 no-underline sm:px-7 md:grid-cols-[minmax(0,2.4fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_auto] md:gap-4"
            >
              <span className="font-serif text-[22px] leading-tight">{r.title}</span>
              <span className="row-span-2 rounded-[2px] bg-ivory px-[18px] py-2.5 text-sm font-medium md:order-last md:row-span-1">
                Apply <span aria-hidden="true">→</span><span className="sr-only"> for {r.title} on WhatsApp</span>
              </span>
              <span className="text-[15px] text-fern md:contents">
                <span>{r.team}</span>
                <span className="md:hidden"> · </span>
                <span>{r.city}</span>
                <span className="md:hidden"> · </span>
                <span>{r.type}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
      {shown.length === 0 && <p className="m-0 text-fern">No open roles match these filters right now.</p>}
      <p className="m-0 text-[15px] text-fern">
        Apply opens WhatsApp. Prefer email? Send your CV to{" "}
        <a href={`mailto:${SITE.email}?subject=${encodeURIComponent("Job application")}`}>{SITE.email}</a>.
      </p>
    </>
  );
}
