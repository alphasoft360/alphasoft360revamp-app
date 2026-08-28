import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlight from "@/components/Highlight";
import About from "@/components/About";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { techStackRow1, techStackRow2 } from "@/data/content";

export const metadata: Metadata = {
  title: "AlphaSoft360 — IT Consulting & Software Engineering",
  description:
    "AlphaSoft360 builds high-performance software, web applications, mobile apps, cloud DevOps, and AI automation solutions for businesses worldwide. Over a decade of engineering excellence.",
  alternates: {
    canonical: "https://alphasoft360.com",
  },
  keywords: [
    "AlphaSoft360",
    "IT Consulting",
    "Software Engineering Sahiwal",
    "Web Development Pakistan",
    "App Development Sahiwal",
    "Cloud DevOps Solutions",
    "AI Automation Company",
    "Custom Software Developer"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AlphaSoft360 — IT Consulting & Software Engineering",
    description:
      "AlphaSoft360 builds high-performance software, web applications, mobile apps, cloud DevOps, and AI automation solutions for businesses worldwide.",
    url: "https://alphasoft360.com",
    siteName: "AlphaSoft360",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://alphasoft360.com/brand/hero-2.jpeg",
        width: 1200,
        height: 630,
        alt: "AlphaSoft360 Software Engineering Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AlphaSoft360 — IT Consulting & Software Engineering",
    description:
      "AlphaSoft360 builds high-performance software, web applications, mobile apps, cloud DevOps, and AI automation solutions for businesses worldwide.",
    images: ["https://alphasoft360.com/brand/hero-2.jpeg"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://alphasoft360.com/#organization",
        "name": "AlphaSoft360",
        "url": "https://alphasoft360.com",
        "logo": "https://alphasoft360.com/brand/logo.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+923704857471",
          "contactType": "customer service",
          "email": "alphasoft360@gmail.com",
          "areaServed": "Worldwide"
        },
        "location": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Main Pakavenue Road",
            "addressLocality": "Sahiwal",
            "postalCode": "57000",
            "addressCountry": "PK"
          }
        },
        "sameAs": [
          "https://www.linkedin.com/company/alphasoft360",
          "https://github.com/alphasoft360",
          "https://twitter.com/alphasoft360"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://alphasoft360.com/#website",
        "url": "https://alphasoft360.com",
        "name": "AlphaSoft360",
        "description": "IT Consulting & Software Engineering Solutions",
        "publisher": {
          "@id": "https://alphasoft360.com/#organization"
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header photoHero />
      <main className="flex-1">
        <Hero />
        <TechStack row1={techStackRow1} row2={techStackRow2} />
        <Highlight />
        <About />
        <Services />
        <Process />
        <Projects />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
