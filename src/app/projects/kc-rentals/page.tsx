import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import ContactCTA from "@/components/ContactCTA";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

const GREEN = "#0C2925";

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
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/kc-rentals/after-1.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[60%_50%] opacity-50"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, #0C2925 0%, rgba(12,41,37,0.95) 40%, rgba(12,41,37,0.55) 100%)",
            }}
          />
        </div>

        <div className="relative px-6 pb-20 pt-32 md:px-12 md:pt-40">
          <AnimatedSection>
            <Link
              href="/#projects"
              className="mb-8 inline-block text-sm text-white/60 transition-colors hover:text-white"
            >
              ← Back to projects
            </Link>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-[#e0a458]">
              KC Rentals · 2023
            </p>
            <h1 className="max-w-3xl font-display text-4xl font-normal italic tracking-tightest text-balance sm:text-6xl">
              A brand that finally matches the properties
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              KC Rentals is a real estate agency established since 2016 in
              Mandelieu, in the South of France. Katia, the founder, needed
              to modernize her site and improve its SEO, since it no longer
              felt credible to clients and wasn&apos;t converting visitors.
              The challenge: keep the domain, email, and logo intact for
              recurring clients while improving legitimacy and
              discoverability.
            </p>

            <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-white/15 pt-8 sm:max-w-xl sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-white/50">
                  Role
                </dt>
                <dd className="mt-1 text-sm">Web Designer</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-white/50">
                  Duration
                </dt>
                <dd className="mt-1 text-sm">2 months</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-white/50">
                  Collaboration
                </dt>
                <dd className="mt-1 text-sm">Web Design</dd>
              </div>
            </dl>
          </AnimatedSection>
        </div>
      </section>

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
