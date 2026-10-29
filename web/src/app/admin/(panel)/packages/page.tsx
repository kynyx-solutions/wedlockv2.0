import type { Metadata } from "next";
import Link from "next/link";
import { CITIES, DECOR, RATES, VENUES } from "@/data/calculator-rates";

export const metadata: Metadata = {
  title: "Packages & add-ons",
  description: "Edit planning packages, add-ons and the budget calculator rates.",
};

const PACKAGES = [
  {
    name: "Full Planning",
    vis: "Live",
    for: "Couples who want one team to plan and run every function, from first idea to vidaai.",
    inc: ["Venue search and contracts", "Design and decor", "Vendor booking and management", "Guest hospitality", "On-day team for every function"],
  },
  {
    name: "Partial Planning",
    vis: "Live",
    for: "Families who have booked some vendors and want us to pull it together.",
    inc: ["Planning from 4 months out", "Vendor gap-filling", "Run-of-show", "On-day team"],
  },
  {
    name: "Wedding Week",
    vis: "Live",
    for: "Everything is booked; you want calm hands for the final weeks.",
    inc: ["Takeover 6 weeks out", "Vendor confirmations", "On-day coordination"],
  },
];

const LIVE = ["Return gifts"];
const PROPOSED = [
  "Trousseau & shagun packing",
  "Welcome hampers",
  "Live streaming",
  "Pandit & rituals",
  "Baraat & grand entries",
  "Special effects",
  "Kids’ zone & elder care",
  "Valet & security",
  "Same-day highlight film",
];
const ADDONS = [...LIVE.map((name) => ({ name, live: true })), ...PROPOSED.map((name) => ({ name, live: false }))];

const inr = (n: number) => n.toLocaleString("en-IN");
const multipliers = Object.entries(CITIES)
  .filter(([key]) => key !== "patna")
  .map(([, c]) => `${c.label} ${c.factor}`)
  .join(" · ");

const RATE_FIELDS = [
  { k: "Catering per plate (₹)", v: inr(RATES.cateringPerPlate) },
  { k: `${VENUES.banquet.label} per function (₹)`, v: inr(VENUES.banquet.perFunction) },
  { k: `${DECOR.premium.label} décor per function (₹)`, v: inr(DECOR.premium.perFunction) },
  { k: "City multipliers", v: multipliers },
  { k: "Range shown", v: `± ${Math.round(RATES.range * 100)}%` },
];

const panel = "rounded-xl border border-line bg-white";
const label = "flex flex-col gap-1.5 text-[13px] font-semibold";
const input = "rounded-[2px] border border-line bg-white p-2.5 text-sm font-normal";
const th = "px-2 py-2.5 font-semibold";

export default function AdminPackagesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-[13px] text-fern">Website · shown on Services and used in proposals</span>
          <h1 className="m-0 font-serif text-[36px] font-light leading-[1.05] sm:text-[44px]">Packages &amp; add-ons</h1>
        </div>
        <button type="button" className="cursor-pointer rounded-[2px] bg-ink px-[18px] py-3 text-xs font-semibold uppercase tracking-[0.12em] text-ivory hover:bg-moss">
          Save &amp; publish
        </button>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-4">
        {PACKAGES.map((p) => (
          <section key={p.name} className={`${panel} flex flex-col gap-3 px-[22px] py-5`}>
            <div className="flex items-baseline justify-between gap-2">
              <input
                type="text"
                defaultValue={p.name}
                aria-label="Package name"
                className="min-w-0 flex-1 border-0 border-b border-line bg-transparent px-0 py-1 font-serif text-[26px]"
              />
              <span className="text-xs font-semibold text-moss">{p.vis}</span>
            </div>
            <label className={label}>
              Who it is for
              <textarea rows={2} defaultValue={p.for} className={`${input} resize-y text-ink`} />
            </label>
            <label className={label}>
              Starting price (₹)
              <input type="text" defaultValue="[from ₹ amount]" className={input} />
            </label>
            <label className="flex gap-2 text-[13px]">
              <input type="checkbox" /> Show price on the website
            </label>
            <div className="flex flex-col gap-1.5">
              <span className="text-[13px] font-semibold">Included</span>
              {p.inc.map((i) => (
                <span key={i} className="border-t border-stone pt-1.5 text-sm">
                  {i}
                </span>
              ))}
              <a href="#" className="text-[13px]">
                + Add line
              </a>
            </div>
          </section>
        ))}
      </div>

      <section className={`${panel} flex flex-col gap-3 px-[22px] py-5`}>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="m-0 font-serif text-[26px] font-normal">Calculator rates</h2>
          <Link href="/wedding-budget-calculator" className="text-[13px]">
            Open the budget calculator ↗
          </Link>
        </div>
        <span className="text-[13px] text-fern">Used by the public budget calculator. Patna is the base; other cities multiply it. Last updated: [date].</span>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-x-[18px] gap-y-3">
          {RATE_FIELDS.map((f) => (
            <label key={f.k} className={label}>
              {f.k}
              <input type="text" defaultValue={f.v} className={input} />
            </label>
          ))}
        </div>
        <a href="#" className="text-[13px]">
          Edit all rates (venues, décor levels, photo, entertainment, stay, add-ons) →
        </a>
      </section>

      <section className={`${panel} overflow-x-auto px-[22px] pb-4 pt-2`}>
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <caption className="pb-2 pt-3.5 text-left font-serif text-[26px]">Add-ons</caption>
          <thead>
            <tr className="text-left text-xs uppercase tracking-[0.08em] text-fern">
              <th className={`${th} pl-0`}>Add-on</th>
              <th className={th}>Status</th>
              <th className={th}>Price hint</th>
              <th className={th}>On website</th>
              <th className={`${th} pr-0`}>WhatsApp message</th>
            </tr>
          </thead>
          <tbody>
            {ADDONS.map((a) => (
              <tr key={a.name} className="border-t border-stone">
                <td className="py-[11px] pl-0 pr-2 font-semibold">{a.name}</td>
                <td className="px-2 py-[11px]">
                  <span className={`rounded-[2px] px-2 py-[3px] text-xs font-semibold ${a.live ? "bg-sage" : "bg-[#F1E7D3]"}`}>{a.live ? "Live" : "Proposed"}</span>
                </td>
                <td className="px-2 py-[11px] text-fern">On request</td>
                <td className={`px-2 py-[11px] font-semibold ${a.live ? "text-moss" : "text-fern"}`}>{a.live ? "Shown" : "Hidden"}</td>
                <td className="py-[11px] pl-2 pr-0 text-[13px] text-fern">Hi Wedlock, I’d like to know more about {a.name.toLowerCase()}.</td>
              </tr>
            ))}
          </tbody>
        </table>
        <span className="text-xs text-fern">“Proposed” add-ons stay hidden until the team confirms we can deliver them.</span>
      </section>
    </div>
  );
}
