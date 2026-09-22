import type { ReactNode } from "react";
import { Inter, Roboto } from "next/font/google";
import AnimatedSection from "@/components/AnimatedSection";
import ScaledFrame from "./ScaledFrame";

const inter = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

const ASSETS = "/images/vf-immigration/wireframes";
const GRAY = "#707070";

const bodyText =
  "max-w-[700px] font-body text-sm leading-relaxed text-[#1e1e1e] lg:text-[16px] lg:leading-[20px]";

/* ---------- Wireframe primitives ---------- */

// Static wireframe art: plain <img> at the exact Figma size.
function Art({
  src,
  w,
  h,
  className = "",
}: {
  src: string;
  w: number;
  h: number;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      alt=""
      src={`${ASSETS}/${src}`}
      width={w}
      height={h}
      className={`block max-w-none shrink-0 ${className}`}
      style={{ width: w, height: h }}
    />
  );
}

function WfButton({
  label,
  w,
  h,
  size,
  filled,
  bg = GRAY,
  border,
}: {
  label: string;
  w: number;
  h: number;
  size: number;
  filled?: boolean;
  bg?: string;
  border?: string;
}) {
  return (
    <div
      className={`${roboto.className} flex shrink-0 items-center justify-center rounded-[5px] border-solid px-[4.7px] text-center leading-[115%]`}
      style={{
        width: w,
        height: h,
        fontSize: size,
        borderWidth: 0.29,
        borderColor: border ?? (filled ? "#fff" : GRAY),
        backgroundColor: filled ? bg : undefined,
        color: filled ? "#fff" : GRAY,
      }}
    >
      {label}
    </div>
  );
}

function WfLink({
  label,
  size,
  className = "",
}: {
  label: string;
  size: number;
  className?: string;
}) {
  return (
    <p
      className={`${roboto.className} leading-[115%] underline ${className}`}
      style={{ fontSize: size, color: GRAY }}
    >
      {label}
    </p>
  );
}

/* ---------- Studying in Canada — Round 1 ---------- */

