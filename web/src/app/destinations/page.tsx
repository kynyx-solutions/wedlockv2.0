import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { PhotoToCome } from "@/components/Picture";
import { DestinationsGrid, type DestinationKind } from "./DestinationsGrid";

export const metadata: Metadata = {
  title: "Destination weddings",
  description:
    "Udaipur, Jaipur, Goa, Kerala, Bali, Phuket, Tuscany and Dubai — eight of our most-produced wedding destinations, and a desk that has scouted forty more across 14 countries.",
};

const WA_MESSAGE = "Hi Wedlock! I'm exploring destinations for my wedding. Could you suggest a few options for us?";

const LABELS: Record<DestinationKind, string> = { palace: "Rajasthan", beach: "Coast & backwaters", abroad: "International" };

const DESTINATIONS: { name: string; region: string; type: DestinationKind; text: string; season: string; guests: string }[] = [
  { name: "Udaipur", region: "Rajasthan", type: "palace", text: "The city of lakes, built for weddings.", season: "Oct–Mar", guests: "800" },
  { name: "Jaipur", region: "Rajasthan", type: "palace", text: "Pink sandstone, elephant arches, royal scale.", season: "Oct–Mar", guests: "1,200" },
  { name: "Goa", region: "Konkan coast", type: "beach", text: "Barefoot ceremonies, dance floors in the sand.", season: "Nov–Feb", guests: "500" },
  { name: "Kerala", region: "Malabar coast", type: "beach", text: "Backwaters, houseboats and monsoon-blessed green.", season: "Sep–Mar", guests: "300" },
  { name: "Bali", region: "Indonesia", type: "abroad", text: "Cliff-top temples meet villas for weddings abroad.", season: "Apr–Oct", guests: "200" },
  { name: "Phuket", region: "Thailand", type: "abroad", text: "Andaman-blue backdrops with Thai hospitality.", season: "Nov–Apr", guests: "400" },
  { name: "Tuscany", region: "Italy", type: "abroad", text: "Vineyards, villas and la dolce vita.", season: "May–Sep", guests: "150" },
  { name: "Dubai", region: "UAE", type: "abroad", text: "Skyline ballrooms and desert-gold receptions.", season: "Nov–Mar", guests: "1,000" },
];

const PROMISES = ["Venue intelligence", "Vendor networks", "Guest-travel playbooks", "Local permits & crews"];

export default function DestinationsPage() {
  const cards = DESTINATIONS.map((d) => ({
    key: d.name,
    type: d.type,
    node: (
      <Link href="/services/destination-weddings" className="flex flex-grow flex-col overflow-hidden rounded-[4px] bg-stone no-underline hover:text-ink">
        <div className="relative h-[260px]">
          <PhotoToCome label={d.name} className="absolute inset-0" />
          <span className="absolute left-4 top-4 rounded-[2px] bg-ivory px-3 py-1.5 text-[13px] font-medium">{LABELS[d.type]}</span>
        </div>
        <div className="flex flex-col gap-2.5 px-6 pb-[26px] pt-[22px] sm:px-[26px]">
          <div className="flex items-baseline justify-between gap-3">
            <span className="font-serif text-[28px]">{d.name}</span>
            <span className="text-sm text-fern">{d.region}</span>
          </div>
          <span className="text-[15px] text-fern">{d.text}</span>
          <div className="flex flex-wrap gap-2 text-[13px]">
            <span className="rounded-[2px] bg-ivory px-3 py-1">Best {d.season}</span>
            <span className="rounded-[2px] bg-ivory px-3 py-1">Up to {d.guests} guests</span>
          </div>
        </div>
      </Link>
    ),
  }));

  return (
    <PageShell active="destinations" waMessage={WA_MESSAGE}>
      {/* HERO */}
      <section className="container-x flex flex-col gap-7 pb-14 pt-6 lg:pt-12">
        <nav aria-label="Breadcrumb" className="text-sm text-fern">
          <Link href="/" className="text-fern">Home</Link> / Destinations
        </nav>
        <div className="grid items-end gap-6 lg:grid-cols-2 lg:gap-10">
          <h1 className="m-0 font-serif text-[clamp(46px,6vw,84px)] font-light leading-[1.02] tracking-[-0.025em]">From palaces to beaches, <em>we know the way.</em></h1>
          <p className="m-0 text-[19px] text-fern sm:text-xl">Eight of our most-produced destinations — and a destination desk that has scouted forty more, across 14 countries. Where should your story unfold?</p>
        </div>
      </section>

      {/* FEATURED */}
      <section className="container-x pb-16 lg:pb-[72px]">
        <Link href="/services/destination-weddings" className="grid overflow-hidden rounded-lg bg-ink text-ivory no-underline hover:text-ivory lg:grid-cols-2">
          <PhotoToCome label="Udaipur & Jaipur" className="min-h-[300px] lg:min-h-[480px]" />
          <div className="flex flex-col justify-center gap-[18px] p-7 sm:p-12">
            <span className="self-start rounded-[2px] bg-ink-2 px-3.5 py-1.5 text-[13px] font-medium text-mist-2">Signature · Rajasthan</span>
            <span className="font-serif text-[40px] font-light leading-none sm:text-[52px]">Udaipur &amp; Jaipur</span>
            <span className="text-mist">The city of lakes, built for weddings — and pink sandstone, elephant arches and royal scale.</span>
            <div className="grid grid-cols-3 gap-3 border-t border-fern pt-[18px]">
              {[
                ["Best season", "Oct – Mar"],
                ["Udaipur guests", "150 – 800"],
                ["Jaipur guests", "200 – 1,200"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="text-[13px] text-mist">{k}</div>
                  <div className="font-serif text-xl">{v}</div>
                </div>
              ))}
            </div>
            <span className="font-medium">Plan a Rajasthan wedding →</span>
          </div>
        </Link>
      </section>

      {/* FILTER + GRID */}
      <section className="container-x flex flex-col gap-8 pb-20 lg:pb-28">
        <DestinationsGrid cards={cards} />
      </section>

      {/* VENUE PARTNERS */}
      <section className="bg-stone">
        <div className="container-x flex flex-col items-center gap-7 py-16 text-center lg:py-[72px]">
          <span className="text-sm text-fern">Every destination comes with</span>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 font-serif text-[22px] text-fern">
            {PROMISES.map((p) => <span key={p}>{p}</span>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-20 lg:py-28">
        <div className="flex flex-wrap items-center justify-between gap-8 rounded-lg bg-sage p-7 sm:px-14 sm:py-16">
          <div className="flex max-w-[640px] flex-col gap-2.5">
            <h2 className="m-0 font-serif text-[clamp(32px,3.6vw,52px)] font-light leading-[1.08]">Can’t decide where?</h2>
            <span className="text-olive">Share your guest count, budget and season. We’ll send three costed destination options within 72 hours.</span>
          </div>
          <Link href="/contact" className="rounded-[2px] bg-moss px-8 py-[18px] font-medium text-ivory no-underline hover:text-ivory">Get destination options</Link>
        </div>
      </section>
    </PageShell>
  );
}
