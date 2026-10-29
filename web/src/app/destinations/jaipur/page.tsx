import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PhotoToCome } from "@/components/Picture";

export const metadata: Metadata = {
  title: "Jaipur destination wedding — palaces, havelis & fort lawns",
  description:
    "Plan a wedding in Jaipur with Wedlock: best season October–March, 200–1,200 guests, venues, permits, local vendors and every guest arrival handled by our destination desk.",
};

const WA_MESSAGE = "Hi Wedlock! I'm interested in a wedding in Jaipur. Could you share venues and a budget?";

const FACTS = [
  ["Best season", "October – March"],
  ["Guest range", "200 – 1,200"],
  ["Book ahead", "9–14 months"],
  ["Planning fee", "[₹ PRICE] onwards"],
];

const PERKS = [
  "Baraat with elephants, horses or vintage cars",
  "Folk artists, Kalbeliya dancers and live Rajasthani music",
  "Rooms blocked close to the venue; airport pickups for all guests",
];

const VENUES = [
  { name: "[Palace hotel]", type: "Palace · up to [000] guests" },
  { name: "[Heritage haveli]", type: "Haveli · [000]" },
  { name: "[Fort lawns]", type: "Outdoor · [000]" },
  { name: "[Resort]", type: "Resort · [000]" },
  { name: "[Hotel ballroom]", type: "Ballroom · [000]" },
];

const DAYS = [
  { title: "Day 1 · Arrive", items: "Airport pickups and welcome hampers · lunch · Mehendi in the courtyard" },
  { title: "Day 2 · Celebrate", items: "Haldi by the pool · afternoon at leisure · Sangeet under the stars" },
  { title: "Day 3 · Wed", items: "Baraat · pheras at the mandap · reception dinner" },
];

const OTHERS = [
  { name: "Kerala", meta: "Backwaters · Sep–Mar · 60–300 guests" },
  { name: "Dubai", meta: "UAE · Nov–Mar · 100–1,000 guests" },
  { name: "Tuscany", meta: "Italy · May–Sep · 40–150 guests" },
];

const FAQS = [
  { q: "When is the best time for a Jaipur wedding?", a: "October to March, when days are pleasant and evenings are cool enough for outdoor events." },
  { q: "Can you handle permits for a baraat on the road?", a: "[Answer to be confirmed by Wedlock.]" },
  { q: "How do guests travel from Patna or Delhi?", a: "[Answer to be confirmed by Wedlock.]" },
];

