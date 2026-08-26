"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const PROJECTS = [
  {
    slug: "elia",
    name: "elia",
    tagline: "Reimagining enterprise visitor management, from paper to digital",
    image: "/images/projects-hub/elia-mockup.png",
    imageInset: "-4.44%",
  },
  {
    slug: "truxweb",
    name: "Truxweb",
    tagline: "Cutting the middleman out of B2B freight booking",
    image: "/images/projects-hub/truxweb-mockup.png",
    imageInset: "-10.75%",
  },
  {
    slug: "vf-immigration",
    name: "VF Immigration",
    tagline:
      "Redesigning a trusted brand for clarity, conversion, and less inbox overload",
    image: "/images/projects-hub/vf-immigration-mockup.png",
    imageInset: "-7.87% 0% -10.33% 0%",
  },
  {
    slug: "kc-rentals",
    name: "KC Rentals",
    tagline:
      "Rebranding a local agency for trust, without losing what clients already knew",
    image: "/images/projects-hub/kc-rentals-mockup.png",
    imageInset: "-11.34% 0.68% -11.5% 0.68%",
  },
];

/*
  Same blurred-blob glow family as Hero's Glow (identical 818.81/739.81
  aspect ratio, identical 31.79deg rotation, identical 84%-of-wrapper
  image scale — the Figma shapes here are literally the same asset,
  just recolored per instance) — reused here rather than reinvented so
  the two pages read as one visual system.
*/
function ShapeGlow({
  src,
  left,
  top,
  width,
  imgWidth,
  imgHeight,
}: {
  src: string;
  left: string;
  top: string;
  width: string;
  imgWidth: number;
  imgHeight: number;
}) {
  return (
    <div
      style={{ left, top, width }}
      className="pointer-events-none absolute flex aspect-[818.81/739.81] items-center justify-center"
    >
      <Image
        src={src}
        alt=""
        width={imgWidth}
        height={imgHeight}
        className="w-[84%] rotate-[31.79deg]"
      />
    </div>
  );
}

export default function ProjectsIndex() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0f0c21] pb-24 pt-32 md:pt-40">
      <div className="relative mx-auto max-w-[1280px]">
        <ShapeGlow
          src="/images/projects-hub/shape-2.svg"
          left="42.81%"
          top="-65px"
          width="63.97%"
          imgWidth={1342}
          imgHeight={1098}
        />
        <ShapeGlow
          src="/images/projects-hub/shape-3.svg"
          left="24.45%"
          top="325px"
          width="63.97%"
          imgWidth={1342}
          imgHeight={1098}
        />
        <ShapeGlow
          src="/images/projects-hub/shape-1.svg"
          left="-33.44%"
          top="-345px"
          width="96.85%"
          imgWidth={2032}
          imgHeight={1662}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="relative mx-auto grid w-full max-w-[656px] grid-cols-1 gap-5 px-6 sm:grid-cols-2 md:px-12"
        >
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: EASE_OUT }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="isolate flex flex-col overflow-hidden rounded-[20px] transition-transform duration-300 ease-out hover:-translate-y-1"
              >
                <div
                  className="glass glass--clear glass--caption-top relative z-[2] flex w-full shrink-0 items-center justify-center overflow-hidden p-5"
                  style={{ "--glass-radius": "12px" } as React.CSSProperties}
                >
                  <div className="relative aspect-[268/201] w-full max-w-[268px] shrink-0 overflow-hidden">
                    <div className="absolute" style={{ inset: project.imageInset }}>
                      <Image
                        src={project.image}
                        alt={`${project.name} mockup`}
                        fill
                        sizes="268px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div
                  className="glass glass--regular glass--caption relative z-[1] flex w-full flex-col items-start justify-center px-5 py-4"
                  style={
                    {
                      "--glass-radius": "12px",
                      "--glass-tint": "rgba(255, 255, 255, 0.1)",
                      "--glass-border-soft": "rgba(255, 255, 255, 0.1)",
                    } as React.CSSProperties
                  }
                >
                  <p className="w-full whitespace-nowrap font-display text-[20px] font-bold leading-6 tracking-[-0.3px] text-white">
                    {project.name}
                  </p>
                  <p className="w-full font-display text-[14px] font-medium leading-[18px] tracking-[-0.14px] text-white">
                    {project.tagline}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
