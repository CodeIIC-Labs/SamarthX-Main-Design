import Image from "next/image";
import { Sparkle } from "./Art";
import Reveal from "./Reveal";

const NOTES = [
  {
    title: "Goa starts the school academic year in April instead of June",
    date: "7 Apr 2025",
    category: "Policy",
    accent: "#0D43A7",
    wash: "linear-gradient(145deg, #EAF2FF 0%, #FBFDFF 72%)",
    image: "/images/news/academic-year.webp",
    imageAlt: "School students walking through a campus",
    href: "https://samarthx.ac.in/news/Goa-starts-school",
  },
  {
    title: "Goa's NEP schools end the April session on a positive note",
    date: "30 Mar 2025",
    category: "Academics",
    accent: "#8A5A00",
    wash: "linear-gradient(145deg, #FFF4DC 0%, #FFFDF8 72%)",
    image: "/images/news/nep-schools.webp",
    imageAlt: "Students participating in a school activity",
    href: "https://samarthx.ac.in/news/Goa's-NEP-School",
  },
  {
    title: "Schools will reopen as per the date declared by the Education Department",
    date: "17 May 2025",
    category: "Notice",
    accent: "#0E5ACF",
    wash: "linear-gradient(145deg, #E9F2FF 0%, #FBFDFF 72%)",
    image: "/images/news/reopen.webp",
    imageAlt: "Students in a classroom on the first day of the school year",
    href: "https://samarthx.ac.in/news/Schools-will-reopen",
  },
];

export default function FieldNotes() {
  return (
    <section className="px-4 pt-9 sm:px-6" aria-labelledby="field-heading">
      <div className="mx-auto w-full max-w-[1000px]">
        <h2
          id="field-heading"
          className="flex items-center justify-center gap-1.5 text-center text-[1.15rem] font-extrabold tracking-[-0.02em] sm:text-[1.3rem]"
          style={{ color: "var(--ink)" }}
        >
          From the field
          <Sparkle size={15} className="text-[#F0A500]" />
        </h2>

        <div className="mt-5 grid gap-3.5 md:grid-cols-3">
          {NOTES.map((note, index) => (
            <Reveal key={note.title} delay={index * 80}>
              <a
                href={note.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-white/90 p-5 no-underline shadow-[0_22px_46px_-38px_rgba(11,30,63,0.5)] transition-transform duration-300 hover:-translate-y-1"
                style={{ background: note.wash }}
              >
                <span
                  className="pointer-events-none absolute -top-14 -right-12 h-40 w-40 rounded-full opacity-25 blur-3xl"
                  style={{ backgroundColor: note.accent }}
                  aria-hidden="true"
                />

                <div className="relative flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-[3px] ring-white shadow-[0_8px_16px_-10px_rgba(11,30,63,0.45)]">
                      <Image
                        src={note.image}
                        alt={note.imageAlt}
                        fill
                        sizes="44px"
                        className="object-cover"
                      />
                    </span>
                    <div className="min-w-0">
                      <p
                        className="text-[10px] leading-none font-bold tracking-[0.12em] uppercase"
                        style={{ color: note.accent }}
                      >
                        {note.category}
                      </p>
                      <p
                        className="mt-1.5 text-[11px] leading-none"
                        style={{ color: "var(--muted)" }}
                      >
                        {note.date}
                      </p>
                    </div>
                  </div>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/85 text-[#7C8BA8] transition-colors group-hover:bg-[var(--brand)] group-hover:text-white">
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
                  </span>
                </div>

                <h3
                  className="relative mt-4 text-[15.5px] leading-[1.42] font-bold tracking-[-0.01em]"
                  style={{ color: "var(--ink)" }}
                >
                  {note.title}
                </h3>

                <span
                  className="relative mt-auto inline-flex items-center gap-1.5 pt-4 text-[11px] font-bold"
                  style={{ color: note.accent }}
                >
                  Read story
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    focusable="false"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M4 10.2h9.1V6.1L20 12l-6.9 5.9v-4.1H4z" />
                  </svg>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 flex justify-center gap-1.5" aria-hidden="true">
          <span className="h-1.5 w-4 rounded-full" style={{ backgroundColor: "var(--brand)" }} />
          <span className="h-1.5 w-1.5 rounded-full bg-[#C3D7F6]" />
          <span className="h-1.5 w-1.5 rounded-full bg-[#C3D7F6]" />
        </div>
      </div>
    </section>
  );
}
