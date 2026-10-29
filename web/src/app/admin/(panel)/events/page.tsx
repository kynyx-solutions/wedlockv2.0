import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Events",
  description: "Booked weddings, their functions, checklist and vendors.",
};

/** wa.me without a number opens WhatsApp with the text ready and lets you pick the contact. */
const wa = (text: string) => `https://wa.me/?text=${encodeURIComponent(text)}`;

const PAY = {
  paid: ["Paid in full", "text-moss"],
  part: ["2 of 3 received", "text-gold"],
  due: ["Instalment due", "text-[#8C3B2E]"],
} as const;

const EVENTS: { name: string; dates: string; place: string; owner: string; vendors: string; pay: keyof typeof PAY; selected?: boolean }[] = [
  { name: "Pooja & Karan", dates: "7–9 Feb 2027", place: "Patna · [venue]", owner: "Rahul R.", vendors: "9 of 11 confirmed", pay: "part", selected: true },
  { name: "Sana & Imran", dates: "3–5 Mar 2027", place: "New Delhi · [venue]", owner: "Aliwaris K.", vendors: "6 of 10 confirmed", pay: "part" },
  { name: "Aditya & Shreya", dates: "20–22 Nov 2027", place: "Ranchi · [venue]", owner: "Rahul R.", vendors: "2 of 9 confirmed", pay: "due" },
  { name: "Ritika & Arnav", dates: "11–12 Dec 2027", place: "Udaipur · [venue]", owner: "Aliwaris K.", vendors: "4 of 12 confirmed", pay: "part" },
  { name: "The Gupta family", dates: "18 Nov 2027", place: "Goa · [venue]", owner: "Rahul R.", vendors: "1 of 7 confirmed", pay: "paid" },
];

const FUNCTIONS = [
  { when: "Sun 7 Feb · 4 pm", name: "Haldi", venue: "Family home", guests: "120" },
  { when: "Sun 7 Feb · 8 pm", name: "Mehendi & sangeet", venue: "[venue] lawns", guests: "300" },
  { when: "Mon 8 Feb · 9 pm", name: "Wedding", venue: "[venue] banquet", guests: "450" },
  { when: "Tue 9 Feb · 8 pm", name: "Reception", venue: "[venue] banquet", guests: "600" },
];

const TASKS: [string, string, boolean][] = [
  ["Venue contract signed", "done", true],
  ["Decor moodboard approved by couple", "done", true],
  ["Return gifts: 450 boxes ordered", "done", true],
  ["Guest hotel blocks confirmed", "Fri 18 Dec", false],
  ["Final run-of-show sent to all vendors", "1 Feb", false],
  ["Second instalment", "15 Jan", false],
];

const VENDOR_MSG = "Namaste, Wedlock here about Pooja & Karan, 7–9 Feb 2027, Patna. ";
const VENDORS: [string, string, boolean][] = [
  ["Phoolwari Decor", "Decor", true],
  ["Raag Sound & Light", "Sound & light", true],
  ["Bihar Caterers", "Catering", true],
  ["Lens & Light Studio", "Photo & film", true],
  ["Mehendi by Nazia", "Mehendi", false],
  ["Shagun Gifts", "Return gifts", false],
];

const panel = "rounded-xl border border-line bg-white";
const th = "px-2 pb-2.5 pt-3 font-semibold";
const h3 = "m-0 font-serif text-[26px] font-normal";

