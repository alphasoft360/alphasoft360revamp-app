import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesProcess from "@/components/services/ServicesProcess";

import { servicesFull } from "@/data/content";
import { getWebPageSchema, getBreadcrumbSchema, ORGANIZATION_ID } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Software Development & IT Services Catalog | AlphaSoft360",
  description:
    "Explore AlphaSoft360's full-stack web development, custom software engineering, React/Next.js platforms, mobile apps, AI automation, and cloud DevOps services.",
  alternates: {
    canonical: "https://www.alphasoft360.com/services",
  },
  keywords: [
    "AlphaSoft360 Services",
    "Web Application Development",
    "Custom Software Engineering",
    "Mobile App Development",
    "Cloud Migration Services",
    "AI Automation Services"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Software Development & IT Services Catalog | AlphaSoft360",
    description:
      "Explore AlphaSoft360's full-stack web development, custom software engineering, React/Next.js platforms, mobile apps, AI automation, and cloud DevOps services.",
    url: "https://www.alphasoft360.com/services",
    siteName: "AlphaSoft360",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.alphasoft360.com/brand/hero-2.jpeg",
        width: 1200,
        height: 630,
        alt: "AlphaSoft360 IT Services Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development & IT Services Catalog | AlphaSoft360",
    description:
      "Explore AlphaSoft360's full-stack web development, custom software engineering, React/Next.js platforms, mobile apps, AI automation, and cloud DevOps services.",
    images: ["https://www.alphasoft360.com/brand/hero-2.jpeg"],
  },
};

export default function ServicesPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://www.alphasoft360.com" },
    { name: "Services", url: "https://www.alphasoft360.com/services" },
  ];

  const serviceGraph = servicesFull.map((srv) => ({
    "@type": "Service",
    "@id": `https://www.alphasoft360.com/services#${srv.slug}`,
    "name": srv.title,
    "description": srv.description,
    "url": `https://www.alphasoft360.com/services#${srv.slug}`,
    "provider": {
      "@id": ORGANIZATION_ID
    },
    "areaServed": "Worldwide"
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      getWebPageSchema({
        type: "WebPage",
        name: "Software Development & IT Services Catalog | AlphaSoft360",
        description:
          "Explore AlphaSoft360's full-stack web development, custom software engineering, React/Next.js platforms, mobile apps, AI automation, and cloud DevOps services.",
        url: "https://www.alphasoft360.com/services",
        breadcrumbItems
      }),
      getBreadcrumbSchema(breadcrumbItems, "https://www.alphasoft360.com/services"),
      ...serviceGraph
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
        <ServicesHero />
        <ServicesGrid />
        <ServicesProcess />
      </main>
      <Footer />
    </>
  );
}
