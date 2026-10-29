import type { Metadata } from "next";
import Link from "next/link";
import { PhotoToCome } from "@/components/Picture";
import { MarkdownBody } from "./MarkdownBody";

export const metadata: Metadata = {
  title: "Journal",
  description: "Write and schedule a Journal post.",
};

const TITLE = "A destination wedding in Jaipur: the 12-month timeline";
const SUMMARY = "What to book, and when, for a three-day Jaipur wedding with 250 guests.";
const SLUG = "jaipur-wedding-timeline";

const panel = "rounded-xl border border-line bg-white";
const label = "flex flex-col gap-1.5 text-[13px] font-semibold";
const input = "rounded-[2px] border border-line bg-white p-2.5 text-sm font-normal";

export default function AdminJournalEditorPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <a href="#" className="text-[13px] text-fern no-underline">
            ← All posts (23)
          </a>
          <h1 className="m-0 font-serif text-[36px] font-light leading-[1.05] sm:text-[44px]">Edit post</h1>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[13px] text-fern">Draft · saved 2 min ago</span>
          <Link href="/journal" className="rounded-[2px] bg-stone px-4 py-[11px] text-[13px] font-semibold no-underline">
            Preview
          </Link>
          <button type="button" className="cursor-pointer rounded-[2px] bg-ink px-[18px] py-[11px] text-xs font-semibold uppercase tracking-[0.12em] text-ivory hover:bg-moss">
            Publish
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-start gap-5">
        <section className={`${panel} flex min-w-0 flex-[999_1_560px] flex-col gap-3.5 px-6 py-[22px]`}>
          <label className={label}>
            Title
            <input type="text" defaultValue={TITLE} className="rounded-[2px] border border-line p-3 font-serif text-[26px] font-normal text-ink" />
          </label>
          <label className={label}>
            Short summary (shown on cards and Google)
            <textarea rows={2} defaultValue={SUMMARY} className="resize-y rounded-[2px] border border-line p-2.5 text-sm font-normal text-ink" />
          </label>
          <MarkdownBody />
        </section>

        <aside className="flex min-w-0 flex-[1_1_300px] flex-col gap-4">
          <section className={`${panel} flex flex-col gap-3 px-5 py-[18px]`}>
            <div className={label}>
              Cover photo
              <PhotoToCome label="Jaipur palace" className="aspect-video w-full rounded-lg" />
              <Link href="/admin/media" className="font-normal">
                Change from Media library
              </Link>
            </div>
            <label className={label}>
              Type
              <select className={input}>
                <option>Guide</option>
                <option>Article</option>
                <option>Real wedding</option>
                <option>News</option>
              </select>
            </label>
            <label className={label}>
              Tags
              <input type="text" defaultValue="Jaipur, destination, timeline" className={input} />
            </label>
            <label className={label}>
              Author
              <select className={input}>
                <option>Rahul Ranjan</option>
                <option>Syed Aabish Hassan</option>
                <option>Aliwaris Khan</option>
              </select>
            </label>
            <label className={label}>
              Publish on
              <input type="datetime-local" defaultValue="2026-11-03T09:00" className={input} />
            </label>
          </section>
          <section className={`${panel} flex flex-col gap-2.5 px-5 py-[18px]`}>
            <h2 className="m-0 font-serif text-2xl font-normal">Google preview</h2>
            <div className="flex flex-col gap-0.5 text-[13px]">
              <span className="break-all text-fern">wedlock.co.in › journal › {SLUG}</span>
              <span className="text-[17px] text-[#1A4D8F]">{TITLE}</span>
              <span className="text-fern">{SUMMARY}</span>
            </div>
            <label className={label}>
              Web address
              <input type="text" defaultValue={SLUG} className={input} />
            </label>
          </section>
        </aside>
      </div>
    </div>
  );
}
