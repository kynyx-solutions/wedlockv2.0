import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page has moved or never existed. Find your way back to Wedlock’s weddings, services and contact.",
};

const WA_MESSAGE = "Hi Wedlock! I couldn't find a page on your website. Could you help?";

export default function NotFound() {
  return (
    <PageShell active="none" waMessage={WA_MESSAGE}>
      <section className="container-x flex flex-col items-center gap-6 py-24 text-center lg:py-36">
        <span lang="hi" className="enter font-deva text-xl text-gold">क्षमा करें</span>
        <span className="eyebrow enter">Error 404</span>
        <h1 className="enter enter-delay-1 m-0 max-w-[14em] font-serif text-[clamp(44px,5.6vw,80px)] font-light leading-[1.02] tracking-[-0.02em]">
          This page has <em>wandered off.</em>
        </h1>
        <p className="enter enter-delay-2 m-0 max-w-[32em] text-lg text-fern">
          The link may be old, or the page may have moved. Nothing is lost — here are a few calm ways back.
        </p>
        <div className="enter enter-delay-3 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-dark">Back to home</Link>
          <Link href="/weddings" className="btn btn-outline">See our weddings</Link>
          <Link href="/contact" className="btn btn-outline">Contact us</Link>
        </div>
      </section>
    </PageShell>
  );
}
