"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

export type CarouselItem = {
  src: string;
  caption: string;
  width: string;
  aspect: string;
};

// Continuous horizontal scroll, loosely based on the carousel on
// paola-cejoco.framer.website/en/About-me (the live site runs ~100 px/s;
// slowed down here). Same seamless-loop technique as the Elia mockups
// marquee: the track holds REPEAT identical sequences and a CSS keyframe
// translates it by exactly -25% (= one sequence, as a percentage so it
// stays pixel-exact at any sub-pixel width) — see the
// `about-marquee-left` keyframes in globals.css.
const SPEED = 45; // px/s
const HOVER_SLOWDOWN = 4; // how much slower the track runs while hovered
const REPEAT = 4; // keep in sync with the -25% in globals.css (-100% / REPEAT)
const FALLBACK_DURATION = 40; // s — used for the one frame before measurement

export default function PhotoCarousel({ items }: { items: CarouselItem[] }) {
  const prefersReduced = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [seqWidth, setSeqWidth] = useState(0);
  const [hovered, setHovered] = useState(false);

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

  // Slow down via the running animation's playbackRate, not by changing
  // animation-duration. Duration sets how a given `currentTime` maps to
  // keyframe progress (translateX %); since currentTime keeps accumulating
  // for the whole time the page has been open, changing duration reslices
  // that large number against a new divisor and the resulting progress
  // jumps to an unrelated point in the loop — a visible glitch. playbackRate
  // instead scales how fast currentTime advances from here, leaving the
  // in-progress position untouched.
  useEffect(() => {
    const anim = trackRef.current?.getAnimations()[0];
    anim?.updatePlaybackRate(hovered ? 1 / HOVER_SLOWDOWN : 1);
  }, [hovered, duration]);

  const tiles = Array.from({ length: REPEAT }).flatMap((_, copy) =>
    items.map((item, i) => (
      <figure
        key={`${copy}-${i}`}
        className={`flex shrink-0 flex-col items-center gap-2 ${item.width}`}
        aria-hidden={copy > 0 ? true : undefined}
      >
        <div className={`relative w-full overflow-hidden ${item.aspect}`}>
          <Image
            src={item.src}
            alt=""
            fill
            sizes="375px"
            className="object-cover"
          />
        </div>
        <figcaption className="font-body text-center text-[14px] font-semibold text-black">
          {item.caption}
        </figcaption>
      </figure>
    )),
  );

  return (
    <div
      className="w-full overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        ref={trackRef}
        className="about-marquee-track flex w-max gap-4 will-change-transform sm:gap-6 md:gap-[43px]"
        style={
          prefersReduced
            ? undefined
            : { animation: `about-marquee-left ${duration}s linear infinite` }
        }
      >
        {tiles}
      </div>
    </div>
  );
}
