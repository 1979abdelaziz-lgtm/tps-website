import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/app/data/industries";

export const metadata: Metadata = {
  title: "Industries | TPS",
  description:
    "Explore how TPS delivers integrated energy engineering solutions for manufacturing, oil and gas, water, healthcare, data centres, commercial buildings, renewable energy, utilities, and infrastructure.",
};

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f7] text-[#071a24]">
      <section className="relative isolate min-h-[590px] overflow-hidden border-y border-[#A3E635]/45 bg-[#03101f] text-white sm:min-h-[640px]">
        <img
          src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=2200&q=90"
          alt="Large industrial facility representing the critical industries served by TPS"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,16,31,0.98)_0%,rgba(3,16,31,0.91)_38%,rgba(3,16,31,0.55)_64%,rgba(3,16,31,0.18)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,16,31,0.14)_0%,transparent_48%,rgba(3,16,31,0.58)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(ellipse_at_bottom,rgba(163,230,53,0.15),transparent_66%)]" />

        <div className="relative mx-auto flex min-h-[590px] max-w-[1280px] items-start px-6 pb-20 pt-16 sm:min-h-[640px] sm:px-8 sm:pt-20 lg:px-12 lg:pb-24 lg:pt-24">
          <div className="max-w-3xl lg:-translate-x-8">
            <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              Engineering Energy Solutions for Critical Industry
            </h1>
            <div className="mt-7 h-1 w-24 rounded-full bg-[#A3E635]" />
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76 sm:text-xl">
              From manufacturing plants to data centres, TPS delivers integrated engineering solutions tailored to the unique demands of every industry.
            </p>
          </div>
        </div>
      </section>

      <section className="py-0">
        <div className="mx-auto max-w-[1280px] px-6 py-12 sm:px-8 sm:py-14 lg:px-12">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <div className="flex items-center justify-center gap-5 sm:gap-7">
              <span className="h-px w-14 bg-[#16803b]/70 sm:w-24" aria-hidden="true" />
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#16803b]">
                Industries We Support
              </p>
              <span className="h-px w-14 bg-[#16803b]/70 sm:w-24" aria-hidden="true" />
            </div>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] sm:text-5xl">
              The right engineering approach for every operating environment.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#334853]">
              Each industry faces different risks, operating priorities, and energy constraints. TPS connects the right solutions to the needs that matter most.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {industries.map((industry) => {
              const Icon = industry.icon;
              return (
                <article
                  key={industry.title}
                  className="group relative overflow-hidden rounded-[24px] border border-[#0a2b20]/10 bg-white shadow-[0_12px_38px_rgba(6,30,22,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#16803b]/40 hover:shadow-[0_22px_58px_rgba(6,85,45,0.16)]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={industry.image}
                      alt={`${industry.title} industry`}
                      loading="lazy"
                      className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${industry.imageClassName ?? ""}`}
                      style={{ objectPosition: industry.imagePosition }}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_36%,rgba(2,18,13,0.74)_100%)]" />
                    <div className="absolute inset-0 bg-[#16803b]/0 transition-colors duration-300 group-hover:bg-[#16803b]/18" />
                    <span className="absolute left-5 top-5 rounded-full border border-white/35 bg-[#031b14]/72 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
                      {industry.challenge}
                    </span>
                  </div>

                  <div className="relative p-6">
                    <div className="absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-2xl border-4 border-white bg-[#13763a] text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-3">
                      <Icon size={25} strokeWidth={1.9} />
                    </div>
                    <h3 className="mt-6 text-xl font-extrabold tracking-[-0.02em]">
                      {industry.title}
                    </h3>
                    <p className="mt-3 min-h-[96px] leading-6 text-[#4f6169]">
                      {industry.description}
                    </p>
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
              Built Around Your Industry
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.025em] text-[#071a24] sm:text-4xl">
              Let&apos;s engineer the right solution for your operating environment.
            </h2>
            <p className="mt-3 text-[#4f6169]">
              Start with the challenge, the required outcome, and the conditions your system must meet.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#13763a] px-7 py-4 text-sm font-extrabold text-white shadow-[0_10px_28px_rgba(19,118,58,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0f6330]"
          >
            Talk to Our Engineers
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
