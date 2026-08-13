import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Book, Code2, Terminal, Cpu, FileText, ArrowRight, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation & Developer Hub — AlphaSoft360",
  description:
    "Explore developer documentation, API guides, integration patterns, and architecture specs for AlphaSoft360 products and services.",
  alternates: {
    canonical: "https://alphasoft360.org/docs",
  },
  keywords: [
    "AlphaSoft360 Documentation",
    "Developer Hub",
    "API References",
    "Software Integration Guides",
    "Cloud Deploy Scripts",
    "AI SDK Setup"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Documentation & Developer Hub — AlphaSoft360",
    description:
      "Explore developer documentation, API guides, integration patterns, and architecture specs for AlphaSoft360 products and services.",
    url: "https://alphasoft360.org/docs",
    siteName: "AlphaSoft360",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://alphasoft360.org/brand/hero-2.jpeg",
        width: 1200,
        height: 630,
        alt: "AlphaSoft360 Developer Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Documentation & Developer Hub — AlphaSoft360",
    description:
      "Explore developer documentation, API guides, integration patterns, and architecture specs for AlphaSoft360 products and services.",
    images: ["https://alphasoft360.org/brand/hero-2.jpeg"],
  },
};

const docCategories = [
  {
    icon: Code2,
    title: "REST & GraphQL APIs",
    description: "Authentication, endpoints, request formats, and webhooks documentation for custom application integrations.",
  },
  {
    icon: Terminal,
    title: "Deployment & DevOps Setup",
    description: "Containerization guidelines, Docker configurations, environment variables, and automated CI/CD deployment scripts.",
  },
  {
    icon: Cpu,
    title: "AI Integration Guides",
    description: "SDK references for LLM agents, prompt engineering pipelines, and vector database retrieval setups.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Data encryption protocols, GDPR/PCI standards, OAuth authorization flows, and security best practices.",
  },
];

export default function DocsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold tracking-widest text-accent-2 uppercase">
                Developer Hub
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gradient text-balance">
                Technical Documentation &amp; SDKs
              </h1>
              <p className="mt-6 text-lg text-muted text-balance">
                Comprehensive technical guides, API references, architecture patterns, and deployment specs for AlphaSoft360 engineering solutions.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              {docCategories.map((cat, i) => {
                const Icon = cat.icon;
                return (
                  <div
                    key={i}
                    className="card-border card-hover rounded-2xl bg-surface p-8 flex flex-col justify-between hover:border-accent/40 transition-colors"
                  >
                    <div>
                      <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h2 className="text-xl font-semibold text-foreground">{cat.title}</h2>
                      <p className="mt-3 text-sm text-muted leading-relaxed">{cat.description}</p>
                    </div>
                    <Link href="/contact" className="mt-8 text-sm font-medium text-accent-2 flex items-center gap-1.5 hover:underline">
                      View Guides &amp; References <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 card-border rounded-3xl bg-surface p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground">Need dedicated API support?</h3>
                <p className="mt-1 text-sm text-muted">Our engineering support engineers are available 24/7 to assist with integrations.</p>
              </div>
              <Link href="/contact" className="btn-primary shrink-0 text-xs">
                Contact Developer Support
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
