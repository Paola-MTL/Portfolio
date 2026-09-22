"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion, useAnimationControls } from "framer-motion";

const PIN_LENGTH = 4;
const EMPTY_PIN = Array<string>(PIN_LENGTH).fill("");

/*
  Dark take on the Framer PIN screen: one box per digit, digits stay visible
  as they're typed, and the PIN submits itself as soon as the last box is
  filled — the Unlock button is only there as a fallback (e.g. retrying after
  a network error).
*/
export default function UnlockForm() {
  const searchParams = useSearchParams();
  const [digits, setDigits] = useState<string[]>(EMPTY_PIN);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const shake = useAnimationControls();

  const filled = digits.filter(Boolean).length;
  const complete = filled === PIN_LENGTH;

  useEffect(() => {
    inputs.current[0]?.focus();
  }, []);

  function focusBox(index: number) {
    const box = inputs.current[Math.max(0, Math.min(PIN_LENGTH - 1, index))];
    box?.focus();
    box?.select();
  }

  async function submit(pin: string) {
    if (loading) return;
    setLoading(true);
    setError(null);

    let res: Response;
    try {
      res = await fetch("/api/elia-auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: pin }),
      });
    } catch {
      setError("Something went wrong — try again.");
      setLoading(false);
      return;
    }

    if (res.ok) {
      const from = searchParams.get("from");
      const destination =
        from && from.startsWith("/") && !from.startsWith("//")
          ? from
          : "/projects/elia";
      // Full page load so the new cookie is sent and the middleware re-runs.
      // router.push would reuse the cached redirect back to this page.
      window.location.assign(destination);
      return;
    }

    setError("That PIN isn't right — try again.");
    setLoading(false);
    await shake.start({
      x: [0, -10, 10, -6, 6, 0],
      transition: { duration: 0.4, ease: "easeInOut" },
    });
    setDigits(EMPTY_PIN);
    focusBox(0);
  }

  // Writes typed/pasted digits starting at `index`, then auto-submits once
  // every box is filled.
  function fill(index: number, value: string) {
    const incoming = value.replace(/\D/g, "").split("");
    if (incoming.length === 0) return;
    const next = [...digits];
    let cursor = index;
    for (const digit of incoming) {
      if (cursor >= PIN_LENGTH) break;
      next[cursor] = digit;
      cursor += 1;
    }
    setDigits(next);
    setError(null);
    if (next.every(Boolean)) {
      inputs.current[PIN_LENGTH - 1]?.blur();
      submit(next.join(""));
    } else {
      focusBox(cursor);
    }
  }

  function handleKeyDown(index: number, event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Backspace") {
      event.preventDefault();
      const next = [...digits];
      if (next[index]) {
        next[index] = "";
      } else if (index > 0) {
        next[index - 1] = "";
        focusBox(index - 1);
      }
      setDigits(next);
      setError(null);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusBox(index - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      focusBox(index + 1);
    }
  }

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0f0c21] px-5 py-24 font-display text-white">
      {/* Soft glows, same violet family as the Hero */}
      <div className="pointer-events-none absolute left-1/2 top-[-30%] h-[60vh] w-[70vw] -translate-x-1/2 rounded-full bg-[#715df4]/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-25%] right-[-10%] h-[50vh] w-[45vw] rounded-full bg-[#5dadf4]/10 blur-[120px]" />

      <a
        href="/projects"
        className="group absolute left-5 top-6 flex items-center gap-2 text-[15px] text-white/60 transition-colors duration-200 hover:text-white md:left-10"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-4 transition-transform duration-200 group-hover:-translate-x-0.5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        Back
      </a>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-[460px] rounded-[20px] border border-white/10 bg-white/[0.04] px-7 py-10 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-md sm:px-11 sm:py-12"
      >
        <div className="flex size-11 items-center justify-center rounded-[10px] bg-[#715df4]">
          <Image
            src="/images/hero/pc-logo-white.svg"
            alt=""
            width={48}
            height={59}
            className="h-5 w-auto"
          />
        </div>

        <h1 className="mt-7 text-[28px] font-semibold tracking-[-0.4px]">Enter your PIN</h1>
        <p className="mt-2 max-w-[300px] text-[16px] leading-[1.55] text-white/55">
          This case study is protected. Enter the PIN to view it.
        </p>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            if (complete) submit(digits.join(""));
          }}
        >
          <motion.div animate={shake} className="mt-8 grid grid-cols-4 gap-2.5 sm:gap-3">
            {digits.map((digit, index) => (
              <input
                key={index}
                ref={(el) => {
                  inputs.current[index] = el;
                }}
                value={digit}
                onChange={(event) => fill(index, event.target.value.slice(-PIN_LENGTH))}
                onKeyDown={(event) => handleKeyDown(index, event)}
                onPaste={(event) => {
                  event.preventDefault();
                  fill(index, event.clipboardData.getData("text"));
                }}
                onFocus={(event) => event.target.select()}
                disabled={loading}
                inputMode="numeric"
                autoComplete={index === 0 ? "one-time-code" : "off"}
                aria-label={`PIN digit ${index + 1}`}
                aria-invalid={error ? true : undefined}
                className={`aspect-[7/8] w-full rounded-xl border bg-white/[0.05] text-center text-[26px] font-medium text-white caret-[#8f7dff] outline-none transition-[border-color,box-shadow,background-color] duration-200 focus:border-[#8f7dff] focus:bg-white/[0.08] focus:shadow-[0_0_0_3px_rgba(113,93,244,0.3)] disabled:opacity-60 ${
                  error
                    ? "border-[#f87171]/70"
                    : digit
                      ? "border-white/25"
                      : "border-white/10"
                }`}
              />
            ))}
          </motion.div>

          <div className="mt-3 flex min-h-5 items-start justify-between gap-4 text-[13px]">
            <p role="alert" className="text-[#fca5a5]">
              {error}
            </p>
            <p className="shrink-0 text-white/40">
              {filled} of {PIN_LENGTH}
            </p>
          </div>

          <button
            type="submit"
            disabled={!complete || loading}
            className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#715df4] text-[16px] font-medium text-white transition-[background-color,opacity] duration-200 hover:bg-[#8272f6] disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/40"
          >
            {loading ? "Checking…" : "Unlock"}
            {!loading && (
              <svg
                viewBox="0 0 24 24"
                className="size-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            )}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
