import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Picture, type MediaSlug } from "@/components/Picture";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Wedlock has planned 650+ celebrations since 2014. Born in Patna on the lineage of Eventoss, with teams in Patna, Ranchi and New Delhi and a destination desk across 40+ cities in 14 countries.",
};

const WA_MESSAGE = "Hi Wedlock! I was reading about your team and would like to know how you can help plan our wedding.";

const TIMELINE = [
  ["2014", "Founded in Patna on the lineage of Eventoss, the region’s leading marketing and events agency."],
  ["2021", "A run of Patna weddings builds our name for comfort matched with grandeur."],
  ["2023", "Our destination desk forms, taking celebrations beyond Bihar for the first time."],
  ["2024", "Ten years in — teams active in Patna, Ranchi and New Delhi."],
  ["Today", "650+ celebrations across 40+ cities and 14 countries."],
];

const VALUES = [
  ["01", "Family first, always", "Every plan begins by identifying the elders and their comfort. Indian families are the design brief."],
  ["02", "Craft over decoration", "Everything is prototyped, material-tested and rehearsed before it reaches your venue."],
  ["03", "Transparency as policy", "One portal shows every quote and every vendor. No hidden margins."],
  ["04", "Calm is a deliverable", "Our favourite review is the simplest: “we never worried once.”"],
];

const LEADERS: { name: string; role: string; note: string; img: MediaSlug; pos: string }[] = [
  { name: "Syed Aabish Hassan", role: "CEO & Founder", note: "Founder of Eventoss Entertainment, the agency Wedlock grew out of.", img: "team-aabish-hassan", pos: "50% 20%" },
  { name: "Rahul Ranjan", role: "Executive Director & Co-founder", note: "Co-founder of the Eventoss group.", img: "team-rahul-ranjan", pos: "50% 15%" },
  { name: "Aliwaris Khan", role: "Director — Events & Entertainment", note: "Heads events and entertainment for the Eventoss group.", img: "team-aliwaris-khan", pos: "50% 15%" },
];

const OFFICES = [
  ["Patna", "Headquarters", "208-A, Kaushalya Estate, Dak Bunglow Road"],
  ["Ranchi", "Regional office", "By appointment"],
  ["New Delhi", "North region studio", "By appointment"],
];

const LINEAGE = [
  ["Heritage", "Eventoss — the region’s leading marketing & events agency"],
  ["Styling", "An in-house styling studio with fabrication partners"],
  ["Production", "Light & sound design with broadcast-grade crews"],
  ["Talent", "Direct relationships with artist agencies & managements"],
];

