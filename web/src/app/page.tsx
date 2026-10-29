import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Picture, PhotoToCome, type MediaSlug } from "@/components/Picture";
import { QuickEnquiry } from "@/components/QuickEnquiry";
import { SITE, waLink } from "@/lib/site";

const WA_MESSAGE = "Hi Wedlock! I'm planning my wedding and would love a free consultation. Please call me back.";

const CITIES = ["Patna", "Ranchi", "New Delhi", "Udaipur", "Jaipur", "Goa", "Bali", "Dubai"];

const WHY = [
  ["One team, end to end", "Planning, design, production and hospitality work together from day one."],
  ["Radical transparency", "One shared portal shows every quote, vendor and decision. No hidden margins."],
  ["Designed from a blank page", "Each celebration starts fresh, then is prototyped until the family agrees."],
  ["Hospitality in our bones", "Elders come first, and every guest is personally hosted."],
  ["Family first, always", "Plans begin by identifying the elders and their comfort. Your family is the brief."],
  ["Calm is a deliverable", "Rain plans, backups and rehearsals — so you never worry once."],
];

const STATS = [
  ["2014", "First Patna wedding"],
  ["650+", "Celebrations produced"],
  ["40+", "Cities scouted & served"],
  ["14", "Countries"],
  ["3", "Offices — Patna, Ranchi, Delhi"],
];

const SERVICES: { title: string; text: string; href: string; img?: MediaSlug; alt: string; pos?: string }[] = [
  { title: "Planning & curation", text: "Budgets, timelines, venue shortlists and vendor curation.", href: "/services", img: "haldi-couple-seated", alt: "A couple seated at their haldi", pos: "50% 30%" },
  { title: "Thematic décor & styling", text: "Florals, mandaps, stages and lighting, prototyped before install.", href: "/services", img: "floral-mandap", alt: "A red floral mandap with crystal lights" },
  { title: "Entertainment", text: "National and international acts, DJs, dhol and choreography.", href: "/services", img: "sangeet-dance", alt: "Guests dancing at a sangeet", pos: "50% 40%" },
  { title: "Hospitality & guests", text: "Room blocks, airport assistance, hampers and RSVP desks.", href: "/services", img: "crystal-walkway", alt: "A reception walkway under crystal globes and greenery", pos: "50% 40%" },
  { title: "Destination weddings", text: "40+ cities and 14 countries scouted by our destination desk.", href: "/services/destination-weddings", alt: "A destination wedding venue" },
  { title: "Personalised invitations", text: "Invitation cards, signage and monograms made for you.", href: "/services", img: "welcome-sign-srestha-vishal", alt: "An arched welcome sign for Srestha and Vishal", pos: "50% 40%" },
  { title: "Bridal make-up", text: "Our bridal team for the bride and her family.", href: "/services", img: "bride-closeup", alt: "Close-up of a bride’s make-up and maang tikka", pos: "45% 50%" },
  { title: "Stage & production", text: "Stage design and setup, light, sound and run-of-show.", href: "/services", img: "stage-srestha-vishal", alt: "A floral wedding stage with lanterns" },
];

const DESTINATIONS = [
  ["Jaipur", "Rajasthan", "Oct–Mar", "/destinations/jaipur"],
  ["Kerala", "Backwaters", "Sep–Mar", "/destinations"],
  ["Bali", "Indonesia", "Apr–Oct", "/destinations"],
  ["Phuket", "Thailand", "Nov–Apr", "/destinations"],
  ["Tuscany", "Italy", "May–Sep", "/destinations"],
  ["Dubai", "UAE", "Nov–Mar", "/destinations"],
];

