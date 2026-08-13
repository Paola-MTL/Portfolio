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
      className={`-translate-x-1/2 absolute flex items-center justify-center left-1/2 size-[48px] top-[598px] transition-opacity duration-300 ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div className="flex-none rotate-90">
        <div className="bg-white content-stretch flex flex-col items-center justify-center p-[10px] relative rounded-[32px] size-[48px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="block max-w-none size-full"
            src={arrowSrc}
          />
        </div>
      </div>
    </div>
  );
}
