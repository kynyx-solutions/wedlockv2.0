import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Picture, type MediaSlug } from "@/components/Picture";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank you",
  description: "Your enquiry has reached the Wedlock team. A celebration director will call you within 24 hours.",
  robots: { index: false },
};

const WA_MESSAGE = "Hi Wedlock! I just sent an enquiry on your website.";

const STEPS = [
  "We call you to understand the date, city and guest count.",
  "We meet — at our studio, your home or on video.",
  "You receive a clear plan and budget.",
];

const WEDDINGS: { slug: MediaSlug; alt: string; label: string; href: string }[] = [
  { slug: "entry-ankita-anunay", alt: "Ankita and Anunay’s welcome board", label: "Ankita & Anunay", href: "/weddings/ankita-anunay" },
  { slug: "stage-srestha-vishal", alt: "Srestha and Vishal’s floral stage", label: "Srestha & Vishal", href: "/weddings/srestha-vishal" },
  { slug: "sangeet-dance", alt: "Guests dancing at a sangeet", label: "All weddings →", href: "/weddings" },
];

export default function ThankYouPage() {
  return (
    <PageShell active="contact" waMessage={WA_MESSAGE}>
      <section className="container-x grid items-center gap-12 pb-20 pt-12 lg:grid-cols-2 lg:gap-14 lg:pb-24 lg:pt-20">
        <div className="flex flex-col gap-[22px]">
          <span lang="hi" className="enter font-deva text-[22px] text-gold">धन्यवाद</span>
          <h1 className="enter enter-delay-1 m-0 font-serif text-[clamp(50px,6.4vw,92px)] font-light leading-[0.98] tracking-[-0.02em]">Thank you. <em>We’ll call you soon.</em></h1>
          <p className="enter enter-delay-2 m-0 max-w-[30em] text-[19px] text-fern">Your enquiry has reached our team. A celebration director will call you within 24 hours to set up your free first meeting.</p>
          <ol className="enter enter-delay-3 m-0 mt-2 flex list-none flex-col border-t border-line p-0">
            {STEPS.map((s, i) => (
              <li key={s} className="flex gap-4 border-b border-line py-3.5">
                <span className="w-7 shrink-0 font-serif text-[22px] text-gold">{i + 1}</span>
                {s}
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap gap-3">
            <a href={waLink(WA_MESSAGE)} target="_blank" rel="noopener" className="btn btn-dark">Chat on WhatsApp now</a>
            <a href={SITE.social.instagram} target="_blank" rel="noopener" className="btn btn-outline">Follow @wedlockweddings</a>
          </div>
        </div>
        <Picture
          slug="couple-bw-ankita-anunay"
          alt="A couple under fairy lights in black and white"
          sizes="(min-width: 1024px) 620px, 100vw"
          priority
          position="40% 20%"
          className="block h-[420px] w-full rounded-lg object-cover lg:h-[600px]"
        />
      </section>

      <section className="bg-stone">
        <div className="container-x flex flex-col gap-8 py-20 lg:py-24">
          <h2 className="reveal m-0 font-serif text-[clamp(32px,3.4vw,48px)] font-light">While you wait, <em>see a few of our weddings</em></h2>
          <div className="reveal-stagger grid gap-5 md:grid-cols-3">
            {WEDDINGS.map((w) => (
              <Link key={w.href} href={w.href} className="lift flex flex-col gap-2.5 rounded-[10px] no-underline">
                <div className="zoom rounded-[10px]">
                  <Picture slug={w.slug} alt={w.alt} sizes="(min-width: 768px) 400px, 100vw" className="block h-[260px] w-full object-cover" />
                </div>
                <span className="font-serif text-2xl">{w.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
