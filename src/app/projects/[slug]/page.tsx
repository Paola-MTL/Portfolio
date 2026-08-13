import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projectDetails, projects } from "@/data/projects";
import AnimatedSection from "@/components/AnimatedSection";
import ContactCTA from "@/components/ContactCTA";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projectDetails[params.slug];
  if (!project) return {};
  return {
    title: `${project.name} — Paola Cejoco`,
    description: project.tagline,
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projectDetails[params.slug];
  if (!project) notFound();

  return (
    <>
      <section
        className="px-6 pb-16 pt-32 text-paper md:px-12 md:pt-40"
        style={{ backgroundColor: project.color }}
      >
        <AnimatedSection>
          <Link
            href="/#projects"
            className="mb-8 inline-block text-sm text-paper/70 transition-colors hover:text-paper"
          >
            ← Back to projects
          </Link>
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-paper/70">
            {project.name}
          </p>
          <h1 className="font-display text-4xl font-normal italic tracking-tightest text-balance sm:text-6xl">
            {project.tagline}
          </h1>

          <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-paper/20 pt-8 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-paper/60">
                Role
              </dt>
              <dd className="mt-1 text-sm">{project.role}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-paper/60">
                Duration
              </dt>
              <dd className="mt-1 text-sm">{project.duration}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-paper/60">
                Collaboration
              </dt>
              <dd className="mt-1 text-sm">
                {project.collaboration.join(" · ")}
              </dd>
            </div>
          </dl>
        </AnimatedSection>
      </section>

      <section className="px-6 md:px-12">
        <AnimatedSection>
          <div className="relative mx-auto -mt-8 aspect-[16/10] w-full max-w-4xl overflow-hidden rounded-2xl shadow-xl sm:-mt-16">
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(min-width: 1024px) 896px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </AnimatedSection>
      </section>

      <section className="px-6 py-16 md:px-12">
        <AnimatedSection className="max-w-3xl">
          <p className="text-lg leading-relaxed text-ink/80">
            {project.about}
          </p>
        </AnimatedSection>

        <div className="mt-16 flex flex-col gap-16">
          {project.sections.map((section, i) => (
            <AnimatedSection
              key={section.title}
              delay={i * 0.05}
              className="grid grid-cols-1 gap-4 border-t border-ink/10 pt-10 md:grid-cols-[80px_1fr]"
            >
              <span className="text-sm text-muted">{section.heading}</span>
              <div>
                <h2 className="font-display text-2xl font-normal italic tracking-tightest sm:text-3xl">
                  {section.title}
                </h2>
                <div className="mt-4 flex max-w-3xl flex-col gap-4 text-base leading-relaxed text-ink/80">
                  {section.body.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                {section.screenshots && (
                  <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {section.screenshots.map((shot) => (
                      <div key={shot.label}>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-ink/10 shadow-sm">
                          <Image
                            src={shot.image}
                            alt={shot.label}
                            fill
                            sizes="(min-width: 640px) 33vw, 100vw"
                            className="object-cover object-top"
                          />
                        </div>
                        <p className="mt-2 text-center text-sm italic text-muted">
                          {shot.label}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {section.features && (
                  <div className="mt-12 flex flex-col gap-16">
                    {section.features.map((feature) => (
                      <div key={feature.title}>
                        <h3 className="text-lg font-semibold">
                          {feature.title}
                        </h3>
                        <p className="mt-2 max-w-3xl text-base leading-relaxed text-ink/70">
                          {feature.body}
                        </p>

                        {feature.comparison && (
                          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                              <div className="relative aspect-[8/5] overflow-hidden rounded-xl border border-ink/10">
                                <Image
                                  src={feature.comparison.before}
                                  alt={`${feature.title} — before`}
                                  fill
                                  sizes="(min-width: 640px) 50vw, 100vw"
                                  className="object-cover object-top"
                                />
                              </div>
                              <p className="mt-2 text-center text-sm italic text-muted">
                                Before
                              </p>
                            </div>
                            <div>
                              <div className="relative aspect-[8/5] overflow-hidden rounded-xl border border-ink/10">
                                <Image
                                  src={feature.comparison.after}
                                  alt={`${feature.title} — after`}
                                  fill
                                  sizes="(min-width: 640px) 50vw, 100vw"
                                  className="object-cover object-top"
                                />
                              </div>
                              <p className="mt-2 text-center text-sm italic text-muted">
                                After
                              </p>
                            </div>
                          </div>
                        )}

                        {feature.image && (
                          <div className="relative mt-6 aspect-[16/10] w-full max-w-2xl overflow-hidden rounded-xl border border-ink/10">
                            <Image
                              src={feature.image}
                              alt={feature.title}
                              fill
                              sizes="(min-width: 1024px) 672px, 100vw"
                              className="object-cover object-top"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>

        {project.process && (
          <AnimatedSection className="mt-16 border-t border-ink/10 pt-10">
            <h2 className="font-display text-2xl font-normal italic tracking-tightest sm:text-3xl">
              The process
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {project.process.map((step) => (
                <div key={step.index} className="rounded-2xl bg-ink/5 p-5">
                  <span className="text-xs text-muted">{step.index}</span>
                  <h3 className="mt-2 text-sm font-semibold uppercase tracking-[0.1em]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/70">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        )}

        {project.learnings.length > 0 && (
          <AnimatedSection className="mt-16 border-t border-ink/10 pt-10">
            <h2 className="font-display text-2xl font-normal italic tracking-tightest sm:text-3xl">
              My learnings
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {project.learnings.map((learning) => (
                <div key={learning.title}>
                  <h3 className="text-sm font-semibold">{learning.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">
                    {learning.body}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        )}
      </section>

      <ContactCTA />
    </>
  );
}
