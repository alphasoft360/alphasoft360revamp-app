import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FaqsClient from "@/components/FaqsClient";
import { faqs } from "@/data/faqsData";
import { getWebPageSchema, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — AlphaSoft360",
  description:
    "Everything you need to know about working with AlphaSoft360, our engineering workflow, project delivery, and SLAs.",
  alternates: {
    canonical: "https://alphasoft360.com/faqs",
  },
  keywords: [
    "AlphaSoft360 FAQs",
    "Software Development FAQs",
    "SLA Support Sahiwal",
    "Agile Timelines Sahiwal",
    "Confidentiality NDA Pakistan",
    "IP Rights Software"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Frequently Asked Questions — AlphaSoft360",
    description:
      "Everything you need to know about working with AlphaSoft360, our engineering workflow, project delivery, and SLAs.",
    url: "https://alphasoft360.com/faqs",
    siteName: "AlphaSoft360",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://alphasoft360.com/brand/hero-2.jpeg",
        width: 1200,
        height: 630,
        alt: "Frequently Asked Questions — AlphaSoft360",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions — AlphaSoft360",
    description:
      "Everything you need to know about working with AlphaSoft360, our engineering workflow, project delivery, and SLAs.",
    images: ["https://alphasoft360.com/brand/hero-2.jpeg"],
  },
};

export default function FaqsPage() {
  const breadcrumbItems = [
    { name: "Home", url: "https://alphasoft360.com" },
    { name: "FAQs", url: "https://alphasoft360.com/faqs" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        "@id": "https://alphasoft360.com/faqs#faq",
        "mainEntity": faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
        })),
      },
      getWebPageSchema({
        type: "WebPage",
        name: "Frequently Asked Questions — AlphaSoft360",
        description:
          "Everything you need to know about working with AlphaSoft360, our engineering workflow, project delivery, and SLAs.",
        url: "https://alphasoft360.com/faqs",
        breadcrumbItems
      }),
      getBreadcrumbSchema(breadcrumbItems, "https://alphasoft360.com/faqs")
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
        <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-24">
          <FaqsClient />
        </section>
      </main>
      <Footer />
    </>
  );
}
