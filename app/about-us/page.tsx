import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import {
  BotIcon,
  ChartColumnIcon,
  DatabaseIcon,
  HeadphonesIcon,
  HeartIcon,
  LayoutDashboardIcon,
  LayoutPanelLeftIcon,
  LockKeyholeIcon,
  SchoolIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  UsersIcon,
  ZapIcon,
} from "@/components/PageIcons";
import { BookOpenIcon, UsersRoundIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: { absolute: "About Us" },
};

const stats = [
  {
    label: "Total Schools in Goa",
    value: "1450+",
    valueClass: "text-4xl md:text-3xl",
    caption: "Live Implementation",
    Icon: SchoolIcon,
  },
  {
    label: "UDISE+ Integration",
    value: "100%",
    valueClass: "text-4xl md:text-3xl",
    caption: "Real-time Sync",
    Icon: DatabaseIcon,
  },
  {
    label: "AI Engine Active",
    value: "Enabled",
    valueClass: "text-3xl md:text-2xl",
    caption: "Predictive Analytics",
    Icon: BotIcon,
  },
  {
    label: "Supported By",
    value: "University of Delhi",
    valueClass: "text-2xl md:text-2xl",
    caption: "Academic Guidance",
    Icon: BookOpenIcon,
  },
];

const stakeholders = [
  { title: "Students", Icon: UsersIcon },
  { title: "Parents", Icon: HeartIcon },
  { title: "Teachers", Icon: SchoolIcon },
  { title: "Administrators", Icon: LayoutDashboardIcon },
  { title: "Policy Makers", Icon: ShieldCheckIcon },
];

const stakeholderPoints = [
  "Tailored sections for students and parents",
  "Comprehensive tools for school administrators",
  "Actionable insights for national policymakers",
  "Academic guidance and technical expertise from DU",
];

const modules = [
  {
    accent: "#1d4ed8",
    Icon: LayoutPanelLeftIcon,
    title: "Base Modules",
    subtitle: "Core Foundational Components",
    description:
      "Foundational infrastructure of the school management system. They ensure smooth onboarding, regulatory compliance, policy enforcement, and eco-friendly operations.",
    points: ["Powerful Dashboards", "Predictive Analytics", "AI-Driven Insights", "Strategic Decisions"],
  },
  {
    accent: "#FF9800",
    Icon: BookOpenIcon,
    title: "Academic Modules",
    subtitle: "Student Learning & Performance",
    description:
      "Focus on enhancing student learning and academic outcomes. Manage curriculum delivery, assessments, STEAM education, and performance tracking.",
    points: ["Curriculum Delivery", "Skill Development", "STEAM Education", "Holistic Growth"],
  },
  {
    accent: "#334155",
    Icon: UsersRoundIcon,
    title: "Administrative Modules",
    subtitle: "Operations, Staff & Infrastructure",
    description:
      "Handle the day-to-day operations, staff management, and infrastructure needs. Streamline processes such as attendance and financial management.",
    points: ["Staff Management", "Safety & Security", "Community Engagement"],
  },
];

const udiseCards = [
  {
    Icon: ZapIcon,
    title: "Real-time Data",
    description: "Consistently updated school data across the ecosystem.",
  },
  {
    Icon: ShieldCheckIcon,
    title: "Transparency",
    description: "Enhanced transparency and data reliability at national level.",
  },
];

const features = [
  {
    Icon: BotIcon,
    title: "AI Powered",
    description: "Suggests corrections, highlights missing info, and predicts timelines.",
  },
  {
    Icon: DatabaseIcon,
    title: "Blockchain",
    description: "Ensuring immutable record keeping and maximum security.",
  },
  {
    Icon: SmartphoneIcon,
    title: "IoT Ready",
    description: "Seamlessly connect and monitor school infrastructure.",
  },
  {
    Icon: ZapIcon,
    title: "Digital Wallets",
    description: "Managing transactions and scholarship distributions efficiently.",
  },
  {
    Icon: LockKeyholeIcon,
    title: "Security First",
    description:
      "Employs multiple security strategies, including data encryption, access controls, and regular penetration testing to safeguard sensitive data.",
  },
  {
    Icon: HeadphonesIcon,
    title: "Robust Support",
    description:
      "Features a robust support system including help desk integration, a live chat function, and a comprehensive FAQ section for user resolution.",
  },
];

