"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { heroTaglines } from "@/data/about";

const longestTagline = heroTaglines.reduce(
  (longest, tagline) => (tagline.length > longest.length ? tagline : longest),
  "",
);

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroTaglines.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-teal px-6 text-center text-white md:px-12">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-5xl font-normal italic sm:text-6xl md:text-7xl"
      >
        Hello, I&apos;m Paola
      </motion.h1>

      <div className="relative mt-4 w-full max-w-xl overflow-hidden">
        {/* Invisible sizer reserves enough height for the longest tagline
            (including any line wrap) so the animated text is never clipped. */}
        <p
          aria-hidden
          className="invisible font-body text-2xl font-medium sm:text-3xl"
        >
          {longestTagline}
        </p>
        <AnimatePresence mode="wait">
          <motion.p
            key={heroTaglines[index]}
            initial={{ y: "60%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-60%", opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            className="absolute inset-0 flex items-center justify-center font-body text-2xl font-medium text-white/90 sm:text-3xl"
          >
            {heroTaglines[index]}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
}