export default function About() {
  return (
    <PageShell active="about" waMessage={WA_MESSAGE}>
      {/* HERO */}
      <section className="container-x flex flex-col gap-10 pb-16 pt-8 lg:pt-14">
        <nav aria-label="Breadcrumb" className="enter text-sm text-fern">
          <Link href="/" className="text-fern">Home</Link> / About us
        </nav>
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-10">
          <h1 className="enter-delay-1 m-0 font-serif text-[clamp(46px,6vw,84px)] font-light leading-[1.02] tracking-[-0.025em]">
            Since 2014.<br />650+ celebrations.<br /><em>One promise.</em>
          </h1>
          <p className="enter-delay-2 m-0 text-[19px] text-fern sm:text-xl">
            We exist so your family can be fully present. We absorb the logistics, the vendors and the weather — and turn each celebration into a splendid memoir.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Picture
            slug="floral-mandap"
            alt="A floral mandap of red gerberas with hanging crystal lights"
            sizes="(min-width: 1280px) 820px, (min-width: 768px) 66vw, 100vw"
            priority
            className="block h-[320px] w-full rounded-xl object-cover md:col-span-2 md:h-[460px]"
          />
          <div className="grid grid-cols-2 gap-4 md:min-h-[460px] md:grid-cols-1 md:grid-rows-2">
            <Picture
              slug="bride-phulkari-canopy"
              alt="A bride beneath a red canopy hung with golden latkans"
              sizes="(min-width: 1280px) 400px, (min-width: 768px) 33vw, 50vw"
              position="50% 20%"
              className="block h-[220px] w-full rounded-xl object-cover md:h-full"
            />
            <Picture
              slug="couple-bw-ankita-anunay"
              alt="A black-and-white portrait of a couple under fairy lights"
              sizes="(min-width: 1280px) 400px, (min-width: 768px) 33vw, 50vw"
              position="40% 25%"
              className="block h-[220px] w-full rounded-xl object-cover md:h-full"
            />
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="container-x grid items-center gap-12 pb-20 pt-4 lg:grid-cols-2 lg:gap-16 lg:pb-28 lg:pt-16">
        <div className="reveal flex flex-col gap-5">
          <span className="eyebrow">Our story</span>
          <h2 className="m-0 font-serif text-[clamp(34px,3.6vw,52px)] font-light leading-[1.1]">Born in Patna, <em>built on the lineage of Eventoss.</em></h2>
          <p className="m-0 text-fern">At Wedlock, we deeply appreciate the importance of this special journey. We began in Patna in 2014, carrying the production craft of Eventoss — the region’s leading marketing and events agency — into weddings. A run of Patna weddings built our name for comfort matched with grandeur.</p>
          <p className="m-0 text-fern">Today we are planners, stylists, carpenters, light designers, choreographers, travel agents and — when needed — crisis negotiators, with teams in Patna, Ranchi and New Delhi and a destination desk that has scouted 40+ cities in 14 countries.</p>
        </div>
        <figure className="reveal m-0 flex flex-col gap-6 rounded-xl bg-stone p-7 sm:p-10">
          <Picture
            slug="stage-floral"
            alt="An outdoor reception stage framed in greenery and white flowers at night"
            sizes="(min-width: 1024px) 540px, 100vw"
            className="block h-[280px] w-full rounded-[10px] object-cover"
          />
          <blockquote className="m-0 font-serif text-[26px] italic leading-[1.35] sm:text-[28px]">“We exist so your family can be fully present.”</blockquote>
          <figcaption className="text-[15px]">
            <strong className="font-medium">The Wedlock Atelier</strong><br />
            <span className="text-fern">Our promise to every family</span>
          </figcaption>
        </figure>
      </section>

      {/* TIMELINE */}
      <section className="bg-ink text-ivory">
        <div className="container-x flex flex-col gap-12 py-20 lg:py-28">
          <h2 className="reveal h2 m-0">A decade and more, <em>in brief</em></h2>
          <ol className="reveal-stagger m-0 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-5 sm:[&>:last-child]:col-span-2 lg:[&>:last-child]:col-span-1">
            {TIMELINE.map(([year, text]) => (
              <li key={year} className="flex flex-col gap-2.5 rounded-[10px] bg-ink-2 p-[26px]">
                <span className="font-serif text-4xl font-light">{year}</span>
                <span className="text-[15px] text-mist">{text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* VALUES */}
      <section className="container-x flex flex-col gap-12 py-20 lg:py-28">
        <h2 className="reveal h2 m-0 text-center">What we <em>stand for</em></h2>
        <div className="reveal-stagger grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map(([n, title, text]) => (
            <article key={n} className="flex flex-col gap-3 rounded-[10px] bg-stone p-7 sm:p-8">
              <span className="font-serif text-[44px] font-light leading-none text-gold">{n}</span>
              <h3 className="m-0 font-serif text-[26px] font-normal">{title}</h3>
              <p className="m-0 text-base text-fern">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* LEADERSHIP */}
      <section id="leadership" className="bg-sage">
        <div className="container-x flex flex-col gap-12 py-20 lg:py-28">
          <div className="reveal grid items-end gap-8 lg:grid-cols-2">
            <h2 className="h2 m-0">Leadership</h2>
            <p className="m-0 text-olive">A hands-on team of planners, stylists and producers across Patna, Ranchi and New Delhi.</p>
          </div>
          <div className="reveal-stagger grid gap-5 md:grid-cols-3">
            {LEADERS.map((l) => (
              <article key={l.name} className="flex flex-col overflow-hidden rounded-xl bg-ivory">
                <Picture
                  slug={l.img}
                  alt={`Portrait of ${l.name}`}
                  sizes="(min-width: 1024px) 400px, (min-width: 768px) 33vw, 100vw"
                  position={l.pos}
                  className="block h-[400px] w-full object-cover sm:h-[440px]"
                />
                <div className="flex flex-col gap-1 px-6 pb-[26px] pt-[22px]">
                  <span className="font-serif text-[26px]">{l.name}</span>
                  <span className="text-sm font-semibold uppercase tracking-[0.08em] text-gold">{l.role}</span>
                  <span className="text-sm text-fern">{l.note}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* OFFICES */}
      <section className="container-x flex flex-col gap-10 py-20 lg:py-28">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <h2 className="h2 m-0">Three offices, <em>one team</em></h2>
          <Link href="/contact" className="btn-soft bg-stone">Visit a studio →</Link>
        </div>
        <div className="reveal-stagger grid gap-4 lg:grid-cols-3">
          {OFFICES.map(([city, tag, address]) => (
            <div key={city} className="flex justify-between gap-4 rounded-[10px] bg-stone p-[26px]">
              <div className="flex flex-col gap-1">
                <span className="font-serif text-[26px]">{city}</span>
                <span className="text-sm text-fern">{tag}</span>
              </div>
              <span className="text-right text-sm text-fern">{address}</span>
            </div>
          ))}
        </div>
      </section>

      {/* LINEAGE */}
      <section className="container-x pb-20 lg:pb-28">
        <div className="reveal flex flex-col gap-8 rounded-2xl bg-stone p-7 sm:p-14">
          <h2 className="m-0 font-serif text-[clamp(32px,3.4vw,48px)] font-light leading-[1.1]">What the Eventoss lineage gives you</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {LINEAGE.map(([k, v]) => (
              <div key={k} className="flex flex-col gap-1.5 rounded-lg bg-ivory p-6">
                <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-gold">{k}</span>
                <span className="font-serif text-[22px] leading-[1.25]">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SPLIT */}
      <section className="reveal-stagger container-x grid gap-5 pb-20 lg:grid-cols-2 lg:pb-28">
        <Link href="/contact" className="lift flex flex-col gap-3 rounded-xl bg-moss p-8 text-ivory no-underline hover:text-ivory sm:p-12">
          <span className="font-serif text-4xl font-light">Planning a celebration?</span>
          <span className="text-mist-2">Book your first meeting with our wedding consultants — free.</span>
          <span className="mt-3 font-medium">Get in touch →</span>
        </Link>
        <Link href="/careers" className="lift flex flex-col gap-3 rounded-xl bg-sage p-8 no-underline hover:text-ink sm:p-12">
          <span className="font-serif text-4xl font-light">Want to plan with us?</span>
          <span className="text-olive">We’re growing our teams in Patna, Ranchi and New Delhi.</span>
          <span className="mt-3 font-medium">See open roles →</span>
        </Link>
      </section>
    </PageShell>
  );
}
