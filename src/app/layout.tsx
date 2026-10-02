import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vishnu Dental Care | Dr. Sriram Prabhu — Dentist in Malleshwaram, Bengaluru",
  description:
    "Vishnu Dental Care — Trusted family dental clinic in Malleshwaram, Bengaluru led by Dr. Sriram Prabhu (B.D.S., F.A.G.E), Dental Surgeon with 25 years of experience. Painless root canals, wisdom tooth removal, dental implants, cavity fillings & family dentistry. 4.9★ from 113 Google reviews. Book an appointment online.",
  keywords: [
    "dentist",
    "dental clinic",
    "Malleshwaram dentist",
    "Bengaluru dentist",
    "dentist in Malleshwaram",
    "root canal",
    "dental implant",
    "wisdom tooth removal",
    "cavity filling",
    "Vishnu Dental Care",
    "Dr Sriram Prabhu",
  ],
  // Favicon & app icons — served from public/ with a version query to bust
  // stale browser favicon caches after the Simran → Vishnu rebrand.
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "48x48" },
      { url: "/favicon.png?v=2", type: "image/png", sizes: "512x512" },
      { url: "/icon.png?v=2", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Vishnu Dental Care | Dr. Sriram Prabhu — Dentist in Malleshwaram, Bengaluru",
    description:
      "Trusted family dental clinic in Malleshwaram, Bengaluru with 4.9★ from 113 reviews. Gentle, painless, sanitized dental care by Dr. Sriram Prabhu (B.D.S., F.A.G.E).",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="bg-white font-sans text-slate-800 antialiased">{children}</body>
    </html>
  );
}
