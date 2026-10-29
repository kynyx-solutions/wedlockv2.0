import Link from "next/link";
import { SITE } from "@/lib/site";
import { Logo } from "./Logo";

const COLUMNS = [
  {
    title: "Company",
    links: [
      ["About us", "/about"],
      ["Leadership", "/about#leadership"],
      ["Careers", "/careers"],
      ["Journal", "/journal"],
      ["Partner with us", "/partner"],
    ],
  },
  {
    title: "Services",
    links: [
      ["Full planning", "/services"],
      ["Destination weddings", "/services/destination-weddings"],
      ["Décor & design", "/services"],
      ["Guest hospitality", "/services"],
      ["Budget calculator", "/wedding-budget-calculator"],
    ],
  },
  {
    title: "Destinations",
    links: [
      ["Udaipur", "/destinations"],
      ["Jaipur", "/destinations/jaipur"],
      ["Goa", "/destinations"],
      ["Kerala", "/destinations"],
      ["Bali · Phuket · Dubai", "/destinations"],
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-ink text-[15px] text-mist">
      <div className="container-x flex flex-col gap-14 pb-5 pt-16 sm:pt-20">
        <div className="grid items-center gap-8 rounded bg-ink-2 p-6 sm:p-10 md:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <span className="font-serif text-[30px] font-light text-ivory">Planning notes, once a month</span>
            <span>Real weddings, budgeting advice and new destinations. No spam.</span>
          </div>
          <form className="flex flex-wrap gap-2.5" action="/thank-you">
            <label className="flex min-w-60 flex-1">
              <span className="sr-only">Email address</span>
              <input type="email" name="email" required placeholder="Your email address" className="field !px-5" />
            </label>
            <button type="submit" className="cursor-pointer rounded-[2px] bg-sage px-6 py-[15px] font-medium text-ink">Subscribe</button>
          </form>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-3.5">
            <Link href="/" aria-label="Wedlock home" className="no-underline hover:text-ivory"><Logo tone="light" /></Link>
            <p className="m-0 max-w-[26em]">Striking the perfect harmony between comfort and grandeur. Wedding planners since 2014 — 650+ celebrations across 40+ cities and 14 countries.</p>
            <div className="flex flex-wrap gap-2 text-[13px]">
              <span className="rounded-[2px] border border-fern px-3.5 py-1.5">Part of the Eventoss family</span>
              <span className="rounded-[2px] border border-fern px-3.5 py-1.5">Patna · Ranchi · New Delhi</span>
            </div>
          </div>
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title} className="flex flex-col gap-2">
              <span className="mb-1 text-xs font-medium uppercase tracking-[0.16em] text-ivory">{col.title}</span>
              {col.links.map(([label, href]) => (
                <Link key={label} href={href} className="no-underline hover:text-ivory">{label}</Link>
              ))}
            </nav>
          ))}
          <div className="flex flex-col gap-2">
            <span className="mb-1 text-xs font-medium uppercase tracking-[0.16em] text-ivory">Head office</span>
            <span>208-A, Kaushalya Estate,<br />Dak Bunglow Road, Patna</span>
            <a href={SITE.phoneHref} className="hover:text-ivory">{SITE.phone}</a>
            <a href={`mailto:${SITE.email}`} className="hover:text-ivory">{SITE.email}</a>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-x-6 gap-y-3 border-t border-fern pt-6 text-[13px]">
          <span>© 2026 Wedlock Wedding Planner · Crafted with care in Patna</span>
          <div className="flex flex-wrap gap-5">
            <a href={SITE.social.instagram} className="hover:text-ivory">Instagram</a>
            <a href={SITE.social.facebook} className="hover:text-ivory">Facebook</a>
            <a href={SITE.social.youtube} className="hover:text-ivory">YouTube</a>
            <a href={SITE.social.x} className="hover:text-ivory">X / Twitter</a>
          </div>
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy" className="hover:text-ivory">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-ivory">Terms &amp; Conditions</Link>
            <Link href="/faq" className="hover:text-ivory">FAQ</Link>
          </div>
          <a href="https://kynyx.com" target="_blank" rel="noopener" className="ml-auto text-ivory no-underline hover:text-ivory">
            Made with ❤️ by <span className="border-b border-champagne">Kynyx</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
