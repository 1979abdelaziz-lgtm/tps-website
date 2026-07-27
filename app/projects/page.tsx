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
    <main className="min-h-screen bg-[#03101f]">
      <section className="relative isolate min-h-[calc(100vh-72px)] overflow-hidden border-t border-[#A3E635]/90 bg-[#03101f] text-white">
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

        <div className="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-[1440px] items-center px-5 py-14 sm:px-7 lg:px-10 lg:py-16 xl:px-12">
          <div className="max-w-[650px]">
            <h1 className="text-5xl font-black leading-[1.02] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              <span className="block">Projects</span>
              <span className="mt-1 block text-[#A3E635]">Coming Soon</span>
            </h1>

            <p className="mt-8 max-w-xl text-xl font-semibold leading-relaxed text-white sm:text-2xl">
              Every great engineering company starts with its first successful
              project.
            </p>

            <div className="mt-8 max-w-xl space-y-5 text-[17px] leading-8 text-white/78">
              <p>
                TPS is currently preparing for its first engineering projects.
                As we complete each project, we will proudly share real case
                studies, actual results, and verified project stories here.
              </p>
              <p>
                We believe in earning trust through real work—not placeholders,
                exaggerated claims, or fictional projects.
              </p>
            </div>

            <Link
              href="/solutions"
              className="mt-10 inline-flex items-center justify-center gap-3 rounded-lg bg-[#A3E635] px-7 py-4 text-[16px] font-extrabold text-[#03101f] shadow-[0_16px_38px_rgba(163,230,53,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#b6f45a] hover:shadow-[0_20px_44px_rgba(163,230,53,0.3)] focus:outline-none focus:ring-2 focus:ring-[#A3E635] focus:ring-offset-4 focus:ring-offset-[#03101f]"
            >
              <span aria-hidden="true" className="text-xl leading-none">
                ↗
              </span>
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
