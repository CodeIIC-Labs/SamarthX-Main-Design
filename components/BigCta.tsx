import Image from "next/image";
import Link from "next/link";
import { BulbDoodle, CapDoodle, Sparkle, SquiggleArrow } from "./Art";

const GOA_PORTAL = "https://goa.samarthx.ac.in/";

function GoArrow({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 10.2h9.1V6.1L20 12l-6.9 5.9v-4.1H4z" />
    </svg>
  );
}

export default function BigCta() {
  return (
    <section className="px-4 pt-6 pb-12 sm:px-6" aria-labelledby="cta-heading">
      <div className="cta-card relative mx-auto w-full max-w-[1000px] overflow-hidden px-6 py-9 sm:px-10 sm:py-10">
        <div className="pointer-events-none absolute inset-0 text-white" aria-hidden="true">
          <Sparkle size={26} className="absolute top-5 right-6 text-[#FFD27A] opacity-80" />
          <Sparkle size={13} className="absolute top-12 left-[46%] opacity-60" />
          <CapDoodle className="absolute top-5 right-[27%] hidden h-8 w-11 text-[#FFD27A] opacity-60 sm:block" />
          <BulbDoodle className="absolute right-5 bottom-6 h-12 w-10 opacity-65" />
          <SquiggleArrow className="absolute bottom-5 left-5 h-6 w-12 opacity-60" />
          <span className="absolute top-8 left-6 h-10 w-10 rounded-full border border-dashed border-white/45" />
          <span className="absolute top-1/2 left-[42%] h-1.5 w-1.5 rounded-full bg-white/60" />
          <span className="absolute bottom-10 left-[36%] h-1 w-1 rounded-full bg-white/50" />
        </div>

        <div className="relative grid items-center gap-7 md:grid-cols-[1.12fr_0.88fr] md:gap-6">
          <div>
            <h2
              id="cta-heading"
              className="max-w-[380px] text-[1.85rem] leading-[1.1] font-extrabold tracking-[-0.03em] text-white sm:text-[2.2rem]"
            >
              Bring your schools online.
            </h2>
            <p className="mt-2.5 max-w-[330px] text-[12.5px] leading-relaxed text-white/80 sm:text-[13.5px]">
              Join the state and the 1,483 schools already running their daily
              operations on SamarthX.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2.5">
              <a
                href={GOA_PORTAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-3 text-[12px] font-bold no-underline shadow-[0_14px_24px_-14px_rgba(6,20,42,0.6)] transition-transform hover:-translate-y-0.5"
                style={{ color: "var(--brand-deep)" }}
              >
                Visit the Goa portal
                <GoArrow size={13} />
              </a>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/55 px-5 py-3 text-[12px] font-bold text-white no-underline transition-colors hover:bg-white/10"
              >
                Explore the platform
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[290px] md:max-w-[310px]">
            <div className="relative aspect-[4/3] rotate-[2deg] overflow-hidden rounded-[1.4rem] border-[5px] border-white/85 shadow-[0_30px_50px_-26px_rgba(6,20,42,0.65)]">
              <Image
                src="/images/news/reopen.webp"
                alt="Students sitting together at a government school in Goa"
                fill
                sizes="(min-width: 768px) 310px, 290px"
                className="object-cover"
              />
            </div>
            <span className="absolute -top-3 -left-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg">
              <Sparkle size={15} className="text-[#F0A500]" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
