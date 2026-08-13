export type ProjectSummary = {
  slug: string;
  name: string;
  tagline: string;
  role: string;
  year: string;
  color: string;
  image: string;
};

export const projects: ProjectSummary[] = [
  {
    slug: "truxweb",
    name: "Truxweb",
    tagline: "Designing a B2B web app in logistics",
    role: "UI/UX Designer",
    year: "2021–2023",
    color: "#1F3A5F",
    image: "/images/home/truxweb.jpg",
  },
  {
    slug: "kc-rentals",
    name: "KC Rentals",
    tagline: "Redesigning the website of a real estate agency",
    role: "Web Designer",
    year: "2023",
    color: "#0C2925",
    image: "/images/home/kcrentals.jpg",
  },
  {
    slug: "vf-immigration",
    name: "VF Immigration",
    tagline: "Redesigning an immigration consultation site",
    role: "UX Researcher / Product Designer",
    year: "2024",
    color: "#D6021E",
    image: "/images/home/vfimmigration.jpg",
  },
];

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export type Feature = {
  title: string;
  body: string;
  comparison?: { before: string; after: string };
  image?: string;
};

export type ProjectDetail = ProjectSummary & {
  about: string;
  duration: string;
  collaboration: string[];
  sections: {
    heading: string;
    title: string;
    body: string[];
    features?: Feature[];
    screenshots?: { label: string; image: string }[];
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
    image: "/images/home/truxweb.jpg",
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
          "A search engine platform that simplifies the booking of a carrier. After taking into account the founders' ideas and reworking the existing lo-fis, my senior and I wanted to recreate a reservation process similar to Google Flights / Expedia to put users in a familiar environment while considering the various technical needs related to the logistics industry. A step-by-step user guidance helps refine their search as accurately as possible.",
        ],
        screenshots: [
          { label: "Search", image: "/images/truxweb/search-step1.jpg" },
          { label: "Results", image: "/images/truxweb/search-step2.jpg" },
          { label: "Dashboard", image: "/images/truxweb/dashboard-step3.jpg" },
        ],
      },
      {
        heading: "05",
        title: "Test and feedback",
        body: [
          "A smooth search experience, but difficult access to various bookings. After testing the platform with the initial users, we found that the booking process was rather smooth but the dashboard experience was not satisfactory — each item took up a considerable amount of space on the screen, leading to significant scrolling and consecutive pages. It was necessary to reconsider the space occupied by each booking for a better overview.",
        ],
      },
      {
        heading: "06",
        title: "The final design",
        body: [
          "A web app allowing for an overview of reservations and easier navigation on the platform. After much deliberation between the dev and design teams, the platform took a whole new direction by becoming a true web app — a more modern environment in line with Truxweb's vision.",
        ],
        screenshots: [
          { label: "Search", image: "/images/truxweb/search-step1.jpg" },
          { label: "Results", image: "/images/truxweb/search-step2.jpg" },
          { label: "Dashboard", image: "/images/truxweb/dashboard-step3.jpg" },
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
    image: "/images/home/vfimmigration.jpg",
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
        body: [],
        features: [
          {
            title: "The homepage",
            body: "A page in the image of Valérie, more streamlined, where information is prioritized and the services offered are highlighted.",
            comparison: {
              before: "/images/vf-immigration/before-homepage.jpg",
              after: "/images/vf-immigration/after-homepage.jpg",
            },
          },
          {
            title: "The consultations",
            body: "Services were reorganized according to their price and duration. The goal was to visually compare the services offered and let users choose the most suitable option for their needs.",
            comparison: {
              before: "/images/vf-immigration/before-consultations.jpg",
              after: "/images/vf-immigration/after-consultations.jpg",
            },
          },
          {
            title: "The contact page",
            body: "The goal was to reduce the number of users filling out a form for simple questions — an economic loss for Valérie. Her Facebook Lives were better highlighted to redirect these users, while genuine prospects still had the full representation form.",
            comparison: {
              before: "/images/vf-immigration/before-contact.jpg",
              after: "/images/vf-immigration/after-contact.jpg",
            },
          },
          {
            title: "Come to Canada",
            body: "The redesign of this page aimed to improve navigation so users can more easily and quickly recognize themselves in a given category.",
            comparison: {
              before: "/images/vf-immigration/before-canada.jpg",
              after: "/images/vf-immigration/after-canada.jpg",
            },
          },
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
    image: "/images/home/kcrentals.jpg",
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
        body: [],
        features: [
          {
            title: "The home page",
            body: "A cleaner page that better illustrates Katia's core business. The menu has been simplified because some pages didn't add value or were repetitive — the user is no longer overwhelmed with information like in the old design.",
            comparison: {
              before: "/images/kc-rentals/before-1.jpg",
              after: "/images/kc-rentals/after-1.jpg",
            },
          },
          {
            title: "Property search has been simplified",
            body: "In the previous design, finding a property type meant going through a submenu, so I added a filter directly on the properties page that targets the search immediately. By default, the best properties are shown for those without specific criteria.",
            comparison: {
              before: "/images/kc-rentals/before-2.jpg",
              after: "/images/kc-rentals/after-2.jpg",
            },
          },
          {
            title: "Each property is showcased and linked to a request for a quote",
            body: "To better highlight each property, photos take on a more prominent role on every page, and a CTA is placed prominently to convert potential clients more quickly.",
            image: "/images/kc-rentals/feature-1.jpg",
          },
          {
            title: "Enhanced legitimacy",
            body: "To meet the need for credibility, partner sections and customer reviews were added to reassure users.",
            image: "/images/kc-rentals/feature-2.jpg",
          },
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
