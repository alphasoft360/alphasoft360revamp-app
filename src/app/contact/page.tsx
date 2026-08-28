import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";

export const metadata: Metadata = {
  title: "Contact Us — AlphaSoft360",
  description:
    "Get in touch with AlphaSoft360 — send us a message, call, email, or chat with us on WhatsApp. We reply within one business day.",
  alternates: {
    canonical: "https://alphasoft360.com/contact",
  },
  keywords: [
    "Contact AlphaSoft360",
    "Hire Software Developers",
    "WhatsApp AlphaSoft360",
    "Software Development Inquiry",
    "IT Consulting Contact"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact Us — AlphaSoft360",
    description:
      "Get in touch with AlphaSoft360 — send us a message, call, email, or chat with us on WhatsApp. We reply within one business day.",
    url: "https://alphasoft360.com/contact",
    siteName: "AlphaSoft360",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://alphasoft360.com/brand/hero-2.jpeg",
        width: 1200,
        height: 630,
        alt: "Contact AlphaSoft360",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us — AlphaSoft360",
    description:
      "Get in touch with AlphaSoft360 — send us a message, call, email, or chat with us on WhatsApp. We reply within one business day.",
    images: ["https://alphasoft360.com/brand/hero-2.jpeg"],
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us — AlphaSoft360",
    "description":
      "Get in touch with AlphaSoft360 — send us a message, call, email, or chat with us on WhatsApp. We reply within one business day.",
    "url": "https://alphasoft360.com/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "AlphaSoft360",
      "url": "https://alphasoft360.com",
      "logo": "https://alphasoft360.com/brand/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+923704857471",
        "contactType": "customer service",
        "email": "alphasoft360@gmail.com",
        "areaServed": "Worldwide"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <ContactHero />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}
