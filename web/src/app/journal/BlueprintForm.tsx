"use client";

import { waLink } from "@/lib/site";

/** Until the lead database is connected, the PDF request is handed to WhatsApp. */
export function BlueprintForm() {
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email");
    const msg = `Hi Wedlock! Please send me the destination wedding blueprint (PDF).\nEmail: ${email}`;
    window.open(waLink(msg), "_blank", "noopener");
  }

  return (
    <div className="flex flex-col gap-2">
      <form onSubmit={onSubmit} className="flex flex-wrap gap-2.5">
        <label className="flex flex-[1_1_240px]">
          <span className="sr-only">Email address</span>
          <input name="email" type="email" required autoComplete="email" placeholder="Your email address" className="field px-5 py-4" />
        </label>
        <button type="submit" className="w-full cursor-pointer rounded-[2px] bg-moss px-[26px] py-4 text-[15px] font-medium text-ivory hover:bg-ink sm:w-auto">
          Send me the PDF
        </button>
      </form>
      <span className="text-[13px] text-olive">Your request opens in WhatsApp so we can send the PDF.</span>
    </div>
  );
}
