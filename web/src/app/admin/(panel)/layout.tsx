import Link from "next/link";
import { Picture } from "@/components/Picture";
import { AdminNav } from "../AdminNav";

function Brand() {
  return (
    <Link href="/admin" className="flex items-center gap-2.5 px-2 text-ivory no-underline hover:text-ivory">
      <svg width="30" height="30" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
        <circle cx="13" cy="17" r="9" />
        <circle cx="21" cy="17" r="9" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[22px] uppercase tracking-[0.14em]">Wedlock</span>
        <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-gold-light">Admin</span>
      </span>
    </Link>
  );
}

function SidebarFooter() {
  return (
    <div className="mt-auto flex flex-col gap-3 border-t border-[#3E4438] pt-4">
      <Link href="/" className="px-2 text-[13px] text-mist hover:text-ivory">View website ↗</Link>
      <div className="flex items-center gap-2.5 px-2">
        <Picture slug="team-aabish-hassan" alt="" sizes="36px" position="50% 15%" className="h-9 w-9 rounded-full object-cover" />
        <span className="flex flex-col leading-tight">
          <span className="text-[13px] text-ivory">Syed Aabish Hassan</span>
          <span className="text-[11px] text-[#8E9784]">Admin (owner)</span>
        </span>
      </div>
      <Link href="/admin/login" className="px-2 text-[13px] text-mist hover:text-ivory">Sign out</Link>
    </div>
  );
}

export default function AdminPanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-ivory text-[15px] leading-normal lg:flex">
      {/* Desktop sidebar */}
      <aside className="sticky top-0 hidden h-screen w-64 shrink-0 flex-col gap-6 overflow-y-auto bg-ink px-4 py-6 text-mist lg:flex">
        <Brand />
        <AdminNav />
        <SidebarFooter />
      </aside>

      {/* Phone / tablet: top bar with a <details> menu */}
      <details className="group sticky top-0 z-40 bg-ink text-mist lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3">
          <Brand />
          <span className="rounded bg-ink-2 px-3 py-2 text-[13px] text-ivory">Menu</span>
        </summary>
        <div className="flex max-h-[80vh] flex-col gap-6 overflow-y-auto px-4 pb-6">
          <AdminNav />
          <SidebarFooter />
        </div>
      </details>

      <main id="main" className="min-w-0 flex-1 px-4 pb-14 pt-6 sm:px-10 sm:pt-8">
        <div className="mb-6 rounded border border-line bg-stone px-4 py-2.5 text-[13px] text-fern">
          Demo mode · sample data · nothing is saved yet. Buttons show how each screen will work.
        </div>
        {children}
      </main>
    </div>
  );
}
