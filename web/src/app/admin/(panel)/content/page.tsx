import type { Metadata } from "next";
import Link from "next/link";
import { Picture } from "@/components/Picture";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Site content",
  description: "Edit website text, hero media, WhatsApp first messages and contact details.",
};

const SECTIONS = ["Home", "About & team", "Services", "Destinations", "Contact & offices", "Testimonials", "FAQ", "Footer & social", "SEO defaults"];

const WA = [
  ["Home", "Hi Wedlock, we are planning our wedding and would like to talk."],
  ["Services", "Hi Wedlock, I’d like to know about your planning packages."],
  ["Destinations · Jaipur", "Hi Wedlock, we are thinking of a wedding in Jaipur."],
  ["Weddings (portfolio)", "Hi Wedlock, we loved your past weddings. Can we talk about ours?"],
  ["Patna city page", "Hi Wedlock, we are planning a wedding in Patna."],
  ["Partner with us", "Hi Wedlock, I am a vendor and would like to work with you."],
];

const instagramHandle = "@" + SITE.social.instagram.replace(/\/$/, "").split("/").pop();

const CONTACT = [
  { k: "Phone & WhatsApp", v: SITE.phone },
  { k: "Email", v: SITE.email },
  { k: "Patna studio", v: SITE.address },
  { k: "Instagram", v: instagramHandle },
];

const panel = "rounded-xl border border-line bg-white";
const label = "flex flex-col gap-1.5 text-[13px] font-semibold";
const input = "rounded-[2px] border border-line bg-white p-2.5 text-sm font-normal";
const h2 = "m-0 font-serif text-[28px] font-normal";

export default function AdminSiteContentPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-[13px] text-fern">Website · changes go live in about a minute</span>
          <h1 className="m-0 font-serif text-[36px] font-light leading-[1.05] sm:text-[44px]">Site content</h1>
        </div>
        <button type="button" className="cursor-pointer rounded-[2px] bg-ink px-[18px] py-3 text-xs font-semibold uppercase tracking-[0.12em] text-ivory hover:bg-moss">
          Publish changes
        </button>
      </div>

      <div className="flex flex-wrap items-start gap-5">
        <nav aria-label="Sections" className="flex w-full gap-0.5 overflow-x-auto lg:w-auto lg:max-w-[240px] lg:flex-[1_1_200px] lg:flex-col">
          {SECTIONS.map((name, i) => (
            <a
              key={name}
              href="#"
              aria-current={i === 0 ? "page" : undefined}
              className={`shrink-0 whitespace-nowrap rounded px-3 py-[9px] text-sm no-underline ${i === 0 ? "bg-white font-semibold" : "hover:bg-stone"}`}
            >
              {name}
            </a>
          ))}
        </nav>

        <div className="flex min-w-0 flex-[999_1_520px] flex-col gap-5">
          <section className={`${panel} flex flex-col gap-3.5 px-6 py-[22px]`}>
            <h2 className={h2}>Home · hero</h2>
            <div className="flex flex-wrap gap-4">
              <div className="flex min-w-0 flex-[1_1_260px] flex-col gap-1.5 text-[13px] font-semibold">
                Background photo
                <Picture
                  slug="floral-mandap"
                  alt="A floral mandap of red gerberas with crystal lights"
                  sizes="(min-width: 1024px) 360px, 92vw"
                  className="block aspect-video w-full rounded-lg object-cover"
                />
                <Link href="/admin/media" className="font-normal">
                  Change from Media library
                </Link>
              </div>
              <div className="flex min-w-0 flex-[1_1_260px] flex-col gap-1.5 text-[13px] font-semibold">
                Background video (optional)
                <span className="flex aspect-video items-center justify-center rounded-lg bg-stone p-3 text-center text-[13px] font-normal text-fern">
                  8-second silent loop · 720p · max 2.5 MB. Phones on slow data see the photo instead.
                </span>
              </div>
            </div>
            <label className={label}>
              Headline
              <input type="text" defaultValue="Weddings planned with family, run with precision." className="rounded-[2px] border border-line p-2.5 font-serif text-[22px] font-normal" />
            </label>
            <label className={label}>
              Line below
              <input type="text" defaultValue="Patna · Ranchi · New Delhi · destinations across India and abroad. Since 2014." className={input} />
            </label>
          </section>

          <section className={`${panel} flex flex-col gap-1 px-[22px] py-5`}>
            <h2 className={`${h2} mb-1.5`}>WhatsApp first messages</h2>
            <span className="mb-1.5 text-[13px] text-fern">What the visitor&apos;s WhatsApp opens with, on each page.</span>
            {WA.map(([page, msg]) => (
              <label key={page} className="grid items-center gap-x-3 gap-y-1.5 border-t border-stone py-2 text-[13px] font-semibold sm:grid-cols-[170px_minmax(0,1fr)]">
                {page}
                <input type="text" defaultValue={msg} className="rounded-[2px] border border-line p-[9px] text-[13px] font-normal" />
              </label>
            ))}
          </section>

          <section className={`${panel} grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-x-5 gap-y-3.5 px-[22px] py-5`}>
            <h2 className={`${h2} col-span-full`}>Contact details (used site-wide)</h2>
            {CONTACT.map((c) => (
              <label key={c.k} className={label}>
                {c.k}
                <input type="text" defaultValue={c.v} className={input} />
              </label>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}
