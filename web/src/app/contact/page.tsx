import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { SITE, waLink } from "@/lib/site";
import { EnquiryForm } from "./EnquiryForm";

export const metadata: Metadata = {
  title: "Contact — book a free wedding consultation",
  description:
    "Tell us about your wedding and a senior Wedlock planner will call you within 24 hours to set up a free consultation — at our Patna, Ranchi or New Delhi studio, your home or on video.",
};

const WA_MESSAGE = "Hi Wedlock! I'd like to book a free consultation for my wedding. Date: ___ · City: ___ · Guests: ___";

const OFFICES = [
  { city: "Patna", tag: "Headquarters", address: SITE.address, phone: SITE.phone },
  { city: "Ranchi", tag: "Regional office", address: "Visits by appointment", phone: SITE.phone },
  { city: "New Delhi", tag: "North region studio", address: "Visits by appointment", phone: SITE.phone },
  { city: "Destination desk", tag: "India & abroad", address: "Udaipur · Jaipur · Goa · Kerala · Bali · Phuket · Tuscany · Dubai", phone: SITE.email },
];

const FAQS = [
  ["How far ahead should we book?", "For Full Planning, 9–12 months is ideal; for destination weddings, 12–14. Peak muhurat dates in Nov–Feb go first, so share your date early."],
  ["Is the first consultation really free?", "Yes. 30–60 minutes with a senior planner, no obligation."],
  ["How is your fee calculated?", "A fixed planning fee based on events, guests and location — never a hidden percentage of vendor bills."],
  ["Can we bring our own vendors?", "Of course. We brief and coordinate them alongside our partners."],
  ["Do you plan weddings for NRI families?", "Yes — video recces, single point of contact and full guest travel management."],
  ["What is your payment schedule?", "[Booking amount on signing, staged payments, final balance before the wedding week.]"],
  ["What if we need to postpone?", "[Your postponement and cancellation policy, in plain words.]"],
  ["How many weddings do you take on one date?", "[N] per planning team, so your lead planner is always present."],
];

const icon = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, "aria-hidden": true } as const;

const CHANNELS = [
  { title: "Call us", sub: SITE.phone, href: SITE.phoneHref, svg: <svg {...icon}><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg> },
  { title: "WhatsApp", sub: "Chat with the desk", href: waLink(WA_MESSAGE), external: true, svg: <svg {...icon}><path d="M4 20l1.3-3.9A8 8 0 1 1 8 19z" /></svg> },
  { title: "Email", sub: SITE.email, href: `mailto:${SITE.email}`, svg: <svg {...icon}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg> },
  { title: "Visit a studio", sub: "Patna · Ranchi · New Delhi", href: "#offices", svg: <svg {...icon}><path d="M12 21s-7-6.3-7-12a7 7 0 0 1 14 0c0 5.7-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" /></svg> },
];

export default function Contact() {
  return (
    <PageShell active="contact" waMessage={WA_MESSAGE}>
      {/* HERO + FORM */}
      <section className="container-x grid items-start gap-12 pb-20 pt-8 lg:grid-cols-2 lg:pb-28 lg:pt-12">
        <div className="flex flex-col gap-6">
          <nav aria-label="Breadcrumb" className="enter text-sm text-fern">
            <Link href="/" className="text-fern">Home</Link> / Contact
          </nav>
          <h1 className="h1 enter-delay-1 m-0 text-[clamp(46px,5.6vw,80px)] leading-[1.02]">Let’s plan something <em>lovely.</em></h1>
          <p className="enter-delay-2 m-0 text-[19px] text-fern">Tell us a little about your wedding. A senior planner will call you within 24 hours to set up a free consultation — at our studio, your home or on video.</p>
          <div className="enter-delay-3 grid grid-cols-2 gap-3">
            {CHANNELS.map((c) => (
              <a
                key={c.title}
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener" } : {})}
                className="lift flex min-w-0 flex-col gap-1.5 rounded-lg bg-stone p-4 no-underline sm:p-5"
              >
                {c.svg}
                <span className="font-medium">{c.title}</span>
                <span className="break-words text-sm text-fern">{c.sub}</span>
              </a>
            ))}
          </div>
          <span className="text-sm text-fern">Desk hours: Mon–Sat, 10am–8pm IST · Also on +91 70615 28401 and +91 70615 28404</span>
        </div>
        <EnquiryForm />
      </section>

      {/* OFFICES */}
      <section id="offices" className="scroll-mt-6 bg-stone">
        <div className="container-x flex flex-col gap-10 py-20 lg:py-28">
          <h2 className="reveal h2 m-0">Our studios</h2>
          <div className="reveal grid gap-5 lg:grid-cols-2">
            <div className="flex min-h-[280px] items-end rounded bg-placeholder p-5 sm:min-h-[520px]">
              <span className="text-[13px] text-ink">Map · Patna HQ, Dak Bunglow Road (25.5941° N, 85.1376° E)</span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {OFFICES.map((o) => (
                <div key={o.city} className="flex flex-col gap-1 rounded-lg bg-ivory p-[22px]">
                  <h3 className="m-0 font-serif text-[22px] font-normal">{o.city}</h3>
                  <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-gold">{o.tag}</span>
                  <span className="text-sm text-fern">{o.address}<br />{o.phone}</span>
                  <a href="#" className="mt-1.5 self-start text-sm font-medium"><span className="underline-grow">Directions</span> →</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-x grid gap-12 py-20 lg:grid-cols-3 lg:py-28">
        <div className="reveal flex flex-col gap-3.5">
          <h2 className="h2 m-0">Frequently asked</h2>
          <p className="m-0 text-fern">
            Still curious? <a href={waLink(WA_MESSAGE)} target="_blank" rel="noopener">WhatsApp us</a> — a planner, not a bot, will answer.
          </p>
        </div>
        <div className="reveal flex min-w-0 flex-col gap-2.5 lg:col-span-2">
          {FAQS.map(([q, a], i) => (
            <details key={q} open={i === 0} className="rounded-lg bg-stone px-[26px] py-[22px]">
              <summary className="cursor-pointer list-none font-serif text-[21px]">{q}</summary>
              <p className="mb-0 mt-2.5 text-base text-fern">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* VENDOR */}
      <section className="container-x pb-20 lg:pb-28">
        <div className="reveal flex flex-wrap items-center justify-between gap-8 rounded-lg bg-ink p-7 text-ivory sm:p-14">
          <div className="flex max-w-[640px] flex-col gap-2.5">
            <h2 className="m-0 font-serif text-[clamp(30px,3.2vw,44px)] font-light leading-[1.1]">Are you a vendor or venue?</h2>
            <span className="text-mist">Join the Wedlock vendor network — decorators, caterers, artists and venues across 40+ cities.</span>
          </div>
          <Link href="/partner" className="rounded-[2px] bg-ivory px-[30px] py-[17px] font-medium text-ink no-underline transition-colors duration-200 hover:text-moss">Become a partner</Link>
        </div>
      </section>
    </PageShell>
  );
}
