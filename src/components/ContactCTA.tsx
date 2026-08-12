import AnimatedSection from "./AnimatedSection";

export default function ContactCTA() {
  return (
    <section className="bg-ink px-6 py-24 text-paper md:px-12 md:py-32">
      <AnimatedSection className="flex flex-col items-start gap-8">
        <h2 className="font-display text-4xl font-medium tracking-tightest text-balance sm:text-6xl">
          Do you like what you see?
        </h2>
        <p className="text-lg text-paper/70">We may be a match.</p>
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:cejoco.paola@gmail.com"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-paper transition-transform duration-300 hover:scale-105"
          >
            Shoot me a message!
          </a>
          <a
            href="https://www.linkedin.com/in/paola-cejoco/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-paper/30 px-6 py-3 text-sm font-medium transition-colors duration-300 hover:bg-paper hover:text-ink"
          >
            My LinkedIn
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}
