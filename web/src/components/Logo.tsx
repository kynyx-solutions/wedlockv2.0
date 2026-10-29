export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className={`flex items-center gap-2.5 ${tone === "light" ? "text-ivory" : "text-ink"}`}>
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
        <circle cx="13" cy="17" r="9" />
        <circle cx="21" cy="17" r="9" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[24px] font-normal uppercase tracking-[0.16em] sm:text-[30px]">Wedlock</span>
        <span className={`mt-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] ${tone === "light" ? "text-gold-light" : "text-gold"}`}>
          Weddings · Since 2014
        </span>
      </span>
    </span>
  );
}
