import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ContactCTA from "@/components/ContactCTA";

const NAVY = "#1F3A5F";
const GOLD = "#F0A93B";

export const metadata: Metadata = {
  title: "Truxweb — Paola Cejoco",
  description: "Designing a B2B web app in logistics.",
};

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <span
        className="flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
        style={{ backgroundColor: NAVY }}
      >
        {index}
      </span>
      <h2 className="font-display text-2xl font-normal italic tracking-tightest sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

const process: { index: string; title: string; description: string }[] = [
  { index: "01", title: "Discover", description: "Analysis of user needs and customer journey." },
  { index: "02", title: "Define", description: "Determine features, feasibility, and UX flow." },
  { index: "03", title: "Build the lo-fi", description: "Creation and validation of lo-fi, iterating as needed." },
  { index: "04", title: "Design the hi-fi", description: "Research to determine guidelines and artistic direction." },
  { index: "05", title: "Prototype", description: "Prototyping in Figma to bring designs to life." },
  { index: "06", title: "Development", description: "Hand-off to developers for production deployment." },
  { index: "07", title: "Tests and feedback", description: "Platform testing by users and feedback collection." },
  { index: "08", title: "Corrections", description: "Corrections and re-iterations made to designs and UX." },
];

function ProcessRow({
  index,
  title,
  description,
  isLast,
}: {
  index: string;
  title: string;
  description: string;
  isLast: boolean;
}) {
  return (
    <div className="relative flex gap-6 pb-10 last:pb-0">
      {!isLast && (
        <span className="absolute left-[19px] top-10 bottom-0 w-px bg-ink/10" />
      )}
      <span
        className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
        style={{ backgroundColor: NAVY }}
      >
        {index}
      </span>
      <div className="pt-1.5">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-ink/70">
          {description}
        </p>
      </div>
    </div>
  );
}

function FlowFrame({
  src,
  alt,
  label,
}: {
  src: string;
  alt: string;
  label: string;
}) {
  return (
    <div className="flex w-full flex-col gap-2 sm:w-64">
      <div className="overflow-hidden rounded-xl border border-ink/10 shadow-sm">
        <div className="flex items-center gap-1.5 bg-ink/5 px-3 py-2">
          <span className="size-2 rounded-full bg-ink/15" />
          <span className="size-2 rounded-full bg-ink/15" />
          <span className="size-2 rounded-full bg-ink/15" />
        </div>
        <div className="relative aspect-[4/3]">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 640px) 256px, 100vw"
            className="object-cover object-top"
          />
        </div>
      </div>
      <p className="text-center text-sm italic text-muted">{label}</p>
    </div>
  );
}

