import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Calculator } from "./Calculator";

export const metadata: Metadata = {
  title: "Wedding budget calculator",
  description:
    "Estimate your wedding budget in a minute: city, guests, functions, venue and décor. An honest range built from 2026 rates by Wedlock, wedding planners since 2014.",
};

const HOW = [
  ["Real 2026 rates", "Per-plate catering, venue and décor rates from weddings we produced this season, by city."],
  ["A range, not a promise", "Dates, muhurat demand and your exact menu move the number. We show ±15% so there are no surprises."],
  ["Your data stays yours", "Nothing is saved unless you ask for the breakdown. We never share your numbers with vendors."],
];

const RELATED = [
  ["Next step", "Compare our three packages", "See packages", "/services"],
  ["Planning guide", "The 12-month wedding timeline", "Read the guide", "/journal"],
  ["Questions", "How our fee and payments work", "Read the FAQ", "/faq"],
];

export default function BudgetCalculatorPage() {
  return (
    <PageShell active="none" waMessage="Hi Wedlock! I used your budget calculator and have a few questions.">
      <section className="container-x flex flex-col gap-5 pb-10 pt-6 lg:pt-12">
        <nav aria-label="Breadcrumb" className="text-sm text-fern"><Link href="/">Home</Link> / Budget calculator</nav>
        <div className="flex items-center gap-3.5">
          <span lang="hi" className="font-deva text-xl text-gold">हिसाब-किताब</span>
          <span aria-hidden="true" className="h-px w-10 bg-champagne" />
          <span className="eyebrow">Wedding budget calculator</span>
        </div>
        <h1 className="m-0 max-w-[14em] font-serif text-[clamp(44px,5.6vw,84px)] font-light leading-[1.02] tracking-[-0.025em]">
          What will our wedding <em>really cost?</em>
        </h1>
        <p className="m-0 max-w-[36em] text-[19px] text-fern">
          Six quick choices give you an honest range, built from what weddings like yours cost us to produce in 2026. Get the line-by-line breakdown on WhatsApp — free, no call unless you ask.
        </p>
      </section>

      <Calculator />

      <section className="bg-sage">
        <div className="container-x flex flex-col gap-10 py-20 lg:py-28">
          <h2 className="h2 m-0 max-w-[16em]">How we arrive at <em>these numbers</em></h2>
          <div className="grid gap-4 md:grid-cols-3">
            {HOW.map(([title, text], i) => (
              <article key={title} className="flex flex-col gap-2.5 rounded-[10px] bg-ivory p-7">
                <span className="font-serif text-lg text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="m-0 font-serif text-2xl font-normal">{title}</h3>
                <p className="m-0 text-[15px] text-fern">{text}</p>
              </article>
            ))}
          </div>
          <span className="text-[13px] text-olive">Rates shown are sample values until Wedlock confirms its 2026 rates.</span>
        </div>
      </section>

      <section className="container-x grid gap-5 py-20 md:grid-cols-3 lg:py-28">
        {RELATED.map(([eyebrow, title, cta, href]) => (
          <Link key={title} href={href} className="flex flex-col gap-2 rounded-xl bg-stone p-8 no-underline">
            <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-gold">{eyebrow}</span>
            <span className="font-serif text-[28px] leading-tight">{title}</span>
            <span className="font-medium">{cta} →</span>
          </Link>
        ))}
      </section>
    </PageShell>
  );
}
