"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Solutions", href: "#solutions" },
  { title: "Industries", href: "#industries" },
  { title: "Projects", href: "#projects" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#071b33]/95 text-white backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "shadow-[0_12px_32px_rgba(0,0,0,0.24)]" : ""
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-5 sm:px-7 lg:px-10 xl:px-12">
        <Link
          href="/"
          aria-label="TPS - Tetra Power Solutions home"
          className="relative z-50 ml-2 flex shrink-0 items-center gap-4 sm:ml-3"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/tps-logo-mark.png"
            alt="TPS"
            className="h-[44px] w-auto shrink-0 object-contain sm:h-[48px] lg:h-[51px]"
          />

          <span
            aria-hidden="true"
            className="hidden h-9 w-px shrink-0 bg-white/30 sm:block"
          />

          <span className="hidden min-w-0 flex-col justify-center leading-none sm:flex">
            <span className="whitespace-nowrap text-[13px] font-extrabold tracking-[0.025em] text-white lg:text-[14px] xl:text-[15px]">
              TETRA <span className="text-[#79c843]">POWER</span> SOLUTIONS
            </span>
            <span className="mt-1 whitespace-nowrap text-[9px] font-semibold tracking-[0.04em] text-[#79c843] lg:text-[10px] xl:text-[11px]">
              INTEGRATED ENERGY SOLUTIONS
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-3 lg:flex xl:gap-5"
        >
          {navItems.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className={`group relative whitespace-nowrap py-2 text-[15px] font-semibold tracking-[0.01em] transition-colors duration-200 hover:text-[#79c843] ${
                index === 0 ? "text-white" : "text-white/80"
              }`}
            >
              {item.title}
              <span
                className={`absolute inset-x-0 -bottom-1 mx-auto h-0.5 rounded-full bg-[#79c843] transition-all duration-300 ${
                  index === 0 ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="relative z-50 flex items-center gap-2.5 sm:gap-3">
          <Link
            href="#contact"
            className="hidden items-center justify-center rounded-full border-2 border-[#69bd45] bg-transparent px-5 py-2.5 text-sm font-bold text-[#69bd45] shadow-[0_8px_24px_rgba(105,189,69,0.22)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#69bd45] hover:text-[#071b33] hover:shadow-[0_12px_28px_rgba(105,189,69,0.3)] sm:inline-flex xl:px-6"
          >
            Request a Quote
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.07] transition-colors hover:bg-white/[0.12] lg:hidden"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="relative block h-5 w-5">
              <span
                className={`absolute left-0 top-1 block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                  menuOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2.5 block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-4 block h-0.5 w-5 rounded-full bg-white transition-all duration-300 ${
                  menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 top-[78px] bg-[#071b33] transition-all duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex h-full max-w-md flex-col px-6 pb-10 pt-8"
        >
          <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
            {navItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between py-4 text-lg font-semibold text-white/90 transition-colors hover:text-[#79c843]"
              >
                {item.title}
                <span aria-hidden="true" className="text-[#79c843]">
                  →
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-7">
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex w-full items-center justify-center rounded-full border-2 border-[#69bd45] px-5 py-3 text-sm font-bold text-[#69bd45] transition-colors hover:bg-[#69bd45] hover:text-[#071b33]"
            >
              Request a Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
