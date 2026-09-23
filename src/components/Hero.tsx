"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const EASE_IN = [0.5, 0, 0.75, 0] as const;
const EASE_IN_OUT = [0.65, 0, 0.35, 1] as const;
const EASE_POP = [0.34, 1.56, 0.64, 1] as const;
const EASE_FLIP = [0.6, 0.05, 0.2, 1] as const;

/*
  Draw-a-card choreography (tuned in the Claude Design prototype):
  press → lift → the card untilts (spring) while flipping over to the ID
  face, the rest of the deck slides away card by card, the ID content
  fades in, then the About/Projects cards are dealt out from behind it.
*/
// Untilt spring: damping ratio ~0.69, so it settles with a single soft
// overshoot — the flip already carries the drama.
const CARD_SPRING = { type: "spring", stiffness: 90, damping: 13, mass: 1 } as const;
// Side cards being dealt out from behind the ID card.
const DEAL_SPRING = { type: "spring", stiffness: 200, damping: 20, mass: 1 } as const;
// Hover follow: soft enough that tilt/parallax trail the pointer smoothly.
const HOVER_SPRING = { stiffness: 220, damping: 26, mass: 1 };

const FLIP_DELAY = 0.08;
const FLIP_DURATION = 0.8;
const LIFT_PX = 36;
const LIFT_DURATION = 1.05;
const DECK_EXIT = 0.5;
const DECK_STAGGER = 0.05;
const DECK_HOVER_LIFT = 14;
const DECK_FAN = 1.9;
const ID_PHOTO_DELAY = 0.5;
const ID_TEXT_DELAY = 0.62;
const ID_FADE = 0.5;
const SIDE_DELAY = 0.8;
const DEAL_STAGGER = 0.1;
const GLOW_DRIFT = 1.8;
const TILT_MAX = 9;
const SIDE_HOVER_SCALE = 1.4;
const HOVER_DIM = "brightness(0.62) saturate(0.8)";
// Side-card hover hand-off. Grow/shrink share one duration and curve so the
// hovered card, the ID card and the other card move as one. Leaving a card
// waits a beat before letting go, so sweeping across to the other side card
// hands the hover straight over instead of bouncing everything back to rest
// in between, and a card that was just left stays above the ID card until
// it has finished shrinking instead of popping behind it.
const SIDE_HOVER_S = 0.55;
const SIDE_HOVER_CSS_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";
const SIDE_LEAVE_GRACE_MS = 140;
const SIDE_LINGER_MS = SIDE_HOVER_S * 1000;
const NO_DIM = "brightness(1) saturate(1)";
// When the whole reveal has come to rest, so the ID card's hover tilt
// can't fight the flip.
const REVEAL_SETTLE_MS = 1500;

/*
  The deck's isometric tilt is the CSS matrix(0.832, 0.472, -0.831429,
  0.474286, 0, 0), decomposed into Framer's named transform values so the
  card can spring from it to flat. Framer composes them as
  scale → rotate → skewX (verified via getComputedStyle, not assumed) — the
  *opposite* of the CSS-shorthand order `rotate skewX scale` you'd naturally
  reach for. Decomposing for the wrong order still round-trips to a matrix
  that looks numerically fine on paper, it's just the wrong shape once
  rendered.

  The card element is always the ID card's 300×420 box; in the deck pose an
  extra uniform `scale` shrinks it to the deck card's responsive width.
*/
const DECK_TILT = {
  rotate: 46.8455,
  skewX: 3.8486,
  scaleX: 1.21643,
  scaleY: 0.647008,
};
const FLAT_TILT = { rotate: 0, skewX: 0, scaleX: 1, scaleY: 1, scale: 1 };
const ID_W = 300;
const ID_H = 420;

// Deck card width, matching the old deck box: 48.08% of
// min(520px, 72vw), or of 84vw at ≤640px.
function getDeckScale() {
  if (typeof window === "undefined") return 250 / ID_W;
  const vw = window.innerWidth;
  const box = vw <= 640 ? 0.84 * vw : Math.min(520, 0.72 * vw);
  return (box * 0.4808) / ID_W;
}

// Offsets of the four cards under the top one, back to front (Figma's
// translate(4.8%, 3.4286%) … on a 250×350 card = 12px … 3px).
const STACK_OFFSETS = [12, 9, 6, 3];

