import AnimatedSection from "./AnimatedSection";

export default function ContactCTA() {
  return (
    <section className="bg-teal px-6 py-24 text-white md:px-12 md:py-32">
      <AnimatedSection className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-display text-4xl font-normal italic tracking-tightest text-balance sm:text-6xl">
          Do you like what you see?
        </h2>
        <p className="text-lg text-white/70">We may be a match.</p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:cejoco.paola@gmail.com"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-teal transition-transform duration-300 hover:scale-105"
          >
            Shoot me a message!
          </a>
          <a
            href="https://www.linkedin.com/in/paola-cejoco/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold transition-colors duration-300 hover:bg-white hover:text-teal"
          >
            My LinkedIn
          </a>
        </div>
      </AnimatedSection>
    </section>
  );
}
