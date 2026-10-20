import {
  AuditArt,
  DashboardArt,
  GrowthArt,
  OneLoginArt,
  RecordsArt,
  Sparkle,
} from "./Art";

const STEPS = [
  {
    Art: OneLoginArt,
    title: "One login",
    description: "A secure front door for every role.",
    tone: "var(--lavender)",
  },
  {
    Art: DashboardArt,
    title: "Live dashboards",
    description: "The same numbers for state and school.",
    tone: "var(--pink)",
  },
  {
    Art: RecordsArt,
    title: "Every record",
    description: "Students, staff and schools in one place.",
    tone: "var(--mint)",
  },
  {
    Art: AuditArt,
    title: "Audit-ready",
    description: "Immutable logs for every change.",
    tone: "var(--peach)",
  },
  {
    Art: GrowthArt,
    title: "Built to scale",
    description: "From one state to every state.",
    tone: "var(--sky)",
  },
];

function Stitch() {
  return (
    <svg
      width="32"
      height="10"
      viewBox="0 0 32 10"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className="mt-[28px] shrink-0 text-[#9DB9EC]"
    >
      <path
        d="M0 5h24"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeDasharray="3.5 4"
      />
      <path
        d="M21.5 1.5 26.5 5l-5 3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Step({ Art, title, description, tone }: (typeof STEPS)[number]) {
  return (
    <div className="flex min-w-0 flex-col items-center text-center">
      <span
        className="flex h-[50px] w-[50px] items-center justify-center rounded-[1rem]"
        style={{ backgroundColor: tone }}
      >
        <Art size={32} />
      </span>
      <p
        className="mt-2.5 text-[13px] leading-tight font-bold"
        style={{ color: "var(--ink)" }}
      >
        {title}
      </p>
      <p
        className="mt-1 max-w-[136px] text-[11px] leading-[1.5]"
        style={{ color: "var(--muted)" }}
      >
        {description}
      </p>
    </div>
  );
}

export default function WhyBand() {
  return (
    <section className="px-4 pt-5 sm:px-6" aria-labelledby="why-heading">
      <div className="panel mx-auto w-full max-w-[1000px] px-4 py-7 sm:px-7 sm:py-8">
        <h2
          id="why-heading"
          className="flex items-center justify-center gap-1.5 text-center text-[1.05rem] font-extrabold tracking-[-0.015em] sm:text-[1.2rem]"
          style={{ color: "var(--ink)" }}
        >
          Why schools love SamarthX
          <Sparkle size={15} className="text-[#F0A500]" />
        </h2>

        <div className="mt-6 hidden items-start md:flex">
          {STEPS.map((step, index) => (
            <div key={step.title} className="contents">
              <div className="flex-1">
                <Step {...step} />
              </div>
              {index < STEPS.length - 1 && <Stitch />}
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 md:hidden">
          {STEPS.map((step, index) => (
            <div
              key={step.title}
              className={index === STEPS.length - 1 ? "col-span-2 mx-auto w-[150px]" : ""}
            >
              <Step {...step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
