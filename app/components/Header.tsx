"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNavItems } from "@/app/data/navigation";

export default function Header() {
  const pathname = usePathname();
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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-[#03101f]/98 text-white backdrop-blur-xl transition-all duration-300 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[#03101f] ${
        scrolled ? "shadow-[0_12px_32px_rgba(0,0,0,0.24)]" : ""
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center px-5 sm:px-7 lg:px-10 xl:px-12">
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
            <span className="whitespace-nowrap text-[14px] font-extrabold tracking-[0.025em] text-white lg:text-[15px] xl:text-[17px]">
              TETRA <span className="text-[#A3E635]">POWER</span> SOLUTIONS
            </span>
            <span className="mt-2 whitespace-nowrap text-[10px] font-semibold tracking-[0.04em] text-[#A3E635] lg:text-[11px] xl:text-[12px]">
              INTEGRATED ENERGY SOLUTIONS
            </span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center lg:ml-12 lg:flex lg:flex-1 lg:justify-center lg:gap-6 xl:ml-16 xl:gap-8"
        >
          {mainNavItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.title}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative whitespace-nowrap py-2 text-[16px] font-semibold tracking-[0.01em] transition-colors duration-200 hover:text-[#A3E635] ${
                  isActive ? "text-[#A3E635]" : "text-white"
                }`}
              >
                {item.title}
                <span
                  className={`absolute inset-x-0 -bottom-1 mx-auto h-0.5 rounded-full bg-[#A3E635] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="relative z-50 ml-auto flex items-center lg:ml-0">
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
        className={`fixed inset-0 top-[72px] bg-[#03101f] transition-all duration-300 lg:hidden ${
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
            {mainNavItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center justify-between py-4 text-lg font-semibold transition-colors hover:text-[#A3E635] ${
                    isActive ? "text-[#A3E635]" : "text-white"
                  }`}
                >
                  {item.title}
                  <span aria-hidden="true" className="text-[#A3E635]">
                    →
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </header>
  );
}
