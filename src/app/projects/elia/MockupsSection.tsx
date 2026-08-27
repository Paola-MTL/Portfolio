"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Recreation of the Framer "Mockups" block (div.framer-tcpmhp) from
 * paola-cejoco.framer.website/visitor-management.
 *
 * Two continuous horizontal marquees stacked in a column:
 *   - top row: tablet screenshots, scrolling left
 *   - bottom row: phone mockups, scrolling right
 * Both move at a constant ~40 px/s (the value read off the live page).
 * On scroll-into-view each row slides in from the side it travels toward
 * and fades up; the marquee itself runs continuously and independently.
 *
 * Seamlessness: the track holds REPEAT identical sequences laid end to
 * end, and a CSS keyframe animation translates it by exactly
 * -100%/REPEAT — expressed as a *percentage*, so it stays pixel-exact at
 * any sub-pixel track width. The loop restart therefore lands on an
 * identical frame with no jump. It runs as a compositor CSS animation
 * (not a JS/rAF loop), so it stays smooth under load. The measured
 * duration only sets the speed; it can never reintroduce a seam.
 *
 * Anti-clip: every tile's `aspect-ratio` is its image's native ratio and
 * the <img> is `object-contain`, so the image can never crop or overflow.
 */

const TABLET_IMAGES = [
  "/images/elia/home-1.png",
  "/images/elia/step-1-2.png",
  "/images/elia/step-3-1.png",
  "/images/elia/step-2-1.png",
  "/images/elia/step-7-1.png",
];

const MOBILE_IMAGES = [
  "/images/elia/mobile-photo-capture-1.png",
  "/images/elia/mobile-document-signed.png",
  "/images/elia/mobile-document.png",
  "/images/elia/mobile-host-typing.png",
  "/images/elia/mobile-step-3.png",
  "/images/elia/mobile-step-2.png",
  "/images/elia/mobile-step-1.png",
  "/images/elia/mobile-home.png",
];

const SPEED = 40; // px/s — matches the live Framer ticker (linear, no easing)
const REPEAT = 4; // identical sequences in the track; keep in sync with the
// -25% in the `elia-marquee-*` keyframes (globals.css) = -100% / REPEAT.
const FALLBACK_DURATION = 45; // s — used for the one frame before measurement

type Direction = "left" | "right";

function Row({
  images,
  direction,
  aspectRatio,
  tileClassName,
  entranceDelay = 0,
}: {
  images: string[];
  direction: Direction;
  aspectRatio: string; // e.g. "966 / 724"
  tileClassName: string;
  entranceDelay?: number;
}) {
  const prefersReduced = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [seqWidth, setSeqWidth] = useState(0);

  // Measure one sequence so the duration holds a constant px/s across
  // viewports. A stale value only nudges the speed — it cannot bring back
  // a seam, since the translate distance is the percentage, not this.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => setSeqWidth(el.scrollWidth / REPEAT);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const duration = seqWidth > 0 ? seqWidth / SPEED : FALLBACK_DURATION;

  const tiles = Array.from({ length: REPEAT }).flatMap((_, copy) =>
    images.map((src, i) => (
      <div
        key={`${copy}-${i}`}
        className={`${tileClassName} mr-8 shrink-0`}
        style={{ aspectRatio }}
        aria-hidden={copy > 0 ? true : undefined}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          draggable={false}
          className="pointer-events-none absolute inset-0 block h-full w-full max-w-none object-contain object-center"
        />
      </div>
    )),
  );

  return (
    <motion.div
      className="w-full overflow-hidden"
      initial={{ opacity: 0, x: direction === "left" ? 80 : -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: entranceDelay }}
    >
      <div
        ref={trackRef}
        className="elia-marquee-track flex w-max will-change-transform"
        style={
          prefersReduced
            ? undefined
            : { animation: `elia-marquee-${direction} ${duration}s linear infinite` }
        }
      >
        {tiles}
      </div>
    </motion.div>
  );
}

export default function MockupsSection() {
  return (
    <section
      aria-label="Elia product mockups"
      // Full-bleed: break out of the centered 1280px page container so the
      // marquees span the whole viewport (same pattern as the hero / section
      // 02 / contact blocks in page.tsx).
      className="relative left-1/2 right-1/2 -mx-[50vw] flex w-screen flex-col justify-center gap-8 overflow-x-clip py-12 lg:h-[720px] lg:py-0"
    >
      {/* Top row — tablet screens, travelling left */}
      <Row
        images={TABLET_IMAGES}
        direction="left"
        aspectRatio="966 / 724"
        tileClassName="relative overflow-hidden rounded-xl w-[clamp(240px,29.8vw,382px)]"
      />

      {/* Bottom row — phone mockups, travelling right */}
      <Row
        images={MOBILE_IMAGES}
        direction="right"
        aspectRatio="450 / 920"
        tileClassName="relative w-[clamp(110px,10.9vw,140px)]"
        entranceDelay={0.12}
      />
    </section>
  );
}
