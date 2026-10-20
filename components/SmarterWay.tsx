import { LaptopMockup, PhoneMockup } from "./DeviceMockups";
import { AppleIcon, GooglePlayIcon } from "./PageIcons";
import { Sparkle } from "./Art";
import Reveal from "./Reveal";

// Replace with the live store listings before this goes public.
const PLAY_STORE_URL = "#";
const APP_STORE_URL = "#";

const POINTS = [
  "AI flags missing records before you submit.",
  "Blockchain-backed entries stay immutable.",
  "IoT-ready monitoring for school infrastructure.",
  "Works on every device — nothing to install.",
];

function Tick() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M2 6.2 4.7 9 10 3.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DashboardPreview() {
  return (
    <div className="relative w-full">
      <div
        className="absolute inset-x-6 top-6 bottom-6 rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(255,196,84,0.55), rgba(255,196,84,0) 60%), radial-gradient(circle at 70% 65%, rgba(130,171,235,0.6), rgba(130,171,235,0) 62%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[480px]">
        <div className="relative w-full" style={{ aspectRatio: "5 / 3" }}>
          <LaptopMockup className="relative block w-full" />
          <PhoneMockup
            className="absolute"
            style={{
              right: "-2%",
              bottom: "8.2%",
              width: "19.5%",
              minWidth: 70,
            }}
          />
        </div>
      </div>

      <span
        className="absolute top-0 right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-[0_10px_20px_-12px_rgba(11,30,63,0.5)]"
        aria-hidden="true"
      >
        <Sparkle size={13} className="text-[#FFAA01]" />
      </span>
      <span
        className="absolute top-10 -left-1 h-12 w-12 rounded-full border-2 border-dashed border-[#C7DCF9]"
        aria-hidden="true"
      />
    </div>
  );
}

export default function SmarterWay() {
  return (
    <section className="px-4 pt-5 sm:px-6" aria-labelledby="smarter-heading">
      <div className="panel mx-auto w-full max-w-[1000px] px-5 py-7 sm:px-8 sm:py-9">
        <div className="grid items-center gap-8 md:grid-cols-[0.92fr_1.08fr] md:gap-6">
          <Reveal>
            <h2
              id="smarter-heading"
              className="text-[1.35rem] font-extrabold tracking-[-0.025em] sm:text-[1.6rem]"
              style={{ color: "var(--ink)" }}
            >
              Built in a smarter way
            </h2>
            <p
              className="mt-1.5 max-w-[330px] text-[12.5px] leading-relaxed"
              style={{ color: "var(--muted)" }}
            >
              The same platform on a desk in Panaji and a phone in a classroom.
            </p>

            <ul className="mt-5 space-y-3">
              {POINTS.map((point) => (
                <li key={point} className="flex items-center gap-2.5">
                  <span className="check-dot shrink-0">
                    <Tick />
                  </span>
                  <span
                    className="text-[12.5px] leading-snug font-semibold"
                    style={{ color: "var(--ink)" }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <a
                href={PLAY_STORE_URL}
                className="store-badge"
                aria-label="Get SamarthX on Google Play"
              >
                <GooglePlayIcon size={19} />
                <span className="leading-tight">
                  <span className="block text-[7.5px] tracking-[0.08em] text-white/70 uppercase">
                    Get it on
                  </span>
                  <span className="block text-[12px] font-bold">Google Play</span>
                </span>
              </a>
              <a
                href={APP_STORE_URL}
                className="store-badge"
                aria-label="Download SamarthX on the App Store"
              >
                <AppleIcon size={19} />
                <span className="leading-tight">
                  <span className="block text-[7.5px] tracking-[0.08em] text-white/70 uppercase">
                    Download on the
                  </span>
                  <span className="block text-[12px] font-bold">App Store</span>
                </span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="pt-4 pr-2 pb-4 sm:pr-4">
            <DashboardPreview />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
