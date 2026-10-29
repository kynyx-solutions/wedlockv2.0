import type { Metadata } from "next";
import Link from "next/link";
import { ADMIN, LEADS } from "@/app/admin/data";
import { LeadsView } from "./LeadsView";

export const metadata: Metadata = { title: "Leads" };

export default function AdminLeadsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-[13px] text-fern">Business · 38 open leads · sample data</span>
          <h1 className="m-0 font-serif text-[36px] font-light leading-[1.05] sm:text-[44px]">Leads</h1>
        </div>
        <div className="flex flex-wrap gap-2.5">
          <button type="button" className="cursor-pointer rounded-[2px] bg-stone px-4 py-3 text-[13px] font-semibold">
            Export CSV
          </button>
          <Link
            href={ADMIN.lead(1042)}
            className="rounded-[2px] bg-ink px-[18px] py-3 text-xs font-semibold uppercase tracking-[0.12em] text-ivory no-underline hover:bg-moss hover:text-ivory"
          >
            + New lead
          </Link>
        </div>
      </div>

      <LeadsView leads={LEADS} />
    </div>
  );
}
