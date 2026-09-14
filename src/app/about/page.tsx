import type { Metadata } from "next";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import PhotoCarousel from "./PhotoCarousel";
import BackButton from "./BackButton";
import SocialButtons from "./SocialButtons";

export const metadata: Metadata = {
  title: "About — Paola Cejoco",
};

function StoryHeader({ years, title }: { years: string; title: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-body text-lg font-medium text-black sm:text-xl">
        {years}
      </span>
      <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tightest text-[#0f172a] sm:text-5xl md:text-6xl lg:text-[56px]">
        {title}
      </h2>
    </div>
  );
}

function StoryRow({ label, body }: { label: string; body: string }) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:gap-6">
      <p className="font-body w-full shrink-0 text-base font-semibold text-black md:w-[342px]">
        {label}
      </p>
      <p className="font-body flex-1 text-base leading-5 text-[#3b3b3b]">
        {body}
      </p>
    </div>
  );
}

const carousel = [
  {
    src: "/images/about/latte-art.jpg",
    caption: "A little obsessed with latte art",
    width: "w-[220px] sm:w-[260px] md:w-[375px]",
    aspect: "aspect-[375/500]",
  },
  {
    src: "/images/about/biking-montreal.jpg",
    caption:
      "You might run into me biking in the streets of Montreal someday",
    width: "w-[165px] sm:w-[195px] md:w-[281px]",
    aspect: "aspect-[281/500]",
  },
  {
    src: "/images/about/hometown.jpg",
    caption: "A little glimpse of my hometown",
    width: "w-[220px] sm:w-[260px] md:w-[375px]",
    aspect: "aspect-[375/500]",
  },
  {
    src: "/images/about/mont-tremblant.jpg",
    caption:
      "A little sports challenge: go from Montreal to Mont-Tremblant by bike",
    width: "w-[220px] sm:w-[260px] md:w-[375px]",
    aspect: "aspect-[375/500]",
  },
];

