"use client";

import { useState } from "react";
import { MESSAGE_TEMPLATES, MESSAGE_TO } from "@/app/admin/data";

const CHANNELS = ["Email", "WhatsApp"] as const;
const field = "rounded-[2px] border border-line bg-white p-2.5 text-sm font-normal text-ink";

const BODY = `Namaste {first_name},

Pooja & Karan's wedding is confirmed for {event_date} at {venue}, Patna.
Your slot: {call_time}. Load-in from the service gate.
Site lead on the day: Rahul Ranjan, +91 70615 28402.

Please reply to confirm.
— Team Wedlock`;

export function Composer() {
  const [channel, setChannel] = useState<(typeof CHANNELS)[number]>("Email");
  const isEmail = channel === "Email";

  return (
    <section className="flex min-w-0 flex-[999_1_560px] flex-col gap-4 rounded-xl border border-line bg-white px-5 py-[22px] sm:px-6">
      <h2 className="m-0 font-serif text-[28px] font-normal">New message</h2>

      <div role="group" aria-label="Channel" className="flex self-start overflow-hidden rounded-[2px] border border-ink">
        {CHANNELS.map((c) => (
          <button
            key={c}
            type="button"
            aria-pressed={channel === c}
            onClick={() => setChannel(c)}
            className={`cursor-pointer px-[18px] py-[9px] text-[13px] font-semibold ${channel === c ? "bg-ink text-ivory" : "bg-transparent text-ink"}`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="msg-to" className="text-[13px] font-semibold">To</label>
        <div className="flex flex-wrap items-center gap-1.5 rounded-[2px] border border-line px-2.5 py-2">
          {MESSAGE_TO.map((t) => (
            <span key={t.name} className="rounded-[2px] bg-stone px-2.5 py-1 text-[13px]">
              {t.name} <span className="text-fern">· {t.kind}</span>
            </span>
          ))}
          <input
            id="msg-to"
            type="text"
            placeholder="Add a couple, vendor or group (e.g. All decor vendors)"
            className="min-w-[200px] flex-1 border-none p-1 text-sm outline-none"
          />
        </div>
      </div>

      <label className="flex flex-col gap-1.5 text-[13px] font-semibold">
        Template
        <select className={field}>
          {MESSAGE_TEMPLATES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </label>

      {isEmail && (
        <label className="flex flex-col gap-1.5 text-[13px] font-semibold">
          Subject
          <input type="text" defaultValue="Wedlock brief: Pooja & Karan, 9 Feb 2027, Patna" className={field} />
        </label>
      )}

      <label className="flex flex-col gap-1.5 text-[13px] font-semibold">
        Message
        <textarea rows={8} defaultValue={BODY} className={`${field} resize-y p-3 leading-relaxed`} />
      </label>
      <span className="text-xs text-fern">Fields in {"{braces}"} fill in for each person. Each vendor gets their own copy.</span>

      <div className="flex flex-wrap items-center gap-2.5 border-t border-stone pt-4">
        {isEmail ? (
          <>
            <button
              type="button"
              className="cursor-pointer rounded-[2px] bg-ink px-[18px] py-3 text-xs font-semibold uppercase tracking-[0.12em] text-ivory hover:bg-moss"
            >
              Send 3 emails
            </button>
            <span className="text-[13px] text-fern">Sent from info@wedlock.co.in. Replies come to the shared inbox.</span>
          </>
        ) : (
          <>
            <button
              type="button"
              className="cursor-pointer rounded-[2px] bg-[#1F7A45] px-[18px] py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white"
            >
              Open WhatsApp · 1 of 3
            </button>
            <span className="text-[13px] text-fern">
              Opens each chat with the message typed in. You press send, then click for the next person.
            </span>
          </>
        )}
      </div>
    </section>
  );
}
