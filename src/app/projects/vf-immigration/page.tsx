import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import BackButton from "@/components/BackButton";
import ContactCTA from "@/components/ContactCTA";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import MockupsSection from "./MockupsSection";
import ScrollDownHint from "./ScrollDownHint";
import ProcessCarousel, { type ProcessStep } from "./ProcessCarousel";
import ResearchSection from "./ResearchSection";

const RED = "#D6021E";
const CORAL = "#F03241";

export const metadata: Metadata = {
  title: "VF Immigration — Paola Cejoco",
  description: "Redesigning an immigration consultation website.",
};

function SectionIntro({
  index,
  title,
  dark = false,
  titleColor,
}: {
  index: string;
  title: string;
  dark?: boolean;
  titleColor?: string;
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
        style={{ color: titleColor ?? (dark ? "#fff" : "#0f172a") }}
      >
        {title}
      </h2>
    </div>
  );
}

const process: ProcessStep[] = [
  {
    index: "01",
    title: "Discovery phase",
    description:
      "Existing content analysis, business needs and goals, user needs, competitive analysis and personas.",
  },
  {
    index: "02",
    title: "Information architecture",
    description:
      "Sorting and organizing information, content accessibility and simplifying the user flow.",
  },
  {
    index: "03",
    title: "Low-fidelity designs",
    description:
      "Wireframe creation and validation with the client of the technical aspects of the content.",
  },
  {
    index: "04",
    title: "High-fidelity designs & staging",
    description: "Typography, color palette and responsive designs.",
  },
  {
    index: "05",
    title: "Usability testing",
    description:
      "In-person tests using the \u201cthinking aloud\u201d method, annotating results and pain points.",
  },
  {
    index: "06",
    title: "Iteration",
    description: "Adjusting the designs based on the feedback received.",
  },
  {
    index: "07",
    title: "Final designs & hand-off to the client",
    description:
      "Finalizing the designs, putting the site online and explaining the Wix software to the client.",
  },
];

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <span
        className="flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
        style={{ backgroundColor: RED }}
      >
        {index}
      </span>
      <h2 className="font-display text-2xl font-normal italic tracking-tightest sm:text-3xl">
        {title}
      </h2>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1 border-t border-ink/10 pt-5">
      <span className="font-display text-4xl italic tracking-tightest sm:text-5xl" style={{ color: RED }}>
        {value}
      </span>
      <span className="text-sm text-muted">{label}</span>
    </div>
  );
}

