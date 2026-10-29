import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Picture, type MediaSlug } from "@/components/Picture";
import { SITE } from "@/lib/site";
import { WeddingsGrid, type WeddingKind } from "./WeddingsGrid";

export const metadata: Metadata = {
  title: "Our weddings",
  description:
    "650+ celebrations since 2014. Real Wedlock weddings, haldis, sangeets and receptions — every photograph is from a wedding we produced.",
};

const WA_MESSAGE = "Hi Wedlock! I loved the weddings on your website and would like to plan ours with you.";

type Item = {
  couple: string;
  year: string;
  meta: string;
  type: WeddingKind;
  tag: string;
  img: MediaSlug;
  alt: string;
  pos: string;
  tall: boolean;
  href?: string;
};

const ITEMS: Item[] = [
  { couple: "Ankita & Anunay", year: "May 2023", meta: "Reception · fairy-light walkway & chevron floor", type: "sangeet", tag: "Reception", img: "couple-night-lights", alt: "Ankita and Anunay at their reception", pos: "62% 30%", tall: true, href: "/weddings/ankita-anunay" },
  { couple: "Srestha & Vishal", year: "Feb 2023", meta: "Wedding · white bloom stage & S·V monogram", type: "wedding", tag: "Wedding", img: "stage-srestha-vishal", alt: "Srestha and Vishal’s floral wedding stage", pos: "50% 50%", tall: false, href: "/weddings/srestha-vishal" },
  { couple: "[Couple] & [Couple]", year: "[Year]", meta: "Haldi · marigold, mogra & roses", type: "haldi", tag: "Haldi", img: "haldi-couple", alt: "A couple in yellow at their haldi", pos: "50% 25%", tall: true },
  { couple: "The bride", year: "[Year]", meta: "Wedding day · under the phulkari canopy", type: "wedding", tag: "Wedding", img: "bride-phulkari-canopy", alt: "A bride beneath a red canopy of golden latkans", pos: "50% 20%", tall: false },
  { couple: "Ankita & Anunay", year: "2023", meta: "Sangeet · the whole family on the floor", type: "sangeet", tag: "Sangeet", img: "sangeet-dance", alt: "Guests dancing at a sangeet", pos: "50% 40%", tall: true, href: "/weddings/ankita-anunay" },
  { couple: "[Couple] & [Couple]", year: "[Year]", meta: "Mehendi · marigold & teal canopy", type: "haldi", tag: "Mehendi", img: "mehendi-couple", alt: "A couple at their mehendi", pos: "50% 40%", tall: false },
  { couple: "Floral mandap", year: "[Year]", meta: "Décor · red gerberas, crystal lights", type: "decor", tag: "Décor", img: "floral-mandap", alt: "A floral mandap with crystal lights", pos: "50% 50%", tall: true },
  { couple: "Crystal walkway", year: "[Year]", meta: "Décor · cascading greens & crystal globes", type: "decor", tag: "Décor", img: "crystal-walkway", alt: "A walkway under crystal globes", pos: "50% 40%", tall: false },
  { couple: "Cocktail night", year: "[Year]", meta: "Décor · living wall & “Better Together” neon", type: "decor", tag: "Décor", img: "decor-better-together", alt: "A green wall with a neon sign", pos: "50% 50%", tall: true },
  // From Wedlock's own photo archive (Drive "Pictures")
  { couple: "[Couple] & [Couple]", year: "[Year]", meta: "Wedding · a shared laugh after the pheras", type: "wedding", tag: "Wedding", img: "w-couple-wedding-candid", alt: "A bride and groom laughing together, surrounded by family", pos: "50% 40%", tall: false },
  { couple: "[Couple] & [Couple]", year: "[Year]", meta: "Reception · white florals & chandeliers", type: "sangeet", tag: "Reception", img: "w-couple-stage-portrait", alt: "A couple seated on a floral reception stage", pos: "50% 35%", tall: true },
  { couple: "[Couple] & [Couple]", year: "[Year]", meta: "Haldi · marigold, laughter and turmeric", type: "haldi", tag: "Haldi", img: "w-haldi-laughter", alt: "A bride laughing at her haldi with family", pos: "50% 40%", tall: false },
  { couple: "Mehendi afternoon", year: "[Year]", meta: "Mehendi · friends under a marigold mandala", type: "haldi", tag: "Mehendi", img: "w-haldi-friends", alt: "Friends in bright lehengas seated before a giant marigold mandala", pos: "50% 50%", tall: false },
  { couple: "Haldi stage", year: "[Year]", meta: "Décor · yellow drapes and marigold strings", type: "haldi", tag: "Haldi décor", img: "w-haldi-stage-yellow", alt: "A haldi stage dressed in yellow drapes and marigold", pos: "50% 50%", tall: true },
  { couple: "Mehendi lounge", year: "[Year]", meta: "Décor · green and gold, floor seating", type: "decor", tag: "Mehendi décor", img: "w-mehendi-decor-green", alt: "A mehendi lounge with green drapes and gold accents", pos: "50% 50%", tall: true },
  { couple: "Garden stage", year: "[Year]", meta: "Décor · a wall of greenery after dark", type: "decor", tag: "Décor", img: "w-stage-greenery-night", alt: "An outdoor stage framed by a wall of greenery at night", pos: "50% 50%", tall: false },
  { couple: "Lantern lawn", year: "[Year]", meta: "Reception · paper lanterns over the lawn", type: "sangeet", tag: "Reception", img: "w-lawn-lanterns-reception", alt: "A lawn reception under strings of paper lanterns", pos: "50% 50%", tall: false },
  { couple: "Floral ceiling", year: "[Year]", meta: "Décor · a walkway roofed in blooms", type: "decor", tag: "Décor", img: "w-floral-ceiling-walkway", alt: "A walkway with a ceiling of pink and white flowers", pos: "50% 50%", tall: true },
  { couple: "The rings", year: "[Year]", meta: "Engagement · rose petals and two boxes", type: "wedding", tag: "Engagement", img: "w-rings-rose-petals", alt: "Two ring boxes on a plate of red rose petals", pos: "50% 50%", tall: false },
];

