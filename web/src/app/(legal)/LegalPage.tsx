import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { SITE } from "@/lib/site";

export type LegalSection = { id: string; title: string; body: string };

type Props = {
  title: string;
  other: { href: string; label: string };
  sections: LegalSection[];
  closing: string;
};

const WA_MESSAGE = "Hi Wedlock! I have a question about planning my wedding.";

/** Shared legal template (Privacy board). All text is a placeholder until Wedlock's lawyer supplies the final wording. */
export function LegalPage({ title, other, sections, closing }: Props) {
  return (
    <PageShell active="none" waMessage={WA_MESSAGE}>
      <section className="container-x flex flex-col gap-[18px] border-b border-line pb-10 pt-8 lg:pt-12">
        <nav aria-label="Breadcrumb" className="text-sm text-fern">
          <Link href="/" className="text-fern">Home</Link> / {title}
        </nav>
        <h1 className="enter m-0 font-serif text-[clamp(46px,5.6vw,76px)] font-light leading-[1.02]">{title}</h1>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-fern">
          <span>Last updated: [date]</span>
          <span>Also see: <Link href={other.href}>{other.label}</Link></span>
        </div>
        <p role="note" className="m-0 self-start rounded border border-champagne bg-sage px-3.5 py-2.5 text-sm text-olive">
          <strong className="font-semibold">Template text, awaiting review by Wedlock’s lawyer.</strong> Final wording to be written or approved by counsel — not yet a binding policy.
        </p>
      </section>

      <section className="container-x flex flex-wrap items-start gap-14 pb-20 pt-14 lg:pb-28">
        <nav aria-label="On this page" className="flex flex-[1_1_220px] flex-col gap-1 border-l border-line pl-4 text-[15px] lg:sticky lg:top-6">
          <span className="eyebrow mb-1.5 !tracking-[0.16em]">On this page</span>
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="py-1.5 text-fern no-underline hover:text-ink">{s.title}</a>
          ))}
        </nav>
        <article className="flex min-w-0 max-w-[760px] flex-[999_1_560px] flex-col gap-10 leading-[1.7]">
          {sections.map((s) => (
            <div key={s.id} id={s.id} className="flex scroll-mt-6 flex-col gap-2.5">
              <h2 className="m-0 font-serif text-[30px] font-normal leading-[1.2]">{s.title}</h2>
              <p className="m-0 text-fern">{s.body}</p>
            </div>
          ))}
          <div className="border-t border-line pt-6 text-[15px] text-fern">
            {closing} Write to <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or visit us at {SITE.address}.
          </div>
        </article>
      </section>
    </PageShell>
  );
}
