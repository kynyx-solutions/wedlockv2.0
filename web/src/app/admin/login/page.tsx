import type { Metadata } from "next";
import Link from "next/link";
import { Picture } from "@/components/Picture";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to the Wedlock admin panel.",
};

const input = "rounded-[2px] border border-line bg-white p-3.5 text-base font-normal text-ink";

export default function AdminLoginPage() {
  return (
    <main id="main" className="flex min-h-screen flex-wrap bg-ivory text-[15px] text-ink">
      <div className="relative min-h-[420px] flex-[1_1_520px] overflow-hidden bg-ink">
        <Picture
          slug="bride-red-veil"
          alt=""
          sizes="(min-width: 1000px) 52vw, 100vw"
          priority
          position="66% 30%"
          className="absolute inset-0 h-full w-full object-cover opacity-85"
        />
        <div className="absolute inset-x-6 bottom-6 flex flex-col gap-1.5 text-ivory sm:inset-x-10 sm:bottom-10">
          <span className="font-serif text-[34px] font-light leading-[1.15]">
            Every wedding, from first message <em>to last guest.</em>
          </span>
          <span className="text-[13px] uppercase tracking-[0.18em] text-mist-2">Wedlock admin</span>
        </div>
      </div>

      <div className="flex flex-[1_1_480px] items-center justify-center px-6 py-12 sm:px-8">
        {/* Demo: no submit button, so pressing Enter does not post the form. "Sign in" is a link. */}
        <form className="flex w-full max-w-[400px] flex-col gap-[22px]">
          <div className="flex items-center gap-2.5">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
              <circle cx="13" cy="17" r="9" />
              <circle cx="21" cy="17" r="9" />
            </svg>
            <span className="font-serif text-[28px] font-normal tracking-[0.16em]">WEDLOCK</span>
          </div>
          <h1 className="m-0 font-serif text-[44px] font-light leading-[1.05]">Sign in</h1>
          <label className="flex flex-col gap-1.5 text-[13px] font-semibold">
            Email
            <input type="email" defaultValue="aabish@wedlock.co.in" autoComplete="username" className={input} />
          </label>
          <label className="flex flex-col gap-1.5 text-[13px] font-semibold">
            Password
            <input type="password" defaultValue="••••••••••" autoComplete="current-password" className={input} />
          </label>
          <label className="flex flex-col gap-1.5 text-[13px] font-semibold">
            6-digit code from your authenticator app
            <input type="text" inputMode="numeric" autoComplete="one-time-code" placeholder="000 000" className={`${input} tracking-[0.2em]`} />
          </label>
          <Link
            href="/admin"
            className="rounded-[2px] bg-ink p-4 text-center text-[13px] font-semibold uppercase tracking-[0.14em] text-ivory no-underline hover:bg-moss hover:text-ivory"
          >
            Sign in
          </Link>
          <div className="flex justify-between text-sm">
            <a href="#">Forgot password?</a>
            <Link href="/">Back to website</Link>
          </div>
          <span className="border-t border-line pt-4 text-xs text-fern">
            Two-factor sign-in is required for every account. Client data is stored in India.
          </span>
        </form>
      </div>
    </main>
  );
}
