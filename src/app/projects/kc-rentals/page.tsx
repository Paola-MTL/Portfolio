import type { Metadata } from "next";
import { Cabin, Noto_Serif } from "next/font/google";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import BackButton from "@/components/BackButton";
import MockupsSection from "./MockupsSection";
import ScrollDownHint from "./ScrollDownHint";

const GREEN = "#0C2925";
const TEAL = "#74AEB2";

const notoSerif = Noto_Serif({ subsets: ["latin"], weight: "700" });
const cabin = Cabin({ subsets: ["latin"], weight: "400" });

const PALETTE = [
  { shade: "900", hex: "#0c2925" },
  { shade: "800", hex: "#5a8b82" },
  { shade: "500", hex: "#f98545" },
  { shade: "400", hex: "#f59b69" },
];

const LEARNINGS = [
  {
    title: "Working with certain constraints",
    body: "One of the challenges as a UI designer was working with the Wix platform which limited me in terms of design customization. Unfortunately, some effects were not available (for example: adding a shadow effect to the navigation bar to improve contrast on certain pages). This platform was already used by VF Immigration and for reasons of time and simplicity, it was preferable to stick with this platform.",
  },
  {
    title: "Working independently",
    body: "I had full creative freedom over the artistic direction of the site, which also pushed me to set deadlines and reassess my working methods to avoid getting too scattered.",
  },
];

const NEXT_STEPS = [
  {
    title: "A mobile version",
    body: "One of the next steps for KC Rentals would be to create a mobile-friendly version to reach more customers and also improve its ranking in search results.",
  },
  {
    title: "A more professional profile picture is coming!",
    body: "While working on the \"About me\" section of the site, I was missing a quality photo to present Katia. So I made do with what I had and took a photo that seemed as professional as possible, although I quickly realized the level of quality was lacking. Katia has arranged for a professional photo session with a photographer later this year, so I will be able to update it very soon!",
  },
];

export const metadata: Metadata = {
  title: "KC Rentals — Paola Cejoco",
  description: "Redesigning the website of a real estate agency.",
};

const SHOT_SHADOW = "shadow-[0px_4px_30px_0px_rgba(0,0,0,0.2)]";

function WebRow({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex max-w-[890px] flex-col gap-4 md:flex-row md:gap-6">
      <h3 className="font-body text-base font-semibold text-black md:w-[342px] md:shrink-0 lg:leading-[20px]">
        {title}
      </h3>
      <p className="font-body text-sm text-[#1e1e1e] md:flex-1 lg:text-[16px] lg:leading-[20px]">
        {body}
      </p>
    </div>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body text-sm italic text-black lg:leading-[20px]">
      {children}
    </p>
  );
}

