import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { Picture } from "@/components/Picture";
import { WEDDINGS, getWedding } from "@/data/weddings";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return WEDDINGS.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const w = getWedding((await params).slug);
  if (!w) return {};
  return { title: `${w.couple} · Wedding story`, description: w.description };
}

export default async function WeddingStoryPage({ params }: Props) {
  const w = getWedding((await params).slug);
  if (!w) notFound();

  const others = WEDDINGS.filter((o) => o.slug !== w.slug);

  return (
    <PageShell active="weddings" waMessage={w.waMessage}>
      {/* HERO */}
      <section className="container-x flex flex-col gap-6 pt-6 lg:pt-10">
        <nav aria-label="Breadcrumb" className="text-sm text-fern">
          <Link href="/" className="text-fern">Home</Link> / <Link href="/weddings" className="text-fern">Weddings</Link> / {w.couple}
        </nav>
        <div className="relative flex min-h-[540px] items-end overflow-hidden rounded-2xl p-3 sm:p-8 lg:h-[640px] lg:p-12">
          <Picture
            slug={w.hero.slug}
            alt={w.hero.alt}
            sizes="(min-width: 1280px) 1216px, 100vw"
            priority
            position={w.hero.pos}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative flex max-w-[620px] flex-col gap-2.5 rounded-lg bg-ivory px-6 py-6 sm:px-9 sm:py-8">
            <span className="eyebrow">{w.eyebrow}</span>
            <h1 className="m-0 font-serif text-[clamp(40px,5vw,68px)] font-light leading-[1.02] tracking-[-0.02em]">
              {w.names[0]} <em>&amp;</em> {w.names[1]}
            </h1>
            <p className="m-0 text-fern">{w.intro}</p>
          </div>
        </div>
      </section>

      {/* FACTS */}
      <section aria-label="Wedding at a glance" className="container-x pb-20 pt-6 lg:pb-24">
        <dl className="m-0 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {w.facts.map((f) => (
            <div key={f.k} className="rounded-lg bg-stone px-5 py-[18px]">
              <dt className="text-[13px] text-fern">{f.k}</dt>
              <dd className="m-0 mt-0.5 font-serif text-[22px]">{f.v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* BRIEF / APPROACH / RESULT */}
      <section className="container-x flex flex-col gap-12 pb-20 lg:pb-28">
        <p className="m-0 max-w-[26em] font-serif text-[clamp(28px,3vw,40px)] font-light leading-[1.3]">{w.lede}</p>
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            ["01 · The brief", w.brief],
            ["02 · Our approach", w.approach],
            ["03 · The result", w.result],
          ].map(([label, text]) => (
            <div key={label} className="flex flex-col gap-2.5 rounded-xl bg-stone p-7 sm:p-8">
              <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-gold">{label}</span>
              <p className="m-0 text-base text-fern">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EVENTS */}
      <section className="bg-sage">
        <div className="container-x flex flex-col gap-14 py-20 lg:py-28">
          <h2 className="h2 m-0">The celebrations, <em>one by one</em></h2>
          {w.events.map((e) => (
            <article key={e.day + e.title} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10">
              <Picture
                slug={e.img.slug}
                alt={e.img.alt}
                sizes="(min-width: 1024px) 600px, 100vw"
                position={e.img.pos}
                className="block h-[300px] w-full rounded-[10px] object-cover sm:h-[380px]"
              />
              <div className="flex flex-col gap-3.5">
                <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-olive">{e.day}</span>
                <h3 className="m-0 font-serif text-[36px] font-normal leading-[1.1]">{e.title}</h3>
                <p className="m-0 text-olive">{e.text}</p>
                <div className="flex flex-wrap gap-2 text-[13px]">
                  <span className="rounded-[2px] bg-ivory px-3 py-1.5">{e.venue}</span>
                  <span className="rounded-[2px] bg-ivory px-3 py-1.5">{e.palette}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="container-x flex flex-col gap-8 py-20 lg:py-28">
        <h2 className="h2 m-0">Gallery</h2>
        <div className="grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:grid-cols-4">
          {w.gallery.map((g, i) => (
            <div key={g.slug + i} className={g.span}>
              <Picture
                slug={g.slug}
                alt={g.alt}
                sizes={g.span.includes("col-span") ? "(min-width: 640px) 640px, 100vw" : "(min-width: 640px) 320px, 50vw"}
                position={g.pos}
                className="block h-full w-full rounded-[10px] object-cover"
              />
            </div>
          ))}
        </div>
        <span className="text-sm text-fern">{w.photoCredit}</span>
      </section>

      {/* QUOTE */}
      <section className="container-x pb-20 lg:pb-28">
        <figure className="m-0 grid items-center gap-10 rounded-2xl bg-ink px-7 py-12 text-ivory sm:px-16 sm:py-[72px] lg:grid-cols-3">
          <blockquote className="m-0 font-serif text-[clamp(28px,3vw,40px)] font-light italic leading-[1.3] lg:col-span-2">“{w.quote}”</blockquote>
          <figcaption className="flex items-center gap-4">
            <Picture slug={w.quoteImg.slug} alt={w.quoteImg.alt} sizes="64px" position={w.quoteImg.pos} className="h-16 w-16 rounded-full object-cover" />
            <span>
              <strong className="font-medium">{w.couple}</strong>
              <br />
              <span className="text-mist">{w.date}</span>
            </span>
          </figcaption>
        </figure>
      </section>

      {/* CREDITS */}
      <section className="container-x grid gap-12 pb-20 lg:grid-cols-3 lg:pb-28">
        <div className="flex flex-col gap-3">
          <h2 className="m-0 font-serif text-[clamp(32px,3.4vw,46px)] font-light leading-[1.1]">The team behind the day</h2>
          <p className="m-0 text-fern">{w.team}</p>
        </div>
        <dl className="m-0 grid min-w-0 gap-x-8 sm:grid-cols-2 lg:col-span-2">
          {w.credits.map((c) => (
            <div key={c.k} className="flex justify-between gap-3 border-t border-line py-3.5 text-[15px]">
              <dt className="text-fern">{c.k}</dt>
              <dd className="m-0 font-medium">{c.v}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* NEXT */}
      <section className="bg-stone">
        <div className="container-x flex flex-col gap-8 py-20 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="m-0 font-serif text-[clamp(32px,3.4vw,46px)] font-light leading-[1.1]">More wedding stories</h2>
            <Link href="/weddings" className="btn-soft bg-ivory">All weddings →</Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {[
              ...others.map((o) => ({ key: o.slug, href: `/weddings/${o.slug}`, img: o.card.img, meta: o.card.meta, name: o.couple })),
              {
                key: "haldi",
                href: "/weddings",
                img: { slug: "haldi-couple" as const, alt: "A couple at their haldi", pos: "50% 25%" },
                meta: "Haldi · [Year]",
                name: "[Couple] & [Couple]",
              },
            ].map((c) => (
              <Link key={c.key} href={c.href} className="grid grid-cols-[120px_minmax(0,1fr)] overflow-hidden rounded-xl bg-ivory no-underline hover:text-ink sm:grid-cols-[200px_minmax(0,1fr)]">
                <Picture slug={c.img.slug} alt={c.img.alt} sizes="200px" position={c.img.pos} className="block h-full min-h-[160px] w-full object-cover sm:min-h-[200px]" />
                <div className="flex flex-col justify-center gap-1.5 p-5 sm:p-6">
                  <span className="text-[13px] text-fern">{c.meta}</span>
                  <span className="font-serif text-2xl leading-tight">{c.name}</span>
                  <span className="text-[15px] font-medium">Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20 lg:py-28">
        <div className="flex flex-wrap items-center justify-between gap-8 rounded-2xl bg-moss p-7 text-ivory sm:px-14 sm:py-16">
          <h2 className="m-0 max-w-[14em] font-serif text-[clamp(32px,3.6vw,52px)] font-light leading-[1.08]">Tell us the occasion. <em>We’ll handle the magic.</em></h2>
          <Link href="/contact" className="rounded-[2px] bg-ivory px-8 py-[18px] font-medium text-ink no-underline">Plan your celebration</Link>
        </div>
      </section>
    </PageShell>
  );
}
