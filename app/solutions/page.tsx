import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/app/data/solutions";

export const metadata: Metadata = {
  title: "Energy Solutions | TPS",
  description:
    "Explore TPS integrated energy solutions across power generation, CHP and CCHP, solar energy, battery storage, electrical power systems, industrial automation, operation and maintenance, and energy management.",
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f7] text-[#071a24]">
      <section className="relative isolate min-h-[590px] overflow-hidden border-y border-[#A3E635]/45 bg-[#03101f] text-white sm:min-h-[640px]">
        <Image
          src="/images/tps-solutions-hero-2.png"
          alt="Integrated TPS energy solutions combining power generation, renewable energy, battery storage, and electrical infrastructure"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center] sm:object-[66%_center] lg:object-right"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,16,31,0.98)_0%,rgba(3,16,31,0.92)_38%,rgba(3,16,31,0.44)_64%,rgba(3,16,31,0.04)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,16,31,0.08)_0%,transparent_52%,rgba(3,16,31,0.36)_100%)]" />
        <div className="absolute inset-y-0 right-0 w-[52%] bg-[radial-gradient(circle_at_78%_42%,rgba(125,211,252,0.16)_0%,rgba(56,189,248,0.08)_38%,transparent_72%)] mix-blend-screen" />

        <div className="relative z-10 mx-auto flex min-h-[590px] max-w-[1280px] items-start px-6 pb-20 pt-16 sm:min-h-[640px] sm:px-8 sm:pt-20 lg:px-12 lg:pb-24 lg:pt-24">
          <div className="max-w-3xl lg:-translate-x-8">
            <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.035em] drop-shadow-[0_3px_14px_rgba(0,0,0,0.72)] sm:text-6xl lg:text-7xl">
              Integrated solutions for a more reliable energy future.
            </h1>
            <div className="mt-7 h-1 w-24 rounded-full bg-[#A3E635]" />
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.72)] sm:text-xl">
              From power generation to intelligent energy management, TPS delivers integrated engineering solutions across the complete energy lifecycle.
            </p>
            <Link
              href="/contact"
              className="group mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#74C043] px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.04em] text-white shadow-[0_14px_34px_rgba(116,192,67,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#86D64F] hover:shadow-[0_18px_38px_rgba(116,192,67,0.30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635] focus-visible:ring-offset-2 focus-visible:ring-offset-[#03101f]"
            >
              Discuss Your Project
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-0">
        <div className="mx-auto max-w-[1280px] px-6 pb-20 pt-12 sm:px-8 sm:pb-24 sm:pt-14 lg:px-12 lg:pb-24">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="flex items-center justify-center gap-5 sm:gap-7">
              <span className="h-px w-14 bg-[#16803b]/70 sm:w-24" aria-hidden="true" />
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#16803b]">
                Our Core Solutions
              </p>
              <span className="h-px w-14 bg-[#16803b]/70 sm:w-24" aria-hidden="true" />
            </div>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] sm:text-5xl">
              Engineering Every Stage of Your Energy Journey
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#334853]">
              Every solution is presented clearly and honestly, focused on what TPS is prepared to engineer, integrate, and support.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <article
                  key={solution.title}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[#0a2b20]/10 bg-white shadow-[0_12px_38px_rgba(6,30,22,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#16803b]/40 hover:shadow-[0_22px_58px_rgba(6,85,45,0.16)]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      style={{ objectPosition: solution.imagePosition }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_50%,rgba(2,18,13,0.36)_100%)]" />
                    <div className="absolute inset-0 bg-[#16803b]/0 transition-colors duration-300 group-hover:bg-[#16803b]/14" />
                  </div>

                  <div className="relative flex flex-1 flex-col p-6">
                    <div className="absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-white bg-[#13763a] text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-3">
                      <Icon size={25} strokeWidth={1.9} />
                    </div>
                    <h3 className="mt-6 text-xl font-extrabold tracking-[-0.02em]">
                      {solution.title}
                    </h3>
                    <p className="mt-3 leading-6 text-[#4f6169]">{solution.description}</p>
                    <ul className="mt-5 space-y-2.5 border-t border-[#0a2b20]/10 pt-5 text-sm text-[#334853]">
                      {solution.capabilities.map((capability) => (
                        <li key={capability} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#58a832]" />
                          <span>{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-[#A3E635] transition-transform duration-300 group-hover:scale-x-100" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-[#16803b]/18 bg-[linear-gradient(90deg,#edf8f0_0%,#f7fbf8_55%,#edf8f0_100%)]">
        <div className="mx-auto flex max-w-[1080px] flex-col items-start justify-between gap-7 px-6 py-9 sm:px-8 sm:py-10 lg:flex-row lg:items-center lg:px-10">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#16803b]">
              Start With The Requirement
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.025em] text-[#071a24] sm:text-4xl">
              Tell us what your energy system needs to achieve.
            </h2>
            <p className="mt-3 text-[#4f6169]">
              Start with the challenge, the required outcome, and the conditions your system must meet.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#13763a] px-7 py-4 text-sm font-extrabold text-white shadow-[0_10px_28px_rgba(19,118,58,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0f6330] hover:shadow-[0_16px_34px_rgba(19,118,58,0.30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#58a832] focus-visible:ring-offset-2 focus-visible:ring-offset-[#edf8f0]"
          >
            Talk to Our Engineers
            <ArrowRight size={17} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
