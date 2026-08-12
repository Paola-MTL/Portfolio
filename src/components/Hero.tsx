"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { heroTaglines } from "@/data/about";

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroTaglines.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex min-h-screen flex-col justify-center px-6 pt-24 md:px-12">
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-4 text-sm uppercase tracking-[0.2em] text-muted"
      >
        Hello, I&apos;m Paola
      </motion.p>

      <div className="relative h-[1.2em] overflow-hidden md:h-[1.1em]">
        <AnimatePresence mode="wait">
          <motion.h1
            key={heroTaglines[index]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            className="font-display text-4xl font-medium tracking-tightest text-ink text-balance sm:text-6xl md:text-7xl"
          >
            {heroTaglines[index]}
          </motion.h1>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-10 flex flex-wrap items-center gap-2"
      >
        {heroTaglines.map((tagline, i) => (
          <button
            key={tagline}
            onClick={() => setIndex(i)}
            aria-label={`Show tagline: ${tagline}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-accent" : "w-1.5 bg-ink/20"
            }`}
          />
        ))}
      </motion.div>
    </section>
  );
}
