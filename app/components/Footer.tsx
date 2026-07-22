import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronRight,
  CircleCheck,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const companyLinks = [
  { label: "About TPS", href: "#about" },
  { label: "Our Values", href: "#values" },
  { label: "Projects", href: "#projects" },
  { label: "Knowledge Center", href: "#knowledge" },
];

const solutionLinks = [
  { label: "Power Systems", href: "#solutions" },
  { label: "Automation & Control", href: "#solutions" },
  { label: "Energy Management", href: "#solutions" },
  { label: "Engineering Services", href: "#solutions" },
];

const industryLinks = [
  { label: "Utilities & Energy", href: "#industries" },
  { label: "Industrial Facilities", href: "#industries" },
  { label: "Infrastructure", href: "#industries" },
  { label: "Commercial Projects", href: "#industries" },
];

const trustPoints = [
  "Quality without compromise",
  "Honest engineering guidance",
  "Long-term client partnership",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative isolate overflow-hidden bg-[#041326] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-30 bg-[radial-gradient(circle_at_12%_18%,rgba(16,185,129,0.16),transparent_28%),radial-gradient(circle_at_88%_40%,rgba(37,99,235,0.18),transparent_34%),linear-gradient(135deg,#041326_0%,#08284b_52%,#041326_100%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.55)_1px,transparent_1px)] [background-size:46px_46px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[360px] opacity-30 [background:linear-gradient(115deg,transparent_0_9%,rgba(52,211,153,.22)_9.2%_9.45%,transparent_9.7%_23%,rgba(52,211,153,.14)_23.2%_23.45%,transparent_23.7%_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-emerald-400/90 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <section className="py-10 sm:py-14 lg:py-16">
          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.06] px-6 py-8 shadow-[0_28px_100px_rgba(0,0,0,.34)] backdrop-blur-md sm:px-9 sm:py-10 lg:px-12 lg:py-12">
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-emerald-400/12 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute bottom-0 right-0 h-40 w-[46%] opacity-20 [background:linear-gradient(155deg,transparent_0_42%,rgba(255,255,255,.2)_42.5%_43%,transparent_43.5%_54%,rgba(52,211,153,.5)_54.5%_55%,transparent_55.5%)]"
            />

            <EnergyNetworkVisual />

            <div className="relative z-10 grid items-center gap-9 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12">
              <div className="max-w-3xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  Trust built through engineering
                </div>
                <h2 className="text-balance text-3xl font-semibold tracking-[-0.035em] text-white sm:text-4xl lg:text-[46px] lg:leading-[1.08]">
                  Let&apos;s build the right solution, together.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                  We listen first, engineer responsibly, and deliver with the quality and
                  integrity every project deserves.
                </p>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-300">
                  {trustPoints.map((point) => (
                    <span key={point} className="inline-flex items-center gap-2">
                      <CircleCheck className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                      {point}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Link
                  href="#contact"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3 text-sm font-bold text-[#041326] transition duration-300 hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-[0_16px_38px_rgba(34,197,94,.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08284b]"
                >
                  Discuss your project
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  href="#solutions"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#08284b]"
                >
                  Explore our expertise
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-white/10 py-12 sm:py-14 lg:py-16">
          <LowerEnergyVisual />
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1.35fr_.72fr_.82fr_.82fr_1.05fr] lg:gap-8">
          <div className="max-w-[430px]">
            <Link
              href="/"
              aria-label="Tetra Power Solutions home"
              className="inline-flex max-w-full items-center gap-4 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              <span className="relative flex h-[94px] w-[130px] shrink-0 items-center justify-center sm:h-[102px] sm:w-[142px]">
                <Image
                  src="/tps-logo-mark.png"
                  alt="TPS"
                  width={248}
                  height={180}
                  className="h-auto w-full object-contain drop-shadow-[0_10px_28px_rgba(0,0,0,.3)]"
                />
              </span>
              <span className="relative z-10 min-w-0">
                <span className="block whitespace-nowrap text-[13px] font-bold uppercase leading-tight tracking-[0.09em] text-white sm:text-[15px] lg:text-[14px] xl:text-[16px]">
                  Tetra Power Solutions
                </span>
                <span className="mt-2 block whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.18em] text-emerald-400 sm:text-[10px] xl:text-[11px]">
                  Integrated Energy Solutions
                </span>
              </span>
            </Link>

            <p className="mt-6 text-[15px] leading-7 text-slate-300">
              Integrated engineering solutions for power, automation and energy
              infrastructure—delivered with care, precision and accountability.
            </p>

            <div className="mt-6 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.055] p-4">
              <div className="flex items-start gap-3">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" aria-hidden="true" />
                <p className="text-sm leading-6 text-slate-300">
                  Our success is measured by the trust we earn and the lasting value we
                  create for every client.
                </p>
              </div>
            </div>
          </div>

          <FooterLinkColumn title="Company" links={companyLinks} />
          <FooterLinkColumn title="Solutions" links={solutionLinks} />
          <FooterLinkColumn title="Industries" links={industryLinks} />

          <div className="lg:min-w-[220px]">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-white">
              Connect with TPS
            </p>
            <p className="mt-4 text-sm leading-6 text-slate-400">
              Share your project needs. Our team will guide your enquiry to the right
              engineering discipline.
            </p>

          </div>
          </div>

          <div className="relative z-10 mt-12 grid gap-4 lg:mt-14 lg:grid-cols-3">
            <ContactAction
              href="#contact"
              icon={<Mail className="h-5 w-5" aria-hidden="true" />}
              eyebrow="Project enquiry"
              label="Send project details"
            />
            <ContactAction
              href="#contact"
              icon={<Phone className="h-5 w-5" aria-hidden="true" />}
              eyebrow="Technical discussion"
              label="Request a call back"
            />
            <ContactAction
              href="#contact"
              icon={<MapPin className="h-5 w-5" aria-hidden="true" />}
              eyebrow="Site requirements"
              label="Discuss project location"
            />
          </div>
        </section>

        <div className="grid gap-4 border-t border-white/10 pb-8 pt-9 text-xs text-slate-400 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p>© {currentYear} Tetra Power Solutions. All rights reserved.</p>
            <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
            <p className="text-slate-500">Engineering with integrity. Delivering with care.</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="#" className="transition hover:text-white focus-visible:outline-none focus-visible:text-white">
              Privacy
            </Link>
            <Link href="#" className="transition hover:text-white focus-visible:outline-none focus-visible:text-white">
              Terms
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 font-semibold text-emerald-400 transition hover:text-emerald-300 focus-visible:outline-none focus-visible:text-emerald-300"
            >
              Contact TPS
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}



function LowerEnergyVisual() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-[116px] top-0 hidden overflow-hidden lg:block">
      <div className="absolute inset-y-0 right-0 w-[58%] bg-gradient-to-l from-[#061a32]/90 via-[#072846]/48 to-transparent" />
      <div className="absolute bottom-0 right-[1%] h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-0 right-[10%] h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      <svg viewBox="0 0 980 470" className="absolute bottom-[-8px] right-[-30px] h-[94%] w-[74%] opacity-95" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lower-energy" x1="20" y1="390" x2="930" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22D3EE" stopOpacity="0" />
            <stop offset="0.28" stopColor="#38BDF8" stopOpacity="0.78" />
            <stop offset="0.66" stopColor="#22D3EE" stopOpacity="0.95" />
            <stop offset="1" stopColor="#A3E635" stopOpacity="0.94" />
          </linearGradient>
          <linearGradient id="lower-tower" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#E0F2FE" stopOpacity="0.95" />
            <stop offset="0.48" stopColor="#22D3EE" stopOpacity="0.9" />
            <stop offset="1" stopColor="#A3E635" stopOpacity="0.75" />
          </linearGradient>
          <filter id="lower-glow" x="-55%" y="-55%" width="210%" height="210%">
            <feGaussianBlur stdDeviation="5.2" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <g stroke="url(#lower-energy)" strokeLinecap="round" filter="url(#lower-glow)">
          <path d="M8 398C170 334 255 396 396 309C532 225 641 250 963 74" strokeWidth="3.2" strokeDasharray="12 13"><animate attributeName="stroke-dashoffset" values="0;-100" dur="8s" repeatCount="indefinite" /></path>
          <path d="M3 432C177 367 300 442 455 346C598 257 711 267 974 132" strokeWidth="2.2" opacity="0.78" strokeDasharray="8 14"><animate attributeName="stroke-dashoffset" values="0;-88" dur="10s" repeatCount="indefinite" /></path>
          <path d="M110 338C248 260 344 333 484 248C627 161 763 195 968 52" strokeWidth="1.45" opacity="0.58" strokeDasharray="6 16"><animate attributeName="stroke-dashoffset" values="0;-72" dur="12s" repeatCount="indefinite" /></path>
          <path d="M82 455C244 408 380 450 528 377C666 309 795 298 978 208" strokeWidth="1" opacity="0.34" />
        </g>
        <g stroke="url(#lower-tower)" strokeWidth="2" filter="url(#lower-glow)" strokeLinejoin="round">
          <g opacity="0.78"><path d="M355 437L414 252L473 437M372 382H456M381 347H447M392 311H436M402 278H426" /><path d="M372 382L447 347M456 382L381 347M392 311L447 347M436 311L381 347M355 437H473" /><path d="M378 292L414 252L450 292M370 303H458" /></g>
          <g opacity="0.9"><path d="M555 437L637 181L719 437M579 365H695M591 318H683M605 268H669M620 217H654" /><path d="M579 365L683 318M695 365L591 318M605 268L683 318M669 268L591 318M555 437H719" /><path d="M590 236L637 181L684 236M579 249H695" /></g>
          <g><path d="M736 437L848 91L960 437M768 342H928M786 282H910M806 217H890M826 151H870" /><path d="M768 342L910 282M928 342L786 282M806 217L910 282M890 217L786 282M736 437H960" /><path d="M785 164L848 91L911 164M769 181H927" /></g>
        </g>
        <g fill="#E0F2FE" filter="url(#lower-glow)"><circle cx="414" cy="252" r="4" /><circle cx="637" cy="181" r="5" /><circle cx="848" cy="91" r="6" /><circle cx="414" cy="437" r="4" /><circle cx="637" cy="437" r="5" /><circle cx="848" cy="437" r="6" /></g>
        <g fill="#A3E635" filter="url(#lower-glow)"><circle cx="473" cy="437" r="4" /><circle cx="719" cy="437" r="5" /><circle cx="960" cy="437" r="6" /></g>
      </svg>
      <div className="absolute bottom-0 right-0 h-px w-[76%] bg-gradient-to-l from-emerald-300/70 via-cyan-300/50 to-transparent" />
    </div>
  );
}

function EnergyNetworkVisual() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-[58%] overflow-hidden lg:block"
    >
      <div className="absolute inset-0 bg-gradient-to-l from-[#082c4c]/95 via-[#0a355d]/45 to-transparent" />
      <div className="absolute right-[-2%] top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-emerald-400/16 blur-3xl" />

      <svg
        viewBox="0 0 620 330"
        className="absolute bottom-[-18px] right-[-26px] h-[112%] w-[112%] opacity-95"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="energy-line" x1="55" y1="55" x2="575" y2="270" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" stopOpacity="0" />
            <stop offset="0.26" stopColor="#38BDF8" stopOpacity="0.78" />
            <stop offset="0.58" stopColor="#6EE7B7" stopOpacity="1" />
            <stop offset="1" stopColor="#D1FAE5" stopOpacity="0.16" />
          </linearGradient>
          <linearGradient id="tower-line" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#E0F2FE" stopOpacity="0.88" />
            <stop offset="0.55" stopColor="#22D3EE" stopOpacity="0.72" />
            <stop offset="1" stopColor="#A3E635" stopOpacity="0.48" />
          </linearGradient>
          <filter id="energy-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g
          stroke="url(#tower-line)"
          strokeWidth="1.55"
          strokeLinejoin="round"
          filter="url(#energy-glow)"
        >
          {/* Small tower */}
          <g opacity="0.72">
            <path d="M338 300L372 198L406 300M349 267H395M354 243H390M361 219H383" />
            <path d="M349 267L390 243M395 267L354 243M361 219L390 243M383 219L354 243M338 300H406" />
            <path d="M352 222L372 198L392 222M345 229H399" />
          </g>

          {/* Medium tower */}
          <g opacity="0.82">
            <path d="M414 300L458 153L502 300M429 255H487M423 278H493M438 218H478M447 181H469" />
            <path d="M429 255L487 278M487 255L429 278M438 218L478 255M478 218L438 255M414 300H502" />
            <path d="M432 188L458 153L484 188M424 198H492" />
          </g>

          {/* Large tower */}
          <g opacity="0.94">
            <path d="M500 300L558 88L616 300M520 236H596M512 270H604M532 184H584M544 130H572" />
            <path d="M520 236L596 270M596 236L520 270M532 184L584 236M584 184L532 236M500 300H616" />
            <path d="M523 142L558 88L593 142M512 155H604" />
          </g>
        </g>

        <g fill="#E0F2FE" filter="url(#energy-glow)">
          <circle cx="372" cy="198" r="3.2" />
          <circle cx="458" cy="153" r="4" />
          <circle cx="558" cy="88" r="5.2" />
        </g>
        <g fill="#A3E635" filter="url(#energy-glow)" opacity="0.9">
          <circle cx="338" cy="300" r="3.2" />
          <circle cx="406" cy="300" r="3.2" />
          <circle cx="414" cy="300" r="3.8" />
          <circle cx="502" cy="300" r="3.8" />
          <circle cx="500" cy="300" r="4.5" />
          <circle cx="616" cy="300" r="4.5" />
        </g>

        <g stroke="url(#energy-line)" strokeLinecap="round" filter="url(#energy-glow)">
          <path d="M18 250C128 148 238 275 350 178C430 110 500 132 620 58" strokeWidth="3.6" />
          <path d="M58 292C176 194 266 300 374 224C456 167 530 183 626 126" strokeWidth="2" opacity="0.78" />
          <path d="M92 111C212 61 292 151 382 108C470 66 538 92 620 35" strokeWidth="1.55" opacity="0.56" />
          <path d="M8 207C118 170 205 221 300 160C402 94 492 116 610 84" strokeWidth="1" opacity="0.35" />
        </g>

        <g stroke="#ECFDF5" strokeLinecap="round" fill="none" filter="url(#energy-glow)">
          <path
            d="M18 250C128 148 238 275 350 178C430 110 500 132 620 58"
            strokeWidth="2.2"
            strokeDasharray="8 120"
            opacity="0.9"
          >
            <animate attributeName="stroke-dashoffset" from="128" to="0" dur="5.8s" repeatCount="indefinite" />
          </path>
          <path
            d="M58 292C176 194 266 300 374 224C456 167 530 183 626 126"
            strokeWidth="1.25"
            strokeDasharray="5 150"
            opacity="0.65"
          >
            <animate attributeName="stroke-dashoffset" from="155" to="0" dur="7.2s" repeatCount="indefinite" />
          </path>
        </g>

        <g fill="#A7F3D0" filter="url(#energy-glow)">
          <circle cx="350" cy="178" r="5.5" />
          <circle cx="465" cy="131" r="4.5" />
          <circle cx="562" cy="92" r="4" />
        </g>
        <g fill="#A7F3D0" opacity="0.45">
          <circle cx="210" cy="207" r="2.4" />
          <circle cx="399" cy="208" r="2" />
          <circle cx="523" cy="181" r="2" />
        </g>
      </svg>

      <div className="absolute bottom-0 right-0 h-px w-[92%] bg-gradient-to-l from-emerald-300/30 to-transparent" />
    </div>
  );
}

