import type { Metadata } from "next";
import Link from "next/link";
import { VendorTable } from "./VendorTable";

export const metadata: Metadata = {
  title: "Vendors",
  description: "Wedlock's vendor list, partner applications and contacts.",
};

const KPIS = [
  { label: "Active vendors", value: "64" },
  { label: "Patna · Ranchi · Delhi", value: "38 · 11 · 15" },
  { label: "Awaiting reply", value: "5" },
  { label: "Applications", value: "2" },
];

const APPS = [
  { name: "Gulmohar Florals", detail: "Decor · Patna · applied 27 Oct · portfolio link attached" },
  { name: "Sufi Nights Live", detail: "Entertainment · New Delhi · applied 25 Oct" },
];

const panel = "rounded-xl border border-line bg-white";

export default function AdminVendorsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-[13px] text-fern">Business · sample data</span>
          <h1 className="m-0 font-serif text-[36px] font-light leading-[1.05] sm:text-[44px]">Vendors</h1>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <Link href="/admin/messages" className="rounded-[2px] bg-stone px-4 py-3 text-[13px] font-semibold no-underline">
            Message selected
          </Link>
          <a href="#" className="rounded-[2px] bg-ink px-[18px] py-3 text-xs font-semibold uppercase tracking-[0.12em] text-ivory no-underline hover:bg-moss hover:text-ivory">
            + Add vendor
          </a>
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3.5">
        {KPIS.map((k) => (
          <div key={k.label} className={`${panel} flex flex-col gap-0.5 px-[18px] py-4`}>
            <span className="text-xs font-semibold uppercase tracking-[0.08em] text-fern">{k.label}</span>
            <span className="font-serif text-[36px] leading-[1.1]">{k.value}</span>
          </div>
        ))}
      </div>

      <section className={`${panel} flex flex-col gap-3 px-[22px] py-[18px]`}>
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="m-0 font-serif text-[26px] font-normal">New partner applications</h2>
          <span className="text-[13px] text-fern">From the Partner with us page</span>
        </div>
        {APPS.map((a) => (
          <div key={a.name} className="flex flex-wrap items-center justify-between gap-3 border-t border-stone pt-3">
            <span className="flex flex-col">
              <strong className="font-semibold">{a.name}</strong>
              <span className="text-[13px] text-fern">{a.detail}</span>
            </span>
            <span className="flex gap-2">
              <button type="button" className="cursor-pointer rounded-[2px] bg-ink px-3.5 py-2 text-[13px] font-semibold text-ivory hover:bg-moss">
                Approve
              </button>
              <button type="button" className="cursor-pointer rounded-[2px] bg-stone px-3.5 py-2 text-[13px] font-semibold">
                Decline
              </button>
            </span>
          </div>
        ))}
      </section>

      <VendorTable />
      <span className="text-xs text-fern">Vendor names are placeholders. Ratings and notes are internal and never shown on the website.</span>
    </div>
  );
}
