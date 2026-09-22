import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";

const ASSETS = "/images/vf-immigration";

const bodyText =
  "max-w-[700px] font-body text-sm leading-relaxed text-[#1e1e1e] lg:text-[16px] lg:leading-[20px]";

type Shot = {
  src: string;
  alt: string;
  // Frame size in the design (px), used for aspect ratio.
  w: number;
  h: number;
  // Optional crop of the image within the frame (% of frame); otherwise cover.
  crop?: { left: string; width: string };
};

type Page = {
  title: string;
  body: string;
  before: Shot;
  after: Shot;
  // Vertical gap between screenshot and caption.
  captionGap: string;
  afterCaptionSize?: string;
};

const pages: Page[] = [
  {
    title: "The homepage",
    body: "A page that reflects Valérie, more streamlined, where information is organized and the offered services are highlighted.",
    before: {
      src: `${ASSETS}/research/heuristics-home.png`,
      alt: "Original VF Immigration homepage",
      w: 524,
      h: 285,
    },
    after: {
      src: `${ASSETS}/web/homepage-after.png`,
      alt: "Redesigned VF Immigration homepage",
      w: 524.796,
      h: 286,
    },
    captionGap: "gap-2",
    afterCaptionSize: "lg:text-[16px]",
  },
  {
    title: "Consultations",
    body: "The services have been reorganized according to their price and duration. The goal was also to allow for better visual comparison of the offered services and enable users to choose the most suitable one according to their needs.",
    before: {
      src: `${ASSETS}/web/consultations-before.png`,
      alt: "Original VF Immigration consultations page",
      w: 524,
      h: 265,
    },
    after: {
      src: `${ASSETS}/web/consultations-after.png`,
      alt: "Redesigned VF Immigration consultations page comparing services by price",
      w: 524,
      h: 265,
    },
    captionGap: "gap-4",
  },
  {
    title: "The contact page",
    body: "The goal here was to reduce the number of users filling out a form to ask simple questions, as they represented an economic loss for Valérie. Her Facebook Lives have therefore been better highlighted to redirect these users to this channel. Genuine potential clients still have the option to fill out the representation form to be supported from A to Z by Valérie.",
    before: {
      src: `${ASSETS}/web/contact-before.png`,
      alt: "Original VF Immigration information request form",
      w: 524,
      h: 265,
      crop: { left: "-0.38%", width: "100.76%" },
    },
    after: {
      src: `${ASSETS}/web/contact-after.png`,
      alt: "Redesigned VF Immigration contact page highlighting Facebook Lives",
      w: 524,
      h: 265,
      crop: { left: "-1.15%", width: "102.29%" },
    },
    captionGap: "gap-4",
  },
];

function Screenshot({
  shot,
  caption,
  gap,
  captionSize = "",
}: {
  shot: Shot;
  caption: string;
  gap: string;
  captionSize?: string;
}) {
  const sizes = "(min-width: 1024px) 524px, (min-width: 768px) 50vw, 100vw";
  return (
    <figure className={`flex min-w-0 flex-1 flex-col items-center ${gap}`}>
      <div
        className="relative w-full overflow-hidden rounded-xl shadow-[0px_4px_30px_0px_rgba(0,0,0,0.2)]"
        style={{ aspectRatio: `${shot.w} / ${shot.h}` }}
      >
        {shot.crop ? (
          <div className="absolute inset-y-0" style={shot.crop}>
            <Image src={shot.src} alt={shot.alt} fill sizes={sizes} />
          </div>
        ) : (
          <Image
            src={shot.src}
            alt={shot.alt}
            fill
            sizes={sizes}
            className="object-cover"
          />
        )}
      </div>
      <figcaption
        className={`font-body text-sm italic leading-[20px] text-black ${captionSize}`}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

export default function WebVersionSection() {
  return (
    <div className="flex flex-col gap-16 lg:gap-28">
      {pages.map((page) => (
        <div key={page.title} className="flex flex-col gap-10 lg:gap-16">
          <AnimatedSection className="mx-auto w-full max-w-5xl">
            <div className="flex flex-col gap-4 md:flex-row md:gap-6">
              <h3 className="font-body text-base font-semibold text-black md:w-[342px] md:shrink-0 lg:text-[16px] lg:leading-[20px]">
                {page.title}
              </h3>
              <p className={`${bodyText} md:flex-1`}>{page.body}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection
            delay={0.05}
            className="mx-auto flex w-full max-w-[1072px] flex-col gap-8 md:flex-row md:items-start md:gap-6"
          >
            <Screenshot
              shot={page.before}
              caption="Before"
              gap={page.captionGap}
            />
            <Screenshot
              shot={page.after}
              caption="After"
              gap={page.captionGap}
              captionSize={page.afterCaptionSize}
            />
          </AnimatedSection>

        </div>
      ))}
    </div>
  );
}
