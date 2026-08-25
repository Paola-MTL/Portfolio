"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;
// Spring for the shared hero-card layoutId morph. damping:20/stiffness:300
// gives a damping ratio of ~0.58 — low enough to actually overshoot and
// settle back, so the card visibly "arrives" instead of just easing to a
// stop. (Note: a mass:2/damping:32 spring, closer to critically damped,
// is nearly indistinguishable from a plain ease-out curve at this
// distance — the ratio is what makes a spring read as a spring.)
const CARD_SPRING = { type: "spring", damping: 20, stiffness: 300, mass: 1 } as const;

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

export default function Hero() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="relative flex min-h-screen w-full overflow-hidden bg-[#0f0c21]">
      {/* Deck-state glows (bottom-left / top-right) */}
      <Glow left="-13.7%" top="50.6%" visible={!revealed} />
      <Glow left="80.7%" top="-28.8%" visible={!revealed} />
      {/* Revealed-state glows (top-left / bottom-right) */}
      <Glow left="-7.44%" top="-23.2%" visible={revealed} />
      <Glow left="82.7%" top="49.4%" visible={revealed} />

      <div className="relative flex h-screen min-w-0 flex-1 flex-col items-center justify-between px-5 py-[9.6vh]">
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
                  <div className="flex w-full shrink-0 flex-col items-center py-5">
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
                  <p className="w-full shrink-0 text-[20px] font-bold leading-[24px] tracking-[-0.3px] text-[#1e293b]">
                    Hi, I&rsquo;m Paola Cejoco
                  </p>
                  <p className="w-full shrink-0 text-[14px] font-medium leading-[18px] tracking-[-0.14px] text-[#64748b]">
                    Product Designer based in Montreal, fueled by lattes
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="relative flex items-center justify-center">
          <AnimatePresence mode="wait" initial={false}>
            {!revealed ? (
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
            ) : (
              <motion.div
                key="buttons"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.4, ease: EASE_OUT, delay: 0.35 }}
                className="flex items-center justify-center gap-2"
              >
                {/*
                  The Figma "HomePage-Buttons" component (node 1:83) has a
                  labeling bug: Secondary's Hover/Pressed variants (nodes
                  1:86, 1:88) are mistagged Hierarchy=Primary internally
                  (a copy-paste slip), which is what made the code
                  generator treat them as identical to Default the first
                  time. Checked those two nodes directly instead of
                  trusting the buggy variant lookup — the real states both
                  just grow ~8.3%, same scale factor and no fill, matching
                  Primary's growth but staying border-only/transparent.
                  Font is font-display (Inter) per the spec, not the
                  page's default body font (Montserrat) — missing on both
                  buttons before.
                */}
                <Link
                  href="/about"
                  className="flex items-center justify-center rounded-lg border border-white px-5 py-3 font-display text-xl font-semibold text-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] transition-transform duration-150 ease-out hover:scale-[1.0833] active:scale-[1.0833]"
                >
                  About me
                </Link>
                <Link
                  href="/#projects"
                  className="flex items-center justify-center rounded-lg bg-[#715df4] px-5 py-3 font-display text-xl font-semibold text-white shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] transition-transform duration-150 ease-out hover:scale-[1.0833] active:scale-[1.0833] active:bg-[#422bd9]"
                >
                  See projects
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
