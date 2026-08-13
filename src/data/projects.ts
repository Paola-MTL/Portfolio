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
  {
    slug: "elia",
    name: "Elia",
    tagline: "Digitizing visitor check-in for modern workplaces",
    role: "Product Designer",
    year: "2026",
    color: "#6C65FF",
    image: "/images/home/elia.jpg",
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

export const projectDetails: Record<string, ProjectDetail> = {};
