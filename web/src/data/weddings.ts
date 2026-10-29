import type { MediaSlug } from "@/components/Picture";

export type StoryImage = { slug: MediaSlug; alt: string; pos?: string };

export type WeddingStory = {
  slug: string;
  /** Display name, e.g. "Ankita & Anunay" */
  couple: string;
  /** Names split for the hero heading: first <em>&</em> second */
  names: [string, string];
  /** Hero eyebrow, e.g. "Reception · 20 May 2023" */
  eyebrow: string;
  /** Short date used under the quote and on cards */
  date: string;
  intro: string;
  description: string;
  hero: StoryImage;
  facts: { k: string; v: string }[];
  lede: string;
  brief: string;
  approach: string;
  result: string;
  events: { day: string; title: string; text: string; venue: string; palette: string; img: StoryImage }[];
  /** Up to five images; the page lays them out in the board's mosaic by position */
  gallery: (StoryImage & { span: string })[];
  photoCredit: string;
  quote: string;
  quoteImg: StoryImage;
  team: string;
  credits: { k: string; v: string }[];
  /** "More wedding stories" card */
  card: { meta: string; img: StoryImage };
  waMessage: string;
};

export const WEDDINGS: WeddingStory[] = [
  {
    slug: "ankita-anunay",
    couple: "Ankita & Anunay",
    names: ["Ankita", "Anunay"],
    eyebrow: "Reception · 20 May 2023",
    date: "20 May 2023",
    intro:
      "“All you need is love” — a celebration of gold frames, crystal strands and one black-and-white chevron floor that ran from the welcome walk to the sangeet stage.",
    description:
      "Ankita & Anunay’s celebration by Wedlock: gold frames, crystal strands and a black-and-white chevron floor from the welcome walk to the sangeet stage.",
    hero: { slug: "couple-night-lights", alt: "Ankita and Anunay at their reception under strings of warm lights", pos: "60% 30%" },
    facts: [
      { k: "Reception", v: "20 May 2023" },
      { k: "Venue", v: "[Venue, City]" },
      { k: "Guests", v: "[000]" },
      { k: "Events", v: "[N] celebrations" },
      { k: "Service", v: "[Full Planning]" },
      { k: "Theme", v: "All you need is love" },
    ],
    lede: "One graphic idea — a black-and-white chevron — carried through every event, so the whole celebration felt like a single, considered story.",
    brief: "[What Ankita, Anunay and their families asked for — guest count, mood, non-negotiables.]",
    approach:
      "Monochrome chevron floors, gold-frame installations, crystal strands and a living green wall, lit warm against black drapes — with a personalised welcome board that set the tone at the door.",
    result: "[One or two moments the family still talks about — in their words.]",
    events: [
      {
        day: "Cocktail night",
        title: "Better Together",
        text: "A living green wall with a “Better Together” neon, framed by black-and-silver mirrored panels and a chevron stage.",
        venue: "[Venue]",
        palette: "Green · black · silver",
        img: { slug: "decor-better-together", alt: "A living green wall with a neon sign", pos: "50% 50%" },
      },
      {
        day: "Sangeet",
        title: "The whole family on the floor",
        text: "Cascading greens and mirror discs overhead, haze and beams, and a chevron dance floor that never emptied.",
        venue: "[Venue]",
        palette: "Emerald · chrome",
        img: { slug: "sangeet-dance", alt: "Family and friends dancing", pos: "50% 40%" },
      },
      {
        day: "Reception · 20 May 2023",
        title: "All you need is love",
        text: "A personalised welcome board at the door, then a walk of gold frames, crystal strands and fairy lights to the couple.",
        venue: "[Venue]",
        palette: "Gold · crystal · black",
        img: { slug: "entry-ankita-anunay", alt: "The welcome board and gold-frame walkway", pos: "30% 50%" },
      },
    ],
    gallery: [
      { slug: "couple-night-lights", alt: "Ankita and Anunay at the reception entrance", pos: "60% 30%", span: "col-span-2 row-span-2" },
      { slug: "couple-bw-ankita-anunay", alt: "A black-and-white portrait of the couple", pos: "35% 20%", span: "" },
      { slug: "entry-ankita-anunay", alt: "The personalised welcome board on an easel", pos: "22% 50%", span: "row-span-2" },
      { slug: "decor-better-together", alt: "A living green wall with a ‘Better Together’ neon sign", span: "" },
      { slug: "sangeet-dance", alt: "Family and friends dancing at the sangeet", pos: "50% 45%", span: "col-span-full" },
    ],
    photoCredit: "Photography: [Studio name] · Film: [Studio name]",
    quote: "[Ankita and Anunay’s words about their celebration.]",
    quoteImg: { slug: "couple-bw-ankita-anunay", alt: "", pos: "38% 30%" },
    team: "Celebration director: [Name] · Floor team: [N] people",
    credits: [
      { k: "Planning & design", v: "Wedlock" },
      { k: "Décor & styling", v: "Wedlock styling studio" },
      { k: "Production", v: "Wedlock / Eventoss" },
      { k: "Venue", v: "[Name]" },
      { k: "Catering", v: "[Name]" },
      { k: "Photography", v: "[Name]" },
      { k: "Make-up", v: "[Name]" },
      { k: "Music & DJ", v: "[Name]" },
    ],
    card: { meta: "Reception · May 2023", img: { slug: "entry-ankita-anunay", alt: "Ankita and Anunay’s welcome board and gold-frame walkway", pos: "30% 50%" } },
    waMessage: "Hi Wedlock! I saw Ankita & Anunay's celebration on your website and would love something similar for our wedding.",
  },
  {
    slug: "srestha-vishal",
    couple: "Srestha & Vishal",
    names: ["Srestha", "Vishal"],
    eyebrow: "Wedding · 17 Feb 2023",
    date: "17 Feb 2023",
    intro: "A wall of white blooms, arched windows and an S·V monogram.",
    description: "Srestha & Vishal’s wedding by Wedlock: a white bloom stage, arched windows and an S·V monogram.",
    hero: { slug: "stage-srestha-vishal", alt: "Srestha and Vishal’s floral wedding stage with a white sofa and lanterns", pos: "50% 50%" },
    facts: [
      { k: "Wedding", v: "17 Feb 2023" },
      { k: "Venue", v: "[Venue, City]" },
      { k: "Guests", v: "[000]" },
      { k: "Events", v: "[N] celebrations" },
      { k: "Service", v: "[Full Planning]" },
      { k: "Theme", v: "[Theme]" },
    ],
    lede: "[The one idea that tied Srestha and Vishal’s celebration together.]",
    brief: "[What Srestha, Vishal and their families asked for — guest count, mood, non-negotiables.]",
    approach: "[How we designed it — stage, florals, signage and lighting.]",
    result: "[One or two moments the family still talks about — in their words.]",
    events: [
      {
        day: "[Event]",
        title: "[Event title]",
        text: "[What guests saw as they arrived — the arched welcome sign and the walk in.]",
        venue: "[Venue]",
        palette: "[Palette]",
        img: { slug: "welcome-sign-srestha-vishal", alt: "An arched “Wedding · Srestha Vishal” welcome sign", pos: "50% 40%" },
      },
      {
        day: "Wedding · 17 Feb 2023",
        title: "[Event title]",
        text: "A wall of white blooms, arched windows and an S·V monogram.",
        venue: "[Venue]",
        palette: "[Palette]",
        img: { slug: "stage-srestha-vishal", alt: "The floral wedding stage with a white sofa and lanterns", pos: "50% 50%" },
      },
    ],
    gallery: [
      { slug: "stage-srestha-vishal", alt: "Srestha and Vishal’s floral wedding stage", span: "col-span-2 row-span-2" },
      { slug: "welcome-sign-srestha-vishal", alt: "The arched welcome sign", pos: "50% 40%", span: "row-span-2" },
      { slug: "sign-srestha-vishal", alt: "The S·V monogram sign with lanterns", pos: "50% 40%", span: "row-span-2" },
    ],
    photoCredit: "Photography: [Studio name] · Film: [Studio name]",
    quote: "[Srestha and Vishal’s words about their celebration.]",
    quoteImg: { slug: "sign-srestha-vishal", alt: "", pos: "50% 40%" },
    team: "Celebration director: [Name] · Floor team: [N] people",
    credits: [
      { k: "Planning & design", v: "Wedlock" },
      { k: "Décor & styling", v: "[Name]" },
      { k: "Production", v: "[Name]" },
      { k: "Venue", v: "[Name]" },
      { k: "Catering", v: "[Name]" },
      { k: "Photography", v: "[Name]" },
      { k: "Make-up", v: "[Name]" },
      { k: "Music & DJ", v: "[Name]" },
    ],
    card: { meta: "Wedding · Feb 2023", img: { slug: "stage-srestha-vishal", alt: "Srestha and Vishal’s floral stage" } },
    waMessage: "Hi Wedlock! I saw Srestha & Vishal's celebration on your website and would love something similar for our wedding.",
  },
];

export const getWedding = (slug: string) => WEDDINGS.find((w) => w.slug === slug);
