import type { Metadata } from "next";
import type { CSSProperties } from "react";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  title: { absolute: "State Onboarded" },
};

export default function StateOnboardedPage() {
  return (
    <div className="cms-page-shell">
      <PageBanner title="State Onboarded" />
      <section className="states-onboarded py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="states-onboarded__title text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
              States Powered by SamarthX
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <a
              href="https://goa.samarthx.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="states-onboarded__card group relative block rounded-2xl overflow-hidden text-left transition-all duration-300 transform hover:-translate-y-1 focus:outline-none"
              style={{ "--state-theme-color": "#1e3a5f" } as CSSProperties}
            >
              <div
                className="absolute top-0 left-0 right-0 h-1.5 z-20"
                style={{ backgroundColor: "#1e3a5f" }}
              />
              <div className="relative z-10 p-8 sm:p-12 flex flex-col h-full min-h-[220px] md:min-h-[260px] max-w-lg">
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="states-onboarded__state-name text-3xl md:text-5xl font-extrabold mb-6 transition-colors">
                    Goa
                  </h3>
                </div>
                <div className="mt-4">
                  <span className="states-onboarded__cta inline-flex items-center gap-2 font-bold text-sm md:text-base rounded-full py-3 px-8 transition-all duration-300 shadow-sm hover:shadow">
                    Visit Portal
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
