import TabbedShowcase, { type ShowcaseTab } from "./TabbedShowcase";

const tabs: readonly ShowcaseTab[] = [
  {
    key: "search",
    label: "Search",
    image: "/images/truxweb/final-design-search.jpg",
    width: 1456,
    height: 910,
    alt: "Truxweb web app search screen with shipment details and equipment selection",
    caption:
      "The search flow reworked as a full web app, with more room to compare equipment options.",
  },
  {
    key: "results",
    label: "Results",
    image: "/images/truxweb/final-design-results.jpg",
    width: 1456,
    height: 910,
    alt: "Truxweb web app results table with carriers, dates, and prices",
    caption:
      "A compact results table that lets shippers scan and compare carriers at a glance.",
  },
  {
    key: "dashboard",
    label: "Dashboard",
    image: "/images/truxweb/final-design-dashboard.jpg",
    width: 1456,
    height: 910,
    alt: "Truxweb web app shipments dashboard with status, tracking map, and shipment details",
    caption:
      "A denser shipments overview paired with live tracking, solving the scrolling problem from testing.",
  },
] as const;

export default function FinalDesignShowcase() {
  return <TabbedShowcase tabs={tabs} />;
}
