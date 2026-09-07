import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cpu, ArrowRight, CheckCircle2, Zap, Server } from "lucide-react";
import { getWebPageSchema, getBreadcrumbSchema, getServiceSchema } from "@/lib/schema";
import { contact } from "@/data/content";

export const metadata: Metadata = {
  title: "AI Development & Automation Services | AlphaSoft360",
  description:
    "Custom AI development and automation services. We integrate LLMs, RAG pipelines, vector search databases, intelligent automation agents, and custom AI models into web applications.",
  alternates: {
    canonical: "https://www.alphasoft360.com/ai-development",
  },
  keywords: [
    "AI Development Services",
    "Artificial Intelligence Agency",
    "LLM Integration Company",
    "RAG Vector Search Systems",
    "AI Automation Services",
    "Custom AI Models"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AI Development & Automation Services | AlphaSoft360",
    description:
      "Custom AI development and automation services. We integrate LLMs, RAG pipelines, vector search databases, and intelligent automation agents.",
    url: "https://www.alphasoft360.com/ai-development",
    siteName: "AlphaSoft360",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.alphasoft360.com/brand/hero-2.jpeg",
        width: 1200,
        height: 630,
        alt: "AlphaSoft360 AI Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Development & Automation Services | AlphaSoft360",
    description:
      "Custom AI development and automation services.",
    images: ["https://www.alphasoft360.com/brand/hero-2.jpeg"],
  },
};

export default function AiDevPage() {
  const pageUrl = "https://www.alphasoft360.com/ai-development";
  const breadcrumbItems = [
    { name: "Home", url: "https://www.alphasoft360.com" },
    { name: "AI Development", url: pageUrl }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      getWebPageSchema({
        name: "AI Development & Automation Services | AlphaSoft360",
        description: "Enterprise AI solutions, LLM API integrations, RAG architectures, and workflow process automation.",
        url: pageUrl,
        breadcrumbItems
      }),
      getBreadcrumbSchema(breadcrumbItems, pageUrl),
      getServiceSchema({
        name: "AI Development Services",
        description: "Custom AI development and intelligent process automation.",
        url: pageUrl,
        serviceType: "AI Development"
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
                Intelligent Automation Systems
              </span>
              <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-gradient text-balance">
                AI Development &amp; Automation
              </h1>
              <p className="mt-6 text-lg text-muted text-balance leading-relaxed">
                Supercharge your web platforms with modern artificial intelligence. We integrate Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), vector databases, and custom automation workflows.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">
                  Integrate AI in Your App <ArrowRight className="h-4 w-4" />
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
                <h3 className="text-lg font-semibold text-foreground">LLM &amp; RAG Architecture</h3>
                <p className="mt-2 text-sm text-muted">Retrieval-Augmented Generation pipelines using OpenAI/Anthropic APIs paired with Pinecone, pgvector, or Qdrant for private enterprise search.</p>
              </div>
              <div className="card-border rounded-2xl bg-surface p-8">
                <div className="h-10 w-10 rounded-xl bg-accent-2/10 flex items-center justify-center text-accent-2 mb-4">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Autonomous Workflow Agents</h3>
                <p className="mt-2 text-sm text-muted">LangChain &amp; LlamaIndex autonomous agent pipelines that process documents, extract structured data, and trigger API actions.</p>
              </div>
              <div className="card-border rounded-2xl bg-surface p-8">
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <Server className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Custom Predictive Analytics</h3>
                <p className="mt-2 text-sm text-muted">Machine learning models for user churn prediction, automated recommendation engines, and anomaly detection.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface-2/40 border-t border-line">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold text-foreground">Ready to Build with Artificial Intelligence?</h2>
            <p className="mt-3 text-muted max-w-xl mx-auto text-sm">Consult with our AI engineers to map out your model selection and vector retrieval architecture.</p>
            <div className="mt-8 flex justify-center">
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">
                Start AI Project <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
