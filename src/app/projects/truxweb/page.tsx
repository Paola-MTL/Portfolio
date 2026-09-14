import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import BackButton from "@/components/BackButton";
import ResultsShowcase from "./ResultsShowcase";

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
    <div className="mb-6">
      <p
        className={`mb-2 text-sm font-semibold ${dark ? "text-white/70" : "text-ink/60"}`}
      >
        {index}
      </p>
      <h2
        className="font-display text-4xl font-bold tracking-tightest text-balance sm:text-5xl"
        style={{ color: dark ? "#fff" : TEAL }}
      >
        {title}
      </h2>
    </div>
  );
}

const process: { index: string; title: string; description: string }[] = [
  {
    index: "01",
    title: "Discovery phase",
    description: "User needs analysis and customer journey.",
  },
  {
    index: "02",
    title: "Define",
    description: "Determine the features, feasibility analysis, and UX flow.",
  },
  {
    index: "03",
    title: "Build the lo-fi",
    description:
      "Creation and/or validation of lo-fi and re-iterations as needed.",
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

function ProcessCard({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description: string;
}) {
  return (
    <div className="w-64 shrink-0 snap-start rounded-2xl bg-white p-6 shadow-sm">
      <p className="text-sm font-semibold" style={{ color: TEAL }}>
        {index}
      </p>
      <h3 className="mt-3 text-base font-bold uppercase tracking-wide text-ink">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink/70">
        {description}
      </p>
    </div>
  );
}

function TruckIcon() {
  return (
    <svg viewBox="0 0 48 48" className="size-12" fill="none" aria-hidden>
      <path
        d="M2 12h24v20H2z"
        fill="currentColor"
        fillOpacity="0.9"
      />
      <path
        d="M26 20h9l7 7v5h-16z"
        fill="currentColor"
        fillOpacity="0.65"
      />
      <circle cx="12" cy="34" r="4" fill="currentColor" />
      <circle cx="36" cy="34" r="4" fill="currentColor" />
    </svg>
  );
}

function PersonaCard({
  bg,
  textClass,
  label,
  quote,
  icon,
}: {
  bg: string;
  textClass: string;
  label: string;
  quote: string;
  icon: ReactNode;
}) {
  return (
    <div
      className="flex flex-col items-center gap-4 rounded-2xl p-8 text-center"
      style={{ backgroundColor: bg }}
    >
      <div className={textClass}>{icon}</div>
      <p className={`text-xs font-bold uppercase tracking-[0.15em] ${textClass}`}>
        {label}
      </p>
      <p className={`text-sm leading-relaxed ${textClass}`}>{quote}</p>
    </div>
  );
}

export default function TruxwebPage() {
  return (
    <>
      <BackButton href="/#projects" />

      {/* Hero */}
      <section
        id="hero"
        className="overflow-hidden text-white"
        style={{ backgroundColor: TEAL }}
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 pb-16 pt-32 text-center md:pt-40">
          <AnimatedSection className="w-full">
            <div className="relative mx-auto aspect-[840/482] w-full max-w-2xl drop-shadow-2xl">
              <Image
                src="/images/truxweb/hero-illustration.png"
                alt="Collage of Truxweb product screens and branding"
                fill
                priority
                sizes="(min-width: 768px) 640px, 100vw"
                className="object-contain"
              />
            </div>
            <h1 className="mt-10 font-display text-6xl font-bold tracking-tightest sm:text-7xl">
              Truxweb
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* About the project */}
      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto flex max-w-4xl flex-col gap-12 md:flex-row md:gap-16">
          <AnimatedSection className="flex-1">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.15em] text-ink/60">
              About the project
            </p>
            <h2
              className="font-display text-4xl font-bold tracking-tightest text-balance sm:text-5xl"
              style={{ color: TEAL }}
            >
              Designing a B2B web app in logistics
            </h2>
            <p className="mt-6 text-base leading-relaxed text-ink/80">
              Truxweb is a Quebec-based start-up that aims to simplify the
              trucking transportation management process. It specializes in
              B2B freight logistics. My role was to help them develop an
              online platform (SAAS) by collaborating with a designer to
              create a platform that is both aesthetically pleasing and
              user-friendly. I also had the opportunity to work on other
              projects such as the homepage and other sales tools.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="flex w-full flex-col gap-6 sm:w-56">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/50">
                Role
              </p>
              <p className="mt-1 text-sm text-ink/80">UI/UX Designer</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/50">
                Duration
              </p>
              <p className="mt-1 text-sm text-ink/80">2 years</p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-ink/50">
                Collaboration
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink/80">
                1 senior designer
                <br />4 developers
                <br />1 project manager
                <br />2 founders
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Screens strip */}
      <AnimatedSection>
        <div className="overflow-x-auto px-6 pb-16 md:px-12">
          <div className="mx-auto flex w-fit max-w-5xl gap-5">
            {[
              { src: "/images/truxweb/carousel-hero.png", rotate: "-rotate-2", w: 1493, h: 927 },
              { src: "/images/truxweb/carousel-login.png", rotate: "rotate-1", w: 1497, h: 928 },
              { src: "/images/truxweb/carousel-dashboard.png", rotate: "-rotate-1", w: 1456, h: 910 },
              { src: "/images/truxweb/carousel-branding.png", rotate: "rotate-2", w: 2049, h: 1152 },
            ].map((shot) => (
              <div
                key={shot.src}
                className={`h-40 shrink-0 overflow-hidden rounded-lg shadow-md ${shot.rotate}`}
                style={{ width: (160 * shot.w) / shot.h }}
              >
                <Image
                  src={shot.src}
                  alt="Truxweb product screenshot"
                  width={shot.w}
                  height={shot.h}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* 01 — The problem */}
      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <SectionIntro index="01" title="The problem" />
            <p className="mb-4 text-base font-semibold text-ink">
              A lot of manual processes and a myriad of stakeholders
              enriching themselves at the expense of carriers
            </p>
            <div className="flex flex-col gap-4 text-base leading-relaxed text-ink/80">
              <p>
                The field of logistics, especially in the B2B transport
                sector, appears to have stagnated over the past 40 years.
                The processes remain complex, administrative systems are
                still largely manual, and communication between the various
                players is hindered by the absence of a centralized
                platform meeting their needs.
              </p>
              <p>
                Furthermore, the increasing number of intermediaries between
                carriers and clients, often in the form of transport
                brokers, results in additional costs that reduce carriers&apos;
                revenues.
              </p>
              <p>
                Another major challenge is that after delivering a shipment
                from A to B, trucks typically return empty from B to A,
                representing a significant loss of resources.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.05} className="mt-10 grid gap-4 sm:grid-cols-2">
            <PersonaCard
              bg={TEAL_LIGHT}
              textClass="text-ink"
              label="Shipper"
              quote="Marjorie is frustrated to have to write many emails to her broker to track the delivery."
              icon={
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/images/truxweb/icon-shipper.svg"
                  alt=""
                  className="h-16 w-auto"
                />
              }
            />
            <PersonaCard
              bg={TEAL}
              textClass="text-white"
              label="Carrier"
              quote="Michel is struggling to make a name for himself among transportation multinationals and needs to lower his prices to attract clients."
              icon={<TruckIcon />}
            />
          </AnimatedSection>
        </div>
      </section>

      {/* 02 — The Truxweb solution */}
      <section className="px-6 py-16 md:px-12" style={{ backgroundColor: "#F2F5F8" }}>
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <SectionIntro index="02" title="The Truxweb solution" />
            <div className="flex flex-col gap-8">
              <div>
                <p className="mb-2 text-base font-semibold text-ink">
                  A 100% digital platform allowing customers to quickly book
                  a carrier and track their goods
                </p>
                <p className="text-base leading-relaxed text-ink/80">
                  The solution envisioned by the founders of Truxweb was to
                  create a 100% digitized platform allowing the client to
                  book a carrier directly without going through an
                  intermediary, and to easily track their merchandise.
                </p>
              </div>
              <div>
                <p className="mb-2 text-base font-semibold text-ink">
                  A platform where carriers can display their delivery areas
                  and attract more clients
                </p>
                <p className="text-base leading-relaxed text-ink/80">
                  The platform also simplifies processes for carriers,
                  allowing them to set up their various delivery routes
                  (e.g. the route from Montreal to Toronto) with the
                  corresponding price, and then be visible in the search
                  results for clients. This provides them with better
                  market visibility, subsequently enabling them to generate
                  more revenue.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 03 — The process */}
      <section className="py-16" style={{ backgroundColor: TEAL }}>
        <div className="mx-auto max-w-5xl px-6 md:px-12">
          <AnimatedSection>
            <SectionIntro index="03" title="The process" dark />
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-white/85">
              The process at Truxweb was based on the Agile method and
              improved as the startup grew. I worked closely with my senior
              designer and a team of developers, as well as the company&apos;s
              founders. This allowed us to better understand user needs and
              industry technicalities in order to create the best possible
              solution, both aesthetically and user-friendly.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {process.map((step) => (
                <ProcessCard
                  key={step.index}
                  index={step.index}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 04 — The results */}
      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <SectionIntro index="04" title="The results" />
            <p className="mb-2 text-base font-semibold text-ink">
              A search engine platform that simplifies the booking of a
              carrier
            </p>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-ink/80">
              After taking into account the founders&apos; ideas and reworking
              the existing lo-fis, my senior and I wanted to recreate a
              reservation process similar to Google Flights / Expedia to put
              users in a familiar environment while considering the various
              technical needs related to the logistics industry. You can
              see below a preview of the platform on the shipper side.
            </p>
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
      <section className="mt-16 py-16" style={{ backgroundColor: TEAL }}>
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
