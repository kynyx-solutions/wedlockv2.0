import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { waLink } from "@/lib/site";
import { FaqBrowser } from "./FaqBrowser";
import { FAQ_GROUPS } from "./faqs";

export const metadata: Metadata = {
  title: "Wedding planning FAQ — planning, pricing, destinations",
  description:
    "Straight answers from Wedlock on booking timelines, fees and payments, destination weddings, guest travel and what happens on the wedding day.",
};

const WA_MESSAGE = "Hi Wedlock! I have a question about planning my wedding.";

// Answers still awaiting the client (they start with "[") stay out of the structured data.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_GROUPS.flatMap((g) => g.items)
    .filter((i) => !i.a.startsWith("["))
    .map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
};

export default function FaqPage() {
  return (
    <PageShell active="contact" waMessage={WA_MESSAGE}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />

      <section className="container-x flex flex-col gap-7 pb-7 pt-8 lg:pt-12">
        <nav aria-label="Breadcrumb" className="text-sm text-fern">
          <Link href="/" className="text-fern">Home</Link> / FAQ
        </nav>
        <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-10">
          <h1 className="enter m-0 font-serif text-[clamp(46px,6vw,84px)] font-light leading-[1.02] tracking-[-0.025em]">Questions families <em>ask us most</em></h1>
          <p className="enter enter-delay-1 m-0 text-lg text-fern sm:text-xl">Straight answers on planning, pricing, destinations and the wedding day. Can’t find yours? A planner will answer on WhatsApp.</p>
        </div>
      </section>

      <FaqBrowser groups={FAQ_GROUPS} />

      <section className="container-x pb-20 lg:pb-28">
        <div className="reveal flex flex-wrap items-center justify-between gap-8 rounded-2xl bg-sage p-7 sm:p-14">
          <div className="flex max-w-[640px] flex-col gap-2.5">
            <h2 className="m-0 font-serif text-[clamp(32px,3.6vw,52px)] font-light leading-[1.08]">Still have a question?</h2>
            <span className="text-olive">Ask a planner — on WhatsApp, on a call, or at our Patna, Ranchi or Delhi studio.</span>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <a href={waLink(WA_MESSAGE)} target="_blank" rel="noopener" className="rounded-[2px] bg-ink px-7 py-[17px] font-medium text-ivory no-underline hover:bg-moss hover:text-ivory">WhatsApp a planner</a>
            <Link href="/contact" className="rounded-[2px] bg-ivory px-7 py-[17px] font-medium no-underline">Contact us</Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
