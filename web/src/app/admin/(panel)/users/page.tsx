import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users & roles",
  description: "Team members, their roles and what each role can do.",
};

const USERS = [
  { name: "Syed Aabish Hassan", email: "[email]@wedlock.co.in", role: "Admin (owner)", office: "Patna", last: "now" },
  { name: "Rahul Ranjan", email: "[email]@wedlock.co.in", role: "Planner", office: "Patna", last: "1 hour ago" },
  { name: "Aliwaris Khan", email: "[email]@wedlock.co.in", role: "Planner", office: "New Delhi", last: "yesterday" },
  { name: "[Support name]", email: "[email]@wedlock.co.in", role: "Customer support", office: "Patna", last: "20 min ago" },
  { name: "[Content writer]", email: "[email]", role: "Editor", office: "Remote", last: "last week" },
];

const MATRIX: [area: string, admin: string, planner: string, editor: string, support: string][] = [
  ["New enquiries (inbox)", "Full", "Own leads", "—", "Reply, log calls, assign to a planner"],
  ["Lead pipeline & proposals", "Full", "Own leads", "—", "View stage only"],
  ["Messages to couples", "Full", "Own leads", "—", "Yes, from templates"],
  ["Messages to vendors", "Full", "Own events", "—", "—"],
  ["Events & vendors", "Full", "Own events", "—", "View dates only"],
  ["Stories, journal, media", "Full", "View", "Write & publish", "—"],
  ["Packages & prices", "Full", "View", "—", "View"],
  ["Site content", "Full", "—", "Edit text", "—"],
  ["Users, export, delete client data", "Full", "—", "—", "—"],
];

const panel = "rounded-xl border border-line bg-white";
const label = "flex flex-col gap-1.5 text-[13px] font-semibold";
const input = "rounded-[2px] border border-line bg-white p-2.5 text-sm font-normal";
const th = "px-2 font-semibold";

export default function AdminUsersPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <span className="text-[13px] text-fern">Settings</span>
        <h1 className="m-0 font-serif text-[36px] font-light leading-[1.05] sm:text-[44px]">Users &amp; roles</h1>
      </div>

      <div className="flex flex-wrap items-start gap-5">
        <section className={`${panel} min-w-0 flex-[999_1_520px] overflow-x-auto px-[22px] py-2`}>
          <table className="w-full min-w-[560px] border-collapse text-sm">
            <thead>
              <tr className="text-left text-xs uppercase tracking-[0.08em] text-fern">
                <th className={`${th} pb-2.5 pl-0 pt-3`}>Person</th>
                <th className={`${th} pb-2.5 pt-3`}>Role</th>
                <th className={`${th} pb-2.5 pt-3`}>Office</th>
                <th className={`${th} pb-2.5 pr-0 pt-3`}>Last active</th>
              </tr>
            </thead>
            <tbody>
              {USERS.map((u) => (
                <tr key={u.name} className="border-t border-stone">
                  <td className="py-3 pl-0 pr-2">
                    <strong className="font-semibold">{u.name}</strong>
                    <div className="text-xs text-fern">{u.email}</div>
                  </td>
                  <td className="px-2 py-3">{u.role}</td>
                  <td className="px-2 py-3">{u.office}</td>
                  <td className="py-3 pl-2 pr-0 text-fern">{u.last}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className={`${panel} flex min-w-0 flex-[1_1_300px] flex-col gap-3 px-5 py-[18px]`}>
          <h2 className="m-0 font-serif text-2xl font-normal">Invite someone</h2>
          <label className={label}>
            Email
            <input type="email" placeholder="name@wedlock.co.in" className={input} />
          </label>
          <label className={label}>
            Role
            <select className={input}>
              <option>Planner</option>
              <option>Customer support</option>
              <option>Editor</option>
              <option>Admin (owner)</option>
            </select>
          </label>
          <button type="button" className="cursor-pointer rounded-[2px] bg-ink p-3 text-center text-xs font-semibold uppercase tracking-[0.12em] text-ivory hover:bg-moss">
            Send invite
          </button>
        </section>
      </div>

      <section className={`${panel} overflow-x-auto px-[22px] pb-3.5 pt-2`}>
        <table className="w-full min-w-[640px] border-collapse text-sm">
          <caption className="pb-2 pt-3.5 text-left font-serif text-2xl">What each role can do</caption>
          <thead>
            <tr className="text-left text-xs uppercase tracking-[0.08em] text-fern">
              <th className={`${th} py-2.5 pl-0`}>Area</th>
              <th className={`${th} py-2.5`}>Admin (owner)</th>
              <th className={`${th} py-2.5`}>Planner</th>
              <th className={`${th} py-2.5`}>Editor</th>
              <th className={`${th} py-2.5 pr-0`}>Customer support</th>
            </tr>
          </thead>
          <tbody>
            {MATRIX.map(([area, a, p, e, s]) => (
              <tr key={area} className="border-t border-stone">
                <th scope="row" className="py-2.5 pl-0 pr-2 text-left font-semibold">
                  {area}
                </th>
                <td className="px-2 py-2.5">{a}</td>
                <td className="px-2 py-2.5">{p}</td>
                <td className="px-2 py-2.5">{e}</td>
                <td className="py-2.5 pl-2 pr-0">{s}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
