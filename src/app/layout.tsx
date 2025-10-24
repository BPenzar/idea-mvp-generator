import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Idea & MVP Generator - Od ideje do Claude Code implementacije za 1-2h",
  description: "Besplatni AI generatori za validaciju i strukturiranje projekata. Uštedi €5.000+ i 20-50 sati razvoja kroz sistematičan proces od Discovery-ja do Claude Code-ready Tech PRD-a.",
  keywords: [
    "MVP generator",
    "product requirements document",
    "PRD generator",
    "startup ideje",
    "Claude Code",
    "tech PRD",
    "business plan generator",
    "RICE framework",
    "product discovery",
    "startup validation"
  ],
  authors: [{ name: "BSP Lab", url: "https://github.com/BPenzar" }],
  creator: "BSP Lab",
  publisher: "BSP Lab",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: "https://idea-mvp-generator.vercel.app",
    title: "Idea & MVP Generator - Od ideje do Claude Code implementacije",
    description: "Besplatni AI generatori za validaciju i strukturiranje projekata. Uštedi €5.000+ i 20-50 sati razvoja kroz sistematičan proces.",
    siteName: "Idea & MVP Generator",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Idea & MVP Generator - AI generatori za PRD development"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Idea & MVP Generator - Od ideje do implementacije za 1-2h",
    description: "Besplatni AI generatori za validaciju i strukturiranje projekata. Uštedi €5.000+ i 20-50 sati razvoja.",
    creator: "@Brunopenzar",
    images: ["/og-image.jpg"]
  },
  verification: {
    google: "your-google-verification-code"
  },
  alternates: {
    canonical: "https://idea-mvp-generator.vercel.app"
  }
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
        {children}
      </body>
    </html>
  );
}
