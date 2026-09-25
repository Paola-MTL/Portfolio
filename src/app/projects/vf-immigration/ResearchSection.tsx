import Image from "next/image";
import { Manrope } from "next/font/google";
import AnimatedSection from "@/components/AnimatedSection";

const manrope = Manrope({ subsets: ["latin"], weight: ["500", "600", "800"] });

const CORAL = "#F03241";
const DARK = "#333232";
const ASSETS = "/images/vf-immigration/research";

/* ---------- Heuristic evaluation ---------- */

type Badge = { n: string; dark?: boolean; outlined?: boolean };

function ViolationBadge({ n, dark, outlined }: Badge) {
  return (
    <span
      className={`flex size-[19px] shrink-0 items-center justify-center rounded-full font-body text-[8.636px] font-medium leading-[10.364px] tracking-[-0.0864px] text-white ${outlined ? "border-[0.5px] border-white" : ""}`}
      style={{ backgroundColor: dark ? DARK : CORAL }}
    >
      {n}
    </span>
  );
}

type Marker = Badge & { left: string; top: string };

type AuditShot = {
  src: string;
  alt: string;
  caption: string;
  imgClassName: string;
  frameClassName?: string;
  sizes: string;
  markers: Marker[];
};

// Marker positions are percentages of the 413×233 screenshot frame.
const auditShots: AuditShot[] = [
  {
    src: `${ASSETS}/heuristics-home.png`,
    alt: "Annotated audit of the original VF Immigration home page",
    caption: "Home page",
    imgClassName: "object-cover",
    sizes: "(min-width: 1024px) 504px, (min-width: 768px) 50vw, 100vw",
    markers: [
      { n: "2", left: "85.47%", top: "20.17%" },
      { n: "4", left: "25.67%", top: "10.73%" },
      { n: "2", left: "33.66%", top: "57.08%", dark: true, outlined: true },
      { n: "4", left: "61.26%", top: "2.58%" },
    ],
  },
  {
    src: `${ASSETS}/heuristics-canada.png`,
    alt: "Annotated audit of the original “Coming to Canada” page",
    caption: "Page “Coming to Canada”",
    imgClassName:
      "!left-[-15.47%] !top-[-9.66%] !h-[131.75%] !w-[139.19%] !max-w-none",
    frameClassName: "border border-[#d9d9d9]",
    // Image is rendered at ~139% of the frame width to crop it.
    sizes: "(min-width: 1024px) 702px, (min-width: 768px) 70vw, 140vw",
    markers: [
      { n: "8", left: "19.37%", top: "19.05%" },
      { n: "1", left: "19.37%", top: "40.48%", dark: true },
      { n: "2", left: "72.4%", top: "76.19%", dark: true },
    ],
  },
];

const violationGroups: { title: string; items: Badge[]; labels: string[] }[] = [
  {
    title: "Violations of Nielsen’s 10 heuristic principles",
    items: [{ n: "2" }, { n: "4" }, { n: "8" }],
    labels: [
      "Match between system and the real world",
      "Conventions and standards",
      "Aesthetic and minimalist design",
    ],
  },
  {
    title: "Violations of Bastien and Scapin’s criteria",
    items: [
      { n: "1", dark: true },
      { n: "2", dark: true },
      { n: "6", dark: true },
    ],
    labels: [
      "Guidance - Grouping / Distinction between items",
      "Workload",
      "Homogeneity / Consistency",
    ],
  },
];

/* ---------- Text blocks ---------- */

const bodyText =
  "max-w-[700px] font-body text-base leading-relaxed text-[#1e1e1e] lg:text-[16px] lg:leading-[20px]";

