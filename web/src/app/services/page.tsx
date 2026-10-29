import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Picture, type MediaSlug } from "@/components/Picture";
import { waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wedding planning services & packages",
  description:
    "Full Planning, Partial Planning and Wedding Week packages, plus eight in-house specialist teams: décor, entertainment, hospitality, artist management, production, invitations and bridal make-up.",
};

const WA_MESSAGE = "Hi Wedlock! I'd like to know more about your planning packages — Full Planning, Partial Planning and Wedding Week.";

const ON_PAGE = [
  ["#packages", "Planning packages"],
  ["#compare", "Compare"],
  ["#specialist", "Specialist services"],
  ["#ceremonies", "Ceremonies"],
  ["#addons", "Add-ons"],
];

const PACKAGES = [
  { ahead: "Book 2–3 months ahead", name: "Wedding Week", text: "You’ve booked your vendors. We take over six weeks out, build the run sheets and manage every event on site.", ideal: "families who planned it themselves", featured: false },
  { ahead: "Book 9–12 months ahead", name: "Full Planning", text: "From the first budget to the final vidaai. Venue, design, every vendor, every guest — one lead planner and a full team.", ideal: "multi-day and destination weddings", featured: true },
  { ahead: "Book 4–8 months ahead", name: "Partial Planning", text: "You have the venue and a few vendors. We complete the line-up, refine the design and run the wedding week.", ideal: "couples halfway there", featured: false },
];

const ROWS = [
  ["Dedicated lead planner", "✓ From day one", "✓ From booking", "✓ Last 6 weeks"],
  ["Budget planning & tracking", "✓", "Review", "—"],
  ["Venue search & site visits", "✓", "Add-on", "—"],
  ["Design concept for every event", "✓", "Refinement", "—"],
  ["Vendor sourcing & negotiation", "All vendors", "Remaining vendors", "Confirmations"],
  ["Guest list, RSVPs & invitations", "✓", "✓", "Add-on"],
  ["Travel, stays & hospitality desk", "✓", "✓", "Add-on"],
  ["Private online planning portal", "✓", "✓", "—"],
  ["Rehearsals & run sheets", "✓", "✓", "✓"],
  ["On-site team during events", "[N]+ crew", "[N]+ crew", "[N]+ crew"],
  ["Planning meetings", "Unlimited", "[N]", "[N]"],
  ["Post-wedding vendor settlement", "✓", "✓", "✓"],
];

const SPECIALIST: { n: string; title: string; text: string; tags: string[]; img: MediaSlug; alt: string; pos: string }[] = [
  { n: "01", title: "Planning & curation", text: "Budgets, timelines, venue shortlists and vendor curation — the invisible architecture of a great celebration.", tags: ["Celebration director", "Budget tracking", "Venue scouting"], img: "haldi-couple-seated", alt: "A couple seated at their haldi", pos: "50% 30%" },
  { n: "02", title: "Thematic décor & styling", text: "Florals, mandaps, lighting and environments from one creative brief — prototyped before a single flower is cut.", tags: ["Moodboards", "3D walkthroughs", "Florals"], img: "floral-mandap", alt: "A red floral mandap with crystal lights", pos: "50% 50%" },
  { n: "03", title: "Entertainment", text: "Sufi ensembles to DJs, illusionists to dhol troupes — programmed to the emotional arc of your evening.", tags: ["Live acts", "Choreography", "Show-calling"], img: "sangeet-dance", alt: "Guests dancing at a sangeet", pos: "50% 40%" },
  { n: "04", title: "Hospitality & guest experience", text: "Room blocks, airport assistance, welcome hampers, RSVP desks and care for elders — every guest personally hosted.", tags: ["Travel desk", "Hampers", "On-ground teams"], img: "crystal-walkway", alt: "A reception walkway under crystal globes", pos: "50% 40%" },
  { n: "05", title: "Artist & celebrity management", text: "Bollywood vocalists, anchors and international acts — negotiated, contracted and briefed.", tags: ["Contracts & riders", "Travel", "Rehearsals"], img: "couple-bw-ankita-anunay", alt: "A couple under fairy lights in black and white", pos: "40% 20%" },
  { n: "06", title: "Production & technical", text: "Staging, light and sound, LED, power, rain plans and run-of-show — the discipline that makes magic look effortless.", tags: ["Rigging plots", "Broadcast crews", "Command centre"], img: "stage-srestha-vishal", alt: "A floral stage with lanterns and lighting rigs", pos: "50% 50%" },
  { n: "07", title: "Personalised invitations", text: "Invitation cards, welcome signage and monograms designed for your wedding.", tags: ["Invitation cards", "Signage", "Monograms"], img: "entry-ankita-anunay", alt: "A personalised welcome board for Ankita and Anunay", pos: "20% 50%" },
  { n: "08", title: "Bridal make-up", text: "Our bridal make-up specialists for the bride and her family, on every wedding day.", tags: ["Bride", "Family", "Touch-ups"], img: "bride-closeup", alt: "Close-up of a bride’s make-up and maang tikka", pos: "45% 50%" },
];

