import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full overflow-hidden bg-[#0f0c21]">
      <div className="pointer-events-none absolute left-[-13.7%] top-[50.6%] flex aspect-[818.81/739.81] w-[63.97%] items-center justify-center">
        <Image
          src="/images/hero/blob.svg"
          alt=""
          width={1342}
          height={1098}
          className="w-[84%] rotate-[31.79deg]"
        />
      </div>
      <div className="pointer-events-none absolute left-[80.7%] top-[-28.8%] flex aspect-[818.81/739.81] w-[63.97%] items-center justify-center">
        <Image
          src="/images/hero/blob.svg"
          alt=""
          width={1342}
          height={1098}
          className="w-[84%] rotate-[31.79deg]"
        />
      </div>

      <div className="relative flex h-screen min-w-0 flex-1 flex-col items-center justify-between px-5 py-[9.6vh]">
        <p
          aria-hidden
          className="m-0 select-none whitespace-nowrap p-2 text-center font-display text-[clamp(28px,4.5vw,52.857px)] font-extrabold tracking-[-0.53px] text-[#1e293b] opacity-0"
        >
          Draw a card
        </p>

        <div
          role="img"
          aria-label="Stack of purple cards with a PC monogram"
          className="group flex h-[min(320px,44.3vw)] w-[min(520px,72vw)] items-center justify-center max-[640px]:h-[58.2vw] max-[640px]:w-[84vw]"
        >
          <div className="relative w-[48.08%] [aspect-ratio:5/7] [filter:drop-shadow(0_24px_34px_rgba(24,12,71,0.55))] [transform:matrix(0.832,0.472,-0.831429,0.474286,0,0)]">
            <div className="absolute inset-0 rounded-[20px] bg-[rgba(113,93,244,0.2)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] [transform:translate(4.8%,3.4286%)]" />
            <div className="absolute inset-0 rounded-[20px] bg-[rgba(113,93,244,0.2)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] [transform:translate(3.6%,2.5714%)]" />
            <div className="absolute inset-0 rounded-[20px] bg-[rgba(113,93,244,0.2)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] [transform:translate(2.4%,1.7143%)]" />
            <div className="absolute inset-0 rounded-[20px] bg-[rgba(113,93,244,0.2)] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] [transform:translate(1.2%,0.8571%)]" />
            <div
              className="absolute inset-0 flex items-center justify-center rounded-[20px] border-[12px] border-transparent bg-[#715df4] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] transition-[transform,box-shadow] duration-[350ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:[box-shadow:inset_0_0_0_1px_rgba(255,255,255,0.14),0_30px_42px_rgba(9,6,26,0.5)] group-hover:[transform:translate(-7.6%,-5.4%)]"
            >
              <div className="relative w-[15.8%]">
                <Image
                  src="/images/hero/pc-logo-white.svg"
                  alt=""
                  width={48}
                  height={59}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <p className="m-0 whitespace-nowrap p-2 text-center font-display text-[clamp(28px,4.5vw,52.857px)] font-extrabold tracking-[-0.53px] text-white">
          Draw a card
        </p>
      </div>
    </section>
  );
}
