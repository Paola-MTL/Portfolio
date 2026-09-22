"use client";

import { useEffect, useRef, useState } from "react";

const TEAL = "#74AEB2";

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

const maxScroll = (track: HTMLElement) => track.scrollWidth - track.clientWidth;
const isAtEnd = (track: HTMLElement) => track.scrollLeft >= maxScroll(track) - 2;

export default function ProcessCarousel({ steps }: { steps: ProcessStep[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const endSpacerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  // One dot per distinct scroll position, not per card: on wide viewports the
  // last few cards are already visible when the track is fully scrolled.
  const [pageCount, setPageCount] = useState(steps.length);

  const cardStep = () => {
    const card = trackRef.current?.querySelector<HTMLElement>("[data-card]");
    return card ? card.offsetWidth + 24 : 342 + 24; // gap-6 = 24px
  };

  const scrollToPage = (page: number) => {
    const track = trackRef.current;
    if (!track) return;
    const left = page === pageCount - 1 ? maxScroll(track) : page * cardStep();
    track.scrollTo({ left, behavior: "smooth" });
  };

  const scrollByCard = (direction: 1 | -1) => {
    trackRef.current?.scrollBy({ left: direction * cardStep(), behavior: "smooth" });
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => {
      // The track is w-screen but starts at the content column's left edge, so it
      // overhangs the viewport on the right by that same offset. Pad its end by the
      // overhang plus a matching right margin so the last card lands in view.
      if (endSpacerRef.current) {
        const left = track.getBoundingClientRect().left;
        const inset = Math.max(2 * left - 24, 0); // minus gap-6
        endSpacerRef.current.style.width = `${inset}px`;
      }
      const pages = Math.min(Math.round(maxScroll(track) / cardStep()) + 1, steps.length);
      setPageCount(pages);
      const page = isAtEnd(track) ? pages - 1 : Math.round(track.scrollLeft / cardStep());
      setActive(Math.min(Math.max(page, 0), pages - 1));
    };
    update();
    const observer = new ResizeObserver(update);
    observer.observe(track);
    track.addEventListener("scroll", update, { passive: true });
    return () => {
      observer.disconnect();
      track.removeEventListener("scroll", update);
    };
  }, [steps.length]);

  return (
    <div>
      <div
        ref={trackRef}
        className="flex w-screen snap-x snap-mandatory gap-6 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {steps.map((step) => (
          <div
            key={step.index}
            data-card
            className="flex w-[280px] shrink-0 snap-start flex-col gap-16 bg-white p-8 sm:w-[342px]"
          >
            <p
              className="font-body text-3xl font-semibold tracking-tight lg:text-[32px] lg:leading-[36px] lg:tracking-[-0.32px]"
              style={{ color: TEAL }}
            >
              {step.index}
            </p>
            <div className="flex flex-col gap-1">
              <p
                className="font-body text-xl font-medium uppercase tracking-tight lg:text-[24px] lg:tracking-[-0.24px]"
                style={{ color: TEAL }}
              >
                {step.title}
              </p>
              <p
                className="font-body text-sm leading-relaxed lg:text-[16px] lg:leading-[20px]"
                style={{ color: TEAL }}
              >
                {step.description}
              </p>
            </div>
          </div>
        ))}
        <div ref={endSpacerRef} aria-hidden className="shrink-0" />
      </div>

      <div className="relative mt-10 flex items-center justify-end">
        <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">
          {Array.from({ length: pageCount > 1 ? pageCount : 0 }, (_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Scroll to page ${i + 1} of ${pageCount}`}
              onClick={() => scrollToPage(i)}
              className="size-2.5 shrink-0 rounded-full bg-white transition-opacity"
              style={{ opacity: i === active ? 1 : 0.5 }}
            />
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous step"
            onClick={() => scrollByCard(-1)}
            className="flex size-10 items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/30"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="#fff"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Next step"
            onClick={() => scrollByCard(1)}
            className="flex size-10 items-center justify-center rounded-full bg-white/20 transition-colors hover:bg-white/30"
          >
            <svg
              viewBox="0 0 24 24"
              className="size-5"
              fill="none"
              stroke="#fff"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