const CEREMONIES = ["Roka", "Engagement", "Tilak", "Mehendi", "Haldi", "Sangeet", "Cocktail night", "Baraat", "Pheras / Vows", "Reception", "Post-wedding brunch"];

const TRADITIONS = ["Hindu", "Sikh — Anand Karaj", "Muslim — Nikah", "Christian", "Jain", "Parsi", "Interfaith", "Court marriage + reception"];

const ADDONS = [
  ["Return gifts", "Curated return gifts for every guest — sourced, personally packed and handed out at the venue."],
  ["Trousseau & shagun packing", "Decorated trays and baskets for shagun, trousseau and family exchanges."],
  ["Welcome hampers & room drops", "Personalised hampers and daily itinerary notes in every guest room."],
  ["Live streaming", "Multi-camera stream of key ceremonies for family who can’t travel."],
  ["Pandit & ritual arrangements", "Pandit booking, puja samagri and muhurat coordination."],
  ["Baraat & grand entries", "Vintage car, horse, dhol, flower shower and couple entry concepts."],
  ["Special effects", "Cold pyro, confetti and fireworks where permitted."],
  ["Kids’ zone & elder care", "A supervised kids’ area; seating, transport and a help desk for elders."],
  ["Valet & security", "Valet parking, guest list at the gate and venue security."],
  ["Same-day highlight film", "A short film edited and played at the reception."],
  ["Wedding website & RSVP app", "A private site for guests with schedules and maps."],
  ["Honeymoon planning", "Curated itineraries with our travel partners."],
  ["Sustainable wedding", "Low-waste décor, local flowers and food donation."],
  ["Choreography classes", "Sangeet rehearsals for family and friends."],
  ["Pre-wedding shoot", "Locations, permits, styling and scheduling."],
  ["Wedding insurance", "Cover for cancellations and weather, via partners."],
];

