import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Picture, PhotoToCome } from "@/components/Picture";
import { BlueprintForm } from "./BlueprintForm";
import { JournalBrowser } from "./JournalBrowser";
import { FEATURED, POSTS, postHref } from "./posts";

export const metadata: Metadata = {
  title: "Journal — real weddings, planning guides & trends",
  description:
    "Notes from the Wedlock celebration desk: real celebrations we produced, planning blueprints we actually use, and the décor directions our studio is chasing this season.",
};

const WA_MESSAGE = "Hi Wedlock! I was reading your Journal and have a few questions about planning my wedding.";

export default function Journal() {
  const featured = (
    <Link href={postHref(FEATURED.title)} className="grid overflow-hidden rounded-lg bg-stone no-underline hover:text-ink md:grid-cols-2">
      <Picture slug="w-prewedding-sunset" alt="A couple at the water’s edge at sunset, from a Wedlock pre-wedding shoot" sizes="(min-width: 768px) 640px, 100vw" priority className="h-full min-h-[300px] w-full object-cover md:min-h-[440px]" />
      <div className="flex flex-col justify-center gap-4 p-7 sm:p-12">
        <span className="self-start rounded-[2px] bg-ivory px-3.5 py-1.5 text-[13px] font-medium">{FEATURED.label}</span>
        <span className="font-serif text-[32px] font-light leading-[1.12] sm:text-[40px]">{FEATURED.title}</span>
        <span className="text-fern">{FEATURED.dek}</span>
        <span className="text-sm text-fern">{FEATURED.meta}</span>
      </div>
    </Link>
  );

  const cards = POSTS.map((p) => (
    <Link key={p.title} href={postHref(p.title)} className="flex flex-col gap-3 no-underline">
      {p.img ? (
        <Picture slug={p.img} alt={p.alt ?? ""} sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw" className="block h-[240px] w-full rounded-[10px] object-cover" />
      ) : (
        <PhotoToCome label={p.photoLabel ?? p.cat} className="h-[240px] rounded-[10px]" />
      )}
      <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-gold">{p.cat} · {p.date} · {p.read}</span>
      <span className="font-serif text-2xl leading-tight">{p.title}</span>
      <span className="text-[15px] text-fern">{p.dek}</span>
    </Link>
  ));

  return (
    <PageShell active="journal" waMessage={WA_MESSAGE}>
      {/* HERO */}
      <section className="container-x flex flex-col gap-7 pb-7 pt-8 lg:pt-12">
        <nav aria-label="Breadcrumb" className="text-sm text-fern">
          <Link href="/" className="text-fern">Home</Link> / Journal
        </nav>
        <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-10">
          <h1 className="h1 m-0 text-[clamp(46px,6vw,84px)] leading-[1.02]">The Wedlock <em>Journal</em></h1>
          <p className="m-0 text-lg text-fern sm:text-xl">
            Notes from the celebration desk — real celebrations we produced, planning blueprints we actually use, and the design directions our studio is chasing this season.
          </p>
        </div>
      </section>

      {/* FILTERS, FEATURED, GRID */}
      <JournalBrowser meta={POSTS.map((p) => ({ cat: p.cat, text: `${p.title} ${p.dek}` }))} cards={cards} featured={featured} />

      {/* DOWNLOAD */}
      <section aria-label="Free download" className="container-x pb-20 lg:pb-28">
        <div className="grid items-center gap-10 rounded-lg bg-sage p-7 sm:p-14 lg:grid-cols-2">
          <div className="flex flex-col gap-3">
            <span className="self-start rounded-[2px] bg-ivory px-3.5 py-1.5 text-[13px] font-medium">Free download</span>
            <h2 className="m-0 font-serif text-[clamp(32px,3.4vw,48px)] font-light leading-[1.1]">The destination wedding blueprint (PDF)</h2>
            <p className="m-0 text-olive">When to scout, book the block and fly the florist in — the same 12-month plan our destination desk uses.</p>
          </div>
          <BlueprintForm />
        </div>
      </section>
    </PageShell>
  );
}
