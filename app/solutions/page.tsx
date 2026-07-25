import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BatteryCharging,
  Cog,
  Cpu,
  Factory,
  Gauge,
  Sun,
  Wrench,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Energy Solutions | TPS",
  description:
    "Explore TPS integrated energy solutions across power generation, CHP and CCHP, solar energy, battery storage, electrical engineering, automation, energy management, and operation and maintenance.",
};

const solutions = [
  {
    icon: Cog,
    title: "Power Generation",
    description:
      "Engineering support for gas engines, diesel generators, hybrid plants, commissioning, troubleshooting, and reliable power delivery.",
    capabilities: ["Gas and diesel generation", "Hybrid power plants", "Commissioning and troubleshooting"],
  },
  {
    icon: Factory,
    title: "CHP & CCHP",
    description:
      "Combined heat and power solutions designed to increase fuel utilisation and support demanding industrial energy needs.",
    capabilities: ["Cogeneration", "Trigeneration", "Waste heat recovery"],
  },
  {
    icon: Sun,
    title: "Solar Energy",
    description:
      "Practical solar solutions for commercial, industrial, rooftop, and hybrid applications, engineered around each site.",
    capabilities: ["Commercial and industrial solar", "Rooftop systems", "Solar hybrid integration"],
  },
  {
    icon: BatteryCharging,
    title: "Battery Energy Storage",
    description:
      "BESS integration for backup power, peak management, renewable energy support, and improved system resilience.",
    capabilities: ["Backup power", "Peak shaving", "Renewable energy integration"],
  },
  {
    icon: Zap,
    title: "Electrical Engineering",
    description:
      "LV and MV engineering covering distribution, protection, control interfaces, and power-quality requirements.",
    capabilities: ["LV and MV distribution", "Protection and coordination", "Power quality"],
  },
  {
    icon: Cpu,
    title: "Automation & SCADA",
    description:
      "Industrial automation solutions that connect equipment, operators, and data through dependable control architecture.",
    capabilities: ["PLC systems", "SCADA and HMI", "Industrial communication"],
  },
  {
    icon: Gauge,
    title: "Energy Management",
    description:
      "Monitoring and optimisation tools that improve visibility, support decisions, and reduce avoidable energy losses.",
    capabilities: ["Energy monitoring", "Smart metering", "Performance optimisation"],
  },
  {
    icon: Wrench,
    title: "Operation & Maintenance",
    description:
      "Structured technical support focused on availability, safe operation, preventive care, and rapid fault response.",
    capabilities: ["Preventive maintenance", "Corrective maintenance", "Technical support"],
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-[#03101f] text-white">
      <section className="relative isolate min-h-[720px] overflow-hidden border-y border-[#A3E635]/60 lg:min-h-[760px]">
        <Image
          src="/images/tps-solutions-hero.png"
          alt="Integrated TPS energy solutions combining CHP, solar power, wind energy, battery storage, and electrical infrastructure"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center] sm:object-[66%_center] lg:object-right"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,16,31,0.98)_0%,rgba(3,16,31,0.93)_30%,rgba(3,16,31,0.68)_52%,rgba(3,16,31,0.18)_78%,rgba(3,16,31,0.08)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,16,31,0.18)_0%,transparent_45%,rgba(3,16,31,0.34)_100%)]" />

        <div className="relative mx-auto flex min-h-[720px] max-w-[1280px] items-start px-6 pb-24 pt-16 sm:px-8 sm:pt-20 lg:min-h-[760px] lg:px-12 lg:pb-28 lg:pt-24">
          <div className="max-w-3xl lg:-translate-x-8">
            <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              Integrated solutions for a more reliable energy future.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-white/72 sm:text-xl">
              TPS brings power generation, renewable energy, storage, electrical engineering,
              automation, and technical support together around the real requirements of each client.
            </p>
            <div className="mt-10">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#A3E635] px-7 py-3.5 text-sm font-extrabold text-[#03101f] transition-transform duration-200 hover:-translate-y-0.5"
              >
                Discuss Your Requirements
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="solution-grid" className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-6 sm:px-8 lg:px-12">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-5 sm:gap-7">
              <span className="h-px w-14 bg-[#A3E635]/80 sm:w-24" aria-hidden="true" />
              <h2 className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#A3E635] sm:text-base">
                Our Core Solutions
              </h2>
              <span className="h-px w-14 bg-[#A3E635]/80 sm:w-24" aria-hidden="true" />
            </div>
            <p className="mx-auto mt-5 max-w-3xl text-3xl font-black tracking-[-0.025em] sm:text-5xl">
              One engineering partner across the energy system.
            </p>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/65">
              Each solution is presented honestly and clearly, without invented project numbers or
              unsupported claims. The focus is on what TPS is prepared to engineer and support.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {solutions.map((solution) => {
              const Icon = solution.icon;
              return (
                <article
                  key={solution.title}
                  className="group relative flex min-h-[360px] flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.045] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#A3E635]/70 hover:bg-white/[0.07] hover:shadow-[0_18px_55px_rgba(163,230,53,0.10)]"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#A3E635] transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#A3E635]/45 bg-[#A3E635]/[0.08] text-[#A3E635] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-[#A3E635] group-hover:text-[#03101f]">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-7 text-2xl font-extrabold tracking-[-0.02em]">
                    {solution.title}
                  </h3>
                  <p className="mt-4 leading-7 text-white/65">{solution.description}</p>
                  <ul className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm text-white/75">
                    {solution.capabilities.map((capability) => (
                      <li key={capability} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A3E635]" />
                        <span>{capability}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-[#A3E635]/60 bg-[#071b33]">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-7 px-6 py-14 sm:px-8 lg:flex-row lg:items-center lg:px-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#A3E635]">
              Start With The Requirement
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.025em] sm:text-4xl">
              Tell us what your energy system needs to achieve.
            </h2>
          </div>
          <Link
            href="/#contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full border-2 border-[#A3E635] px-7 py-3.5 text-sm font-extrabold text-[#A3E635] transition-colors hover:bg-[#A3E635] hover:text-[#03101f]"
          >
            Let's Build the Right Solution
          </Link>
        </div>
      </section>
    </div>
  );
}
