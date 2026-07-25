import "./globals.css";

import type { Metadata } from "next";

import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "TPS | Tetra Power Solutions",
  description:
    "Integrated Energy Solutions | Power Generation | Solar Energy | CHP | BESS | Electrical Engineering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#03101f] text-slate-900 antialiased">
        <Header />
        <main className="bg-[#03101f] pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
