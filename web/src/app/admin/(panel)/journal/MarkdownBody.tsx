"use client";

import { useRef } from "react";

type Tool =
  | { label: string; title: string; kind: "wrap"; before: string; after: string; placeholder: string }
  | { label: string; title: string; kind: "line"; prefix: string | ((i: number) => string) }
  | { label: string; title: string; kind: "insert"; text: (sel: string) => string };

const TOOLS: Tool[] = [
  { label: "B", title: "Bold", kind: "wrap", before: "**", after: "**", placeholder: "bold text" },
  { label: "I", title: "Italic", kind: "wrap", before: "_", after: "_", placeholder: "italic text" },
  { label: "H2", title: "Heading", kind: "line", prefix: "## " },
  { label: "H3", title: "Sub-heading", kind: "line", prefix: "### " },
  { label: "“ ”", title: "Quote", kind: "line", prefix: "> " },
  { label: "• List", title: "Bullet list", kind: "line", prefix: "- " },
  { label: "1. List", title: "Numbered list", kind: "line", prefix: (i) => `${i + 1}. ` },
  { label: "Link", title: "Link", kind: "insert", text: (sel) => `[${sel || "link text"}](https://)` },
  { label: "Photo", title: "Insert photo from Media library", kind: "insert", text: (sel) => `\n![${sel || "Describe the photo"}](media:floral-mandap)\n` },
  { label: "Video", title: "Embed a YouTube film", kind: "insert", text: () => "\n[youtube](https://www.youtube.com/watch?v=)\n" },
];

const INITIAL = `Most couples start planning a Jaipur wedding 12 months out. Here is what we book, and in what order.

## 12 months before
- Fix the dates and the guest count band
- Shortlist **three palaces**, visit two

## 9 months before
Block hotel rooms for out-of-town guests. In wedding season, Jaipur rooms go fast.

![The palace courtyard at dusk](media:jaipur-courtyard)

> "Book the venue first. Everything else follows from it." — Rahul Ranjan

## 6 months before
...`;

export function MarkdownBody() {
  const ref = useRef<HTMLTextAreaElement>(null);

  const apply = (tool: Tool) => {
    const ta = ref.current;
    if (!ta) return;
    const { selectionStart: s, selectionEnd: e, value } = ta;
    const sel = value.slice(s, e);

    if (tool.kind === "wrap") {
      const inner = sel || tool.placeholder;
      ta.setRangeText(tool.before + inner + tool.after, s, e, "end");
      // select the inner text so typing replaces the placeholder
      ta.setSelectionRange(s + tool.before.length, s + tool.before.length + inner.length);
    } else if (tool.kind === "line") {
      const lineStart = value.lastIndexOf("\n", s - 1) + 1;
      const block = value.slice(lineStart, e);
      const next = block
        .split("\n")
        .map((line, i) => (typeof tool.prefix === "function" ? tool.prefix(i) : tool.prefix) + line)
        .join("\n");
      ta.setRangeText(next, lineStart, e, "end");
    } else {
      ta.setRangeText(tool.text(sel), s, e, "end");
    }
    ta.focus();
  };

  return (
    <div className="flex flex-col">
      <span id="body-label" className="mb-1.5 text-[13px] font-semibold">
        Body
      </span>
      <div role="toolbar" aria-label="Formatting" className="flex flex-wrap gap-0.5 rounded-t-[2px] border border-b-0 border-line bg-ivory p-1.5">
        {TOOLS.map((t) => (
          <button
            key={t.title}
            type="button"
            title={t.title}
            aria-label={t.title}
            onMouseDown={(ev) => ev.preventDefault()}
            onClick={() => apply(t)}
            className="cursor-pointer rounded-[2px] border-none bg-transparent px-2.5 py-1.5 text-[13px] font-semibold text-ink hover:bg-stone"
          >
            {t.label}
          </button>
        ))}
      </div>
      <textarea
        ref={ref}
        rows={16}
        aria-labelledby="body-label"
        aria-describedby="body-help"
        defaultValue={INITIAL}
        className="resize-y rounded-b-[2px] border border-line p-3.5 font-mono text-[13px] leading-[1.7] text-ink"
      />
      <span id="body-help" className="mt-1.5 text-xs text-fern">
        Written in Markdown, like WhatsApp formatting. Photos are picked from the Media library, so they arrive already compressed.
      </span>
    </div>
  );
}
