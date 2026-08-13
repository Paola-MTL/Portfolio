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
      <section className="flex min-h-[70vh] flex-col items-center justify-center gap-4 bg-teal px-6 text-center text-white md:px-12">
        <AnimatedSection className="flex flex-col items-center gap-4">
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">
            About me
          </p>
          <h1 className="font-display text-5xl font-normal italic tracking-tightest text-balance sm:text-6xl md:text-7xl">
            Hello, I&apos;m Paola
          </h1>
        </AnimatedSection>
      </section>

      <section className="px-6 pb-24 pt-20 md:px-12">
        <Timeline />
      </section>

      <ContactCTA />
    </>
  );
}
