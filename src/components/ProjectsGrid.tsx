"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import AnimatedSection from "./AnimatedSection";

export default function ProjectsGrid() {
  return (
    <section id="projects" className="px-6 py-24 md:px-12 md:py-32">
      <AnimatedSection>
        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-muted">
          Selected work
        </p>
        <h2 className="font-display text-3xl font-medium tracking-tightest sm:text-4xl">
          My projects
        </h2>
      </AnimatedSection>

      <div className="mt-12 flex flex-col divide-y divide-ink/10 border-t border-ink/10">
        {projects.map((project, i) => (
          <AnimatedSection key={project.slug} delay={i * 0.08}>
            <Link href={`/projects/${project.slug}`} className="group block">
              <motion.div
                whileHover="hover"
                className="grid grid-cols-1 items-center gap-4 py-8 md:grid-cols-[auto_1fr_auto_auto] md:gap-8"
              >
                <span
                  className="h-3 w-3 shrink-0 rounded-full transition-transform duration-300 group-hover:scale-150"
                  style={{ backgroundColor: project.color }}
                />
                <div>
                  <h3 className="font-display text-2xl font-medium tracking-tightest sm:text-3xl">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted sm:text-base">
                    {project.tagline}
                  </p>
                </div>
                <span className="text-sm text-muted">{project.year}</span>
                <motion.span
                  variants={{
                    hover: { x: 8, opacity: 1 },
                  }}
                  initial={{ opacity: 0.4 }}
                  className="text-sm font-medium text-ink"
                >
                  View project →
                </motion.span>
              </motion.div>
            </Link>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
