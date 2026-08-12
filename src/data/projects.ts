export type ProjectSummary = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  year: string;
  color: string;
};

export const projects: ProjectSummary[] = [
  {
    slug: "truxweb",
    name: "Truxweb",
    tagline: "Designing a B2B web app in logistics",
    role: "UI/UX Designer",
    year: "2021–2023",
    color: "#1F3A5F",
  },
  {
    slug: "vf-immigration",
    name: "VF Immigration",
    tagline: "Redesigning an immigration consultation site",
    role: "UX Researcher / Product Designer",
    year: "2024",
    color: "#D6021E",
  },
  {
    slug: "kc-rentals",
    name: "KC Rentals",
    tagline: "Redesigning the website of a real estate agency",
    role: "Web Designer",
    year: "2023",
    color: "#0C2925",
  },
];

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export type ProjectDetail = ProjectSummary & {
  about: string;
  duration: string;
  collaboration: string[];
  sections: {
    heading: string;
    title: string;
    body: string[];
  }[];
  process?: ProcessStep[];
  learnings: {
    title: string;
    body: string;
  }[];
};

export const projectDetails: Record<string, ProjectDetail> = {
  truxweb: {
    slug: "truxweb",
    name: "Truxweb",
    tagline: "Designing a B2B web app in logistics",
    role: "UI/UX Designer",
    year: "2021–2023",
    color: "#1F3A5F",
    duration: "2 years",
    collaboration: ["4 developers", "1 project manager", "2 founders"],
    about:
      "Truxweb is a Quebec-based start-up that aims to simplify the trucking transportation management process. It specializes in B2B freight logistics. My role was to help them develop an online platform (SaaS) by collaborating with a designer to create a platform that is both aesthetically pleasing and user-friendly. I also had the opportunity to work on other projects such as the homepage and sales tools.",
    sections: [
      {
        heading: "01",
        title: "The problem",
        body: [
          "A lot of manual processes and a myriad of stakeholders enriching themselves at the expense of carriers.",
          "The field of logistics, especially in the B2B transport sector, appears to have stagnated over the past 40 years. Processes remain complex, administrative systems are still largely manual, and communication between the various players is hindered by the absence of a centralized platform.",
          "The increasing number of intermediaries between carriers and clients, often in the form of transport brokers, results in additional costs that reduce carriers' revenues. After delivering a shipment from A to B, trucks typically return empty from B to A — a significant loss of resources.",
        ],
      },
      {
        heading: "02",
        title: "The Truxweb solution",
        body: [
          "A 100% digital platform allowing customers to quickly book a carrier and track their goods directly, without going through an intermediary.",
          "The platform also simplifies processes for carriers, letting them set up delivery routes with corresponding pricing and be visible in search results — giving them better market visibility and more revenue.",
        ],
      },
      {
        heading: "03",
        title: "The process",
        body: [
          "The process at Truxweb was based on the Agile method and improved as the startup grew. I worked closely with my senior designer, a team of developers, and the company's founders to understand user needs and industry technicalities.",
        ],
      },
      {
        heading: "04",
        title: "The results",
        body: [
          "My senior and I wanted to recreate a reservation process similar to Google Flights / Expedia, putting users in a familiar environment while considering the technical needs of the logistics industry.",
        ],
      },
      {
        heading: "05",
        title: "Test and feedback",
        body: [
          "The booking process tested smoothly, but the dashboard experience wasn't satisfactory — each booking took up too much space, causing excessive scrolling. We needed to rethink how each booking was displayed for a better overview.",
        ],
      },
      {
        heading: "06",
        title: "The final design",
        body: [
          "After deliberation between the dev and design teams, the platform became a true web app — solving the flow issues and delivering a more modern experience aligned with Truxweb's vision.",
        ],
      },
    ],
    process: [
      { index: "01", title: "Discover", description: "Analysis of user needs and customer journey." },
      { index: "02", title: "Define", description: "Determine features, feasibility, and UX flow." },
      { index: "03", title: "Build the lo-fi", description: "Creation and validation of lo-fi, iterating as needed." },
      { index: "04", title: "Design the hi-fi", description: "Research to determine guidelines and artistic direction." },
      { index: "05", title: "Prototype", description: "Prototyping in Figma to bring designs to life." },
      { index: "06", title: "Development", description: "Hand-off to developers for production deployment." },
      { index: "07", title: "Tests and feedback", description: "Platform testing by users and feedback collection." },
      { index: "08", title: "Corrections", description: "Corrections and re-iterations made to designs and UX." },
    ],
    learnings: [],
  },
  "vf-immigration": {
    slug: "vf-immigration",
    name: "VF Immigration",
    tagline: "Redesigning an immigration consultation website",
    role: "UX Researcher / Product Designer",
    year: "2024",
    color: "#D6021E",
    duration: "4 months",
    collaboration: ["Web Design", "Mobile Design"],
    about:
      "VF Immigration is an immigration consulting agency established since 2016 in Montreal. Valérie, the president, needed to modernize her site without changing the logo, so both new and old clients could still recognize the brand — and to improve her productivity by automating processes that generated unnecessary emails.",
    sections: [
      {
        heading: "01",
        title: "Visual identity",
        body: [
          "The two most dominant primary colors at VF Immigration were dark red and dark gray. To enhance contrast throughout the site, I expanded the palette starting from these two primary colors. Typography: Avenir Heavy and Avenir Light.",
        ],
      },
      {
        heading: "02",
        title: "The research phase",
        body: [
          "An audit of the existing site was conducted against Bastien & Scapin's heuristic criteria and Nielsen's 10 heuristics, revealing cognitive overload, a lack of visual content, and an unclear value proposition.",
          "Quantitative research showed a bounce rate over 60% on the homepage and that 80% of traffic was direct. User interviews with 5 profiles (Thinking Out Loud method) revealed confusion booking a consultation and difficulty comparing services.",
        ],
      },
      {
        heading: "03",
        title: "Information architecture",
        body: [
          "The content was rewritten using simple, accessible vocabulary, better-defined categories by user profile, and a clearer information hierarchy — a real challenge given how complex immigration processes are.",
        ],
      },
      {
        heading: "04",
        title: "Wireframes",
        body: [
          "A first wireframing round incorporated VF Immigration's desired content. Information density remained a friction point, so hierarchy and structure were revised — for example, using accordions for definitions.",
        ],
      },
      {
        heading: "05",
        title: "The modernized web version",
        body: [
          "A more streamlined homepage prioritizing information and highlighting services. Consultations were reorganized by price and duration to make comparison easier. The contact page redirected simple questions to Facebook Live, reserving the representation form for genuine prospects.",
        ],
      },
      {
        heading: "06",
        title: "Mobile, reconsidered",
        body: [
          "60% of user sessions occurred on mobile, making a mobile-friendly redesign essential to converting more visitors into clients.",
        ],
      },
    ],
    learnings: [
      {
        title: "Working with constraints",
        body: "Designing within Wix limited customization — some effects, like a navbar shadow, simply weren't available. Given time and simplicity constraints, sticking with the existing platform was the right call.",
      },
      {
        title: "Working independently",
        body: "Having carte blanche on the artistic direction pushed me to set my own deadlines and refine how I manage a solo project end-to-end.",
      },
    ],
  },
  "kc-rentals": {
    slug: "kc-rentals",
    name: "KC Rentals",
    tagline: "Redesigning the website of a real estate agency",
    role: "Web Designer",
    year: "2023",
    color: "#0C2925",
    duration: "2 months",
    collaboration: ["Web Design"],
    about:
      "KC Rentals is a real estate agency established since 2016 in Mandelieu, in the South of France. Katia, the founder, needed to modernize her site and improve its SEO, since it no longer felt credible to clients and wasn't converting visitors. The challenge: keep the domain, email, and logo intact for recurring clients while improving legitimacy and discoverability.",
    sections: [
      {
        heading: "01",
        title: "Visual identity",
        body: [
          "The original palette read more 'chocolate shop' than real estate agency. Green was chosen for its association with security and nature — omnipresent in the south of France — while peach orange, in contrast, accents CTAs and highlights. Typography: Noto Serif and Cabin Regular.",
        ],
      },
      {
        heading: "02",
        title: "The modernized web version",
        body: [
          "A cleaner homepage that better illustrates Katia's core business, with a simplified menu free of repetitive pages.",
          "Property search was simplified with a direct filter on the properties page instead of a submenu, surfacing the best listings by default for undecided visitors.",
          "Each property listing was redesigned to foreground photography and a clear CTA to request a quote. Partner sections and customer reviews were added to reinforce legitimacy.",
        ],
      },
    ],
    learnings: [
      {
        title: "Working with a new platform",
        body: "KC Rentals was my first freelance project and my first time on Wix. Katia can now add properties herself without a third party — and I came away understanding both CMS workflows and practical SEO.",
      },
      {
        title: "Developing my creative side",
        body: "As sole designer, I owned the artistic direction end-to-end — a real exercise in self-direction, confidence, and follow-through.",
      },
    ],
  },
};
