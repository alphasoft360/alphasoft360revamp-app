import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalBackground from "@/components/GlobalBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.alphasoft360.com"),
  title: {
    default: "AI-Driven Software Solutions | AlphaSoft360",
    template: "%s — AlphaSoft360",
  },
  description:
    "AlphaSoft360 builds enterprise web applications, custom software, mobile apps, React/Next.js platforms, cloud DevOps, and AI solutions for businesses worldwide.",
  icons: {
    icon: [
      { url: "/brand/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/brand/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Custom Web Development & Software Engineering Company | AlphaSoft360",
    description:
      "AlphaSoft360 builds enterprise web applications, custom software, mobile apps, React/Next.js platforms, cloud DevOps, and AI solutions for businesses worldwide.",
    url: "https://www.alphasoft360.com",
    siteName: "AlphaSoft360",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.alphasoft360.com/brand/hero-2.jpeg",
        width: 1200,
        height: 630,
        alt: "AlphaSoft360 Web Development & Software Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Development & Software Engineering Company | AlphaSoft360",
    description:
      "AlphaSoft360 builds enterprise web applications, custom software, mobile apps, React/Next.js platforms, cloud DevOps, and AI solutions for businesses worldwide.",
    images: ["https://www.alphasoft360.com/brand/hero-2.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <GlobalBackground />
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
