import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Picture, PhotoToCome } from "@/components/Picture";

export const metadata: Metadata = {
  title: "Destination weddings",
  description:
    "Destination weddings planned by Wedlock’s destination desk — 40+ cities in 14 countries, from Rajasthan’s palaces and Goa’s beaches to Bali, Phuket, Tuscany and Dubai. Guests, travel, rooms and rituals handled.",
};

const WA_MESSAGE = "Hi Wedlock! I'm interested in a destination wedding. Could you share destination options and a sample budget?";

const FACTS = [
  ["Guests", "40 – 1,200"],
  ["Book ahead", "9–14 months"],
  ["Planning fee", "[₹ PRICE]+"],
];

const INCLUDED = [
  "Destination shortlist with costed comparisons",
  "Recce visits with you and your family",
  "Venue contracts and room-block negotiation",
  "Local permits, licences and police permissions",
  "Guest flights, trains and charter coordination",
  "Airport and station pickups for every guest",
  "Room allocation and check-in desk",
  "Welcome hampers and printed itineraries",
  "Local décor, catering and artist sourcing",
  "Travel and stay for your family priest",
  "Weather backups for every outdoor event",
  "Day-after checkout and vendor settlement",
];

const PLACES = [
  ["Jaipur", "Rajasthan · Oct–Mar · 200–1,200 guests"],
  ["Kerala", "Backwaters · Sep–Mar · 60–300 guests"],
  ["Bali", "Indonesia · Apr–Oct · 40–200 guests"],
  ["Dubai", "UAE · Nov–Mar · 100–1,000 guests"],
];

const DAYS = [
  { title: "Day 1 · Arrive", items: [["11:00", "Guest arrivals & welcome hampers"], ["14:00", "Welcome lunch by the lake"], ["17:00", "Mehendi in the courtyard"]] },
  { title: "Day 2 · Celebrate", items: [["10:00", "Haldi on the lawns"], ["13:00", "Pool-side brunch"], ["20:00", "Sangeet night"]] },
  { title: "Day 3 · Wed", items: [["17:00", "Baraat"], ["19:30", "Pheras at the mandap"], ["21:30", "Reception dinner"]] },
];

const PROCESS = [
  ["12–14 months", "Destination brief", "Budget, guest count and three costed options."],
  ["10–12 months", "Recce & booking", "Visit shortlisted venues together, lock dates."],
  ["6–9 months", "Design & vendors", "Local and travelling vendors, contracts signed."],
  ["2–4 months", "Guest logistics", "Travel, rooms, invitations and RSVPs."],
  ["Wedding week", "On-site team", "Our crew arrives 3 days early and runs everything."],
];

const FAQS: [string, string | null][] = [
  ["Is a destination wedding more expensive?", "Often not. A smaller guest list and venue packages can offset travel. We share a side-by-side budget for home city vs destination in your first proposal."],
  ["Do you handle guest flights and rooms?", null],
  ["Can our family pandit travel with us?", null],
  ["What about weather and backup venues?", null],
  ["How do international weddings work for NRI families?", null],
];

