import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import Story from "@/components/about/Story";
import AboutStats from "@/components/about/AboutStats";
import Values from "@/components/about/Values";
import Team from "@/components/about/Team";
import { getWebPageSchema, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Us — AlphaSoft360",
  description:
    "AlphaSoft360 is a technology partner delivering high-performance web applications, IoT solutions, and API integrations for clients worldwide. Meet the team behind the work.",
  alternates: {
    canonical: "https://alphasoft360.com/about",
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
    url: "https://alphasoft360.com/about",
    siteName: "AlphaSoft360",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://alphasoft360.com/brand/hero-2.jpeg",
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
    images: ["https://alphasoft360.com/brand/hero-2.jpeg"],
  },
};

export default function AboutPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://alphasoft360.com" },
    { name: "About", url: "https://alphasoft360.com/about" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      getWebPageSchema({
        type: "AboutPage",
        name: "About Us — AlphaSoft360",
        description:
          "AlphaSoft360 is a technology partner delivering high-performance web applications, IoT solutions, and API integrations for clients worldwide.",
        url: "https://alphasoft360.com/about",
        breadcrumbItems
      }),
      getBreadcrumbSchema(breadcrumbItems, "https://alphasoft360.com/about")
    ]
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
