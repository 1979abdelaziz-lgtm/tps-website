import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  Mail,
  MapPin,
} from "lucide-react";

const companyLinks = [
  { label: "About TPS", href: "#about" },
  { label: "Our Expertise", href: "#solutions" },
  { label: "Industries", href: "#industries" },
  { label: "Knowledge Center", href: "#knowledge" },
];

const solutionLinks = [
  { label: "Power Systems", href: "#solutions" },
  { label: "Industrial Automation", href: "#solutions" },
  { label: "Energy Management", href: "#solutions" },
  { label: "Engineering Services", href: "#solutions" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#07182d] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 8% 10%, rgba(23, 106, 178, 0.24), transparent 34%), radial-gradient(circle at 92% 82%, rgba(0, 166, 153, 0.12), transparent 30%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        <section className="border-b border-white/10 py-10 sm:py-12 lg:py-14">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300/90">
                Engineering tomorrow&apos;s energy
              </p>
              <h2 className="text-2xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-3xl lg:text-[2.15rem]">
                Let&apos;s build a safer, smarter and more efficient energy future.
              </h2>
            </div>

            <Link
              href="#contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#07182d] transition duration-300 hover:-translate-y-0.5 hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#07182d]"
            >
              Start a conversation
              <ArrowUpRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </section>

        <div className="grid gap-12 py-12 sm:py-14 lg:grid-cols-[1.45fr_0.8fr_0.95fr_1fr] lg:gap-10 lg:py-16">
          <div className="max-w-md">
            <Link
              href="/"
              aria-label="Tetra Power Solutions home"
              className="inline-flex items-center gap-4"
            >
              <span className="relative block h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white p-1.5 shadow-[0_14px_36px_rgba(0,0,0,0.18)]">
                <Image
                  src="/tps-logo-mark.png"
                  alt="Tetra Power Solutions logo"
                  fill
                  sizes="56px"
                  className="object-contain p-1"
                />
              </span>

              <span className="block">
                <span className="block text-[0.95rem] font-bold tracking-[0.08em] text-white">
                  TETRA POWER SOLUTIONS
                </span>
                <span className="mt-1 block text-[0.62rem] font-medium tracking-[0.18em] text-cyan-200/80">
                  INTEGRATED ENERGY SOLUTIONS
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">
              Integrated engineering and energy solutions designed to improve
              reliability, efficiency and long-term operational performance.
            </p>
          </div>

          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Solutions" links={solutionLinks} />

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white">Contact</h3>
            <div className="mt-5 space-y-5 text-sm text-slate-300">
              <Link
                href="#contact"
                className="group flex items-start gap-3 transition hover:text-white"
              >
                <Mail aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                <span>Project enquiries</span>
              </Link>

              <Link
                href="#contact"
                className="group flex items-start gap-3 transition hover:text-white"
              >
                <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                <span className="leading-6">Regional and international projects</span>
              </Link>

              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 font-semibold text-white transition hover:text-cyan-200"
              >
                Contact our team
                <ChevronRight
                  aria-hidden="true"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Tetra Power Solutions. All rights reserved.</p>

          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

type FooterColumnProps = {
  title: string;
  links: Array<{ label: string; href: string }>;
};

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-sm font-semibold tracking-wide text-white">{title}</h3>
      <ul className="mt-5 space-y-3.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <span className="h-px w-0 bg-cyan-300 transition-all duration-300 group-hover:w-3" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
