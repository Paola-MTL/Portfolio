import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const ASSETS = "/images/vf-immigration/ia";

const bodyText =
  "max-w-[700px] font-body text-base leading-relaxed text-[#1e1e1e] lg:text-[16px] lg:leading-[20px]";
const subheading =
  "font-body text-base font-semibold text-black lg:text-[16px] lg:leading-[20px]";

const guidelines = [
  "Simple vocabulary, accessible to everyone",
  "Content that can adapt to frequent changes",
  "Categories better defined according to user profiles",
  "Conciseness of information",
  "Hierarchy of information",
];

type Sitemap = {
  src: string;
  alt: string;
  // Frame size in the design (px); drives aspect ratio and relative width.
  w: number;
  h: number;
  // Relative width in the side-by-side layout (matches w).
  flexClassName: string;
  // Crop of the source image within the frame, as % of the frame.
  crop: { left: string; top: string; width: string; height: string };
};

const sitemaps: Sitemap[] = [
  {
    src: `${ASSETS}/sitemap-old.jpg`,
    alt: "Old VF Immigration sitemap: Homepage, Coming to Canada, Contact and Store",
    w: 377,
    h: 308.486,
    flexClassName: "md:flex-[377_1_0%]",
    crop: { left: "-13.66%", top: "-16.88%", width: "132.3%", height: "124.87%" },
  },
  {
    src: `${ASSETS}/sitemap-new.jpg`,
    alt: "New VF Immigration sitemap: Homepage, Immigration pathways, Contact and Consultations",
    w: 502,
    h: 420.564,
    flexClassName: "md:flex-[502_1_0%]",
    crop: { left: "0%", top: "-14.45%", width: "100%", height: "121.96%" },
  },
];

export default function InformationArchitectureSection() {
  return (
    <div className="flex flex-col gap-6">
      <AnimatedSection className="flex flex-col gap-4">
        <h3 className={subheading}>Content Design</h3>
        <p className={bodyText}>
          One of the biggest challenges in this project was the overhaul of
          the content. The challenge was significant because the field of
          immigration remains a complex topic, and after numerous meetings to
          understand the intricacies of immigration, I revised the writing
          following these guidelines:
        </p>
        <ul className={`${bodyText} list-disc pl-6`}>
          {guidelines.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </AnimatedSection>

      <AnimatedSection className="flex flex-col gap-4">
        <h3 className={subheading}>Improvement of navigation</h3>
        <p className={bodyText}>
          To facilitate information search as well as the appointment
          process, the structure of the site was rethought as follows:
        </p>
      </AnimatedSection>

      <AnimatedSection
        delay={0.05}
        className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-4"
      >
        {sitemaps.map((s) => (
          <div
            key={s.src}
            className={`relative w-full max-w-[502px] overflow-hidden md:min-w-0 md:max-w-none ${s.flexClassName}`}
            style={{ aspectRatio: `${s.w} / ${s.h}` }}
          >
            <div className="absolute" style={s.crop}>
              <Image
                src={s.src}
                alt={s.alt}
                fill
                sizes="(min-width: 1024px) 670px, (min-width: 768px) 70vw, 130vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </AnimatedSection>
    </div>
  );
}
