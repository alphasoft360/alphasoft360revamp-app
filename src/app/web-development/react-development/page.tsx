import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cpu, ArrowRight, CheckCircle2, Zap, Code2 } from "lucide-react";
import { getWebPageSchema, getBreadcrumbSchema, getServiceSchema } from "@/lib/schema";
import { contact } from "@/data/content";

export const metadata: Metadata = {
  title: "React Development Services | Enterprise React Agency | AlphaSoft360",
  description:
    "Expert React development services. We build scalable, high-performance user interfaces using React 19, TypeScript, state management, and modern component design.",
  alternates: {
    canonical: "https://www.alphasoft360.com/web-development/react-development",
  },
  keywords: [
    "React Development Services",
    "React Development Agency",
    "ReactJS Developers",
    "React 19 Engineering",
    "TypeScript React Development",
    "Frontend Engineering Company"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "React Development Services | Enterprise React Agency | AlphaSoft360",
    description:
      "Expert React development services. We build scalable, high-performance user interfaces using React 19, TypeScript, state management, and modern component design.",
    url: "https://www.alphasoft360.com/web-development/react-development",
    siteName: "AlphaSoft360",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.alphasoft360.com/brand/hero-2.jpeg",
        width: 1200,
        height: 630,
        alt: "AlphaSoft360 React Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "React Development Services | Enterprise React Agency | AlphaSoft360",
    description:
      "Expert React development services. We build scalable, high-performance user interfaces using React 19 and TypeScript.",
    images: ["https://www.alphasoft360.com/brand/hero-2.jpeg"],
  },
};

export default function ReactDevPage() {
  const pageUrl = "https://www.alphasoft360.com/web-development/react-development";
  const breadcrumbItems = [
    { name: "Home", url: "https://www.alphasoft360.com" },
    { name: "Web Development", url: "https://www.alphasoft360.com/web-development" },
    { name: "React Development", url: pageUrl }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      getWebPageSchema({
        name: "React Development Services | AlphaSoft360",
        description: "High-performance React 19 and TypeScript frontend engineering for web applications and digital products.",
        url: pageUrl,
        breadcrumbItems
      }),
      getBreadcrumbSchema(breadcrumbItems, pageUrl),
      getServiceSchema({
        name: "React Development Services",
        description: "Expert React development services creating modular, responsive user interfaces.",
        url: pageUrl,
        serviceType: "React Development"
      })
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
        <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-24 bg-surface-2/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold tracking-widest text-accent-2 uppercase">
                Frontend Architecture
              </span>
              <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-gradient text-balance">
                React Development Services
              </h1>
              <p className="mt-6 text-lg text-muted text-balance leading-relaxed">
                Unlock lightning-fast user experiences with React 19 and TypeScript. We engineer modular component libraries, optimize rendering performance, and maintain scalable state architectures.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">
                  Hire React Engineers <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-border rounded-2xl bg-surface p-8">
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <Cpu className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">React 19 &amp; Server Components</h3>
                <p className="mt-2 text-sm text-muted">Leveraging modern React features including actions, async transitions, and server components for reduced bundle size.</p>
              </div>
              <div className="card-border rounded-2xl bg-surface p-8">
                <div className="h-10 w-10 rounded-xl bg-accent-2/10 flex items-center justify-center text-accent-2 mb-4">
                  <Code2 className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Strict TypeScript Typing</h3>
                <p className="mt-2 text-sm text-muted">Prevent runtime bugs and streamline team development with end-to-end type safety across props, state, and API payload schemas.</p>
              </div>
              <div className="card-border rounded-2xl bg-surface p-8">
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Core Web Vitals Optimization</h3>
                <p className="mt-2 text-sm text-muted">Dynamic imports, code splitting, memoization, and lightweight state managers (Zustand, TanStack Query) for peak speed.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface-2/40 border-t border-line">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold text-foreground">Need Senior React Engineering Talent?</h2>
            <p className="mt-3 text-muted max-w-xl mx-auto text-sm">Partner with our experienced React developers to build or refactor your web application.</p>
            <div className="mt-8 flex justify-center">
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">
                Contact React Team <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
