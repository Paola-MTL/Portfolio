import Image from "next/image";
import { timeline } from "@/data/about";
import AnimatedSection from "./AnimatedSection";

export default function Timeline() {
  return (
    <div className="flex flex-col divide-y divide-ink/10 border-t border-ink/10">
      {timeline.map((entry, i) => (
        <AnimatedSection key={entry.title} delay={i * 0.05}>
          <div className="grid grid-cols-1 gap-4 py-12 md:grid-cols-[160px_1fr]">
            <span className="text-sm uppercase tracking-[0.15em] text-muted">
              {entry.years}
            </span>
            <div>
              <h3 className="font-display text-2xl font-normal italic tracking-tightest text-teal sm:text-3xl">
                {entry.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-accent">
                {entry.subtitle}
              </p>
              <div className="mt-4 flex flex-col gap-4 text-base leading-relaxed text-ink/80">
                {entry.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {entry.images && entry.images.length > 0 && (
                <div className="mt-6 flex gap-3 overflow-x-auto pb-2">
                  {entry.images.map((src) => (
                    <div
                      key={src}
                      className="relative h-40 w-32 shrink-0 overflow-hidden rounded-xl sm:h-52 sm:w-40"
                    >
                      <Image
                        src={src}
                        alt=""
                        fill
                        sizes="200px"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
