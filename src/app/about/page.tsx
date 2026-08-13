import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import Story from "@/components/about/Story";
import AboutStats from "@/components/about/AboutStats";
import Values from "@/components/about/Values";
import Team from "@/components/about/Team";

export const metadata: Metadata = {
  title: "About Us — AlphaSoft360",
  description:
    "AlphaSoft360 is a technology partner delivering high-performance web applications, IoT solutions, and API integrations for clients worldwide. Meet the team behind the work.",
  alternates: {
    canonical: "https://alphasoft360.org/about",
  },
  keywords: [
    "AlphaSoft360",
    "About AlphaSoft360",
    "Software Engineering Team",
    "IT Consulting",
    "Sahiwal Pakistan IT Company",
    "Web Application Development",
    "IoT Solutions",
    "API Integrations"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "About Us — AlphaSoft360",
    description:
      "AlphaSoft360 is a technology partner delivering high-performance web applications, IoT solutions, and API integrations for clients worldwide. Meet the team behind the work.",
    url: "https://alphasoft360.org/about",
    siteName: "AlphaSoft360",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://alphasoft360.org/brand/hero-2.jpeg",
        width: 1200,
        height: 630,
        alt: "AlphaSoft360 team at work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — AlphaSoft360",
    description:
      "AlphaSoft360 is a technology partner delivering high-performance web applications, IoT solutions, and API integrations for clients worldwide.",
    images: ["https://alphasoft360.org/brand/hero-2.jpeg"],
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Us — AlphaSoft360",
    "description":
      "AlphaSoft360 is a technology partner delivering high-performance web applications, IoT solutions, and API integrations for clients worldwide.",
    "url": "https://alphasoft360.org/about",
    "publisher": {
      "@type": "Organization",
      "name": "AlphaSoft360",
      "url": "https://alphasoft360.org",
      "logo": "https://alphasoft360.org/brand/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+923704857471",
        "contactType": "customer service",
        "email": "alphasoft360@gmail.com",
        "areaServed": "Worldwide",
      },
      "location": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Main Pakavenue Road",
          "addressLocality": "Sahiwal",
          "postalCode": "57000",
          "addressCountry": "PK",
        },
      },
      "sameAs": [
        "https://www.linkedin.com/company/alphasoft360",
        "https://github.com/alphasoft360",
        "https://twitter.com/alphasoft360",
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <AboutHero />
        <Story />
        <AboutStats />
        <Values />
        <Team />
      </main>
      <Footer />
    </>
  );
}
