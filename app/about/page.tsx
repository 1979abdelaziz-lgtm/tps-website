import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Handshake,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Target,
  Users,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About TPS | Tetra Power Solutions",
  description:
    "Learn about Tetra Power Solutions, our engineering-first approach, mission, vision, values, and commitment to reliable, honest, customer-focused energy solutions.",
};

const values = [
  {
    icon: Handshake,
    title: "Integrity",
    description:
      "We communicate clearly, make realistic commitments, and earn trust through honest engineering work.",
  },
  {
    icon: BadgeCheck,
    title: "Quality",
    description:
      "We approach every requirement with care, technical discipline, and attention to long-term performance.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Trust",
    description:
      "We listen first, understand the real challenge, and focus on solutions that create lasting value.",
  },
  {
    icon: ShieldCheck,
    title: "Safety",
    description:
      "Safe design, installation, operation, and maintenance remain central to every engineering decision.",
  },
  {
    icon: Lightbulb,
    title: "Practical Innovation",
    description:
      "We apply technology where it improves reliability, efficiency, visibility, or ease of operation.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We work collaboratively with clients, suppliers, and technical teams to achieve the right outcome.",
  },
];

const reasons = [
  {
    icon: Wrench,
    title: "Engineering First",
    description:
      "Every recommendation begins with the technical requirement, site conditions, and operating priorities.",
  },
  {
    icon: Target,
    title: "Built Around the Need",
    description:
      "We do not force one standard answer. We shape the solution around the required performance and outcome.",
  },
  {
    icon: BadgeCheck,
    title: "Clear and Accountable",
    description:
      "We keep scope, responsibilities, assumptions, and deliverables understandable from the beginning.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f6f8f7] text-[#071a24]">
      <section className="relative isolate min-h-[590px] overflow-hidden border-y border-[#A3E635]/45 bg-[#03101f] text-white sm:min-h-[640px]">
        <Image
          src="/images/about-hero-v3.webp"
          alt="Integrated energy infrastructure representing the engineering vision of Tetra Power Solutions"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,16,31,0.98)_0%,rgba(3,16,31,0.92)_38%,rgba(3,16,31,0.56)_65%,rgba(3,16,31,0.20)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,16,31,0.12)_0%,transparent_48%,rgba(3,16,31,0.62)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(ellipse_at_bottom,rgba(163,230,53,0.14),transparent_68%)]" />

        <div className="relative mx-auto flex min-h-[590px] max-w-[1280px] items-start px-6 pb-20 pt-16 sm:min-h-[640px] sm:px-8 sm:pt-20 lg:px-12 lg:pb-24 lg:pt-24">
          <div className="max-w-3xl lg:-translate-x-8">
            <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
              Engineering Trust Into Every Energy Solution
            </h1>
            <div className="mt-7 h-1 w-24 rounded-full bg-[#A3E635]" />
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 sm:text-xl">
              TPS is an engineering-led energy company focused on building reliable, efficient, and practical solutions through technical integrity, clear communication, and genuine customer partnership.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1180px] gap-10 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#16803b]">
              Who We Are
            </p>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] sm:text-5xl">
              A new company with a clear engineering standard.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[#40545d]">
            <p>
              Tetra Power Solutions was established to provide integrated energy engineering with a simple principle: understand the real requirement, design responsibly, and deliver value that the customer can trust.
            </p>
            <p>
              We are at the beginning of our journey, and we choose to build our reputation honestly—through real work, dependable relationships, and solutions that perform as intended.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#16803b]/15 bg-[#edf5ef]">
        <div className="mx-auto grid max-w-[1180px] gap-6 px-6 py-14 sm:px-8 sm:py-16 lg:grid-cols-2 lg:px-12">
          <article className="rounded-[26px] border border-[#16803b]/15 bg-white p-8 shadow-[0_14px_42px_rgba(6,30,22,0.07)] sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#13763a] text-white shadow-lg">
              <Target size={27} strokeWidth={1.9} />
            </div>
            <p className="mt-7 text-sm font-extrabold uppercase tracking-[0.22em] text-[#16803b]">
              Our Mission
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.025em]">
              Deliver dependable energy engineering with honesty and care.
            </h2>
            <p className="mt-5 leading-7 text-[#4f6169]">
              Our mission is to help clients achieve safer, more reliable, and more efficient energy systems through integrated engineering, practical technology, and responsive technical support.
            </p>
          </article>

          <article className="rounded-[26px] border border-[#16803b]/15 bg-[#071a24] p-8 text-white shadow-[0_14px_42px_rgba(3,16,31,0.16)] sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#A3E635] text-[#071a24] shadow-lg">
              <Lightbulb size={27} strokeWidth={1.9} />
            </div>
            <p className="mt-7 text-sm font-extrabold uppercase tracking-[0.22em] text-[#A3E635]">
              Our Vision
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.025em]">
              Become a trusted engineering partner for the energy future.
            </h2>
            <p className="mt-5 leading-7 text-white/72">
              We aim to grow into a recognised energy solutions partner across Egypt, Africa, and the Middle East by consistently earning confidence through quality, integrity, and real technical value.
            </p>
          </article>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="mx-auto mb-11 max-w-3xl text-center">
            <div className="flex items-center justify-center gap-5 sm:gap-7">
              <span className="h-px w-14 bg-[#16803b]/70 sm:w-24" aria-hidden="true" />
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#16803b]">
                Our Core Values
              </p>
              <span className="h-px w-14 bg-[#16803b]/70 sm:w-24" aria-hidden="true" />
            </div>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] sm:text-5xl">
              The principles behind every decision we make.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#40545d]">
              Our values define how we engineer, communicate, cooperate, and build long-term trust.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <article
                  key={value.title}
                  className="group rounded-[24px] border border-[#0a2b20]/10 bg-white p-7 shadow-[0_12px_38px_rgba(6,30,22,0.07)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#16803b]/35 hover:shadow-[0_20px_50px_rgba(6,85,45,0.13)]"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e9f6ec] text-[#13763a] transition-colors duration-300 group-hover:bg-[#13763a] group-hover:text-white">
                    <Icon size={25} strokeWidth={1.9} />
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold tracking-[-0.02em]">
                    {value.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#4f6169]">{value.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#071a24] text-white">
        <div className="mx-auto max-w-[1180px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.24em] text-[#A3E635]">
                Why TPS
              </p>
              <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] sm:text-5xl">
                A practical partner, not just a supplier.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
                We focus on understanding the system, the operational need, and the responsibility behind every recommendation.
              </p>
            </div>

            <div className="grid gap-5">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <article
                    key={reason.title}
                    className="flex gap-5 rounded-[22px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-sm"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#A3E635] text-[#071a24]">
                      <Icon size={23} strokeWidth={1.9} />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold">{reason.title}</h3>
                      <p className="mt-2 leading-7 text-white/68">{reason.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#16803b]/18 bg-[linear-gradient(90deg,#edf8f0_0%,#f7fbf8_55%,#edf8f0_100%)]">
        <div className="mx-auto flex max-w-[1080px] flex-col items-start justify-between gap-7 px-6 py-10 sm:px-8 lg:flex-row lg:items-center lg:px-10">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-[#16803b]">
              Start a Conversation
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.025em] sm:text-4xl">
              Let&apos;s understand what your energy system needs.
            </h2>
            <p className="mt-3 text-[#4f6169]">
              Share the challenge, the operating conditions, and the outcome you need to achieve.
            </p>
          </div>
          <Link
            href="/#contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-[#13763a] px-7 py-4 text-sm font-extrabold text-white shadow-[0_10px_28px_rgba(19,118,58,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0f6330]"
          >
            Contact TPS
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
