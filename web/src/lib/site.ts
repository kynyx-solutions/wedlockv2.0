export const SITE = {
  name: "Wedlock",
  url: "https://wedlock.co.in",
  phone: "+91 70615 28402",
  phoneHref: "tel:+917061528402",
  whatsapp: "917061528402",
  email: "info@wedlock.co.in",
  address: "208-A, Kaushalya Estate, Dak Bunglow Road, Patna",
  social: {
    instagram: "https://instagram.com/wedlockweddings/",
    facebook: "https://facebook.com/WedlockWeddingPlanner/",
    youtube: "https://www.youtube.com/playlist?list=PLl563t1NI8UZgd4A95Q_P9i77d7NpbIM8",
    x: "https://twitter.com/Wedlock_Patna",
  },
} as const;

export const waLink = (message: string) => `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;

export type NavKey = "home" | "about" | "services" | "destinations" | "weddings" | "journal" | "contact" | "none";

export const NAV: { key: NavKey; label: string; href: string }[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "about", label: "About", href: "/about" },
  { key: "services", label: "Services", href: "/services" },
  { key: "destinations", label: "Destinations", href: "/destinations" },
  { key: "weddings", label: "Weddings", href: "/weddings" },
  { key: "journal", label: "Journal", href: "/journal" },
  { key: "contact", label: "Contact", href: "/contact" },
];
