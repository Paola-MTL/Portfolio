"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import { SCROLL_DOWN_EASE, SCROLL_DOWN_MS } from "./Hero";

export const PAGE_CURTAIN_EVENT = "page-curtain:go";

// Same dark curtain as the Hero's wipes: it rises from the bottom to cover
// the page, the route changes underneath, then it lifts off the top. Every
// destination hero is the same #0f0c21, so the seam is invisible. Lives in
// the root layout because the nav itself unmounts on some routes.
export default function PageCurtain() {
  const router = useRouter();
  const pathname = usePathname();
  const [phase, setPhase] = useState<"idle" | "covering" | "lifting">("idle");
  const reduceMotion = useReducedMotion() ?? false;
  const navigatingRef = useRef(false);

  useEffect(() => {
    const onGo = (event: Event) => {
      if (navigatingRef.current) return;
      const href = (event as CustomEvent<string>).detail;
      if (reduceMotion) {
        router.push(href);
        return;
      }
      navigatingRef.current = true;
      setPhase("covering");
      window.setTimeout(() => router.push(href), SCROLL_DOWN_MS);
    };
    window.addEventListener(PAGE_CURTAIN_EVENT, onGo);
    return () => window.removeEventListener(PAGE_CURTAIN_EVENT, onGo);
  }, [router, reduceMotion]);

  useEffect(() => {
    if (!navigatingRef.current) return;
    const id = requestAnimationFrame(() => setPhase("lifting"));
    return () => cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <motion.div
      aria-hidden
      initial={false}
      animate={{
        y: phase === "covering" ? "0%" : phase === "lifting" ? "-100%" : "100%",
      }}
      transition={{
        duration: phase === "idle" ? 0 : SCROLL_DOWN_MS / 1000,
        ease: SCROLL_DOWN_EASE,
      }}
      onAnimationComplete={() => {
        if (phase === "lifting") {
          navigatingRef.current = false;
          setPhase("idle");
        }
      }}
      className="pointer-events-none fixed inset-0 z-[60] bg-[#0f0c21]"
    />
  );
}
