import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import {
  companyLinks,
  contactActionLinks,
  footerIndustryLinks,
  footerSolutionLinks,
  legalLinks,
  socialLinks,
} from "@/app/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-white/10 bg-[#041326] text-white">
      <div className="mx-auto max-w-7xl px-5 py-9 sm:px-8 sm:py-10 lg:px-10 lg:py-11">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_.8fr_.9fr_.9fr_1.05fr] lg:gap-8">
          <div className="max-w-md">
            <Link
              href="/"
              aria-label="Tetra Power Solutions home"
              className="inline-flex items-center gap-4 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
            >
              <span className="relative flex h-[88px] w-[124px] shrink-0 items-center justify-center">
                <Image
                  src="/tps-logo-mark.png"
                  alt="TPS"
                  width={248}
                  height={180}
                  className="h-auto w-full object-contain"
                  priority={false}
                />
              </span>
              <span className="min-w-0">
                <span className="block whitespace-nowrap text-sm font-bold uppercase tracking-[0.08em] text-white sm:text-base">
                  Tetra Power Solutions
                </span>
                <span className="mt-1 block whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.16em] text-lime-400">
                  Integrated Energy Solutions
                </span>
              </span>
            </Link>

            <p className="mt-4 text-sm leading-6 text-slate-300">
              Integrated engineering solutions for power, automation and energy
              infrastructure—delivered with care, precision and accountability.
            </p>

            <div className="mt-5 flex gap-3" aria-label="TPS social channels">
              {socialLinks.map((link) => (
                <SocialLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                  icon={socialIcons[link.label]}
                />
              ))}
            </div>
          </div>

          <FooterLinkColumn title="Company" links={companyLinks} />
          <FooterLinkColumn title="Solutions" links={footerSolutionLinks} />
          <FooterLinkColumn title="Industries" links={footerIndustryLinks} />

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-white">
              Connect with TPS
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Share your project needs. Our team will guide your enquiry to the right
              engineering discipline.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-3 border-t border-white/10 pt-6 md:grid-cols-3">
          <ContactAction
            href={contactActionLinks.projectEnquiry}
            icon={<Mail className="h-5 w-5" aria-hidden="true" />}
            eyebrow="Project enquiry"
            label="Send project details"
          />
          <ContactAction
            href={contactActionLinks.technicalDiscussion}
            icon={<Phone className="h-5 w-5" aria-hidden="true" />}
            eyebrow="Technical discussion"
            label="Request a call back"
          />
          <ContactAction
            href={contactActionLinks.siteRequirements}
            icon={<MapPin className="h-5 w-5" aria-hidden="true" />}
            eyebrow="Site requirements"
            label="Discuss project location"
          />
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-white/10 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Tetra Power Solutions. All rights reserved.</p>
          <div className="flex items-center gap-5">
            {legalLinks.map((link) => (
              <LegalLink key={link.label} href={link.href} label={link.label} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

type FooterLinkColumnProps = {
  title: string;
  links: Array<{ label: string; href: string }>;
};

function FooterLinkColumn({ title, links }: FooterLinkColumnProps) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-white">{title}</p>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white focus-visible:outline-none focus-visible:text-white"
            >
              <ChevronRight className="h-3.5 w-3.5 text-lime-400 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

type ContactActionProps = {
  href: string;
  icon: React.ReactNode;
  eyebrow: string;
  label: string;
};

function ContactAction({ href, icon, eyebrow, label }: ContactActionProps) {
  return (
    <Link
      href={href}
      className="group flex min-h-20 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] px-5 py-4 transition hover:border-lime-400/35 hover:bg-white/[0.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
    >
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-[#071b33] text-lime-400">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-lime-400">
          {eyebrow}
        </span>
        <span className="mt-1.5 block text-base font-semibold text-slate-100">
          {label}
        </span>
      </span>
      <ArrowUpRight className="ml-auto h-4 w-4 shrink-0 text-slate-600 transition group-hover:text-lime-300" aria-hidden="true" />
    </Link>
  );
}

type SocialLinkProps = {
  href: string | null;
  label: string;
  icon: React.ReactNode;
};

const socialLinkClassName =
  "flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/[0.025] text-lime-400 transition hover:border-lime-400/45 hover:bg-lime-400/10 hover:text-lime-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime-400";

const socialIcons: Record<string, React.ReactNode> = {
  LinkedIn: <LinkedInIcon className="h-5 w-5" />,
  Facebook: <FacebookIcon className="h-5 w-5" />,
  YouTube: <YouTubeIcon className="h-5 w-5" />,
  "Email TPS": <Mail className="h-5 w-5" aria-hidden="true" />,
};

function SocialLink({ href, label, icon }: SocialLinkProps) {
  if (!href) {
    return (
      <span
        aria-label={label}
        aria-disabled="true"
        className={`${socialLinkClassName} cursor-not-allowed opacity-60`}
      >
        {icon}
      </span>
    );
  }

  return (
    <Link href={href} aria-label={label} className={socialLinkClassName}>
      {icon}
    </Link>
  );
}

type LegalLinkProps = {
  href: string | null;
  label: string;
};

function LegalLink({ href, label }: LegalLinkProps) {
  if (!href) {
    return (
      <span aria-disabled="true" className="cursor-not-allowed opacity-60">
        {label}
      </span>
    );
  }

  return (
    <Link href={href} className="transition hover:text-slate-300">
      {label}
    </Link>
  );
}

type BrandIconProps = { className?: string };

function LinkedInIcon({ className }: BrandIconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M6.5 8.25H3.25V21H6.5V8.25ZM4.88 3A1.88 1.88 0 1 0 4.88 6.75 1.88 1.88 0 0 0 4.88 3ZM21 13.69C21 9.84 18.94 8.05 16.2 8.05c-2.21 0-3.2 1.22-3.75 2.08V8.25H9.2V21h3.25v-6.31c0-1.66.31-3.27 2.38-3.27 2.04 0 2.07 1.91 2.07 3.38V21H21v-7.31Z" />
    </svg>
  );
}

function FacebookIcon({ className }: BrandIconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.7 21v-8h2.69l.4-3.12H13.7V7.89c0-.9.25-1.52 1.55-1.52H16.9V3.58c-.29-.04-1.27-.12-2.42-.12-2.4 0-4.04 1.46-4.04 4.15v2.27H7.72V13h2.72v8h3.26Z" />
    </svg>
  );
}

function YouTubeIcon({ className }: BrandIconProps) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M21.58 7.19a2.87 2.87 0 0 0-2.02-2.03C17.78 4.68 12 4.68 12 4.68s-5.78 0-7.56.48A2.87 2.87 0 0 0 2.42 7.2C1.94 8.98 1.94 12 1.94 12s0 3.02.48 4.81a2.87 2.87 0 0 0 2.02 2.03c1.78.48 7.56.48 7.56.48s5.78 0 7.56-.48a2.87 2.87 0 0 0 2.02-2.03c.48-1.79.48-4.81.48-4.81s0-3.02-.48-4.81ZM10 15.18V8.82L15.5 12 10 15.18Z" />
    </svg>
  );
}
