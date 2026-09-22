"use client";

import { useState } from "react";
import Image from "next/image";

const TEAL = "#74AEB2";

export type ShowcaseTab = {
  key: string;
  label: string;
  image: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
};

export default function TabbedShowcase({ tabs }: { tabs: readonly ShowcaseTab[] }) {
  const [active, setActive] = useState(0);
  const [loadedKeys, setLoadedKeys] = useState<Record<string, boolean>>({});
  const tab = tabs[active];
  const isLoaded = loadedKeys[tab.key];

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
      {/*
        Width is derived so the box is exactly 80vh tall, unless that would
        overflow the container, in which case it shrinks to fit — height then
        follows automatically via aspect-ratio, so it's never cropped and
        never needs the (not-yet-loaded) image's own dimensions to size itself.
      */}
      <div
        className="relative mx-auto overflow-hidden rounded-2xl border border-ink/10 shadow-lg"
        style={{
          aspectRatio: `${tab.width} / ${tab.height}`,
          width: `min(100%, calc(80vh * ${tab.width} / ${tab.height}))`,
        }}
      >
        {!isLoaded && (
          <div className="absolute inset-0 animate-pulse bg-ink/10" />
        )}
        <Image
          key={tab.key}
          src={tab.image}
          alt={tab.alt}
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
          className={`object-cover transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() =>
            setLoadedKeys((prev) => ({ ...prev, [tab.key]: true }))
          }
        />
      </div>
      <p className="mt-4 text-center text-sm italic text-muted">
        {tab.caption}
      </p>
    </div>
  );
}
