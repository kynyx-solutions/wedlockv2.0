import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Picture } from "@/components/Picture";
import { PartnerForm } from "./PartnerForm";

export const metadata: Metadata = {
  title: "Partner with Wedlock — for vendors & venues",
  description:
    "Decorators, caterers, artists, photographers and venues: apply to join the Wedlock vendor network across 40+ cities. Apply, meet our team, start with a trial event.",
};

const WA_MESSAGE = "Hi Wedlock! I'm a vendor and would like to partner with Wedlock.";

const STATS = [
  ["650+", "celebrations"],
  ["40+", "cities"],
  ["3", "offices"],
];

const CATS = ["Décor & florals", "Catering", "Venues & hotels", "Photography & film", "Artists & DJs", "Dhol & bands", "Make-up artists", "Mehendi artists", "Invitations & print", "Return gifts", "Light & sound", "Transport"];

const STEPS = [
  ["Apply", "Share your work, city and price range using the form below."],
  ["Meet", "Our team reviews your portfolio and visits your studio or venue."],
  ["Work together", "Start with a trial event; strong partners join our regular network."],
];

export default function PartnerPage() {
  return (
    <PageShell active="none" waMessage={WA_MESSAGE}>
      {/* HERO */}
      <section className="container-x grid items-center gap-10 pb-20 pt-8 lg:grid-cols-2 lg:gap-14 lg:pb-24 lg:pt-12">
        <div className="flex flex-col gap-6">
          <nav aria-label="Breadcrumb" className="text-sm text-fern">
            <Link href="/" className="text-fern">Home</Link> / Partner with us
          </nav>
          <span className="eyebrow enter self-start">For vendors &amp; venues</span>
          <h1 className="enter enter-delay-1 m-0 font-serif text-[clamp(46px,5.6vw,80px)] font-light leading-[1.02] tracking-[-0.025em]">Grow with <em>Wedlock.</em></h1>
          <p className="enter enter-delay-2 m-0 text-[19px] text-fern">We work with decorators, caterers, artists, photographers and venues across 40+ cities. If you care about craft and keep your word on the day, we would like to meet you.</p>
          <div className="enter enter-delay-3 grid grid-cols-3 gap-3">
            {STATS.map(([n, l]) => (
              <div key={l} className="rounded-lg bg-stone p-[18px]">
                <div className="font-serif text-[32px] leading-none">{n}</div>
                <div className="text-[13px] text-fern">{l}</div>
              </div>
            ))}
          </div>
        </div>
        <Picture
          slug="decor-better-together"
          alt="A living green wall installation with a neon sign"
          sizes="(min-width: 1024px) 620px, 100vw"
          priority
          className="block h-[380px] w-full rounded-lg object-cover sm:h-[480px] lg:h-[560px]"
        />
      </section>

      {/* CATEGORIES */}
      <section className="bg-stone">
        <div className="container-x flex flex-col gap-10 py-20 lg:py-28">
          <h2 className="h2 reveal m-0">Who we work with</h2>
          <ul className="reveal m-0 flex list-none flex-wrap gap-2.5 p-0">
            {CATS.map((c) => <li key={c} className="rounded-[2px] bg-ivory px-[18px] py-3 text-base">{c}</li>)}
          </ul>
        </div>
      </section>

      {/* HOW */}
      <section className="container-x flex flex-col gap-10 py-20 lg:py-28">
        <h2 className="h2 reveal m-0">How partnering works</h2>
        <ol className="reveal-stagger m-0 grid list-none gap-4 p-0 md:grid-cols-3">
          {STEPS.map(([title, text], i) => (
            <li key={title} className="flex flex-col gap-2.5 rounded-[10px] bg-stone p-7">
              <span className="font-serif text-[40px] font-light leading-none text-gold">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-serif text-2xl">{title}</span>
              <span className="text-[15px] text-fern">{text}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* FORM */}
      <section id="apply" className="bg-ink text-ivory">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
          <div className="reveal flex flex-col gap-4">
            <h2 className="m-0 font-serif text-[clamp(36px,4vw,58px)] font-light leading-[1.05]">Apply to <em>partner</em></h2>
            <p className="m-0 text-mist">Applications go straight to our vendor team. We reply within [5 working days].</p>
          </div>
          <PartnerForm />
        </div>
      </section>
    </PageShell>
  );
}
