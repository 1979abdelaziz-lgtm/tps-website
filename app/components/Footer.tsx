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
  Sun,
  BatteryCharging,
  CarFront,
  Network,
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
  const hudItems = [
    { label: "Solar", icon: <Sun className="h-3.5 w-3.5" /> },
    { label: "Storage", icon: <BatteryCharging className="h-3.5 w-3.5" /> },
    { label: "EV", icon: <CarFront className="h-3.5 w-3.5" /> },
    { label: "Smart grid", icon: <Network className="h-3.5 w-3.5" /> },
  ];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-[116px] top-0 hidden overflow-hidden lg:block"
    >
      <div className="absolute inset-y-0 right-0 w-[66%] bg-gradient-to-l from-[#061a32]/95 via-[#072846]/52 to-transparent" />
      <div className="absolute bottom-[-8%] right-[-2%] h-[430px] w-[560px] rounded-full bg-cyan-400/[0.08] blur-3xl" />
      <div className="absolute bottom-[-4%] right-[20%] h-[360px] w-[430px] rounded-full bg-emerald-400/[0.07] blur-3xl" />

      <svg
        viewBox="0 0 1100 520"
        className="absolute bottom-[-32px] right-[-48px] h-[100%] w-[78%]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="solar-line" x1="90" y1="490" x2="1030" y2="74" gradientUnits="userSpaceOnUse">
            <stop stopColor="#22D3EE" stopOpacity="0" />
            <stop offset="0.24" stopColor="#38BDF8" stopOpacity="0.72" />
            <stop offset="0.62" stopColor="#22D3EE" stopOpacity="0.94" />
            <stop offset="1" stopColor="#A3E635" stopOpacity="0.9" />
          </linearGradient>
          <linearGradient id="panel-stroke" x1="250" y1="180" x2="910" y2="480" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7DD3FC" stopOpacity="0.17" />
            <stop offset="0.55" stopColor="#38BDF8" stopOpacity="0.28" />
            <stop offset="1" stopColor="#86EFAC" stopOpacity="0.14" />
          </linearGradient>
          <linearGradient id="city-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#38BDF8" stopOpacity="0.16" />
            <stop offset="1" stopColor="#A3E635" stopOpacity="0.11" />
          </linearGradient>
          <filter id="solar-glow" x="-55%" y="-55%" width="210%" height="210%">
            <feGaussianBlur stdDeviation="4.6" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id="solar-soft-glow" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="2.8" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Distant infrastructure skyline, kept intentionally quiet. */}
        <g stroke="url(#city-stroke)" strokeWidth="1.2" opacity="0.62">
          <path d="M720 222V152H762V222M770 222V128H814V222M822 222V166H852V222M861 222V108H905V222M915 222V142H950V222M960 222V174H990V222" />
          <path d="M699 222H1012" opacity="0.55" />
          <path d="M785 128V97M884 108V78M937 142V112" opacity="0.45" />
        </g>

        {/* Solar farm wireframe. */}
        <g stroke="url(#panel-stroke)" strokeWidth="1.15" opacity="0.86">
          <g transform="translate(286 182) skewX(-22)">
            <rect width="156" height="96" rx="2" />
            <path d="M31 0V96M62 0V96M93 0V96M124 0V96M0 32H156M0 64H156" />
            <path d="M78 96V117M50 117H106" opacity="0.72" />
          </g>
          <g transform="translate(465 203) skewX(-22)">
            <rect width="181" height="111" rx="2" />
            <path d="M36 0V111M72 0V111M108 0V111M144 0V111M0 37H181M0 74H181" />
            <path d="M90 111V136M58 136H122" opacity="0.72" />
          </g>
          <g transform="translate(672 232) skewX(-22)">
            <rect width="205" height="126" rx="2" />
            <path d="M41 0V126M82 0V126M123 0V126M164 0V126M0 42H205M0 84H205" />
            <path d="M102 126V154M67 154H137" opacity="0.72" />
          </g>
          <g transform="translate(111 276) skewX(-22)" opacity="0.64">
            <rect width="150" height="92" rx="2" />
            <path d="M30 0V92M60 0V92M90 0V92M120 0V92M0 31H150M0 61H150" />
          </g>
          <g transform="translate(312 320) skewX(-22)" opacity="0.72">
            <rect width="177" height="108" rx="2" />
            <path d="M35 0V108M70 0V108M105 0V108M140 0V108M0 36H177M0 72H177" />
          </g>
          <g transform="translate(545 365) skewX(-22)" opacity="0.76">
            <rect width="214" height="130" rx="2" />
            <path d="M43 0V130M86 0V130M129 0V130M172 0V130M0 43H214M0 86H214" />
          </g>
        </g>

        {/* Ground mesh adds depth without becoming a literal illustration. */}
        <g stroke="#7DD3FC" strokeWidth="0.7" opacity="0.075">
          <path d="M43 488L374 150M132 505L451 171M226 520L534 197M335 520L624 226M457 520L723 255M590 520L823 287M730 520L929 319" />
          <path d="M42 488H846M77 449H879M119 410H916M166 371H952M217 332H990M273 293H1023" />
        </g>

        {/* Animated energy flow across the solar array. */}
        <g stroke="url(#solar-line)" strokeLinecap="round" filter="url(#solar-glow)">
          <path d="M18 443C170 370 287 448 441 350C588 256 703 287 1065 76" strokeWidth="3.2" opacity="0.92" />
          <path d="M6 482C184 414 326 486 496 391C648 306 778 318 1080 152" strokeWidth="2.15" opacity="0.72" />
          <path d="M128 352C267 275 370 348 518 264C670 178 806 206 1067 58" strokeWidth="1.35" opacity="0.5" />
        </g>
        <g stroke="#ECFDF5" strokeLinecap="round" fill="none" filter="url(#solar-glow)">
          <path d="M18 443C170 370 287 448 441 350C588 256 703 287 1065 76" strokeWidth="1.9" strokeDasharray="10 145" opacity="0.86">
            <animate attributeName="stroke-dashoffset" values="155;0" dur="6.8s" repeatCount="indefinite" />
          </path>
          <path d="M6 482C184 414 326 486 496 391C648 306 778 318 1080 152" strokeWidth="1.15" strokeDasharray="7 178" opacity="0.56">
            <animate attributeName="stroke-dashoffset" values="185;0" dur="9.2s" repeatCount="indefinite" />
          </path>
        </g>

        <g fill="#CFFAFE" filter="url(#solar-soft-glow)">
          <circle cx="441" cy="350" r="4"><animate attributeName="opacity" values="0.35;1;0.35" dur="3.1s" repeatCount="indefinite" /></circle>
          <circle cx="625" cy="272" r="3.4"><animate attributeName="opacity" values="0.3;0.9;0.3" dur="3.8s" repeatCount="indefinite" /></circle>
          <circle cx="846" cy="205" r="3"><animate attributeName="opacity" values="0.25;0.84;0.25" dur="4.5s" repeatCount="indefinite" /></circle>
        </g>
        <g fill="#BEF264" filter="url(#solar-soft-glow)" opacity="0.82">
          <circle cx="540" cy="310" r="2.8" />
          <circle cx="760" cy="246" r="2.5" />
          <circle cx="962" cy="140" r="2.9" />
        </g>
      </svg>

      <div className="absolute right-[4.5%] top-[20%] grid grid-cols-2 gap-2 opacity-70">
        {hudItems.map((item, index) => (
          <div
            key={item.label}
            className={`flex items-center gap-2 rounded-lg border border-cyan-200/15 bg-[#071b33]/58 px-2.5 py-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-cyan-100/70 backdrop-blur-sm ${index === 3 ? "translate-x-4" : ""}`}
          >
            <span className="text-emerald-300/75">{item.icon}</span>
            {item.label}
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 right-0 h-px w-[82%] bg-gradient-to-l from-emerald-300/55 via-cyan-300/35 to-transparent" />
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
        className="absolute bottom-[-14px] right-[-18px] h-[112%] w-[112%]"
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
          strokeWidth="1.15"
          strokeLinejoin="round"
          opacity="0.52"
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
        <g stroke="#ECFDF5" strokeLinecap="round" fill="none" filter="url(#flow-glow)">
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

        <g fill="#CFFAFE" filter="url(#soft-point-glow)">
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
