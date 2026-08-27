"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;
// Spring for the shared hero-card layoutId morph. damping:14/stiffness:150
// keeps the same ~0.58 damping ratio as the original 20/300 tuning (so it
// still overshoots and settles back the same way) but at roughly half the
// stiffness, which stretches the morph out and makes the ID card's
// arrival read as slower rather than snappier. (Note: a mass:2/damping:32
// spring, closer to critically damped, is nearly indistinguishable from a
// plain ease-out curve at this distance — the ratio is what makes a
// spring read as a spring.)
const CARD_SPRING = { type: "spring", damping: 14, stiffness: 150, mass: 1 } as const;

/*
  The deck's isometric tilt is normally one CSS matrix() — but Framer can't
  interpolate an opaque matrix during a layoutId shared transition, only
  its own named transform values (rotate, skewX, scaleX, scaleY). So the
  same matrix(0.832, 0.472, -0.831429, 0.474286, 0, 0) used elsewhere is
  decomposed here into that equivalent rotate+skew+scale form, so the
  front card can carry it as animatable `style` values instead of a
  static class, and Framer will visibly untilt it as it grows into the
  ID card, the same way the reference site's photo straightens out,
  rather than the skew just vanishing the instant the swap happens.

  IMPORTANT: Framer composes these in scale → rotate → skewX order
  (verified via getComputedStyle, not assumed) — the *opposite* of the
  CSS-shorthand order `rotate skewX scale` you'd naturally reach for.
  Decomposing for the wrong order still round-trips to a matrix that
  looks numerically fine on paper, it's just the wrong shape once
  rendered — which is exactly the bug that shipped the first time.
*/
const DECK_TILT = {
  rotate: 46.8455,
  skewX: 3.8486,
  scaleX: 1.21643,
  scaleY: 0.647008,
};
const FLAT_TILT = { rotate: 0, skewX: 0, scaleX: 1, scaleY: 1 };

function Glow({
  left,
  top,
  visible,
}: {
  left: string;
  top: string;
  visible: boolean;
}) {
  return (
    <div
      style={{ left, top, opacity: visible ? 1 : 0 }}
      className="pointer-events-none absolute flex aspect-[818.81/739.81] w-[63.97%] items-center justify-center transition-opacity duration-[800ms] ease-in-out"
    >
      <Image
        src="/images/hero/blob.svg"
        alt=""
        width={1342}
        height={1098}
        className="w-[84%] rotate-[31.79deg]"
      />
    </div>
  );
}

// The overlay wipe and the hero's parallax lift share this timing, so the
// dark curtain rising from the bottom and the hero sliding up read as one
// continuous downward scroll into the Projects page.
const SCROLL_DOWN_MS = 620;
const SCROLL_DOWN_EASE = [0.65, 0, 0.35, 1] as const;

