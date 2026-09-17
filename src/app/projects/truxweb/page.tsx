import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import BackButton from "@/components/BackButton";
import ResultsShowcase from "./ResultsShowcase";
import ScrollDownHint from "./ScrollDownHint";
import MockupsSection from "./MockupsSection";
import ProcessCarousel from "./ProcessCarousel";

const TEAL = "#74AEB2";
const TEAL_LIGHT = "#A3CCD3";

export const metadata: Metadata = {
  title: "Truxweb — Paola Cejoco",
  description: "Designing a B2B web app in logistics.",
};

function SectionIntro({
  index,
  title,
  dark = false,
}: {
  index: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-8 flex max-w-[700px] flex-col gap-1">
      <p
        className={`font-body text-base font-medium tracking-tight lg:text-[20px] lg:tracking-[-0.2px] ${dark ? "text-white" : "text-black"}`}
      >
        {index}
      </p>
      <h2
        className="font-display text-4xl font-bold tracking-tightest text-balance sm:text-5xl lg:text-[56px] lg:tracking-[-0.84px]"
        style={{ color: dark ? "#fff" : "#0f172a" }}
      >
        {title}
      </h2>
    </div>
  );
}

const process: { index: string; title: string; description: string }[] = [
  {
    index: "01",
    title: "Discover",
    description: "User needs analysis and customer journey.",
  },
  {
    index: "02",
    title: "Define",
    description:
      "Determine functionalities, analyze their feasibility and UX flow.",
  },
  {
    index: "03",
    title: "Build the Lo-FI",
    description:
      "Creation and/or validation of existing lo-fi designs and iterations as needed.",
  },
  {
    index: "04",
    title: "Design the hi-fi",
    description:
      "Research to determine the guidelines and artistic direction of hi-fi.",
  },
  {
    index: "05",
    title: "Prototyping",
    description: "Prototyping on Figma to bring the designs to life.",
  },
  {
    index: "06",
    title: "Development",
    description:
      "Hand-off to developers the designs for production deployment.",
  },
  {
    index: "07",
    title: "Tests and feedback",
    description: "Testing the platform by our users and gathering feedback.",
  },
  {
    index: "08",
    title: "Corrections and reiterations",
    description: "Changes made to the designs and UX.",
  },
];

function PersonaCard({
  label,
  quote,
  icon,
}: {
  label: string;
  quote: string;
  icon: ReactNode;
}) {
  return (
    <div
      className="relative flex h-[220px] w-full flex-col justify-center gap-2 overflow-visible p-8 text-white sm:w-[342px] lg:h-[250px] lg:p-[58px]"
      style={{ backgroundColor: TEAL }}
    >
      <div className="pointer-events-none absolute -top-14 right-6 lg:-top-16 lg:right-10">
        {icon}
      </div>
      <p className="font-body text-lg font-medium tracking-tight lg:text-[20px] lg:tracking-[-0.2px]">
        {label}
      </p>
      <p className="font-body text-sm leading-relaxed lg:text-[14px]">{quote}</p>
    </div>
  );
}