export default function AdminEventsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-[13px] text-fern">Business · 14 booked weddings · sample data</span>
          <h1 className="m-0 font-serif text-[36px] font-light leading-[1.05] sm:text-[44px]">Events</h1>
        </div>
        <a href="#" className="rounded-[2px] bg-ink px-[18px] py-3 text-xs font-semibold uppercase tracking-[0.12em] text-ivory no-underline hover:bg-moss hover:text-ivory">
          + New event
        </a>
      </div>

      <section className={`${panel} overflow-x-auto px-[22px] py-2`}>
        <table className="w-full min-w-[760px] border-collapse text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-[0.08em] text-fern">
              <th className={`${th} pl-0`}>Couple</th>
              <th className={th}>Dates</th>
              <th className={th}>City · venue</th>
              <th className={th}>Planner</th>
              <th className={th}>Vendors</th>
              <th className={th}>Payment</th>
            </tr>
          </thead>
          <tbody>
            {EVENTS.map((e) => (
              <tr key={e.name} className={`border-t border-stone ${e.selected ? "bg-ivory" : ""}`} aria-current={e.selected ? "true" : undefined}>
                <td className="py-3 pl-0 pr-2 font-semibold">{e.name}</td>
                <td className="p-2 py-3">{e.dates}</td>
                <td className="p-2 py-3">{e.place}</td>
                <td className="p-2 py-3">{e.owner}</td>
                <td className="p-2 py-3">{e.vendors}</td>
                <td className={`p-2 py-3 font-semibold ${PAY[e.pay][1]}`}>{PAY[e.pay][0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <div className="flex flex-wrap items-end justify-between gap-4 border-t border-line pt-6">
        <div className="flex flex-col gap-1">
          <span className="text-[13px] text-fern">Selected · from lead #0987 · Patna · 450 guests</span>
          <h2 className="m-0 font-serif text-[30px] font-light leading-[1.1] sm:text-[36px]">Pooja &amp; Karan · 7–9 February 2027</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href={wa("Namaste Pooja, sharing this week's update from Wedlock.")}
            target="_blank"
            rel="noopener"
            className="rounded-[2px] bg-[#1F7A45] px-4 py-[11px] text-[13px] font-semibold text-white no-underline hover:text-white"
          >
            WhatsApp couple
          </a>
          <Link href="/admin/messages" className="rounded-[2px] bg-stone px-4 py-[11px] text-[13px] font-semibold no-underline">
            Email all vendors
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap items-start gap-5">
        <section className={`${panel} flex min-w-0 flex-[999_1_480px] flex-col gap-3 px-[22px] py-5`}>
          <h3 className={h3}>Functions</h3>
          <ol className="m-0 list-none p-0">
            {FUNCTIONS.map((f) => (
              <li key={f.when} className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-3.5 gap-y-1 border-t border-stone py-3 sm:grid-cols-[130px_minmax(0,1fr)_auto]">
                <span className="col-span-2 text-[13px] text-fern sm:col-span-1">{f.when}</span>
                <span>
                  <strong className="font-semibold">{f.name}</strong> · {f.venue}
                </span>
                <span className="text-[13px] text-fern">{f.guests}</span>
              </li>
            ))}
          </ol>
          <h3 className={`${h3} mt-2`}>Checklist</h3>
          <ul className="m-0 flex list-none flex-col gap-2 p-0">
            {TASKS.map(([text, due, done]) => (
              <li key={text} className="flex items-baseline gap-2.5">
                <span aria-hidden="true" className={`h-3.5 w-3.5 flex-none rounded-[2px] border border-moss ${done ? "bg-moss" : ""}`} />
                <span className={done ? "text-fern" : ""}>
                  {text}
                  {done && <span className="sr-only"> (done)</span>}
                </span>
                <span className="ml-auto shrink-0 text-[13px] text-fern">{due}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={`${panel} flex min-w-0 flex-[1_1_360px] flex-col gap-1 px-[22px] py-5`}>
          <h3 className={`${h3} mb-2`}>Vendors on this wedding</h3>
          {VENDORS.map(([name, role, ok]) => (
            <div key={name} className="flex items-center justify-between gap-2.5 border-t border-stone py-2.5">
              <span className="flex flex-col">
                <strong className="text-sm font-semibold">{name}</strong>
                <span className={`text-xs ${ok ? "text-moss" : "text-[#8C3B2E]"}`}>
                  {role} · {ok ? "confirmed" : "awaiting reply"}
                </span>
              </span>
              <span className="flex shrink-0 gap-1.5">
                <a
                  href={wa(VENDOR_MSG)}
                  target="_blank"
                  rel="noopener"
                  aria-label={`WhatsApp ${name}`}
                  className="rounded-[2px] bg-[#1F7A45] px-2.5 py-1.5 text-xs font-semibold text-white no-underline hover:text-white"
                >
                  WhatsApp
                </a>
                <Link href="/admin/messages" aria-label={`Email ${name}`} className="rounded-[2px] bg-stone px-2.5 py-1.5 text-xs font-semibold no-underline">
                  Email
                </Link>
              </span>
            </div>
          ))}
          <Link href="/admin/vendors" className="mt-2 text-[13px]">
            + Assign a vendor
          </Link>
        </section>
      </div>
    </div>
  );
}
