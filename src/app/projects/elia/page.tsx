import type { Metadata } from "next";
import Link from "next/link";
import ScrollDownHint from "./ScrollDownHint";

export const metadata: Metadata = {
  title: "Elia — Paola Cejoco",
  description: "Digitizing visitor check-in for modern workplaces.",
  robots: { index: false, follow: false },
};

const img206 = "/images/elia/screenshot-206.png";
const img223 = "/images/elia/screenshot-223.png";
const img224 = "/images/elia/screenshot-224.png";
const img225 = "/images/elia/screenshot-225.png";
const img226 = "/images/elia/screenshot-226.png";
const img227 = "/images/elia/screenshot-227.png";
const img228 = "/images/elia/screenshot-228.png";
const img229 = "/images/elia/screenshot-229.png";
const img2351 = "/images/elia/screenshot-2351.png";
const img2432 = "/images/elia/screenshot-2432.png";
const img6051 = "/images/elia/screenshot-6051.png";
const imgDiscovery = "/images/elia/discovery-pain-points.png";
const imgScope = "/images/elia/scope-priorities.png";
const imgArrowDown = "/images/elia/arrow-1.svg";
const imgArrowRight = "/images/elia/arrow-3.svg";
const imgFrameMask = "/images/elia/frame-mask.svg";

