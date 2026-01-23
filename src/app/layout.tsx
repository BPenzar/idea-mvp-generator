import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import { defaultLanguage, translations } from "@/i18n/translations";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const meta = translations[defaultLanguage].meta;

export const metadata: Metadata = {
  metadataBase: new URL("https://mvp.bsp-lab.dev"),
  title: meta.title,
  description: meta.description,
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
    url: "https://mvp.bsp-lab.dev",
    title: meta.title,
    description: meta.description,
    siteName: "Idea & MVP Generator",
    images: [
      {
        url: "/logo.png",
        alt: "Idea & MVP Generator - AI generatori za PRD development"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    creator: "@Brunopenzar",
    images: ["/logo.png"]
  },
  verification: {
    google: "your-google-verification-code"
  },
  alternates: {
    canonical: "https://mvp.bsp-lab.dev"
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/logo.png",
    apple: "/logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
