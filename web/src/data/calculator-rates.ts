// Budget calculator rates (₹). SAMPLE values until Wedlock confirms real ones;
// later these come from Admin → Packages → Calculator rates.

export const CITIES = {
  patna: { label: "Patna", factor: 1 },
  ranchi: { label: "Ranchi", factor: 0.95 },
  delhi: { label: "New Delhi", factor: 1.6 },
  india: { label: "Destination in India", factor: 1.9 },
  abroad: { label: "Destination abroad", factor: 2.8 },
} as const;

/** weight = how large the function is relative to the wedding itself */
export const FUNCTIONS = {
  roka: { label: "Roka / engagement", weight: 0.6 },
  haldi: { label: "Haldi", weight: 0.5 },
  mehendi: { label: "Mehendi", weight: 0.6 },
  sangeet: { label: "Sangeet", weight: 0.9 },
  wedding: { label: "Wedding", weight: 1 },
  reception: { label: "Reception", weight: 1 },
  cocktail: { label: "Cocktail", weight: 0.6 },
} as const;

export const VENUES = {
  banquet: { label: "Banquet hall", note: "Most Patna weddings", perFunction: 150_000 },
  lawn: { label: "Lawn or farmhouse", note: "Open-air, more décor", perFunction: 200_000 },
  hotel: { label: "Five-star hotel", note: "Rooms on site", perFunction: 350_000 },
  palace: { label: "Palace or resort", note: "Heritage, destination", perFunction: 800_000 },
} as const;

export const DECOR = {
  classic: { label: "Classic", note: "Elegant, fresh flowers", perFunction: 150_000 },
  premium: { label: "Premium", note: "Themed stages, more florals", perFunction: 400_000 },
  luxury: { label: "Luxury", note: "Installations, imported flowers", perFunction: 1_000_000 },
} as const;

export const ADDONS = {
  gifts: { label: "Return gifts", cost: (guests: number) => guests * 600 },
  hampers: { label: "Welcome hampers", cost: (guests: number) => guests * 0.4 * 1200 },
  stream: { label: "Live streaming", cost: () => 50_000 },
  baraat: { label: "Baraat & grand entry", cost: () => 150_000 },
  fx: { label: "Special effects", cost: () => 120_000 },
  valet: { label: "Valet & security", cost: () => 60_000 },
  film: { label: "Same-day highlight film", cost: () => 75_000 },
} as const;

export const RATES = {
  cateringPerPlate: 1_100,
  photoBase: 150_000,
  photoPerFunction: 60_000,
  entertainmentBigNight: 120_000,
  soundPerFunction: 40_000,
  localStayPerRoomNight: 4_500,
  outstationShare: 0.25,
  destinationStayPerGuestNight: 9_000,
  range: 0.15,
} as const;

export type CityKey = keyof typeof CITIES;
export type FunctionKey = keyof typeof FUNCTIONS;
export type VenueKey = keyof typeof VENUES;
export type DecorKey = keyof typeof DECOR;
export type AddonKey = keyof typeof ADDONS;

export type Choices = {
  city: CityKey;
  guests: number;
  functions: FunctionKey[];
  venue: VenueKey;
  decor: DecorKey;
  addons: AddonKey[];
};

export function estimate(c: Choices) {
  const cf = CITIES[c.city].factor;
  const capped = Math.min(cf, 1.6); // photo and music crews travel; they don't scale with city prices
  const dest = c.city === "india" || c.city === "abroad";
  const fns = c.functions.length ? c.functions : (["wedding"] as FunctionKey[]);
  const weight = fns.reduce((t, f) => t + FUNCTIONS[f].weight, 0);
  const g = c.guests;
  const bigNights = fns.filter((f) => f === "sangeet" || f === "reception" || f === "cocktail").length;

  const parts: [string, number][] = [
    ["Food & drinks", g * RATES.cateringPerPlate * cf * weight],
    ["Décor & lighting", DECOR[c.decor].perFunction * cf * weight * 1.2],
    ["Venues", VENUES[c.venue].perFunction * cf * fns.length],
    [
      dest ? "Guest travel & stay" : "Outstation guest stay",
      dest
        ? g * RATES.destinationStayPerGuestNight * cf * 2
        : g * RATES.outstationShare * RATES.localStayPerRoomNight * cf * Math.max(1, Math.ceil(fns.length / 2)),
    ],
    ["Photo & film", (RATES.photoBase + RATES.photoPerFunction * fns.length) * capped],
    ["Entertainment & sound", bigNights * RATES.entertainmentBigNight * capped + RATES.soundPerFunction * fns.length],
    ["Add-ons", c.addons.reduce((t, a) => t + ADDONS[a].cost(g), 0)],
  ];
  const lines = parts.filter(([, v]) => v > 0);
  const total = lines.reduce((t, [, v]) => t + v, 0);
  const round = (v: number) => Math.round(v / 1e5) * 1e5;
  return { lines, total, low: round(total * (1 - RATES.range)), high: round(total * (1 + RATES.range)), functionCount: fns.length };
}

export const formatInr = (v: number) => (v >= 1e7 ? `₹${(v / 1e7).toFixed(1)} Cr` : `₹${Math.round(v / 1e5)}L`);
