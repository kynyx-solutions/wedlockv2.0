"use client";

import Link from "next/link";
import { useState } from "react";

const wa = (name: string) => `https://wa.me/?text=${encodeURIComponent(`Namaste ${name}, Wedlock here. Are you available on `)}`;

const ROWS: [name: string, cat: string, city: string, rating: string, last: string][] = [
  ["Phoolwari Decor", "Decor", "Patna", "★★★★★", "Pooja & Karan"],
  ["Raag Sound & Light", "Sound & light", "Patna", "★★★★☆", "Pooja & Karan"],
  ["Bihar Caterers", "Catering", "Patna", "★★★★★", "Pooja & Karan"],
  ["Lens & Light Studio", "Photo & film", "New Delhi", "★★★★★", "Sana & Imran"],
  ["Mehendi by Nazia", "Mehendi", "Patna", "★★★★☆", "Ankita & Anunay"],
  ["Shagun Gifts", "Return gifts", "Patna", "new", "—"],
  ["Jharkhand Tent House", "Decor", "Ranchi", "★★★☆☆", "Aditya & family"],
  ["Dhol Gang Delhi", "Entertainment", "New Delhi", "★★★★★", "Sana & Imran"],
];

const CATS = ["All", "Decor", "Catering", "Photo & film", "Sound & light", "Mehendi", "Entertainment", "Return gifts"];

const th = "px-2 pb-2.5 pt-3 font-semibold";

export function VendorTable() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const query = q.trim().toLowerCase();
  const rows = ROWS.filter(([name, c, city]) => (cat === "All" || c === cat) && (!query || `${name} ${city}`.toLowerCase().includes(query)));

  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        {CATS.map((label) => {
          const on = label === cat;
          return (
            <button
              key={label}
              type="button"
              onClick={() => setCat(label)}
              aria-pressed={on}
              className={`cursor-pointer rounded-[2px] px-3.5 py-2 text-[13px] ${on ? "bg-ink text-ivory" : "bg-stone text-ink hover:bg-mist-2"}`}
            >
              {label}
            </button>
          );
        })}
        <label className="flex w-full items-center rounded-[2px] border border-line bg-white px-2.5 sm:ml-auto sm:w-auto sm:min-w-[220px]">
          <span className="sr-only">Search vendors</span>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search name, city or phone"
            className="flex-1 border-none bg-transparent py-[9px] text-[13px] outline-none"
          />
        </label>
      </div>

      <section className="overflow-x-auto rounded-xl border border-line bg-white px-[22px] py-2">
        <table className="w-full min-w-[820px] border-collapse text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-[0.08em] text-fern">
              <th className={`${th} pl-0`}>
                <span className="sr-only">Select</span>
              </th>
              <th className={th}>Vendor</th>
              <th className={th}>Category</th>
              <th className={th}>City</th>
              <th className={th}>Our rating</th>
              <th className={th}>Last wedding</th>
              <th className={`${th} pr-0`}>Contact</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([name, c, city, rating, last]) => (
              <tr key={name} className="border-t border-stone">
                <td className="py-3 pl-0 pr-2">
                  <input type="checkbox" aria-label={`Select ${name}`} />
                </td>
                <td className="p-2 py-3 font-semibold">{name}</td>
                <td className="p-2 py-3">{c}</td>
                <td className="p-2 py-3">{city}</td>
                <td className="p-2 py-3 text-gold">{rating}</td>
                <td className="p-2 py-3 text-fern">{last}</td>
                <td className="whitespace-nowrap py-3 pl-2 pr-0">
                  <a
                    href={wa(name)}
                    target="_blank"
                    rel="noopener"
                    aria-label={`WhatsApp ${name}`}
                    className="rounded-[2px] bg-[#1F7A45] px-2.5 py-1.5 text-xs font-semibold text-white no-underline hover:text-white"
                  >
                    WhatsApp
                  </a>{" "}
                  <Link href="/admin/messages" aria-label={`Email ${name}`} className="rounded-[2px] bg-stone px-2.5 py-1.5 text-xs font-semibold no-underline">
                    Email
                  </Link>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr className="border-t border-stone">
                <td colSpan={7} className="py-4 text-fern">
                  No vendors match. Try another category or search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
    </>
  );
}
