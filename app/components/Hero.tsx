import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Handshake,
  Leaf,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, title: "Reliable Engineering" },
  { icon: Handshake, title: "Customer First" },
  { icon: Leaf, title: "Sustainable Solutions" },
  { icon: Wrench, title: "End-to-End Support" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[calc(100svh-72px)] overflow-hidden border-0 bg-[#03101f] text-white"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-[#A3E635]/60" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-px bg-[#A3E635]/60" />

      <Image
        src="/images/tps-hero-neon-grid.webp"
        alt="Advanced energy infrastructure with power generation, wind energy and illuminated smart-grid lines"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(90deg,#03101f_0%,rgba(3,16,31,.88)_31%,rgba(3,16,31,.70)_50%,rgba(3,16,31,.20)_74%,rgba(3,16,31,.06)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,16,31,.08)_0%,transparent_42%,rgba(3,16,31,.72)_100%)]"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-72px)] max-w-[1440px] flex-col justify-center px-5 pb-8 pt-20 sm:px-7 lg:px-10 lg:pb-10 lg:pt-16 xl:px-12">
        <div className="max-w-[670px]">
          <h1 className="max-w-[650px] text-balance text-[42px] font-extrabold uppercase leading-[0.98] tracking-[-0.045em] sm:text-[58px] lg:text-[66px] xl:text-[74px]">
            Engineering reliable
            <span className="mt-2 block text-[#8FD246]">energy solutions</span>
          </h1>

          <p className="mt-6 max-w-[620px] text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
            TPS delivers integrated engineering solutions for power generation, CHP,
            renewable energy, electrical systems, industrial automation, operation and
            maintenance.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/solutions"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#74C043] px-6 py-3 text-sm font-extrabold uppercase tracking-[0.04em] text-white shadow-[0_14px_34px_rgba(116,192,67,.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#86D64F] hover:shadow-[0_18px_38px_rgba(116,192,67,.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635] focus-visible:ring-offset-2 focus-visible:ring-offset-[#03101f]"
            >
              Explore solutions
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/70 bg-[#03101f]/25 px-6 py-3 text-sm font-extrabold uppercase tracking-[0.04em] text-white backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#A3E635] hover:bg-white/[0.06] hover:text-[#C7F36A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#03101f]"
            >
              Contact us
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid max-w-[900px] grid-cols-2 gap-x-5 gap-y-4 border-t border-white/15 pt-6 sm:grid-cols-4 sm:gap-0 lg:mt-14">
          {trustItems.map(({ icon: Icon, title }, index) => (
            <div
              key={title}
              className={`group flex min-w-0 items-center gap-3 py-2 sm:px-5 ${
                index === 0 ? "sm:pl-0" : "sm:border-l sm:border-white/20"
              }`}
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center text-[#A3E635] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-[#C7F36A]">
                <Icon className="h-7 w-7" strokeWidth={1.7} aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold leading-5 text-white sm:text-[13px] lg:text-sm">
                {title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