const FILMS: { title: string; img: MediaSlug; pos: string }[] = [
  { title: "The bride, under her veil", img: "bride-red-veil", pos: "62% 30%" },
  { title: "Ankita & Anunay — reception", img: "couple-bw-ankita-anunay", pos: "40% 20%" },
  { title: "Haldi morning", img: "haldi-couple-seated", pos: "50% 30%" },
];

const REVIEWS = [
  ["We never worried once.", "Aisha & Arjun Malhotra", "Udaipur"],
  ["[Review from Ankita & Anunay.]", "Ankita & Anunay", "May 2023"],
  ["[Review from Srestha & Vishal.]", "Srestha & Vishal", "Feb 2023"],
  ["[Review about guest hospitality.]", "[Name]", "Patna · [Year]"],
  ["[Review about décor.]", "[Name]", "Ranchi · [Year]"],
  ["[Review about the wedding-day team.]", "[Name]", "New Delhi · [Year]"],
];

function Card({ w }: { w: Item }) {
  const body = (
    <>
      <div className={`relative overflow-hidden rounded-[4px] bg-placeholder ${w.tall ? "h-[340px] sm:h-[420px]" : "h-[300px] sm:h-[340px]"}`}>
        <Picture
          slug={w.img}
          alt={w.alt}
          sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          position={w.pos}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="absolute left-4 top-4 rounded-[2px] bg-ivory px-3 py-1.5 text-[13px] font-medium text-ink">{w.tag}</span>
      </div>
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-serif text-2xl">{w.couple}</span>
        <span className="text-sm text-fern">{w.year}</span>
      </div>
      <span className="text-[15px] text-fern">{w.meta}</span>
    </>
  );
  return w.href ? (
    <Link href={w.href} className="flex flex-col gap-3 no-underline">{body}</Link>
  ) : (
    <div className="flex flex-col gap-3">{body}</div>
  );
}

