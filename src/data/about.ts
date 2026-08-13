export type TimelineEntry = {
  years: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  images?: string[];
};

export const timeline: TimelineEntry[] = [
  {
    years: "2017–2021",
    title: "From the South of France to the freshness of Quebec",
    subtitle: "Designed in France, made in the Philippines",
    paragraphs: [
      "Born to a French mother and a Filipino father, I spent my childhood on the French Riviera, snacking on pain au chocolat and rice for dinner. Infected with the travel bug early, I left the family nest to study in Canada — my mother had sold me on Montreal so well I had to see it for myself.",
      "I studied commerce at HEC Montréal, where I spent four wonderful years. It was during my final year that I discovered and fell for UX design, and decided to build a career in user experience.",
    ],
    images: [
      "/images/about/france-quebec.jpg",
      "/images/about/montreal-1.jpg",
      "/images/about/montreal-2.jpg",
      "/images/about/montreal-3.jpg",
      "/images/about/montreal-4.jpg",
    ],
  },
  {
    years: "2021–2023",
    title: "My first experience as a UX designer",
    subtitle: "UX designer for a logistics start-up based in Montreal",
    paragraphs: [
      "In May 2021 I started my career as a UI/UX designer at Truxweb. Over two years I grew technically in interface design, wireframing, hi-fi design, and prototyping — and learned to design responsively within a component library alongside a team of developers.",
      "I also met and interviewed clients directly, and contributed to sales tools like the pitch deck, one-pager, and roll-up as the start-up sought investors and clients.",
      "Truxweb is a human-sized company where I learned as much from people as from the work itself — especially my senior, Cynthia Darras, and the company's CEO, Mathieu, who was a true mentor.",
    ],
    images: [
      "/images/about/truxweb-1.jpg",
      "/images/about/truxweb-2.jpg",
      "/images/about/truxweb-3.jpg",
      "/images/about/truxweb-4.jpg",
      "/images/about/truxweb-5.jpg",
      "/images/about/truxweb-6.jpg",
      "/images/about/truxweb-7.jpg",
    ],
  },
  {
    years: "2023–2024",
    title: "A mini world tour between Australia and Asia",
    subtitle: "Road trips, dairy farms, and construction sites in Australia",
    paragraphs: [
      "Outside of UX, I finally chased a long-held dream: the land of kangaroos. One morning I was milking cows at 4am; a few months later I was in the desert guiding cranes lifting 35-ton dump trucks — a long way from the city girl I used to be, and an adventure that changed how I see the world.",
      "From there I explored Thailand, Vietnam, Singapore, Hong Kong, and the Philippines — reconnecting with my Filipino roots along the way.",
    ],
    images: [
      "/images/about/australia-1.jpg",
      "/images/about/australia-2.jpg",
      "/images/about/australia-3.jpg",
      "/images/about/australia-4.jpg",
      "/images/about/australia-5.jpg",
      "/images/about/asia-1.jpg",
      "/images/about/asia-2.jpg",
      "/images/about/asia-3.jpg",
      "/images/about/asia-4.jpg",
    ],
  },
  {
    years: "2023–2024",
    title: "Some freelance projects",
    subtitle: "Staying current with the craft",
    paragraphs: [
      "Before and after my sabbatical, I kept my UI/UX skills sharp by working on the KC Rentals and VF Immigration websites — both featured in the projects section — and by taking courses through Memorisely and experimenting with Framer and the Adobe suite.",
    ],
  },
];

export const heroTaglines = [
  "I am a UI/UX Designer",
  "I'm based in Montreal",
  "I like wombats",
  "I'm open to new opportunities",
];