export default function TruxwebPage() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden text-white" style={{ backgroundColor: NAVY }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 pb-16 pt-32 md:flex-row md:px-12 md:pt-40">
          <AnimatedSection className="flex-1">
            <Link
              href="/#projects"
              className="mb-8 inline-block text-sm text-white/60 transition-colors hover:text-white"
            >
              ← Back to projects
            </Link>
            <p
              className="mb-4 text-sm font-semibold uppercase tracking-[0.25em]"
              style={{ color: GOLD }}
            >
              Truxweb · 2021–2023
            </p>
            <h1 className="font-display text-4xl font-normal italic tracking-tightest text-balance sm:text-5xl">
              Freight, rebooted for the modern web
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              Truxweb is a Quebec-based start-up that aims to simplify the
              trucking transportation management process. It specializes in
              B2B freight logistics. My role was to help them develop an
              online platform (SaaS) by collaborating with a designer to
              create a platform that is both aesthetically pleasing and
              user-friendly. I also had the opportunity to work on other
              projects such as the homepage and sales tools.
            </p>

            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-white/15 pt-8 sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-white/50">
                  Role
                </dt>
                <dd className="mt-1 text-sm">UI/UX Designer</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-white/50">
                  Duration
                </dt>
                <dd className="mt-1 text-sm">2 years</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-white/50">
                  Collaboration
                </dt>
                <dd className="mt-1 text-sm">
                  4 developers · 1 project manager · 2 founders
                </dd>
              </div>
            </dl>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="w-full max-w-md flex-1">
            <div className="relative aspect-[4/3] w-full drop-shadow-2xl">
              <Image
                src="/images/home/truxweb.jpg"
                alt="Truxweb product mockup on a laptop"
                fill
                priority
                sizes="(min-width: 768px) 448px, 100vw"
                className="object-contain"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 01 — The problem / 02 — The solution */}
      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto flex max-w-3xl flex-col gap-16">
          <AnimatedSection>
            <SectionHeading index="01" title="The problem" />
            <div className="flex flex-col gap-4 text-base leading-relaxed text-ink/80">
              <p>
                A lot of manual processes and a myriad of stakeholders
                enriching themselves at the expense of carriers.
              </p>
              <p>
                The field of logistics, especially in the B2B transport
                sector, appears to have stagnated over the past 40 years.
                Processes remain complex, administrative systems are still
                largely manual, and communication between the various
                players is hindered by the absence of a centralized
                platform.
              </p>
              <p>
                The increasing number of intermediaries between carriers
                and clients, often in the form of transport brokers,
                results in additional costs that reduce carriers&apos;
                revenues. After delivering a shipment from A to B, trucks
                typically return empty from B to A — a significant loss of
                resources.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <SectionHeading index="02" title="The Truxweb solution" />
            <div className="flex flex-col gap-4 text-base leading-relaxed text-ink/80">
              <p>
                A 100% digital platform allowing customers to quickly book
                a carrier and track their goods directly, without going
                through an intermediary.
              </p>
              <p>
                The platform also simplifies processes for carriers,
                letting them set up delivery routes with corresponding
                pricing and be visible in search results — giving them
                better market visibility and more revenue.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 03 — The process */}
      <section className="px-6 py-16 md:px-12" style={{ backgroundColor: "#F2F5F8" }}>
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <SectionHeading index="03" title="The process" />
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-ink/80">
              The process at Truxweb was based on the Agile method and
              improved as the startup grew. I worked closely with my senior
              designer, a team of developers, and the company&apos;s
              founders to understand user needs and industry technicalities.
            </p>
            <div>
              {process.map((step, i) => (
                <ProcessRow
                  key={step.index}
                  index={step.index}
                  title={step.title}
                  description={step.description}
                  isLast={i === process.length - 1}
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
            <SectionHeading index="04" title="The results" />
            <p className="max-w-2xl text-base leading-relaxed text-ink/80">
              A search engine platform that simplifies the booking of a
              carrier. After taking into account the founders&apos; ideas
              and reworking the existing lo-fis, my senior and I wanted to
              recreate a reservation process similar to Google Flights /
              Expedia to put users in a familiar environment while
              considering the various technical needs related to the
              logistics industry. A step-by-step user guidance helps refine
              their search as accurately as possible.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.05} className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-center">
            <FlowFrame
              src="/images/truxweb/search-step1.jpg"
              alt="Truxweb search step with equipment selection"
              label="1. Search"
            />
            <span className="hidden pt-16 text-2xl text-ink/20 sm:block">
              →
            </span>
            <FlowFrame
              src="/images/truxweb/search-step2.jpg"
              alt="Truxweb carrier results list"
              label="2. Results"
            />
            <span className="hidden pt-16 text-2xl text-ink/20 sm:block">
              →
            </span>
            <FlowFrame
              src="/images/truxweb/dashboard-step3.jpg"
              alt="Truxweb shipment tracking dashboard"
              label="3. Track & manage"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* 05 — Test and feedback */}
      <section className="px-6 py-16 md:px-12">
        <AnimatedSection className="mx-auto max-w-3xl">
          <div
            className="rounded-2xl border-l-4 bg-ink/[0.03] px-6 py-6"
            style={{ borderColor: NAVY }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">
              05 · Test and feedback
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink/80">
              A smooth search experience, but difficult access to various
              bookings. After testing the platform with the initial users,
              we found that the booking process was rather smooth but the
              dashboard experience was not satisfactory — each item took up
              a considerable amount of space on the screen, leading to
              significant scrolling and consecutive pages. It was necessary
              to reconsider the space occupied by each booking for a better
              overview.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* 06 — The final design */}
      <section className="px-6 py-16 md:px-12">
        <AnimatedSection className="mx-auto max-w-3xl">
          <SectionHeading index="06" title="The final design" />
          <p className="max-w-2xl text-base leading-relaxed text-ink/80">
            A web app allowing for an overview of reservations and easier
            navigation on the platform. After much deliberation between the
            dev and design teams, the platform took a whole new direction
            by becoming a true web app — a more modern environment in line
            with Truxweb&apos;s vision.
          </p>
        </AnimatedSection>
      </section>

      <ContactCTA />
    </>
  );
}
