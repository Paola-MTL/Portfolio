import TabbedShowcase, { type ShowcaseTab } from "./TabbedShowcase";

const tabs: readonly ShowcaseTab[] = [
  {
    key: "search",
    label: "Search",
    image: "/images/truxweb/results-search.jpg",
    width: 2880,
    height: 2887,
    alt: "Truxweb shipment search screen with pick-up and delivery details",
    caption:
      "A step-by-step user guidance to refine their search as accurately as possible.",
  },
  {
    key: "results",
    label: "Results",
    image: "/images/truxweb/results-list.jpg",
    width: 2230,
    height: 2716,
    alt: "Truxweb carrier results list with ratings, dates, and prices",
    caption:
      "Clear and visually comparable search results that facilitate the booking process.",
  },
  {
    key: "dashboard",
    label: "Dashboard",
    image: "/images/truxweb/results-dashboard.jpg",
    width: 1591,
    height: 1938,
    alt: "Truxweb shipments dashboard with status overview and booked shipments",
    caption:
      "A centralized dashboard to track every shipment's status at a glance.",
  },
] as const;

export default function ResultsShowcase() {
  return <TabbedShowcase tabs={tabs} />;
}
