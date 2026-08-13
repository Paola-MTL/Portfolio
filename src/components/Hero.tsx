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
    <section className="flex min-h-screen flex-col items-center justify-center bg-teal px-6 text-center text-white md:px-12">
      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-5xl font-normal italic sm:text-6xl md:text-7xl"
      >
        Hello, I&apos;m Paola
      </motion.h1>

      <div className="relative mt-4 h-[1.4em] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.p
            key={heroTaglines[index]}
            initial={{ y: "60%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-60%", opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
            className="font-body text-2xl font-medium text-white/90 sm:text-3xl"
          >
            {heroTaglines[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        {heroTaglines.map((tagline, i) => (
          <button
            key={tagline}
            onClick={() => setIndex(i)}
            aria-label={`Show tagline: ${tagline}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-white" : "w-1.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