export default function VfImmigrationPage() {
  return (
    <>
      <BackButton href="/#projects" />

      {/* Hero */}
      <section
        id="hero"
        className="relative overflow-hidden text-white"
        style={{ backgroundColor: CORAL }}
      >
        <div className="relative mx-auto flex min-h-screen max-w-[1280px] flex-col items-center justify-center gap-12 px-6 py-24 text-center lg:px-0 lg:py-0 lg:text-left">
          <div className="lg:absolute lg:left-12 lg:top-1/2 lg:z-10 lg:w-[798px] lg:-translate-y-1/2">
            <AnimatedSection>
              <h1 className="font-display text-6xl font-bold tracking-tightest sm:text-7xl lg:text-[96px] lg:leading-none lg:tracking-[-1.92px]">
                VF Immigration
              </h1>
            </AnimatedSection>
          </div>

          <div className="w-full max-w-xl lg:absolute lg:left-[378px] lg:top-1/2 lg:w-[571px] lg:max-w-none lg:-translate-y-1/2">
            <AnimatedSection delay={0.1}>
              <div className="relative aspect-[524/328] w-full overflow-hidden rounded-lg">
                <Image
                  src="/images/vf-immigration/hero-collage.png"
                  alt="Collage of the redesigned VF Immigration website pages"
                  fill
                  priority
                  sizes="(min-width: 1024px) 1142px, 576px"
                  className="object-contain"
                />
                <div aria-hidden className="absolute inset-0 bg-black/20" />
              </div>
            </AnimatedSection>
          </div>

          <ScrollDownHint arrowSrc="/images/vf-immigration/scroll-arrow.svg" />
        </div>
      </section>

      {/* About the project */}
      <section className="px-6 py-16 md:px-12 lg:px-[104px] lg:py-28">
        <div className="mx-auto flex max-w-5xl flex-col gap-8">
          <AnimatedSection className="flex max-w-[700px] flex-col gap-1 lg:max-w-[760px]">
            <p className="font-body text-base font-medium tracking-tight text-black lg:text-[20px] lg:tracking-[-0.2px]">
              About the project
            </p>
            <h2 className="font-display text-4xl font-bold tracking-tightest text-balance text-[#0f172a] sm:text-5xl lg:text-[56px] lg:tracking-[-0.84px]">
              Redesigning an immigration consultation website
            </h2>
          </AnimatedSection>

          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            <AnimatedSection className="flex max-w-[700px] flex-col gap-8">
              <div className="flex flex-col gap-5 font-body text-sm font-normal leading-relaxed text-[#1e1e1e] lg:text-[16px] lg:leading-[20px]">
                <p>
                  VF Immigration is an immigration consulting agency
                  established since 2016 in Montreal. Valérie, the president
                  of VF Immigration, needed not only to modernize her site but
                  also to direct her clients to the most suitable service for
                  them.
                </p>
                <p>
                  The first challenge was to find a new visual identity,
                  without updating the logo, so that both new and old clients
                  could still recognize VF Immigration.
                </p>
                <p>
                  A second challenge was to improve Valérie&apos;s
                  productivity, on the one hand by highlighting the different
                  channels of information and services offered, and on the
                  other hand, automating certain processes to reduce the
                  number of unnecessary emails Valérie received daily.
                </p>
              </div>
              <a
                href="https://www.vfimmigration.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 font-body text-sm font-medium transition-opacity hover:opacity-70 lg:text-[18.09px] lg:tracking-[-0.1809px]"
                style={{ color: CORAL }}
              >
                Visit the site
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  src="/images/vf-immigration/arrow-right.svg"
                  className="h-[16px] w-[20px]"
                />
              </a>
            </AnimatedSection>

            <AnimatedSection delay={0.1} className="flex w-full flex-col gap-6 sm:w-56 lg:gap-[24px]">
              <div>
                <p className="font-body text-base font-medium tracking-tight text-black lg:text-[20px] lg:tracking-[-0.2px]">
                  Role
                </p>
                <p className="mt-1 font-body text-sm leading-relaxed text-black lg:text-[14px]">
                  UI/UX designer
                  <br />
                  Web designer
                </p>
              </div>
              <div>
                <p className="font-body text-base font-medium tracking-tight text-black lg:text-[20px] lg:tracking-[-0.2px]">
                  Duration
                </p>
                <p className="mt-1 font-body text-sm text-black lg:text-[16px]">4 months</p>
              </div>
              <div>
                <p className="font-body text-base font-medium tracking-tight text-black lg:text-[20px] lg:tracking-[-0.2px]">
                  Project type
                </p>
                <p className="mt-1 font-body text-sm leading-relaxed text-black lg:text-[14px]">
                  Web design
                  <br />
                  Mobile design
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <MockupsSection />

      {/* 01 — The process */}
      <section
        className="overflow-x-clip px-6 py-16 md:px-12 lg:px-[104px] lg:py-10"
        style={{ backgroundColor: CORAL }}
      >
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <SectionIntro index="01" title="The process" dark />
            <p className="mb-14 max-w-[460px] font-body text-base font-semibold text-white lg:text-[16px] lg:leading-[20px]">
              General process followed throughout the website redesign. The
              designs were first created in French.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.05}>
            <ProcessCarousel steps={process} />
          </AnimatedSection>
        </div>
      </section>

      {/* 02 — Research */}
      <section className="px-6 py-16 md:px-12 lg:px-[104px] lg:py-28">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <SectionIntro index="02" title="Research" titleColor={CORAL} />
          </AnimatedSection>
          <ResearchSection />
        </div>
      </section>

      {/* Stat bar */}
      <section className="px-6 py-16 md:px-12">
        <AnimatedSection className="mx-auto grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
          <Stat value="60%+" label="bounce rate on the old homepage" />
          <Stat value="80%" label="of traffic arrived direct — no clear path in" />
          <Stat value="60%" label="of sessions happened on mobile" />
        </AnimatedSection>
      </section>

      {/* Narrative: 03–05 */}
      <section className="px-6 pb-8 md:px-12">
        <div className="mx-auto flex max-w-3xl flex-col gap-16">
          <AnimatedSection>
            <SectionHeading index="03" title="Information architecture" />
            <p className="text-base leading-relaxed text-ink/80">
              The content was rewritten using simple, accessible vocabulary,
              better-defined categories by user profile, and a clearer
              information hierarchy — a real challenge given how complex
              immigration processes are.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <SectionHeading index="04" title="Wireframes" />
            <p className="text-base leading-relaxed text-ink/80">
              A first wireframing round incorporated VF Immigration&apos;s
              desired content. Information density remained a friction
              point, so hierarchy and structure were revised — for example,
              using accordions for definitions.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <SectionHeading index="05" title="Visual identity" />
            <p className="text-base leading-relaxed text-ink/80">
              The two most dominant primary colors at VF Immigration were
              dark red and dark gray. To enhance contrast throughout the
              site, I expanded the palette starting from these two primary
              colors. Typography: Avenir Heavy and Avenir Light.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <span
                className="size-10 rounded-full border border-ink/10 shadow-sm"
                style={{ backgroundColor: RED }}
                aria-label="Dark red"
              />
              <span
                className="size-10 rounded-full border border-ink/10 shadow-sm"
                style={{ backgroundColor: "#2B2B2B" }}
                aria-label="Dark gray"
              />
              <span
                className="size-10 rounded-full border border-ink/10 shadow-sm"
                style={{ backgroundColor: "#F5F3F0" }}
                aria-label="Off-white"
              />
              <span className="ml-2 text-sm text-muted">
                Expanded from VF Immigration&apos;s original red &amp; gray
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 06 — The modernized web version */}
      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <SectionHeading index="06" title="The modernized web version" />
            <p className="max-w-2xl text-base leading-relaxed text-ink/80">
              Four pages carried the redesign. Drag each slider to compare
              the original site against the rebuild.
            </p>
          </AnimatedSection>

          <div className="mt-10 flex flex-col gap-16">
            <AnimatedSection delay={0.05}>
              <h3 className="text-lg font-semibold">The homepage</h3>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink/70">
                A page in the image of Valérie, more streamlined, where
                information is prioritized and the services offered are
                highlighted.
              </p>
              <div className="mt-6">
                <BeforeAfterSlider
                  before="/images/vf-immigration/before-homepage.jpg"
                  after="/images/vf-immigration/after-homepage.jpg"
                  beforeAlt="VF Immigration homepage before redesign"
                  afterAlt="VF Immigration homepage after redesign"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.05}>
              <h3 className="text-lg font-semibold">The consultations</h3>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink/70">
                Services were reorganized according to their price and
                duration. The goal was to visually compare the services
                offered and let users choose the most suitable option for
                their needs.
              </p>
              <div className="mt-6">
                <BeforeAfterSlider
                  before="/images/vf-immigration/before-consultations.jpg"
                  after="/images/vf-immigration/after-consultations.jpg"
                  beforeAlt="VF Immigration consultations page before redesign"
                  afterAlt="VF Immigration consultations page after redesign"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.05}>
              <h3 className="text-lg font-semibold">The contact page</h3>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink/70">
                The goal was to reduce the number of users filling out a
                form for simple questions — an economic loss for Valérie.
                Her Facebook Lives were better highlighted to redirect these
                users, while genuine prospects still had the full
                representation form.
              </p>
              <div className="mt-6">
                <BeforeAfterSlider
                  before="/images/vf-immigration/before-contact.jpg"
                  after="/images/vf-immigration/after-contact.jpg"
                  beforeAlt="VF Immigration contact page before redesign"
                  afterAlt="VF Immigration contact page after redesign"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.05}>
              <h3 className="text-lg font-semibold">Come to Canada</h3>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink/70">
                The redesign of this page aimed to improve navigation so
                users can more easily and quickly recognize themselves in a
                given category.
              </p>
              <div className="mt-6">
                <BeforeAfterSlider
                  before="/images/vf-immigration/before-canada.jpg"
                  after="/images/vf-immigration/after-canada.jpg"
                  beforeAlt="VF Immigration Come to Canada page before redesign"
                  afterAlt="VF Immigration Come to Canada page after redesign"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* 07 — Mobile, reconsidered */}
      <section className="px-6 py-16 md:px-12" style={{ backgroundColor: "#F5F3F0" }}>
        <AnimatedSection className="mx-auto flex max-w-4xl flex-col items-start gap-8 sm:flex-row sm:items-center">
          <span
            className="font-display text-6xl italic tracking-tightest sm:text-7xl"
            style={{ color: RED }}
          >
            60%
          </span>
          <div>
            <h2 className="font-display text-2xl font-normal italic tracking-tightest sm:text-3xl">
              Mobile, reconsidered
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-ink/80">
              60% of user sessions occurred on mobile, making a
              mobile-friendly redesign essential to converting more visitors
              into clients.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Learnings */}
      <section className="px-6 py-16 md:px-12">
        <AnimatedSection className="mx-auto max-w-4xl">
          <h2 className="font-display text-2xl font-normal italic tracking-tightest sm:text-3xl">
            My learnings
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold">
                Working with constraints
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                Designing within Wix limited customization — some effects,
                like a navbar shadow, simply weren&apos;t available. Given
                time and simplicity constraints, sticking with the existing
                platform was the right call.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">
                Working independently
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                Having carte blanche on the artistic direction pushed me to
                set my own deadlines and refine how I manage a solo project
                end-to-end.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <ContactCTA />
    </>
  );
}
