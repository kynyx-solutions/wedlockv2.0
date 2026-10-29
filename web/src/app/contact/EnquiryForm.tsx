"use client";

import Link from "next/link";
import { waLink } from "@/lib/site";

const EVENTS = ["Roka / Engagement", "Mehendi", "Haldi", "Sangeet", "Cocktail", "Wedding", "Reception", "Post-wedding brunch"];

/**
 * Full wedding enquiry. Until the lead database is connected (PRD section 11),
 * it hands every entered detail to WhatsApp so no enquiry is lost.
 */
export function EnquiryForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim() || "-";
    const events = f.getAll("events").join(", ") || "-";
    const msg = [
      "Hi Wedlock! I'd like to book a free consultation for my wedding.",
      `Name: ${v("name")}`,
      `Partner's name: ${v("partner")}`,
      `Phone (WhatsApp): ${v("phone")}`,
      `Email: ${v("email")}`,
      `Wedding date: ${v("date")}`,
      `City / destination: ${v("city")}`,
      `Guests: ${v("guests")}`,
      `Total budget: ${v("budget")}`,
      `Service: ${v("service")}`,
      `Events to plan: ${events}`,
      `About our wedding: ${v("about")}`,
      `Heard about you via: ${v("source")}`,
      "I agree to be contacted on WhatsApp and phone about my enquiry.",
    ].join("\n");
    window.open(waLink(msg), "_blank", "noopener");
  }

  const label = "flex flex-col gap-1.5 text-sm font-medium";
  const field = "field rounded";
  return (
    <form onSubmit={onSubmit} aria-label="Wedding enquiry" className="enter-delay-2 grid gap-3.5 rounded-lg bg-sage p-6 sm:grid-cols-2 sm:p-10">
      <h2 className="m-0 font-serif text-[28px] font-normal sm:col-span-2">Wedding enquiry</h2>
      <label className={label}>Your name<input name="name" type="text" required autoComplete="name" className={field} /></label>
      <label className={label}>Partner’s name<input name="partner" type="text" className={field} /></label>
      <label className={label}>Phone (WhatsApp)<input name="phone" type="tel" required autoComplete="tel" inputMode="tel" placeholder="+91" className={field} /></label>
      <label className={label}>Email<input name="email" type="email" autoComplete="email" className={field} /></label>
      <label className={label}>Wedding date<input name="date" type="date" className={field} /></label>
      <label className={label}>City / destination<input name="city" type="text" placeholder="e.g. Udaipur" className={field} /></label>
      <label className={label}>
        Guests
        <select name="guests" className={field}>
          <option>Under 100</option>
          <option>100–300</option>
          <option>300–600</option>
          <option>600+</option>
        </select>
      </label>
      <div className="flex flex-col gap-1.5">
        <label className={label}>
          Total budget
          <select name="budget" className={field}>
            <option>[₹ band 1]</option>
            <option>[₹ band 2]</option>
            <option>[₹ band 3]</option>
            <option>[₹ band 4]+</option>
            <option>Prefer to discuss</option>
          </select>
        </label>
        <span className="text-[13px] text-olive">
          Not sure? <Link href="/wedding-budget-calculator">Estimate it in 1 minute →</Link>
        </span>
      </div>
      <label className={`${label} sm:col-span-2`}>
        Service
        <select name="service" className={field}>
          <option>Full Planning</option>
          <option>Partial Planning</option>
          <option>Wedding Week</option>
          <option>Destination wedding</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <fieldset className="m-0 flex flex-col gap-2 border-none p-0 sm:col-span-2">
        <legend className="mb-2 p-0 text-sm font-medium">Events to plan</legend>
        <div className="flex flex-wrap gap-2">
          {EVENTS.map((ev) => (
            <label key={ev} className="flex cursor-pointer items-center gap-2 rounded-[2px] bg-ivory px-3.5 py-[9px] text-sm">
              <input type="checkbox" name="events" value={ev} className="accent-moss" />
              {ev}
            </label>
          ))}
        </div>
      </fieldset>
      <label className={`${label} sm:col-span-2`}>
        Tell us about your wedding
        <textarea name="about" rows={4} className={`${field} resize-y`} />
      </label>
      <label className={`${label} sm:col-span-2`}>
        How did you hear about us?
        <select name="source" className={field}>
          <option>Instagram</option>
          <option>Google</option>
          <option>A friend or family</option>
          <option>A venue</option>
          <option>Facebook</option>
          <option>Other</option>
        </select>
      </label>
      <label className="flex items-start gap-2.5 text-sm text-olive sm:col-span-2">
        <input type="checkbox" name="consent" required defaultChecked className="mt-1 accent-moss" />
        I agree to be contacted on WhatsApp and phone about my enquiry.
      </label>
      <button type="submit" className="mt-1.5 cursor-pointer rounded-[2px] bg-moss p-[18px] text-base font-medium text-ivory hover:bg-ink sm:col-span-2">
        Send enquiry
      </button>
      <span className="text-center text-[13px] text-olive sm:col-span-2">
        Sending opens WhatsApp with your details filled in.<br />
        We reply within 24 hours. Your details are never shared.
      </span>
    </form>
  );
}
