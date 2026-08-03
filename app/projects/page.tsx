import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects | Tetra Power Solutions",
  description:
    "TPS is preparing its first engineering projects. Real case studies and verified project results will be published here as they are completed.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-[#03101f]">
      <section className="relative isolate overflow-hidden border-y border-[#A3E635]/45 bg-[#03101f] text-white">
        <Image
          src="/images/projects/projects-coming-soon.png"
          alt="Future energy projects featuring power transmission, wind and solar infrastructure"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-30 object-cover object-[68%_center]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(3,16,31,0.99)_0%,rgba(3,16,31,0.96)_31%,rgba(3,16,31,0.76)_50%,rgba(3,16,31,0.25)_72%,rgba(3,16,31,0.08)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(3,16,31,0.2)_0%,rgba(3,16,31,0.05)_56%,rgba(3,16,31,0.58)_100%)]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-35 [background-image:linear-gradient(rgba(163,230,53,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(163,230,53,0.045)_1px,transparent_1px)] [background-size:48px_48px]"
        />

        <div className="relative mx-auto flex max-w-[1280px] items-start px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="max-w-3xl lg:-translate-x-8">
            <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.035em] text-white sm:text-6xl lg:text-7xl">
              <span className="block">Building Our</span>
              <span className="block text-[#A3E635]">First Success Stories</span>
            </h1>

            <div className="mt-7 h-1 w-24 rounded-full bg-[#A3E635]" />

            <p className="mt-7 max-w-xl text-lg font-semibold leading-8 text-white sm:text-xl">
              TPS is preparing its first engineering projects. Real case studies
              and verified results will be published here as they are completed.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/solutions"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#A3E635] px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.04em] text-[#03101f] shadow-[0_14px_34px_rgba(163,230,53,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b6f45a] hover:shadow-[0_18px_38px_rgba(163,230,53,0.30)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A3E635] focus-visible:ring-offset-2 focus-visible:ring-offset-[#03101f]"
              >
                Explore Our Solutions
                <span aria-hidden="true">↗</span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/40 bg-[#03101f]/30 px-7 py-3.5 text-sm font-extrabold uppercase tracking-[0.04em] text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A3E635] hover:text-[#A3E635] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#03101f]"
              >
                Discuss Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
