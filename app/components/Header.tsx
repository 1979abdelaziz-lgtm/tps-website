"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { title: "Home", href: "/" },
  { title: "Solutions", href: "#solutions" },
  { title: "Industries", href: "#industries" },
  { title: "Knowledge Center", href: "#knowledge" },
  { title: "About", href: "#about" },
  { title: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[100px] bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          aria-label="TPS - Tetra Power Solutions home"
          className="flex shrink-0 items-center"
        >
          <img
            src="/tps-logo.png"
            alt="TPS - Tetra Power Solutions"
            className="h-[72px] w-auto object-contain"
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 xl:gap-10 lg:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="relative whitespace-nowrap font-semibold text-slate-700 transition-colors hover:text-green-600 after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all hover:after:w-full"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="hidden items-center rounded-full bg-green-600 px-7 py-3 font-semibold text-white transition-colors hover:bg-green-500 lg:inline-flex"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
}
