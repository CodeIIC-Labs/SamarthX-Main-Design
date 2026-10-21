import Image from "next/image";
import Link from "next/link";
import { AdmissionsArt, CapDoodle, SchoolDoodle } from "./Art";

const AVATARS = [
  { src: "/images/news/nep-schools.webp", alt: "Students in a Goa classroom" },
  { src: "/images/news/reopen.webp", alt: "Children at a government school" },
  { src: "/images/news/academic-year.webp", alt: "Students at their desks" },
];

type CardKind = "employees" | "admissions" | "mission" | "schools";

const CARD_ORDER: CardKind[] = ["employees", "admissions", "mission", "schools"];

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
    <div className="flex items-center">
      {AVATARS.map((avatar, index) => (
        <span
          key={avatar.src}
          className="relative inline-block overflow-hidden rounded-full ring-2 ring-white"
          style={{
            width: size,
            height: size,
            marginLeft: index === 0 ? 0 : -9,
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

function StatCard({ kind }: { kind: CardKind }) {
  const base =
    "flex h-full flex-col justify-between rounded-[1.1rem] p-4 pb-7 shadow-[0_26px_50px_-32px_rgba(2,12,32,0.85)] transition-transform duration-300 hover:-translate-y-1";

  if (kind === "employees") {
    return (
      <div className={`${base} bg-white`}>
        <div className="flex items-start justify-between">
          <AvatarRow size={30} />
          <span className="rounded-full bg-[#EEF4FF] px-2 py-1 text-[8.5px] font-bold tracking-[0.12em] text-[#0D43A7] uppercase">
            Goa
          </span>
        </div>
        <div>
          <p className="font-display text-[1.9rem] leading-none font-extrabold tracking-tight text-[#0B1E3F]">
            20,877
          </p>
          <p className="mt-2 text-[11.5px] font-semibold text-[#0B1E3F]">
            Employees onboarded
          </p>
          <p className="mt-1 text-[10px] leading-snug text-[#5A6784]">
            Trusted across Goa&rsquo;s schools
          </p>
        </div>
      </div>
    );
  }

  if (kind === "admissions") {
    return (
      <div className={`${base} bg-[#FFF4DC]`}>
        <div className="flex items-center justify-between">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/80 ring-1 ring-[#F1DCAE]">
            <AdmissionsArt size={22} />
          </span>
          <span className="text-[8.5px] font-bold tracking-[0.14em] text-[#9C6A00] uppercase">
            Admissions
          </span>
        </div>
        <div>
          <p className="font-display text-[1.9rem] leading-none font-extrabold tracking-tight text-[#0B1E3F]">
            5,000<span className="text-[#C98A00]">+</span>
          </p>
          <p className="mt-2 text-[11.5px] font-semibold text-[#0B1E3F]">
            Admissions delivered
          </p>
          <p className="mt-1 text-[10px] leading-snug text-[#7A6647]">
            One window for every student
          </p>
        </div>
      </div>
    );
  }

  if (kind === "mission") {
    return (
      <div className={`${base} bg-[#0B1E3F]`}>
        <div className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FFAA01] text-[#0B1E3F]">
            <CapDoodle className="h-5 w-5" />
          </span>
          <span className="text-[8.5px] font-bold tracking-[0.18em] text-[#FFC24D] uppercase">
            The mission
          </span>
        </div>
        <p className="font-display text-[13px] leading-snug font-semibold text-white">
          Built at the University of Delhi, with the Government of Goa.
        </p>
        <Link
          href="/about-us"
          className="group inline-flex items-center gap-1.5 text-[11px] font-bold text-[#FFC24D] no-underline transition-colors hover:text-white"
        >
          Explore more
          <GoArrow size={11} />
        </Link>
      </div>
    );
  }

  return (
    <div className={`${base} bg-white`}>
      <div className="flex items-center justify-between">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EAF1FF] text-[#0D43A7]">
          <SchoolDoodle className="h-5 w-5" />
        </span>
        <span className="text-[8.5px] font-bold tracking-[0.16em] text-[#0D43A7] uppercase">
          The reach
        </span>
      </div>
      <div>
        <p className="font-display text-[1.9rem] leading-none font-extrabold tracking-tight text-[#0B1E3F]">
          1,483
        </p>
        <p className="mt-2 text-[11.5px] font-semibold text-[#0B1E3F]">
          Schools connected across Goa
        </p>
        <Link
          href="/state-onboarded"
          className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-bold text-[#0D43A7] no-underline transition-colors hover:text-[#08307E]"
        >
          See the rollout
          <GoArrow size={11} />
        </Link>
      </div>
    </div>
  );
}

function MarqueeSet({ clone = false }: { clone?: boolean }) {
  return (
    <div
      className="flex shrink-0 gap-3 pr-3"
      aria-hidden={clone || undefined}
      inert={clone || undefined}
    >
      {CARD_ORDER.map((kind) => (
        <div key={kind} className="h-[178px] w-[244px] shrink-0 sm:w-[262px]">
          <StatCard kind={kind} />
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative px-3 pt-3 pb-2 sm:px-4 sm:pt-4"
      aria-label="Hero"
    >
      <div className="relative mx-auto w-full max-w-[1680px] overflow-hidden rounded-[1.6rem] bg-[#071A38] shadow-[0_36px_70px_-46px_rgba(5,20,45,0.75)] sm:rounded-[2rem]">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/news/science-fair.webp"
            alt=""
            fill
            priority
            sizes="(min-width: 1680px) 1680px, 100vw"
            className="object-cover object-[62%_40%] sm:object-[60%_35%] lg:object-[50%_32%]"
          />
          <div className="absolute inset-0 bg-[#0A2B63]/20" />
          <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(4,16,36,0.97)_0%,rgba(6,26,58,0.94)_40%,rgba(10,49,112,0.82)_68%,rgba(15,73,158,0.45)_88%,rgba(26,115,233,0.25)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-[46%] bg-[linear-gradient(180deg,rgba(4,18,40,0)_0%,rgba(4,16,36,0.5)_62%,rgba(3,13,30,0.8)_100%)]" />
          <div className="absolute -top-24 right-0 h-[380px] w-[460px] rounded-full bg-[#8FC4FF]/20 blur-[90px]" />
        </div>

        <div className="relative z-10 flex flex-col pt-8 sm:pt-10 lg:min-h-[610px] lg:pt-12 xl:min-h-[620px] xl:pt-12 2xl:pt-14">
          <div className="max-w-[960px] px-5 sm:px-8 lg:px-12 xl:px-14 2xl:px-16">
            <p className="animate-fade-in-up flex items-center gap-2.5 text-[9px] font-semibold tracking-[0.14em] text-white/65 uppercase sm:text-[10.5px] sm:tracking-[0.2em]">
              <span className="h-px w-6 bg-[#FFAA01]" aria-hidden="true" />
              India&rsquo;s Connected School Governance Ecosystem
            </p>

            <h1
              className="animate-fade-in-up animation-delay-200 font-display mt-4 max-w-[900px] font-light leading-[1.04] tracking-[-0.03em] text-white"
              style={{ fontSize: "clamp(2.15rem, 4.3vw, 3.75rem)" }}
            >
              Bringing every school{" "}
              <br className="hidden sm:block" />
              together on one platform.
            </h1>

            <p className="animate-fade-in-up animation-delay-200 mt-5 max-w-[560px] text-[14px] leading-relaxed text-white/75 sm:text-[15.5px]">
              SamarthX brings governance, administration, people and student
              journeys into one secure platform, helping education teams move
              faster and make better decisions.
            </p>

            <Link
              href="/state-onboarded"
              className="group animate-fade-in-up animation-delay-400 mt-6 inline-flex items-center gap-2 rounded-full bg-[#FFAA01] py-1.5 pr-1.5 pl-5 text-[10.5px] font-extrabold tracking-[0.14em] text-[#0B1E3F] uppercase shadow-[0_16px_30px_-16px_rgba(255,170,1,0.75)] no-underline transition-colors hover:bg-[#FFB824] sm:mt-7 sm:pl-6 sm:text-[11px]"
            >
              Explore the platform
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B1E3F] text-[#FFAA01] transition-transform duration-300 group-hover:translate-x-0.5 sm:h-10 sm:w-10">
                <GoArrow size={15} />
              </span>
            </Link>

            <div className="animate-fade-in-up animation-delay-400 mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10.5px] text-white/65 sm:text-[11.5px]">
              <span className="inline-flex items-center gap-1.5 font-semibold text-white">
                <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Live in Goa
              </span>
              <span className="h-1 w-1 rounded-full bg-white/35" aria-hidden="true" />
              <span>UDISE+ synced</span>
              <span className="h-1 w-1 rounded-full bg-white/35" aria-hidden="true" />
              <span>1,483 schools</span>
            </div>
          </div>

          <div className="animate-fade-in-up animation-delay-600 relative mt-9 -mb-4 lg:mt-auto lg:-mb-4 lg:pt-8 xl:pt-10">
            <div className="relative mx-auto hidden max-w-[1200px] lg:block 2xl:max-w-[1240px]">
              <div
                className="pointer-events-none absolute -bottom-4 -left-[190px] hidden h-[200px] w-[210px] rounded-[1.1rem] bg-white/95 p-4 shadow-[0_26px_50px_-32px_rgba(2,12,32,0.85)] xl:block"
                aria-hidden="true"
              >
                <div className="h-8 w-8 rounded-lg bg-[#E7EFFC]" />
                <div className="mt-5 space-y-2">
                  <div className="h-2 w-20 rounded-full bg-[#E3EAF6]" />
                  <div className="h-2 w-12 rounded-full bg-[#EDF2FA]" />
                </div>
                <div className="mt-6 h-8 w-20 rounded-full bg-[#EFF5FF]" />
              </div>
              <div
                className="pointer-events-none absolute -right-[190px] -bottom-4 hidden h-[200px] w-[210px] rounded-[1.1rem] bg-white/95 p-4 shadow-[0_26px_50px_-32px_rgba(2,12,32,0.85)] xl:block"
                aria-hidden="true"
              >
                <div className="h-2 w-16 rounded-full bg-[#E3EAF6]" />
                <div className="mt-8 flex items-end gap-1.5">
                  <span className="h-10 w-3 rounded-t bg-[#FFD98A]" />
                  <span className="h-16 w-3 rounded-t bg-[#FFD98A]" />
                  <span className="h-12 w-3 rounded-t bg-[#FFD98A]" />
                  <span className="h-20 w-3 rounded-t bg-[#FFD98A]" />
                </div>
                <div className="mt-6 h-2 w-12 rounded-full bg-[#EDF2FA]" />
              </div>

              <div className="grid grid-cols-[1fr_1fr_1.12fr_1fr] gap-3 px-5 xl:gap-4 xl:px-8">
                {CARD_ORDER.map((kind) => (
                  <div key={kind} className="h-[190px] xl:h-[200px]">
                    <StatCard kind={kind} />
                  </div>
                ))}
              </div>
            </div>

            <div
              className="hero-marquee lg:hidden"
              aria-label="SamarthX platform highlights"
            >
              <div className="hero-marquee-track flex">
                <MarqueeSet />
                <MarqueeSet clone />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