function BulletList({ points, color }: { points: string[]; color: string }) {
  return (
    <ul className="space-y-2">
      {points.map((point) => (
        <li key={point} className="flex items-start gap-2 text-sm font-medium">
          <span
            className="mt-1 inline-block h-2 w-2 rounded-full"
            style={{ backgroundColor: color }}
          />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}

export default function AboutPage() {
  return (
    <div className="cms-page-shell">
      <PageBanner title="About Us" />

      <section className="py-16 px-6" style={{ backgroundColor: "#f9fafb" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-6 items-start">
            <div className="w-full md:w-1/2 p-0 flex-shrink-0">
              <div>
                <div
                  className="cms-richtext max-w-none rounded-lg text-base [&_p]:text-base [&_li]:text-base"
                  style={{ color: "#1F2937" }}
                >
                  <div className="cms-richtext">
                    <div className="payload-richtext">
                      <h1 style={{ textAlign: "left" }}>
                        Transforming
                        <br />
                        <span style={{ color: "oklch(0.424 0.199 265.638)" }}>
                          <em>School</em>
                        </span>
                        <br />
                        <span style={{ color: "oklch(0.424 0.199 265.638)" }}>
                          <em>Governance</em>
                        </span>
                        <br />
                        for India
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div
                  className="cms-richtext max-w-none rounded-lg text-2xl [&_p]:text-2xl [&_li]:text-2xl"
                  style={{ color: "#1F2937" }}
                >
                  <div className="cms-richtext">
                    <div className="payload-richtext">
                      <p>
                        <span style={{ color: "oklch(0.424 0.199 265.638)" }}>Samarth</span>
                        <span style={{ color: "rgb(255, 152, 0)" }}>X</span> is a state-of-the-art
                        digital platform designed to streamline the education ecosystem. Built with
                        a vision of innovation, transparency, and accountability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="p-0 flex-shrink-0"
              style={{ flex: "1 1 calc(33.333% - 1.5rem)", minWidth: 280 }}
            >
              <div>
                <div className="relative py-10">
                  <div className="relative overflow-hidden rounded-[2rem] border p-6 shadow-2xl border-slate-200 bg-white">
                    <div className="mb-6 flex items-center gap-3">
                      <span className="h-4 w-4 rounded-full bg-rose-300" />
                      <span className="h-4 w-4 rounded-full bg-amber-300" />
                      <span className="h-4 w-4 rounded-full bg-indigo-300" />
                    </div>
                    <div className="mb-8 h-7 w-36 rounded-full bg-indigo-100" />
                    <div
                      className="mb-8 grid gap-4"
                      style={{ gridTemplateColumns: "repeat(3, minmax(0, 1fr))" }}
                    >
                      <div className="flex h-24 items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-slate-100 text-slate-500">
                        <ChartColumnIcon size={28} />
                      </div>
                      <div className="flex h-24 items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-slate-100 text-slate-500">
                        <ChartColumnIcon size={28} />
                      </div>
                      <div className="flex h-24 items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-slate-100 text-slate-500">
                        <ChartColumnIcon size={28} />
                      </div>
                    </div>
                    <div className="rounded-3xl border p-5 border-slate-200 bg-slate-50">
                      <div className="mb-4 h-5 w-full rounded-full bg-slate-200" />
                      <div className="mb-4 h-5 w-3/4 rounded-full bg-slate-200" />
                      <div className="h-5 w-1/2 rounded-full bg-slate-200" />
                    </div>
                  </div>
                  <div className="absolute right-[-0.8rem] top-[-0.8rem] rounded-[1.8rem] border px-6 py-4 shadow-xl animate-bounce-slow border-slate-200 bg-white text-slate-900">
                    <p className="text-sm font-bold tracking-wider" style={{ color: "#64748b" }}>
                      ACTIVE SCHOOLS
                    </p>
                    <p className="text-4xl font-black leading-none" style={{ color: "#4338ca" }}>
                      1,650+
                    </p>
                  </div>
                  <div className="absolute bottom-[-0.6rem] left-[-1.2rem] max-w-[20rem] rounded-[2rem] border p-5 shadow-xl animate-bounce-slow border-slate-200 bg-white text-slate-900">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="whitespace-nowrap rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-base font-semibold text-amber-500">
                        Goa Live
                      </span>
                      <span className="whitespace-nowrap rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-base font-semibold text-slate-600">
                        National Rollout
                      </span>
                    </div>
                    <p className="text-lg font-semibold leading-snug" style={{ color: "#334155" }}>
                      Centralized data across schools of India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-6 items-start">
            <div className="w-full p-0 flex-shrink-0">
              <div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                  {stats.map(({ label, value, valueClass, caption, Icon }) => (
                    <article
                      key={label}
                      className="rounded-3xl p-6 bg-white border border-slate-200"
                    >
                      <div className="mb-3 flex items-start justify-between gap-3">
                        <p className="text-base font-semibold text-slate-500">{label}</p>
                        <Icon size={24} stroke="#1D4ED8" />
                      </div>
                      <p
                        className={`${valueClass} font-extrabold leading-[1.05] tracking-tight text-slate-900`}
                      >
                        {value}
                      </p>
                      <p className="mt-3 text-lg text-slate-500">
                        <span className="font-bold text-green-600">100%</span>
                        <span className="ml-2">{caption}</span>
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-6 items-start">
            <div className="w-full p-0 flex-shrink-0">
              <div>
                <div
                  className="cms-richtext max-w-none rounded-lg text-2xl [&_p]:text-2xl [&_li]:text-2xl"
                  style={{ color: "#1F2937" }}
                >
                  <div className="cms-richtext">
                    <div className="payload-richtext">
                      <h1 style={{ textAlign: "center" }}>
                        <span style={{ color: "oklch(0.424 0.199 265.638)" }}>The Vision</span>
                        <br />
                        <strong>Transforming the experience of</strong>
                        {"\u00A0"}
                        <span style={{ color: "oklch(0.424 0.199 265.638)" }}>
                          <em>
                            <strong>Teachers, Students</strong>
                          </em>
                        </span>
                        <em>
                          <strong>,</strong>
                        </em>
                        {"\u00A0"}
                        <strong>and every</strong>
                        {"\u00A0"}
                        <span style={{ color: "rgb(255, 152, 0)" }}>
                          <strong>Stakeholder</strong>
                        </span>
                        <span style={{ color: "rgb(255, 152, 0)" }}>
                          <strong>.</strong>
                        </span>
                      </h1>
                      <p>
                        <em>
                          <strong>
                            At its core, SamarthX is a comprehensive educational information
                            management system that not only catalogs every school across the state
                            but also offers rich administrative data and a wide range of integrated
                            services previously unavailable in a single platform. It streamlines
                            processes, enhances data accessibility, and supports effective
                            decision-making at every level of the education system. Features
                            dedicated sections tailored to the needs of students, parents, teachers,
                            and policymakers.
                          </strong>
                        </em>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: "#e3ebf2" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-6 items-start">
            <div
              className="p-0 flex-shrink-0"
              style={{ flex: "1 1 calc(33.333% - 1.5rem)", minWidth: 280 }}
            >
              <div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {stakeholders.map(({ title, Icon }) => (
                    <article
                      key={title}
                      className="rounded-3xl p-6 bg-white border border-slate-200 text-slate-900"
                    >
                      <div className="mb-4 flex justify-start">
                        <div
                          className="inline-flex rounded-2xl p-3"
                          style={{ backgroundColor: "#EEF2FF" }}
                        >
                          <Icon size={24} stroke="#1D4ED8" />
                        </div>
                      </div>
                      <h3 className="mb-2 font-bold text-lg">{title}</h3>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 p-0 flex-shrink-0">
              <div>
                <div className="grid gap-6 grid-cols-1">
                  <article className="rounded-2xl p-6 bg-white border border-slate-200 text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <div className="mb-3 cms-richtext text-inherit [&_p]:my-0">
                      <div className="cms-richtext">
                        <div className="payload-richtext">
                          <h2>
                            Designed for Every
                            <span style={{ color: "oklch(0.424 0.199 265.638)" }}> </span>
                            <span style={{ color: "oklch(0.424 0.199 265.638)" }}>
                              <em>Stakeholder</em>
                            </span>
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4 cms-richtext text-slate-500 [&_p]:my-0">
                      <div className="cms-richtext">
                        <div className="payload-richtext">
                          <p>
                            The platform is equipped with a diverse range of modular components,
                            each designed to address the specific needs of key stakeholders. To
                            ensure seamless functionality and user accessibility, these modules are
                            meticulously organized.
                          </p>
                        </div>
                      </div>
                    </div>
                    <BulletList points={stakeholderPoints} color="#1d4ed8" />
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-6 items-start">
            <div className="w-full p-0 flex-shrink-0">
              <div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {modules.map(({ accent, Icon, title, subtitle, description, points }) => (
                    <article
                      key={title}
                      className="rounded-2xl p-6 bg-white border-t-4 border-slate-200 border border-slate-200 text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                      style={{ borderTopColor: accent }}
                    >
                      <div
                        className="mb-4 inline-flex rounded-xl p-3"
                        style={{ backgroundColor: `color-mix(in srgb, ${accent} 12%, white)` }}
                      >
                        <Icon size={22} stroke="#1d4ed8" />
                      </div>
                      <div className="mb-3 cms-richtext text-inherit [&_p]:my-0">
                        <div className="cms-richtext">
                          <div className="payload-richtext">
                            <p style={{ textAlign: "left" }}>
                              <strong>{title}</strong>
                              <br />
                              {subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4 cms-richtext text-slate-500 [&_p]:my-0">
                        <div className="cms-richtext">
                          <div className="payload-richtext">
                            <p style={{ textAlign: "left" }}>{description}</p>
                          </div>
                        </div>
                      </div>
                      <BulletList points={points} color={accent} />
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: "#334155" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-6 items-start">
            <div className="w-full md:w-1/2 p-0 flex-shrink-0">
              <div>
                <div
                  className="cms-richtext max-w-none rounded-lg text-xl [&_p]:text-xl [&_li]:text-xl"
                  style={{ color: "#1F2937" }}
                >
                  <div className="cms-richtext">
                    <div className="payload-richtext">
                      <h1 style={{ textAlign: "left" }}>
                        <span style={{ color: "rgb(255, 255, 255)" }}>Integrated with </span>
                        <br />
                        <span style={{ color: "rgb(255, 255, 255)" }}>UDISE+</span>
                      </h1>
                      <p style={{ textAlign: "left" }}>
                        <span style={{ color: "rgb(255, 255, 255)" }}>
                          The SamarthX platform is seamlessly integrated with UDISE+, India’s
                          official Educational Management Information System. This integration
                          ensures that real-time school data is consistently updated and reflected
                          across the SamarthX ecosystem.
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                  {udiseCards.map(({ Icon, title, description }) => (
                    <article
                      key={title}
                      className="rounded-3xl p-6 bg-slate-900/60 border border-slate-700 text-slate-100"
                    >
                      <div className="mb-4 flex justify-start">
                        <div
                          className="inline-flex rounded-2xl p-3"
                          style={{ backgroundColor: "#EEF2FF" }}
                        >
                          <Icon size={24} stroke="#f59e0b" />
                        </div>
                      </div>
                      <h3 className="mb-2 font-bold text-base">{title}</h3>
                      <p className="text-base opacity-85">{description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="p-0 flex-shrink-0"
              style={{ flex: "1 1 calc(33.333% - 1.5rem)", minWidth: 280 }}
            >
              <div>
                <div className="relative py-6">
                  <div className="relative overflow-hidden rounded-[2rem] border px-5 py-6 shadow-2xl md:px-7 md:py-8 border-slate-600 bg-slate-800">
                    <div className="space-y-5">
                      {[0, 1, 2].map((row) => (
                        <div
                          key={row}
                          className="flex items-center justify-between rounded-[1.7rem] border px-4 py-4 md:px-5 border-slate-600 bg-slate-700/70"
                        >
                          <div className="flex items-center gap-4">
                            <div className="inline-flex rounded-2xl p-3 bg-indigo-900/50">
                              <SchoolIcon size={24} stroke="#1d4ed8" />
                            </div>
                            <div>
                              <div className="mb-2 h-3 w-24 rounded-full bg-slate-500/60" />
                              <div className="h-2.5 w-36 rounded-full bg-slate-500/50" />
                            </div>
                          </div>
                          <div className="h-8 w-20 rounded-full bg-amber-900/40" />
                        </div>
                      ))}
                    </div>
                    <div className="my-7 border-t border-slate-600" />
                    <div className="flex items-center justify-center gap-2">
                      <p className="dashboard-sync-footer-text text-center font-semibold tracking-[0.16em] text-slate-400">
                        SYNCING WITH UDISE+ CLOUD
                      </p>
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse animation-delay-200" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse animation-delay-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6" style={{ backgroundColor: "#f9fafb" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-6 items-start">
            <div className="p-0 flex-shrink-0">
              <div>
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                  {features.slice(0, 4).map(({ Icon, title, description }) => (
                    <article
                      key={title}
                      className="rounded-2xl p-6 bg-white border border-slate-200 text-slate-900"
                    >
                      <div
                        className="mb-4 inline-flex rounded-xl p-3"
                        style={{ backgroundColor: "color-mix(in srgb, #1d4ed8 12%, white)" }}
                      >
                        <Icon size={22} stroke="#1d4ed8" />
                      </div>
                      <div className="mb-3 cms-richtext text-inherit [&_p]:my-0">
                        <div className="cms-richtext">
                          <div className="payload-richtext">
                            <h3>
                              <strong>{title}</strong>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4 cms-richtext text-slate-500 [&_p]:my-0">
                        <div className="cms-richtext">
                          <div className="payload-richtext">
                            <p style={{ textAlign: "left" }}>{description}</p>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <div className="mt-4">
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                  {features.slice(4).map(({ Icon, title, description }) => (
                    <article
                      key={title}
                      className="rounded-2xl p-6 bg-white border border-slate-200 text-slate-900"
                    >
                      <div
                        className="mb-4 inline-flex rounded-xl p-3"
                        style={{ backgroundColor: "color-mix(in srgb, #1d4ed8 12%, white)" }}
                      >
                        <Icon size={22} stroke="#1d4ed8" />
                      </div>
                      <div className="mb-3 cms-richtext text-inherit [&_p]:my-0">
                        <div className="cms-richtext">
                          <div className="payload-richtext">
                            <h3>
                              <strong>{title}</strong>
                            </h3>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4 cms-richtext text-slate-500 [&_p]:my-0">
                        <div className="cms-richtext">
                          <div className="payload-richtext">
                            <p style={{ textAlign: "left" }}>{description}</p>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
