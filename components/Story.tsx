import Image from "next/image";
import { Sparkle } from "./Art";
import Reveal from "./Reveal";

const STATS = [
  { value: "1,483", label: "Schools onboarded" },
  { value: "20,877", label: "Employees onboarded" },
  { value: "100%", label: "UDISE+ synced" },
];

export default function Story() {
  return (
    <section className="px-4 pt-5 sm:px-6" aria-labelledby="story-heading">
      <div className="mx-auto grid w-full max-w-[1000px] items-center gap-7 md:grid-cols-[0.95fr_1.05fr] md:gap-9">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-[0_34px_60px_-40px_rgba(8,48,126,0.55)]">
            <Image
              src="/images/news/academic-year.webp"
              alt="A classroom of students writing at their desks"
              fill
              sizes="(min-width: 768px) 460px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#071a38]/70" />

            <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[10.5px] font-bold shadow-sm backdrop-blur">
              <Sparkle size={11} className="text-[#0D43A7]" />
              Our story
            </span>

            <div className="absolute bottom-4 left-4 text-white">
              <p className="font-display text-[1.7rem] leading-none font-extrabold">
                5,000+
              </p>
              <p className="mt-1 text-[11px] font-medium text-white/85">
                Admissions delivered
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="text-[10.5px] font-bold tracking-[0.16em] uppercase" style={{ color: "var(--brand)" }}>
            Who we are
          </p>
          <h2
            id="story-heading"
            className="mt-2.5 text-[1.9rem] leading-[1.12] font-extrabold tracking-[-0.03em] sm:text-[2.15rem]"
            style={{ color: "var(--ink)" }}
          >
            Empowering <span style={{ color: "var(--brand)" }}>schools</span>{" "}
            through connected governance.
          </h2>
          <p
            className="mt-3.5 max-w-[440px] text-[13.5px] leading-[1.7]"
            style={{ color: "var(--muted)" }}
          >
            SamarthX is a state-of-the-art digital platform built to streamline
            India&rsquo;s education ecosystem — with innovation, transparency and
            accountability at its core. It connects every school to the state and
            keeps records in sync with UDISE+.
          </p>

          <div className="mt-6 grid grid-cols-3">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={index === 0 ? "pr-3" : "border-l px-3"}
                style={{ borderColor: "rgba(11,30,63,0.12)" }}
              >
                <p
                  className="font-display text-[1.25rem] leading-none font-extrabold tracking-tight sm:text-[1.4rem]"
                  style={{ color: "var(--ink)" }}
                >
                  {stat.value}
                </p>
                <p
                  className="mt-1.5 text-[10px] leading-tight sm:text-[10.5px]"
                  style={{ color: "var(--muted)" }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
