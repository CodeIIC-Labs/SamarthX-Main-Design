import Image from "next/image";
import Link from "next/link";
import { AdmissionsArt, CapDoodle, SchoolDoodle, Sparkle } from "./Art";

const AVATARS = [
  { src: "/images/news/nep-schools.webp", alt: "Students in a Goa classroom" },
  { src: "/images/news/reopen.webp", alt: "Children at a government school" },
  { src: "/images/news/academic-year.webp", alt: "Students at their desks" },
];

function GoArrow({ size = 16 }: { size?: number }) {
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

function AvatarRow({ size = 30 }: { size?: number }) {
  return (
    <div className="flex items-center justify-center">
      {AVATARS.map((avatar, index) => (
        <span
          key={avatar.src}
          className="relative inline-block overflow-hidden rounded-full ring-2 ring-white"
          style={{
            width: size,
            height: size,
            marginLeft: index === 0 ? 0 : -8,
            zIndex: AVATARS.length - index,
          }}
        >
          <Image
            src={avatar.src}
            alt={avatar.alt}
            fill
            sizes={`${size}px`}
            className="object-cover"
          />
        </span>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative" aria-label="Hero">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-8 -left-24 h-72 w-72 rounded-full bg-[#CFE1FF] opacity-60 blur-3xl" />
        <div className="absolute top-12 -right-20 h-64 w-64 rounded-full bg-[#FFE3AD] opacity-55 blur-3xl" />
        <span className="absolute top-24 left-[9%] hidden h-20 w-20 rounded-full border border-dashed border-[#BCD3F4] lg:block" />
        <span className="absolute top-[46%] right-[10%] hidden h-14 w-14 rounded-[1.1rem] border border-[#FFE9BE] bg-white/30 lg:block" />
        <Sparkle size={20} className="absolute top-36 left-[19%] hidden text-[#7FA9E8] lg:block" />
        <Sparkle size={12} className="absolute top-[40%] right-[19%] hidden text-[#E9B64C] lg:block" />
      </div>

      <div className="relative mx-auto w-full max-w-[1000px] px-4 pt-4 pb-2 sm:px-6 sm:pt-6 xl:max-w-[1320px] 2xl:max-w-[1440px]">
        <div className="animate-fade-in-up flex justify-center">
          <p
            className="text-[10px] font-bold tracking-[0.16em] uppercase sm:text-[11px]"
            style={{ color: "#1A73E9" }}
          >
            India&rsquo;s Connected School Governance Ecosystem
          </p>
        </div>

        <h1
          className="animate-fade-in-up animation-delay-200 mx-auto mt-2.5 max-w-[1000px] text-center leading-[1.05] font-extrabold tracking-[-0.035em] sm:mt-2.5"
          style={{
            color: "var(--ink)",
            fontSize: "clamp(2.2rem, 5.2vw, 3.4rem)",
          }}
        >
          Bringing Every
          <br />
          School Together on{" "}
          <span
            className="font-script relative inline-block tracking-normal whitespace-nowrap"
            style={{
              color: "#1A73E9",
              fontSize: "1.12em",
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            One Platform
            <svg
              viewBox="0 0 240 12"
              preserveAspectRatio="none"
              className="absolute -bottom-1 left-[2%] h-2 w-[96%] text-[#FFB01F] sm:-bottom-1.5 sm:h-2.5"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M3 8.5C48 3 97 1.8 143 4.5c31 1.8 61 2 94-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        <p
          className="animate-fade-in-up animation-delay-200 mx-auto mt-3 max-w-[720px] text-center text-[15px] leading-relaxed sm:text-base"
          style={{ color: "var(--muted)" }}
        >
          SamarthX brings governance, administration, people and student
          journeys into one secure digital platform helping education teams move
          faster and make better decisions.
        </p>

        <div className="animate-fade-in-up animation-delay-400 mt-4 flex justify-center lg:mt-4">
          <Link
            href="/about-us"
            className="group inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-bold text-white no-underline shadow-[0_18px_32px_-18px_rgba(13,67,167,0.9)] transition-transform duration-300 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, #1A73E9 0%, #0D43A7 100%)",
            }}
          >
            Learn About Us
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              focusable="false"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path
                d="M4 12h15m0 0-5.5-5.5M19 12l-5.5 5.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="mt-4 grid gap-5 lg:mt-4 lg:grid-cols-[0.82fr_2.05fr_0.82fr] lg:gap-x-6 lg:gap-y-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_500px_minmax(0,1fr)_minmax(0,1fr)] xl:gap-x-4 2xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_540px_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="order-2 grid grid-cols-2 items-stretch gap-4 lg:contents">
            <aside className="animate-fade-in-up animation-delay-400 lg:col-start-1 lg:row-start-1 xl:self-center">
              <div className="relative flex h-full w-full flex-col items-center justify-center rounded-[1.35rem] border border-white/90 bg-white/60 px-3.5 py-4 text-center shadow-[0_24px_44px_-38px_rgba(11,30,63,0.5)] backdrop-blur-sm transition-transform duration-300 hover:rotate-0 lg:-rotate-2 lg:px-4">
                <span
                  className="absolute -top-2 left-1/2 h-4 w-14 -translate-x-1/2 -rotate-2 rounded-[3px] bg-[#C4D9FA]/90 shadow-sm"
                  aria-hidden="true"
                />
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full text-white shadow-[0_14px_24px_-14px_rgba(13,67,167,0.75)]"
                  style={{
                    background:
                      "linear-gradient(145deg, #1A73E9 0%, #0D43A7 55%, #08307E 100%)",
                  }}
                >
                  <CapDoodle className="h-6 w-6" />
                </span>
                <p
                  className="mt-2.5 text-[8.5px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: "var(--brand)" }}
                >
                  The mission
                </p>
                <p
                  className="mt-1.5 font-display text-[12.5px] leading-snug font-bold"
                  style={{ color: "var(--ink)" }}
                >
                  Built at the University of Delhi, with the Government of Goa.
                </p>
                <Link
                  href="/about-us"
                  className="mt-3 inline-flex items-center gap-1.5 text-[11.5px] font-bold no-underline transition-all hover:gap-2.5"
                  style={{ color: "var(--brand)" }}
                >
                  Explore more
                  <GoArrow size={12} />
                </Link>
                <Sparkle size={11} className="absolute top-4 right-3 text-[#A6C7F5]" />
              </div>
            </aside>

            <aside className="animate-fade-in-up animation-delay-400 lg:col-start-3 lg:row-start-1 xl:col-start-4 xl:self-center">
              <div className="relative flex h-full w-full flex-col items-center justify-center rounded-[1.35rem] border border-white/90 bg-gradient-to-br from-[#FFF3D6] via-[#FFFBF0] to-white/70 px-3.5 py-5 text-center shadow-[0_24px_44px_-38px_rgba(11,30,63,0.5)] backdrop-blur-sm transition-transform duration-300 hover:rotate-0 lg:rotate-2 lg:px-4">
                <span
                  className="absolute -top-2 left-1/2 h-4 w-14 -translate-x-1/2 rotate-2 rounded-[3px] bg-[#FFE2A8]/95 shadow-sm"
                  aria-hidden="true"
                />
                <AvatarRow size={30} />
                <p
                  className="font-display mt-2.5 text-[2rem] leading-none font-extrabold tracking-tight"
                  style={{ color: "var(--ink)" }}
                >
                  20,877
                </p>
                <p
                  className="mt-1.5 text-[11.5px] font-semibold"
                  style={{ color: "var(--ink)" }}
                >
                  Employees onboarded
                </p>
                <p
                  className="mt-0.5 text-[10px] leading-snug"
                  style={{ color: "var(--muted)" }}
                >
                  Trusted across Goa&rsquo;s schools
                </p>
                <Sparkle size={11} className="absolute bottom-4 right-3 text-[#E9B23C]" />
              </div>
            </aside>

            <aside className="animate-fade-in-up animation-delay-400 lg:col-start-1 lg:row-start-2 xl:col-start-2 xl:row-start-1 xl:self-center">
              <div className="relative flex h-full w-full flex-col items-center justify-center rounded-[1.35rem] border border-white/90 bg-gradient-to-br from-[#FFF3D6] via-[#FFFBF0] to-white/70 px-3.5 py-3.5 text-center shadow-[0_24px_44px_-38px_rgba(11,30,63,0.5)] backdrop-blur-sm transition-transform duration-300 hover:rotate-0 lg:rotate-[1.5deg] lg:px-4">
                <span
                  className="absolute -top-2 left-1/2 h-4 w-14 -translate-x-1/2 rotate-1 rounded-[3px] bg-[#FFE2A8]/95 shadow-sm"
                  aria-hidden="true"
                />
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/85 shadow-sm ring-1 ring-[#FFE2A8]">
                  <AdmissionsArt size={24} />
                </span>
                <p
                  className="font-display mt-1.5 text-[2rem] leading-none font-extrabold tracking-tight"
                  style={{ color: "var(--ink)" }}
                >
                  5,000<span style={{ color: "#C98A00" }}>+</span>
                </p>
                <p
                  className="mt-1.5 text-[11.5px] font-semibold"
                  style={{ color: "var(--ink)" }}
                >
                  Admissions delivered
                </p>
                <p
                  className="mt-0.5 text-[10px] leading-snug"
                  style={{ color: "var(--muted)" }}
                >
                  One window for every student
                </p>
                <Sparkle size={11} className="absolute bottom-4 right-3 text-[#E9B23C]" />
              </div>
            </aside>

            <aside className="animate-fade-in-up animation-delay-400 lg:col-start-3 lg:row-start-2 xl:col-start-5 xl:row-start-1 xl:self-center">
              <div className="relative flex h-full w-full flex-col items-center justify-center rounded-[1.35rem] border border-white/90 bg-white/60 px-3.5 py-4 text-center shadow-[0_24px_44px_-38px_rgba(11,30,63,0.5)] backdrop-blur-sm transition-transform duration-300 hover:rotate-0 lg:-rotate-[1.5deg] lg:px-4">
                <span
                  className="absolute -top-2 left-1/2 h-4 w-14 -translate-x-1/2 -rotate-1 rounded-[3px] bg-[#C4D9FA]/90 shadow-sm"
                  aria-hidden="true"
                />
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full text-white shadow-[0_14px_24px_-14px_rgba(13,67,167,0.75)]"
                  style={{
                    background:
                      "linear-gradient(145deg, #1A73E9 0%, #0D43A7 55%, #08307E 100%)",
                  }}
                >
                  <SchoolDoodle className="h-6 w-6" />
                </span>
                <p
                  className="mt-2.5 text-[8.5px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: "var(--brand)" }}
                >
                  The reach
                </p>
                <p
                  className="mt-1.5 font-display text-[12.5px] leading-snug font-bold"
                  style={{ color: "var(--ink)" }}
                >
                  1,483 schools connected across Goa.
                </p>
                <Link
                  href="/state-onboarded"
                  className="mt-3 inline-flex items-center gap-1.5 text-[11.5px] font-bold no-underline transition-all hover:gap-2.5"
                  style={{ color: "var(--brand)" }}
                >
                  See the rollout
                  <GoArrow size={12} />
                </Link>
                <Sparkle size={11} className="absolute top-4 right-3 text-[#A6C7F5]" />
              </div>
            </aside>
          </div>

          <div className="animate-fade-in-up animation-delay-200 order-1 lg:order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:self-center xl:col-start-3 xl:row-span-1">
            <div className="group relative">
              <div
                className="pointer-events-none absolute -inset-2.5 -z-10 rounded-[2rem] bg-gradient-to-br from-[#C9DDFF]/70 via-transparent to-[#FFE3AC]/70 blur-lg"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] ring-1 ring-white/70 shadow-[0_36px_70px_-40px_rgba(8,48,126,0.55)] sm:aspect-[3/2]">
                <Image
                  src="/images/news/science-fair.webp"
                  alt="Students presenting a smart irrigation project at the National Science Fair"
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#071a38]/40 via-transparent to-[#071a38]/50" />

                <div className="absolute top-3 left-3 rounded-full bg-white/25 p-1 backdrop-blur-sm sm:top-4 sm:left-4">
                  <AvatarRow size={28} />
                </div>

                <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-[#071a38]/80 px-2.5 py-1.5 text-[9.5px] font-bold tracking-[0.08em] text-white backdrop-blur-sm sm:top-4 sm:right-4 sm:text-[10px]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFAA01] opacity-80" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FFAA01]" />
                  </span>
                  LIVE IN GOA
                </span>

                <div className="absolute inset-x-2.5 bottom-2.5 flex items-center justify-between gap-2 rounded-full bg-white/90 py-1.5 pr-2 pl-3 shadow-[0_10px_24px_-12px_rgba(7,26,56,0.5)] backdrop-blur-md sm:inset-x-3 sm:bottom-3 sm:px-4">
                  <span
                    className="flex items-center gap-1.5 text-[9.5px] font-semibold whitespace-nowrap sm:text-[10.5px]"
                    style={{ color: "var(--ink)" }}
                  >
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </span>
                    UDISE+ synced
                  </span>

                  <Link
                    href="/state-onboarded"
                    aria-label="See how Goa went live on SamarthX"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white shadow-[0_8px_16px_-6px_rgba(13,67,167,0.85)] transition-transform hover:scale-105"
                    style={{ backgroundColor: "var(--brand)" }}
                  >
                    <GoArrow size={15} />
                  </Link>

                  <span
                    className="text-[9.5px] font-semibold whitespace-nowrap sm:text-[10.5px]"
                    style={{ color: "var(--ink)" }}
                  >
                    1,483 schools
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
