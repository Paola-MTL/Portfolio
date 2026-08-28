import type { Metadata } from "next";
import BackButton from "./BackButton";
import ScrollDownHint from "./ScrollDownHint";
import MockupsSection from "./MockupsSection";

export const metadata: Metadata = {
  title: "Elia — Paola Cejoco",
  description: "Digitizing visitor check-in for modern workplaces.",
  robots: { index: false, follow: false },
};

const imgDiscovery = "/images/elia/discovery-pain-points.png";
const imgScope = "/images/elia/scope-priorities.png";
const imgArrowDown = "/images/elia/arrow-1.svg";
const imgArrowRight = "/images/elia/arrow-3.svg";
const imgDiagonalScreens1 = "/images/elia/diagonal-screens-1.png";
const imgVisitorLog = "/images/elia/visitor-log.png";
const imgVisitorJourney = "/images/elia/visitor-journey-config.png";

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
          <BackButton />

          <div
            className="absolute h-[327px] left-[354.42px] top-[197px] w-[571.163px]"
            data-node-id="25:9100"
            data-name="diagonal screens 1"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt=""
              className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
              src={imgDiagonalScreens1}
            />
          </div>

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
                <p className="leading-[24px]">About the project</p>
              </div>
              <div className="font-display font-bold flex flex-col justify-center min-w-full relative shrink-0 text-[56px] text-[#0f172a] tracking-[-0.84px] w-[min-content]">
                <p className="leading-[normal]">
                  Streamline company visitor management
                </p>
              </div>
            </div>
            <div className="content-stretch flex gap-[116px] items-start relative shrink-0 w-[890px]">
              <div className="content-stretch flex flex-col gap-[32px] items-start relative self-stretch shrink-0 w-[615px]">
                <div className="font-body font-normal flex flex-col justify-center leading-[0] min-w-full relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content] whitespace-pre-wrap">
                  <p className="leading-[20px] mb-4">
                    elia is an all-in-one management platform designed for
                    workspaces. It allows for the centralization of multiple
                    services, including office and meeting room bookings,
                    visitor management, and service request processing.
                  </p>
                  <p className="leading-[20px] mb-0">
                    In response to the evolving dynamics of the office and the
                    growing demand from our clients, the visitor management
                    module has been reprioritized in our strategic roadmap.
                    <br aria-hidden />
                    <br aria-hidden />
                    The goal: to digitize the reception in the company to
                    eliminate operational friction and provide a seamless
                    experience directly integrated into our platform.
                  </p>
                </div>
                <a
                  href="#prototype"
                  className="content-stretch flex gap-[7.539px] items-center justify-center relative shrink-0 transition-opacity hover:opacity-70"
                >
                  <div className="content-stretch flex items-center justify-center py-[6.031px] relative shrink-0">
                    <div className="font-body font-medium flex flex-col justify-center leading-[0] relative shrink-0 text-[#6c65ff] text-[18.09px] text-center tracking-[-0.1809px] whitespace-nowrap">
                      <p className="leading-[22.616px]">Jump to prototype</p>
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
                </a>
              </div>
              <div className="content-stretch flex flex-1 flex-col gap-[24.124px] items-start leading-[0] min-w-px relative self-stretch text-black">
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  <div className="font-body font-medium flex flex-col justify-center relative shrink-0 text-[20px] tracking-[-0.2px] w-[195.252px]">
                    <p className="leading-[24px]">Role</p>
                  </div>
                  <div className="font-body font-normal flex flex-col justify-center min-w-full relative shrink-0 text-[16px] w-[min-content]">
                    <p className="leading-[20px]">Lead Product Designer</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  <div className="font-body font-medium flex flex-col justify-center relative shrink-0 text-[20px] tracking-[-0.2px] w-[195.252px]">
                    <p className="leading-[24px]">Duration</p>
                  </div>
                  <div className="font-body font-normal flex flex-col justify-center relative shrink-0 text-[16px] w-[195.252px]">
                    <p className="leading-[20px]">4 months</p>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
                  <div className="font-body font-medium flex flex-col justify-center relative shrink-0 text-[20px] tracking-[-0.2px] w-full">
                    <p className="leading-[24px]">Collaboration</p>
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
                    <p className="leading-[24px]">Project type</p>
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

        {/* Mockups strip — recreation of Framer's div.framer-tcpmhp: two
            infinite marquees (tablet row left, phone row right) at 40 px/s,
            each sliding in from its travel direction on scroll-into-view. */}
        <MockupsSection />

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
                  archaic paper processes. This approach created two major
                  issues:
                  <br aria-hidden />
                  <br aria-hidden />
                </p>
                <ul className="leading-[20px] list-disc text-[16px]">
                  <li className="mb-0 ms-[24px]">
                    <span className="font-body font-semibold">
                      An underwhelming visitor experience
                    </span>
                    : Long wait times and a poorly managed first impression,
                    detrimental for companies hosting high-end clientele.
                  </li>
                  <li className="ms-[24px]">
                    <span className="font-body font-semibold">
                      A critical risk to security and compliance
                    </span>
                    : In case of an emergency (evacuation), management lacked
                    a reliable and instantaneous digital record of
                    individuals present on-site, exposing them to
                    traceability and data compliance failures.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 02 — Target users — background bleeds full viewport width, content
            stays centered to the 1280px canvas */}
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-clip bg-[#e9e8ff]">
          <div className="content-stretch mx-auto flex max-w-[1280px] flex-col items-start px-[195px] py-[40px] relative w-full">
            <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex flex-col gap-[8px] items-start leading-[0] relative shrink-0 w-full">
                <div className="font-body font-medium flex flex-col justify-center relative shrink-0 text-[#1e1e1e] text-[24px] tracking-[-0.24px] whitespace-nowrap">
                  <p className="leading-[30px]">02</p>
                </div>
                <div className="font-display font-bold flex flex-col justify-center min-w-full relative shrink-0 text-[56px] text-[#0f172a] tracking-[-0.84px] w-[min-content]">
                  <p className="leading-[normal]">Target users</p>
                </div>
              </div>
              <div className="content-stretch flex items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-1 items-center min-w-px relative">
                  <div className="font-body font-semibold flex flex-1 flex-col justify-center leading-[0] min-w-px relative text-[#1e1e1e] text-[16px]">
                    <p className="leading-[20px]">
                      Since this is a multi-user product, the design of this
                      module needed to address the specific needs of three
                      key stakeholders:
                    </p>
                  </div>
                </div>
              </div>
              <div className="gap-x-[20px] gap-y-[20px] grid grid-cols-3 relative shrink-0 w-full">
                <Persona
                  label="Visitor"
                  pillBg="#f4ebff"
                  pillText="#53389e"
                  title="Delivery person, interviewee, external visitor (client, supplier...)"
                  body="They seek a quick and smooth registration process to enjoy an excellent first impression of the company without enduring unnecessary wait times at reception."
                />
                <Persona
                  label="Host"
                  pillBg="#e0f2fe"
                  pillText="#0369a1"
                  title="Internal person who receives"
                  body="They wish to be notified of their visitor's arrival seamlessly and to prepare their invitations in advance."
                />
                <Persona
                  label="Administrator/Reception"
                  pillBg="#dcfce7"
                  pillText="#15803d"
                  title="Site manager"
                  body="Their goal is to lighten the operational burden of reception, ensure real-time visibility of individuals present on-site for security reasons, and easily manage check-out oversights."
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
                  <p className="leading-[20px]">Operational frictions</p>
                </div>
                <div className="font-body font-normal flex flex-col justify-center min-w-full relative shrink-0 text-[#1e1e1e] w-[min-content]">
                  <ul className="list-disc">
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[20px]">
                        Outdated paper processes generating cumbersome stacks
                        of documents and excessively long Excel files that
                        must be manually filled out by the receptionist.
                      </span>
                    </li>
                    <li className="ms-[24px]">
                      <span className="leading-[20px]">
                        Need for physical human intervention to validate
                        approvals.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <div className="font-body font-semibold flex flex-col justify-center relative shrink-0 text-black w-[342px]">
                  <p className="leading-[20px]">Visitor experience</p>
                </div>
                <div className="font-body font-normal flex flex-col justify-center min-w-full relative shrink-0 text-[#1e1e1e] w-[min-content]">
                  <ul className="list-disc">
                    <li className="ms-[24px]">
                      <span className="leading-[20px]">
                        Extended wait times during peak periods, forcing
                        visitors to anticipate their arrival or directly call
                        their host to announce their presence.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <div className="font-body font-semibold flex flex-col justify-center relative shrink-0 text-black w-[342px]">
                  <p className="leading-[20px]">Security and tracking</p>
                </div>
                <div className="font-body font-normal flex flex-col justify-center min-w-full relative shrink-0 text-[#1e1e1e] w-[min-content]">
                  <ul className="list-disc">
                    <li className="ms-[24px]">
                      <span className="leading-[20px]">
                        Frequent forgetfulness of the check-out procedure by
                        visitors, creating risks for the traceability of
                        individuals present on site.
                      </span>
                    </li>
                  </ul>
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
                  Definition of scope and prioritization
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
                    Must-Haves (Essential for the MVP)
                  </p>
                </div>
                <div className="font-body font-normal flex flex-col justify-center min-w-full relative shrink-0 text-[#1e1e1e] w-[min-content]">
                  <ul className="list-disc">
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[20px]">
                        Implementation of a digital visitor management
                        system to completely replace the paper format.
                      </span>
                    </li>
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[20px]">
                        Automation of the check-in process.
                      </span>
                    </li>
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[20px]">
                        Creation of an admin dashboard for tracking and
                        manual sign-out of visitors in case of forgetfulness.
                      </span>
                    </li>
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[20px]">
                        Real-time traceability of individuals present on
                        site.
                      </span>
                    </li>
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[20px]">
                        Requirement for visitors to take a photo of an ID
                        during registration.
                      </span>
                    </li>
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[20px]">
                        Option for visitors to perform a pre-check-in.
                      </span>
                    </li>
                    <li className="ms-[24px]">
                      <span className="leading-[20px]">
                        Display of the company logo on the homepage.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="content-stretch flex flex-col gap-[16px] items-start leading-[0] relative shrink-0 text-[16px] w-full">
                <div className="font-body font-semibold flex flex-col justify-center relative shrink-0 text-black w-[342px]">
                  <p className="leading-[20px]">
                    Nice-to-Haves (Future enhancements)
                  </p>
                </div>
                <div className="font-body font-normal flex flex-col justify-center min-w-full relative shrink-0 text-[#1e1e1e] w-[min-content]">
                  <ul className="list-disc">
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[20px]">
                        Distinction of visit type (delivery, visitor,
                        maintenance).
                      </span>
                    </li>
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[20px]">
                        Integration of an approval system managed by the
                        reception.
                      </span>
                    </li>
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[20px]">
                        Sending personalized invitations to visitors by the
                        host in advance.
                      </span>
                    </li>
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[20px]">
                        Notifications sent to the host via Microsoft Teams.
                      </span>
                    </li>
                    <li className="ms-[24px]">
                      <span className="leading-[20px]">
                        Export functionality for the visitor log in CSV
                        format.
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
                    name="V1 - Must-Haves"
                    steps={[
                      { label: "Web application", color: "#c084fc" },
                      { label: "Tablet", color: "#c084fc" },
                      { label: "Feedback", color: "#4ade80" },
                    ]}
                  />
                  <TimelineTrack
                    name="V2 - Nice-to-Haves"
                    steps={[
                      { label: "Web application", color: "#3b82f6" },
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
                      To support the sales team in converting leads and to
                      meet the growing demand from receptionists, we
                      prioritized the following administrator features:
                      <br aria-hidden />
                      <br aria-hidden />
                    </p>
                    <ul className="list-disc mb-0">
                      <li className="mb-0 ms-[24px]">
                        <span className="leading-[20px]">
                          Visitor journey configuration and category
                          management.
                        </span>
                      </li>
                      <li className="ms-[24px]">
                        <span className="leading-[20px]">
                          The visitor log, including the ability to perform
                          manual check-outs.
                          <br aria-hidden />
                          <br aria-hidden />
                        </span>
                      </li>
                    </ul>
                    <p className="leading-[20px] mb-0 whitespace-pre-wrap">
                      A competitive analysis and interviews conducted with
                      receptionists allowed me to map out the different
                      visitor profiles and the associated types of reception.
                      <br aria-hidden />
                      <br aria-hidden />
                    </p>
                    <p className="leading-[20px] whitespace-pre-wrap">
                      One of the main design challenges was the ability to
                      accommodate a wide variety of profiles and flows to
                      cover all use cases. Therefore, I applied a key
                      principle at the heart of our platform: to offer
                      maximum modularity and flexibility.
                    </p>
                  </div>
                  <div className="relative shrink-0 w-full overflow-hidden rounded-md">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="elia visitor log — web admin interface"
                      className="block w-full h-auto"
                      src={imgVisitorLog}
                    />
                  </div>
                  <div className="relative shrink-0 w-full overflow-hidden rounded-md">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt="elia visitor journey configuration — building a visitor flow and document actions in the web admin"
                      className="block w-full h-auto"
                      src={imgVisitorJourney}
                    />
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                  <div className="bg-[#e0f2fe] content-stretch flex items-center justify-center px-[12px] py-[4px] relative rounded-[999px] shrink-0">
                    <div className="font-body font-semibold flex flex-col justify-center leading-[0] relative shrink-0 text-[16px] text-[#0369a1] whitespace-nowrap">
                      <p className="leading-[20px]">Host</p>
                    </div>
                  </div>
                  <div className="font-body font-normal flex flex-col justify-center leading-[0] min-w-full relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content] whitespace-pre-wrap">
                    <p className="leading-[20px]">
                      Once the categories were set up by the administrators,
                      collaborators (non-admins) could pre-fill and send an
                      invitation to their visitors. However, after the
                      launch of this first version, feedback from the field
                      indicated that each site had strong specificities: the
                      categories and visitor flows should not be
                      standardized across all organizations. We therefore
                      evolved the processes and adapted the tablet interface
                      to allow for complete self-check-in.
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
                      For this first version, in response to an urgent
                      client request, some features had to be deprioritized
                      for a later version. Compromises were also made on
                      user testing prior to the launch, compensated by
                      intensive collection of field feedback post-launch to
                      prepare and structure V2.
                    </p>
                  </div>
                  <div
                    id="prototype"
                    className="relative w-full overflow-hidden rounded-md scroll-mt-[112px]"
                    style={{ aspectRatio: "890 / 771" }}
                  >
                    <iframe
                      src="/prototypes/elia-visitor-checkin.html"
                      title="Elia visitor check-in interactive prototype"
                      className="absolute inset-0 h-full w-full border-0"
                      loading="lazy"
                    />
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
                <div className="font-body font-normal flex flex-col justify-center min-w-full relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content]">
                  <p className="leading-[20px] mb-0 whitespace-pre-wrap">
                    Following the first version, several suggestions have
                    been made by our users:
                  </p>
                </div>
                <div className="font-body font-semibold flex flex-col justify-center relative shrink-0 text-[16px] text-black w-[342px]">
                  <p className="leading-[20px]">Web Application</p>
                </div>
                <div className="font-body font-normal flex flex-col justify-center min-w-full relative shrink-0 text-[#1e1e1e] text-[16px] w-[min-content]">
                  <ul className="list-disc mb-0">
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[20px]">
                        Ability to compartmentalize (scope) visitor
                        categories according to the different sites of the
                        company.
                      </span>
                    </li>
                    <li className="mb-0 ms-[24px]">
                      <span className="leading-[20px]">
                        Management of host groups and permissions by site
                        and by user group.
                      </span>
                    </li>
                    <li className="ms-[24px]">
                      <span className="leading-[20px]">
                        Implementation of a &ldquo;mobile&rdquo; kiosk (via a
                        printable QR code) to allow registration without
                        requiring a dedicated tablet or physical digital
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
                        Addition of electronic signature for documents
                        (e.g., confidentiality agreements).
                      </span>
                    </li>
                    <li className="ms-[24px]">
                      <span className="leading-[20px]">
                        Addition of automatic printing of name badges.
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
                        Integration of a mobile web kiosk
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
                      The importance of testing in real conditions
                    </p>
                  </div>
                </div>
                <div className="font-body font-normal flex flex-1 flex-col justify-center leading-[0] min-w-px relative text-[#1e1e1e] text-[16px]">
                  <p className="leading-[20px]">
                    Working under time constraints forced me to focus on the
                    essentials and not strive for perfection at all costs,
                    concentrating on what truly matters. However, the lack
                    of physical support (the actual tablet) during the
                    design phase highlighted the limitations of theory. It
                    confirmed to me that one cannot rely solely on their own
                    judgment: it is essential to test on the target
                    hardware.
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-center relative shrink-0 w-[342px]">
                  <div className="font-body font-semibold flex flex-1 flex-col justify-center leading-[0] min-w-px relative text-[16px] text-black">
                    <p className="leading-[20px]">We are not our users</p>
                  </div>
                </div>
                <div className="font-body font-normal flex flex-1 flex-col justify-center leading-[0] min-w-px relative text-[#1e1e1e] text-[16px]">
                  <p className="leading-[20px]">
                    Even with structured design reviews, the trap of being
                    tech-savvy lurks. Analyzing field feedback reminded me
                    that a reception module is aimed at everyone, including
                    profiles that are much less comfortable with touch.
                    Despite prior research, there are always use cases we
                    hadn&rsquo;t anticipated.
                  </p>
                </div>
              </div>
              <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex items-center justify-center relative shrink-0 w-[342px]">
                  <div className="font-body font-semibold flex flex-1 flex-col justify-center leading-[0] min-w-px relative text-[#1e1e1e] text-[16px]">
                    <p className="leading-[20px]">
                      Validate earlier across all platforms
                    </p>
                  </div>
                </div>
                <div className="font-body font-normal flex flex-1 flex-col justify-center leading-[0] min-w-px relative text-[#1e1e1e] text-[16px]">
                  <p className="leading-[20px]">
                    If I had to do it again, I would push to design the
                    different platforms (Web Admin and Tablet) in parallel
                    from day one, even if it meant releasing simulated
                    front-end versions earlier to get real feedback as
                    quickly as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
      </div>
    </div>
  );
}
