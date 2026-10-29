// Sample data for the admin demo (ported from the AdminXxx.dc.html boards). Nothing here is real.

/** Placeholder number used by the boards for couples' WhatsApp / phone. */
export const DEMO_PHONE = "910000000000";
export const DEMO_TEL = "tel:+910000000000";
export const demoWa = (text?: string) =>
  `https://wa.me/${DEMO_PHONE}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const ADMIN = {
  dashboard: "/admin",
  leads: "/admin/leads",
  lead: (id: number) => `/admin/leads/${id}`,
  events: "/admin/events",
  vendors: "/admin/vendors",
  messages: "/admin/messages",
  stories: "/admin/stories",
  journal: "/admin/journal",
  media: "/admin/media",
  content: "/admin/content",
  packages: "/admin/packages",
  users: "/admin/users",
} as const;

/* ------------------------------------------------------------------ Leads */

export const STAGES = ["New", "Contacted", "Meeting", "Proposal sent", "Won", "Lost"] as const;
export type Stage = (typeof STAGES)[number];

export const STAGE_COLOR: Record<Stage, string> = {
  New: "#56604A",
  Contacted: "#7E6233",
  Meeting: "#B8975F",
  "Proposal sent": "#4E5548",
  Won: "#23271F",
  Lost: "#BFC5B6",
};

export type Lead = {
  id: number;
  name: string;
  /** First name used in message templates */
  greet: string;
  date: string;
  city: string;
  guests: string;
  source: "WhatsApp" | "Website" | "Instagram" | "Referral";
  owner: string;
  stage: Stage;
  due: string;
  late?: boolean;
};

export const LEADS: Lead[] = [
  { id: 1042, name: "Priya & Rohan", greet: "Priya", date: "14 Feb 2027", city: "Patna", guests: "300", source: "WhatsApp", owner: "Unassigned", stage: "New", due: "Call today" },
  { id: 1041, name: "Neha Sinha", greet: "Neha", date: "Dec 2027", city: "Jaipur", guests: "200", source: "Website", owner: "Unassigned", stage: "New", due: "Call today" },
  { id: 1043, name: "Vikram & Ishaan’s parents", greet: "Vikram", date: "Apr 2027", city: "Patna", guests: "600", source: "Referral", owner: "Unassigned", stage: "New", due: "Call today" },
  { id: 1039, name: "Aditya & family", greet: "Aditya", date: "22 Nov 2027", city: "Ranchi", guests: "400", source: "Instagram", owner: "Rahul R.", stage: "Contacted", due: "Send shortlist · today" },
  { id: 1036, name: "Meera Jha", greet: "Meera", date: "Feb 2027", city: "Patna", guests: "250", source: "Website", owner: "Rahul R.", stage: "Contacted", due: "Overdue 2 days", late: true },
  { id: 1037, name: "Sana & Imran", greet: "Sana", date: "5 Mar 2027", city: "New Delhi", guests: "350", source: "Referral", owner: "Aliwaris K.", stage: "Meeting", due: "Studio, Sat 11 am" },
  { id: 1038, name: "The Gupta family", greet: "Gupta ji", date: "Nov 2027", city: "Goa", guests: "150", source: "WhatsApp", owner: "Rahul R.", stage: "Meeting", due: "Video call, Mon" },
  { id: 1034, name: "Kavya Mehra", greet: "Kavya", date: "Jan 2028", city: "Udaipur", guests: "320", source: "Website", owner: "Rahul R.", stage: "Proposal sent", due: "Follow up · Fri" },
  { id: 1035, name: "Ritika & Arnav", greet: "Ritika", date: "Dec 2027", city: "Patna", guests: "500", source: "Instagram", owner: "Aliwaris K.", stage: "Proposal sent", due: "Follow up · today" },
  { id: 1027, name: "Pooja & Karan", greet: "Pooja", date: "9 Feb 2027", city: "Patna", guests: "450", source: "Referral", owner: "Rahul R.", stage: "Won", due: "Event created ✓" },
  { id: 1031, name: "Ankit Verma", greet: "Ankit", date: "Jan 2027", city: "Ranchi", guests: "200", source: "Website", owner: "Rahul R.", stage: "Lost", due: "Reason: budget" },
];

export const getLead = (id: number) => LEADS.find((l) => l.id === id);

/** Lead #1042 has the full detail from AdminLeadDetail.dc.html; other leads show their card data. */
export type LeadDetail = {
  received: string;
  stage: Stage;
  details: { k: string; v: string }[];
  events: string[];
  activity: { when: string; type: string; text: string }[];
  consent: string;
};

const PRIYA_DETAIL: LeadDetail = {
  received: "received today, 9:40 am via WhatsApp button on /services",
  stage: "Contacted",
  details: [
    { k: "Phone (WhatsApp)", v: "+91 [number]" },
    { k: "Email", v: "[email]" },
    { k: "Wedding date", v: "14 February 2027" },
    { k: "City", v: "Patna" },
    { k: "Guests", v: "300–600" },
    { k: "Budget band", v: "[₹ band]" },
    { k: "Service", v: "Full Planning" },
    { k: "Source", v: "WhatsApp button · /services" },
    { k: "Campaign", v: "utm_source=instagram" },
  ],
  events: ["Mehendi", "Haldi", "Sangeet", "Wedding", "Reception"],
  activity: [
    { when: "Today 10:05", type: "WhatsApp chat", text: "Asked about Full Planning for 5 events; parents want a Patna venue for 400." },
    { when: "Today 9:40", type: "Lead created", text: "WhatsApp button on the Services page." },
    { when: "Today 9:41", type: "Auto-email", text: "Team notified at info@wedlock.co.in." },
  ],
  consent: "agreed to WhatsApp and phone contact on 29 Oct 2026.",
};

export function getLeadDetail(lead: Lead): LeadDetail {
  if (lead.id === 1042) return PRIYA_DETAIL;
  return {
    received: `source: ${lead.source}`,
    stage: lead.stage,
    details: [
      { k: "Phone (WhatsApp)", v: "+91 [number]" },
      { k: "Email", v: "[email]" },
      { k: "Wedding date", v: lead.date },
      { k: "City", v: lead.city },
      { k: "Guests", v: lead.guests },
      { k: "Budget band", v: "[₹ band]" },
      { k: "Source", v: lead.source },
      { k: "Owner", v: lead.owner },
      { k: "Next step", v: lead.due },
    ],
    events: [],
    activity: [],
    consent: "[consent record]",
  };
}

export const quickMessages = (greet: string) =>
  [
    ["Thank you for enquiring", `Namaste ${greet}, thank you for reaching out to Wedlock. Rahul here, your planner. When is a good time to call?`],
    ["Book a studio visit", `Namaste ${greet}, would you like to visit our Patna studio this week? We can walk you through venues and past weddings.`],
    ["Proposal is ready", `Namaste ${greet}, your Wedlock proposal is ready. Sharing the link here: [link]`],
    ["Gentle follow-up", `Namaste ${greet}, just checking in on the proposal. Happy to answer any questions.`],
  ].map(([name, text]) => ({ name, wa: demoWa(text) }));

/* -------------------------------------------------------------- Dashboard */

export const KPIS = [
  { label: "New leads this week", value: "6", note: "2 still unassigned", href: ADMIN.leads },
  { label: "Follow-ups due today", value: "4", note: "Oldest: 2 days overdue", href: ADMIN.leads },
  { label: "Events this week", value: "3", note: "Across 2 weddings", href: ADMIN.events },
  { label: "Won this month", value: "2", note: "Out of 11 proposals", href: ADMIN.leads },
];

export const DASH_STAGE_BG: Record<string, string> = {
  New: "#DDE1D6",
  Contacted: "#ECEAE2",
  Meeting: "#E9DFC8",
  Proposal: "#F1E3C7",
};

export const DASH_LEADS = [
  { id: 1042, name: "Priya & Rohan", received: "2 hours ago", date: "14 Feb 2027", city: "Patna", source: "WhatsApp", stage: "New", owner: "Unassigned" },
  { id: 1041, name: "Neha Sinha", received: "Today, 9:12", date: "Dec 2027", city: "Jaipur", source: "Website form", stage: "New", owner: "Unassigned" },
  { id: 1039, name: "Aditya & family", received: "Yesterday", date: "22 Nov 2027", city: "Ranchi", source: "Instagram", stage: "Contacted", owner: "Rahul R." },
  { id: 1037, name: "Sana & Imran", received: "26 Oct", date: "5 Mar 2027", city: "New Delhi", source: "Referral", stage: "Meeting", owner: "Aliwaris K." },
  { id: 1034, name: "Kavya Mehra", received: "25 Oct", date: "Jan 2028", city: "Udaipur", source: "Website form", stage: "Proposal", owner: "Rahul R." },
];

export const FOLLOWUPS = [
  { id: 1039, name: "Aditya & family", task: "Send venue shortlist for Ranchi" },
  { id: 1037, name: "Sana & Imran", task: "Confirm studio meeting, Sat 11 am" },
  { id: 1034, name: "Kavya Mehra", task: "Follow up on Udaipur proposal" },
  { id: 1041, name: "Neha Sinha", task: "First call — new enquiry" },
];

export const WEEK_EVENTS = [
  { dow: "Fri", day: "30", title: "Mehendi · [Couple] & [Couple]", meta: "[Venue], Patna · 4 pm · 180 guests · Team: Rahul R. + 6" },
  { dow: "Sat", day: "31", title: "Sangeet · [Couple] & [Couple]", meta: "[Venue], Patna · 7 pm · 320 guests · Team: Aliwaris K. + 9" },
  { dow: "Sun", day: "1", title: "Wedding & reception · [Couple] & [Couple]", meta: "[Venue], Patna · 6 pm · 450 guests · Team: full crew" },
];

export const SOURCES = [
  { name: "WhatsApp", n: 21 },
  { name: "Website form", n: 12 },
  { name: "Instagram", n: 9 },
  { name: "Referral", n: 6 },
];

export const WEBSITE_TODO = [
  { text: "2 couple stories waiting for consent", href: ADMIN.stories },
  { text: "1 journal draft scheduled for Monday", href: ADMIN.journal },
  { text: "8 photos missing alt text", href: ADMIN.media },
];

/* --------------------------------------------------------------- Messages */

export const CHANNEL_COLOR = { WhatsApp: "#1F7A45", Email: "#7E6233" } as const;

export const MESSAGE_TO = [
  { name: "Phoolwari Decor", kind: "decor" },
  { name: "Raag Sound & Light", kind: "sound" },
  { name: "Bihar Caterers", kind: "catering" },
];

export const MESSAGE_TEMPLATES = [
  "Vendor brief — event confirmed",
  "Enquiry received (couple)",
  "Proposal ready (couple)",
  "Payment reminder (couple)",
  "Final run-of-show (vendors)",
  "Thank you + review request (couple)",
  "Blank",
];

export const RECENT_MESSAGES: { to: string; channel: keyof typeof CHANNEL_COLOR; what: string; when: string; status: string }[] = [
  { to: "Priya & Rohan", channel: "WhatsApp", what: "Thank you for enquiring", when: "today 10:02", status: "opened in WhatsApp" },
  { to: "Priya & Rohan", channel: "Email", what: "Enquiry received", when: "today 9:41", status: "delivered" },
  { to: "All Patna decor vendors (6)", channel: "Email", what: "Feb 2027 availability", when: "yesterday", status: "6 delivered, 4 replied" },
  { to: "Kavya Mehra", channel: "Email", what: "Proposal ready", when: "Mon", status: "opened twice" },
  { to: "Lens & Light Studio", channel: "WhatsApp", what: "Shot list for Pooja & Karan", when: "Mon", status: "opened in WhatsApp" },
  { to: "Meera Jha", channel: "Email", what: "Gentle follow-up", when: "Sun", status: "bounced, check address" },
];
