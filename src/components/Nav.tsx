"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isProjects = pathname === "/" || pathname.startsWith("/projects");
  const isAbout = pathname === "/about";

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
        scrolled
          ? "border-b border-ink/10 bg-paper/90 py-3 text-ink shadow-sm backdrop-blur-md"
          : "py-5 text-paper"
      }`}
    >
      <Link href="/" className="font-display text-2xl italic">
        PC
      </Link>
      <nav className="flex items-center gap-6 text-sm font-medium uppercase tracking-[0.1em]">
        <Link
          href="/#projects"
          className={`transition-opacity hover:opacity-60 ${isProjects ? "opacity-100" : "opacity-70"}`}
        >
          My Projects
        </Link>
        <Link
          href="/about"
          className={`transition-opacity hover:opacity-60 ${isAbout ? "opacity-100" : "opacity-70"}`}
        >
          About
        </Link>
      </nav>
    </motion.header>
  );
}
