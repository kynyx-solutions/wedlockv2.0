import type { Metadata } from "next";
import Link from "next/link";
import { Picture, type MediaSlug } from "@/components/Picture";

export const metadata: Metadata = {
  title: "Couple stories",
  description: "Edit a couple story: details, photos, credits and consent.",
};

const FIELDS = [
  { k: "Couple names", v: "Ankita & Anunay" },
  { k: "Wedding date", v: "[date]" },
  { k: "City", v: "Patna" },
  { k: "Venue", v: "[venue]" },
  { k: "Guests", v: "[number]" },
  { k: "Web address", v: "ankita-anunay" },
];

const PHOTOS: { slug: MediaSlug; alt: string; tag: string }[] = [
  { slug: "couple-night-lights", alt: "Ankita and Anunay at their reception", tag: "Cover" },
  { slug: "entry-ankita-anunay", alt: "Ankita and Anunay’s welcome board", tag: "★" },
  { slug: "haldi-couple", alt: "A couple at their haldi", tag: "★" },
  { slug: "sangeet-dance", alt: "Guests dancing at a sangeet", tag: "★" },
  { slug: "floral-mandap", alt: "A floral mandap of red gerberas with crystal lights", tag: "" },
  { slug: "couple-bw-ankita-anunay", alt: "A couple under fairy lights in black and white", tag: "" },
];

const CREDITS = [
  { role: "Planning & design", name: "Wedlock" },
  { role: "Decor", name: "Phoolwari Decor" },
  { role: "Photography", name: "Lens & Light Studio" },
  { role: "Mehendi", name: "Mehendi by Nazia" },
];

const panel = "rounded-xl border border-line bg-white";
const label = "flex flex-col gap-1.5 text-[13px] font-semibold";
const input = "rounded-[2px] border border-line bg-white p-2.5 text-sm font-normal";
const h2 = "m-0 font-serif text-[26px] font-normal";

export default function AdminStoryEditorPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <a href="#" className="text-[13px] text-fern no-underline">
            ← All couple stories (31)
          </a>
          <h1 className="m-0 font-serif text-[36px] font-light leading-[1.05] sm:text-[44px]">Ankita &amp; Anunay</h1>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[13px] text-fern">Published · last edited yesterday</span>
          <Link href="/weddings/ankita-anunay" className="rounded-[2px] bg-stone px-4 py-[11px] text-[13px] font-semibold no-underline">
            View on site
          </Link>
          <button type="button" className="cursor-pointer rounded-[2px] bg-ink px-[18px] py-[11px] text-xs font-semibold uppercase tracking-[0.12em] text-ivory hover:bg-moss">
            Save changes
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-start gap-5">
        <div className="flex min-w-0 flex-[999_1_560px] flex-col gap-5">
          <section className={`${panel} grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-5 gap-y-3.5 px-6 py-[22px]`}>
            {FIELDS.map((f) => (
              <label key={f.k} className={label}>
                {f.k}
                <input type="text" defaultValue={f.v} className={input} />
              </label>
            ))}
            <label className={`${label} col-span-full`}>
              Their story
              <textarea
                rows={6}
                className="resize-y rounded-[2px] border border-line p-3 text-sm font-normal leading-relaxed text-ink"
                defaultValue="[Story text from the couple and their planner. Two or three short paragraphs: how they met, what they wanted the wedding to feel like, one moment the family still talks about.]"
              />
            </label>
            <label className={`${label} col-span-full`}>
              Pull quote
              <input type="text" defaultValue="[A line from the couple, in their words]" className="rounded-[2px] border border-line p-2.5 font-serif text-xl font-normal italic" />
            </label>
          </section>

          <section className={`${panel} flex flex-col gap-3 px-[22px] py-5`}>
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className={h2}>Photos</h2>
              <Link href="/admin/media" className="text-[13px]">
                + Add from Media library
              </Link>
            </div>
            <span className="text-[13px] text-fern">Drag to reorder. The first photo is the cover. Star up to 6 for the Weddings grid.</span>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(140px,1fr))] gap-2.5">
              {PHOTOS.map((p) => (
                <figure key={p.slug} className="relative m-0">
                  <Picture slug={p.slug} alt={p.alt} sizes="(min-width: 1024px) 180px, 45vw" className="block aspect-square w-full rounded-lg object-cover" />
                  {p.tag && (
                    <span className="absolute left-1.5 top-1.5 rounded-[2px] bg-ink px-2 py-0.5 text-[11px] text-ivory">
                      {p.tag === "★" ? (
                        <>
                          <span aria-hidden="true">★</span>
                          <span className="sr-only">Starred</span>
                        </>
                      ) : (
                        p.tag
                      )}
                    </span>
                  )}
                </figure>
              ))}
            </div>
          </section>

          <section className={`${panel} flex flex-col gap-2 px-[22px] py-5`}>
            <h2 className={`${h2} mb-1`}>Credits</h2>
            {CREDITS.map((c) => (
              <div key={c.role} className="flex justify-between gap-3 border-t border-stone py-2 text-sm">
                <span className="text-fern">{c.role}</span>
                <span>{c.name}</span>
              </div>
            ))}
            <span className="text-xs text-fern">Picked from Vendors, so names stay consistent across stories.</span>
          </section>
        </div>

        <aside className="flex min-w-0 flex-[1_1_300px] flex-col gap-4">
          <section className={`${panel} flex flex-col gap-3 px-5 py-[18px]`}>
            <label className={label}>
              Status
              <select defaultValue="Published" className={input}>
                <option>Published</option>
                <option>Draft</option>
                <option>Hidden</option>
              </select>
            </label>
            <fieldset className="m-0 flex flex-col gap-1.5 border-none p-0 text-[13px] font-semibold">
              <legend className="mb-1.5 p-0">Show on</legend>
              <span className="flex flex-col gap-1.5 text-[15px] font-normal">
                <label>
                  <input type="checkbox" defaultChecked /> Weddings page
                </label>
                <label>
                  <input type="checkbox" defaultChecked /> Home · featured
                </label>
                <label>
                  <input type="checkbox" /> Patna city page
                </label>
              </span>
            </fieldset>
            <label className={label}>
              Linked event
              <select className={input}>
                <option>None (past wedding)</option>
                <option>Pooja &amp; Karan · Feb 2027</option>
              </select>
            </label>
          </section>
          <section className="flex flex-col gap-2 rounded-xl bg-stone px-[18px] py-4 text-[13px] text-fern">
            <label className="flex items-start gap-2 text-ink">
              <input type="checkbox" defaultChecked className="mt-[3px]" />
              <span>
                The couple agreed in writing to show these photos and names. <a href="#">Consent note</a>
              </span>
            </label>
            <span>A story cannot be published without this.</span>
          </section>
        </aside>
      </div>
    </div>
  );
}