// Once the deck has been drawn, remember it for the rest of the session so
// returning from the Projects page (browser back, or the scroll-up gesture)
// lands straight on the three cards instead of resetting to the deck.
const REVEALED_KEY = "hero:revealed";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Hero() {
  const router = useRouter();
  const reduceMotion = useReducedMotion();
  const [revealed, setRevealed] = useState(false);
  const [sideCardsVisible, setSideCardsVisible] = useState(false);
  const [sideCardHovered, setSideCardHovered] = useState(false);
  const [leavingToProjects, setLeavingToProjects] = useState(false);
  // `returning` = mounted already-revealed (came back from Projects); it drives
  // the reverse wipe — a dark curtain that starts covering the viewport and
  // lifts away while the cards settle down from above, mirroring the scroll.
  const [returning, setReturning] = useState(false);
  const [curtainRetracted, setCurtainRetracted] = useState(false);
  const leavingRef = useRef(false);

  useIsomorphicLayoutEffect(() => {
    let wasRevealed = false;
    try {
      wasRevealed = sessionStorage.getItem(REVEALED_KEY) === "1";
    } catch {}
    if (wasRevealed) {
      setRevealed(true);
      setSideCardsVisible(true);
      setReturning(true);
    }
  }, []);

  useEffect(() => {
    if (!revealed) return;
    try {
      sessionStorage.setItem(REVEALED_KEY, "1");
    } catch {}
    if (returning) return;
    const timer = setTimeout(() => setSideCardsVisible(true), 500);
    return () => clearTimeout(timer);
  }, [revealed, returning]);

  // On a returning mount the curtain is painted covering the screen; drop it
  // on the next frame so Framer animates it up out of view.
  useEffect(() => {
    if (!returning) return;
    const id = requestAnimationFrame(() => setCurtainRetracted(true));
    return () => cancelAnimationFrame(id);
  }, [returning]);

  const goToProjects = useCallback(() => {
    if (leavingRef.current) return;
    leavingRef.current = true;
    if (reduceMotion) {
      router.push("/projects");
      return;
    }
    setLeavingToProjects(true);
    window.setTimeout(() => router.push("/projects"), SCROLL_DOWN_MS);
  }, [reduceMotion, router]);

  const handleProjectsCardClick = (event: React.MouseEvent) => {
    // Let modified clicks (new tab, etc.) behave normally.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    goToProjects();
  };

  // Once the three cards are settled, a downward scroll / upward swipe at the
  // top of the page runs the same wipe as clicking the Projects card — the
  // mirror of the scroll-up gesture on the Projects page.
  useEffect(() => {
    if (!revealed) return;
    if (returning && !curtainRetracted) return;

    const onWheel = (event: WheelEvent) => {
      if (window.scrollY <= 0 && event.deltaY > 8) goToProjects();
    };
    let touchStartY = 0;
    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
    };
    const onTouchMove = (event: TouchEvent) => {
      const y = event.touches[0]?.clientY ?? 0;
      if (window.scrollY <= 0 && touchStartY - y > 64) goToProjects();
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [revealed, returning, curtainRetracted, goToProjects]);

  // Curtain: parked below (100%), rising to cover on the way down to Projects,
  // painted covering (0%) on a returning mount, then lifting away (-100%).
  const curtainY = leavingToProjects
    ? "0%"
    : returning
      ? curtainRetracted
        ? "-100%"
        : "0%"
      : "100%";

  // Hero content lifts up as we leave; on a returning mount it starts lifted
  // and settles back down as the curtain clears.
  const contentLifted =
    !reduceMotion && (leavingToProjects || (returning && !curtainRetracted));

  return (
    <section className="relative flex min-h-screen w-full overflow-hidden bg-[#0f0c21]">
      {/* Deck-state glows (bottom-left / top-right) */}
      <Glow left="-13.7%" top="50.6%" visible={!revealed} />
      <Glow left="80.7%" top="-28.8%" visible={!revealed} />
      {/* Revealed-state glows (top-left / bottom-right) */}
      <Glow left="-7.44%" top="-23.2%" visible={revealed} />
      <Glow left="82.7%" top="49.4%" visible={revealed} />

      <motion.div
        key={returning ? "hero-content-return" : "hero-content"}
        initial={{ y: returning && !reduceMotion ? -80 : 0 }}
        animate={{ y: contentLifted ? -80 : 0 }}
        transition={{ duration: SCROLL_DOWN_MS / 1000, ease: SCROLL_DOWN_EASE }}
        className="relative flex h-screen min-w-0 flex-1 flex-col items-center justify-between px-5 py-[9.6vh]"
      >
        <p
          aria-hidden
          className="m-0 select-none whitespace-nowrap p-2 text-center font-display text-[clamp(28px,4.5vw,52.857px)] font-extrabold tracking-[-0.53px] text-[#1e293b] opacity-0"
        >
          Draw a card
        </p>

        {/*
          The purple front card and the ID card share layoutId="hero-card",
          so Framer Motion treats them as the SAME element across the swap:
          it measures the front card's on-screen box right before it's
          replaced, and the ID card's box right after, then animates one
          continuous shape/position/size morph between them (plus a
          crossfade of their very different contents) instead of two
          independent elements fading in and out near each other.
        */}
        <div className="flex items-center justify-center">
          {/*
            The About/Projects side cards are plain fades (no layoutId) —
            they're not part of the deck-to-ID-card shared transition, just
            two siblings that fade in 2s after the ID card lands, flanking
            it with the same 40px overlap the Figma spec uses.
          */}
          <AnimatePresence>
            {sideCardsVisible && (
              <motion.div
                key="about-card"
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: EASE_OUT }}
                whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.3, ease: EASE_OUT } }}
                onMouseEnter={() => setSideCardHovered(true)}
                onMouseLeave={() => setSideCardHovered(false)}
                className="relative z-[1] mr-[-40px] flex h-[300px] w-[214.286px] shrink-0 items-center justify-center overflow-hidden rounded-[14.286px] border-[5.714px] border-[rgba(255,254,254,0.13)] bg-gradient-to-b from-[#5dadf4] via-[#3c3180] to-[#0f0c21] bg-clip-padding transition-shadow duration-300 ease-out hover:z-10 hover:shadow-2xl"
              >
                <Link
                  href="/about"
                  className="flex size-full items-center justify-center p-[14.286px] text-center font-display text-[20px] font-bold tracking-[-0.3px] text-white"
                >
                  About me
                </Link>
              </motion.div>
            )}
          </AnimatePresence>

          <div
            className="relative z-[2] flex items-center justify-center"
            style={{
              transform: sideCardHovered ? "scale(0.92)" : "scale(1)",
              transition: "transform 300ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
          <AnimatePresence mode="popLayout" initial={false}>
            {!revealed ? (
              <motion.div
                key="deck"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3, ease: EASE_OUT } }}
                transition={{ duration: 0.4, ease: EASE_OUT }}
                className="flex h-[min(320px,44.3vw)] w-[min(520px,72vw)] items-center justify-center max-[640px]:h-[58.2vw] max-[640px]:w-[84vw]"
              >
                <div className="relative w-[48.08%] [aspect-ratio:5/7] [filter:drop-shadow(0_24px_34px_rgba(24,12,71,0.55))]">
                  {/* Background stack: still the static CSS matrix — only the
                      interactive front card (below) needs an animatable tilt. */}
                  <div className="absolute inset-0 [transform:matrix(0.832,0.472,-0.831429,0.474286,0,0)]">
                    <div className="absolute inset-0 rounded-[20px] bg-[rgba(113,93,244,0.2)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] [transform:translate(4.8%,3.4286%)]" />
                    <div className="absolute inset-0 rounded-[20px] bg-[rgba(113,93,244,0.2)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] [transform:translate(3.6%,2.5714%)]" />
                    <div className="absolute inset-0 rounded-[20px] bg-[rgba(113,93,244,0.2)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] [transform:translate(2.4%,1.7143%)]" />
                    <div className="absolute inset-0 rounded-[20px] bg-[rgba(113,93,244,0.2)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] [transform:translate(1.2%,0.8571%)]" />
                  </div>
                  <button
                    type="button"
                    aria-label="Reveal Paola Cejoco's profile card"
                    onClick={() => setRevealed(true)}
                    className="absolute inset-0 block cursor-pointer border-0 bg-transparent p-0 outline-none"
                  >
                    <motion.div
                      layoutId="hero-card"
                      style={DECK_TILT}
                      whileHover={{ y: -14, transition: { duration: 0.35, ease: [0.34, 1.56, 0.64, 1] } }}
                      transition={CARD_SPRING}
                      className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-[20px] border-[12px] border-transparent bg-[#715df4] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] transition-shadow duration-[350ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.14),0_30px_42px_rgba(9,6,26,0.5)]"
                    >
                      <div className="relative w-[15.8%]">
                        <Image
                          src="/images/hero/pc-logo-white.svg"
                          alt=""
                          width={48}
                          height={59}
                          className="h-auto w-full"
                        />
                      </div>
                    </motion.div>
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="idcard"
                layoutId="hero-card"
                style={FLAT_TILT}
                transition={CARD_SPRING}
                className="isolate flex h-[420px] w-[300px] flex-col overflow-hidden rounded-[20px] border-8 border-[rgba(255,254,254,0.13)] bg-white bg-clip-padding"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.25, ease: EASE_OUT }}
                  className="relative z-[2] flex h-[193px] w-full shrink-0 flex-col items-start rounded-t-xl bg-white"
                >
                  <div className="mb-[-64px] h-[150px] w-full shrink-0 rounded-t-xl bg-gradient-to-r from-[#5545b5] via-[#3c3180] to-[#0f0c21]" />
                  <div className="flex w-full shrink-0 flex-col items-center">
                    <div className="relative size-[120px] overflow-hidden rounded-full">
                      <Image
                        src="/images/hero/paola.png"
                        alt="Paola Cejoco"
                        fill
                        sizes="120px"
                        className="object-cover"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-full mix-blend-soft-light [box-shadow:inset_0_0_0_2px_white]" />
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3, ease: EASE_OUT }}
                  className="relative z-[1] flex w-full flex-1 flex-col items-center justify-center overflow-hidden rounded-b-xl bg-white px-5 py-5 text-center"
                >
                  <p className="w-full shrink-0 font-display text-[20px] font-bold leading-[24px] tracking-[-0.3px] text-[#1e293b]">
                    Hi, I&rsquo;m Paola Cejoco
                  </p>
                  <p className="w-full shrink-0 font-display text-[14px] font-medium leading-[18px] tracking-[-0.14px] text-[#64748b]">
                    Product Designer based in Montreal, fueled by lattes
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          </div>

          <AnimatePresence>
            {sideCardsVisible && (
              <motion.div
                key="projects-card"
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: EASE_OUT }}
                whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.3, ease: EASE_OUT } }}
                onMouseEnter={() => setSideCardHovered(true)}
                onMouseLeave={() => setSideCardHovered(false)}
                className="relative z-[1] ml-[-40px] flex h-[300px] w-[214.286px] shrink-0 items-center justify-center overflow-hidden rounded-[14.286px] border-[5.714px] border-[rgba(255,254,254,0.13)] bg-gradient-to-b from-[#bf5df4] via-[#3c3180] to-[#0f0c21] bg-clip-padding transition-shadow duration-300 ease-out hover:z-10 hover:shadow-2xl"
              >
                <Link
                  href="/projects"
                  onClick={handleProjectsCardClick}
                  className="flex size-full items-center justify-center p-[14.286px] text-center font-display text-[20px] font-bold tracking-[-0.3px] text-white"
                >
                  Projects
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative flex items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            {!revealed && (
              <motion.p
                key="headline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="m-0 whitespace-nowrap p-2 text-center font-display text-[clamp(28px,4.5vw,52.857px)] font-extrabold tracking-[-0.53px] text-white"
              >
                Draw a card
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/*
        Dark curtain shared by both directions: it rises from the bottom edge
        when the Projects card is clicked (scroll down), and on the way back it
        starts covering the viewport and lifts off the top edge (scroll up).
        It's the same #0f0c21 as the Projects page, so the seam is invisible.
      */}
      <motion.div
        key={returning ? "curtain-up" : "curtain-down"}
        aria-hidden
        initial={returning ? { y: "0%" } : false}
        animate={{ y: curtainY }}
        transition={{ duration: SCROLL_DOWN_MS / 1000, ease: SCROLL_DOWN_EASE }}
        className="pointer-events-none fixed inset-0 z-50 bg-[#0f0c21]"
      />
    </section>
  );
}