function StudyRound1() {
  const h = "font-bold text-[6.933px] leading-[8.667px] tracking-[-0.1387px]";
  const p = "text-[4.622px] leading-[6.356px] tracking-[-0.0924px]";
  const cell = `${roboto.className} w-[60.956px] text-[5.2px] leading-[115%]`;
  const visit = `font-semibold underline whitespace-nowrap ${p}`;
  const links = [
    "Technical or vocational training",
    "University studies",
    "Cégeps",
    "Quebec Future Careers",
  ];

  return (
    <div
      className={`${inter.className} flex w-[416px] items-start border border-black bg-white px-[52.578px] py-[23.111px] text-black`}
    >
      <div className="flex flex-col gap-[15.022px]">
        <p
          className="w-[215.8px] text-[13.867px] font-bold leading-[13.867px] tracking-[-0.2773px]"
          style={{ color: GRAY }}
        >
          Studying in Canada
        </p>
        <div className="flex flex-col gap-[34.089px]">
          <div className="flex items-start gap-[26.578px]">
            <div className="flex flex-col gap-[13px]">
              <div className="flex w-[152.533px] flex-col gap-[1.156px]">
                <p className={h}>Essentials to know</p>
                <p className={p}>
                  Make sure to choose a program at a designated institution,
                  with a minimum of 900 hours, in order to obtain a
                  post-graduation work permit (PGWP) later on. Check the list
                  of designated institutions to see if your program allows
                  you to obtain a PGWP at the end of your studies.
                </p>
              </div>
              <div className="flex gap-[6.067px]">
                <WfButton
                  label="See the list of designated institutions"
                  w={101.978}
                  h={17.333}
                  size={5.2}
                  filled
                />
                <WfButton label="See study permits" w={69.622} h={17.333} size={5.2} />
              </div>
            </div>
            <Art src="ph-study-r1.svg" w={106.6} h={78.289} />
          </div>

          <div className="flex w-[310.844px] items-center justify-center gap-[11.556px] bg-[rgba(112,112,112,0.8)] p-[11.556px] text-white">
            <div className="flex w-[58.067px] shrink-0 items-center justify-center p-[15.6px]">
              <Art src="bulb-study.svg" w={21.6788} h={21.7492} />
            </div>
            <div className="flex min-w-px flex-1 flex-col gap-[4.622px]">
              <p className={`${h} whitespace-nowrap`}>Good to know</p>
              <ul className={`w-[152.244px] list-disc ${p}`}>
                <li className="ms-[6.933px]">
                  For French and Belgian citizens, there are agreements signed
                  with Quebec for certain study programs, allowing access to
                  the same tuition rates as Quebec students. You can enroll in
                  an educational institution without going through an agency.
                  If you are studying at the master&apos;s or doctoral level,
                  or in a professional program at the university level, your
                  spouse can apply for an open work permit.
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-[25.133px]">
            <div className="flex flex-col gap-[6.356px]">
              <div className="flex flex-col gap-[1.156px]">
                <p className={`w-[120.756px] ${h}`}>Find a study program</p>
                <p className={`w-[152.244px] ${p}`}>
                  I do not provide advice for finding an institution or
                  obtaining an admission letter. However, you can search the
                  following links for study programs:
                </p>
              </div>
              <WfButton
                label="Visit the official government site"
                w={101.978}
                h={17.333}
                size={5.2}
                filled
              />
            </div>
            <div className="flex items-start gap-[14.733px]">
              {links.map((label, i) => (
                <div
                  key={label}
                  className={`flex flex-col border-l-[0.289px] border-t-[0.289px] border-black px-[2.889px] py-[2.311px] ${i === 0 ? "w-[66.444px] gap-[2.889px]" : "h-[27.733px] gap-[9.244px]"}`}
                >
                  <p className={cell}>{label}</p>
                  <p className={visit}>Visit the site</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[15.6px]">
            <div className="flex flex-col gap-[2.311px]">
              <div className="flex flex-col gap-[4.622px]">
                <p className={`w-[120.756px] ${h}`}>Stay and work after studies</p>
                <p className={`w-[152.244px] ${p}`}>
                  Studying in Canada can open doors for you to obtain an open
                  work permit. Check if your program gives you access to a
                  post-graduation work permit.
                </p>
              </div>
              <WfButton
                label="List of designated institutions"
                w={89.267}
                h={13.578}
                size={5.2}
              />
            </div>
            <div className="flex items-start gap-[5.778px]">
              <PathwayCard
                w={152.244}
                icon={<Art src="flag-quebec.png" w={6.933} h={9.244} className="object-cover" />}
                title="In Quebec"
                body="In Quebec, if you studied in French in one of the eligible programs, you can directly access permanent residency."
                link="Refer to the Student PEQ"
                scale={1}
              />
              <PathwayCard
                w={152.533}
                icon={<Art src="canada-study-r1.svg" w={9.24444} h={9.24444} />}
                title="Elsewhere in Canada"
                body="If you complete a study program outside Quebec, you will need to meet the conditions of one of the skilled worker programs to obtain permanent residency."
                link="Refer to Express Entry"
                scale={1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// "In Quebec" / "Elsewhere in Canada" card. `scale` adapts Round 1 metrics
// (Round 2 was drawn at ~99.1% of the size).
function PathwayCard({
  w,
  icon,
  title,
  body,
  link,
  scale,
}: {
  w: number;
  icon: ReactNode;
  title: string;
  body: string;
  link: string;
  scale: number;
}) {
  const s = (n: number) => n * scale;
  const small = {
    fontSize: s(4.622),
    lineHeight: `${s(6.356)}px`,
    letterSpacing: -s(0.0924),
  };
  return (
    <div
      className="flex shrink-0 flex-col"
      style={{ width: w, gap: s(2.311), padding: s(4.622) }}
    >
      <div className="flex w-full flex-col" style={{ gap: s(4.622) }}>
        <div className="flex items-center" style={{ gap: s(3.178) }}>
          {icon}
          <p
            className="whitespace-nowrap font-bold"
            style={{
              fontSize: s(5.778),
              lineHeight: `${s(6.933)}px`,
              letterSpacing: -s(0.1156),
            }}
          >
            {title}
          </p>
        </div>
        <p style={small}>{body}</p>
      </div>
      <p className="whitespace-nowrap font-semibold underline" style={small}>
        {link}
      </p>
    </div>
  );
}

/* ---------- Studying in Canada — Round 2 ---------- */

function StudyRound2() {
  const h = "font-bold text-[6.871px] leading-[8.589px] tracking-[-0.1374px]";
  const p = "text-[4.581px] leading-[6.298px] tracking-[-0.0916px]";
  const row = `${roboto.className} border-b-[0.286px] border-[#d9d9d9] px-[2.29px] py-[3.436px] text-[5.153px] leading-[115%] whitespace-nowrap`;
  const r2 = 0.99118; // Round 2 metrics relative to Round 1

  return (
    <div
      className={`${inter.className} flex w-[412.265px] items-start border border-black bg-white px-[52.106px] py-[22.904px] text-black`}
    >
      <div className="flex flex-col gap-[14.887px]">
        <p
          className="w-[213.862px] text-[13.742px] font-bold leading-[13.742px] tracking-[-0.2748px]"
          style={{ color: GRAY }}
        >
          Studying in Canada
        </p>
        <div className="flex flex-col gap-[33.783px]">
          <div className="flex items-start gap-[26.339px]">
            <div className="flex flex-col gap-[4.581px]">
              <div className="flex w-[151.164px] flex-col gap-[4.581px]">
                <p className={h}>Essentials to know</p>
                <p className={p}>
                  Make sure to choose a program at a designated institution,
                  with a minimum of 900 hours, in order to obtain a
                  post-graduation work permit (PGWP) later on. Check the list
                  of designated institutions to see if your program allows
                  you to obtain a PGWP at the end of your studies.
                </p>
              </div>
              <div className="flex flex-col gap-[3.436px]">
                <WfLink label="Study permits" size={5.153} className="w-[59.549px]" />
                <WfLink
                  label="List of designated institutions"
                  size={5.153}
                  className="whitespace-nowrap"
                />
              </div>
            </div>
            <Art src="ph-study-r2.svg" w={105.643} h={77.586} />
          </div>

          <div className="flex w-full items-start justify-between">
            <Art src="ph-study-r2.svg" w={105.643} h={77.586} />
            <div className="flex w-[151.164px] flex-col gap-[4.581px]">
              <p className={h}>Good to know</p>
              <p className={p}>
                For French and Belgian citizens, there are agreements signed
                with Quebec for certain study programs, allowing access to the
                same tuition rates as Quebec students. You can enroll in an
                educational institution without going through an agency. If
                you are studying at the master&apos;s or doctoral level, or in
                a professional program at the university level, your spouse
                can apply for an open work permit.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-[24.908px]">
            <div className="flex flex-col gap-[4.581px]">
              <div className="flex flex-col gap-[4.581px]">
                <p className={`w-[119.671px] ${h}`}>Find a study program</p>
                <p className={`w-[150.877px] ${p}`}>
                  I do not provide advice for finding an institution or
                  obtaining an admission letter. However, you can search the
                  following links for study programs:
                </p>
              </div>
              <WfLink label="Prepare to study in Canada" size={5.153} />
            </div>
            <div className="flex flex-col justify-center gap-[2.29px]">
              <p className={row}>Technical or vocational training</p>
              <p className={row}>University studies</p>
              <p className={row}>Cégeps</p>
              <p className={row}>Quebec Future Careers</p>
            </div>
          </div>

          <Art src="divider.svg" w={307.767} h={5.7259} />

          <div className="flex flex-col items-center gap-[15.46px]">
            <div className="flex flex-col items-center gap-[4.581px]">
              <p className={`w-[119.671px] ${h}`}>Stay and work after studies</p>
              <p className={`w-[150.877px] text-center ${p}`}>
                Studying in Canada can open doors for you to obtain an open
                work permit. Check if your program gives you access to a
                post-graduation work permit.
              </p>
              <WfLink label="Check my eligibility for a PGWP" size={5.153} />
            </div>
            <div className="flex items-start gap-[5.726px]">
              <PathwayCard
                w={150.877}
                icon={<Art src="flag-quebec.png" w={6.871} h={9.161} className="object-cover" />}
                title="In Quebec"
                body="In Quebec, if you studied in French in one of the eligible programs, you can directly access permanent residency."
                link="Refer to the Student PEQ"
                scale={r2}
              />
              <PathwayCard
                w={151.164}
                icon={<Art src="canada-study-r2.svg" w={9.16144} h={9.16144} />}
                title="Elsewhere in Canada"
                body="If you complete a study program outside Quebec, you will need to meet the conditions of one of the skilled worker programs to obtain permanent residency."
                link="Refer to Express Entry"
                scale={r2}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Working in Canada — Round 1 ---------- */

function WorkRound1() {
  const h = "font-bold text-[6.95px] leading-[8.688px] tracking-[-0.139px]";
  const p = "text-[4.633px] leading-[6.371px] tracking-[-0.0927px]";

  return (
    <div
      className={`${inter.className} flex w-[417px] flex-col items-start border-[0.889px] border-black bg-white px-[52.704px] py-[23.167px] text-black`}
    >
      <div className="flex w-[343.446px] flex-col gap-[23.167px]">
        <div className="flex flex-col gap-[15.058px]">
          <p
            className="w-[216.319px] text-[13.9px] font-bold leading-[13.9px] tracking-[-0.278px]"
            style={{ color: GRAY }}
          >
            Working in Canada
          </p>
          <div className="flex items-start gap-[26.642px]">
            <div className="flex flex-col gap-[13.031px]">
              <div className="flex w-[152.9px] flex-col gap-[1.158px]">
                <p className={h}>Determine if I need a work permit</p>
                <p className={p}>
                  First, determine whether you need a work permit: in most
                  cases, you will need to obtain a permit, but there are some
                  exceptions.
                </p>
              </div>
              <div className="flex gap-[6.081px]">
                <WfButton
                  label="See the official site"
                  w={102.223}
                  h={17.375}
                  size={5.21}
                  filled
                  border={GRAY}
                />
                <WfButton label="See study permits" w={69.79} h={17.375} size={5.21} />
              </div>
            </div>
            <Art src="ph-work-r1.svg" w={106.856} h={59.3646} />
          </div>
        </div>

        <div className="flex w-full flex-col gap-[9.267px]">
          <p
            className="whitespace-nowrap text-[9.267px] font-bold leading-[10.425px] tracking-[-0.1853px]"
            style={{ color: GRAY }}
          >
            Closed work permits
          </p>
          <div className="flex w-full items-center justify-center gap-[11.583px] bg-[rgba(59,59,59,0.4)] p-[11.583px] text-white">
            <div className="flex w-[58.206px] shrink-0 items-center justify-center p-[15.638px]">
              <Art src="bulb-work.svg" w={21.7306} h={21.8018} />
            </div>
            <div className={`flex min-w-px flex-1 flex-col gap-[4.633px] font-semibold ${p}`}>
              <p className={`${h} whitespace-nowrap`}>Definitions</p>
              <p>
                Closed work permit A closed work permit is tied to a single
                employer who must validate a job offer through a Labour Market
                Impact Assessment (LMIA)/CAQ (PTET) or an exemption
                (International Mobility).
              </p>
              <p>
                Labour Market Impact Assessment (LMIA) The Labour Market
                Impact Assessment (LMIA) is a mandatory step for certain
                closed work permit applications. The process aims to
                demonstrate that the employer first attempted to recruit a
                Canadian citizen or permanent resident for the position in
                question, without success, in order to justify the need to
                hire a foreign worker in a labor shortage context. In Quebec,
                there is also a simplified process in certain cases (see
                below).
              </p>
            </div>
          </div>

          <div className="flex w-[152.9px] flex-col gap-[9.267px]">
            <div className="flex flex-col gap-[4.923px]">
              <ol className={`w-[185.044px] list-decimal ${h}`} start={1}>
                <li className="ms-[10.425px]">Temporary Foreign Worker (TFW)</li>
              </ol>
              <p className={p}>
                The Temporary Foreign Worker program in Canada allows foreign
                nationals to work legally in Canada for a specified period,
                usually in a specific job. This program aims to meet the needs
                of the Canadian labor market when employers cannot find
                Canadian workers or permanent residents to fill certain
                positions.
              </p>
            </div>
            <div className="flex flex-col gap-[4.923px]">
              <ol className={`w-[185.044px] list-decimal ${h}`} start={2}>
                <li className="ms-[10.425px]">International Mobility</li>
              </ol>
              <p className={p}>
                This program aims to facilitate the entry of skilled workers,
                students, or international interns, as well as individuals
                participating in cultural exchanges or specific international
                agreements. These workers may be exempt from the LMIA if their
                employment meets the criteria established in this program,
                thereby contributing to international mobility and the
                economic diversity of Canada.
              </p>
              <div className="flex flex-col gap-[4.633px]">
                <p className={p}>
                  If you are a French speaker, I also recommend looking for
                  work outside Quebec, as the search for French-speaking
                  workers offers you the possibility of more easily obtaining
                  a work permit with LMIA/CAQ exemption.
                </p>
                <WfButton
                  label="Learn more"
                  w={68.342}
                  h={17.375}
                  size={5.21}
                  filled
                  bg="rgba(112,112,112,0.8)"
                  border="rgba(112,112,112,0.8)"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Working in Canada — Round 2 ---------- */

function WorkRound2() {
  const h = "font-bold text-[6.917px] leading-[8.646px] tracking-[-0.1383px]";
  const p = "text-[4.611px] leading-[6.34px] tracking-[-0.0922px]";
  const definitions: [string, string][] = [
    ["Closed work permit", "plus-1.svg"],
    ["Open work permit", "plus-2.svg"],
    ["Labour Market Impact Assessment", "plus-3.svg"],
  ];

  return (
    <div
      className={`${inter.className} flex w-[417px] flex-col items-start border border-black bg-white px-[52.451px] py-[23.056px] text-black`}
    >
      <div className="flex flex-col gap-[23.056px]">
        <div className="flex flex-col gap-[14.986px]">
          <p
            className="w-[215.281px] text-[13.833px] font-bold leading-[13.833px] tracking-[-0.2767px]"
            style={{ color: GRAY }}
          >
            Working in Canada
          </p>
          <div className="flex w-[285.024px] items-start justify-between">
            <div className="flex h-[39.483px] w-[128.823px] flex-col gap-[6.917px]">
              <div className="flex flex-col gap-[6.917px]">
                <p className={h}>Do I need a work permit?</p>
                <p className={p}>
                  First, determine whether you need a work permit: in most
                  cases, you will need to obtain a permit, but there are some
                  exceptions.
                </p>
              </div>
              <WfLink label="Determine my situation" size={5.188} className="w-[59.944px]" />
            </div>
            <Art src="ph-work-r2.svg" w={112.108} h={59.0799} />
          </div>
        </div>

        <div className="flex w-full items-start justify-between">
          <Art src="ph-work-r2.svg" w={112.108} h={59.0799} />
          <div className="flex w-[112.684px] flex-col gap-[4.611px]">
            <p className={h}>Definitions</p>
            {definitions.map(([label, icon]) => (
              <div
                key={label}
                className="flex w-full items-start justify-between border-[0.288px] border-black px-[4.611px] py-[2.306px]"
              >
                <p className={`whitespace-nowrap ${p}`}>{label}</p>
                <Art src={icon} w={6.91667} h={6.91667} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col gap-[4.611px]">
          <p className="whitespace-nowrap text-[9.222px] font-bold leading-[10.375px] tracking-[-0.1844px] text-[#1c1c1c]">
            Closed work permits
          </p>
          <div className="flex w-full items-start justify-between">
            <div className="flex w-[152.167px] flex-col gap-[9.222px]">
              {[
                {
                  n: 1,
                  title: "Temporary Foreign Worker (TFW)",
                  body: "The Temporary Foreign Worker program in Canada allows foreign nationals to work legally in Canada for a specified period, usually in a specific job ...",
                },
                {
                  n: 2,
                  title: "International Mobility",
                  body: "This program aims to facilitate the entry of skilled workers, students, or international interns, as well as individuals participating in cultural exchanges or specific international agreements ...",
                },
              ].map((item) => (
                <div key={item.n} className="flex flex-col gap-[4.899px]">
                  <ol
                    className={`list-decimal whitespace-nowrap ${h}`}
                    style={{ color: GRAY }}
                    start={item.n}
                  >
                    <li className="ms-[10.3755px]">{item.title}</li>
                  </ol>
                  <div className="flex flex-col">
                    <p className={p}>{item.body}</p>
                    <WfLink label="Learn more" size={5.188} className="w-[59.944px]" />
                  </div>
                </div>
              ))}
            </div>
            <Art src="ph-work-r2-tall.svg" w={112.108} h={88.7639} />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Section ---------- */

function Round({
  label,
  width,
  gap,
  children,
}: {
  label: string;
  width: number;
  gap: string;
  children: ReactNode;
}) {
  return (
    <div className={`flex min-w-0 flex-1 flex-col md:max-w-[417px] ${gap}`}>
      <p className={bodyText}>{label}</p>
      <ScaledFrame width={width}>{children}</ScaledFrame>
    </div>
  );
}

export default function WireframesSection() {
  return (
    <div className="flex flex-col gap-4">
      <AnimatedSection className="flex flex-col gap-4">
        <h3 className="font-body text-base font-semibold text-black lg:text-[16px] lg:leading-[20px]">
          Examples of wireframes for immigration options to Canada
        </h3>
        <p className={bodyText}>
          The first round of wireframes allowed VF Immigration to present the
          content desired to address recurring questions from its clients.
          However, the density of information remained a friction point in
          navigation and information search for participants. The hierarchy
          and structure of the text were revised to make reading more
          enjoyable (e.g., accordion for definitions).
        </p>
      </AnimatedSection>

      <AnimatedSection
        delay={0.05}
        className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-4"
      >
        <Round label="Round 1" width={416} gap="gap-2">
          <StudyRound1 />
        </Round>
        <Round label="Round 2" width={412.265} gap="gap-2">
          <StudyRound2 />
        </Round>
      </AnimatedSection>

      <AnimatedSection
        delay={0.05}
        className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-4"
      >
        <Round label="Round 1" width={417} gap="gap-4">
          <WorkRound1 />
        </Round>
        <Round label="Round 2" width={417} gap="gap-4">
          <WorkRound2 />
        </Round>
      </AnimatedSection>
    </div>
  );
}
