"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { HERO_RESET_EVENT, REVEALED_KEY } from "./Hero";
import { PAGE_CURTAIN_EVENT } from "./PageCurtain";

const NAV_LINK_CLASS =
  "font-body -my-3 inline-flex min-h-11 items-center px-1 opacity-100 transition-opacity duration-200 hover:opacity-80";

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

  // Wipe through the shared dark curtain (see PageCurtain) instead of a hard cut.
  const navigateWithCurtain = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0 ||
      pathname === href
    ) {
      return;
    }
    event.preventDefault();
    window.dispatchEvent(new CustomEvent(PAGE_CURTAIN_EVENT, { detail: href }));
  };

  const showScrolledState = scrolled && !alwaysTransparent;

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between pl-[max(1.5rem,env(safe-area-inset-left))] pr-[max(1.5rem,env(safe-area-inset-right))] md:px-12 transition-all duration-300 ${
        showScrolledState
          ? "border-b border-ink/10 bg-paper/90 pb-3 pt-[calc(0.75rem+env(safe-area-inset-top))] text-ink shadow-sm backdrop-blur-md"
          : "pb-5 pt-[calc(1.25rem+env(safe-area-inset-top))] text-paper"
      }`}
    >
      <Link
        href="/"
        aria-label="Paola Cejoco — home"
        className="-m-3 flex min-h-11 min-w-11 items-center justify-center p-3"
        onClick={(event) => {
          // Always land on the "Draw a card" deck, not the revealed cards.
          try {
            sessionStorage.removeItem(REVEALED_KEY);
          } catch {}
          // Already on "/": put the cards back on the deck in place — the
          // hero plays the reveal in reverse instead of reloading the page.
          if (pathname === "/") {
            event.preventDefault();
            window.dispatchEvent(new Event(HERO_RESET_EVENT));
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
      <nav className="flex items-center gap-3 text-base font-semibold sm:gap-5">
        <Link
          href="/projects"
          className={NAV_LINK_CLASS}
          onClick={(event) => navigateWithCurtain(event, "/projects")}
        >
          My projects
        </Link>
        <Link
          href="/about"
          className={NAV_LINK_CLASS}
          onClick={(event) => navigateWithCurtain(event, "/about")}
        >
          About me
        </Link>
      </nav>
    </motion.header>
  );
}
