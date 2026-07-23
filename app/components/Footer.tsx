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

            <div className="group relative mt-6 overflow-hidden rounded-2xl border border-cyan-200/20 bg-[#071b33]/42 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,.04)] backdrop-blur-[6px] transition duration-500 hover:border-emerald-300/30 hover:bg-[#08213c]/50">
              <div aria-hidden="true" className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-emerald-300/90 to-transparent shadow-[0_0_18px_rgba(163,230,53,.65)]" />
              <div aria-hidden="true" className="absolute -left-20 top-0 h-full w-20 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent transition-transform duration-1000 group-hover:translate-x-[390px] motion-reduce:hidden" />
              <div className="relative flex items-start gap-3">
                <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400 drop-shadow-[0_0_10px_rgba(163,230,53,.45)]" aria-hidden="true" />
                <p className="text-sm leading-6 text-slate-300">
                  Our success is measured by the trust we earn and the lasting value we
                  create for every client.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3" aria-label="TPS social channels">
              <SocialLink href="#" label="LinkedIn" icon={<LinkedInIcon className="h-5 w-5" />} />
              <SocialLink href="#" label="Facebook" icon={<FacebookIcon className="h-5 w-5" />} />
              <SocialLink href="#" label="YouTube" icon={<YouTubeIcon className="h-5 w-5" />} />
              <SocialLink href="mailto:info@tetrapowersolutions.com" label="Email TPS" icon={<Mail className="h-5 w-5" aria-hidden="true" />} />
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

        <div className="grid gap-4 border-t border-white/[0.07] pb-8 pt-9 text-xs text-slate-500 sm:grid-cols-[1fr_auto] sm:items-center">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p>© {currentYear} Tetra Power Solutions. All rights reserved.</p>
            <span className="hidden h-1 w-1 rounded-full bg-slate-600 sm:block" />
            <p className="text-slate-500">Engineering with integrity. Delivering with care.</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="#" className="transition duration-300 hover:text-slate-200 focus-visible:outline-none focus-visible:text-white">
              Privacy
            </Link>
            <Link href="#" className="transition duration-300 hover:text-slate-200 focus-visible:outline-none focus-visible:text-white">
              Terms
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-1.5 font-semibold text-emerald-400/75 transition duration-300 hover:text-emerald-300 focus-visible:outline-none focus-visible:text-emerald-300"
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
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-[116px] top-0 z-0 hidden overflow-hidden lg:block"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_54%,rgba(34,211,238,.13),transparent_31%),radial-gradient(circle_at_63%_58%,rgba(52,211,153,.08),transparent_25%)]" />

      <svg
        viewBox="0 0 1440 620"
        preserveAspectRatio="xMaxYMid slice"
        className="absolute inset-0 h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lower-tower-stroke" x1="760" y1="90" x2="1320" y2="590" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7DD3FC" stopOpacity="0.12" />
            <stop offset="0.5" stopColor="#67E8F9" stopOpacity="0.48" />
            <stop offset="1" stopColor="#86EFAC" stopOpacity="0.16" />
          </linearGradient>
          <linearGradient id="lower-energy-flow" x1="560" y1="500" x2="1440" y2="170" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" stopOpacity="0" />
            <stop offset="0.36" stopColor="#38BDF8" stopOpacity="0.38" />
            <stop offset="0.74" stopColor="#22D3EE" stopOpacity="0.82" />
            <stop offset="1" stopColor="#BEF264" stopOpacity="0.32" />
          </linearGradient>
          <filter id="lower-flow-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g stroke="url(#lower-tower-stroke)" strokeLinejoin="round" strokeWidth="1.45">
          <g opacity="0.38">
            <path d="M690 570L758 315L826 570M714 493H802M705 530H811M728 430H788M742 360H774" />
            <path d="M714 493L811 530M802 493L705 530M728 430L802 493M788 430L714 493M690 570H826" />
            <path d="M716 376L758 315L800 376M704 392H812" />
          </g>
          <g opacity="0.72">
            <path d="M940 590L1042 176L1144 590M976 465H1108M962 530H1122M994 365H1090M1018 249H1066" />
            <path d="M976 465L1122 530M1108 465L962 530M994 365L1108 465M1090 365L976 465M940 590H1144" />
            <path d="M982 273L1042 176L1102 273M964 296H1120" />
          </g>
          <g opacity="0.28">
            <path d="M1215 575L1280 325L1345 575M1238 500H1322M1229 537H1331M1250 438H1310M1265 370H1295" />
            <path d="M1238 500L1331 537M1322 500L1229 537M1250 438L1322 500M1310 438L1238 500M1215 575H1345" />
            <path d="M1240 383L1280 325L1320 383M1228 399H1332" />
          </g>
        </g>

        <g stroke="#7DD3FC" strokeWidth="0.8" opacity="0.14">
          <path d="M758 315C850 265 944 220 1042 176C1134 135 1212 175 1280 325" />
          <path d="M758 376C866 340 950 312 1042 273C1135 234 1212 291 1280 383" />
          <path d="M758 430C858 410 950 391 1042 365C1139 338 1210 382 1280 438" />
          <path d="M758 493C868 485 954 478 1042 465C1135 452 1215 476 1280 500" />
        </g>

        <g stroke="url(#lower-energy-flow)" strokeLinecap="round" filter="url(#lower-flow-glow)">
          <path d="M520 500C710 350 826 480 1000 315C1134 188 1262 284 1450 132" strokeWidth="3" opacity="0.8" />
          <path d="M585 562C770 440 890 548 1050 405C1170 298 1300 368 1450 260" strokeWidth="1.8" opacity="0.56" />
          <path d="M650 275C800 188 920 270 1080 150C1200 60 1320 126 1450 58" strokeWidth="1.15" opacity="0.34" />
        </g>

        <g className="motion-reduce:hidden" stroke="#ECFDF5" strokeLinecap="round" fill="none" filter="url(#lower-flow-glow)">
          <path d="M520 500C710 350 826 480 1000 315C1134 188 1262 284 1450 132" strokeWidth="1.8" strokeDasharray="12 170" opacity="0.82">
            <animate attributeName="stroke-dashoffset" values="182;0" dur="7s" repeatCount="indefinite" />
          </path>
          <path d="M585 562C770 440 890 548 1050 405C1170 298 1300 368 1450 260" strokeWidth="1.1" strokeDasharray="8 190" opacity="0.56">
            <animate attributeName="stroke-dashoffset" values="198;0" dur="9s" repeatCount="indefinite" />
          </path>
        </g>

        <g fill="#CFFAFE" filter="url(#lower-flow-glow)">
          <circle cx="1000" cy="315" r="4" opacity="0.85" />
          <circle cx="1190" cy="247" r="3.4" opacity="0.7" />
          <circle cx="1360" cy="201" r="3" opacity="0.68" />
        </g>
      </svg>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,#041326_0%,rgba(4,19,38,.98)_25%,rgba(4,19,38,.76)_50%,rgba(4,19,38,.16)_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#041326]/82 via-transparent to-[#041326]/92" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#041326] to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#041326] to-transparent" />
    </div>
  );
}

