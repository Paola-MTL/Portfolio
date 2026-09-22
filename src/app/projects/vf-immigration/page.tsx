import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import BackButton from "@/components/BackButton";
import MockupsSection from "./MockupsSection";
import ScrollDownHint from "./ScrollDownHint";
import ProcessCarousel, { type ProcessStep } from "./ProcessCarousel";
import ResearchSection from "./ResearchSection";
import InformationArchitectureSection from "./InformationArchitectureSection";
import WireframesSection from "./WireframesSection";
import VisualIdentitySection from "./VisualIdentitySection";
import WebVersionSection from "./WebVersionSection";
import MobileVersionSection from "./MobileVersionSection";

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

type TitledRow = { title: string; body: string };

// Bold title on the left, paragraph on the right; stacks on mobile.
function TitledRows({ items }: { items: TitledRow[] }) {
  return (
    <div className="flex flex-col gap-8">
      {items.map((item) => (
        <AnimatedSection
          key={item.title}
          className="flex flex-col gap-4 md:flex-row md:gap-6"
        >
          <h3 className="font-body text-base font-semibold text-black md:w-[342px] md:shrink-0 lg:text-[16px] lg:leading-[20px]">
            {item.title}
          </h3>
          <p className="max-w-[700px] font-body text-sm leading-relaxed text-[#1e1e1e] md:flex-1 lg:text-[16px] lg:leading-[20px]">
            {item.body}
          </p>
        </AnimatedSection>
      ))}
    </div>
  );
}

const challenges: TitledRow[] = [
  {
    title: "Organize complex information and make it accessible for everyone",
    body: "One of the biggest challenges in redesigning VF Immigration was to simplify and organize complex information. The goal was to cater to a wide range of users who have different levels of familiarity with the immigration processes.",
  },
  {
    title: "Create a flexible layout that would suit the client and industry's needs",
    body: "Another challenge was to create a website that could adapt to the constant changes in the industry. It was necessary to create components that were flexible and that Valérie could reuse (editable in the CMS). Immigration processes sometimes change names and evolve over time, which had to be taken into account in the designs. For example, an update to an immigration program would be highlighted with an alert banner. This also legitimizes VF immigration and shows that Valérie is always aware of the latest developments.",
  },
];

const learnings: TitledRow[] = [
  {
    title: "Working with certain constraints",
    body: "One of the challenges as a UI designer was working with the Wix platform, which limited my ability to customize designs. Unfortunately, some effects were not available (for example, adding a shadow effect to the navigation bar to improve contrast on certain pages). This platform was already used by VF Immigration, and due to time and simplicity concerns, it was preferable to stick with this platform.",
  },
  {
    title: "Working independently",
    body: "I was given free rein over the artistic direction of the site, which also pushed me to set deadlines and reassess my working methods to avoid spreading myself too thin.",
  },
  {
    title: "Working in a family context",
    body: "Throughout this project, I worked for my mother-in-law as well as my partner, which can sometimes be challenging in terms of decision-making. With everyone wanting to add their input, it was sometimes necessary to objectively steer each person's opinions to prioritize the user.",
  },
];

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

          <div className="w-full max-w-xl lg:absolute lg:left-1/2 lg:top-1/2 lg:w-[571px] lg:max-w-none lg:-translate-x-1/2 lg:-translate-y-1/2">
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

      {/* 03 — Information Architecture */}
      <section className="px-6 py-16 md:px-12 lg:px-[104px] lg:py-28">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <SectionIntro
              index="03"
              title="Information Architecture"
              titleColor={CORAL}
            />
          </AnimatedSection>
          <InformationArchitectureSection />
        </div>
      </section>

      {/* 04 — Wireframes */}
      <section className="px-6 py-16 md:px-12 lg:px-[104px] lg:py-28">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <SectionIntro index="04" title="Wireframes" titleColor={CORAL} />
          </AnimatedSection>
          <WireframesSection />
        </div>
      </section>

      {/* 05 — Visual Identity */}
      <section className="px-6 py-16 md:px-12 lg:px-[104px] lg:py-28">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <SectionIntro index="05" title="Visual Identity" titleColor={CORAL} />
          </AnimatedSection>
          <VisualIdentitySection />
        </div>
      </section>

      {/* 06 — The modernized web version */}
      <section className="px-6 py-16 md:px-12 lg:px-[104px] lg:py-28">
        <AnimatedSection className="mx-auto max-w-5xl">
          <SectionIntro
            index="06"
            title="The modernized web version"
            titleColor={CORAL}
          />
        </AnimatedSection>
        <WebVersionSection />
      </section>

      {/* 07 — The redesigned mobile version */}
      <section className="px-6 py-16 md:px-12 lg:px-[104px] lg:pb-0 lg:pt-28">
        <AnimatedSection className="mx-auto max-w-5xl">
          <SectionIntro
            index="07"
            title="The Redesigned Mobile Version"
            titleColor={CORAL}
          />
        </AnimatedSection>
        <MobileVersionSection />
      </section>

      {/* 08 — The challenges */}
      <section className="px-6 py-16 md:px-12 lg:px-[104px] lg:py-28">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <SectionIntro index="08" title="The challenges" titleColor={CORAL} />
          </AnimatedSection>
          <TitledRows items={challenges} />
        </div>
      </section>

      {/* 09 — My learnings */}
      <section className="px-6 py-16 md:px-12 lg:px-[104px] lg:py-28">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection>
            <SectionIntro index="09" title="My Learnings" titleColor={CORAL} />
          </AnimatedSection>
          <TitledRows items={learnings} />
        </div>
      </section>

      {/* Contact — Elia's layout in the hero coral */}
      <section style={{ backgroundColor: CORAL }}>
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
              style={{ color: CORAL }}
            >
              Shoot me a message
            </a>
            <a
              href="https://www.linkedin.com/in/paola-cejoco/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-[30px] border border-solid border-white px-[32px] py-[12px] font-body text-[16px] font-semibold leading-[20px] whitespace-nowrap text-white transition-colors hover:bg-white hover:text-[#F03241]"
            >
              My LinkedIn
            </a>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