export default function TruxwebPage() {
  return (
    <>
      <BackButton href="/projects" />

      {/* Hero */}
      <section
        id="hero"
        className="relative overflow-hidden text-white"
        style={{ backgroundColor: TEAL }}
      >
        <div className="relative mx-auto flex min-h-screen max-w-[1280px] flex-col items-center justify-center gap-12 px-6 py-24 text-center lg:px-0 lg:py-0 lg:text-left">
          <div className="lg:absolute lg:left-[104px] lg:top-1/2 lg:z-10 lg:w-[798px] lg:-translate-y-1/2">
            <AnimatedSection>
              <h1 className="font-display text-6xl font-bold tracking-tightest sm:text-7xl lg:text-[96px] lg:leading-none lg:tracking-[-1.92px]">
                Truxweb
              </h1>
            </AnimatedSection>
          </div>

          <div className="w-full max-w-xl lg:absolute lg:left-[378px] lg:top-1/2 lg:w-[571px] lg:max-w-none lg:-translate-y-1/2">
            <AnimatedSection delay={0.1}>
              <div className="relative aspect-[1636/1024] w-full overflow-hidden rounded-lg drop-shadow-2xl">
                <Image
                  src="/images/truxweb/hero-collage.png"
                  alt="Collage of Truxweb product screens and branding"
                  fill
                  priority
                  sizes="(min-width: 1024px) 890px, 640px"
                  className="object-contain"
                />
              </div>
            </AnimatedSection>
          </div>

          <ScrollDownHint arrowSrc="/images/truxweb/scroll-arrow.svg" />
        </div>
      </section>

      {/* About the project */}
      <section className="px-6 py-16 md:px-12 lg:px-[104px] lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          <AnimatedSection className="flex max-w-[700px] flex-col gap-1">
            <p className="font-body text-base font-medium tracking-tight text-black lg:text-[20px] lg:tracking-[-0.2px]">
              About the project
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tightest text-balance text-[#0f172a] sm:text-5xl lg:text-[56px] lg:tracking-[-0.84px]">
              Designing a B2B web app in logistics
            </h2>
          </AnimatedSection>

          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            <AnimatedSection className="flex max-w-[700px] flex-col gap-8">
              <p className="font-body text-sm font-normal leading-relaxed text-[#1e1e1e] lg:text-[16px] lg:leading-[20px]">
                Truxweb is a Quebec-based start-up that aims to simplify the
                trucking transportation management process. It specializes in
                B2B freight logistics. My role was to help them develop an
                online platform (SAAS) by collaborating with a designer to
                create a platform that is both aesthetically pleasing and
                user-friendly. I also had the opportunity to work on other
                projects such as the homepage and other sales tools.
              </p>
              <a
                href="#prototype"
                className="inline-flex w-fit items-center gap-2 font-body text-sm font-medium transition-opacity hover:opacity-70 lg:text-[18.09px] lg:tracking-[-0.1809px]"
                style={{ color: TEAL }}
              >
                Jump to prototype
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  src="/images/truxweb/arrow-right.svg"
                  className="h-[16px] w-[20px]"
                />
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="flex w-full flex-col gap-6 sm:w-56 lg:gap-[24px]">
              <div>
                <p className="font-body text-base font-medium tracking-tight text-black lg:text-[20px] lg:tracking-[-0.2px]">
                  Role
                </p>
                <p className="mt-1 font-body text-sm text-black lg:text-[16px]">UI/UX Designer</p>
              </div>
              <div>
                <p className="font-body text-base font-medium tracking-tight text-black lg:text-[20px] lg:tracking-[-0.2px]">
                  Duration
                </p>
                <p className="mt-1 font-body text-sm text-black lg:text-[16px]">2 years</p>
              </div>
              <div>
                <p className="font-body text-base font-medium tracking-tight text-black lg:text-[20px] lg:tracking-[-0.2px]">
                  Collaboration
                </p>
                <p className="mt-1 font-body text-sm leading-relaxed text-black lg:text-[14px]">
                  1 Sr. designer
                  <br />4 developers
                  <br />1 PM
                  <br />2 founders
                </p>
              </div>
              <div>
                <p className="font-body text-base font-medium tracking-tight text-black lg:text-[20px] lg:tracking-[-0.2px]">
                  Project type
                </p>
                <p className="mt-1 font-body text-sm text-black lg:text-[14px]">Web App</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mockups */}
      <MockupsSection />

      {/* 01 — The problem */}
      <section className="px-6 py-16 md:px-12 lg:px-[104px] lg:py-28">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <SectionIntro index="01" title="The problem" />

            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-6">
              <p className="font-body text-base font-semibold text-black lg:w-[343px] lg:shrink-0 lg:text-[16px] lg:leading-[20px]">
                Many manual processes and a multitude of stakeholders
                profiting at the expense of carriers.
              </p>
              <div className="flex flex-col gap-4 lg:max-w-[700px]">
                <p className="font-body text-sm leading-relaxed text-[#1e1e1e] lg:text-[16px] lg:leading-[20px]">
                  The logistics sector, particularly in B2B transportation,
                  seems to have stagnated over the past 40 years. Processes
                  remain complex, administrative systems are still largely
                  manual, and communication among various players is
                  hindered by the lack of a centralized platform that meets
                  their needs.
                </p>
                <p className="font-body text-sm leading-relaxed text-[#1e1e1e] lg:text-[16px] lg:leading-[20px]">
                  Moreover, the increasing number of intermediaries between
                  carriers and clients, often in the form of freight
                  brokers, leads to additional costs that cut into carriers&apos;
                  revenues.
                </p>
                <p className="font-body text-sm leading-relaxed text-[#1e1e1e] lg:text-[16px] lg:leading-[20px]">
                  Another major challenge is that after delivering a load
                  from A to B, trucks usually return empty from B to A,
                  representing a significant waste of resources.
                </p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection
            delay={0.05}
            className="mt-16 flex flex-col gap-16 sm:flex-row sm:flex-wrap sm:justify-between lg:pt-4"
          >
            <PersonaCard
              label="Shipper"
              quote="Marjorie is frustrated with having to write numerous emails to her broker to track the delivery."
              icon={
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/images/truxweb/icon-boxes.svg"
                  alt=""
                  className="w-[110px] lg:w-[130px]"
                />
              }
            />
            <PersonaCard
              label="Carrier"
              quote="Michel struggles to compete with multinational transport companies and has to lower his prices to attract clients."
              icon={
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/images/truxweb/icon-truck-parcels.svg"
                  alt=""
                  className="w-[140px] -scale-y-100 rotate-180 lg:w-[170px]"
                />
              }
            />
          </AnimatedSection>
        </div>
      </section>

      {/* 02 — The Truxweb solution */}
      <section className="px-6 py-16 md:px-12 lg:px-[104px] lg:py-28">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <SectionIntro index="02" title="The Truxweb solution" />
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:gap-6">
                <p className="font-body text-base font-semibold text-black lg:w-[342px] lg:shrink-0 lg:text-[16px] lg:leading-[20px]">
                  A 100% digital platform allowing clients to quickly book a
                  carrier and track their goods.
                </p>
                <p className="font-body text-sm leading-relaxed text-[#1e1e1e] lg:max-w-[700px] lg:text-[16px] lg:leading-[20px]">
                  The solution envisioned by the founders of Truxweb was to
                  create a fully digital platform that enables clients to
                  book a carrier directly without going through an
                  intermediary and easily track their goods.
                </p>
              </div>
              <div className="flex flex-col gap-2 lg:flex-row lg:items-start lg:gap-6">
                <p className="font-body text-base font-semibold text-black lg:w-[342px] lg:shrink-0 lg:text-[16px] lg:leading-[20px]">
                  A platform where carriers can display their delivery areas
                  and attract more clients.
                </p>
                <p className="font-body text-sm leading-relaxed text-[#1e1e1e] lg:max-w-[700px] lg:text-[16px] lg:leading-[20px]">
                  The platform also simplifies processes for carriers,
                  allowing them to set up their various delivery routes
                  (e.g., the route from Montreal to Toronto) with the
                  corresponding price and subsequently become visible in
                  client search results. This provides them with better
                  market visibility, enabling them to generate more revenue.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 03 — The process */}
      <section
        className="overflow-x-clip px-6 py-16 md:px-12 lg:px-[104px] lg:py-10"
        style={{ backgroundColor: TEAL }}
      >
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <SectionIntro index="03" title="The process" dark />
            <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-6">
              <p className="font-body text-base font-semibold text-white lg:w-[342px] lg:shrink-0 lg:text-[16px] lg:leading-[20px]">
                A process based on the Agile method and far from being a
                smooth journey.
              </p>
              <p className="font-body text-sm leading-relaxed text-white lg:max-w-[700px] lg:text-[16px] lg:leading-[20px]">
                The process at Truxweb was based on the Agile method and
                improved as the start-up grew. I collaborated with my senior
                designer and a team of developers, not to mention the
                company&apos;s founders. This allowed us to better understand
                user needs and industry specifics to create the best
                possible solution that is both aesthetically pleasing and
                easy to use.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <ProcessCarousel steps={process} />
          </AnimatedSection>
        </div>
      </section>

      {/* 04 — The results */}
      <section className="px-6 py-16 md:px-12 lg:px-[104px] lg:py-28">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <SectionIntro index="04" title="The Results" />
            <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-6">
              <p className="font-body text-base font-semibold text-black lg:w-[342px] lg:shrink-0 lg:text-[16px] lg:leading-[20px]">
                A search engine-like platform simplifying the booking of a
                carrier.
              </p>
              <p className="font-body text-sm leading-relaxed text-[#1e1e1e] lg:max-w-[700px] lg:text-[16px] lg:leading-[20px]">
                After considering the founders&apos; ideas and reworking the
                existing lo-fi designs, my senior designer and I aimed to
                recreate a booking process similar to Google Flights /
                Expedia to place users in a familiar environment while
                addressing the various technical needs related to the
                logistics industry. Below is a preview of the platform from
                the shipper&apos;s perspective.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.05}>
            <ResultsShowcase />
          </AnimatedSection>
        </div>
      </section>

      {/* 05 — Test and feedback */}
      <section className="px-6 py-16 md:px-12" style={{ backgroundColor: "#F2F5F8" }}>
        <AnimatedSection className="mx-auto max-w-3xl">
          <SectionIntro index="05" title="Test and feedback" />
          <p className="mb-2 text-base font-semibold text-ink">
            A smooth search experience but difficult access to various
            bookings
          </p>
          <div className="flex flex-col gap-4 text-base leading-relaxed text-ink/80">
            <p>
              After testing the platform with the initial users, we found
              that the booking process was rather smooth but the dashboard
              experience was not satisfactory.
            </p>
            <p>
              Indeed, it was difficult to navigate quickly through the
              different bookings because each item took up a considerable
              amount of space on the screen, leading to significant
              scrolling and consecutive pages. It was necessary to
              reconsider the space occupied by each booking in order to
              have a better overview and to easily find a booking.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* 06 — The final design */}
      <section className="px-6 pt-16 md:px-12">
        <AnimatedSection className="mx-auto max-w-3xl">
          <SectionIntro index="06" title="The final design" />
          <p className="mb-2 text-base font-semibold text-ink">
            A web app allowing for an overview of reservations and easier
            navigation on the platform
          </p>
          <p className="max-w-2xl text-base leading-relaxed text-ink/80">
            After much deliberation between the DEV and Design teams, the
            platform took a whole new direction by becoming a true web app.
            This format was the solution to many puzzles concerning the
            overall flow of the platform, as well as a more modern
            environment in line with the vision of Truxweb.
          </p>
        </AnimatedSection>
      </section>

      {/* Prototype showcase */}
      <section id="prototype" className="mt-16 py-16" style={{ backgroundColor: TEAL }}>
        <AnimatedSection className="mx-auto flex max-w-4xl flex-col items-center px-6">
          <p className="mb-8 text-sm font-bold uppercase tracking-[0.3em] text-white">
            Prototype
          </p>
          <div className="relative aspect-[3075/1905] w-full max-w-2xl">
            <Image
              src="/images/truxweb/prototype-imac.png"
              alt="Truxweb dashboard shown on an iMac"
              fill
              sizes="(min-width: 768px) 672px, 100vw"
              className="object-contain"
            />
          </div>
        </AnimatedSection>
      </section>

      {/* Contact CTA */}
      <section className="px-6 py-24 md:px-12">
        <AnimatedSection className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
          <h2
            className="font-display text-4xl font-bold tracking-tightest sm:text-5xl"
            style={{ color: TEAL }}
          >
            Do you like what you see?
          </h2>
          <p className="text-lg" style={{ color: TEAL_LIGHT }}>
            We may be a match
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:cejoco.paola@gmail.com"
              className="rounded-full px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: TEAL }}
            >
              Shoot me a message
            </a>
            <a
              href="https://www.linkedin.com/in/paola-cejoco/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border px-8 py-3 text-sm font-semibold transition-colors hover:bg-black/[0.03]"
              style={{ borderColor: TEAL, color: TEAL }}
            >
              My LinkedIn
            </a>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
