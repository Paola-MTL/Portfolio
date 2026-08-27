"use client";

import { useEffect, useState } from "react";

/** Height of the purple hero (see page.tsx: the "Top" block is h-[720px]).
 *  A little earlier than the full height so the arrow flips to its dark
 *  variant right as it crosses onto the white background below. */
const HERO_HEIGHT = 720;
const FLIP_AT = HERO_HEIGHT - 64;

export default function BackButton() {
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > FLIP_AT);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="/projects"
      aria-label="Back to projects"
      className={`group fixed top-[28px] left-[max(24px,calc(50vw-536px))] z-50 flex size-[44px] items-center justify-center rounded-full border backdrop-blur-sm transition-colors duration-300 ${
        pastHero
          ? "border-[#1e293b]/30 text-[#1e293b] hover:border-[#1e293b]/60 hover:bg-[#1e293b]/5"
          : "border-white/45 text-white hover:border-white/80 hover:bg-white/10"
      }`}
    >
      {/* On hover/focus the arrow rotates to point toward the top-left,
          then eases back on leave (Figma "Button arrow / Hover" variant:
          the glyph turns -35° about its centre). */}
      <span className="flex size-[22px] items-center justify-center transition-transform duration-200 ease-out will-change-transform group-hover:rotate-[35deg] group-focus-visible:rotate-[35deg] motion-reduce:transition-none motion-reduce:group-hover:rotate-0 motion-reduce:group-focus-visible:rotate-0">
        <svg viewBox="0 0 256 256" className="size-full" fill="currentColor" aria-hidden>
          <path d="M244 128a12 12 0 0 1-12 12H52.9l52.5 52.5a12 12 0 0 1-17 17l-73-73a12 12 0 0 1 0-17l73-73a12 12 0 0 1 17 17L52.9 116H232a12 12 0 0 1 12 12Z" />
        </svg>
      </span>
    </a>
  );
}
