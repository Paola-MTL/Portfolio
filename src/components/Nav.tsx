"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12 mix-blend-difference"
    >
      <Link
        href="/"
        className="font-display text-lg font-semibold tracking-tightest text-paper"
      >
        PC
      </Link>
      <nav className="flex items-center gap-6 text-sm font-medium text-paper">
        <Link href="/#projects" className="hover:opacity-60 transition-opacity">
          Projects
        </Link>
        <Link href="/about" className="hover:opacity-60 transition-opacity">
          About
        </Link>
      </nav>
    </motion.header>
  );
}