export default function AboutPage() {
  return (
    <>
      <section id="about-hero" className="relative overflow-hidden bg-[#0f0c21]">
        <div className="pointer-events-none absolute left-[-8%] top-[-12%] aspect-[818.81/739.81] w-[50%] max-w-[520px]">
          <Image
            src="/images/hero/blob.svg"
            alt=""
            fill
            className="rotate-[31.79deg] object-contain"
          />
        </div>
        <div className="pointer-events-none absolute right-[-8%] bottom-[-12%] aspect-[818.81/739.81] w-[50%] max-w-[520px]">
          <Image
            src="/images/hero/blob.svg"
            alt=""
            fill
            className="rotate-[31.79deg] object-contain"
          />
        </div>
        <BackButton />
        <SocialButtons />
        <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-10 px-6 py-16 md:flex-row md:items-center md:gap-8 md:px-12 md:py-20 lg:mx-0 lg:w-max lg:max-w-none lg:gap-12 lg:py-24 lg:pl-[calc(50vw-445px)]">
          <AnimatedSection className="flex w-full flex-col items-start md:w-auto md:shrink-0 lg:relative lg:z-10">
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tightest text-white sm:text-5xl md:text-6xl lg:text-7xl lg:drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)] xl:text-[96px]">
              Hello,
              <br />
              I&apos;m Paola
            </h1>
          </AnimatedSection>
          <div className="relative aspect-[980/551] w-full min-w-0 overflow-hidden md:max-w-[980px] md:flex-1 lg:-ml-[220px] lg:w-[980px] lg:max-w-none lg:flex-none">
            <Image
              src="/images/about/hero.jpg"
              alt="Paola smiling in front of a wall of hand-painted decorative plates"
              fill
              sizes="(min-width: 1024px) 980px, (min-width: 768px) 55vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="flex w-full flex-col gap-20 px-6 py-20 md:px-12">
        <AnimatedSection className="mx-auto flex w-full max-w-[890px] flex-col gap-8">
          <StoryHeader years="2017-2021" title="My story" />
          <StoryRow
            label="Designed in France, made in the Philippines"
            body="Born to a French mom and a Filipino dad, I spent my entire childhood on the French Riviera, snacking on chocolate croissants and eating rice for dinner. From a young age, I caught the travel bug and decided to leave the family nest to study in Canada. We certainly didn’t share the same climate, but my mother had sold Montreal to me so well that I decided to discover the city with my own eyes."
          />
          <StoryRow
            label="Graduate of HEC Montréal"
            body="So here I am, standing 1.58m tall, studying business at HEC Montréal where I lived four wonderful years (well, except for Covid which introduced me to the joys of an 8pm curfew). During my final year, I discovered and fell in love with UX Design and decided after graduation to start a career in user experience."
          />
        </AnimatedSection>

        <AnimatedSection className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
          <PhotoCarousel items={carousel} />
        </AnimatedSection>

        <AnimatedSection className="mx-auto flex w-full max-w-[890px] flex-col gap-8">
          <StoryHeader
            years="2023-2024"
            title="A mini world tour between Australia and Asia"
          />
          <StoryRow
            label="Between road trips, dairy farming, and construction in Australia"
            body="Beyond my passion for UX, I also fulfilled a long-held dream: traveling to the other side of the world to the land of kangaroos to try new experiences. One morning, I found myself milking cows at 4am, and a few months later, I was in a desert guiding cranes lifting 35-ton dump trucks. Far from the city girl with neat manicures I used to be. This adventure definitely pushed me out of my comfort zone and gave me a new perspective on life. Another enriching experience filled with wonderful encounters that will stay in my memory forever. But since a picture is worth a thousand words, I’ll leave you with some photos from this incredible journey."
          />
          <StoryRow
            label="A journey through Southeast Asia"
            body="After wonderful encounters in Oceania, I wanted to explore further and was lucky to visit Thailand, Vietnam, Singapore, Hong Kong, and the Philippines. An unforgettable trip marked by the warm hospitality of locals, a diving certificate in hand, and of course, delighted taste buds. A journey full of emotions where I reconnected with my roots by visiting my Filipino family whom I hadn’t seen in a long time."
          />
        </AnimatedSection>
      </section>

      {/* Contact — background bleeds full viewport width, content stays
          centered to the 1280px canvas */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#6c65ff]">
        <div className="content-stretch mx-auto flex max-w-[1280px] flex-col gap-[56px] items-center py-[112px] relative w-full">
          <div className="content-stretch flex flex-col gap-[4px] items-center leading-[0] relative shrink-0 text-center text-white w-full">
            <div className="font-display font-bold flex flex-col justify-center relative shrink-0 text-[56px] tracking-[-0.84px] w-[550px]">
              <p className="leading-[normal]">Like what you see? </p>
            </div>
            <div className="font-body font-medium flex flex-col justify-center min-w-full relative shrink-0 text-[24px] tracking-[-0.24px] w-[min-content]">
              <p className="leading-[30px]">We may be a match</p>
            </div>
          </div>
          <div className="content-stretch flex gap-[31px] items-center justify-center relative shrink-0 w-[404px]">
            <a
              href="mailto:cejoco.paola@gmail.com"
              className="bg-white content-stretch flex items-center justify-center px-[32px] py-[12px] relative rounded-[30px] shrink-0"
            >
              <p className="font-body font-semibold leading-[20px] relative shrink-0 text-[#7f56d9] text-[16px] whitespace-nowrap">
                Send email
              </p>
            </a>
            <a
              href="https://www.linkedin.com/in/paola-cejoco/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-solid border-white content-stretch flex items-center justify-center px-[32px] py-[12px] relative rounded-[30px] shrink-0"
            >
              <p className="font-body font-semibold leading-[20px] relative shrink-0 text-[16px] text-white whitespace-nowrap">
                My Linkedin
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
