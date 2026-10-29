import Link from "next/link";
import { NAV, SITE, waLink, type NavKey } from "@/lib/site";
import { Logo } from "./Logo";

export function Header({ active, waMessage }: { active: NavKey; waMessage: string }) {
  return (
    <div className="bg-ivory">
      <div className="hidden bg-ink text-[13px] text-mist-2 md:block">
        <div className="container-x flex flex-wrap items-center justify-between gap-x-6 gap-y-1.5 py-2.5">
          <span>Wedding planners since 2014 · Patna · Ranchi · New Delhi · Destinations across India &amp; abroad</span>
          <div className="flex gap-5 text-ivory">
            <a href={SITE.phoneHref} className="no-underline hover:text-mist-2">{SITE.phone}</a>
            <a href={waLink(waMessage)} target="_blank" rel="noopener" className="no-underline hover:text-mist-2">WhatsApp us</a>
            <Link href="/wedding-budget-calculator" className="no-underline hover:text-mist-2">Budget calculator</Link>
            <Link href="/careers" className="no-underline hover:text-mist-2">Careers</Link>
          </div>
        </div>
      </div>

      <header className="container-x flex items-center justify-between gap-6 py-3 lg:py-[18px]">
        <Link href="/" aria-label="Wedlock home" className="no-underline hover:text-ink">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden flex-wrap gap-x-7 text-[13px] font-medium uppercase tracking-[0.14em] lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              aria-current={item.key === active ? "page" : undefined}
              className={`border-b pb-2.5 pt-3 no-underline ${item.key === active ? "border-champagne" : "border-transparent"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="btn btn-dark hidden !px-[26px] !py-[15px] lg:inline-flex">
          Book a consultation
        </Link>

        {/* Mobile menu: native <details>, no JavaScript */}
        <details className="group relative lg:hidden">
          <summary aria-label="Open menu" className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full bg-stone">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
              <path d="M4 8h16M4 16h16" className="group-open:hidden" />
              <path d="M6 6l12 12M18 6L6 18" className="hidden group-open:block" />
            </svg>
          </summary>
          <nav aria-label="Main" className="absolute right-0 top-14 z-40 flex w-[min(86vw,340px)] flex-col rounded-lg bg-ivory p-3 shadow-[0_18px_44px_rgba(35,39,31,0.18)]">
            {NAV.map((item) => (
              <Link key={item.key} href={item.href} aria-current={item.key === active ? "page" : undefined} className="rounded px-3 py-3 font-serif text-[22px] no-underline hover:bg-stone">
                {item.label}
              </Link>
            ))}
            <Link href="/wedding-budget-calculator" className="rounded px-3 py-3 font-serif text-[22px] no-underline hover:bg-stone">Budget calculator</Link>
            <Link href="/careers" className="rounded px-3 py-3 font-serif text-[22px] no-underline hover:bg-stone">Careers</Link>
            <Link href="/contact" className="btn btn-dark mt-2">Book a consultation</Link>
          </nav>
        </details>
      </header>
    </div>
  );
}
