import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesProcess from "@/components/services/ServicesProcess";

import { servicesFull } from "@/data/content";

export const metadata: Metadata = {
  title: "Services — AlphaSoft360",
  description:
    "App development, web development, e-commerce, cloud & DevOps, AI automation, and more — twelve specialized IT service lines from AlphaSoft360.",
  alternates: {
    canonical: "https://alphasoft360.org/services",
  },
  keywords: [
    "AlphaSoft360 Services",
    "Web Application Development Sahiwal",
    "Mobile App Development Pakistan",
    "E-Commerce Web Developers",
    "Cloud Migration Services",
    "AI Automation Integrators",
    "IT Consultant Pakistan"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Services — AlphaSoft360",
    description:
      "App development, web development, e-commerce, cloud & DevOps, AI automation, and more — twelve specialized IT service lines from AlphaSoft360.",
    url: "https://alphasoft360.org/services",
    siteName: "AlphaSoft360",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://alphasoft360.org/brand/hero-2.jpeg",
        width: 1200,
        height: 630,
        alt: "AlphaSoft360 IT Services Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services — AlphaSoft360",
    description:
      "App development, web development, e-commerce, cloud & DevOps, AI automation, and more — twelve specialized IT service lines from AlphaSoft360.",
    images: ["https://alphasoft360.org/brand/hero-2.jpeg"],
  },
};

export default function ServicesPage() {
  const jsonLd = servicesFull.map((srv) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": srv.title,
    "description": srv.description,
    "provider": {
      "@type": "Organization",
      "name": "AlphaSoft360",
      "url": "https://alphasoft360.org",
      "logo": "https://alphasoft360.org/brand/logo.png"
    },
    "areaServed": "Worldwide"
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <ServicesHero />
        <ServicesGrid />
        <ServicesProcess />
      </main>
      <Footer />
    </>
  );
}
