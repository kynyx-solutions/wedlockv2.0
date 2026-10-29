import type { Metadata } from "next";
import { CHANNEL_COLOR, RECENT_MESSAGES } from "@/app/admin/data";
import { Composer } from "./Composer";

export const metadata: Metadata = { title: "Messages" };

export default function AdminMessagesPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-[13px] text-fern">Business · email and WhatsApp to couples and vendors · sample data</span>
          <h1 className="m-0 font-serif text-[36px] font-light leading-[1.05] sm:text-[44px]">Messages</h1>
        </div>
        <button type="button" className="cursor-pointer rounded-[2px] bg-stone px-4 py-3 text-[13px] font-semibold">
          Manage templates
        </button>
      </div>

      <div className="flex flex-wrap items-start gap-5">
        <Composer />

        <aside className="flex min-w-0 flex-[1_1_300px] flex-col gap-4">
          <section className="flex flex-col gap-2.5 rounded-xl border border-line bg-white px-5 py-[18px]">
            <h2 className="m-0 font-serif text-2xl font-normal">Recent</h2>
            <ol className="m-0 flex list-none flex-col p-0">
              {RECENT_MESSAGES.map((r) => (
                <li key={r.to + r.when + r.channel} className="flex flex-col gap-0.5 border-t border-stone py-2.5">
                  <span className="flex justify-between gap-2">
                    <strong className="text-sm font-semibold">{r.to}</strong>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.06em]" style={{ color: CHANNEL_COLOR[r.channel] }}>
                      {r.channel}
                    </span>
                  </span>
                  <span className="text-[13px] text-fern">
                    {r.what} · {r.when} · {r.status}
                  </span>
                </li>
              ))}
            </ol>
          </section>
          <section className="flex flex-col gap-2 rounded-xl bg-stone px-[18px] py-4 text-[13px] text-fern">
            <strong className="font-semibold text-ink">How sending works</strong>
            <span>Email goes out through Resend and is logged on the lead, vendor or event.</span>
            <span>
              WhatsApp opens your WhatsApp with the message ready. Sending to many people at once needs the WhatsApp Business API (phase 2).
            </span>
            <span>Couples who did not agree to WhatsApp contact are greyed out.</span>
          </section>
        </aside>
      </div>
    </div>
  );
}
