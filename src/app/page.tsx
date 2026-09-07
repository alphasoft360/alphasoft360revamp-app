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
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getOrganizationSchema, getWebSiteSchema, getWebPageSchema } from "@/lib/schema";
import { techStackRow1, techStackRow2 } from "@/data/content";

export const metadata: Metadata = {
  title: "Custom Web Development & Software Engineering Company | AlphaSoft360",
  description:
    "AlphaSoft360 is a custom web development and software engineering company. We build web applications, React & Next.js platforms, SaaS, e-commerce, mobile apps, cloud DevOps, and AI solutions.",
  alternates: {
    canonical: "https://www.alphasoft360.com",
  },
  keywords: [
    "Custom Web Development",
    "Web Application Development",
    "Software Development Company",
    "React Development Services",
    "Next.js Development Agency",
    "SaaS Development Services",
    "E-commerce Web Development",
    "AlphaSoft360"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Custom Web Development & Software Engineering Company | AlphaSoft360",
    description:
      "AlphaSoft360 is a custom web development and software engineering company. We build web applications, React & Next.js platforms, SaaS, e-commerce, mobile apps, cloud DevOps, and AI solutions.",
    url: "https://www.alphasoft360.com",
    siteName: "AlphaSoft360",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.alphasoft360.com/brand/hero-2.jpeg",
        width: 1200,
        height: 630,
        alt: "AlphaSoft360 Custom Web Development & Software Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Web Development & Software Engineering Company | AlphaSoft360",
    description:
      "AlphaSoft360 is a custom web development and software engineering company. We build web applications, React & Next.js platforms, SaaS, e-commerce, mobile apps, cloud DevOps, and AI solutions.",
    images: ["https://www.alphasoft360.com/brand/hero-2.jpeg"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      getWebSiteSchema(),
      getWebPageSchema({
        name: "Custom Web Development & Software Engineering Company | AlphaSoft360",
        description:
          "AlphaSoft360 is a custom web development and software engineering company. We build web applications, React & Next.js platforms, SaaS, e-commerce, mobile apps, cloud DevOps, and AI solutions.",
        url: "https://www.alphasoft360.com"
      })
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
        <Contact />
      </main>
      <Footer />
    </>
  );
}
