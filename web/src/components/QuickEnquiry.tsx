"use client";

import { waLink } from "@/lib/site";

/**
 * Short enquiry form. Until the lead database is connected (PRD section 11),
 * it hands the details to WhatsApp so no enquiry is lost.
 */
export function QuickEnquiry() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const msg = `Hi Wedlock! I'd like a free consultation.\nName: ${f.get("name")}\nPhone: ${f.get("phone")}\nEmail: ${f.get("email") || "-"}\nCelebrating: ${f.get("occasion")}`;
    window.open(waLink(msg), "_blank", "noopener");
  }

  const label = "flex flex-col gap-1.5 text-sm font-medium";
  return (
    <form onSubmit={onSubmit} className="grid gap-3 sm:grid-cols-2">
      <label className={label}>Name<input name="name" required autoComplete="name" className="field" /></label>
      <label className={label}>Phone<input name="phone" type="tel" required autoComplete="tel" inputMode="tel" className="field" /></label>
      <label className={label}>Email<input name="email" type="email" autoComplete="email" className="field" /></label>
      <label className={label}>
        What are you celebrating?
        <select name="occasion" className="field">
          <option>Wedding</option>
          <option>Engagement / Roka</option>
          <option>Anniversary</option>
          <option>Birthday</option>
          <option>Family &amp; private</option>
        </select>
      </label>
      <button type="submit" className="btn btn-dark mt-2 cursor-pointer sm:col-span-2">Send message</button>
    </form>
  );
}
