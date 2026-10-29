import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { Picture, PhotoToCome } from "@/components/Picture";
import { SITE } from "@/lib/site";
import { ARTICLES, TIMELINE_SLUG, getArticle, type Article } from "../articles";
import { slugify } from "../posts";
import { CopyLink } from "./CopyLink";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const a = getArticle((await params).slug);
  if (!a) return {};
  return { title: a.title, description: a.dek, openGraph: { type: "article", title: a.title, description: a.dek } };
}

const MONTHS = [
  { when: "12–10 months", what: "Budget, guest estimate, shortlist destinations, recce visits" },
  { when: "9–7 months", what: "Book venue and room block; send save-the-dates" },
  { when: "6–4 months", what: "Contract décor, catering, artists; design every event" },
  { when: "3–2 months", what: "Invitations out; collect RSVPs and flight details" },
  { when: "6 weeks", what: "Rooming list, pickups, welcome hampers, run sheets" },
  { when: "Wedding week", what: "Team on site 3 days early; rehearse each event" },
];

/** The board's "Keep reading" picks for the timeline; other articles get same-category posts first. */
const TIMELINE_RELATED = [
  "Rain plans that don’t look like regret",
  "Five décor directions defining 2026 celebrations",
  "How to choose a celebration planner: 9 questions that matter",
].map(slugify);

function related(a: Article) {
  if (a.slug === TIMELINE_SLUG) return TIMELINE_RELATED.map((s) => getArticle(s)!).filter(Boolean);
  const others = ARTICLES.filter((o) => o.slug !== a.slug);
  return [...others.filter((o) => o.cat === a.cat), ...others.filter((o) => o.cat !== a.cat)].slice(0, 3);
}

/** "Title: subtitle" → title with the subtitle in italics, as on the board. */
function Title({ text }: { text: string }) {
  const i = text.indexOf(":");
  if (i === -1) return <>{text}</>;
  return <>{text.slice(0, i + 1)} <em>{text.slice(i + 1).trim()}</em></>;
}

const h2 = "m-0 mt-4 font-serif text-[30px] font-normal leading-[1.15] sm:text-4xl";

