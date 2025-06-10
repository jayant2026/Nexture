import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarDemo } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nexture",
  description: "Sales Outsourcing, Upskilling Courses, and Job Placement in One Platform.",
  openGraph: {
    title: "Nexture",
    description: "Sales Outsourcing, Upskilling Courses, and Job Placement in One Platform.",
    url: "https://www.nexture.live",
    siteName: "Nexture",
    images: [
      {
        url: "https://www.nexture.live/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nexture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexture",
    description: "Sales Outsourcing, Upskilling Courses, and Job Placement in One Platform.",
    images: ["https://www.nexture.live/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavbarDemo />
        {children}
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}
