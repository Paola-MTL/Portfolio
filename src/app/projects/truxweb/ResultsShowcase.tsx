"use client";

import { useState } from "react";
import Image from "next/image";

const TEAL = "#74AEB2";

const tabs = [
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
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <div>
      <div className="mx-auto mb-8 flex w-fit gap-1 rounded-full bg-ink/5 p-1.5">
        {tabs.map((t, i) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setActive(i)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
              i === active ? "" : "hover:bg-ink/10"
            }`}
            style={
              i === active
                ? { backgroundColor: TEAL, color: "#fff" }
                : undefined
            }
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="mx-auto flex w-fit max-h-[80vh] overflow-hidden rounded-2xl border border-ink/10 shadow-lg">
        <Image
          key={tab.key}
          src={tab.image}
          alt={tab.alt}
          width={tab.width}
          height={tab.height}
          sizes="80vh"
          className="h-auto max-h-[80vh] w-auto"
        />
      </div>
      <p className="mt-4 text-center text-sm italic text-muted">
        {tab.caption}
      </p>
    </div>
  );
}
