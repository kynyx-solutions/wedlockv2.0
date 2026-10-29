import type { Metadata } from "next";
import Link from "next/link";
import {
  ADMIN,
  DASH_LEADS,
  DASH_STAGE_BG,
  DEMO_TEL,
  FOLLOWUPS,
  KPIS,
  SOURCES,
  WEBSITE_TODO,
  WEEK_EVENTS,
  demoWa,
} from "../data";

export const metadata: Metadata = { title: "Dashboard" };

const panel = "flex min-w-0 flex-col rounded-xl border border-line bg-white";
const panelHead = "flex items-center justify-between gap-3 border-b border-stone px-5 py-[18px]";
const h2 = "m-0 font-serif text-[26px] font-normal leading-tight";

export default function AdminDashboard() {
  const max = Math.max(...SOURCES.map((s) => s.n));
  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-[13px] text-fern">Thursday, 29 October 2026 · sample data</span>
          <h1 className="m-0 font-serif text-[36px] font-light leading-[1.05] sm:text-[44px]">Good morning, Aabish</h1>
        </div>
        <div className="flex w-full flex-wrap gap-2.5 sm:w-auto">
          <label className="flex min-w-0 flex-1 items-center gap-2 rounded-[2px] border border-line bg-white px-3 sm:min-w-[260px]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-4-4" />
            </svg>
            <span className="sr-only">Search</span>
            <input type="search" placeholder="Search leads, events, vendors" className="min-w-0 flex-1 border-none bg-transparent py-[11px] text-sm outline-none" />
          </label>
          <Link
            href={ADMIN.lead(1042)}
            className="rounded-[2px] bg-ink px-[18px] py-3 text-xs font-semibold uppercase tracking-[0.12em] text-ivory no-underline hover:bg-moss hover:text-ivory"
          >
            + New lead
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-2 xl:grid-cols-4">
        {KPIS.map((k) => (
          <Link key={k.label} href={k.href} className="flex flex-col gap-1.5 rounded-xl border border-line bg-white p-5 no-underline hover:border-moss">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-fern">{k.label}</span>
            <span className="font-serif text-[44px] font-normal leading-none">{k.value}</span>
            <span className="text-[13px] text-moss">{k.note}</span>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 items-start gap-5 xl:grid-cols-2">
        <section className={`${panel} xl:col-span-2`}>
          <div className={panelHead}>
            <h2 className={h2}>New leads</h2>
            <Link href={ADMIN.leads} className="text-[13px] font-semibold">Open pipeline →</Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-[0.08em] text-fern">
                  <th className="px-5 py-3 font-semibold">Name</th>
                  <th className="px-2 py-3 font-semibold">Wedding</th>
                  <th className="px-2 py-3 font-semibold">City</th>
                  <th className="px-2 py-3 font-semibold">Source</th>
                  <th className="px-2 py-3 font-semibold">Stage</th>
                  <th className="py-3 pl-2 pr-5 font-semibold">Owner</th>
                </tr>
              </thead>
              <tbody>
                {DASH_LEADS.map((l) => (
                  <tr key={l.id} className="border-t border-stone">
                    <td className="px-5 py-3.5">
                      <Link href={ADMIN.lead(l.id)} className="font-semibold no-underline hover:underline">{l.name}</Link>
                      <div className="text-xs text-fern">{l.received}</div>
                    </td>
                    <td className="px-2 py-3.5">{l.date}</td>
                    <td className="px-2 py-3.5">{l.city}</td>
                    <td className="px-2 py-3.5">{l.source}</td>
                    <td className="px-2 py-3.5">
                      <span className="rounded-[2px] px-2.5 py-1 text-xs font-semibold text-ink" style={{ background: DASH_STAGE_BG[l.stage] }}>
                        {l.stage}
                      </span>
                    </td>
                    <td className="py-3.5 pl-2 pr-5 text-fern">{l.owner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className={panel}>
          <div className={panelHead}>
            <h2 className={h2}>Follow-ups due today</h2>
          </div>
          {FOLLOWUPS.map((f) => (
            <div key={f.name} className="flex items-center justify-between gap-3 border-b border-stone px-5 py-3.5 last:border-b-0">
              <div className="flex min-w-0 flex-col">
                <Link href={ADMIN.lead(f.id)} className="font-semibold no-underline hover:underline">{f.name}</Link>
                <span className="text-[13px] text-fern">{f.task}</span>
              </div>
              <div className="flex shrink-0 gap-1.5">
                <a href={DEMO_TEL} aria-label={`Call ${f.name}`} className="rounded-[2px] bg-stone px-2.5 py-2 text-xs font-semibold no-underline">
                  Call
                </a>
                <a
                  href={demoWa()}
                  target="_blank"
                  rel="noopener"
                  aria-label={`WhatsApp ${f.name}`}
                  className="rounded-[2px] bg-[#1F7A45] px-2.5 py-2 text-xs font-semibold text-white no-underline hover:text-white"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          ))}
        </section>

        <section className={panel}>
          <div className={panelHead}>
            <h2 className={h2}>This week’s events</h2>
            <Link href={ADMIN.events} className="text-[13px] font-semibold">Calendar →</Link>
          </div>
          {WEEK_EVENTS.map((e) => (
            <div key={e.day} className="grid grid-cols-[64px_minmax(0,1fr)] gap-3.5 border-b border-stone px-5 py-3.5 last:border-b-0">
              <div className="flex flex-col rounded bg-ink py-2 text-center text-ivory">
                <span className="text-[11px] uppercase tracking-[0.1em] text-gold-light">{e.dow}</span>
                <span className="font-serif text-[26px] leading-none">{e.day}</span>
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="font-semibold">{e.title}</span>
                <span className="text-[13px] text-fern">{e.meta}</span>
              </div>
            </div>
          ))}
        </section>

        <section className={`${panel} gap-3.5 px-5 pb-[22px] pt-[18px]`}>
          <h2 className={h2}>Enquiries by source · October</h2>
          {SOURCES.map((s) => (
            <div key={s.name} className="grid grid-cols-[110px_minmax(0,1fr)_36px] items-center gap-3 text-sm sm:grid-cols-[120px_minmax(0,1fr)_36px]">
              <span>{s.name}</span>
              <span className="block h-2.5 rounded-[2px] bg-moss" style={{ width: `${Math.round((s.n / max) * 100)}%` }} />
              <span className="text-right font-semibold">{s.n}</span>
            </div>
          ))}
          <span className="text-xs text-fern">WhatsApp counts clicks on the website’s WhatsApp buttons.</span>
        </section>

        <section className="flex flex-col gap-2.5 rounded-xl bg-sage px-5 pb-[22px] pt-[18px]">
          <h2 className={h2}>Website to-do</h2>
          {WEBSITE_TODO.map((t) => (
            <Link key={t.href} href={t.href} className="flex justify-between gap-3 rounded-[2px] bg-ivory px-3.5 py-3 no-underline">
              <span>{t.text}</span>
              <span aria-hidden="true">→</span>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}
