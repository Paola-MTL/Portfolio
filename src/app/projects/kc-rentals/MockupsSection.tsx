"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * KC Rentals "Mockups" marquee — same continuous-scroll technique as
 * kc-rentals/MockupsSection.tsx: two rows of website screens, each a seamless
 * looping CSS animation, sliding in from the side it travels toward on
 * scroll-into-view. Rows mirror the Figma "Top"/"Bottom" groupings.
 */

const TOP_IMAGES = [
  "/images/kc-rentals/mockup-1.jpg",
  "/images/kc-rentals/mockup-2.jpg",
  "/images/kc-rentals/mockup-3.jpg",
  "/images/kc-rentals/mockup-4.jpg",
];

const BOTTOM_IMAGES = [
  "/images/kc-rentals/mockup-5.jpg",
  "/images/kc-rentals/mockup-6.jpg",
  "/images/kc-rentals/mockup-7.jpg",
  "/images/kc-rentals/mockup-8.jpg",
];

const SPEED = 40; // px/s — matches the Elia marquee's pace
const REPEAT = 4; // identical sequences in the track; keep in sync with the
// -25% in the `kc-rentals-marquee-*` keyframes (globals.css) = -100% / REPEAT.
const FALLBACK_DURATION = 45; // s — used for the one frame before measurement

type Direction = "left" | "right";

function Row({
  images,
  direction,
  entranceDelay = 0,
  offset = 0,
}: {
  images: string[];
  direction: Direction;
  entranceDelay?: number;
  /** Fraction of one sequence to phase-shift the row by (Figma staggers row 2). */
  offset?: number;
}) {
  const prefersReduced = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [seqWidth, setSeqWidth] = useState(0);

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
        className="relative mr-[clamp(12px,2.15vw,27.5px)] aspect-[569.064/313.519] w-[clamp(280px,44vw,569px)] shrink-0 overflow-hidden rounded-[clamp(8px,0.94vw,12px)] shadow-[0_1.5px_11.4px_rgba(0,0,0,0.2)]"
        aria-hidden={copy > 0 ? true : undefined}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          draggable={false}
          className="pointer-events-none absolute inset-0 block h-full w-full max-w-none object-cover object-center"
        />
      </div>
    )),
  );

  return (
    <motion.div
      className="w-full overflow-hidden py-6"
      initial={{ opacity: 0, x: direction === "left" ? 80 : -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: entranceDelay }}
    >
      <div
        ref={trackRef}
        className="kc-rentals-marquee-track flex w-max will-change-transform"
        style={
          prefersReduced
            ? undefined
            : { animation: `kc-rentals-marquee-${direction} ${duration}s linear infinite`, animationDelay: `${-offset * duration}s` }
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
      aria-label="KC Rentals product mockups"
      // Full-bleed: break out of the centered page container so the
      // marquees span the whole viewport (same pattern as elia's).
      className="relative left-1/2 right-1/2 -mx-[50vw] flex w-screen flex-col justify-center gap-0 overflow-x-clip py-10"
    >
      <Row images={TOP_IMAGES} direction="left" />
      <Row images={BOTTOM_IMAGES} direction="right" entranceDelay={0.12} offset={0.086} />
    </section>
  );
}
