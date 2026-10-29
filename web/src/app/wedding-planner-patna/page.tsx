import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Picture, type MediaSlug } from "@/components/Picture";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wedding planner in Patna — our home city since 2014",
  description:
    "Wedlock was born in Patna. Our home-city team knows the venues, caterers, décor houses and families — planning Patna weddings from intimate pheras to grand receptions since 2014.",
};

const WA_MESSAGE = "Hi Wedlock! I'm planning my wedding in Patna and would love a free consultation.";

const WHY = [
  { n: "01", title: "Our home city", text: "Wedlock began here in 2014. Our largest team and studio are in Patna." },
  { n: "02", title: "Local vendor network", text: "Caterers, décor houses, artists and photographers we have worked with for years." },
  { n: "03", title: "Guests from everywhere", text: "Travel, rooms and pickups for families arriving from across Bihar, India and abroad." },
  { n: "04", title: "Eventoss production", text: "Stage, light and sound from the region’s leading events agency." },
];

const VENUES = [
  { name: "[Venue name]", type: "Banquet · up to [000] guests" },
  { name: "[Venue name]", type: "Hotel ballroom · [000]" },
  { name: "[Venue name]", type: "Lawn · [000]" },
  { name: "[Venue name]", type: "Banquet · [000]" },
  { name: "[Venue name]", type: "Heritage property · [000]" },
  { name: "[Venue name]", type: "Resort · [000]" },
];

const WEDDINGS: { slug: MediaSlug; alt: string; pos?: string; meta: string; name: string; href: string }[] = [
  { slug: "couple-night-lights", alt: "Ankita and Anunay at their reception", pos: "62% 30%", meta: "Reception · 20 May 2023", name: "Ankita & Anunay", href: "/weddings/ankita-anunay" },
  { slug: "stage-srestha-vishal", alt: "Srestha and Vishal’s floral stage", meta: "Wedding · Feb 2023", name: "Srestha & Vishal", href: "/weddings/srestha-vishal" },
  { slug: "haldi-couple", alt: "A couple at their haldi", pos: "50% 25%", meta: "Haldi · [Year]", name: "[Couple] & [Couple]", href: "/weddings" },
];

const FAQS = [
  { q: "How early should we book for the Patna wedding season?", a: "Popular dates fill early — share your date as soon as you have a muhurat, and we will check venue and team availability the same day." },
  { q: "Can you host guests travelling in from other cities?", a: "[Answer to be confirmed by Wedlock.]" },
  { q: "Do you work with our family’s caterer or décor house?", a: "[Answer to be confirmed by Wedlock.]" },
  { q: "Do you also plan weddings outside Patna?", a: "[Answer to be confirmed by Wedlock.]" },
];

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Wedlock, ${SITE.address}`)}`;