type FooterLinkColumnProps = {
  title: string;
  links: Array<{ label: string; href: string }>;
};

function FooterLinkColumn({ title, links }: FooterLinkColumnProps) {
  return (
    <div>
      <p className="text-sm font-bold uppercase tracking-[0.16em] text-white">{title}</p>
      <ul className="mt-5 space-y-3.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white focus-visible:outline-none focus-visible:text-white"
            >
              <ChevronRight
                className="h-3.5 w-3.5 text-emerald-500 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
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
      className="group relative flex min-h-[112px] w-full items-center gap-5 overflow-hidden rounded-[22px] border border-cyan-300/25 bg-[#071b33]/72 px-6 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,.06),0_18px_55px_rgba(0,0,0,.18)] backdrop-blur-md transition duration-300 before:absolute before:inset-0 before:-translate-x-full before:bg-[linear-gradient(115deg,transparent,rgba(255,255,255,.09),transparent)] before:transition-transform before:duration-700 hover:-translate-y-1.5 hover:border-emerald-300/60 hover:bg-[#0a2440]/88 hover:shadow-[0_20px_55px_rgba(16,185,129,.17),0_0_30px_rgba(34,211,238,.09)] hover:before:translate-x-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
    >
      <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-200/25 bg-white/[0.035] text-emerald-300 shadow-[inset_0_0_22px_rgba(56,189,248,.08),0_0_24px_rgba(34,211,238,.08)] transition duration-300 group-hover:scale-105 group-hover:border-emerald-300/60 group-hover:bg-emerald-300 group-hover:text-[#041326] group-hover:shadow-[0_0_28px_rgba(52,211,153,.42)]">
        {icon}
      </span>
      <span className="relative z-10 min-w-0">
        <span className="block text-[11px] font-semibold uppercase tracking-[0.17em] text-emerald-400">
          {eyebrow}
        </span>
        <span className="mt-2 block text-base font-semibold text-slate-100 transition group-hover:text-white sm:text-lg">
          {label}
        </span>
      </span>
      <ArrowUpRight
        className="relative z-10 ml-auto h-4 w-4 shrink-0 text-slate-600 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300"
        aria-hidden="true"
      />
    </Link>
  );
}