function EnergyNetworkVisual() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 right-0 hidden w-[62%] overflow-hidden lg:block"
    >
      <div className="absolute inset-0 bg-gradient-to-l from-[#082c4c]/72 via-[#0a355d]/28 to-transparent" />
      <div className="absolute right-[3%] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-400/[0.07] blur-3xl" />
      <div className="absolute right-[16%] top-[44%] h-64 w-64 -translate-y-1/2 rounded-full bg-emerald-400/[0.055] blur-3xl" />

      <svg
        viewBox="0 0 700 360"
        className="absolute bottom-[-14px] right-[-18px] h-[112%] w-[112%] opacity-90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="energy-flow" x1="20" y1="300" x2="680" y2="55" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" stopOpacity="0" />
            <stop offset="0.25" stopColor="#38BDF8" stopOpacity="0.62" />
            <stop offset="0.62" stopColor="#22D3EE" stopOpacity="0.9" />
            <stop offset="0.83" stopColor="#86EFAC" stopOpacity="0.92" />
            <stop offset="1" stopColor="#D9F99D" stopOpacity="0.42" />
          </linearGradient>
          <linearGradient id="tower-background" x1="0" y1="0" x2="0" y2="1">
            <stop stopColor="#7DD3FC" stopOpacity="0.22" />
            <stop offset="0.55" stopColor="#38BDF8" stopOpacity="0.14" />
            <stop offset="1" stopColor="#86EFAC" stopOpacity="0.1" />
          </linearGradient>
          <filter id="flow-glow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="4.8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="soft-point-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="3.2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background towers: intentionally subdued so they read as atmosphere, not foreground objects. */}
        <g
          stroke="url(#tower-background)"
          strokeWidth="1"
          strokeLinejoin="round"
          opacity="0.42"
        >
          <g>
            <path d="M386 319L424 205L462 319M398 282H450M404 255H444M412 229H436" />
            <path d="M398 282L444 255M450 282L404 255M412 229L444 255M436 229L404 255M386 319H462" />
            <path d="M402 232L424 205L446 232M395 240H453" />
          </g>
          <g>
            <path d="M474 319L523 157L572 319M491 270H555M484 294H562M501 229H545M511 188H535" />
            <path d="M491 270L555 294M555 270L491 294M501 229L545 270M545 229L501 270M474 319H572" />
            <path d="M494 195L523 157L552 195M486 205H560" />
          </g>
          <g>
            <path d="M570 319L635 76L700 319M593 246H677M584 284H686M606 187H664M620 125H650" />
            <path d="M593 246L677 284M677 246L593 284M606 187L664 246M664 187L606 246M570 319H700" />
            <path d="M596 139L635 76L674 139M584 153H686" />
          </g>
        </g>

        {/* Low-contrast infrastructure wires behind the animated energy. */}
        <g stroke="#7DD3FC" strokeWidth="0.75" opacity="0.09">
          <path d="M420 205C486 168 565 126 635 76" />
          <path d="M424 232C497 204 568 179 635 153" />
          <path d="M424 255C503 237 568 221 635 205" />
          <path d="M424 282C511 275 575 268 635 261" />
        </g>

        {/* Main animated energy paths. */}
        <g stroke="url(#energy-flow)" strokeLinecap="round" filter="url(#flow-glow)">
          <path d="M12 292C132 194 232 304 356 214C448 147 530 168 696 66" strokeWidth="3.3" opacity="0.92" />
          <path d="M28 330C165 236 266 337 395 260C492 202 574 214 704 142" strokeWidth="2.15" opacity="0.76" />
          <path d="M112 132C236 72 326 166 425 116C524 66 596 92 696 32" strokeWidth="1.4" opacity="0.52" />
          <path d="M5 236C126 194 224 248 330 184C438 119 540 137 690 91" strokeWidth="0.95" opacity="0.3" />
        </g>

        {/* Moving highlights preserve the requested animation while remaining elegant. */}
        <g className="motion-reduce:hidden" stroke="#ECFDF5" strokeLinecap="round" fill="none" filter="url(#flow-glow)">
          <path
            d="M12 292C132 194 232 304 356 214C448 147 530 168 696 66"
            strokeWidth="2"
            strokeDasharray="10 145"
            opacity="0.9"
          >
            <animate attributeName="stroke-dashoffset" values="155;0" dur="6.4s" repeatCount="indefinite" />
          </path>
          <path
            d="M28 330C165 236 266 337 395 260C492 202 574 214 704 142"
            strokeWidth="1.25"
            strokeDasharray="7 170"
            opacity="0.62"
          >
            <animate attributeName="stroke-dashoffset" values="177;0" dur="8.2s" repeatCount="indefinite" />
          </path>
        </g>

        <g className="motion-reduce:hidden" fill="#CFFAFE" filter="url(#soft-point-glow)">
          <circle cx="356" cy="214" r="4.2"><animate attributeName="opacity" values="0.45;1;0.45" dur="3.2s" repeatCount="indefinite" /></circle>
          <circle cx="492" cy="156" r="3.6"><animate attributeName="opacity" values="0.35;0.9;0.35" dur="3.8s" repeatCount="indefinite" /></circle>
          <circle cx="610" cy="111" r="3.2"><animate attributeName="opacity" values="0.35;0.85;0.35" dur="4.4s" repeatCount="indefinite" /></circle>
        </g>
        <g fill="#BEF264" filter="url(#soft-point-glow)" opacity="0.8">
          <circle cx="441" cy="184" r="3.1" />
          <circle cx="569" cy="147" r="2.7" />
        </g>
      </svg>

      <div className="absolute bottom-0 right-0 h-px w-[94%] bg-gradient-to-l from-emerald-300/20 via-cyan-300/12 to-transparent" />
    </div>
  );
}

