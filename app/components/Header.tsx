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
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{
    const onScroll=()=>setScrolled(window.scrollY>40);
    window.addEventListener("scroll",onScroll);
    return ()=>window.removeEventListener("scroll",onScroll);
  },[]);
  return (
<header className={`fixed top-0 left-0 right-0 z-50 h-[90px] transition-all duration-300 ${scrolled?"bg-white shadow-lg":"bg-gradient-to-r from-[#08203d] via-[#103766] to-[#08203d]"}`}>
<div className="max-w-7xl mx-auto h-full px-10 flex items-center justify-between">
<Link href="/" className="flex flex-col leading-none select-none">
<span className={`text-[42px] font-extrabold italic ${scrolled?"text-[#08203d]":"text-white"}`}>TP<span className="relative">S<span className="absolute -top-1 right-0 w-6 h-1.5 bg-green-500 rounded-full -rotate-12"/></span></span>
<span className="mt-1 text-[11px] font-semibold tracking-[0.28em] uppercase"><span className={scrolled?"text-[#08203d]":"text-white"}>TETRA </span><span className="text-green-500">POWER </span><span className={scrolled?"text-[#08203d]":"text-white"}>SOLUTIONS</span></span>
</Link>
<nav className="hidden lg:flex items-center gap-12">
{navItems.map(item=>(
<Link key={item.title} href={item.href} className={`relative font-semibold transition ${scrolled?"text-slate-700 hover:text-green-600":"text-white hover:text-green-400"} after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all hover:after:w-full`}>{item.title}</Link>
))}
</nav>
<Link href="#contact" className="hidden lg:inline-flex items-center rounded-full bg-green-600 px-8 py-3 font-semibold text-white hover:bg-green-500 transition">Get a Quote</Link>
</div></header>);
}
