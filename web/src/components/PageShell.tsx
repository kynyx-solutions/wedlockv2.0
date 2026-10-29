import Link from "next/link";
import { SITE, waLink, type NavKey } from "@/lib/site";
import { Footer } from "./Footer";
import { Header } from "./Header";

type Props = {
  active: NavKey;
  /** First WhatsApp message for this page (PRD section 9) */
  waMessage: string;
  children: React.ReactNode;
};

export function PageShell({ active, waMessage, children }: Props) {
  const wa = waLink(waMessage);
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-ivory focus:p-3">
        Skip to content
      </a>
      <Header active={active} waMessage={waMessage} />
      <main id="main">{children}</main>
      <Footer />

      {/* Floating WhatsApp button (desktop and tablet) */}
      <a
        href={wa}
        target="_blank"
        rel="noopener"
        aria-label="Chat with Wedlock on WhatsApp"
        className="fixed bottom-6 right-6 z-30 hidden h-14 w-14 items-center justify-center rounded-full bg-[#1F7A45] text-white shadow-[0_12px_28px_rgba(35,39,31,0.25)] transition-[transform,background-color] duration-200 ease-out hover:bg-moss hover:text-white motion-safe:hover:scale-105 motion-safe:focus-visible:scale-105 md:flex"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .1-1.2c0-.1-.2-.2-.5-.3z" />
        </svg>
      </a>

      {/* Phone action bar */}
      <nav aria-label="Quick actions" className="fixed inset-x-3 bottom-3 z-30 grid grid-cols-3 gap-1 rounded-[2px] bg-ink p-1.5 shadow-[0_12px_28px_rgba(35,39,31,0.25)] md:hidden">
        <a href={SITE.phoneHref} className="py-3 text-center text-sm text-ivory no-underline">Call</a>
        <a href={wa} target="_blank" rel="noopener" className="py-3 text-center text-sm text-ivory no-underline">WhatsApp</a>
        <Link href="/contact" className="rounded-[2px] bg-ivory py-3 text-center text-sm font-medium text-ink no-underline">Enquire</Link>
      </nav>
      <div aria-hidden="true" className="h-[68px] bg-ink md:hidden" />
    </>
  );
}
