"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const GROUPS = [
  { name: "Overview", items: [{ label: "Dashboard", href: "/admin", badge: "" }] },
  {
    name: "Business",
    items: [
      { label: "Leads", href: "/admin/leads", badge: "6 new" },
      { label: "Events", href: "/admin/events", badge: "" },
      { label: "Vendors", href: "/admin/vendors", badge: "2" },
      { label: "Messages", href: "/admin/messages", badge: "" },
    ],
  },
  {
    name: "Website",
    items: [
      { label: "Couple stories", href: "/admin/stories", badge: "" },
      { label: "Journal", href: "/admin/journal", badge: "" },
      { label: "Media library", href: "/admin/media", badge: "" },
      { label: "Site content", href: "/admin/content", badge: "" },
      { label: "Packages & add-ons", href: "/admin/packages", badge: "" },
    ],
  },
  { name: "Settings", items: [{ label: "Users & roles", href: "/admin/users", badge: "" }] },
];

export function AdminNav() {
  const path = usePathname();
  const isActive = (href: string) => (href === "/admin" ? path === "/admin" : path.startsWith(href));
  return (
    <nav aria-label="Admin" className="flex flex-col gap-[18px]">
      {GROUPS.map((g) => (
        <div key={g.name} className="flex flex-col gap-0.5">
          <span className="px-2 pb-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8E9784]">{g.name}</span>
          {g.items.map((i) => {
            const on = isActive(i.href);
            return (
              <Link
                key={i.href}
                href={i.href}
                aria-current={on ? "page" : undefined}
                className={`flex items-center justify-between rounded border-l-2 px-3 py-2.5 text-sm no-underline ${on ? "border-champagne bg-ink-2 text-ivory" : "border-transparent text-mist hover:bg-ink-2 hover:text-ivory"}`}
              >
                {i.label}
                {i.badge && <span className="text-[11px] text-gold-light">{i.badge}</span>}
              </Link>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
