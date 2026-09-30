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
  title: "Simran Dental Care | Dr. Simran Chugh — Dentist in Malleshwaram, Bengaluru",
  description:
    "Simran Dental Care (ಸಿಮ್ರಾನ್ ಡೆಂಟಲ್ ಕೇರ್) — Trusted dental clinic in Malleshwaram, Bengaluru led by Dr. Simran Chugh. Painless root canals, braces & aligners, implants, wisdom tooth extraction, and family dentistry. 4.9★ from 105+ Google reviews. Book an appointment online.",
  keywords: [
    "dentist",
    "dental clinic",
    "Malleshwaram dentist",
    "Bengaluru dentist",
    "dentist in Malleshwaram",
    "root canal",
    "dental implant",
    "braces",
    "Simran Dental Care",
    "Dr Simran Chugh",
  ],
  // Favicon & app icons — file-based (src/app/icon.png, favicon.ico, apple-icon.png) + explicit links for Google Search
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "Simran Dental Care | Dr. Simran Chugh — Dentist in Malleshwaram, Bengaluru",
    description:
      "Trusted dental clinic in Malleshwaram, Bengaluru with 4.9★ from 105+ reviews. Gentle, painless, affordable dental care by Dr. Simran Chugh.",
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
