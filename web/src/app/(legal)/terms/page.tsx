import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "../LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "The terms on which Wedlock plans and produces celebrations: booking amount, payments, postponement and cancellation. Template text awaiting legal review.",
};

const SECTIONS: LegalSection[] = [
  { id: "about", title: "About these terms", body: "These terms apply when you book Wedlock to plan, design or produce a celebration, and when you use this website. [Lawyer to write.]" },
  { id: "services", title: "Our services", body: "The scope of each booking — package, events, guest count and deliverables — is set out in your proposal and agreement. [Lawyer to write.]" },
  { id: "booking", title: "Booking amount", body: "[Booking amount payable on signing, and whether it is refundable or adjustable — to be confirmed by Wedlock.]" },
  { id: "payments", title: "Payments", body: "[Payment schedule, staged instalments, balance due before the wedding week, accepted payment methods and taxes — to be confirmed by Wedlock.]" },
  { id: "vendors", title: "Vendor costs", body: "[How vendor quotes are approved, paid and shown in the shared portal — to be confirmed by Wedlock.]" },
  { id: "postpone", title: "Postponement and cancellation", body: "[Notice periods, charges and how amounts already paid are treated if a celebration is postponed or cancelled — to be confirmed by Wedlock.]" },
  { id: "changes", title: "Changes to the plan", body: "[How changes in scope, guest count or venue are agreed and priced — to be confirmed by Wedlock.]" },
  { id: "content", title: "Photos and content", body: "[Use of photographs and films of your celebration on Wedlock’s website and social media, and how to opt out — to be confirmed by Wedlock.]" },
  { id: "liability", title: "Liability", body: "[Limits of liability, force majeure and responsibility for venue and vendor property — lawyer to write.]" },
  { id: "law", title: "Governing law", body: "[Governing law and jurisdiction — lawyer to write.]" },
  { id: "contact", title: "Contact", body: "Write to info@wedlock.co.in with “Terms” in the subject and we will reply within [number] working days." },
];

export default function TermsPage() {
  return <LegalPage title="Terms & Conditions" other={{ href: "/privacy", label: "Privacy Policy" }} sections={SECTIONS} closing="Questions about these terms?" />;
}