function ShotCard({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className={`relative aspect-[524/288] w-full max-w-[524px] rounded-xl ${SHOT_SHADOW}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 524px, 100vw"
        className="rounded-xl object-cover"
      />
    </div>
  );
}

function BeforeAfter({
  before,
  after,
  afterAlt,
}: {
  before: React.ReactNode;
  after: string;
  afterAlt: string;
}) {
  return (
    <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-6">
      <div className="flex w-full max-w-[524px] flex-col items-center gap-4">
        <div
          className={`relative aspect-[524/288] w-full rounded-xl ${SHOT_SHADOW}`}
        >
          {before}
        </div>
        <Caption>Before</Caption>
      </div>
      <div className="flex w-full max-w-[524px] flex-col items-center gap-4">
        <ShotCard src={after} alt={afterAlt} />
        <Caption>After</Caption>
      </div>
    </div>
  );
}

export default function KcRentalsPage() {
  return (
    <>
      <BackButton href="/#projects" />

      {/* Hero */}
      <section
        id="hero"
        className="relative overflow-hidden text-white"
        style={{ backgroundColor: TEAL }}
      >
        <div className="relative mx-auto flex min-h-screen max-w-[1280px] flex-col items-center justify-center gap-12 px-6 py-24 text-center lg:px-0 lg:py-0 lg:text-left">
          <div className="lg:absolute lg:left-[104px] lg:top-1/2 lg:z-10 lg:w-[798px] lg:-translate-y-1/2">
            <AnimatedSection>
              <h1 className="font-display text-6xl font-bold tracking-tightest sm:text-7xl lg:text-[80px] lg:leading-[84px] lg:tracking-[-1.6px]">
                KC Rentals
              </h1>
            </AnimatedSection>
          </div>

          <div className="w-full max-w-xl lg:absolute lg:left-[378px] lg:top-1/2 lg:w-[571px] lg:max-w-none lg:-translate-y-1/2">
            <AnimatedSection delay={0.1}>
              <div className="relative aspect-[1636/1024] w-full overflow-hidden rounded-lg drop-shadow-2xl">
                <Image
                  src="/images/kc-rentals/hero-collage.png"
                  alt="Collage of KC Rentals website screens"
                  fill
                  priority
                  sizes="(min-width: 1024px) 890px, 640px"
                  className="object-contain"
                />
              </div>
            </AnimatedSection>
          </div>

          <ScrollDownHint arrowSrc="/images/kc-rentals/scroll-arrow.svg" />
        </div>
      </section>

      {/* About the project */}
      <section className="px-6 py-16 md:px-12 lg:px-[104px] lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          <AnimatedSection className="flex max-w-[700px] flex-col gap-1">
            <p className="font-body text-base font-medium tracking-tight text-black lg:text-[20px] lg:tracking-[-0.2px]">
              About the project
            </p>
            <h2
              className="font-display text-4xl font-bold tracking-tightest text-balance sm:text-5xl lg:text-[56px] lg:tracking-[-0.84px]"
              style={{ color: TEAL }}
            >
              Redesigning the website of a real estate agency
            </h2>
          </AnimatedSection>

          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            <AnimatedSection className="flex max-w-[700px] flex-col gap-8">
              <div className="flex flex-col gap-5 font-body text-sm font-normal leading-relaxed text-[#1e1e1e] lg:text-[16px] lg:leading-[20px]">
                <p>
                  KC Rentals is a real estate agency established since 2016 in
                  Mandelieu, in the South of France. Katia, the founder, needed
                  to modernize her site and also improve its SEO as it did not
                  seem legitimate to clients and did not convert any users.
                </p>
                <p>
                  The first challenge was to retain certain attributes of the
                  site, including its domain with its email box and the KC
                  Rentals logo, so that returning clients could still contact
                  Katia and easily identify her.
                </p>
                <p>
                  The second challenge was to improve the site&apos;s SEO to
                  attract new clients and better showcase the products offered,
                  in order to convert visitors into actual clients.
                </p>
              </div>
              <a
                href="https://www.kc-cannes-rentals.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 font-body text-sm font-medium transition-opacity hover:opacity-70 lg:text-[18.09px] lg:tracking-[-0.1809px]"
                style={{ color: TEAL }}
              >
                Visit the site
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  src="/images/kc-rentals/arrow-right.svg"
                  className="h-[16px] w-[20px]"
                />
              </a>
            </AnimatedSection>

            <AnimatedSection
              delay={0.1}
              className="flex w-full flex-col gap-6 sm:w-56 lg:gap-[24px]"
            >
              <div>
                <p className="font-body text-base font-medium tracking-tight text-black lg:text-[20px] lg:tracking-[-0.2px]">
                  Role
                </p>
                <p className="mt-1 font-body text-sm text-black lg:text-[16px]">
                  Web Designer
                </p>
              </div>
              <div>
                <p className="font-body text-base font-medium tracking-tight text-black lg:text-[20px] lg:tracking-[-0.2px]">
                  Duration
                </p>
                <p className="mt-1 font-body text-sm text-black lg:text-[16px]">
                  2 months
                </p>
              </div>
              <div>
                <p className="font-body text-base font-medium tracking-tight text-black lg:text-[20px] lg:tracking-[-0.2px]">
                  Project type
                </p>
                <p className="mt-1 font-body text-sm leading-relaxed text-black lg:text-[14px]">
                  Web Design
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mockups */}
      <MockupsSection />

      {/* 01 — Visual identity */}
      <section className="px-6 py-16 md:px-12 lg:px-[104px] lg:py-28">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection className="mb-8 flex max-w-[700px] flex-col gap-1">
            <p className="font-body text-base font-medium tracking-tight text-black lg:text-[20px] lg:tracking-[-0.2px]">
              01
            </p>
            <h2
              className="font-display text-4xl font-bold capitalize tracking-tightest text-balance sm:text-5xl lg:text-[56px] lg:tracking-[-0.84px]"
              style={{ color: TEAL }}
            >
              Visual Identity
            </h2>
          </AnimatedSection>

          <div className="flex flex-col gap-8">
            <AnimatedSection className="flex flex-col gap-4 md:flex-row md:gap-6">
              <h3 className="font-body text-base font-semibold text-black md:w-[342px] md:shrink-0 lg:text-[16px] lg:leading-[20px]">
                Revamping the branding while keeping the original logo
              </h3>
              <div className="flex max-w-[700px] flex-col gap-5 font-body text-sm leading-relaxed text-[#1e1e1e] md:flex-1 lg:text-[16px] lg:leading-[20px]">
                <p>
                  The original colors of KC Rentals evoked more of a chocolate
                  shop than a real estate agency and were also outdated.
                </p>
                <p>
                  Green was chosen because it symbolizes safety, thus enhancing
                  the credibility of the site, and it also evokes nature, which
                  is omnipresent in the south of France. The peach orange, in
                  contrast with this dark green, adds accents to the UI system
                  (such as for calls to action and highlighting certain
                  elements). It recalls the sun of the Côte d&apos;Azur and is
                  also Katia&apos;s favorite color.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection
              delay={0.05}
              className="flex flex-col gap-10 lg:flex-row lg:items-start xl:gap-[116px]"
            >
              <div className="flex flex-col gap-4 text-black lg:w-[250px] lg:shrink-0">
                <p className="font-body text-[20px] font-medium leading-[24px] tracking-[-0.2px]">
                  TYPOGRAPHY
                </p>
                <div className="flex flex-col gap-3">
                  <p
                    className={`${notoSerif.className} text-[40px] font-bold leading-[44px] tracking-[-0.4px]`}
                  >
                    Noto Serif
                    <br />
                    Aa 123
                  </p>
                  <p
                    className={`${cabin.className} text-[24px] font-normal leading-[28px] tracking-[-0.24px]`}
                  >
                    Cabin Regular
                    <br />
                    Aa123
                  </p>
                </div>
              </div>

              <div className="flex min-w-0 flex-1 flex-col gap-4">
                <p className="font-body text-[20px] font-medium leading-[24px] tracking-[-0.2px] text-black">
                  COLORS
                </p>
                <div className="grid grid-cols-2 gap-6 sm:flex sm:gap-[36px]">
                  {PALETTE.map(({ shade, hex }) => (
                    <div
                      key={shade}
                      className="overflow-hidden rounded-lg bg-white sm:w-[104px] sm:shrink-0 shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.1),0px_4px_6px_-2px_rgba(16,24,40,0.05)]"
                    >
                      <div
                        className="h-20 w-full"
                        style={{ backgroundColor: hex }}
                      />
                      <div className="flex flex-col px-3 pb-3 pt-3 font-display">
                        <p className="text-[18px] font-medium leading-[28px] text-[#101828]">
                          {shade}
                        </p>
                        <p className="text-[16px] font-normal leading-[24px] text-[#475467]">
                          {hex.toUpperCase()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 02 — The modernized web version */}
      <section className="flex flex-col gap-16 px-6 py-16 md:px-12 lg:gap-[112px] lg:px-[104px] lg:py-28">
        <div className="mx-auto flex w-full max-w-[1232px] flex-col gap-16">
          <AnimatedSection className="mx-auto flex w-full max-w-5xl flex-col gap-8">
            <div className="flex max-w-[731px] flex-col gap-1">
              <p className="font-body text-base font-medium tracking-tight text-black lg:text-[20px] lg:tracking-[-0.2px]">
                02
              </p>
              <h2
                className="font-display text-4xl font-bold capitalize tracking-tightest text-balance sm:text-5xl lg:text-[56px] lg:leading-[60px] lg:tracking-[-0.84px]"
                style={{ color: TEAL }}
              >
                The modernized web version
              </h2>
            </div>
            <WebRow
              title="The homepage"
              body="A cleaner page that better illustrates Katia's core business. The menu has been simplified as some pages did not add value to the site or were repetitive. The user is no longer overwhelmed with information as in the old design."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <BeforeAfter
              before={
                <div className="absolute inset-0 overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt="KC Rentals homepage before the redesign"
                    src="/images/kc-rentals/web/home-before.png"
                    className="absolute left-[-0.58%] top-[-1.05%] h-[184.05%] w-[101.16%] max-w-none"
                  />
                </div>
              }
              after="/images/kc-rentals/web/home-after.png"
              afterAlt="KC Rentals homepage after the redesign"
            />
          </AnimatedSection>
        </div>

        <div className="mx-auto flex w-full max-w-[1232px] flex-col gap-16">
          <AnimatedSection className="mx-auto w-full max-w-5xl">
            <WebRow
              title="The property search has been simplified"
              body="In the previous design, it was necessary to go through several submenus to find a type of property, so I simplified the navigation by adding a filter on the properties page that directly targets the search for a property if the client has a specific idea of what they want."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <BeforeAfter
              before={
                <Image
                  src="/images/kc-rentals/web/search-before.png"
                  alt="KC Rentals property search before the redesign"
                  fill
                  sizes="(min-width: 1024px) 524px, 100vw"
                  className="rounded-xl object-cover"
                />
              }
              after="/images/kc-rentals/web/search-after.png"
              afterAlt="KC Rentals property search after the redesign"
            />
          </AnimatedSection>

          <AnimatedSection className="mx-auto w-full max-w-5xl">
            <WebRow
              title="Each property is highlighted and linked to a quote request"
              body="To better showcase each property, photos have taken a more prominent place on each page and a CTA has been placed visibly to convert potential clients more quickly."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.05} className="flex justify-center">
            <ShotCard
              src="/images/kc-rentals/web/property.png"
              alt="A KC Rentals property page with a prominent quote request CTA"
            />
          </AnimatedSection>
        </div>

        <div className="mx-auto flex w-full max-w-[1232px] flex-col gap-16">
          <AnimatedSection className="mx-auto w-full max-w-5xl">
            <WebRow
              title="Enhanced legitimacy"
              body="To address this need for credibility, partner sections and client reviews have been added to reassure users."
            />
          </AnimatedSection>

          <AnimatedSection
            delay={0.05}
            className="flex flex-col items-center gap-4"
          >
            <ShotCard
              src="/images/kc-rentals/web/legitimacy.png"
              alt="A KC Rentals customer testimonial and partner logos section"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* 03 — My learnings */}
      <section className="px-6 py-16 md:px-12 lg:px-[104px] lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          <AnimatedSection className="flex max-w-[731px] flex-col gap-1">
            <p className="font-body text-base font-medium tracking-tight text-black lg:text-[20px] lg:tracking-[-0.2px]">
              03
            </p>
            <h2
              className="font-display text-4xl font-bold capitalize tracking-tightest text-balance sm:text-5xl lg:text-[56px] lg:leading-[60px] lg:tracking-[-0.84px]"
              style={{ color: TEAL }}
            >
              My learnings
            </h2>
          </AnimatedSection>

          {LEARNINGS.map(({ title, body }, i) => (
            <AnimatedSection key={title} delay={i * 0.05}>
              <WebRow title={title} body={body} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* 04 — What would remain to be done */}
      <section className="px-6 py-16 md:px-12 lg:px-[104px] lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          <AnimatedSection className="flex max-w-[731px] flex-col gap-1">
            <p className="font-body text-base font-medium tracking-tight text-black lg:text-[20px] lg:tracking-[-0.2px]">
              04
            </p>
            <h2
              className="font-display text-4xl font-bold capitalize tracking-tightest text-balance sm:text-5xl lg:text-[56px] lg:leading-[60px] lg:tracking-[-0.84px]"
              style={{ color: TEAL }}
            >
              What would remain to be done
            </h2>
          </AnimatedSection>

          {NEXT_STEPS.map(({ title, body }, i) => (
            <AnimatedSection key={title} delay={i * 0.05}>
              <WebRow title={title} body={body} />
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Contact — same layout as the other case studies, in KC teal */}
      <section style={{ backgroundColor: TEAL }}>
        <AnimatedSection className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[56px] px-6 py-[112px]">
          <div className="flex w-full flex-col items-center gap-[4px] text-center text-white">
            <h2 className="w-[550px] max-w-full font-display text-[56px] font-bold leading-[normal] tracking-[-0.84px]">
              Like what you see?
            </h2>
            <p className="font-body text-[24px] font-medium leading-[30px] tracking-[-0.24px]">
              We may be a match
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-[31px]">
            <a
              href="mailto:cejoco.paola@gmail.com"
              className="flex items-center justify-center rounded-[30px] bg-white px-[32px] py-[12px] font-body text-[16px] font-semibold leading-[20px] whitespace-nowrap transition-opacity hover:opacity-80"
              style={{ color: TEAL }}
            >
              Shoot me a message
            </a>
            <a
              href="https://www.linkedin.com/in/paola-cejoco/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-[30px] border border-solid border-white px-[32px] py-[12px] font-body text-[16px] font-semibold leading-[20px] whitespace-nowrap text-white transition-colors hover:bg-white hover:text-[#74AEB2]"
            >
              My LinkedIn
            </a>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