type SocialLinkProps = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

function SocialLink({ href, label, icon }: SocialLinkProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-emerald-300/35 bg-[#071b33]/58 text-emerald-300 shadow-[inset_0_0_18px_rgba(34,211,238,.05)] transition duration-500 hover:-translate-y-1 hover:scale-105 hover:border-emerald-300/80 hover:bg-emerald-300 hover:text-[#041326] hover:shadow-[0_0_18px_rgba(163,230,53,.35),0_0_36px_rgba(34,211,238,.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 motion-reduce:transform-none"
    >
      <span aria-hidden="true" className="absolute inset-1 rounded-full border border-white/0 transition duration-500 group-hover:border-white/25" />
      <span className="relative transition-transform duration-500 group-hover:rotate-[-4deg] motion-reduce:transform-none">{icon}</span>
    </Link>
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
      className="group relative flex min-h-[112px] w-full items-center gap-5 overflow-hidden rounded-[22px] border border-cyan-300/25 bg-[#071b33]/72 px-6 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,.06),0_18px_55px_rgba(0,0,0,.18)] backdrop-blur-md transition duration-500 before:absolute before:-inset-y-8 before:-left-1/3 before:w-1/3 before:skew-x-[-20deg] before:bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.16),transparent)] before:opacity-0 before:transition-all before:duration-1000 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-emerald-300 after:via-cyan-300 after:to-transparent after:transition-transform after:duration-700 hover:-translate-y-1.5 hover:border-emerald-300/60 hover:bg-[#0a2440]/88 hover:shadow-[0_20px_55px_rgba(16,185,129,.17),0_0_34px_rgba(34,211,238,.10)] hover:before:translate-x-[430%] hover:before:opacity-100 hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 motion-reduce:transform-none motion-reduce:transition-none"
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