export default function Services() {
  return (
    <PageShell active="services" waMessage={WA_MESSAGE}>
      {/* HERO */}
      <section className="container-x flex flex-col gap-8 pb-16 pt-8 lg:pb-20 lg:pt-14">
        <nav aria-label="Breadcrumb" className="enter text-sm text-fern">
          <Link href="/" className="text-fern">Home</Link> / Services
        </nav>
        <div className="grid items-end gap-8 lg:grid-cols-2 lg:gap-10">
          <h1 className="enter-delay-1 m-0 font-serif text-[clamp(46px,6vw,84px)] font-light leading-[1.02] tracking-[-0.025em]">
            Everything your wedding needs, <em>under one roof.</em>
          </h1>
          <p className="enter-delay-2 m-0 text-[19px] text-fern sm:text-xl">
            Thematic décor, personalised invitation cards, entertainment national and international, guest hospitality, bridal make-up and stage design — specialist teams for every part of your wedding, and one celebration director who brings them together.
          </p>
        </div>
        <nav aria-label="On this page" className="enter-delay-3 flex flex-wrap gap-2.5">
          {ON_PAGE.map(([href, label], i) => (
            <a
              key={href}
              href={href}
              className={`rounded-[2px] px-5 py-3 text-[15px] no-underline ${i === 0 ? "bg-ink text-ivory hover:text-ivory" : "bg-stone"}`}
            >
              {label}
            </a>
          ))}
        </nav>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="scroll-mt-24 bg-sage">
        <div className="container-x flex flex-col gap-12 py-20 lg:py-28">
          <h2 className="reveal h2 m-0">Planning packages</h2>
          <div className="reveal-stagger grid gap-5 lg:grid-cols-3">
            {PACKAGES.map((p) => (
              <article key={p.name} className={`flex flex-col gap-4 rounded p-8 sm:p-9 ${p.featured ? "bg-moss text-ivory" : "bg-ivory"}`}>
                {p.featured ? (
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-[13px] font-medium text-mist-2">{p.ahead}</span>
                    <span className="rounded-[2px] bg-ivory px-3 py-1.5 text-xs font-medium text-ink">Most chosen</span>
                  </div>
                ) : (
                  <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-gold">{p.ahead}</span>
                )}
                <h3 className="m-0 font-serif text-[32px] font-normal">{p.name}</h3>
                <p className={`m-0 text-base ${p.featured ? "text-mist-2" : "text-fern"}`}>{p.text}</p>
                <span className="font-serif text-[34px]">
                  [₹ PRICE]<span className={`font-sans text-sm ${p.featured ? "text-mist-2" : "text-fern"}`}> onwards + GST</span>
                </span>
                <span className={`flex-grow text-sm ${p.featured ? "text-mist-2" : "text-fern"}`}>Ideal for: {p.ideal}</span>
                <Link
                  href="/contact"
                  className={`rounded-[2px] p-[15px] text-center font-medium text-ink no-underline ${p.featured ? "bg-ivory" : "bg-stone"}`}
                >
                  Enquire
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARE */}
      <section id="compare" className="container-x flex scroll-mt-24 flex-col gap-8 py-20 lg:py-28">
        <h2 className="reveal h2 m-0">Compare packages</h2>
        <div className="reveal overflow-x-auto rounded bg-stone p-2" role="region" aria-label="Package comparison table" tabIndex={0}>
          <table className="w-full min-w-[760px] border-collapse text-[15px]">
            <thead>
              <tr>
                <th scope="col" className="w-2/5 px-6 py-5 text-left font-medium">What’s included</th>
                <th scope="col" className="px-6 py-5 text-left font-serif text-xl font-normal">Full</th>
                <th scope="col" className="px-6 py-5 text-left font-serif text-xl font-normal">Partial</th>
                <th scope="col" className="px-6 py-5 text-left font-serif text-xl font-normal">Wedding Week</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([label, full, partial, week]) => (
                <tr key={label} className="border-t-4 border-stone bg-ivory">
                  <th scope="row" className="px-6 py-4 text-left font-normal">{label}</th>
                  <td className="px-6 py-4">{full}</td>
                  <td className="px-6 py-4">{partial}</td>
                  <td className="px-6 py-4">{week}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* SPECIALIST */}
      <section id="specialist" className="scroll-mt-24 bg-stone">
        <div className="container-x flex flex-col gap-12 py-20 lg:py-28">
          <div className="reveal grid items-end gap-8 lg:grid-cols-2">
            <h2 className="h2 m-0">Eight specialist teams, <em>in-house</em></h2>
            <p className="m-0 text-fern">Included in Full Planning, or booked on their own. Every team works from one creative brief.</p>
          </div>
          <div className="reveal-stagger grid gap-5 lg:grid-cols-2">
            {SPECIALIST.map((s) => (
              <article key={s.n} className="grid gap-5 rounded bg-ivory p-5 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-6">
                <Picture
                  slug={s.img}
                  alt={s.alt}
                  sizes="(min-width: 640px) 180px, 100vw"
                  position={s.pos}
                  className="block h-[220px] w-full rounded-lg object-cover sm:h-full sm:min-h-[220px]"
                />
                <div className="flex flex-col gap-2.5 sm:py-2 sm:pr-2">
                  <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-gold">{s.n}</span>
                  <h3 className="m-0 font-serif text-[26px] font-normal leading-[1.15]">{s.title}</h3>
                  <p className="m-0 text-[15px] text-fern">{s.text}</p>
                  <ul className="m-0 flex list-none flex-wrap gap-1.5 p-0">
                    {s.tags.map((t) => (
                      <li key={t} className="rounded-[2px] bg-stone px-3 py-1 text-[13px]">{t}</li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap gap-x-5 gap-y-1">
                    <Link href="/services" className="py-2 text-[15px] font-medium"><span className="underline-grow">Learn more</span> →</Link>
                    <a
                      href={waLink(`Hi Wedlock! I'd like to know more about your ${s.title.toLowerCase()} service for our wedding.`)}
                      target="_blank"
                      rel="noopener"
                      className="py-2 text-[15px] font-medium text-moss"
                    >
                      <span className="underline-grow">Ask on WhatsApp</span> →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CEREMONIES & TRADITIONS */}
      <section id="ceremonies" className="reveal-stagger container-x grid scroll-mt-24 gap-8 py-20 lg:grid-cols-2 lg:py-28">
        <div className="flex flex-col gap-5 rounded bg-ink p-8 text-ivory sm:p-12">
          <h2 className="m-0 font-serif text-[clamp(32px,3.4vw,46px)] font-light leading-[1.1]">Every ceremony</h2>
          <p className="m-0 text-mist">Each event gets its own mood, menu and décor — tied together as one story.</p>
          <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
            {CEREMONIES.map((c) => (
              <li key={c} className="rounded-[2px] bg-ink-2 px-4 py-2.5 text-[15px]">{c}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5 rounded bg-sage p-8 sm:p-12">
          <h2 className="m-0 font-serif text-[clamp(32px,3.4vw,46px)] font-light leading-[1.1]">Every tradition</h2>
          <p className="m-0 text-olive">Our planners work with your family priest, granthi, qazi or pastor to get every ritual right.</p>
          <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
            {TRADITIONS.map((t) => (
              <li key={t} className="rounded-[2px] bg-ivory px-4 py-2.5 text-[15px]">{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ADD-ONS */}
      <section id="addons" className="container-x flex scroll-mt-24 flex-col gap-8 pb-20 lg:pb-28">
        <h2 className="reveal h2 m-0">Add-ons</h2>
        <div className="reveal-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ADDONS.map(([title, text]) => (
            <div key={title} className="flex flex-col gap-1.5 rounded-lg border border-line p-6">
              <span className="font-serif text-[22px]">{title}</span>
              <span className="text-[15px] text-fern">{text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-20 lg:pb-28">
        <div className="reveal flex flex-wrap items-center justify-between gap-8 rounded-lg bg-moss px-7 py-12 text-ivory sm:px-14 sm:py-16">
          <div className="flex max-w-[640px] flex-col gap-2.5">
            <h2 className="m-0 font-serif text-[clamp(32px,3.6vw,52px)] font-light leading-[1.08]">Not sure which package fits?</h2>
            <span className="text-mist-2">Tell us about your wedding and we’ll recommend one — free, in a 30-minute call.</span>
          </div>
          <Link href="/contact" className="rounded-[2px] bg-ivory px-8 py-[18px] font-medium text-ink no-underline">Book a free consultation</Link>
        </div>
      </section>
    </PageShell>
  );
}
