import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nanak Fabricators Limited — Truck, Bus, Tipper & Trailer Bodies, Kenya",
  description:
    "Nanak Fabricators builds truck, bus, tipper and trailer bodies from scratch near Athi River, Kenya — for logistics, schools and public transit across East Africa.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
