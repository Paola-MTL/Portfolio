import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import BackButton from "@/components/BackButton";
import ContactCTA from "@/components/ContactCTA";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import MockupsSection from "./MockupsSection";
import ScrollDownHint from "./ScrollDownHint";

const GREEN = "#0C2925";
const TEAL = "#74AEB2";

export const metadata: Metadata = {
  title: "KC Rentals — Paola Cejoco",
  description: "Redesigning the website of a real estate agency.",
};

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <span
        className="flex size-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
        style={{ backgroundColor: GREEN }}
      >
        {index}
      </span>
      <h2 className="font-display text-2xl font-normal italic tracking-tightest sm:text-3xl">
        {title}
      </h2>
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
                  attract new clients and better showcase the products
                  offered, in order to convert visitors into actual clients.
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

            <AnimatedSection delay={0.1} className="flex w-full flex-col gap-6 sm:w-56 lg:gap-[24px]">
              <div>
                <p className="font-body text-base font-medium tracking-tight text-black lg:text-[20px] lg:tracking-[-0.2px]">
                  Role
                </p>
                <p className="mt-1 font-body text-sm text-black lg:text-[16px]">Web Designer</p>
              </div>
              <div>
                <p className="font-body text-base font-medium tracking-tight text-black lg:text-[20px] lg:tracking-[-0.2px]">
                  Duration
                </p>
                <p className="mt-1 font-body text-sm text-black lg:text-[16px]">2 months</p>
              </div>
              <div>
                <p className="font-body text-base font-medium tracking-tight text-black lg:text-[20px] lg:tracking-[-0.2px]">
                  Project type
                </p>
                <p className="mt-1 font-body text-sm leading-relaxed text-black lg:text-[14px]">Web Design</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Mockups */}
      <MockupsSection />

      {/* 01 — Visual identity */}
      <section className="px-6 py-16 md:px-12">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection>
            <SectionHeading index="01" title="Visual identity" />
            <p className="text-base leading-relaxed text-ink/80">
              The original palette read more &ldquo;chocolate shop&rdquo;
              than real estate agency. Green was chosen for its association
              with security and nature — omnipresent in the south of France
              — while peach orange, in contrast, accents CTAs and
              highlights. Typography: Noto Serif and Cabin Regular.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-ink/10 p-5">
                <p className="mb-3 text-xs uppercase tracking-[0.15em] text-muted">
                  Before
                </p>
                <div className="flex gap-3">
                  <span
                    className="size-10 rounded-full border border-ink/10 shadow-sm"
                    style={{ backgroundColor: "#3F2A1A" }}
                    aria-label="Dark brown"
                  />
                  <span
                    className="size-10 rounded-full border border-ink/10 shadow-sm"
                    style={{ backgroundColor: "#C9A25C" }}
                    aria-label="Gold"
                  />
                </div>
                <p className="mt-3 text-sm text-muted">
                  Read as a chocolate shop, not an agency
                </p>
              </div>
              <div className="rounded-2xl border border-ink/10 p-5">
                <p className="mb-3 text-xs uppercase tracking-[0.15em] text-muted">
                  After
                </p>
                <div className="flex gap-3">
                  <span
                    className="size-10 rounded-full border border-ink/10 shadow-sm"
                    style={{ backgroundColor: GREEN }}
                    aria-label="Forest green"
                  />
                  <span
                    className="size-10 rounded-full border border-ink/10 shadow-sm"
                    style={{ backgroundColor: "#E0A458" }}
                    aria-label="Peach orange"
                  />
                </div>
                <p className="mt-3 text-sm text-muted">
                  Security &amp; nature, with peach-orange accents on CTAs
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 02 — The modernized web version */}
      <section className="px-6 py-16 md:px-12" style={{ backgroundColor: "#F5F3F0" }}>
        <div className="mx-auto max-w-4xl">
          <AnimatedSection>
            <SectionHeading index="02" title="The modernized web version" />
            <p className="max-w-2xl text-base leading-relaxed text-ink/80">
              Drag each slider to compare the original site against the
              rebuild.
            </p>
          </AnimatedSection>

          <div className="mt-10 flex flex-col gap-16">
            <AnimatedSection delay={0.05}>
              <h3 className="text-lg font-semibold">The home page</h3>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink/70">
                A cleaner page that better illustrates Katia&apos;s core
                business. The menu has been simplified because some pages
                didn&apos;t add value or were repetitive — the user is no
                longer overwhelmed with information like in the old design.
              </p>
              <div className="mt-6">
                <BeforeAfterSlider
                  before="/images/kc-rentals/before-1.jpg"
                  after="/images/kc-rentals/after-1.jpg"
                  beforeAlt="KC Rentals homepage before redesign"
                  afterAlt="KC Rentals homepage after redesign"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.05}>
              <h3 className="text-lg font-semibold">
                Property search has been simplified
              </h3>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink/70">
                In the previous design, finding a property type meant going
                through a submenu, so I added a filter directly on the
                properties page that targets the search immediately. By
                default, the best properties are shown for those without
                specific criteria.
              </p>
              <div className="mt-6">
                <BeforeAfterSlider
                  before="/images/kc-rentals/before-2.jpg"
                  after="/images/kc-rentals/after-2.jpg"
                  beforeAlt="KC Rentals property search before redesign"
                  afterAlt="KC Rentals property search after redesign"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.05}>
              <h3 className="text-lg font-semibold">
                Each property is showcased and linked to a request for a
                quote
              </h3>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink/70">
                To better highlight each property, photos take on a more
                prominent role on every page, and a CTA is placed
                prominently to convert potential clients more quickly.
              </p>
              <div className="relative mt-6 aspect-[8/5] w-full max-w-2xl overflow-hidden rounded-2xl border border-ink/10 shadow-sm">
                <Image
                  src="/images/kc-rentals/feature-1.jpg"
                  alt="A KC Rentals property page with a prominent quote request CTA"
                  fill
                  sizes="(min-width: 1024px) 672px, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.05}>
              <h3 className="text-lg font-semibold">Enhanced legitimacy</h3>
              <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink/70">
                To meet the need for credibility, partner sections and
                customer reviews were added to reassure users.
              </p>
              <div className="relative mt-6 aspect-[8/5] w-full max-w-2xl overflow-hidden rounded-2xl border border-ink/10 shadow-sm">
                <Image
                  src="/images/kc-rentals/feature-2.jpg"
                  alt="A KC Rentals customer testimonial and partner logos section"
                  fill
                  sizes="(min-width: 1024px) 672px, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Finished site showcase */}
      <section className="px-6 py-16 md:px-12">
        <AnimatedSection className="mx-auto max-w-4xl">
          <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-ink/10 shadow-sm">
            <Image
              src="/images/kc-rentals/hero-1.jpg"
              alt="A collage of the finished KC Rentals website across pages"
              fill
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-cover object-center"
            />
          </div>
          <p className="mt-3 text-center text-sm italic text-muted">
            The finished site
          </p>
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
                Working with a new platform
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                KC Rentals was my first freelance project and my first time
                on Wix. Katia can now add properties herself without a
                third party — and I came away understanding both CMS
                workflows and practical SEO.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">
                Developing my creative side
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                As sole designer, I owned the artistic direction
                end-to-end — a real exercise in self-direction, confidence,
                and follow-through.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <ContactCTA />
    </>
  );
}
