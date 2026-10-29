import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { Picture } from "@/components/Picture";
import { RoleList, type Role } from "./RoleList";

export const metadata: Metadata = {
  title: "Careers — join our wedding planning team",
  description:
    "Join Wedlock’s planners, stylists, carpenters, light designers, choreographers and travel agents in Patna, Ranchi and New Delhi. See open roles and how we hire.",
};

const WA_MESSAGE = "Hi Wedlock! I'd like to join your team. Could you share the open roles and how to apply?";

const PERKS = [
  ["Learn from 650+ celebrations", "Shadow senior celebration directors from the first meeting to the last guest."],
  ["Travel with purpose", "Work on weddings across 40+ cities — Rajasthan, Goa, Kerala and abroad."],
  ["Peak-season bonus", "[Bonus structure] for every wedding you lead."],
  ["Off-season rest", "[N] extra days off in the quiet months."],
  ["Health cover", "[Insurance details] for you and your family."],
  ["Grow into a lead", "A clear path from coordinator to lead planner."],
];

const ROLES: Role[] = [
  { title: "Senior Wedding Planner", team: "Planning", city: "Patna", type: "Full-time" },
  { title: "Wedding Planner", team: "Planning", city: "Ranchi", type: "Full-time" },
  { title: "Décor Designer (3D)", team: "Design", city: "New Delhi", type: "Full-time" },
  { title: "Production Manager", team: "Production", city: "Patna", type: "Full-time" },
  { title: "Hospitality Coordinator", team: "Hospitality", city: "Patna", type: "Full-time" },
  { title: "Guest Relations Executive", team: "Hospitality", city: "Destinations (travel)", type: "Seasonal" },
  { title: "Client Relationship Manager", team: "Sales", city: "New Delhi", type: "Full-time" },
  { title: "Social Media & Content Lead", team: "Marketing", city: "Patna", type: "Full-time" },
];

const STEPS = [
  ["Apply", "CV and, for designers, a portfolio."],
  ["Conversation", "A 30-minute call with the team lead."],
  ["Task", "A short, paid planning or design exercise."],
  ["Offer", "Meet the founders, then an offer within a week."],
];

export default function Careers() {
  return (
    <PageShell active="none" waMessage={WA_MESSAGE}>
      {/* HERO */}
      <section className="container-x grid items-center gap-12 pb-20 pt-8 lg:grid-cols-2 lg:pb-24 lg:pt-12">
        <div className="flex flex-col gap-6">
          <nav aria-label="Breadcrumb" className="enter text-sm text-fern">
            <Link href="/" className="text-fern">Home</Link> / Careers
          </nav>
          <span className="enter eyebrow">We’re hiring · [N] open roles</span>
          <h1 className="h1 enter-delay-1 m-0 text-[clamp(46px,5.6vw,80px)] leading-[1.02]">Build the most important days <em>of people’s lives.</em></h1>
          <p className="enter-delay-2 m-0 text-[19px] text-fern">Join our planners, stylists, carpenters, light designers, choreographers and travel agents in Patna, Ranchi and New Delhi.</p>
          <a href="#roles" className="enter-delay-3 self-start rounded-[2px] bg-moss px-[30px] py-[17px] font-medium text-ivory no-underline transition-colors duration-200 hover:bg-ink hover:text-ivory">See open roles</a>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Picture
            slug="sangeet-dance"
            alt="Guests dancing at a sangeet produced by Wedlock"
            sizes="(min-width: 1024px) 300px, 50vw"
            priority
            position="45% 45%"
            className="row-span-2 block h-full min-h-[360px] w-full rounded object-cover sm:min-h-[520px]"
          />
          <Picture
            slug="floral-mandap"
            alt="A floral mandap built by the Wedlock styling studio"
            sizes="(min-width: 1024px) 300px, 50vw"
            className="block h-full w-full rounded object-cover"
          />
          <div className="flex flex-col justify-end rounded bg-ink p-5 text-ivory sm:p-6">
            <span className="font-serif text-[36px] font-light leading-none sm:text-[44px]">650+</span>
            <span className="text-sm text-mist">celebrations, 3 offices</span>
          </div>
        </div>
      </section>

      {/* PERKS */}
      <section className="bg-stone">
        <div className="container-x flex flex-col gap-12 py-20 lg:py-28">
          <h2 className="reveal h2 m-0">Why people stay</h2>
          <div className="reveal-stagger grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PERKS.map(([title, text]) => (
              <article key={title} className="flex flex-col gap-2.5 rounded-[10px] bg-ivory p-7">
                <h3 className="m-0 font-serif text-[22px] font-normal">{title}</h3>
                <p className="m-0 text-[15px] text-fern">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section id="roles" className="container-x flex scroll-mt-6 flex-col gap-8 py-20 lg:py-28">
        <RoleList roles={ROLES} />
      </section>

      {/* PROCESS */}
      <section className="container-x pb-20 lg:pb-28">
        <div className="reveal flex flex-col gap-10 rounded-lg bg-ink px-7 py-14 text-ivory sm:px-14 sm:py-16">
          <h2 className="m-0 font-serif text-[clamp(32px,3.4vw,48px)] font-light">How we hire</h2>
          <ol className="m-0 grid list-none gap-7 p-0 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map(([title, text], i) => {
              const last = i === STEPS.length - 1;
              return (
                <li key={title} className="flex flex-col gap-2.5">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-full font-serif ${last ? "bg-ivory text-ink" : "border border-[#8E9784]"}`}>{i + 1}</span>
                  <span className="font-serif text-[22px]">{title}</span>
                  <span className="text-[15px] text-mist">{text}</span>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* INTERNSHIP */}
      <section className="container-x pb-20 lg:pb-28">
        <div className="reveal flex flex-wrap items-center justify-between gap-8 rounded-lg bg-sage p-7 sm:p-14">
          <div className="flex max-w-[640px] flex-col gap-2.5">
            <h2 className="m-0 font-serif text-[clamp(30px,3.2vw,44px)] font-light leading-[1.1]">Wedlock Academy — season internships</h2>
            <span className="text-olive">A [6]-month programme for hospitality and design graduates. Applications open every [July].</span>
          </div>
          <Link href="/contact" className="rounded-[2px] bg-moss px-[30px] py-[17px] font-medium text-ivory no-underline transition-colors duration-200 hover:bg-ink hover:text-ivory">Register interest</Link>
        </div>
      </section>
    </PageShell>
  );
}