function Glow({
  from,
  to,
  moved,
}: {
  from: { left: string; top: string };
  to: { left: string; top: string };
  moved: boolean;
}) {
  // Instead of fading one pair of glows out and another in, the same two
  // glows drift across the hero to their revealed corners.
  return (
    <motion.div
      initial={false}
      animate={moved ? to : from}
      transition={{ duration: GLOW_DRIFT, ease: EASE_IN_OUT }}
      className="pointer-events-none absolute flex aspect-[818.81/739.81] w-[63.97%] items-center justify-center"
    >
      <Image
        src="/images/hero/blob.svg"
        alt=""
        width={1342}
        height={1098}
        className="w-[84%] rotate-[31.79deg]"
      />
    </motion.div>
  );
}

// Pointer position over an element as springy -1..1 motion values.
function usePointer() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, HOVER_SPRING);
  const sy = useSpring(y, HOVER_SPRING);
  const onMove = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const r = event.currentTarget.getBoundingClientRect();
      if (!r.width || !r.height) return;
      const clamp = (v: number) => Math.max(-1, Math.min(1, v));
      x.set(clamp(((event.clientX - r.left) / r.width) * 2 - 1));
      y.set(clamp(((event.clientY - r.top) / r.height) * 2 - 1));
    },
    [x, y],
  );
  const reset = useCallback(() => {
    x.set(0);
    y.set(0);
  }, [x, y]);
  return { sx, sy, onMove, reset };
}

// Rim light: the card's top edge catches the light, swinging a little
// toward whichever side the pointer tilts it to.
function useRimLight(px: MotionValue<number>) {
  const angle = useTransform(px, (v) => 180 - v * 28);
  const rimX = useTransform(px, (v) => -v * 1.5);
  const background = useMotionTemplate`linear-gradient(${angle}deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 38%)`;
  const boxShadow = useMotionTemplate`inset ${rimX}px 1.5px 0 rgba(255,255,255,0.42)`;
  return { background, boxShadow };
}

function SideCard({
  side,
  label,
  href,
  gradientFrom,
  glowRgb,
  revealed,
  hovered,
  lingering,
  dimmed,
  reduceMotion,
  onHoverChange,
  onClick,
}: {
  side: "about" | "projects";
  label: string;
  href: string;
  gradientFrom: string;
  glowRgb: string;
  revealed: boolean;
  hovered: boolean;
  // Just left and still shrinking: keep it above the ID card until it's done.
  lingering: boolean;
  dimmed: boolean;
  reduceMotion: boolean;
  onHoverChange: (hovered: boolean) => void;
  onClick: (event: React.MouseEvent) => void;
}) {
  const pointer = usePointer();
  const rotateX = useTransform(pointer.sy, (v) => (reduceMotion ? 0 : -v * TILT_MAX));
  const rotateY = useTransform(pointer.sx, (v) => (reduceMotion ? 0 : v * TILT_MAX));
  const rim = useRimLight(pointer.sx);

  // About is dealt out to the left, Projects to the right: both start
  // tucked behind the ID card, turned slightly inward and a bit smaller.
  const dir = side === "about" ? 1 : -1;
  const hidden = reduceMotion
    ? { opacity: 0, x: dir * 12, rotate: 0, scale: 1 }
    : { opacity: 0, x: dir * 217, rotate: dir * -7, scale: 0.82 };
  const delay = SIDE_DELAY + (side === "projects" ? DEAL_STAGGER : 0);

  const leave = () => {
    pointer.reset();
    onHoverChange(false);
  };

  return (
    <motion.div
      initial={false}
      animate={revealed ? { opacity: 1, x: 0, rotate: 0, scale: 1 } : hidden}
      transition={
        revealed
          ? { ...DEAL_SPRING, delay, opacity: { duration: 0.2, ease: "easeOut", delay } }
          : { duration: 0.3, ease: EASE_IN, opacity: { duration: 0.22, ease: "easeIn", delay: 0.08 } }
      }
      aria-hidden={!revealed}
      style={{ transformOrigin: "50% 80%", pointerEvents: revealed ? "auto" : "none" }}
      className={`relative shrink-0 ${hovered ? "z-20" : lingering ? "z-10" : "z-[1]"} ${side === "about" ? "mr-[-40px]" : "ml-[-40px]"}`}
    >
      {/*
        Hover (Figma node 94:11354): the card grows from 214.286×300 to
        300×420 — a uniform 1.4× that scales its border, radius, padding and
        label to match — and tilts toward the pointer under a rim light. The
        other two cards dim so only this one stays lit.
      */}
      <motion.div
        initial={false}
        animate={{
          scale: hovered ? SIDE_HOVER_SCALE : 1,
          filter: dimmed ? HOVER_DIM : NO_DIM,
          boxShadow: hovered
            ? `0 36px 64px -20px rgba(${glowRgb},0.6), 0 18px 30px -12px rgba(9,6,26,0.55)`
            : `0 0 0 0 rgba(${glowRgb},0), 0 0 0 0 rgba(9,6,26,0)`,
        }}
        transition={{ duration: SIDE_HOVER_S, ease: EASE_OUT, filter: { duration: SIDE_HOVER_S, ease: EASE_OUT } }}
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        onMouseEnter={() => onHoverChange(true)}
        onMouseMove={pointer.onMove}
        onMouseLeave={leave}
        className={`relative flex h-[300px] w-[214.286px] items-center justify-center overflow-hidden rounded-[14.286px] border-[5.714px] border-[rgba(255,254,254,0.13)] bg-gradient-to-b ${gradientFrom} via-[#3c3180] to-[#0f0c21] bg-clip-padding`}
      >
        <motion.span
          aria-hidden
          initial={false}
          animate={{ opacity: hovered && !reduceMotion ? 1 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ background: rim.background, boxShadow: rim.boxShadow }}
          className="pointer-events-none absolute inset-0 rounded-[8.572px]"
        />
        <Link
          href={href}
          tabIndex={revealed ? undefined : -1}
          onClick={onClick}
          onFocus={() => onHoverChange(true)}
          onBlur={leave}
          className="relative flex size-full items-center justify-center p-[14.286px] text-center font-display text-[20px] font-bold tracking-[-0.3px] text-white outline-none"
        >
          {label}
        </Link>
      </motion.div>
    </motion.div>
  );
}

