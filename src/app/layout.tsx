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
  title: "Smile Care Clinic | Dental Clinic in Kurla, Mumbai",
  description:
    "Smile Care Clinic (स्माइल केयर) — Trusted dental clinic in Kurla West, Mumbai. Root canal, dental implants, wisdom tooth extraction, and family dentistry. Book an appointment online.",
  keywords: [
    "dentist",
    "dental clinic",
    "Kurla dentist",
    "Mumbai dentist",
    "root canal",
    "dental implant",
    "Smile Care",
    "Dr Saurabh Inamadar",
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
    title: "Smile Care Clinic | Dental Clinic in Kurla, Mumbai",
    description:
      "Trusted dental clinic in Kurla West with 5.0★ from 163+ reviews. Painless, affordable dental care by Dr. Saurabh Inamadar.",
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