function Block({
  title,
  intro,
  lead,
  bullets,
}: {
  title: string;
  intro: string;
  lead?: string;
  bullets?: string[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-body text-base font-semibold text-black lg:text-[16px] lg:leading-[20px]">
        {title}
      </h3>
      <p className={bodyText}>{intro}</p>
      {bullets && (
        <div className={bodyText}>
          {lead && <p>{lead}</p>}
          <ul className="list-disc pl-5">
            {bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

/* ---------- Personas ---------- */

type Persona = {
  name: string;
  role: string;
  photo: {
    src: string;
    mask: string;
    size: number;
    w: number;
    h: number;
    x: number;
    y: number;
  };
  details: [string, string][];
  quote: string;
  quoteIcon: string;
  personality: string[];
  bio: string;
  needs: string[];
  frustrations: string[];
  channels: {
    icon: string;
    label: string;
    w: number;
    h: number;
    boxClassName?: string;
  }[];
  platforms: { label: string; fill: number }[];
  bg: string;
  bullet: string;
};

const linkedin = {
  icon: `${ASSETS}/icon-linkedin.svg`,
  label: "LinkedIn",
  w: 16.044,
  h: 16.044,
};
const facebook = {
  icon: `${ASSETS}/icon-facebook.svg`,
  label: "Facebook",
  w: 16.044,
  h: 16.044,
};
const wordOfMouth = {
  icon: `${ASSETS}/icon-ear.svg`,
  label: "Word of mouth",
  w: 16.044,
  h: 16.044,
  boxClassName: "w-[47.558px]",
};
const websites = {
  icon: `${ASSETS}/icon-web.svg`,
  label: "Websites",
  w: 14.5158,
  h: 11.8418,
  boxClassName: "w-[32.66px] text-center",
};

const personas: Persona[] = [
  {
    name: "Claire Dubois",
    role: "Young professional",
    photo: {
      src: `${ASSETS}/persona-claire.jpg`,
      mask: `${ASSETS}/persona-claire-mask.svg`,
      size: 51.569,
      w: 89.881,
      h: 134.821,
      x: -19.1,
      y: -15.842,
    },
    details: [
      ["Age", "29"],
      ["Education", "Master’s in Marketing"],
      ["Status", "In a relationship"],
      ["Occupation", "Marketing Specialist"],
      ["Location", "Montreal, QC"],
      ["Nationality", "French"],
      ["Status in Canada", "Temporary resident"],
      ["English level", "Advanced"],
      ["French level", "Native"],
    ],
    quote:
      "I wish to apply for permanent residency. I need advice and information.",
    quoteIcon: `${ASSETS}/quote-claire.svg`,
    personality: ["Open-minded", "Busy", "Social", "Ambitious"],
    bio: "She currently lives in Montreal. She has completed her master’s in business and holds a post-graduation work permit. She lives with her partner and enjoys hiking with friends on weekends.",
    needs: [
      "Wants to extend her stay in Canada",
      "Looking to obtain an open work permit or her permanent residency",
      "Seeking a reliable immigration expert to handle her case",
      "Looking for someone responsive to answer her questions",
    ],
    frustrations: [
      "She is confused about the different options available to her after a temporary visa",
      "She struggles to fill out her information in the government immigration forms",
      "She has little time to start her immigration process",
    ],
    channels: [linkedin, wordOfMouth, websites],
    platforms: [
      { label: "Mobile", fill: 51.569 },
      { label: "Desktop", fill: 51.856 },
    ],
    bg: "#EA5757",
    bullet: "#EA5757",
  },
  {
    name: "Rachid El Mekki",
    role: "Student",
    photo: {
      src: `${ASSETS}/persona-rachid.jpg`,
      mask: `${ASSETS}/persona-rachid-mask.svg`,
      size: 57.299,
      w: 136.945,
      h: 91.106,
      x: -12.605,
      y: -0.286,
    },
    details: [
      ["Age", "21"],
      ["Education", "Bachelor’s in Engineering"],
      ["Status", "Single"],
      ["Occupation", "Student"],
      ["Location", "Montreal, QC"],
      ["Nationality", "Moroccan"],
      ["Status in Canada", "Temporary resident"],
      ["English level", "Advanced"],
      ["French level", "Native"],
    ],
    quote: "I would like to stay in Canada after my studies.",
    quoteIcon: `${ASSETS}/quote-rachid.svg`,
    personality: ["Introverted", "Hard worker"],
    bio: "He currently lives in Montreal. He plans to stay in Canada after graduating and find his first job. He is currently single and enjoys playing video games.",
    needs: [
      "Wants to continue working in Canada",
      "He is looking to obtain a new visa that would allow him to work.",
      "Seeking advice on the strategy to adopt",
      "Is very price-sensitive and has a limited budget",
    ],
    frustrations: [
      "Confused about the eligibility criteria for obtaining a work permit after graduation",
      "He is worried about the length of administrative procedures",
      "He fears being sent back to his home country if he does not fill out his immigration papers correctly",
      "He struggles to find answers to his questions on the many government websites.",
    ],
    channels: [facebook, wordOfMouth, websites],
    platforms: [
      { label: "Mobile", fill: 51.569 },
      { label: "Desktop", fill: 37.244 },
    ],
    bg: "#3B3B3B",
    bullet: "#1C1C1C",
  },
];

const card = "overflow-clip rounded-[4.297px] bg-white p-[9.168px]";
const cardTitle =
  "text-[10.314px] font-extrabold leading-normal text-[#1e1e1e]";
const smallText = "text-[9.168px] font-medium leading-normal text-[#1c1c1c]";
const tinyText = "text-[6.876px] font-medium leading-normal text-[#1c1c1c]";

function BulletList({
  items,
  color,
  gap,
}: {
  items: string[];
  color: string;
  gap: string;
}) {
  return (
    <ul className="flex flex-col" style={{ gap }}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-[4.584px]">
          <span
            className="text-[10.314px] font-extrabold leading-normal"
            style={{ color }}
          >
            •
          </span>
          <span className={smallText}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PersonaCard({ p }: { p: Persona }) {
  return (
    <article
      className={`${manrope.className} flex w-full max-w-[524px] shrink-0 flex-col items-stretch gap-[8.308px] overflow-clip rounded-[9.168px] p-[14.325px] sm:w-[524px] sm:flex-row sm:items-start`}
      style={{ backgroundColor: p.bg }}
    >
      {/* Left stack */}
      <div className="flex flex-col items-stretch gap-[9.168px] sm:w-[179px] sm:self-stretch">
        <div className="flex flex-col gap-[10.314px] overflow-clip rounded-[2.865px] bg-white p-[13.752px]">
          <div className="flex items-center gap-[4.011px]">
            <div
              className="relative shrink-0 overflow-hidden"
              style={{
                width: p.photo.size,
                height: p.photo.size,
                maskImage: `url("${p.photo.mask}")`,
                WebkitMaskImage: `url("${p.photo.mask}")`,
                maskSize: "100% 100%",
                WebkitMaskSize: "100% 100%",
              }}
            >
              <Image
                src={p.photo.src}
                alt={p.name}
                width={Math.round(p.photo.w * 2)}
                height={Math.round(p.photo.h * 2)}
                sizes="140px"
                className="absolute max-w-none object-cover"
                style={{
                  left: p.photo.x,
                  top: p.photo.y,
                  width: p.photo.w,
                  height: p.photo.h,
                }}
              />
            </div>
            <div className="flex flex-col gap-[2.292px] whitespace-nowrap leading-normal text-[#1c1c1c]">
              <p className="text-[11.46px] font-extrabold">{p.name}</p>
              <p className="text-[9.168px] font-semibold">{p.role}</p>
            </div>
          </div>
          <dl className="flex flex-col gap-[4.584px]">
            {p.details.map(([label, value]) => (
              <div key={label} className="flex items-start gap-[2.292px]">
                <dt className="flex min-h-[12.606px] w-[55.294px] shrink-0 items-center text-[6.876px] font-semibold uppercase leading-normal text-[#a3a3a3]">
                  {label}
                </dt>
                <dd className="w-[95.403px] text-[9.168px] font-medium leading-normal text-[#1e1e1e]">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <blockquote className={`${card} flex items-start gap-[6.876px]`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src={p.quoteIcon}
            width={10.8868}
            height={9.45435}
            className="shrink-0"
          />
          <p className="text-[9.741px] font-medium leading-normal text-[#1e1e1e]">
            {p.quote}
          </p>
        </blockquote>

        <div className={`${card} flex flex-1 flex-col gap-[6.876px]`}>
          <p className="text-[10.314px] font-extrabold leading-normal text-[#1c1c1c]">
            Personality
          </p>
          <div className="flex flex-wrap content-center items-center gap-x-[3.438px] gap-y-2 p-[1.146px]">
            {p.personality.map((trait) => (
              <span
                key={trait}
                className="whitespace-nowrap rounded-full bg-[#f2f2f2] px-[6.876px] py-[2.292px] text-[9.741px] font-medium leading-normal text-black"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right stack */}
      <div className="flex flex-col gap-[9.168px] sm:w-[307.983px]">
        <div className={`${card} flex flex-col gap-[6.876px]`}>
          <p className={cardTitle}>Biography</p>
          <p className={smallText}>{p.bio}</p>
        </div>
        <div className={`${card} flex flex-col gap-[6.876px]`}>
          <p className={cardTitle}>Essential needs</p>
          <BulletList items={p.needs} color={p.bullet} gap="4.584px" />
        </div>
        <div className={`${card} flex flex-col gap-[6.876px]`}>
          <p className={cardTitle}>Frustrations</p>
          <BulletList items={p.frustrations} color={p.bullet} gap="3.438px" />
        </div>
        <div className="flex gap-[9.168px]">
          <div className={`${card} flex min-w-0 flex-1 flex-col gap-[6.876px]`}>
            <p className={`${cardTitle} whitespace-nowrap`}>
              Information channels
            </p>
            <div className="flex flex-1 items-center gap-[6.876px]">
              {p.channels.map((c) => (
                <div
                  key={c.label}
                  className={`flex shrink-0 flex-col items-center gap-[2.292px] ${c.boxClassName ?? ""}`}
                >
                  <span className="flex size-[16.044px] items-center justify-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img alt="" src={c.icon} width={c.w} height={c.h} />
                  </span>
                  <p className={tinyText}>{c.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={`${card} flex min-w-0 flex-1 flex-col gap-[6.876px]`}>
            <p className={`${cardTitle} whitespace-nowrap`}>Platforms</p>
            <div className="flex flex-wrap items-center gap-[6.876px]">
              {p.platforms.map((pl) => (
                <div
                  key={pl.label}
                  className="flex w-[57.299px] flex-col gap-[3.724px]"
                >
                  <p className={tinyText}>{pl.label}</p>
                  <div
                    className="relative h-[9.168px] w-[57.299px] rounded-[8.595px] bg-[#d9d9d9]"
                    role="meter"
                    aria-label={`${pl.label} usage`}
                    aria-valuenow={Math.round((pl.fill / 57.299) * 100)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className="absolute left-[0.14px] top-0 h-full rounded-[8.595px] bg-[#9893ff]"
                      style={{ width: pl.fill }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ---------- Section content ---------- */

export default function ResearchSection() {
  return (
    <div className="flex flex-col gap-8">
      {/* Heuristic and ergonomic evaluation */}
      <AnimatedSection className="flex flex-col gap-6">
        <Block
          title="Heuristic and ergonomic evaluation"
          intro={`An audit of the site "www.vfimmigration.com" was conducted according to the heuristic criteria of Bastien and Scapin as well as the 10 heuristic principles of Jakob Nielsen.`}
          lead="3 major violations were frequently noted throughout the site:"
          bullets={[
            "Cognitive overload and information density",
            "Lack of visual content",
            "Unclear value proposition",
          ]}
        />

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 md:flex-row">
            {auditShots.map((shot) => (
              <figure
                key={shot.caption}
                className="flex min-w-0 flex-1 flex-col items-center gap-2"
              >
                <div
                  className={`relative aspect-[413/233] w-full overflow-hidden rounded-[12px] ${shot.frameClassName ?? ""}`}
                >
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    sizes={shot.sizes}
                    className={shot.imgClassName}
                  />
                  {shot.markers.map((m, i) => (
                    <span
                      key={i}
                      className="absolute"
                      style={{ left: m.left, top: m.top }}
                    >
                      <ViolationBadge {...m} />
                    </span>
                  ))}
                </div>
                <figcaption className="font-body text-[14px] italic leading-[20px] text-black">
                  {shot.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Same two-column grid as the screenshots so each legend centers under its mockup */}
          <div className="flex flex-col gap-6 md:flex-row md:gap-4">
            {violationGroups.map((group) => (
              <div
                key={group.title}
                className="flex min-w-0 flex-1 md:justify-center"
              >
                <div className="flex flex-col gap-2">
                  <p className="font-body text-[14px] font-semibold leading-[20px] text-[#1e1e1e]">
                    {group.title}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {group.items.map((badge, i) => (
                      <li
                        key={group.labels[i]}
                        className="flex items-center gap-2"
                      >
                        <ViolationBadge {...badge} />
                        <span className="font-body text-[14px] leading-[20px] text-[#1e1e1e]">
                          {group.labels[i]}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <Block
          title="Quantitative research"
          intro="To better understand the profile of VF Immigration users, I looked into the data available on Google Analytics as well as the forms filled out by clients on the contact page."
          lead="Key data"
          bullets={[
            "A bounce rate of over 60% on the homepage",
            "The “coming to Canada” page is the most exited page",
            "80% of the traffic is direct",
            "Demographically varied profiles, mostly young Francophones",
            "Users sometimes in urgent situations to remain living in Canada",
          ]}
        />
      </AnimatedSection>

      <AnimatedSection>
        <Block
          title="User interviews"
          intro="To better understand user expectations and behavior, I also interviewed 5 different profiles using the Thinking out loud method."
          lead="Key data"
          bullets={[
            "The majority place importance on their immigration processes and seek someone trustworthy to guide them",
            "Difficulties in comparing the various services offered",
            "Many confusions in the process of booking a consultation",
            "Do not understand the purpose of the coming to Canada page and have difficulty identifying with a category. The page does not “make them want to read” despite having valuable information.",
          ]}
        />
      </AnimatedSection>

      <AnimatedSection>
        <Block
          title="Personas"
          intro="The user interviews and quantitative research led to the following two personas:"
        />
      </AnimatedSection>

      <AnimatedSection
        delay={0.05}
        className="flex flex-col items-center gap-4 xl:flex-row xl:items-start xl:justify-center"
      >
        {personas.map((p) => (
          <PersonaCard key={p.name} p={p} />
        ))}
      </AnimatedSection>
    </div>
  );
}
