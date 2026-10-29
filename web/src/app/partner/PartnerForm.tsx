"use client";

import { waLink } from "@/lib/site";

const CATEGORIES = ["Décor & florals", "Catering", "Venue", "Photography & film", "Artists & entertainment", "Make-up & mehendi", "Other"];

/** Vendor application. Until the vendor inbox exists, every detail is handed to WhatsApp. */
export function PartnerForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? "").trim() || "-";
    const msg = [
      "Hi Wedlock! I'm a vendor and would like to partner with Wedlock.",
      `Business name: ${v("business")}`,
      `Category: ${v("category")}`,
      `City: ${v("city")}`,
      `Phone: ${v("phone")}`,
      `Portfolio / Instagram: ${v("portfolio")}`,
    ].join("\n");
    window.open(waLink(msg), "_blank", "noopener");
  }

  const label = "flex flex-col gap-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-light";
  const field =
    "border-0 border-b border-[#6B7262] bg-transparent py-2.5 text-[17px] normal-case tracking-normal text-ivory outline-none focus:border-gold-light";
  return (
    <form onSubmit={onSubmit} aria-label="Partner application" className="grid gap-6 sm:grid-cols-2">
      <label className={label}>Business name<input name="business" type="text" required autoComplete="organization" className={field} /></label>
      <label className={label}>
        Category
        <select name="category" className={`${field} [&>option]:text-ink`}>
          {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
        </select>
      </label>
      <label className={label}>City<input name="city" type="text" required autoComplete="address-level2" className={field} /></label>
      <label className={label}>Phone<input name="phone" type="tel" required autoComplete="tel" inputMode="tel" placeholder="+91" className={`${field} placeholder:text-[#6B7262]`} /></label>
      <label className={`${label} sm:col-span-2`}>Portfolio or Instagram link<input name="portfolio" type="url" placeholder="https://" className={`${field} placeholder:text-[#6B7262]`} /></label>
      <div className="flex flex-col gap-3 sm:col-span-2">
        <button type="submit" className="cursor-pointer self-start rounded-[2px] border-none bg-ivory px-[34px] py-[18px] text-xs font-semibold uppercase tracking-[0.18em] text-ink hover:bg-gold-light">
          Send application
        </button>
        <span className="text-[13px] text-mist">Sending opens WhatsApp with your details filled in.</span>
      </div>
    </form>
  );
}
