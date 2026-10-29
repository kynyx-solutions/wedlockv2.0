import type { Metadata } from "next";
import { LegalPage, type LegalSection } from "../LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Wedlock collects, uses and protects the details you share with us. Template text awaiting legal review.",
};

const SECTIONS: LegalSection[] = [
  { id: "collect", title: "What we collect", body: "Details you share in our forms — names, phone, email, wedding date, city, guest count and your message — and basic usage data from your visit. [Lawyer to confirm.]" },
  { id: "use", title: "How we use it", body: "To reply to your enquiry, plan your celebration, send planning notes you asked for, and improve our website. [Lawyer to confirm.]" },
  { id: "cookies", title: "Cookies and analytics", body: "We use Google Analytics and, with your consent, the Meta Pixel to understand visits and measure our ads. You can change your choice at any time. [Lawyer to confirm.]" },
  { id: "share", title: "Who we share it with", body: "Only the vendors working on your celebration and the service providers that run our website and email. We never sell your data. [Lawyer to confirm.]" },
  { id: "keep", title: "How long we keep it", body: "[Retention period for enquiries and client records — to be set by Wedlock.]" },
  { id: "rights", title: "Your rights", body: "Under the Digital Personal Data Protection Act, 2023, you can ask to see, correct or delete your data, and withdraw consent. [Lawyer to confirm.]" },
  { id: "contact", title: "Contact", body: "Write to info@wedlock.co.in with “Privacy” in the subject and we will reply within [number] working days." },
];

export default function PrivacyPage() {
  return <LegalPage title="Privacy Policy" other={{ href: "/terms", label: "Terms & Conditions" }} sections={SECTIONS} closing="Questions about your data?" />;
}
