"use client";

import { useEffect, useState } from "react";

export default function ScrollDownHint({ arrowSrc }: { arrowSrc: string }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY < 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`absolute bottom-10 left-1/2 flex size-12 -translate-x-1/2 items-center justify-center transition-opacity duration-300 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex-none rotate-90">
        <div className="flex size-12 items-center justify-center rounded-full bg-white p-[10px]">
          <div className="relative h-[17px] w-[26px] shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              className="absolute inset-0 block size-full max-w-none"
              src={arrowSrc}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