// The overlay wipe and the hero's parallax lift share this timing, so the
// dark curtain rising from the bottom and the hero sliding up read as one
// continuous gesture — whether navigating away (to About) or, once the card
// is drawn, scrolling down into the inline Projects section.
export const SCROLL_DOWN_MS = 620;
export const SCROLL_DOWN_EASE = [0.65, 0, 0.35, 1] as const;

// Once the deck has been drawn, remember it for the rest of the session so
// returning from the Projects page (browser back, or the scroll-up gesture)
// lands straight on the three cards instead of resetting to the deck.
export const REVEALED_KEY = "hero:revealed";
// Fired by the nav's PC logo while already on "/": put the card back on the
// deck in place (the reveal played in reverse) instead of reloading.
export const HERO_RESET_EVENT = "hero:reset";
// Going back to the deck: the side cards tuck away first, then the card
// flips back and re-tilts onto the deck, then the rest of the deck and the
// headline return. Exits run quicker than the entrance.
const BACK_FLIP_DELAY = 0.15;
const BACK_DECK_DELAY = 0.3;
const BACK_HEADLINE_DELAY = 0.4;
const UNWIND_MS = 1300;

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default function Hero() {
  const router = useRouter();
  const reduceMotion = useReducedMotion() ?? false;
  const [revealed, setRevealed] = useState(false);
  // `drawn` = revealed by a click this visit (runs the press-and-lift);
  // `settled` = the reveal has come to rest (enables the ID card's tilt).
  const [drawn, setDrawn] = useState(false);
  // `unwinding` = the cards are being put back on the deck (reverse timings).
  const [unwinding, setUnwinding] = useState(false);
  const [settled, setSettled] = useState(false);
  const [deckScale, setDeckScale] = useState(250 / ID_W);
  const [deckHover, setDeckHover] = useState(false);
  // Which side card is hovered, if any — drives both the centre-stack shrink and
  // the edge it shrinks toward, so Frame 13's -40 About↔ID overlap is preserved.
  const [hoveredSide, setHoveredSide] = useState<"about" | "projects" | null>(null);
  const [lingeringSide, setLingeringSide] = useState<"about" | "projects" | null>(null);
  const hoveredSideRef = useRef<"about" | "projects" | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout>>();
  const lingerTimer = useRef<ReturnType<typeof setTimeout>>();

  const setSideHover = useCallback((side: "about" | "projects" | null) => {
    const prev = hoveredSideRef.current;
    hoveredSideRef.current = side;
    setHoveredSide(side);
    if (prev && prev !== side) {
      clearTimeout(lingerTimer.current);
      setLingeringSide(prev);
      lingerTimer.current = setTimeout(() => setLingeringSide(null), SIDE_LINGER_MS);
    }
  }, []);
  const [leavingViaCurtain, setLeavingViaCurtain] = useState(false);
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
      setSettled(true);
      setReturning(true);
    }
    setDeckScale(getDeckScale());
    const onResize = () => setDeckScale(getDeckScale());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (!revealed) return;
    try {
      sessionStorage.setItem(REVEALED_KEY, "1");
    } catch {}
  }, [revealed]);

  useEffect(() => {
    const onReset = () => {
      try {
        sessionStorage.removeItem(REVEALED_KEY);
      } catch {}
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
      clearTimeout(leaveTimer.current);
      setSideHover(null);
      setDeckHover(false);
      setDrawn(false);
      setSettled(false);
      setUnwinding(true);
      setRevealed(false);
    };
    window.addEventListener(HERO_RESET_EVENT, onReset);
    return () => window.removeEventListener(HERO_RESET_EVENT, onReset);
  }, [reduceMotion, setSideHover]);

  useEffect(() => {
    if (!unwinding) return;
    const timer = setTimeout(() => setUnwinding(false), UNWIND_MS);
    return () => clearTimeout(timer);
  }, [unwinding]);

  useEffect(() => {
    if (!drawn) return;
    const timer = setTimeout(() => setSettled(true), REVEAL_SETTLE_MS);
    return () => clearTimeout(timer);
  }, [drawn]);

  // On a returning mount the curtain is painted covering the screen; drop it
  // on the next frame so Framer animates it up out of view.
  useEffect(() => {
    if (!returning) return;
    const id = requestAnimationFrame(() => setCurtainRetracted(true));
    return () => cancelAnimationFrame(id);
  }, [returning]);

  // The About card leaves through the curtain wipe: the About page's hero is
  // the same #0f0c21 as the curtain, so the seam is invisible there too.
  const leaveWithCurtain = useCallback(
    (href: string) => {
      if (leavingRef.current) return;
      leavingRef.current = true;
      if (reduceMotion) {
        router.push(href);
        return;
      }
      setLeavingViaCurtain(true);
      window.setTimeout(() => router.push(href), SCROLL_DOWN_MS);
    },
    [reduceMotion, router],
  );

  // The Projects card scrolls to the inline Projects section that now lives
  // right below the Hero on the homepage, instead of navigating away.
  const scrollToProjects = useCallback(() => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
  }, [reduceMotion]);

  // Once the card is drawn, a downward scroll / upward swipe at the top plays
  // the same curtain wipe as the About card: it rises to cover, the page
  // jumps to the Projects section while hidden underneath, then it sinks
  // back down to reveal it. Before that, on the plain "Draw a card" deck,
  // scrolling is left as a plain native scroll.
  const curtainScrollToProjects = useCallback(() => {
    if (leavingRef.current) return;
    leavingRef.current = true;
    if (reduceMotion) {
      scrollToProjects();
      leavingRef.current = false;
      return;
    }
    setLeavingViaCurtain(true);
    window.setTimeout(() => {
      document.getElementById("projects")?.scrollIntoView({ behavior: "auto", block: "start" });
      setLeavingViaCurtain(false);
      window.setTimeout(() => {
        leavingRef.current = false;
      }, SCROLL_DOWN_MS);
    }, SCROLL_DOWN_MS);
  }, [reduceMotion, scrollToProjects]);

  useEffect(() => {
    if (!revealed || (returning && !curtainRetracted)) return;

    const onWheel = (event: WheelEvent) => {
      if (window.scrollY > 0 || event.deltaY <= 0) return;
      event.preventDefault();
      if (event.deltaY > 8) curtainScrollToProjects();
    };
    let touchStartY = 0;
    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
    };
    const onTouchMove = (event: TouchEvent) => {
      const y = event.touches[0]?.clientY ?? 0;
      const dy = touchStartY - y;
      if (window.scrollY > 0 || dy <= 0) return;
      event.preventDefault();
      if (dy > 64) curtainScrollToProjects();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [revealed, returning, curtainRetracted, curtainScrollToProjects]);

  const handleSideHover = (side: "about" | "projects") => (on: boolean) => {
    clearTimeout(leaveTimer.current);
    if (on) {
      setSideHover(side);
      return;
    }
    leaveTimer.current = setTimeout(() => {
      if (hoveredSideRef.current === side) setSideHover(null);
    }, SIDE_LEAVE_GRACE_MS);
  };

  useEffect(
    () => () => {
      clearTimeout(leaveTimer.current);
      clearTimeout(lingerTimer.current);
    },
    [],
  );

  const handleSideCardClick = (href: string) => (event: React.MouseEvent) => {
    // Let modified clicks (new tab, etc.) behave normally.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    leaveWithCurtain(href);
  };

  const handleProjectsCardClick = (event: React.MouseEvent) => {
    // Let modified clicks (new tab, etc.) still go to the standalone /projects page.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    scrollToProjects();
  };

  // Hover on the drawn card. Before the reveal it follows the pointer a few
  // px and lifts; once the ID card has settled it tilts toward the pointer.
  const cardPointer = usePointer();
  const cardRim = useRimLight(cardPointer.sx);
  const hoverX = useSpring(0, HOVER_SPRING);
  const hoverY = useSpring(0, HOVER_SPRING);
  const hoverRotateX = useSpring(0, HOVER_SPRING);
  const hoverRotateY = useSpring(0, HOVER_SPRING);
  const hoverScale = useSpring(1, HOVER_SPRING);
  const tiltEnabled = !reduceMotion && revealed && settled;

  const resetCardHover = useCallback(() => {
    hoverX.set(0);
    hoverY.set(0);
    hoverRotateX.set(0);
    hoverRotateY.set(0);
    hoverScale.set(1);
  }, [hoverX, hoverY, hoverRotateX, hoverRotateY, hoverScale]);

  useEffect(() => {
    const syncCardHover = (px: number, py: number) => {
      if (!deckHover) return resetCardHover();
      if (!revealed) {
        hoverX.set(reduceMotion ? 0 : px * 6);
        hoverY.set(-DECK_HOVER_LIFT + (reduceMotion ? 0 : py * 4));
        hoverRotateX.set(0);
        hoverRotateY.set(0);
        hoverScale.set(reduceMotion ? 1 : 1.02);
      } else if (tiltEnabled) {
        hoverX.set(0);
        hoverY.set(-6);
        hoverRotateX.set(-py * TILT_MAX * 0.7);
        hoverRotateY.set(px * TILT_MAX * 0.7);
        hoverScale.set(1.015);
      } else {
        resetCardHover();
      }
    };
    syncCardHover(cardPointer.sx.get(), cardPointer.sy.get());
    const unsubX = cardPointer.sx.on("change", (px) => syncCardHover(px, cardPointer.sy.get()));
    const unsubY = cardPointer.sy.on("change", (py) => syncCardHover(cardPointer.sx.get(), py));
    return () => {
      unsubX();
      unsubY();
    };
  }, [deckHover, revealed, tiltEnabled, reduceMotion, cardPointer.sx, cardPointer.sy, hoverX, hoverY, hoverRotateX, hoverRotateY, hoverScale, resetCardHover]);

  const draw = () => {
    if (revealed) return;
    setDeckHover(false);
    cardPointer.reset();
    setDrawn(true);
    setRevealed(true);
  };

  const flip = revealed && !reduceMotion;
  const deckHoverOn = !revealed && deckHover;
  const fan = deckHoverOn && !reduceMotion ? DECK_FAN : 1;

  // Curtain: parked below (100%), rising to cover on the way to About,
  // painted covering (0%) on a returning mount, then lifting away (-100%).
  const curtainY = leavingViaCurtain
    ? "0%"
    : returning
      ? curtainRetracted
        ? "-100%"
        : "0%"
      : "100%";

  // Hero content lifts up as we leave; on a returning mount it starts lifted
  // and settles back down as the curtain clears.
  const contentLifted =
    !reduceMotion && (leavingViaCurtain || (returning && !curtainRetracted));

  return (
    <section className="relative flex min-h-screen w-full overflow-hidden bg-[#0f0c21]">
      {/* Two glows that drift from the deck corners (bottom-left / top-right)
          to the revealed corners (top-left / bottom-right). */}
      <Glow
        from={{ left: "-13.7%", top: "50.6%" }}
        to={{ left: "-7.44%", top: "-23.2%" }}
        moved={revealed}
      />
      <Glow
        from={{ left: "80.7%", top: "-28.8%" }}
        to={{ left: "82.7%", top: "49.4%" }}
        moved={revealed}
      />

      {/* The deck-state glow's box runs past the section's bottom edge and
          gets hard-clipped by overflow-hidden, showing as a seam against the
          inline Projects section's flat background right below it. Fading
          the last stretch of Hero back to its own base color — behind the
          content, so the headline stays crisp — closes it before the clip
          line, so the handoff into Projects reads as one continuous bg. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[180px] bg-gradient-to-b from-transparent to-[#0f0c21]"
      />

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

        <div className="flex items-center justify-center">
          <SideCard
            side="about"
            label="About me"
            href="/about"
            gradientFrom="from-[#5dadf4]"
            glowRgb="93,173,244"
            revealed={revealed}
            hovered={hoveredSide === "about"}
            lingering={lingeringSide === "about"}
            dimmed={hoveredSide === "projects"}
            reduceMotion={reduceMotion}
            onHoverChange={handleSideHover("about")}
            onClick={handleSideCardClick("/about")}
          />

          {/*
            While a side card is hovered the centre stack shrinks by the inverse
            1.4× (300×420 → 214.286×300), so the hovered card and the ID card
            trade sizes exactly as the Figma hover frame (node 94:11354) shows.
            It shrinks toward the OPPOSITE edge from the hovered card, so the
            edge that overlaps the untouched side card holds its Frame 13 gap
            of -40 (otherwise the centred shrink would open a ~3px gap there).
            That edge-anchored shrink is written as a centred scale plus a
            shift rather than by switching transform-origin, which can't
            animate — so moving straight from About to Projects slides the
            card across instead of jumping. It also dims with the other card.
          */}
          <div
            className="relative z-[2] shrink-0"
            style={{
              width: ID_W,
              height: ID_H,
              transform: hoveredSide
                ? `translateX(${((hoveredSide === "about" ? 1 : -1) * ID_W * (1 - 1 / SIDE_HOVER_SCALE)) / 2}px) scale(${1 / SIDE_HOVER_SCALE})`
                : "translateX(0px) scale(1)",
              filter: hoveredSide ? HOVER_DIM : NO_DIM,
              transition: `transform ${SIDE_HOVER_S}s ${SIDE_HOVER_CSS_EASE}, filter ${SIDE_HOVER_S}s ${SIDE_HOVER_CSS_EASE}`,
            }}
          >
            <motion.div
              initial={false}
              animate={{
                filter: revealed
                  ? "drop-shadow(0 0px 0px rgba(24,12,71,0))"
                  : "drop-shadow(0 24px 34px rgba(24,12,71,0.55))",
              }}
              transition={{ duration: DECK_EXIT, ease: EASE_OUT, delay: unwinding ? BACK_DECK_DELAY : 0 }}
              className="absolute inset-0"
            >
              {/* The rest of the deck: fans out on hover, then slides away
                  card by card (top card first) when one is drawn. */}
              <div
                className="pointer-events-none absolute left-1/2 top-1/2"
                style={{
                  width: ID_W * deckScale,
                  height: ID_H * deckScale,
                  transform:
                    "translate(-50%, -50%) matrix(0.832, 0.472, -0.831429, 0.474286, 0, 0)",
                }}
              >
                {STACK_OFFSETS.map((offset, i) => {
                  const order = STACK_OFFSETS.length - 1 - i;
                  const push = revealed && !reduceMotion ? 26 + order * 4 : 0;
                  const px = offset * fan + push;
                  const delay = revealed
                    ? 0.05 + order * DECK_STAGGER
                    : unwinding
                      ? BACK_DECK_DELAY + i * DECK_STAGGER * 0.6
                      : order * 0.025;
                  return (
                    <motion.div
                      key={offset}
                      initial={false}
                      animate={{
                        x: `${px / 2.5}%`,
                        y: `${px / 3.5}%`,
                        opacity: revealed ? 0 : 1,
                      }}
                      transition={{
                        duration: revealed ? DECK_EXIT : 0.5,
                        ease: revealed ? EASE_IN_OUT : EASE_POP,
                        delay,
                        opacity: { duration: revealed ? DECK_EXIT : 0.4, ease: EASE_OUT, delay },
                      }}
                      className="absolute inset-0 rounded-[20px] bg-[rgba(113,93,244,0.2)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]"
                    />
                  );
                })}
              </div>

              {/* Hover: parallax + lift on the deck, tilt on the settled ID card */}
              <motion.div
                initial={false}
                animate={{
                  filter:
                    deckHover && tiltEnabled
                      ? "drop-shadow(0 30px 36px rgba(9,6,26,0.5))"
                      : "drop-shadow(0 0px 0px rgba(9,6,26,0))",
                }}
                transition={{ duration: 0.5, ease: EASE_OUT }}
                style={{
                  x: hoverX,
                  y: hoverY,
                  rotateX: hoverRotateX,
                  rotateY: hoverRotateY,
                  scale: hoverScale,
                  transformPerspective: 1200,
                }}
                className="absolute inset-0"
              >
                {/* Draw: a small press, a rise, then it settles back down */}
                <motion.div
                  initial={false}
                  animate={
                    drawn && !reduceMotion
                      ? {
                          y: [0, 3, -LIFT_PX, 0],
                          scale: [1, 0.965, 1.06, 1],
                          filter: [
                            "drop-shadow(0 0px 0px rgba(9,6,26,0))",
                            "drop-shadow(0 4px 6px rgba(9,6,26,0.3))",
                            "drop-shadow(0 46px 48px rgba(9,6,26,0.55))",
                            "drop-shadow(0 0px 0px rgba(9,6,26,0))",
                          ],
                        }
                      : { y: 0, scale: 1 }
                  }
                  transition={{
                    duration: LIFT_DURATION,
                    times: [0, 0.1, 0.45, 1],
                    ease: [0.33, 0, 0.2, 1],
                  }}
                  className="absolute inset-0"
                >
                  {/* Untilt: springs from the isometric deck pose to flat */}
                  <motion.button
                    type="button"
                    aria-label={revealed ? "Paola Cejoco's profile card" : "Reveal Paola Cejoco's profile card"}
                    onClick={draw}
                    onMouseEnter={() => setDeckHover(true)}
                    onMouseMove={(event) => {
                      cardPointer.onMove(event);
                      if (!deckHover) setDeckHover(true);
                    }}
                    onMouseLeave={() => {
                      setDeckHover(false);
                      cardPointer.reset();
                    }}
                    onFocus={() => setDeckHover(true)}
                    onBlur={() => setDeckHover(false)}
                    initial={false}
                    animate={revealed ? FLAT_TILT : { ...DECK_TILT, scale: deckScale }}
                    // In the deck pose the uniform scale only tracks the
                    // viewport, so it snaps instead of springing on resize.
                    transition={
                      revealed
                        ? CARD_SPRING
                        : unwinding
                          ? { ...CARD_SPRING, delay: BACK_FLIP_DELAY }
                          : { ...CARD_SPRING, scale: { duration: 0 } }
                    }
                    className={`absolute inset-0 block border-0 bg-transparent p-0 outline-none ${revealed ? "cursor-default" : "cursor-pointer"}`}
                  >
                    {/* Flip: the card back (logo) turns over to the ID face */}
                    <motion.div
                      initial={false}
                      animate={{ rotateY: flip ? -180 : 0 }}
                      transition={
                        revealed
                          ? { duration: FLIP_DURATION, ease: EASE_FLIP, delay: FLIP_DELAY }
                          : { duration: FLIP_DURATION * 0.75, ease: EASE_FLIP, delay: BACK_FLIP_DELAY }
                      }
                      style={{ transformPerspective: 1400, transformStyle: "preserve-3d" }}
                      className="absolute inset-0"
                    >
                      {/* ID card face */}
                      <div
                        style={{
                          transform: reduceMotion ? "none" : "rotateY(180deg)",
                          backfaceVisibility: "hidden",
                          WebkitBackfaceVisibility: "hidden",
                        }}
                        className="absolute inset-0 isolate flex flex-col overflow-hidden rounded-[20px] border-8 border-[rgba(255,254,254,0.13)] bg-white bg-clip-padding"
                      >
                        <div className="relative z-[2] flex h-[193px] w-full shrink-0 flex-col items-start rounded-t-xl bg-white">
                          <motion.div
                            initial={false}
                            animate={{ opacity: revealed ? 1 : 0 }}
                            transition={
                              revealed
                                ? { duration: ID_FADE, ease: EASE_OUT, delay: ID_PHOTO_DELAY - 0.1 }
                                : { duration: 0.15, ease: "easeIn" }
                            }
                            className="mb-[-64px] h-[150px] w-full shrink-0 rounded-t-xl bg-gradient-to-r from-[#5545b5] via-[#3c3180] to-[#0f0c21]"
                          />
                          <div className="flex w-full shrink-0 flex-col items-center">
                            <motion.div
                              initial={false}
                              animate={{ opacity: revealed ? 1 : 0, scale: revealed || reduceMotion ? 1 : 0.82 }}
                              transition={
                                revealed
                                  ? {
                                      opacity: { duration: ID_FADE, ease: EASE_OUT, delay: ID_PHOTO_DELAY },
                                      scale: { duration: ID_FADE + 0.1, ease: EASE_POP, delay: ID_PHOTO_DELAY },
                                    }
                                  : { duration: 0.15, ease: "easeIn" }
                              }
                              className="relative size-[120px] overflow-hidden rounded-full"
                            >
                              <Image
                                src="/images/hero/paola.png"
                                alt="Paola Cejoco"
                                fill
                                sizes="120px"
                                className="object-cover"
                              />
                              <div className="pointer-events-none absolute inset-0 rounded-full mix-blend-soft-light [box-shadow:inset_0_0_0_2px_white]" />
                            </motion.div>
                          </div>
                        </div>
                        <div className="relative z-[1] flex w-full flex-1 flex-col items-center justify-center overflow-hidden rounded-b-xl bg-white px-5 py-5 text-center">
                          {[
                            {
                              text: <>Hi, I&rsquo;m Paola Cejoco</>,
                              className:
                                "font-display text-[20px] font-bold leading-[24px] tracking-[-0.3px] text-[#1e293b]",
                              delay: ID_TEXT_DELAY,
                            },
                            {
                              text: "Product Designer based in Montreal, fueled by lattes",
                              className:
                                "font-display text-[14px] font-medium leading-[18px] tracking-[-0.14px] text-[#64748b]",
                              delay: ID_TEXT_DELAY + 0.08,
                            },
                          ].map((line, i) => (
                            <motion.p
                              key={i}
                              initial={false}
                              animate={{ opacity: revealed ? 1 : 0, y: revealed || reduceMotion ? 0 : 10 }}
                              transition={
                                revealed
                                  ? { duration: ID_FADE, ease: EASE_OUT, delay: line.delay }
                                  : { duration: 0.15, ease: "easeIn" }
                              }
                              className={`m-0 w-full shrink-0 ${line.className}`}
                            >
                              {line.text}
                            </motion.p>
                          ))}
                        </div>
                      </div>

                      {/* Card back (the deck's top card) */}
                      <motion.div
                        initial={false}
                        animate={{
                          // With reduced motion there's no flip: crossfade instead.
                          opacity: reduceMotion && revealed ? 0 : 1,
                          boxShadow: deckHoverOn
                            ? "inset 0 0 0 1px rgba(255,255,255,0.14), 0 30px 42px rgba(9,6,26,0.5)"
                            : "inset 0 0 0 1px rgba(255,255,255,0.1), 0 0px 0px rgba(9,6,26,0)",
                        }}
                        transition={{ duration: 0.35, ease: EASE_POP, opacity: { duration: 0.35, ease: "easeOut" } }}
                        style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                        className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-[24px] bg-[#715df4]"
                      >
                        <motion.span
                          aria-hidden
                          initial={false}
                          animate={{ opacity: deckHoverOn && !reduceMotion ? 1 : 0 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          style={{ background: cardRim.background, boxShadow: cardRim.boxShadow }}
                          className="pointer-events-none absolute inset-0 rounded-[24px]"
                        />
                        <motion.div
                          initial={false}
                          animate={{ scale: deckHoverOn && !reduceMotion ? 1.08 : 1 }}
                          transition={{ duration: 0.5, ease: EASE_POP }}
                          className="relative w-[15.8%]"
                        >
                          <Image
                            src="/images/hero/pc-logo-white.svg"
                            alt=""
                            width={48}
                            height={59}
                            className="h-auto w-full"
                          />
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          <SideCard
            side="projects"
            label="Projects"
            href="/projects"
            gradientFrom="from-[#bf5df4]"
            glowRgb="191,93,244"
            revealed={revealed}
            hovered={hoveredSide === "projects"}
            lingering={lingeringSide === "projects"}
            dimmed={hoveredSide === "about"}
            reduceMotion={reduceMotion}
            onHoverChange={handleSideHover("projects")}
            onClick={handleProjectsCardClick}
          />
        </div>

        <div className="relative flex items-center justify-center">
          {/* "Draw a card" sinks and blurs out as the card is drawn */}
          <motion.p
            aria-hidden={revealed}
            initial={false}
            animate={
              revealed
                ? { opacity: 0, y: reduceMotion ? 0 : 18, filter: reduceMotion ? "blur(0px)" : "blur(8px)" }
                : { opacity: 1, y: 0, filter: "blur(0px)" }
            }
            transition={
              revealed
                ? { duration: 0.35, ease: EASE_OUT }
                : { duration: 0.5, ease: EASE_OUT, delay: unwinding ? BACK_HEADLINE_DELAY : 0 }
            }
            className="pointer-events-none m-0 whitespace-nowrap p-2 text-center font-display text-[clamp(28px,4.5vw,52.857px)] font-extrabold tracking-[-0.53px] text-white"
          >
            Draw a card
          </motion.p>
        </div>
      </motion.div>

      {/*
        Dark curtain shared by all three cases: it rises from the bottom edge
        when the About card is clicked or when scrolling down into the inline
        Projects section (once the card is drawn), sinking back down once the
        jump is done in the latter case; on the way back from the standalone
        /projects page it starts covering the viewport and lifts off the top
        edge (scroll up). It's the same #0f0c21 as the About and Projects
        pages, so the seam is invisible.
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