function TimelineBody() {
  return (
    <>
      <p className="m-0 font-serif text-[23px] leading-[1.45] sm:text-[26px]">A destination wedding is two projects at once: a wedding, and moving a few hundred people to another city. Start the second one early and the first one becomes calm.</p>
      <h2 className={h2}>12 to 10 months out: choose the place</h2>
      <p className="m-0 text-fern">Fix a budget range and a rough guest count before you look at a single venue. Then shortlist two or three destinations and visit them together — the right venue is usually obvious within an hour of walking it.</p>
      <h2 className={h2}>9 to 6 months out: book the block</h2>
      <p className="m-0 text-fern">Block rooms close to the venue as soon as the date is fixed, and send save-the-dates so guests can book flights early. This is also when décor, catering and artists are contracted.</p>
      <blockquote className="my-4 border-l border-champagne pl-6 font-serif text-[24px] italic leading-[1.35] sm:text-[28px]">Guests remember how easy it was to arrive long after they forget the centrepieces.</blockquote>
      <h2 className={h2}>The months at a glance</h2>
      <div className="overflow-x-auto border-t border-ink">
        <table className="w-full border-collapse text-base">
          <tbody>
            {MONTHS.map((m) => (
              <tr key={m.when} className="border-b border-line">
                <th scope="row" className="whitespace-nowrap py-3.5 pr-4 text-left align-top font-semibold">{m.when}</th>
                <td className="py-3.5 text-fern">{m.what}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <aside className="my-4 flex flex-col gap-3 rounded-lg bg-sage p-7">
        <span className="font-serif text-[26px]">Get this blueprint as a PDF</span>
        <span className="text-base text-olive">The month-by-month checklist our destination desk uses.</span>
        <Link href="/journal" className="btn btn-dark self-start !px-6 !py-3.5 !text-xs">Download the PDF</Link>
      </aside>
      <h2 className={h2}>The last month: rehearse everything</h2>
      <p className="m-0 text-fern">Share a final itinerary with every guest, confirm every pickup, and walk the venue with your planner the day before each event. The wedding week should hold no new decisions.</p>
    </>
  );
}

export default async function ArticlePage({ params }: Props) {
  const a = getArticle((await params).slug);
  if (!a) notFound();

  const isTimeline = a.slug === TIMELINE_SLUG;
  const url = `${SITE.url}/journal/${a.slug}`;
  const waMessage = isTimeline
    ? "Hi Wedlock! I read your destination wedding timeline and have a few questions."
    : `Hi Wedlock! I read “${a.title}” on your Journal and have a few questions.`;
  // Wedlock's own archive photos (w-*) are phone quality: never stretched to full width.
  const archive = a.img?.startsWith("w-");

  return (
    <PageShell active="journal" waMessage={waMessage}>
      {/* TITLE */}
      <header className="mx-auto flex max-w-[860px] flex-col items-center gap-5 px-4 pb-10 pt-10 text-center sm:px-8 lg:pt-14">
        <nav aria-label="Breadcrumb" className="text-sm text-fern">
          <Link href="/" className="text-fern">Home</Link> / <Link href="/journal" className="text-fern">Journal</Link> / {a.cat}
        </nav>
        <span className="eyebrow enter">{a.cat} · {a.read} read</span>
        <h1 className="enter enter-delay-1 m-0 font-serif text-[clamp(40px,5.4vw,72px)] font-light leading-[1.04] tracking-[-0.02em]"><Title text={a.title} /></h1>
        <p className="enter enter-delay-2 m-0 max-w-[32em] text-lg text-fern sm:text-xl">{a.dek}</p>
        <span className="enter enter-delay-3 text-sm text-fern">By the Wedlock celebration desk · {a.date}</span>
      </header>
      <div className={archive ? "mx-auto max-w-[784px] px-4 sm:px-8" : "container-x"}>
        {a.img ? (
          <Picture
            slug={a.img}
            alt={a.alt ?? ""}
            sizes={archive ? "(min-width: 784px) 720px, 100vw" : "(min-width: 1280px) 1216px, 100vw"}
            priority
            className={`block w-full rounded-xl object-cover ${archive ? "h-[300px] sm:h-[420px]" : "h-[320px] sm:h-[520px]"}`}
          />
        ) : (
          <PhotoToCome label={a.photoLabel ?? a.cat} className="h-[320px] rounded-xl sm:h-[520px]" />
        )}
      </div>

      {/* BODY */}
      <article className="mx-auto flex max-w-[720px] flex-col gap-6 px-4 pb-10 pt-14 text-[17px] leading-[1.75] sm:px-8 sm:pt-[72px] sm:text-lg">
        {isTimeline ? (
          <TimelineBody />
        ) : (
          <>
            <p className="m-0 font-serif text-[23px] leading-[1.45] sm:text-[26px]">{a.dek}</p>
            <p className="m-0 rounded-lg bg-stone p-6 text-fern">[Full article to come — the Wedlock celebration desk is writing this piece.]</p>
          </>
        )}
        <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-line pt-6 text-sm">
          <span className="text-fern">Share</span>
          <a href={`https://wa.me/?text=${encodeURIComponent(`${a.title} ${url}`)}`} target="_blank" rel="noopener" className="rounded-[2px] bg-stone px-3.5 py-2 no-underline hover:bg-sage">WhatsApp</a>
          <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener" className="rounded-[2px] bg-stone px-3.5 py-2 no-underline hover:bg-sage">Facebook</a>
          <CopyLink />
        </div>
      </article>

      {/* RELATED */}
      <section className="bg-stone">
        <div className="container-x flex flex-col gap-8 py-20 lg:py-24">
          <h2 className="reveal m-0 font-serif text-[clamp(32px,3.4vw,48px)] font-light">Keep reading</h2>
          <div className="reveal-stagger grid gap-5 md:grid-cols-3">
            {related(a).map((r) => (
              <Link key={r.slug} href={`/journal/${r.slug}`} className="lift flex flex-col gap-2.5 rounded-[10px] no-underline">
                <div className="zoom rounded-[10px]">
                  {r.img ? (
                    <Picture slug={r.img} alt={r.alt ?? ""} sizes="(min-width: 768px) 400px, 100vw" className="block h-[220px] w-full object-cover" />
                  ) : (
                    <PhotoToCome label={r.photoLabel ?? r.cat} className="h-[220px]" />
                  )}
                </div>
                <span className="text-[13px] font-semibold uppercase tracking-[0.08em] text-gold">{r.cat} · {r.read}</span>
                <span className="font-serif text-2xl leading-tight">{r.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20 lg:py-28">
        <div className="reveal flex flex-wrap items-center justify-between gap-8 rounded-2xl bg-moss px-7 py-14 text-ivory sm:px-14 sm:py-16">
          {isTimeline ? (
            <>
              <h2 className="m-0 max-w-[14em] font-serif text-[clamp(32px,3.6vw,52px)] font-light leading-[1.08]">Planning a destination wedding?</h2>
              <Link href="/services/destination-weddings" className="rounded-[2px] bg-ivory px-8 py-[18px] font-medium text-ink no-underline hover:text-moss">See our destination service</Link>
            </>
          ) : (
            <>
              <h2 className="m-0 max-w-[14em] font-serif text-[clamp(32px,3.6vw,52px)] font-light leading-[1.08]">Planning your wedding?</h2>
              <Link href="/contact" className="rounded-[2px] bg-ivory px-8 py-[18px] font-medium text-ink no-underline hover:text-moss">Book a free consultation</Link>
            </>
          )}
        </div>
      </section>
    </PageShell>
  );
}
