"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { REVEALED_KEY } from "./Hero";

const NAV_LINK_CLASS =
  "font-body opacity-100 transition-opacity duration-200 hover:opacity-80";

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const alwaysTransparent = pathname === "/" || pathname === "/projects";

  useEffect(() => {
    if (alwaysTransparent) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [alwaysTransparent]);

  const showScrolledState = scrolled && !alwaysTransparent;

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-300 ${
        showScrolledState
          ? "border-b border-ink/10 bg-paper/90 py-3 text-ink shadow-sm backdrop-blur-md"
          : "py-5 text-paper"
      }`}
    >
      <Link
        href="/"
        aria-label="Paola Cejoco — home"
        onClick={(event) => {
          // Always land on the "Draw a card" deck, not the revealed cards.
          try {
            sessionStorage.removeItem(REVEALED_KEY);
          } catch {}
          // Already on "/": reload instead of resetting in place, since swapping
          // the ID card back to the deck makes Framer run the shared-layout
          // morph in reverse and the card gets stuck mid-tilt.
          if (pathname === "/") {
            event.preventDefault();
            window.location.reload();
          }
        }}
      >
        <Image
          src={showScrolledState ? "/images/logo/pc-violet.svg" : "/images/logo/pc-white.svg"}
          alt="PC"
          width={48}
          height={59}
          className="h-7 w-auto"
          priority
        />
      </Link>
      <nav className="flex items-center gap-6 text-base font-semibold">
        <Link href="/projects" className={NAV_LINK_CLASS}>
          My projects
        </Link>
        <Link href="/about" className={NAV_LINK_CLASS}>
          About me
        </Link>
      </nav>
    </motion.header>
  );
}
