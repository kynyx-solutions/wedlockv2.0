"use client";

import { useState } from "react";

/** Copies the current page URL; falls back silently where the clipboard is unavailable. */
export function CopyLink() {
  const [copied, setCopied] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard blocked: nothing to do */
    }
  }
  return (
    <button type="button" onClick={copy} className="cursor-pointer rounded-[2px] border-none bg-stone px-3.5 py-2 text-sm text-ink hover:bg-sage">
      <span aria-live="polite">{copied ? "Link copied" : "Copy link"}</span>
    </button>
  );
}