const PACKAGES = [
  { name: "Wedding Week", text: "You planned it. We produce and execute every event.", items: ["Cue sheets & on-day command centre", "Stage, sound & light production", "Floor team at every venue"], featured: false },
  { name: "Full Planning", text: "Plan · Design · Produce · Execute — everything, roka to vidaai.", items: ["Dedicated celebration director from day one", "Thematic décor & personalised invitations", "Guest hospitality, travel & rooming", "Entertainment & bridal make-up teams"], featured: true },
  { name: "Partial Planning", text: "You’ve started. We design and produce the rest.", items: ["Remaining vendor curation", "Décor & styling design", "Guest & timeline management"], featured: false },
];

const STEPS = [
  ["Plan", "Book your first meeting with our consultants. One conversation becomes a blueprint."],
  ["Design", "Moodboards, palettes and venues — prototyped until the family agrees."],
  ["Produce", "Vendors contracted, artists rehearsed, everything built off-stage."],
  ["Execute", "Cue sheets, a command centre and a floor team. You relax."],
];

const REVIEWS = [
  ["We never worried once.", "Aisha & Arjun Malhotra", "Destination wedding · Udaipur"],
  ["[Testimonial from Ankita & Anunay.]", "Ankita & Anunay", "Reception · May 2023"],
  ["[Testimonial from Srestha & Vishal.]", "Srestha & Vishal", "Wedding · Feb 2023"],
  ["[Testimonial from a parent about guest hospitality.]", "[Name], [relation]", "Patna · [Year]"],
];

const POSTS: { cat: string; read: string; title: string; img?: MediaSlug }[] = [
  { cat: "Planning guide", read: "10 min", title: "The destination wedding timeline: a 12-month blueprint" },
  { cat: "Trends", read: "6 min", title: "Five décor directions defining 2026 celebrations", img: "decor-better-together" },
  { cat: "Planning guide", read: "6 min", title: "Rain plans that don’t look like regret", img: "crystal-walkway" },
];

function SectionHead({ title, link, linkLabel, soft = "bg-stone", eyebrow }: { title: React.ReactNode; link: string; linkLabel: string; soft?: string; eyebrow?: string }) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-6">
      <div className="reveal flex max-w-[640px] flex-col gap-3.5">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h2 className="h2 m-0">{title}</h2>
      </div>
      <Link href={link} className={`btn-soft ${soft}`}>{linkLabel} →</Link>
    </div>
  );
}