export default function JaipurPage() {
  return (
    <PageShell active="destinations" waMessage={WA_MESSAGE}>
      {/* HERO */}
      <section className="container-x flex flex-col gap-6 pt-6 lg:pt-10">
        <nav aria-label="Breadcrumb" className="text-sm text-fern">
          <Link href="/" className="text-fern">Home</Link> / <Link href="/destinations" className="text-fern">Destinations</Link> / Jaipur
        </nav>
        <div className="relative flex min-h-[520px] items-end overflow-hidden rounded-2xl bg-placeholder p-3 sm:p-8 lg:h-[600px] lg:p-12">
          <span role="img" aria-label="Photo to come: Jaipur palace architecture" className="absolute left-4 top-4 rounded-[2px] bg-ivory/80 px-2.5 py-1 text-xs text-fern sm:left-5 sm:top-5">
            Photo to come · Jaipur palace
          </span>
          <div className="relative flex max-w-[600px] flex-col gap-2.5 rounded-lg bg-ivory px-6 py-7 sm:px-9 sm:py-8">
            <span className="eyebrow enter">Signature destination · Rajasthan</span>
            <h1 className="enter enter-delay-1 m-0 font-serif text-[clamp(44px,5.4vw,76px)] font-light leading-none tracking-[-0.02em]">A wedding in <em>Jaipur</em></h1>
            <p className="enter enter-delay-2 m-0 text-fern">Pink sandstone, elephant arches and royal scale — palaces, havelis and fort lawns for celebrations of every size.</p>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section aria-label="Jaipur at a glance" className="container-x pb-20 pt-6 lg:pb-24">
        <dl className="m-0 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {FACTS.map(([k, v]) => (
            <div key={k} className="rounded-lg bg-stone px-5 py-[18px]">
              <dt className="text-[13px] text-fern">{k}</dt>
              <dd className="m-0 mt-0.5 font-serif text-[22px] sm:text-2xl">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* WHY + VENUES */}
      <section className="container-x grid gap-14 pb-20 lg:grid-cols-2 lg:pb-28">
        <div className="flex flex-col gap-[18px]">
          <span className="eyebrow self-start">Why Jaipur</span>
          <h2 className="reveal m-0 font-serif text-[clamp(34px,3.6vw,52px)] font-light leading-[1.1]">Royal scale, <em>easy to reach</em></h2>
          <p className="m-0 text-fern">Jaipur suits large families: grand venues that seat hundreds, good hotels for every budget, and direct flights from most metros. Our destination desk handles venues, permits, local vendors and every guest arrival.</p>
          <ul className="m-0 flex list-none flex-col border-t border-line p-0">
            {PERKS.map((p) => <li key={p} className="border-b border-line py-3.5 text-base">{p}</li>)}
          </ul>
        </div>
        <div className="flex flex-col gap-[18px]">
          <span className="eyebrow self-start">Venues we know</span>
          <div className="flex flex-col border-t border-ink">
            {VENUES.map((v) => (
              <div key={v.name} className="flex justify-between gap-3 border-b border-line py-[18px]">
                <span className="font-serif text-[22px]">{v.name}</span>
                <span className="text-right text-sm text-fern">{v.type}</span>
              </div>
            ))}
          </div>
          <span className="text-[13px] text-fern">[Venue list to be confirmed by Wedlock.]</span>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="container-x pb-20 lg:pb-28">
        <div className="flex flex-col gap-8 rounded-2xl bg-ink px-7 py-14 text-ivory sm:px-14 sm:py-16">
          <h2 className="reveal m-0 font-serif text-[clamp(32px,3.4vw,48px)] font-light">A sample three days in Jaipur</h2>
          <div className="reveal-stagger grid gap-4 md:grid-cols-3">
            {DAYS.map((d) => (
              <div key={d.title} className="flex flex-col gap-3 rounded-[10px] bg-ink-2 p-[26px]">
                <span className="font-serif text-[26px]">{d.title}</span>
                <span className="text-[15px] text-mist">{d.items}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER DESTINATIONS */}
      <section className="bg-stone">
        <div className="container-x flex flex-col gap-8 py-20 lg:py-24">
          <div className="reveal flex flex-wrap items-end justify-between gap-4">
            <h2 className="m-0 font-serif text-[clamp(32px,3.4vw,48px)] font-light">Also consider</h2>
            <Link href="/destinations" className="btn-soft bg-ivory">All destinations →</Link>
          </div>
          <div className="reveal-stagger grid gap-4 md:grid-cols-3">
            {OTHERS.map((o) => (
              <Link key={o.name} href="/destinations" className="lift flex flex-col gap-2.5 rounded-[10px] no-underline">
                <PhotoToCome label={o.name} className="h-[240px] rounded-[10px]" />
                <span className="font-serif text-2xl">{o.name}</span>
                <span className="text-sm text-fern">{o.meta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="container-x grid items-start gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div className="flex flex-col gap-2.5">
          <h2 className="reveal m-0 mb-2.5 font-serif text-[clamp(34px,3.6vw,52px)] font-light leading-[1.1]">Jaipur questions</h2>
          {FAQS.map((f, i) => (
            <details key={f.q} open={i === 0} className="rounded-lg bg-stone px-6 py-5">
              <summary className="cursor-pointer font-serif text-[21px]">{f.q}</summary>
              <p className="m-0 mt-2.5 text-base text-fern">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="reveal flex flex-col gap-4 rounded-2xl bg-moss p-8 text-ivory sm:p-12">
          <h2 className="m-0 font-serif text-[clamp(32px,3.4vw,46px)] font-light leading-[1.1]">Plan your Jaipur wedding</h2>
          <span className="text-mist-2">Get venue options and a sample budget for Jaipur — free.</span>
          <Link href="/contact" className="self-start rounded-[2px] bg-ivory px-[30px] py-[17px] font-medium text-ink no-underline hover:text-moss">Get Jaipur options</Link>
        </div>
      </section>
    </PageShell>
  );
}
