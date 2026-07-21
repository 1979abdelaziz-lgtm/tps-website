import "./globals.css";
import type { Metadata } from "next";

import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "TPS | Tetra Power Solutions",
  description:
    "Integrated Energy Engineering Solutions | Power Generation | Solar Energy | CHP | BESS | Electrical Engineering",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <Header />

        <main className="pt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}