export default function WeddingsPage() {
  return (
    <PageShell active="weddings" waMessage={WA_MESSAGE}>
      {/* HERO */}
      <section className="container-x flex flex-col gap-7 pb-12 pt-6 lg:pt-12">
        <nav aria-label="Breadcrumb" className="text-sm text-fern">
          <Link href="/" className="text-fern">Home</Link> / Weddings
        </nav>
        <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-10">
          <h1 className="m-0 font-serif text-[clamp(46px,6vw,84px)] font-light leading-[1.02] tracking-[-0.025em]">650+ celebrations. <em>Here are a few.</em></h1>
          <p className="m-0 text-[19px] text-fern sm:text-xl">Proof, not promises — celebrations we have actually produced. Every photograph here is from a Wedlock wedding.</p>
        </div>
      </section>

      {/* FILTERS + GRID */}
      <section className="container-x flex flex-col gap-7 pb-20 lg:pb-24">
        <WeddingsGrid cards={ITEMS.map((w) => ({ key: w.meta, type: w.type, node: <Card w={w} /> }))} />
      </section>

      {/* FILMS */}
      <section className="bg-ink text-ivory">
        <div className="container-x flex flex-col gap-10 py-20 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="m-0 font-serif text-[clamp(36px,4vw,58px)] font-light leading-[1.08]">Wedding <em>films</em></h2>
            <a href={SITE.social.youtube} className="py-2.5 font-medium text-ivory">Watch on YouTube →</a>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {FILMS.map((f) => (
              <a key={f.title} href={SITE.social.youtube} className="flex flex-col gap-3 text-ivory no-underline hover:text-mist">
                <div className="relative flex h-[240px] items-center justify-center overflow-hidden rounded-[10px] bg-fern">
                  <Picture slug={f.img} alt="" sizes="(min-width: 768px) 400px, 100vw" position={f.pos} className="absolute inset-0 h-full w-full object-cover" />
                  <span aria-hidden="true" className="relative flex h-16 w-16 items-center justify-center rounded-full bg-ivory">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#23271F"><path d="M8 5v14l11-7z" /></svg>
                  </span>
                </div>
                <span className="font-serif text-[22px]">{f.title}</span>
                <span className="text-sm text-mist">Wedlock wedding films · YouTube</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS WALL */}
      <section className="container-x flex flex-col gap-10 py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 className="h2 m-0">What families say</h2>
          <div className="flex flex-wrap gap-3 text-[15px]">
            <a href={SITE.social.instagram} className="rounded-[2px] bg-stone px-4 py-2.5 no-underline">@wedlockweddings on Instagram</a>
            <a href={SITE.social.facebook} className="rounded-[2px] bg-stone px-4 py-2.5 no-underline">Facebook reviews</a>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map(([q, who, where]) => (
            <figure key={q} className="m-0 flex flex-col gap-3 rounded-[10px] bg-stone p-[26px]">
              <blockquote className="m-0 text-base">“{q}”</blockquote>
              <figcaption className="text-sm"><strong className="font-medium">{who}</strong> · <span className="text-fern">{where}</span></figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-x pb-20 lg:pb-28">
        <div className="flex flex-wrap items-center justify-between gap-8 rounded-lg bg-moss p-7 text-ivory sm:px-14 sm:py-16">
          <h2 className="m-0 max-w-[14em] font-serif text-[clamp(32px,3.6vw,52px)] font-light leading-[1.08]">Your story could be next.</h2>
          <Link href="/contact" className="rounded-[2px] bg-ivory px-8 py-[18px] font-medium text-ink no-underline">Start planning</Link>
        </div>
      </section>
    </PageShell>
  );
}
