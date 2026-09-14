"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/** Fixed circular back-arrow button. Starts light (for a dark hero) and
 *  flips to a dark variant once the hero (identified by `heroId`) has
 *  scrolled out of view, so it stays legible over the light body below. */
export default function BackButton({
  href,
  heroId = "hero",
}: {
  href: string;
  heroId?: string;
}) {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setPastHero(entry.boundingClientRect.bottom <= 64),
      { threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [heroId]);

  return (
    <Link
      href={href}
      aria-label="Back to projects"
      className={`group fixed top-6 left-6 z-50 flex size-11 items-center justify-center rounded-full border backdrop-blur-sm transition-colors duration-300 md:left-12 ${
        pastHero
          ? "border-[#1e293b]/30 text-[#1e293b] hover:border-[#1e293b]/60 hover:bg-[#1e293b]/5"
          : "border-white/45 text-white hover:border-white/80 hover:bg-white/10"
      }`}
    >
      <span className="flex size-[22px] items-center justify-center transition-transform duration-200 ease-out will-change-transform group-hover:rotate-[35deg] group-focus-visible:rotate-[35deg] motion-reduce:transition-none motion-reduce:group-hover:rotate-0 motion-reduce:group-focus-visible:rotate-0">
        <svg viewBox="0 0 256 256" className="size-full" fill="currentColor" aria-hidden>
          <path d="M244 128a12 12 0 0 1-12 12H52.9l52.5 52.5a12 12 0 0 1-17 17l-73-73a12 12 0 0 1 0-17l73-73a12 12 0 0 1 17 17L52.9 116H232a12 12 0 0 1 12 12Z" />
        </svg>
      </span>
    </Link>
  );
}
