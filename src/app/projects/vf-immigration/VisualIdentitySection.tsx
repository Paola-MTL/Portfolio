import { Inter, Nunito_Sans } from "next/font/google";
import AnimatedSection from "@/components/AnimatedSection";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });
// Avenir ships with macOS/iOS; Nunito Sans is the closest web fallback.
const nunito = Nunito_Sans({ subsets: ["latin"], weight: ["300", "800"] });
const avenir = `Avenir, "Avenir Next", ${nunito.style.fontFamily}`;

const bodyText =
  "max-w-[700px] font-body text-sm leading-relaxed text-[#1e1e1e] lg:text-[16px] lg:leading-[20px]";
const label =
  "font-body text-base font-medium tracking-tight text-black lg:text-[20px] lg:leading-[24px] lg:tracking-[-0.2px]";

const swatches = [
  { shade: "900", hex: "#1C1C1C" },
  { shade: "800", hex: "#3B3B3B" },
  { shade: "500", hex: "#D6021E" },
  { shade: "400", hex: "#E55446" },
];

export default function VisualIdentitySection() {
  return (
    <div className="flex flex-col gap-8">
      <AnimatedSection className="flex flex-col gap-4 md:flex-row md:gap-6">
        <h3 className="font-body text-base font-semibold text-black md:w-[342px] md:shrink-0 lg:text-[16px] lg:leading-[20px]">
          Respect the primary colors that characterize VF Immigration.
        </h3>
        <p className={`${bodyText} md:flex-1`}>
          The two primary and most prominent colors for VF Immigration were
          dark red and dark gray. To enhance contrasts throughout the site, I
          expanded the color palette starting from these two primary colors.
        </p>
      </AnimatedSection>

      <AnimatedSection
        delay={0.05}
        className="flex flex-col gap-10 lg:flex-row lg:items-start xl:gap-[116px]"
      >
        <div className="flex flex-col gap-4 text-black lg:w-[250px] lg:shrink-0">
          <p className={label}>TYPOGRAPHY</p>
          <div className="flex flex-col gap-3" style={{ fontFamily: avenir }}>
            <p className="whitespace-nowrap text-[40px] font-extrabold leading-[44px] tracking-[-0.4px]">
              Avenir Heavy
              <br aria-hidden />
              Aa 123
            </p>
            <p className="whitespace-nowrap text-[24px] font-light leading-[28px] tracking-[-0.24px]">
              Avenir Light
              <br aria-hidden />
              Aa123
            </p>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <p className={label}>COLORS</p>
          <ul className="grid grid-cols-2 gap-6 sm:flex sm:gap-[36px]">
            {swatches.map((s) => (
              <li
                key={s.hex}
                className={`${inter.className} flex flex-col gap-3 overflow-hidden rounded-lg bg-white shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.1),0px_4px_6px_-2px_rgba(16,24,40,0.05)] sm:w-[104px] sm:shrink-0`}
              >
                <div className="h-20 w-full" style={{ backgroundColor: s.hex }} />
                <div className="flex flex-col px-3 pb-3">
                  <p className="text-[18px] font-medium leading-[28px] text-[#101828]">
                    {s.shade}
                  </p>
                  <p className="text-[16px] leading-[24px] text-[#475467]">{s.hex}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedSection>
    </div>
  );
}
