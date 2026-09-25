import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import ScaledFrame from "./ScaledFrame";

const ASSETS = "/images/vf-immigration/mobile";
const PHONE_W = 342.946;
const PHONE_H = 709.544;

const bodyText =
  "max-w-[700px] font-body text-base leading-relaxed text-[#1e1e1e] lg:text-[16px] lg:leading-[20px]";

/* ---------- Device mockup primitives ---------- */

type Crop = { left: string; top: string; width: string; height: string };

// Clay device render, cropped out of a larger 3840×2160 scene.
function Clay({
  src,
  inset,
  crop,
}: {
  src: string;
  inset: string;
  crop: Crop;
}) {
  return (
    <div className="absolute overflow-hidden" style={{ inset }}>
      <div className="absolute" style={crop}>
        <Image
          src={`${ASSETS}/${src}`}
          alt=""
          fill
          sizes="1970px"
          className="max-w-none"
        />
      </div>
    </div>
  );
}

// Absolutely positioned vector layer filling the given box.
function Svg({ src, style }: { src: string; style: CSSProperties }) {
  return (
    <div className="absolute" style={style}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt=""
        src={`${ASSETS}/${src}`}
        className="block size-full max-w-none"
      />
    </div>
  );
}

function masked(src: string, size: string, position: string): CSSProperties {
  const url = `url("${ASSETS}/${src}")`;
  return {
    maskImage: url,
    WebkitMaskImage: url,
    maskSize: size,
    WebkitMaskSize: size,
    maskPosition: position,
    WebkitMaskPosition: position,
    maskRepeat: "no-repeat",
    WebkitMaskRepeat: "no-repeat",
    maskMode: "alpha",
  };
}

function Phone({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div
      role="img"
      aria-label={label}
      className="relative"
      style={{ width: PHONE_W, height: PHONE_H }}
    >
      {children}
    </div>
  );
}

/* ---------- The three phones ---------- */

// Tilted phone with a flat screenshot screen (left and right mockups).
function TiltedPhone({
  label,
  clay,
  border,
  screenInset,
  mask,
  screen,
}: {
  label: string;
  clay: { src: string; inset: string; crop: Crop };
  border: { src: string; inset: string };
  screenInset: string;
  mask: string;
  screen: string;
}) {
  return (
    <Phone label={label}>
      <Clay {...clay} />
      <Svg src={border.src} style={{ inset: border.inset }} />
      <div className="absolute" style={{ inset: screenInset }}>
        <div
          className="absolute"
          style={{
            inset: "-0.3% 0 -0.31% 0",
            ...masked(mask, "293.179px 670.447px", "0px 2.05px"),
          }}
        >
          <Image
            src={`${ASSETS}/${screen}`}
            alt=""
            fill
            sizes="(min-width: 768px) 293px, 90vw"
          />
        </div>
      </div>
    </Phone>
  );
}

function HomePhone() {
  return (
    <Phone label="Redesigned VF Immigration homepage on mobile">
      <Clay
        src="clay-2.png"
        inset="1.53% 0.43% 1.53% 0.57%"
        crop={{
          left: "-228.59%",
          top: "-27.36%",
          width: "557.33%",
          height: "154.73%",
        }}
      />
      <Svg src="border-2.svg" style={{ inset: "2.08% 2.16% 2.08% 2.44%" }} />
      <div className="absolute" style={{ inset: "3.54% 5.32% 3.54% 5.6%" }}>
        <div
          className="absolute overflow-hidden"
          style={{
            inset: "-0.02% -0.09% -4.35% 0.26%",
            ...masked("mask-2.svg", "305.498px 659.285px", "-0.783px 0.13px"),
          }}
        >
          <div className="absolute left-0 top-[34px] h-[654.082px] w-[305px]">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-y-0 left-[-0.33%] w-[100.33%]">
                <Image
                  src={`${ASSETS}/screen-home.png`}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 306px, 90vw"
                />
              </div>
            </div>
            <Svg
              src="home-indicator.svg"
              style={{ left: 92, top: 617, width: 112, height: 4 }}
            />
          </div>
          <div className="absolute left-0 top-0 flex w-[305px] items-center justify-center gap-[35px] bg-white px-2">
            <div className="flex flex-1 items-center py-[10px] pl-3">
              <p
                className="whitespace-nowrap text-[16px] font-semibold leading-[14px] tracking-[-0.0167px] text-black"
                style={{
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                }}
              >
                4:45
              </p>
            </div>
            <div className="relative flex h-[20.079px] shrink-0 items-center justify-end gap-1 pr-1">
              {[
                ["signal.svg", 16.0625, 9.44933],
                ["wifi.svg", 13.1603, 9.44971],
                ["battery.svg", 21.7734, 9.44922],
              ].map(([src, w, h]) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src as string}
                  alt=""
                  src={`${ASSETS}/${src}`}
                  className="block max-w-none shrink-0"
                  style={{ width: w as number, height: h as number }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Phone>
  );
}

const phones: { key: string; node: ReactNode }[] = [
  {
    key: "facebook",
    node: (
      <TiltedPhone
        label="Redesigned VF Immigration Facebook Live page on mobile"
        clay={{
          src: "clay-1.png",
          inset: "0.76% 2.01%",
          crop: {
            left: "-236.53%",
            top: "-26.16%",
            width: "574.85%",
            height: "152.33%",
          },
        }}
        border={{ src: "border-1.svg", inset: "1.31% 3.02% 1.31% 5.17%" }}
        screenInset="2.75% 5.89% 2.76% 8.62%"
        mask="mask-1.svg"
        screen="screen-facebook.png"
      />
    ),
  },
  { key: "home", node: <HomePhone /> },
  {
    key: "consultation",
    node: (
      <TiltedPhone
        label="Redesigned VF Immigration consultation page on mobile"
        clay={{
          src: "clay-3.png",
          inset: "0.76% 2.01%",
          crop: {
            left: "-238.32%",
            top: "-26.16%",
            width: "574.85%",
            height: "152.33%",
          },
        }}
        border={{ src: "border-3.svg", inset: "1.31% 5.17% 1.31% 3.02%" }}
        screenInset="2.75% 8.62% 2.76% 5.89%"
        mask="mask-3.svg"
        screen="screen-consultation.png"
      />
    ),
  },
];

/* ---------- Section ---------- */

export default function MobileVersionSection() {
  return (
    <div className="flex flex-col gap-8">
      <AnimatedSection className="mx-auto w-full max-w-5xl">
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          <h3 className="font-body text-base font-semibold text-black md:w-[342px] md:shrink-0 lg:text-[16px] lg:leading-[20px]">
            60% of user sessions occur on mobile
          </h3>
          <p className={`${bodyText} md:flex-1`}>
            After a preliminary analysis of the data, we realized that 60% of
            user sessions were taking place on mobile. It was therefore
            essential to make the site mobile-friendly in order to convert more
            users into potential customers.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection
        delay={0.05}
        className="mx-auto flex w-full max-w-[1073px] flex-col items-center gap-8 md:flex-row md:items-start md:justify-center md:gap-[22px]"
      >
        {phones.map((p) => (
          <div
            key={p.key}
            className="w-full max-w-[343px] md:min-w-0 md:flex-1"
          >
            <ScaledFrame width={PHONE_W}>{p.node}</ScaledFrame>
          </div>
        ))}
      </AnimatedSection>
    </div>
  );
}