export default function PatnaPage() {
  return (
    <PageShell active="none" waMessage={WA_MESSAGE}>
      {/* HERO */}
      <section className="container-x flex flex-col gap-8 pb-20 pt-8 lg:pt-12">
        <nav aria-label="Breadcrumb" className="text-sm text-fern">
          <Link href="/" className="text-fern">Home</Link> / Wedding planner in Patna
        </nav>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex flex-col gap-6">
            <div className="enter flex items-center gap-3.5">
              <span lang="hi" className="font-deva text-xl text-gold">पटना</span>
              <span aria-hidden="true" className="h-px w-10 bg-champagne" />
              <span className="eyebrow">Our headquarters · since 2014</span>
            </div>
            <h1 className="enter enter-delay-1 m-0 font-serif text-[clamp(48px,6vw,88px)] font-light leading-none tracking-[-0.02em]">
              Wedding planners in Patna, <em>since our very first wedding.</em>
            </h1>
            <p className="enter enter-delay-2 m-0 max-w-[32em] text-[19px] text-fern">
              Wedlock was born in Patna on the lineage of Eventoss. Our home-city team knows the venues, the caterers, the décor houses and the families — and has planned Patna weddings from intimate pheras to grand receptions.
            </p>
            <div className="enter enter-delay-3 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-dark">Visit our Patna studio</Link>
              <a href={SITE.phoneHref} className="btn btn-outline">Call {SITE.phone}</a>
            </div>
          </div>
          <div className="relative min-h-[420px] lg:min-h-[560px]">
            <Picture
              slug="floral-mandap"
              alt="A floral mandap of red gerberas with crystal lights"
              sizes="(min-width: 1024px) 620px, 100vw"
              priority
              className="absolute inset-0 h-full w-full rounded-lg object-cover"
            />
            <div className="absolute bottom-6 left-3 rounded-lg bg-ivory px-[22px] py-[18px] shadow-[0_18px_44px_rgba(35,39,31,0.14)] lg:-left-7 lg:bottom-10">
              <span className="block text-[13px] text-fern">Patna studio</span>
              <span className="font-serif text-[22px]">208-A, Kaushalya Estate</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHY PATNA */}
      <section className="bg-stone">
        <div className="container-x flex flex-col gap-12 py-20 lg:py-28">
          <h2 className="h2 reveal m-0">Why Patna families <em>choose Wedlock</em></h2>
          <div className="reveal-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WHY.map((w) => (
              <article key={w.n} className="flex flex-col gap-2.5 rounded-[10px] bg-ivory p-7">
                <span className="font-serif text-[34px] font-light leading-none text-gold">{w.n}</span>
                <h3 className="m-0 font-serif text-2xl font-normal">{w.title}</h3>
                <p className="m-0 text-[15px] text-fern">{w.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VENUES */}
      <section className="container-x grid gap-12 py-20 lg:grid-cols-3 lg:py-28">
        <div className="reveal flex flex-col gap-4">
          <span className="eyebrow self-start">Venues we know</span>
          <h2 className="m-0 font-serif text-[clamp(34px,3.6vw,52px)] font-light leading-[1.1]">Banquets, hotels and lawns across Patna</h2>
          <p className="m-0 text-fern">We shortlist venues by guest count, season and the rituals you need — and visit them with you.</p>
        </div>
        <div className="grid min-w-0 gap-x-8 border-t border-ink sm:grid-cols-2 lg:col-span-2">
          {VENUES.map((v, i) => (
            <div key={i} className="flex justify-between gap-3 border-b border-line py-[18px]">
              <span className="font-serif text-[22px]">{v.name}</span>
              <span className="text-right text-sm text-fern">{v.type}</span>
            </div>
          ))}
        </div>
      </section>

      {/* WEDDINGS IN PATNA */}
      <section className="bg-sage">
        <div className="container-x flex flex-col gap-10 py-20 lg:py-28">
          <div className="reveal flex flex-wrap items-end justify-between gap-6">
            <h2 className="h2 m-0">Weddings we planned <em>in Patna</em></h2>
            <Link href="/weddings" className="btn-soft bg-ivory">All weddings →</Link>
          </div>
          <div className="reveal-stagger grid gap-5 md:grid-cols-3">
            {WEDDINGS.map((w) => (
              <Link key={w.name} href={w.href} className="lift zoom flex flex-col overflow-hidden rounded-xl bg-ivory no-underline hover:text-ink">
                <Picture slug={w.slug} alt={w.alt} sizes="(min-width: 768px) 400px, 100vw" position={w.pos} className="block h-[300px] w-full object-cover" />
                <div className="flex flex-col gap-1 px-[26px] pb-[26px] pt-[22px]">
                  <span className="text-[13px] text-fern">{w.meta}</span>
                  <span className="font-serif text-2xl">{w.name}</span>
                </div>
              </Link>
            ))}
          </div>
          <span className="text-[13px] text-olive">[Confirm the city of each featured wedding.]</span>
        </div>
      </section>

      {/* OFFICE + FAQ */}
      <section className="container-x grid gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div className="flex flex-col gap-5">
          <h2 className="reveal m-0 font-serif text-[clamp(34px,3.6vw,52px)] font-light leading-[1.1]">Visit the Patna studio</h2>
          <a href={MAPS_URL} target="_blank" rel="noopener" className="flex min-h-[280px] items-end rounded-lg bg-placeholder p-4 text-[13px] text-ink no-underline">
            Map · {SITE.address} · Open in Google Maps →
          </a>
          <div className="grid gap-4 text-[15px] sm:grid-cols-2">
            <div><div className="eyebrow !tracking-[0.16em]">Address</div>{SITE.address}</div>
            <div><div className="eyebrow !tracking-[0.16em]">Hours</div>Mon–Sat, 10am–8pm · by appointment</div>
            <div><div className="eyebrow !tracking-[0.16em]">Phone</div><a href={SITE.phoneHref}>{SITE.phone}</a></div>
            <div><div className="eyebrow !tracking-[0.16em]">Email</div><a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <h2 className="reveal m-0 mb-2.5 font-serif text-[clamp(34px,3.6vw,52px)] font-light leading-[1.1]">Patna wedding questions</h2>
          {FAQS.map((f, i) => (
            <details key={f.q} open={i === 0} className="rounded-lg bg-stone px-6 py-5">
              <summary className="cursor-pointer font-serif text-[21px]">{f.q}</summary>
              <p className="m-0 mt-2.5 text-base text-fern">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-20 lg:pb-28">
        <div className="reveal flex flex-wrap items-center justify-between gap-8 rounded-2xl bg-moss px-7 py-14 text-ivory sm:px-14 sm:py-16">
          <div className="flex max-w-[640px] flex-col gap-2.5">
            <h2 className="m-0 font-serif text-[clamp(32px,3.6vw,52px)] font-light leading-[1.08]">Planning a wedding in Patna?</h2>
            <span className="text-mist-2">Book your first meeting with our Patna team — free.</span>
          </div>
          <Link href="/contact" className="rounded-[2px] bg-ivory px-8 py-[18px] font-medium text-ink no-underline hover:text-moss">Book a free consultation</Link>
        </div>
      </section>
    </PageShell>
  );
}