export default function Home() {
  return (
    <PageShell active="home" waMessage={WA_MESSAGE}>
      {/* HERO */}
      <section className="container-x grid items-center gap-10 pb-16 pt-6 lg:grid-cols-2 lg:gap-14 lg:pb-20 lg:pt-12">
        <div className="flex flex-col gap-6">
          <div className="enter flex items-center gap-3.5">
            <span lang="hi" className="font-deva text-xl text-gold">शुभ विवाह</span>
            <span aria-hidden="true" className="h-px w-10 bg-champagne" />
            <span className="eyebrow">Wedding planners since 2014</span>
          </div>
          <h1 className="h1 enter-delay-1 m-0">Your dream wedding,<br /><em>splendidly done.</em></h1>
          <p className="enter-delay-2 m-0 max-w-[30em] text-[19px] text-fern">
            Striking the perfect harmony between comfort and grandeur. From Patna to palaces abroad, one Wedlock team plans, designs and runs every ceremony — so your family can be fully present.
          </p>
          <div className="enter-delay-2 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-dark">Book a free consultation</Link>
            <Link href="/weddings" className="btn btn-outline">Explore our weddings</Link>
          </div>
          <figure className="enter-delay-3 m-0 mt-2 flex flex-col gap-1 border-l border-champagne pl-[18px]">
            <blockquote className="m-0 font-serif text-[22px] italic leading-snug">“We never worried once.”</blockquote>
            <figcaption className="text-xs font-semibold uppercase tracking-[0.16em] text-fern">
              Aisha &amp; Arjun Malhotra · <span className="font-normal normal-case tracking-normal">650+ celebrations since our first Patna wedding</span>
            </figcaption>
          </figure>
        </div>
        <div className="relative min-h-[420px] lg:min-h-[640px]">
          <Picture
            slug="couple-night-lights"
            alt="Ankita and Anunay at their reception under strings of warm lights"
            sizes="(min-width: 1024px) 620px, 100vw"
            priority
            position="62% 30%"
            className="absolute inset-0 h-full w-full rounded-lg object-cover"
          />
          <div className="enter-delay-3 absolute bottom-6 left-3 flex flex-col gap-0.5 rounded-lg bg-ivory px-6 py-5 shadow-[0_18px_44px_rgba(35,39,31,0.14)] lg:-left-7 lg:bottom-12">
            <span className="text-[13px] text-fern">Ankita &amp; Anunay · Reception</span>
            <span className="font-serif text-2xl">20 May 2023</span>
          </div>
          <div className="absolute right-4 top-4 hidden h-[136px] w-[136px] flex-col items-center justify-center rounded-full bg-ink text-center text-ivory outline outline-1 -outline-offset-8 outline-champagne sm:flex lg:right-6 lg:top-6">
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-light">Est.</span>
            <span className="font-serif text-[40px] font-light leading-none">2014</span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-light">Patna</span>
          </div>
        </div>
      </section>

      {/* CITIES */}
      <section aria-label="Where we plan" className="border-y border-line">
        <div className="container-x flex flex-wrap items-center justify-between gap-x-10 gap-y-3 py-7">
          <span className="text-[13px] font-medium uppercase tracking-[0.16em] text-fern">Celebrations produced in</span>
          {CITIES.map((c) => <span key={c} className="font-serif text-[22px] text-fern">{c}</span>)}
        </div>
      </section>

      {/* WHY */}
      <section className="container-x flex flex-col gap-12 py-20 lg:py-28">
        <div className="reveal grid items-end gap-8 lg:grid-cols-2">
          <h2 className="h2 m-0">Families don’t hire us for events. <em>They hire us for peace of mind.</em></h2>
          <p className="m-0 text-fern">For over a decade we have executed some of the most splendid weddings of the region. Built on the lineage of Eventoss, the region’s leading marketing and events agency, we bring production muscle with a family’s warmth.</p>
        </div>
        <div className="reveal-stagger grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY.map(([title, text], i) => (
            <article key={title} className="flex flex-col gap-3 rounded-[10px] bg-stone p-7 sm:p-[30px]">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ivory font-serif text-lg">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="m-0 font-serif text-[26px] font-normal">{title}</h3>
              <p className="m-0 text-base text-fern">{text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section aria-label="Wedlock in numbers" className="container-x pb-20 lg:pb-28">
        <div className="reveal grid grid-cols-2 gap-8 rounded-2xl bg-ink p-8 text-ivory sm:p-14 lg:grid-cols-5 [&>:last-child]:col-span-2 lg:[&>:last-child]:col-span-1">
          {STATS.map(([n, label]) => (
            <div key={label}>
              <div className="font-serif text-[44px] font-light leading-none sm:text-[56px]">{n}</div>
              <div className="mt-2 text-[15px] text-mist">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-sage">
        <div className="container-x flex flex-col gap-12 py-20 lg:py-28">
          <SectionHead eyebrow="Services" title={<>Everything a wedding needs, <em>under one roof</em></>} link="/services" linkLabel="All services" soft="bg-ivory" />
          <div className="reveal-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s, i) => (
              <Link key={s.title} href={s.href} className="lift zoom flex flex-col overflow-hidden rounded-[10px] bg-ivory no-underline hover:text-ink">
                {s.img ? (
                  <Picture slug={s.img} alt={s.alt} sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw" position={s.pos} className="block h-[170px] w-full object-cover" />
                ) : (
                  <PhotoToCome label="destination venue" className="h-[170px]" />
                )}
                <div className="flex flex-grow flex-col gap-2 px-6 pb-6 pt-5">
                  <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-gold">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-serif text-2xl leading-tight">{s.title}</span>
                  <span className="flex-grow text-[15px] text-fern">{s.text}</span>
                  <span className="text-sm font-medium">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section className="container-x flex flex-col gap-10 py-20 lg:py-28">
        <SectionHead eyebrow="Destination weddings" title={<>Somewhere unforgettable <em>is already waiting</em></>} link="/destinations" linkLabel="All destinations" />
        <div className="reveal-stagger grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map(([name, kind, season, href]) => (
            <Link key={name} href={href} className="lift relative flex h-[320px] items-end overflow-hidden rounded-xl bg-placeholder p-5 no-underline hover:text-ink sm:h-[380px]">
              <span className="absolute left-5 top-5 rounded-[2px] bg-ivory/80 px-2.5 py-1 text-xs text-fern">Photo to come · {name}</span>
              <div className="relative flex w-full items-center justify-between gap-3 rounded-lg bg-ivory px-5 py-4">
                <div className="flex flex-col">
                  <span className="font-serif text-2xl leading-tight">{name}</span>
                  <span className="text-sm text-fern">{kind} · Best {season}</span>
                </div>
                <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-full bg-moss text-ivory">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED WEDDINGS */}
      <section className="bg-stone">
        <div className="container-x flex flex-col gap-10 py-20 lg:py-28">
          <SectionHead title={<>Real couples, <em>real families</em></>} link="/weddings" linkLabel="View all weddings" soft="bg-ivory" />
          <div className="reveal-stagger grid gap-5 lg:grid-cols-3 lg:[&>:last-child]:col-span-2">
            <Link href="/weddings/ankita-anunay" className="lift zoom grid overflow-hidden rounded-xl bg-ivory no-underline hover:text-ink md:grid-cols-2 lg:col-span-2">
              <Picture slug="entry-ankita-anunay" alt="Ankita and Anunay’s welcome board on a walkway of gold frames and fairy lights" sizes="(min-width: 1024px) 420px, (min-width: 768px) 50vw, 100vw" className="block h-full min-h-[320px] w-full object-cover md:min-h-[420px]" />
              <div className="flex flex-col justify-center gap-3.5 p-7 sm:p-9">
                <span className="self-start rounded-[2px] bg-sage px-3 py-1.5 text-[13px] font-medium">Featured · Reception</span>
                <span className="font-serif text-[34px] leading-tight">Ankita &amp; Anunay</span>
                <span className="text-fern">“All you need is love” — a reception walk of gold frames, crystal strands and a black-and-white chevron floor that carried straight onto the sangeet stage.</span>
                <span className="text-sm text-fern">20 May 2023 · [Venue, City]</span>
                <span className="font-medium">Read the story →</span>
              </div>
            </Link>
            {[
              { slug: "stage-srestha-vishal" as const, alt: "Srestha and Vishal’s floral wedding stage with a white sofa and lanterns", meta: "Wedding · 17 Feb 2023", name: "Srestha & Vishal", text: "A wall of white blooms, arched windows and an S·V monogram.", href: "/weddings/srestha-vishal" },
              { slug: "haldi-couple" as const, alt: "A couple in yellow at their haldi wearing rose and mogra garlands", meta: "Haldi · [Year]", name: "[Couple] & [Couple]", text: "Marigold, mogra and a sunshine-yellow stage.", href: "/weddings", pos: "50% 25%" },
              { slug: "sangeet-dance" as const, alt: "Guests dancing on a chevron dance floor at a sangeet", meta: "Sangeet · 2023", name: "Ankita & Anunay", text: "Hanging greens, mirror discs and a full dance floor.", href: "/weddings/ankita-anunay", wide: true },
            ].map((w) => (
              <Link key={w.meta} href={w.href} className="lift zoom flex flex-col overflow-hidden rounded-xl bg-ivory no-underline hover:text-ink">
                <Picture slug={w.slug} alt={w.alt} sizes={w.wide ? "(min-width: 1024px) 820px, 100vw" : "(min-width: 1024px) 400px, 100vw"} position={w.pos} className="block h-[300px] w-full object-cover" />
                <div className="flex flex-col gap-1.5 px-7 pb-7 pt-6">
                  <span className="text-[13px] text-fern">{w.meta}</span>
                  <span className="font-serif text-2xl">{w.name}</span>
                  <span className="text-[15px] text-fern">{w.text}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="container-x flex flex-col gap-12 py-20 lg:py-28">
        <div className="reveal flex flex-col items-center gap-3.5 text-center">
          <h2 className="h2 m-0">Pick the help <em>you</em> need</h2>
          <p className="m-0 max-w-[34em] text-fern">Every package starts with a free first meeting with our wedding consultants. One shared portal shows every quote and vendor — no hidden margins.</p>
        </div>
        <div className="reveal-stagger grid gap-5 lg:grid-cols-3">
          {PACKAGES.map((p) => (
            <article key={p.name} className={`flex flex-col gap-4 rounded-xl p-8 sm:p-9 ${p.featured ? "bg-moss text-ivory" : "bg-stone"}`}>
              <div className="flex items-center justify-between gap-3">
                <h3 className="m-0 font-serif text-[30px] font-normal">{p.name}</h3>
                {p.featured && <span className="rounded-[2px] bg-ivory px-3 py-1.5 text-xs font-medium text-ink">Most chosen</span>}
              </div>
              <p className={`m-0 text-base ${p.featured ? "text-mist-2" : "text-fern"}`}>{p.text}</p>
              <span className="font-serif text-[34px]">[₹ PRICE]<span className={`font-sans text-sm ${p.featured ? "text-mist-2" : "text-fern"}`}> onwards</span></span>
              <ul className="m-0 flex flex-grow list-none flex-col gap-2.5 p-0 text-[15px]">
                {p.items.map((it) => <li key={it}>✓ {it}</li>)}
              </ul>
              <Link href="/services" className="rounded-[2px] bg-ivory p-[15px] text-center font-medium text-ink no-underline">See details</Link>
            </article>
          ))}
        </div>
      </section>

      {/* BUDGET CALCULATOR */}
      <section aria-label="Budget calculator" className="container-x pb-20 lg:pb-28">
        <div className="reveal grid items-center gap-10 rounded-2xl bg-sage p-7 sm:p-14 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <span className="eyebrow !text-olive">Budget calculator</span>
            <h2 className="m-0 font-serif text-[clamp(32px,3.6vw,52px)] font-light leading-[1.08]">What will our wedding <em>cost?</em></h2>
            <p className="m-0 text-olive">Pick your city, guests and functions. See an honest range in a minute, built from 2026 rates — then get the line-by-line breakdown on WhatsApp.</p>
            <Link href="/wedding-budget-calculator" className="btn btn-dark self-start">Estimate my budget</Link>
          </div>
          <Link href="/wedding-budget-calculator" className="lift flex flex-col gap-3.5 rounded-xl bg-ink p-8 text-ivory no-underline hover:text-ivory">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-light">For example</span>
            <span className="text-[15px] text-mist">Patna · 400 guests · haldi, mehendi, sangeet, wedding, reception · premium décor</span>
            <span className="font-serif text-[46px] font-light leading-none">[₹ low] – [₹ high]</span>
            <span className="flex flex-col gap-2 border-t border-[#3E4438] pt-3.5 text-sm">
              <span className="flex justify-between"><span>Food &amp; drinks</span><span className="text-mist-2">largest share</span></span>
              <span className="flex justify-between"><span>Décor &amp; lighting</span><span className="text-mist-2">second</span></span>
              <span className="flex justify-between"><span>Venues, photo, music</span><span className="text-mist-2">the rest</span></span>
            </span>
            <span className="font-medium">Try it with your numbers →</span>
          </Link>
        </div>
      </section>

      {/* PROCESS */}
      <section className="container-x pb-20 lg:pb-28">
        <div className="reveal flex flex-col gap-12 rounded-2xl bg-ink px-7 py-14 text-ivory sm:px-14 sm:py-[72px]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="m-0 font-serif text-[clamp(32px,3.6vw,52px)] font-light leading-[1.1]">How it works</h2>
            <span className="text-mist">Plan · Design · Produce · Execute</span>
          </div>
          <ol className="m-0 grid list-none gap-8 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([title, text], i) => (
              <li key={title} className="flex flex-col gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#8E9784] font-serif">{i + 1}</span>
                <span className="font-serif text-[26px]">{title}</span>
                <span className="text-[15px] text-mist">{text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-x flex flex-col gap-10 pb-20 lg:pb-28">
        <div className="reveal flex flex-wrap items-end justify-between gap-6">
          <h2 className="h2 m-0">Love notes <em>from our families</em></h2>
          <a href={SITE.social.youtube} className="underline-grow text-fern">Watch our films on YouTube →</a>
        </div>
        <div className="reveal-stagger grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <a href={SITE.social.youtube} className="zoom relative flex min-h-[420px] items-center justify-center overflow-hidden rounded-xl no-underline md:col-span-2 lg:col-span-1 lg:row-span-2">
            <Picture slug="bride-red-veil" alt="A bride smiling beneath her red veil" sizes="(min-width: 1024px) 400px, 100vw" position="68% 30%" className="absolute inset-0 h-full w-full object-cover" />
            <span aria-hidden="true" className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full bg-ivory">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#23271F"><path d="M8 5v14l11-7z" /></svg>
            </span>
            <span className="absolute bottom-[18px] left-5 rounded-[2px] bg-ivory px-3 py-2 text-sm text-ink">Wedlock wedding films</span>
          </a>
          {REVIEWS.map(([quote, who, where]) => (
            <figure key={who} className="m-0 flex flex-col gap-3.5 rounded-[10px] bg-stone p-7">
              <blockquote className="m-0 font-serif text-[21px] leading-snug">“{quote}”</blockquote>
              <figcaption className="flex flex-col text-sm"><strong className="font-medium">{who}</strong><span className="text-fern">{where}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* JOURNAL */}
      <section className="bg-stone">
        <div className="container-x flex flex-col gap-10 py-20 lg:py-28">
          <SectionHead title={<>Notes from <em>the celebration desk</em></>} link="/journal" linkLabel="All articles" soft="bg-ivory" />
          <div className="reveal-stagger grid gap-5 md:grid-cols-3">
            {POSTS.map((p) => (
              <Link key={p.title} href="/journal" className="zoom flex flex-col gap-3 no-underline">
                {p.img ? (
                  <div className="overflow-hidden rounded-[10px]">
                    <Picture slug={p.img} alt="" sizes="(min-width: 768px) 400px, 100vw" className="block h-[240px] w-full object-cover" />
                  </div>
                ) : (
                  <PhotoToCome label="destination timeline" className="h-[240px] rounded-[10px]" />
                )}
                <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-gold">{p.cat} · {p.read}</span>
                <span className="font-serif text-2xl leading-tight">{p.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20 lg:py-28">
        <div className="reveal grid items-center gap-12 rounded-2xl bg-sage p-7 sm:p-14 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="m-0 font-serif text-[clamp(36px,4vw,60px)] font-light leading-[1.05]">Let’s <em>celebrate.</em></h2>
            <p className="m-0 text-fern">Book your first meeting with our wedding consultants — free. Tell us the occasion; we’ll handle the magic.</p>
            <div className="flex flex-wrap gap-2.5 text-[15px]">
              <a href={SITE.phoneHref} className="rounded-[2px] bg-ivory px-[18px] py-3 no-underline">Call {SITE.phone}</a>
              <a href={waLink(WA_MESSAGE)} target="_blank" rel="noopener" className="rounded-[2px] bg-ivory px-[18px] py-3 no-underline">WhatsApp</a>
            </div>
          </div>
          <QuickEnquiry />
        </div>
      </section>
    </PageShell>
  );
}
