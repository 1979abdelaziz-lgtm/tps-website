import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[590px] overflow-hidden border-y border-[#A3E635]/45 bg-[#03101f] text-white sm:min-h-[640px]"
    >
      <Image
        src="/images/tps-hero-neon-grid.webp"
        alt="Integrated energy infrastructure combining power generation, renewable energy, battery storage, and smart-grid systems"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,16,31,1)_0%,rgba(3,16,31,0.96)_36%,rgba(3,16,31,0.72)_62%,rgba(3,16,31,0.28)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,16,31,0.20)_0%,rgba(3,16,31,0.08)_48%,rgba(3,16,31,0.70)_100%)]"
      />

      <div className="relative mx-auto min-h-[590px] max-w-[1280px] px-6 pb-16 pt-16 sm:min-h-[640px] sm:px-8 sm:pt-20 lg:px-12 lg:pb-20 lg:pt-24">
        <div className="w-full max-w-3xl lg:-translate-x-8">
          <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
            End-to-End
            <span className="block text-[#A3E635]">Energy Solutions</span>
          </h1>

          <div className="mt-7 h-1 w-24 rounded-full bg-[#A3E635]" />

          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
            One partner, every stage—from data collection and feasibility studies
            to engineering, execution, commissioning, and long-term operation and
            maintenance.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/solutions"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#74C043] px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.04em] text-white shadow-[0_14px_34px_rgba(116,192,67,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#86D64F] hover:shadow-[0_18px_38px_rgba(116,192,67,0.30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635] focus-visible:ring-offset-2 focus-visible:ring-offset-[#03101f]"
            >
              Explore solutions
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-white/70 bg-[#03101f]/38 px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.04em] text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A3E635] hover:bg-white/[0.07] hover:text-[#C7F36A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#03101f]"
            >
              Contact us
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
