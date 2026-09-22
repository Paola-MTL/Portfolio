"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * VF Immigration "Mockups" marquee — same continuous-scroll technique as
 * truxweb/MockupsSection.tsx: two rows of landscape web screens, each a
 * seamless looping CSS animation, sliding in from the side it travels
 * toward on scroll-into-view. Rows mirror the Figma "Top"/"Bottom" groups.
 */

type Tile = {
  src: string;
  // Screens that don't fill the frame on their own (the payment modal) sit
  // inset at the bottom-center of a dark #343434 frame, as in Figma.
  inset?: boolean;
};

const TOP_IMAGES: Tile[] = [
  { src: "/images/vf-immigration/mockup-home.png" },
  { src: "/images/vf-immigration/mockup-consultations.png" },
  { src: "/images/vf-immigration/mockup-payment.png", inset: true },
  { src: "/images/vf-immigration/mockup-faq.png" },
];

const BOTTOM_IMAGES: Tile[] = [
  { src: "/images/vf-immigration/mockup-about.png" },
  { src: "/images/vf-immigration/mockup-facebook-live.png" },
  { src: "/images/vf-immigration/mockup-contact-form.png" },
  { src: "/images/vf-immigration/mockup-reviews.png" },
];

const SPEED = 40; // px/s — matches the Elia/Truxweb marquee pace
const REPEAT = 4; // identical sequences in the track; keep in sync with the
// -25% in the `vf-marquee-*` keyframes (globals.css) = -100% / REPEAT.
const FALLBACK_DURATION = 45; // s — used for the one frame before measurement

type Direction = "left" | "right";

function Row({
  images,
  direction,
  entranceDelay = 0,
}: {
  images: Tile[];
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
    images.map(({ src, inset }, i) => (
      <div
        key={`${copy}-${i}`}
        className={`relative mr-8 aspect-[1132/617] w-[clamp(280px,32vw,480px)] shrink-0 overflow-hidden rounded-xl shadow-[0_4px_30px_rgba(0,0,0,0.2)] ${
          inset ? "bg-[#343434]" : ""
        }`}
        aria-hidden={copy > 0 ? true : undefined}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          draggable={false}
          className={
            inset
              ? "pointer-events-none absolute bottom-0 left-1/2 block h-[93.78%] w-[93.78%] max-w-none -translate-x-1/2 object-cover object-center"
              : "pointer-events-none absolute inset-0 block h-full w-full max-w-none object-cover object-center"
          }
        />
      </div>
    )),
  );

  return (
    <motion.div
      className="w-full overflow-hidden py-8"
      initial={{ opacity: 0, x: direction === "left" ? 80 : -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: entranceDelay }}
    >
      <div
        ref={trackRef}
        className="vf-marquee-track flex w-max will-change-transform"
        style={
          prefersReduced
            ? undefined
            : { animation: `vf-marquee-${direction} ${duration}s linear infinite` }
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
      aria-label="VF Immigration product mockups"
      // Full-bleed: break out of the centered page container so the
      // marquees span the whole viewport (same pattern as elia's).
      className="relative left-1/2 right-1/2 -mx-[50vw] flex w-screen flex-col justify-center overflow-x-clip py-8"
    >
      <Row images={TOP_IMAGES} direction="left" />
      <Row images={BOTTOM_IMAGES} direction="right" entranceDelay={0.12} />
    </section>
  );
}