function CollageRow({
  left,
  top,
  maskPosition,
  images,
}: {
  left: string;
  top: string;
  maskPosition: string;
  images: { src: string; rounded?: boolean; crop?: string }[];
}) {
  return (
    <div
      className="absolute flex h-[338.739px] items-center justify-center w-[852.388px]"
      style={{ left, top }}
    >
      <div className="flex-none rotate-[-15.79deg]">
        <div
          className="content-stretch flex gap-[14.993px] h-[110.309px] items-start relative rounded-[12px] w-[854.626px]"
          style={{
            maskImage: `url("${imgFrameMask}")`,
            WebkitMaskImage: `url("${imgFrameMask}")`,
            maskPosition,
            WebkitMaskPosition: maskPosition,
            maskSize: "524px 328px",
            WebkitMaskSize: "524px 328px",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`h-[110.309px] relative shrink-0 w-[202.411px] ${img.rounded === false ? "" : "rounded-[8px] overflow-hidden"}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                style={img.crop ? { objectPosition: img.crop } : undefined}
                src={img.src}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Persona({
  label,
  pillBg,
  pillText,
  title,
  body,
}: {
  label: string;
  pillBg: string;
  pillText: string;
  title: string;
  body: string;
}) {
  return (
    <div className="bg-white content-stretch drop-shadow-[0px_1px_1.5px_rgba(0,0,0,0.1),0px_1px_1px_rgba(0,0,0,0.06)] flex flex-col gap-[12px] items-start p-[20px] relative rounded-[12px] shrink-0">
      <div
        className="content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[999px] shrink-0"
        style={{ backgroundColor: pillBg }}
      >
        <div
          className="font-body font-semibold flex flex-col justify-center leading-[0] relative shrink-0 text-[16px] whitespace-nowrap"
          style={{ color: pillText }}
        >
          <p className="leading-[20px]">{label}</p>
        </div>
      </div>
      <div className="content-stretch flex flex-col items-start relative shrink-0 text-[14px] text-black w-full">
        <p className="font-body font-semibold leading-[20px] relative shrink-0 w-full">
          {title}
        </p>
        <div className="font-body font-normal flex flex-col justify-center leading-[0] relative shrink-0 w-full">
          <p className="leading-[20px]">{body}</p>
        </div>
      </div>
    </div>
  );
}

function TimelineTrack({
  name,
  steps,
}: {
  name: string;
  steps: { label: string; color: string }[];
}) {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0">
      <div className="font-body font-semibold flex flex-col justify-center leading-[0] relative shrink-0 text-[14px] text-[#0f172a] whitespace-nowrap">
        <p className="leading-[20px]">{name}</p>
      </div>
      <div className="content-stretch flex items-start relative shrink-0">
        {steps.map((step, idx) => (
          <div
            key={step.label}
            className="content-stretch flex flex-col gap-[4px] items-center relative shrink-0 w-[180px]"
          >
            <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
              <div
                className={`bg-[#cbd5e1] flex-1 h-[2px] min-w-px relative ${idx === 0 ? "opacity-0" : ""}`}
              />
              <div
                className="relative rounded-[999px] shrink-0 size-[8px]"
                style={{ backgroundColor: step.color }}
              />
              <div
                className={`bg-[#cbd5e1] flex-1 h-[2px] min-w-px relative ${idx === steps.length - 1 ? "opacity-0" : ""}`}
              />
            </div>
            <div className="font-body font-normal flex flex-col justify-center leading-[0] relative shrink-0 text-[14px] text-[#1e293b] whitespace-nowrap">
              <p className="leading-[20px]">{step.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function EliaProjectPage() {
  return (
    <div
      className="relative mx-auto w-full max-w-[1280px] bg-white"
      data-node-id="25:735"
      data-name="Elia"
    >
      {/* Top / Hero — background bleeds full viewport width, content stays
          centered to the 1280px canvas */}
      <div
        className="relative left-1/2 right-1/2 -mx-[50vw] h-[720px] w-screen overflow-hidden bg-[#6c65ff]"
        data-node-id="25:741"
        data-name="Top"
      >
        <div className="relative mx-auto h-full w-full max-w-[1280px]">
          <div
            className="absolute contents left-[378px] top-[196px]"
            data-node-id="25:743"
            data-name="VF Mockup"
          >
            <div className="absolute bg-[#666563] h-[328px] left-[378px] rounded-[12px] top-[196px] w-[524px]" />
            <div className="absolute contents h-[712.262px] left-[255px] top-[-48px] w-[996.431px]">
              <CollageRow
                left="255px"
                top="-36.2px"
                maskPosition="123px 232.195px"
                images={[
                  { src: img224 },
                  { src: img2432 },
                  { src: img225 },
                  { src: img226 },
                ]}
              />
              <CollageRow
                left="330.84px"
                top="72.57px"
                maskPosition="47.161px 123.428px"
                images={[
                  { src: img206 },
                  { src: img225 },
                  { src: img6051 },
                  { src: img2351 },
                ]}
              />
              <CollageRow
                left="323.2px"
                top="204.95px"
                maskPosition="54.796px -8.95px"
                images={[
                  { src: img224 },
                  { src: img228 },
                  { src: img223 },
                  { src: img2432 },
                ]}
              />
              <CollageRow
                left="399.04px"
                top="313.72px"
                maskPosition="-21.043px -117.718px"
                images={[
                  { src: img229 },
                  { src: img224 },
                  { src: img225 },
                  { src: img228 },
                ]}
              />
            </div>
          </div>

          <Link
            href="/#projects"
            className="absolute left-[104px] top-[32px] inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2 text-sm font-body text-white transition-colors duration-300 hover:bg-white hover:text-[#6c65ff]"
          >
            ← Back to projects
          </Link>

          <ScrollDownHint arrowSrc={imgArrowDown} />

          <div className="-translate-y-1/2 absolute content-stretch flex flex-col h-[116px] items-start left-[104px] top-1/2 w-[798px]">
            <div className="font-display font-bold flex flex-1 flex-col justify-center leading-[0] lowercase min-h-px relative text-[96px] text-white tracking-[-1.92px] w-full">
              <p className="leading-[normal]">elia</p>
            </div>
          </div>
        </div>
      </div>

      {/* Everything below the hero */}
      <div className="flex flex-col items-start w-full">
        {/* About */}
        <div className="content-stretch flex flex-col h-[720px] items-start px-[195px] py-[112px] relative shrink-0 w-[1280px]">
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[890px]">
            <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0 w-[731px]">
              <div className="font-body font-medium flex flex-col justify-center relative shrink-0 text-[20px] text-black tracking-[-0.2px] whitespace-nowrap">
                <p className="leading-[24px]">about the project</p>
              </div>
              <div className="font-display font-bold flex flex-col justify-center min-w-full relative shrink-0 text-[56px] text-[#0f172a] tracking-[-0.84px] w-[min-content]">
                <p className="leading-[normal]">
                  Facilitating visitor management for businesses
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[116px] items-start relative shrink-0 w-[890px]">
              <div className="content-stretch flex flex-col gap-[32px] items-start relative self-stretch shrink-0 w-[615px]">
                <div className="font-body font-normal flex flex-col justify-center leading-[0] min-w-full relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content] whitespace-pre-wrap">
                  <p className="leading-[20px] mb-4">
                    elia is an all-in-one management platform for workspaces.
                    It centralizes several services, including desk and room
                    booking, visitor management, and service request
                    handling.
                  </p>
                  <p className="leading-[20px] mb-0">
                    As office dynamics evolved and client demand grew, the
                    visitor management module was re-prioritized on our
                    strategic roadmap.
                    <br aria-hidden />
                    <br aria-hidden />
                    The goal: digitize company reception to eliminate
                    operational friction and deliver a seamless experience
                    built directly into our platform.
                  </p>
                </div>
                <div className="content-stretch flex gap-[7.539px] items-center justify-center relative shrink-0">
                  <div className="content-stretch flex items-center justify-center py-[6.031px] relative shrink-0">
                    <div className="font-body font-medium flex flex-col justify-center leading-[0] relative shrink-0 text-[#6c65ff] text-[18.09px] text-center tracking-[-0.1809px] whitespace-nowrap">
                      <p className="leading-[22.616px]">visit site</p>
                    </div>
                  </div>
                  <div className="h-[15.739px] relative shrink-0 w-[19.79px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt=""
                      className="block max-w-none size-full"
                      src={imgArrowRight}
                    />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-1 flex-col gap-[24.124px] items-start leading-[0] min-w-px relative self-stretch text-black">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  <div className="font-body font-medium flex flex-col justify-center relative shrink-0 text-[20px] tracking-[-0.2px] w-[195.252px]">
                    <p className="leading-[24px]">Role</p>
                  </div>
                  <div className="font-body font-normal flex flex-col justify-center min-w-full relative shrink-0 text-[16px] w-[min-content]">
                    <p className="leading-[20px]">Product Designer</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  <div className="font-body font-medium flex flex-col justify-center relative shrink-0 text-[20px] tracking-[-0.2px] w-[195.252px]">
                    <p className="leading-[24px]">duration</p>
                  </div>
                  <div className="font-body font-normal flex flex-col justify-center relative shrink-0 text-[16px] w-[195.252px]">
                    <p className="leading-[20px]">4 months</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  <div className="font-body font-medium flex flex-col justify-center relative shrink-0 text-[20px] tracking-[-0.2px] w-full">
                    <p className="leading-[24px]">COLLABORATION</p>
                  </div>
                  <div className="font-body font-normal flex flex-col justify-center relative shrink-0 text-[14px] w-full">
                    <p className="leading-[20px]">
                      4 developers
                      <br aria-hidden />1 Product Owner
                      <br aria-hidden />1 Product Manager
                      <br aria-hidden />1 Account Manager
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  <div className="font-body font-medium flex flex-col justify-center relative shrink-0 text-[20px] tracking-[-0.2px] w-full">
                    <p className="leading-[24px]">PROJECT TYPE</p>
                  </div>
                  <div className="font-body font-normal flex flex-col justify-center relative shrink-0 text-[14px] w-full">
                    <p className="leading-[20px]">
                      Multi-platform app
                      <br aria-hidden />
                      Web / Mobile / Tablet
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mockups strip */}
        <div className="content-stretch flex flex-col gap-[32px] h-[720px] items-start justify-center relative shrink-0 w-[1280px] overflow-hidden">
          <div className="content-stretch flex gap-[32px] items-start pl-[195px] relative shrink-0">
            {[img206, img225, img2351, img227].map((src, idx) => (
              <div
                key={idx}
                className="h-[286px] relative rounded-[8px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.2)] shrink-0 w-[524.796px] overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src={src}
                />
              </div>
            ))}
          </div>
          <div className="content-stretch flex gap-[32px] items-start relative shrink-0 pl-[195px]">
            {[img224, img228, img223, img2432].map((src, idx) => (
              <div
                key={idx}
                className="h-[286.025px] relative rounded-[8px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.2)] shrink-0 w-[524.842px] overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src={src}
                />
              </div>
            ))}
          </div>
        </div>

        {/* 01 — The problem */}
        <div className="content-stretch flex flex-col items-start px-[195px] py-[112px] relative shrink-0 w-[1280px]">
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[890px]">
            <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0 w-[731px]">
              <div className="font-body font-medium flex flex-col justify-center relative shrink-0 text-[20px] text-black tracking-[-0.2px] whitespace-nowrap">
                <p className="leading-[24px]">01</p>
              </div>
              <div className="font-display font-bold flex flex-col justify-center min-w-full relative shrink-0 text-[56px] text-[#0f172a] tracking-[-0.84px] w-[min-content]">
                <p className="leading-[normal]">The problem</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="font-body font-normal flex flex-col justify-center leading-[0] relative shrink-0 text-[#1e1e1e] text-[0px] w-full">
                <p className="leading-[20px] mb-0 text-[16px] whitespace-pre-wrap">
                  In many organizations, visitor reception still relied on
                  outdated paper-based processes. This approach created two
                  major issues:
                  <br aria-hidden />
                  <br aria-hidden />
                </p>
                <ul className="leading-[20px] list-disc text-[16px]">
                  <li className="mb-0 ms-[24px]">
                    <span className="font-body font-semibold">
                      Suboptimal visitor experience
                    </span>
                    : long wait times and an unpolished first impression,
                    costly for businesses serving a high-end clientele.
                  </li>
                  <li className="ms-[24px]">
                    <span className="font-body font-semibold">
                      Critical security and compliance risk
                    </span>
                    : in an emergency, administrators lacked a reliable,
                    instant digital record of who was on-site, exposing the
                    company to traceability and data-compliance gaps.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 02 — Target users */}
        <div className="bg-[#e9e8ff] content-stretch flex flex-col items-start overflow-clip px-[195px] py-[40px] relative shrink-0 w-[1280px]">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[890px]">
            <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 w-full">
                <div className="font-body font-medium flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.24px] whitespace-nowrap">
                  <p className="leading-[30px]">02</p>
                </div>
                <div className="font-display font-bold flex flex-col justify-center min-w-full relative shrink-0 text-[56px] text-[#0f172a] tracking-[-0.84px] w-[min-content]">
                  <p className="leading-[normal]">Target users</p>
                </div>
              </div>
              <div className="content-stretch flex items-start relative shrink-0 w-[890px]">
                <div className="content-stretch flex flex-1 items-center min-w-px relative">
                  <div className="font-body font-semibold flex flex-1 flex-col justify-center leading-[0] min-w-px relative text-[#1e1e1e] text-[16px]">
                    <p className="leading-[20px]">
                      Since this is a multi-user product, designing this
                      module meant addressing the specific needs of three key
                      actors:
                    </p>
                  </div>
                </div>
              </div>
              <div className="gap-x-[20px] gap-y-[20px] grid grid-cols-3 relative shrink-0 w-full">
                <Persona
                  label="Visitor"
                  pillBg="#f4ebff"
                  pillText="#53389e"
                  title="Courier, interview candidate, external visitor (client, vendor…)"
                  body="Wants a fast, frictionless check-in for a great first impression, without unnecessary wait times at reception."
                />
                <Persona
                  label="Host"
                  pillBg="#e0f2fe"
                  pillText="#0369a1"
                  title="Internal employee receiving a visitor"
                  body="Wants to be notified smoothly when their visitor arrives and be able to prepare invitations in advance."
                />
                <Persona
                  label="Admin / Reception"
                  pillBg="#dcfce7"
                  pillText="#15803d"
                  title="Site manager"
                  body="Wants to reduce the operational load on reception, get real-time visibility into who's on-site for security, and easily handle forgotten check-outs."
                />
              </div>
            </div>
          </div>
        </div>

        {/* 03 — Discovery phase */}
        <div className="content-stretch flex flex-col items-start pt-[112px] px-[195px] relative shrink-0 w-[1280px]">
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[890px]">
            <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0 w-[731px]">
              <div className="font-body font-medium flex flex-col justify-center relative shrink-0 text-[20px] text-black tracking-[-0.2px] whitespace-nowrap">
                <p className="leading-[24px]">03</p>
              </div>
              <div className="font-display font-bold flex flex-col justify-center min-w-full relative shrink-0 text-[56px] text-[#0f172a] tracking-[-0.84px] w-[min-content]">
                <p className="leading-[normal]">
                  Discovery phase: pain points
                </p>
              </div>
            </div>
            <div className="relative shrink-0 w-full overflow-hidden rounded-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Discovery research synthesis"
                className="block w-full h-auto"
                src={imgDiscovery}
              />
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start leading-[0] relative shrink-0 text-[16px] w-[890px]">
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <div className="font-body font-semibold flex flex-col justify-center relative shrink-0 text-black w-[342px]">
                  <p className="leading-[20px]">Operational friction</p>
                </div>
                <div className="font-body font-normal flex flex-col justify-center min-w-full relative shrink-0 text-[#1e1e1e] w-[min-content]">
                  <p className="leading-[20px]">
                    Outdated paper processes generated bulky stacks of
                    documents and Excel files that took receptionists far too
                    long to fill in by hand. Approvals also required a person
                    to be physically present to validate them.
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <div className="font-body font-semibold flex flex-col justify-center relative shrink-0 text-black w-[342px]">
                  <p className="leading-[20px]">Visitor experience</p>
                </div>
                <div className="font-body font-normal flex flex-col justify-center min-w-full relative shrink-0 text-[#1e1e1e] w-[min-content]">
                  <p className="leading-[20px]">
                    Long wait times during simultaneous rushes forced
                    visitors to arrive early or call their host directly just
                    to announce their presence.
                  </p>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <div className="font-body font-semibold flex flex-col justify-center relative shrink-0 text-black w-[342px]">
                  <p className="leading-[20px]">Security and tracking</p>
                </div>
                <div className="font-body font-normal flex flex-col justify-center min-w-full relative shrink-0 text-[#1e1e1e] w-[min-content]">
                  <p className="leading-[20px]">
                    Visitors frequently forgot to check out, creating real
                    traceability risks for who was actually on-site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 04 — Scope definition and prioritization */}
        <div className="content-stretch flex flex-col items-start px-[195px] py-[112px] relative shrink-0 w-[1280px]">
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[890px]">
            <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0 w-[731px]">
              <div className="font-body font-medium flex flex-col justify-center relative shrink-0 text-[20px] text-black tracking-[-0.2px] whitespace-nowrap">
                <p className="leading-[24px]">04</p>
              </div>
              <div className="font-display font-bold flex flex-col justify-center min-w-full relative shrink-0 text-[56px] text-[#0f172a] tracking-[-0.84px] w-[min-content]">
                <p className="leading-[normal]">
                  Scope definition and prioritization
                </p>
              </div>
            </div>
            <div className="relative shrink-0 w-[890px] overflow-hidden rounded-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Scope prioritization board"
                className="block w-full h-auto"
                src={imgScope}
              />
            </div>
            <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-[890px]">
              <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 text-[16px] w-full">
                <div className="font-body font-semibold flex flex-col justify-center relative shrink-0 text-black w-[342px]">
                  <p className="leading-[20px]">
                    Must-haves (MVP essentials)
                  </p>
                </div>
                <div className="font-body font-normal flex flex-col justify-center min-w-full relative shrink-0 text-[#1e1e1e] w-[min-content]">
                  <ul className="list-disc">
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[20px]">
                        Replace paper entirely with a digital visitor
                        management system.
                      </span>
                    </li>
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[20px]">
                        Automate the check-in process.
                      </span>
                    </li>
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[20px]">
                        Create an admin dashboard for tracking and manually
                        signing out visitors who forgot to check out.
                      </span>
                    </li>
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[20px]">
                        Real-time traceability of who is on-site.
                      </span>
                    </li>
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[20px]">
                        Require visitors to photograph an ID at check-in.
                      </span>
                    </li>
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[20px]">
                        Allow visitors to complete a pre-check-in.
                      </span>
                    </li>
                    <li className="ms-[24px]">
                      <span className="leading-[20px]">
                        Display the company&rsquo;s logo on the welcome
                        screen.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 text-[16px] w-full">
                <div className="font-body font-semibold flex flex-col justify-center relative shrink-0 text-black w-[342px]">
                  <p className="leading-[20px]">
                    Nice-to-haves (future iterations)
                  </p>
                </div>
                <div className="font-body font-normal flex flex-col justify-center min-w-full relative shrink-0 text-[#1e1e1e] w-[min-content]">
                  <ul className="list-disc">
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[20px]">
                        Distinguish visit type (delivery, guest, interview).
                      </span>
                    </li>
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[20px]">
                        Integrate a reception-managed approval system.
                      </span>
                    </li>
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[20px]">
                        Let hosts send personalized invitations to visitors
                        in advance.
                      </span>
                    </li>
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[20px]">
                        Send host notifications via Microsoft Teams.
                      </span>
                    </li>
                    <li className="ms-[24px]">
                      <span className="leading-[20px]">
                        Export the visitor log as CSV.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-center pt-[40px] relative shrink-0 w-full">
                <div className="font-body font-semibold flex flex-col justify-center leading-[0] min-w-full relative shrink-0 text-[32px] text-[#0f172a] tracking-[-0.32px] w-[min-content]">
                  <p className="leading-[36px]">Timeline</p>
                </div>
                <div className="content-stretch flex items-start justify-center relative shrink-0 gap-x-16">
                  <TimelineTrack
                    name="V1 — Must-haves"
                    steps={[
                      { label: "Web app", color: "#c084fc" },
                      { label: "Tablet", color: "#c084fc" },
                      { label: "Feedback", color: "#4ade80" },
                    ]}
                  />
                  <TimelineTrack
                    name="V2 — Nice-to-haves"
                    steps={[
                      { label: "Web app", color: "#3b82f6" },
                      { label: "Tablet", color: "#3b82f6" },
                      { label: "Mobile", color: "#3b82f6" },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 05 — First iterations */}
        <div className="content-stretch flex flex-col items-start px-[195px] py-[112px] relative shrink-0 w-[1280px]">
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[890px]">
            <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0 w-[731px]">
              <div className="font-body font-medium flex flex-col justify-center relative shrink-0 text-[20px] text-black tracking-[-0.2px] whitespace-nowrap">
                <p className="leading-[24px]">05</p>
              </div>
              <div className="font-display font-bold flex flex-col justify-center min-w-full relative shrink-0 text-[56px] text-[#0f172a] tracking-[-0.84px] w-[min-content]">
                <p className="leading-[normal]">First iterations</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[890px]">
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                <div className="font-body font-semibold flex flex-col justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap">
                  <p className="leading-[20px]">Web app</p>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <div className="bg-[#dcfce7] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[999px] shrink-0">
                    <div className="font-body font-semibold flex flex-col justify-center leading-[0] relative shrink-0 text-[16px] text-[#15803d] whitespace-nowrap">
                      <p className="leading-[20px]">Admin / Reception</p>
                    </div>
                  </div>
                  <div className="font-body font-normal flex flex-col justify-center leading-[0] min-w-full relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content]">
                    <p className="leading-[20px] mb-0 whitespace-pre-wrap">
                      To support the sales team in converting prospects and
                      meet growing demand from receptionists, we prioritized
                      the following admin features:
                      <br aria-hidden />
                      <br aria-hidden />
                    </p>
                    <ul className="list-disc mb-0">
                      <li className="mb-0 ms-[24px]">
                        <span className="leading-[20px]">
                          Configuring the visitor journey and managing
                          categories.
                        </span>
                      </li>
                      <li className="ms-[24px]">
                        <span className="leading-[20px]">
                          The visitor log, including the ability to perform a
                          manual check-out.
                          <br aria-hidden />
                          <br aria-hidden />
                        </span>
                      </li>
                    </ul>
                    <p className="leading-[20px] mb-0 whitespace-pre-wrap">
                      A competitive analysis and interviews with
                      receptionists let me map out the different visitor
                      profiles and their associated reception flows.
                      <br aria-hidden />
                      <br aria-hidden />
                    </p>
                    <p className="leading-[20px] whitespace-pre-wrap">
                      One of the main design challenges was covering a huge
                      variety of profiles and flows to address every use
                      case — so I applied a core principle of our platform:
                      maximum modularity and flexibility.
                    </p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <div className="bg-[#e0f2fe] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[999px] shrink-0">
                    <div className="font-body font-semibold flex flex-col justify-center leading-[0] relative shrink-0 text-[16px] text-[#0369a1] whitespace-nowrap">
                      <p className="leading-[20px]">Host</p>
                    </div>
                  </div>
                  <div className="font-body font-normal flex flex-col justify-center leading-[0] min-w-full relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content] whitespace-pre-wrap">
                    <p className="leading-[20px] mb-0">
                      Once admins configured categories, employees
                      (non-admins) could pre-fill and send invitations to
                      their visitors.
                      <br aria-hidden />
                      <br aria-hidden />
                    </p>
                    <p className="leading-[20px]">
                      After this first version launched, field feedback
                      showed us that every site had strong specificities —
                      visitor categories and flows couldn&rsquo;t be
                      standardized across every organization. So we evolved
                      the flows, then adapted the tablet interface to support
                      fully self-serve check-in.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[890px]">
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                <div className="font-body font-semibold flex flex-col justify-center leading-[0] relative shrink-0 text-[16px] text-black whitespace-nowrap">
                  <p className="leading-[20px]">Tablet</p>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <div className="bg-[#f4ebff] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[999px] shrink-0">
                    <div className="font-body font-semibold flex flex-col justify-center leading-[0] relative shrink-0 text-[16px] text-[#53389e] whitespace-nowrap">
                      <p className="leading-[20px]">Visitor</p>
                    </div>
                  </div>
                  <div className="font-body font-normal flex flex-col justify-center leading-[0] min-w-full relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content]">
                    <p className="leading-[20px]">
                      For this first version, facing an urgent client
                      request, some features had to be deprioritized for a
                      later release. We also made trade-offs on user testing
                      ahead of launch, compensating with intensive
                      post-launch field feedback to prepare and structure V2.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 06 — Feedback and improvements */}
        <div className="content-stretch flex flex-col items-start px-[195px] py-[112px] relative shrink-0 w-[1280px]">
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[890px]">
            <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0 w-[731px]">
              <div className="font-body font-medium flex flex-col justify-center relative shrink-0 text-[20px] text-black tracking-[-0.2px] whitespace-nowrap">
                <p className="leading-[24px]">06</p>
              </div>
              <div className="font-display font-bold flex flex-col justify-center min-w-full relative shrink-0 text-[56px] text-[#0f172a] tracking-[-0.84px] w-[min-content]">
                <p className="leading-[normal]">Feedback and improvements</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[890px]">
              <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 w-full">
                <div className="font-body font-normal flex flex-col justify-center min-w-full relative shrink-0 text-[#1e1e1e] text-[0px] w-[min-content]">
                  <p className="mb-0 text-[16px] whitespace-pre-wrap">
                    <span className="leading-[20px]">
                      After the first version, our users suggested several
                      improvements:
                      <br aria-hidden />
                      <br aria-hidden />
                    </span>
                    <span className="font-body font-semibold leading-[20px]">
                      Web app
                    </span>
                  </p>
                  <ul className="list-disc mb-0 text-[16px]">
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[20px] text-[16px]">
                        Scoping visitor categories to each of the
                        company&rsquo;s different sites.
                      </span>
                    </li>
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[20px] text-[16px]">
                        Managing host groups and permissions by site and by
                        user group.
                      </span>
                    </li>
                    <li className="ms-[24px]">
                      <span className="leading-[20px] text-[16px]">
                        A printable-QR-code &ldquo;mobile kiosk&rdquo; to
                        allow check-in without a dedicated tablet or physical
                        kiosk.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="font-body font-semibold flex flex-col justify-center relative shrink-0 text-[16px] text-black w-[342px]">
                  <p className="leading-[20px]">Tablet</p>
                </div>
                <div className="font-body font-normal flex flex-col justify-center min-w-full relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content]">
                  <ul className="list-disc">
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[20px]">
                        Added electronic signatures for documents (e.g.,
                        NDAs).
                      </span>
                    </li>
                    <li className="ms-[24px]">
                      <span className="leading-[20px]">
                        Added automatic printing of name badges.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[890px]">
              <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 text-[16px] w-full">
                <div className="font-body font-semibold flex flex-col justify-center relative shrink-0 text-black w-[342px]">
                  <p className="leading-[20px]">Mobile</p>
                </div>
                <div className="font-body font-normal flex flex-col justify-center min-w-full relative shrink-0 text-[#1e1e1e] w-[min-content]">
                  <ul>
                    <li className="list-disc ms-[24px]">
                      <span className="leading-[20px]">
                        Integrated a mobile web kiosk.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My learnings */}
        <div className="content-stretch flex flex-col items-start px-[195px] py-[112px] relative shrink-0 w-[1280px]">
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-[890px]">
            <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] relative shrink-0 w-[731px]">
              <div className="font-body font-medium flex flex-col justify-center relative shrink-0 text-[20px] text-black tracking-[-0.2px] whitespace-nowrap">
                <p className="leading-[24px]">07</p>
              </div>
              <div className="font-display font-bold flex flex-col justify-center min-w-full relative shrink-0 text-[56px] text-[#0f172a] tracking-[-0.84px] w-[min-content]">
                <p className="leading-[normal]">My learnings</p>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[890px] gap-[32px]">
              <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-center relative shrink-0 w-[342px]">
                  <div className="font-body font-semibold flex flex-1 flex-col justify-center leading-[0] min-w-px relative text-[16px] text-black">
                    <p className="leading-[20px]">
                      The importance of real-world testing
                    </p>
                  </div>
                </div>
                <div className="font-body font-normal flex flex-1 flex-col justify-center leading-[0] min-w-px relative text-[#1e1e1e] text-[16px]">
                  <p className="leading-[20px]">
                    Working under time constraints pushed me to focus on the
                    essentials instead of chasing perfection. But not having
                    a physical tablet on hand during design revealed the
                    limits of working from theory alone — a reminder that
                    testing on target hardware is always essential, no
                    matter how confident you are in your own judgment.
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-center relative shrink-0 w-[342px]">
                  <div className="font-body font-semibold flex flex-1 flex-col justify-center leading-[0] min-w-px relative text-[16px] text-black">
                    <p className="leading-[20px]">You are not your user</p>
                  </div>
                </div>
                <div className="font-body font-normal flex flex-1 flex-col justify-center leading-[0] min-w-px relative text-[#1e1e1e] text-[16px]">
                  <p className="leading-[20px]">
                    Even with rigorous design reviews, the
                    &ldquo;tech-savvy&rdquo; trap is easy to fall into. Field
                    feedback reminded me that a reception module has to work
                    for everyone, including people far less comfortable with
                    touchscreens. No amount of upfront research catches
                    every edge case.
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-center relative shrink-0 w-[342px]">
                  <div className="font-body font-semibold flex flex-1 flex-col justify-center leading-[0] min-w-px relative text-[#1e1e1e] text-[16px]">
                    <p className="leading-[20px]">
                      Validate earlier, across every platform
                    </p>
                  </div>
                </div>
                <div className="font-body font-normal flex flex-1 flex-col justify-center leading-[0] min-w-px relative text-[#1e1e1e] text-[16px]">
                  <p className="leading-[20px]">
                    If I could do it again, I&rsquo;d push to design the
                    different platforms (Web Admin and Tablet) in parallel
                    from day one — shipping simulated front-ends earlier to
                    get real feedback as fast as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="bg-[#f03241] content-stretch flex flex-col gap-[56px] items-center py-[112px] relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[4px] items-center leading-[0] relative shrink-0 text-center text-white w-full">
            <div className="font-display font-bold flex flex-col justify-center relative shrink-0 text-[56px] tracking-[-0.84px] w-[550px]">
              <p className="leading-[normal]">Like what you see?</p>
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
              <p className="font-body font-semibold leading-[20px] relative shrink-0 text-[#f03241] text-[16px] whitespace-nowrap">
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
    </div>
  );
}