export default function DestinationWeddings() {
  return (
    <PageShell active="services" waMessage={WA_MESSAGE}>
      {/* HERO */}
      <section className="container-x flex flex-col gap-8 pb-20 pt-8 lg:pb-24 lg:pt-12">
        <nav aria-label="Breadcrumb" className="enter text-sm text-fern">
          <Link href="/" className="text-fern">Home</Link> / <Link href="/services" className="text-fern">Services</Link> / Destination weddings
        </nav>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-6">
            <span className="enter eyebrow">Specialist service 01</span>
            <h1 className="enter-delay-1 m-0 font-serif text-[clamp(46px,5.6vw,80px)] font-light leading-[1.02] tracking-[-0.025em]">
              Destination weddings, <em>without the distance.</em>
            </h1>
            <p className="enter-delay-2 m-0 text-[19px] text-fern">
              Somewhere unforgettable is already waiting. Our destination desk has scouted 40+ cities in 14 countries — Rajasthan’s palaces, Goa’s beaches, Kerala’s backwaters, Bali, Phuket, Tuscany and Dubai — and moves your whole wedding, your guests and your traditions with you.
            </p>
            <dl className="enter-delay-3 m-0 grid grid-cols-3 gap-2 sm:gap-3">
              {FACTS.map(([k, v]) => (
                <div key={k} className="rounded-lg bg-stone p-3 sm:p-[18px]">
                  <dt className="text-[13px] text-fern">{k}</dt>
                  <dd className="m-0 font-serif text-lg leading-snug sm:text-[22px]">{v}</dd>
                </div>
              ))}
            </dl>
            <div className="enter-delay-3 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-[2px] bg-moss px-[30px] py-[17px] font-medium text-ivory no-underline transition-colors duration-200 hover:bg-ink hover:text-ivory">Plan my destination wedding</Link>
              <a href="#" className="rounded-[2px] bg-stone px-[30px] py-[17px] font-medium no-underline">Download brochure (PDF)</a>
            </div>
          </div>
          <Picture
            slug="crystal-walkway"
            alt="A wedding walkway under crystal globes and cascading greenery"
            sizes="(min-width: 1024px) 600px, 100vw"
            priority
            className="block h-[440px] w-full rounded-lg object-cover lg:h-[600px]"
          />
        </div>
      </section>

      {/* INCLUDED */}
      <section className="bg-stone">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-3 lg:py-28">
          <div className="reveal flex flex-col gap-4">
            <h2 className="m-0 font-serif text-[clamp(36px,4vw,54px)] font-light leading-[1.08]">What’s included</h2>
            <p className="m-0 text-fern">Everything in Full Planning, plus the logistics that only a destination wedding needs.</p>
          </div>
          <ul className="reveal-stagger m-0 grid min-w-0 list-none gap-3 p-0 sm:grid-cols-2 lg:col-span-2">
            {INCLUDED.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-lg bg-ivory px-5 py-[18px]">
                <span aria-hidden="true" className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-moss text-[13px] text-ivory">✓</span>
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="container-x flex flex-col gap-10 py-20 lg:py-28">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <h2 className="m-0 font-serif text-[clamp(36px,4vw,54px)] font-light leading-[1.08]">Popular <em>destinations</em></h2>
          <Link href="/destinations" className="btn-soft bg-stone">All destinations →</Link>
        </div>
        <div className="reveal-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PLACES.map(([name, note]) => (
            <Link key={name} href="/destinations" className="flex flex-col gap-3 no-underline">
              <PhotoToCome label={name} className="lift h-[300px] rounded-[10px]" />
              <span className="font-serif text-2xl"><span className="underline-grow">{name}</span></span>
              <span className="text-sm text-fern">{note}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ITINERARY */}
      <section className="container-x pb-20 lg:pb-28">
        <div className="reveal flex flex-col gap-10 rounded-lg bg-ink px-7 py-14 text-ivory sm:px-14 sm:py-[72px]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="m-0 font-serif text-[clamp(34px,3.6vw,52px)] font-light leading-[1.1]">A sample three-day itinerary</h2>
            <span className="text-mist">Every itinerary is built around your muhurat</span>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {DAYS.map((d) => (
              <div key={d.title} className="flex flex-col gap-4 rounded-[10px] bg-ink-2 p-7">
                <h3 className="m-0 font-serif text-[28px] font-normal">{d.title}</h3>
                <ol className="m-0 flex list-none flex-col gap-3 p-0">
                  {d.items.map(([time, what]) => (
                    <li key={time} className="grid grid-cols-[76px_minmax(0,1fr)] gap-3 border-t border-fern pt-3">
                      <span className="text-sm text-mist">{time}</span>
                      <span className="text-base">{what}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-x flex flex-col gap-10 pb-20 lg:pb-28">
        <h2 className="reveal m-0 font-serif text-[clamp(36px,4vw,54px)] font-light leading-[1.08]">How a destination wedding comes together</h2>
        <ol className="reveal-stagger m-0 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-5 sm:[&>:last-child]:col-span-2 lg:[&>:last-child]:col-span-1">
          {PROCESS.map(([when, title, text]) => (
            <li key={title} className="flex flex-col gap-2.5 rounded-[10px] bg-stone p-[26px]">
              <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-gold">{when}</span>
              <span className="font-serif text-[22px]">{title}</span>
              <span className="text-[15px] text-fern">{text}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* STORY + QUOTE */}
      <section className="reveal-stagger container-x grid gap-5 pb-20 lg:grid-cols-2 lg:pb-28">
        <Link href="/weddings" className="lift flex flex-col overflow-hidden rounded bg-sage no-underline hover:text-ink">
          <PhotoToCome label="the Udaipur wedding" className="h-[320px]" />
          <div className="flex flex-col gap-2 px-7 pb-8 pt-7 sm:px-8">
            <span className="text-[13px] font-medium text-olive">Case study</span>
            <span className="font-serif text-[28px] leading-tight">Aisha &amp; Arjun — three days on the lake of palaces</span>
            <span className="font-medium">Read the story →</span>
          </div>
        </Link>
        <figure className="m-0 flex flex-col justify-center gap-6 rounded bg-stone p-8 sm:p-12">
          <blockquote className="m-0 font-serif text-[28px] italic leading-[1.35] sm:text-[30px]">“We never worried once.”</blockquote>
          <figcaption className="text-[15px]">
            <strong className="font-medium">Aisha &amp; Arjun Malhotra</strong><br />
            <span className="text-fern">Destination wedding · Udaipur · 320 guests</span>
          </figcaption>
        </figure>
      </section>

      {/* FAQ */}
      <section className="container-x grid gap-12 pb-20 lg:grid-cols-3 lg:pb-28">
        <h2 className="reveal m-0 font-serif text-[clamp(36px,4vw,54px)] font-light leading-[1.08]">Destination wedding questions</h2>
        <div className="reveal flex min-w-0 flex-col gap-2.5 lg:col-span-2">
          {FAQS.map(([q, a], i) => (
            <details key={q} open={i === 0} className="group rounded-lg bg-stone px-[26px] py-[22px]">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-[21px]">
                {q}
                <span aria-hidden="true" className="font-sans text-xl leading-none text-fern transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mb-0 mt-2.5 text-base text-fern">{a ?? "[Answer to come.]"}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-20 lg:pb-28">
        <div className="reveal flex flex-wrap items-center justify-between gap-8 rounded-lg bg-moss px-7 py-12 text-ivory sm:px-14 sm:py-16">
          <div className="flex max-w-[640px] flex-col gap-2.5">
            <h2 className="m-0 font-serif text-[clamp(32px,3.6vw,52px)] font-light leading-[1.08]">Where will you say <em>yes?</em></h2>
            <span className="text-mist-2">Get three destination ideas and a sample budget — free.</span>
          </div>
          <Link href="/contact" className="rounded-[2px] bg-ivory px-8 py-[18px] font-medium text-ink no-underline">Get my destination ideas</Link>
        </div>
      </section>
    </PageShell>
  );
}
