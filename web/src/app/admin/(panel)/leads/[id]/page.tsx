import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ADMIN, DEMO_TEL, LEADS, STAGES, demoWa, getLead, getLeadDetail, quickMessages } from "@/app/admin/data";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return LEADS.map((l) => ({ id: String(l.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const lead = getLead(Number((await params).id));
  if (!lead) return {};
  return { title: `Lead: ${lead.name}` };
}

const card = "flex flex-col rounded-xl border border-line bg-white";
const field = "rounded-[2px] border border-line bg-white p-2.5 text-sm font-normal text-ink";
const label = "flex flex-col gap-1.5 text-[13px] font-semibold";
const softBtn = "rounded-[2px] bg-stone px-4 py-[11px] text-[13px] font-semibold no-underline";
const waBtn = "rounded-[2px] bg-[#1F7A45] text-[13px] font-semibold text-white no-underline hover:text-white";

export default async function AdminLeadDetailPage({ params }: Props) {
  const lead = getLead(Number((await params).id));
  if (!lead) notFound();
  const d = getLeadDetail(lead);
  const current = STAGES.indexOf(d.stage);

  return (
    <div className="flex flex-col gap-6">
      <Link href={ADMIN.leads} className="self-start text-[13px] text-fern no-underline">← All leads</Link>

      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-[13px] text-fern">
            Lead #{lead.id} · {d.received} · sample data
          </span>
          <h1 className="m-0 font-serif text-[36px] font-light leading-[1.05] sm:text-[44px]">{lead.name}</h1>
        </div>
        <div className="flex flex-wrap gap-2">
          <a href={DEMO_TEL} className={softBtn}>Call</a>
          <a
            href={demoWa(`Namaste ${lead.greet}, this is Rahul from Wedlock.`)}
            target="_blank"
            rel="noopener"
            className={`${waBtn} px-4 py-[11px]`}
          >
            WhatsApp
          </a>
          <Link href={ADMIN.messages} className={softBtn}>Email</Link>
          <Link
            href={ADMIN.events}
            className="rounded-[2px] bg-ink px-4 py-[11px] text-xs font-semibold uppercase tracking-[0.12em] text-ivory no-underline hover:bg-moss hover:text-ivory"
          >
            Mark won → create event
          </Link>
        </div>
      </div>

      <ol aria-label="Stage" className="m-0 grid list-none grid-cols-2 gap-1 p-0 min-[480px]:grid-cols-3 md:grid-cols-6">
        {STAGES.map((name, i) => (
          <li
            key={name}
            aria-current={i === current ? "step" : undefined}
            className={`rounded-[2px] px-3 py-2.5 text-center text-[13px] font-semibold ${
              i < current ? "bg-moss text-ivory" : i === current ? "bg-ink text-ivory" : "bg-stone text-fern"
            }`}
          >
            {name}
          </li>
        ))}
      </ol>

      <div className="flex flex-wrap items-start gap-5">
        <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-5">
          <section className={`${card} gap-3.5 px-5 py-5 sm:px-[22px]`}>
            <h2 className="m-0 font-serif text-[26px] font-normal">Wedding details</h2>
            <dl className="m-0 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-6 gap-y-3.5">
              {d.details.map((x) => (
                <div key={x.k}>
                  <dt className="text-xs font-semibold uppercase tracking-[0.08em] text-fern">{x.k}</dt>
                  <dd className="m-0 mt-0.5 break-words">{x.v}</dd>
                </div>
              ))}
            </dl>
            {d.events.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                <span className="mr-1.5 self-center text-xs font-semibold uppercase tracking-[0.08em] text-fern">Events</span>
                {d.events.map((e) => (
                  <span key={e} className="rounded-[2px] bg-stone px-2.5 py-1 text-[13px]">{e}</span>
                ))}
              </div>
            )}
          </section>

          <section className={`${card} gap-3.5 px-5 py-5 sm:px-[22px]`}>
            <h2 className="m-0 font-serif text-[26px] font-normal">Activity</h2>
            <form className="flex flex-col gap-2.5 rounded bg-ivory p-3.5">
              <label className="flex items-center gap-1.5 text-[13px] text-fern">
                Log
                <select className="rounded-[2px] border border-line bg-white px-2.5 py-[7px] text-[13px] text-ink">
                  <option>WhatsApp chat</option>
                  <option>Call</option>
                  <option>Meeting</option>
                  <option>Note</option>
                </select>
              </label>
              <label className="flex flex-col gap-1 text-[13px] text-fern">
                Summary
                <textarea
                  rows={3}
                  placeholder="What was discussed? Paste key lines from the WhatsApp chat."
                  className="resize-y rounded-[2px] border border-line bg-white p-2.5 text-sm text-ink"
                />
              </label>
              <button
                type="button"
                className="cursor-pointer self-start rounded-[2px] bg-ink px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-ivory hover:bg-moss"
              >
                Save to timeline
              </button>
            </form>
            <ol className="m-0 flex list-none flex-col p-0">
              {d.activity.map((a) => (
                <li key={a.when + a.type} className="grid grid-cols-[90px_minmax(0,1fr)] gap-3.5 border-t border-stone py-3 sm:grid-cols-[110px_minmax(0,1fr)]">
                  <span className="text-[13px] text-fern">{a.when}</span>
                  <span>
                    <strong className="font-semibold">{a.type}</strong> · {a.text}
                  </span>
                </li>
              ))}
              {d.activity.length === 0 && (
                <li className="border-t border-stone py-3 text-[13px] text-fern">No activity logged yet in this demo.</li>
              )}
            </ol>
          </section>
        </div>

        <aside className="flex min-w-0 flex-[1_1_300px] flex-col gap-4">
          <section className={`${card} gap-3 px-5 py-[18px]`}>
            <label className={label}>
              Assigned planner
              <select defaultValue={lead.owner === "Rahul R." ? "Rahul Ranjan" : lead.owner === "Aliwaris K." ? "Aliwaris Khan" : "Unassigned"} className={field}>
                <option>Unassigned</option>
                <option>Rahul Ranjan</option>
                <option>Aliwaris Khan</option>
              </select>
            </label>
            <label className={label}>
              Next follow-up
              <input type="datetime-local" defaultValue="2026-10-29T17:00" className={field} />
            </label>
            <span className="text-xs text-fern">A reminder is emailed to the planner at this time.</span>
          </section>

          <section className={`${card} gap-3 px-5 py-[18px]`}>
            <h2 className="m-0 font-serif text-2xl font-normal">Proposal</h2>
            <label className={label}>
              Package
              <select className={field}>
                <option>Full Planning</option>
                <option>Partial Planning</option>
                <option>Wedding Week</option>
              </select>
            </label>
            <div className={label}>
              Add-ons
              <span className="flex flex-wrap gap-1.5 font-normal">
                <span className="rounded-[2px] bg-stone px-2.5 py-1">Return gifts</span>
                <span className="rounded-[2px] bg-stone px-2.5 py-1">Live streaming</span>
                <button type="button" className="cursor-pointer rounded-[2px] bg-stone px-2.5 py-1">+ Add</button>
              </span>
            </div>
            <label className={label}>
              Quoted fee (₹)
              <input type="text" defaultValue="[₹ amount]" className={field} />
            </label>
            <button type="button" className="cursor-pointer rounded-[2px] bg-stone p-[11px] text-center text-[13px] font-semibold">
              Generate proposal PDF · phase 2
            </button>
          </section>

          <section className={`${card} gap-2.5 px-5 py-[18px]`}>
            <h2 className="m-0 font-serif text-2xl font-normal">Quick message</h2>
            <span className="text-[13px] text-fern">Pick a template. Names, dates and links fill in automatically.</span>
            {quickMessages(lead.greet).map((q) => (
              <div key={q.name} className="flex items-center justify-between gap-2 border-t border-stone pt-2.5">
                <span className="text-sm">{q.name}</span>
                <span className="flex shrink-0 gap-1.5">
                  <a href={q.wa} target="_blank" rel="noopener" className={`${waBtn} px-2.5 py-1.5 text-xs`}>
                    WhatsApp
                  </a>
                  <Link href={ADMIN.messages} className="rounded-[2px] bg-stone px-2.5 py-1.5 text-xs font-semibold no-underline">
                    Email
                  </Link>
                </span>
              </div>
            ))}
          </section>

          <section className="flex flex-col gap-2 rounded-xl bg-stone px-[18px] py-4 text-[13px] text-fern">
            <span>
              <strong className="font-semibold text-ink">Consent:</strong> {d.consent}
            </span>
            <button type="button" className="cursor-pointer self-start p-0 text-left text-[#8C3B2E] underline">
              Delete this person’s data on request
            </button>
          </section>
        </aside>
      </div>
    </div>
  );
}
