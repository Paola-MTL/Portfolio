import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import Timeline from "@/components/Timeline";
import ContactCTA from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "About — Paola Cejoco",
};

export default function AboutPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-32 md:px-12 md:pt-40">
        <AnimatedSection>
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted">
            About me
          </p>
          <h1 className="font-display text-4xl font-medium tracking-tightest text-balance sm:text-6xl">
            Hello, I&apos;m Paola
          </h1>
        </AnimatedSection>
      </section>

      <section className="px-6 pb-24 md:px-12">
        <Timeline />
      </section>

      <ContactCTA />
    </>
  );
}
