"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Sparkle } from "./Art";

type Slide = {
  id: string;
  line1: string;
  line2: string;
  note: string;
};

const SLIDES: Slide[] = [
  {
    id: "futures",
    line1: "Better Schools.",
    line2: "Brighter Futures.",
    note: "Governance, administration and the student journey on one secure platform",
  },
  {
    id: "classroom",
    line1: "Every Classroom.",
    line2: "One Platform.",
    note: "1,483 schools connected across Goa, from taluka offices to classrooms",
  },
  {
    id: "people",
    line1: "20,877 People.",
    line2: "One Login.",
    note: "Teachers, staff and departments working from the same live records",
  },
  {
    id: "admissions",
    line1: "5,000+ Admissions.",
    line2: "One Window.",
    note: "Admissions processed end to end, without a single paper file",
  },
];

const METRICS = [
  { label: "Schools", value: "1,483" },
  { label: "Employees", value: "20,877" },
  { label: "Admissions", value: "5,000+" },
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

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {direction === "left" ? <path d="M15 5l-7 7 7 7" /> : <path d="M9 5l7 7-7 7" />}
    </svg>
  );
}

function BooksDoodle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 40"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M6 32h34l6-7H12z" />
      <path d="M12 24h30l6-7H18z" />
      <path d="M18 16h28l6-7H24z" />
    </svg>
  );
}

function BookTile({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M16 9.5C13.5 7.6 10.6 7 7 7.4v15c3.6-.4 6.5.2 9 2.1 2.5-1.9 5.4-2.5 9-2.1v-15c-3.6-.4-6.5.2-9 2.1z" />
      <path d="M16 9.5v15" />
    </svg>
  );
}

function Stamp() {
  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 128 128" className="stage-stamp h-full w-full" aria-hidden="true">
        <defs>
          <path
            id="stage-stamp-arc"
            d="M64,64 m-45,0 a45,45 0 1,1 90,0 a45,45 0 1,1 -90,0"
            fill="none"
          />
        </defs>
        <text
          fill="var(--ink)"
          fontSize="10.5"
          fontWeight="700"
          letterSpacing="1.6"
          fontFamily="var(--font-display)"
        >
          <textPath href="#stage-stamp-arc">
            EDUCATION FOR A BETTER TOMORROW • GOA •
          </textPath>
        </text>
      </svg>
      <Sparkle
        size={26}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[var(--brand)]"
      />
    </div>
  );
}

