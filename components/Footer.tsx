import Link from "next/link";
import { LinkedInIcon, TwitterIcon } from "./Icons";
import { Sparkle } from "./Art";

const ADMIN_LOGIN = "https://goa.samarthx.ac.in/auth/login-dhe";
const GOA_PORTAL = "https://goa.samarthx.ac.in/";

const EXPLORE_LINKS = [
  { label: "About us", href: "/about-us" },
  { label: "State onboarded", href: "/state-onboarded" },
  { label: "Career", href: "https://career.samarthx.ac.in/", external: true },
  { label: "Goa portal", href: GOA_PORTAL, external: true },
];

const ACCESS_LINKS = [
  { label: "Admin login", href: ADMIN_LOGIN },
  { label: "State login", href: ADMIN_LOGIN },
];

const headingClass =
  "text-[10.5px] font-bold uppercase tracking-[0.18em] text-white/40";
const linkClass =
  "text-[13px] leading-relaxed text-white/70 no-underline transition-colors hover:text-white";

export default function Footer() {
  return (
    <footer className="footer-surface relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 text-white/50" aria-hidden="true">
        <Sparkle size={20} className="absolute top-9 right-[8%] opacity-40" />
        <Sparkle size={10} className="absolute bottom-16 right-[26%] opacity-30" />
        <span className="absolute -top-16 right-[16%] h-40 w-40 rounded-full border border-dashed border-white/10" />
      </div>

      <div className="relative mx-auto max-w-[1060px] px-5 pt-12 pb-7 sm:px-8">
        <div className="grid grid-cols-2 gap-9 md:grid-cols-[1.35fr_0.65fr_0.65fr_0.85fr] md:gap-8">
          <div className="col-span-2 md:col-span-1">
            <p className="text-[1.35rem] font-extrabold tracking-[-0.03em] text-white">
              Samarth<span className="text-[#FFAA01]">X</span>
              <span className="ml-1 align-super text-[9px] font-bold tracking-[0.14em] text-[#8FB8FF]/60">
                EGOV
              </span>
            </p>
            <p className="mt-3 max-w-[260px] text-[12.5px] leading-relaxed text-white/55">
              One connected platform for India&apos;s schools — governance,
              records and student journeys in sync.
            </p>
            <div className="mt-5 flex items-center gap-2.5">
              <a
                href="https://www.linkedin.com/company/samarthx/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SamarthX on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 no-underline transition-colors hover:border-white/40 hover:text-white"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://x.com/SamarthX_eGov"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SamarthX on X"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70 no-underline transition-colors hover:border-white/40 hover:text-white"
              >
                <TwitterIcon />
              </a>
            </div>
          </div>

          <div>
            <h3 className={headingClass}>Explore</h3>
            <ul className="mt-4 flex list-none flex-col gap-2.5 p-0">
              {EXPLORE_LINKS.map((item) => (
                <li key={item.label}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClass}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link href={item.href} className={linkClass}>
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={headingClass}>Access</h3>
            <ul className="mt-4 flex list-none flex-col gap-2.5 p-0">
              {ACCESS_LINKS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1">
            <h3 className={headingClass}>Reach us</h3>
            <p className="mt-4 text-[12.5px] leading-relaxed text-white/55">
              Institute of Informatics &amp; Communication,
              <br />
              University of Delhi South Campus,
              <br />
              New Delhi, Delhi 110021
            </p>
            <a
              href="https://samarthx.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-[12.5px] font-semibold text-[#FFD27A] no-underline hover:text-white"
            >
              samarthx.ac.in →
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-white/10 pt-5 text-[11px] text-white/35 sm:flex-row sm:items-center">
          <span>© 2026 SamarthX. All rights reserved.</span>
          <span>Built with the University of Delhi &amp; the Government of Goa.</span>
        </div>
      </div>
    </footer>
  );
}
