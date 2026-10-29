export type FaqGroup = { key: string; name: string; items: { q: string; a: string }[] };

export const FAQ_GROUPS: FaqGroup[] = [
  {
    key: "planning",
    name: "Planning",
    items: [
      { q: "How early should we book Wedlock?", a: "For full planning, 9–12 months before the wedding; for destination weddings, 12–14 months. Shorter timelines are often possible — ask us." },
      { q: "Is the first consultation free?", a: "Yes. Your first meeting with our wedding consultants is free and carries no obligation." },
      { q: "Can we bring our own vendors?", a: "Yes. We brief and coordinate your family’s vendors alongside ours." },
      { q: "Will one person handle our wedding?", a: "A dedicated celebration director leads your wedding from the first meeting, supported by our specialist teams." },
    ],
  },
  {
    key: "pricing",
    name: "Pricing & payments",
    items: [
      { q: "How is your fee calculated?", a: "A planning fee based on the number of events, guests and the location. Vendor costs are quoted separately and shown in one shared portal." },
      { q: "What is the payment schedule?", a: "[Booking amount on signing, staged payments, balance before the wedding week — to be confirmed by Wedlock.]" },
      { q: "What if we postpone or cancel?", a: "[Postponement and cancellation policy — to be confirmed by Wedlock.]" },
    ],
  },
  {
    key: "destinations",
    name: "Destinations",
    items: [
      { q: "Where do you plan destination weddings?", a: "Our destination desk has scouted 40+ cities across 14 countries, including Udaipur, Jaipur, Goa, Kerala, Bali, Phuket, Tuscany and Dubai." },
      { q: "Do you handle guest travel and rooms?", a: "Yes — room blocks, flight and train coordination, airport pickups and a help desk at the venue." },
      { q: "Can our family pandit travel with us?", a: "Yes. We arrange travel and stay for your pandit and the puja samagri." },
    ],
  },
  {
    key: "day",
    name: "On the day",
    items: [
      { q: "How many of your team are on site?", a: "[Team size per event — to be confirmed by Wedlock.] Our floor team arrives before setup and stays until the last guest leaves." },
      { q: "What happens if it rains?", a: "Every outdoor event has a rain plan agreed in advance, so the switch is quick and calm." },
      { q: "Who looks after elders and children?", a: "Our hospitality team arranges seating, transport and a help desk for elders, and a kids’ zone on request." },
    ],
  },
];
