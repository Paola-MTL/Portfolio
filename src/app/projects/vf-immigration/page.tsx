import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ContactCTA from "@/components/ContactCTA";
import BeforeAfterSlider from "./BeforeAfterSlider";

const RED = "#D6021E";

export const metadata: Metadata = {
  title: "VF Immigration — Paola Cejoco",
  description: "Redesigning an immigration consultation website.",
};

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
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/vf-immigration/after-homepage.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[75%_15%] opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/95 to-ink/60" />
        </div>

        <div className="relative px-6 pb-20 pt-32 md:px-12 md:pt-40">
          <AnimatedSection>
            <Link
              href="/#projects"
              className="mb-8 inline-block text-sm text-white/60 transition-colors hover:text-white"
            >
              ← Back to projects
            </Link>
            <p
              className="mb-4 text-sm font-semibold uppercase tracking-[0.25em]"
              style={{ color: RED }}
            >
              VF Immigration · 2024
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-normal italic tracking-tightest text-balance sm:text-6xl">
              Modernizing trust, without losing the brand
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              VF Immigration is an immigration consulting agency established
              since 2016 in Montreal. Valérie, the president, needed to
              modernize her site without changing the logo, so both new and
              old clients could still recognize the brand — and to improve
              her productivity by automating processes that generated
              unnecessary emails.
            </p>

            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-white/15 pt-8 sm:grid-cols-3 sm:max-w-xl">
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-white/50">
                  Role
                </dt>
                <dd className="mt-1 text-sm">
                  UX Researcher / Product Designer
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-white/50">
                  Duration
                </dt>
                <dd className="mt-1 text-sm">4 months</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-white/50">
                  Collaboration
                </dt>
                <dd className="mt-1 text-sm">Web Design · Mobile Design</dd>
              </div>
            </dl>
          </AnimatedSection>
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

      {/* Narrative: 01–04 */}
      <section className="px-6 pb-8 md:px-12">
        <div className="mx-auto flex max-w-3xl flex-col gap-16">
          <AnimatedSection>
            <SectionHeading index="01" title="Visual identity" />
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

          <AnimatedSection>
            <SectionHeading index="02" title="The research phase" />
            <div className="flex flex-col gap-4 text-base leading-relaxed text-ink/80">
              <p>
                An audit of the existing site was conducted against Bastien
                &amp; Scapin&apos;s heuristic criteria and Nielsen&apos;s 10
                heuristics, revealing cognitive overload, a lack of visual
                content, and an unclear value proposition.
              </p>
              <p>
                Quantitative research showed a bounce rate over 60% on the
                homepage and that 80% of traffic was direct. User interviews
                with 5 profiles (Thinking Out Loud method) revealed
                confusion booking a consultation and difficulty comparing
                services.
              </p>
            </div>
          </AnimatedSection>

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
        </div>
      </section>

      {/* 05 — The modernized web version */}
      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <SectionHeading index="05" title="The modernized web version" />
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

      {/* 06 — Mobile, reconsidered */}
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
