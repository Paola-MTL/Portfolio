"use client";

import { useState } from "react";
import Image from "next/image";

const TEAL = "#74AEB2";

const tabs = [
  {
    key: "search",
    label: "Search",
    image: "/images/truxweb/results-search.png",
    width: 1732,
    height: 1744,
    alt: "Truxweb shipment search screen with pick-up and delivery details",
    caption:
      "A step-by-step user guidance to refine their search as accurately as possible.",
  },
  {
    key: "results",
    label: "Results",
    image: "/images/truxweb/results-list.png",
    width: 1728,
    height: 2064,
    alt: "Truxweb carrier results list with ratings, dates, and prices",
    caption:
      "Clear and visually comparable search results that facilitate the booking process.",
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
            className="rounded-full px-5 py-2 text-sm font-medium transition-colors"
            style={{
              backgroundColor: i === active ? TEAL : "transparent",
              color: i === active ? "#fff" : undefined,
            }}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div className="overflow-hidden rounded-2xl border border-ink/10 shadow-lg">
        <Image
          key={tab.key}
          src={tab.image}
          alt={tab.alt}
          width={tab.width}
          height={tab.height}
          sizes="(min-width: 1024px) 900px, 100vw"
          className="h-auto w-full"
        />
      </div>
      <p className="mt-4 text-center text-sm italic text-muted">
        {tab.caption}
      </p>
    </div>
  );
}
