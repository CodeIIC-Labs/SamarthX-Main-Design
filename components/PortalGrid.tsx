import Link from "next/link";
import {
  AcademicsArt,
  AdmissionsArt,
  GovernanceArt,
  PeopleArt,
  SecurityArt,
  WalletArt,
} from "./Art";
import Reveal from "./Reveal";

const MODULES = [
  {
    Art: GovernanceArt,
    title: "Governance",
    caption: "1 state live",
    tone: "var(--lavender)",
  },
  {
    Art: AdmissionsArt,
    title: "Admissions",
    caption: "5,000+ processed",
    tone: "var(--pink)",
  },
  {
    Art: PeopleArt,
    title: "People",
    caption: "20,877 onboarded",
    tone: "var(--mint)",
  },
  {
    Art: AcademicsArt,
    title: "Academics",
    caption: "UDISE+ synced",
    tone: "var(--peach)",
  },
  {
    Art: WalletArt,
    title: "Wallets",
    caption: "Digital payments",
    tone: "var(--sky)",
  },
  {
    Art: SecurityArt,
    title: "Security",
    caption: "Immutable records",
    tone: "var(--lavender)",
  },
];

export default function PortalGrid() {
  return (
    <section className="px-4 pt-5 sm:px-6" aria-labelledby="portal-heading">
      <div className="panel mx-auto w-full max-w-[1000px] px-4 py-5 sm:px-6 sm:py-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2
            id="portal-heading"
            className="text-[1.05rem] font-extrabold tracking-[-0.015em] sm:text-[1.15rem]"
            style={{ color: "var(--ink)" }}
          >
            Everything in one portal
          </h2>
          <Link
            href="/state-onboarded"
            className="inline-flex items-center gap-1 text-[11px] font-bold no-underline transition-all hover:gap-2 sm:text-[11.5px]"
            style={{ color: "var(--brand)" }}
          >
            View the Goa rollout
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M4 10.2h9.1V6.1L20 12l-6.9 5.9v-4.1H4z" />
            </svg>
          </Link>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6">
          {MODULES.map(({ Art, title, caption, tone }, index) => (
            <Reveal key={title} delay={index * 60}>
              <div
                className="soft-tile flex h-full flex-col items-center justify-center px-2 py-4 text-center"
                style={{ backgroundColor: tone }}
              >
                <Art size={44} />
                <p
                  className="mt-2.5 text-[12.5px] font-bold"
                  style={{ color: "var(--ink)" }}
                >
                  {title}
                </p>
                <p
                  className="mt-0.5 text-[10px] leading-tight"
                  style={{ color: "var(--muted)" }}
                >
                  {caption}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