export default function StageHero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % SLIDES.length),
      6500,
    );
    return () => window.clearInterval(timer);
  }, [paused]);

  const step = (delta: number) =>
    setIndex((current) => (current + delta + SLIDES.length) % SLIDES.length);

  return (
    <section
      className="relative flex min-h-[calc(100svh-var(--site-header-height))] flex-col justify-center"
      aria-label="Highlights"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative mx-auto flex w-full max-w-[1120px] flex-1 flex-col px-4 pt-8 pb-8 sm:px-6 sm:pt-10 lg:max-w-[1320px] lg:px-10 lg:pt-8 lg:pb-0 xl:max-w-[1440px] xl:pt-10">
        <div className="flex flex-1 flex-col lg:grid lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.5fr)] lg:items-stretch lg:gap-4 xl:gap-8">
          {/* Headline column */}
          <div className="animate-fade-in-up relative z-[3] lg:flex lg:flex-col lg:justify-center lg:pb-10">
            <p
              className="flex items-center gap-2 text-[10px] font-bold tracking-[0.16em] uppercase sm:text-[11px]"
              style={{ color: "var(--brand)" }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FFAA01] opacity-80" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#FFAA01]" />
              </span>
              Live with the Government of Goa
            </p>

            <h1
              className="mt-3.5 text-[2.55rem] leading-[0.98] font-black tracking-[-0.01em] sm:mt-4 lg:mt-5 lg:min-h-[3.68em] lg:text-[clamp(3rem,4.9vw,4.7rem)] lg:leading-[0.92]"
              style={{
                color: "var(--ink)",
                fontFamily: "var(--font-serif)",
                fontWeight: 800,
              }}
            >
              <span key={SLIDES[index].id} className="animate-fade-in-up block">
                <span className="block">{SLIDES[index].line1}</span>
                <span className="block italic" style={{ color: "var(--brand)" }}>
                  {SLIDES[index].line2}
                </span>
              </span>
            </h1>

            <p
              className="mt-3.5 max-w-[430px] text-[14px] leading-relaxed sm:mt-5 sm:text-[15.5px]"
              style={{ color: "var(--muted)" }}
            >
              {SLIDES[index].note}.
            </p>

            <div className="mt-5 sm:mt-7">
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-[14px] font-bold text-white no-underline shadow-[0_18px_34px_-18px_rgba(13,67,167,0.9)] transition-all duration-300 hover:gap-4 sm:px-6 sm:py-3.5 sm:text-[15.5px]"
                style={{
                  background:
                    "linear-gradient(135deg, #1A73E9 0%, #0D43A7 58%, #08307E 100%)",
                }}
              >
                Explore SamarthX
                <GoArrow size={16} />
              </Link>
            </div>

            {/* Slide control */}
            <div
              className="mt-6 inline-flex w-fit items-center gap-1 rounded-full bg-[#FFC94A] py-1.5 pr-2 pl-1.5 shadow-[0_12px_24px_-16px_rgba(11,30,63,0.7)] sm:mt-9"
              role="group"
              aria-roledescription="carousel"
              aria-label="Homepage highlights"
            >
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous highlight"
                className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--ink)] transition-colors hover:bg-white/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"
              >
                <Chevron direction="left" />
              </button>
              <span
                className="font-mono text-[12px] font-bold tracking-[0.06em] text-[#4A3200] tabular-nums select-none"
                aria-live="polite"
              >
                {index + 1} / {SLIDES.length}
              </span>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next highlight"
                className="flex h-9 w-9 items-center justify-center rounded-full text-[var(--ink)] transition-colors hover:bg-white/45 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ink)]"
              >
                <Chevron direction="right" />
              </button>
            </div>
          </div>

          {/* Collage stage */}
          <div className="relative mt-6 min-h-[330px] flex-1 sm:mt-9 sm:min-h-[420px] lg:mt-0 lg:min-h-[520px]">
            {/* Hand-drawn accents */}
            <span
              className="absolute top-[46%] left-[25%] hidden h-[3px] w-8 -rotate-12 rounded-full bg-[var(--brand)] lg:block"
              aria-hidden="true"
            />
            <span
              className="absolute top-[49%] left-[27%] hidden h-[3px] w-6 -rotate-12 rounded-full bg-[var(--brand)]/60 lg:block"
              aria-hidden="true"
            />
            <Sparkle
              size={18}
              className="absolute top-[28%] left-[25%] hidden text-[#E9B64C] lg:block"
              aria-hidden="true"
            />

            {/* The student — reference placement: centre-right, standing on the fold */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] flex justify-center lg:top-0 lg:left-[38%] lg:w-[86%] lg:-translate-x-1/2 lg:items-end">
              <Image
                src="/images/hero-student.webp"
                alt="A school student in uniform holding her books"
                width={1000}
                height={1177}
                priority
                sizes="(min-width: 1024px) 50vw, 78vw"
                className="h-[330px] w-auto max-w-none object-contain object-bottom drop-shadow-[0_24px_36px_rgba(11,30,63,0.16)] sm:h-[400px] lg:h-[min(720px,94%)]"
              />
            </div>

            {/* Yellow torn photo note — beside her head, left */}
            <figure
              className="stage-torn-sm absolute top-[10%] left-[0%] z-[2] hidden w-[24%] max-w-[170px] -rotate-[7deg] overflow-hidden p-[5px] shadow-[0_22px_36px_-24px_rgba(11,30,63,0.55)] lg:block"
              style={{ backgroundColor: "#FFC94A" }}
            >
              <div className="stage-torn-sm relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/news/academic-year.webp"
                  alt=""
                  fill
                  loading="lazy"
                  sizes="140px"
                  className="object-cover"
                  style={{ filter: "grayscale(1) contrast(1.12)" }}
                />
                <span
                  className="absolute inset-0"
                  style={{ backgroundColor: "#FFB01F", mixBlendMode: "multiply", opacity: 0.72 }}
                  aria-hidden="true"
                />
                <figcaption
                  className="font-script absolute inset-x-1 bottom-1 text-[13px] leading-[1.05] font-bold text-[#3B2600]"
                  style={{ textShadow: "0 1px 0 rgba(255,255,255,0.35)" }}
                >
                  Learn
                  <br />
                  Grow
                  <br />
                  Achieve
                </figcaption>
              </div>
            </figure>

            {/* Blue torn manifesto card — lower left */}
            <div
              className="stage-torn-sm absolute top-[54%] left-[-2%] z-[2] hidden w-[24%] max-w-[160px] -rotate-[4deg] p-[5px] shadow-[0_24px_38px_-26px_rgba(8,48,126,0.6)] lg:block"
              style={{ backgroundColor: "#1A73E9" }}
            >
              <div
                className="stage-torn-sm flex aspect-[5/4] flex-col justify-between p-3"
                style={{ backgroundColor: "#0D43A7" }}
              >
                <BooksDoodle className="h-6 w-full text-[#9CC2FF]" />
                <p className="font-display text-[11px] leading-[1.12] font-extrabold tracking-[0.02em] text-white uppercase xl:text-[12.5px]">
                  Education
                  <br />
                  builds
                  <br />
                  nations
                </p>
              </div>
            </div>

            {/* UDISE+ live card — upper right */}
            <div className="absolute top-[22%] left-[57%] z-[2] hidden w-[22%] max-w-[168px] rotate-[3deg] rounded-[1rem] border border-[#0B1E3F]/8 bg-white/95 p-3 shadow-[0_26px_44px_-28px_rgba(11,30,63,0.55)] lg:block">
              <div className="flex items-start justify-between gap-2">
                <p
                  className="font-display text-[11.5px] leading-tight font-extrabold tracking-tight"
                  style={{ color: "var(--ink)" }}
                >
                  Goa dashboard
                </p>
                <span
                  className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
                  style={{ backgroundColor: "var(--brand)" }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3 w-3"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.4"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M5 13l4 4 10-10" />
                  </svg>
                </span>
              </div>
              <div
                className="mt-2 space-y-1.5 border-t border-[#0B1E3F]/8 pt-2"
                style={{ color: "var(--ink)" }}
              >
                {METRICS.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-baseline justify-between gap-2 text-[9.5px]"
                  >
                    <span style={{ color: "var(--muted)" }}>{metric.label}</span>
                    <span className="font-mono font-bold tabular-nums">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Government school photo cut — lower right */}
            <figure
              className="stage-torn-sm absolute top-[54%] left-[69%] z-[2] hidden w-[23%] max-w-[175px] rotate-[5deg] overflow-hidden p-[5px] shadow-[0_24px_40px_-26px_rgba(8,48,126,0.6)] lg:block"
              style={{ backgroundColor: "#DCE7F7" }}
            >
              <div className="stage-torn-sm relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/news/reopen.webp"
                  alt="A government school in Goa"
                  fill
                  loading="lazy"
                  sizes="160px"
                  className="object-cover"
                  style={{ filter: "grayscale(1) contrast(1.15)" }}
                />
                <span
                  className="absolute inset-0"
                  style={{ backgroundColor: "#2F6FD8", mixBlendMode: "multiply", opacity: 0.78 }}
                  aria-hidden="true"
                />
              </div>
              <figcaption className="mt-1 text-center text-[7.5px] font-extrabold tracking-[0.1em] text-[#20436F] uppercase">
                Govt. schools · Goa
              </figcaption>
            </figure>

            {/* Circular stamp — top right */}
            <div className="absolute top-[8%] left-[82%] z-[2] hidden h-[100px] w-[100px] lg:block">
              <Stamp />
            </div>

            {/* Yellow book tile — clipped at the right edge */}
            <div
              className="stage-torn-sm absolute top-[38%] left-[92%] z-[2] hidden h-[74px] w-[74px] rotate-[8deg] items-center justify-center p-3 text-[#4A3200] lg:flex"
              style={{ backgroundColor: "#FFC94A" }}
              aria-hidden="true"
            >
              <BookTile className="h-9 w-9" />
            </div>

            {/* Mobile: single floating metric chip */}
            <div className="absolute right-0 bottom-1 z-[3] w-[58%] max-w-[230px] rounded-[1rem] border border-white/80 bg-white/92 px-3.5 py-2.5 shadow-[0_20px_34px_-24px_rgba(11,30,63,0.6)] backdrop-blur-sm lg:hidden">
              <div
                className="flex items-center gap-1.5 text-[8.5px] font-bold tracking-[0.12em] uppercase"
                style={{ color: "var(--brand)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                UDISE+ synced
              </div>
              <div className="mt-1.5 flex items-end justify-between gap-2">
                {METRICS.map((metric) => (
                  <div key={metric.label}>
                    <p
                      className="font-display text-[14px] leading-none font-extrabold tracking-tight"
                      style={{ color: "var(--ink)" }}
                    >
                      {metric.value}
                    </p>
                    <p
                      className="mt-1 text-[7.5px] font-bold tracking-[0.1em] uppercase"
                      style={{ color: "var(--muted)" }}
                    >
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
