"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * Truxweb "Mockups" marquee — same continuous-scroll technique as
 * elia/MockupsSection.tsx: two rows stacked in a column, each a seamless
 * looping CSS animation (not JS/rAF), sliding in from the side it travels
 * toward on scroll-into-view. Unlike Elia (tablet row + distinct phone
 * row), Truxweb only has one device type (web screens), so both rows
 * share the same landscape aspect ratio and simply carry a different
 * curated set of screens, matching the Figma "Top"/"Bottom" groupings.
 */

const TOP_IMAGES = [
  "/images/truxweb/mockup-testimonials.png",
  "/images/truxweb/carousel-dashboard.png",
  "/images/truxweb/mockup-network.png",
  "/images/truxweb/carousel-hero.png",
  "/images/truxweb/carousel-login.png",
];

const BOTTOM_IMAGES = [
  "/images/truxweb/carousel-branding.png",
  "/images/truxweb/mockup-features.png",
  "/images/truxweb/mockup-testimonials.png",
  "/images/truxweb/carousel-dashboard.png",
  "/images/truxweb/carousel-login.png",
];

const SPEED = 40; // px/s — matches the Elia marquee's pace
const REPEAT = 4; // identical sequences in the track; keep in sync with the
// -25% in the `truxweb-marquee-*` keyframes (globals.css) = -100% / REPEAT.
const FALLBACK_DURATION = 45; // s — used for the one frame before measurement

type Direction = "left" | "right";

function Row({
  images,
  direction,
  entranceDelay = 0,
}: {
  images: string[];
  direction: Direction;
  entranceDelay?: number;
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
        className="relative mr-8 aspect-[1392/870] w-[clamp(280px,32vw,480px)] shrink-0 overflow-hidden rounded-xl"
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
      className="w-full overflow-hidden"
      initial={{ opacity: 0, x: direction === "left" ? 80 : -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: entranceDelay }}
    >
      <div
        ref={trackRef}
        className="truxweb-marquee-track flex w-max will-change-transform"
        style={
          prefersReduced
            ? undefined
            : { animation: `truxweb-marquee-${direction} ${duration}s linear infinite` }
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
      aria-label="Truxweb product mockups"
      // Full-bleed: break out of the centered page container so the
      // marquees span the whole viewport (same pattern as elia's).
      className="relative left-1/2 right-1/2 -mx-[50vw] flex w-screen flex-col justify-center gap-8 overflow-x-clip py-16"
    >
      <Row images={TOP_IMAGES} direction="left" />
      <Row images={BOTTOM_IMAGES} direction="right" entranceDelay={0.12} />
    </section>
  );
}
