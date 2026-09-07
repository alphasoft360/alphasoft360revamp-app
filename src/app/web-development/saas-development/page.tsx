import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Rocket, ArrowRight, CheckCircle2, Layers, ShieldCheck, Server } from "lucide-react";
import { getWebPageSchema, getBreadcrumbSchema, getServiceSchema } from "@/lib/schema";
import { contact } from "@/data/content";

export const metadata: Metadata = {
  title: "SaaS Application Development Services | AlphaSoft360",
  description:
    "End-to-end SaaS product engineering services. We build multi-tenant SaaS platforms, subscription management workflows, tenant data isolation, and cloud web architectures.",
  alternates: {
    canonical: "https://www.alphasoft360.com/web-development/saas-development",
  },
  keywords: [
    "SaaS Development Services",
    "SaaS Application Development",
    "Multi-Tenant Architecture",
    "Subscription SaaS Platform",
    "SaaS MVP Engineering",
    "B2B SaaS Web Development"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "SaaS Application Development Services | AlphaSoft360",
    description:
      "End-to-end SaaS product engineering services. We build multi-tenant SaaS platforms, subscription management workflows, and tenant data isolation.",
    url: "https://www.alphasoft360.com/web-development/saas-development",
    siteName: "AlphaSoft360",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.alphasoft360.com/brand/hero-2.jpeg",
        width: 1200,
        height: 630,
        alt: "AlphaSoft360 SaaS Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Application Development Services | AlphaSoft360",
    description:
      "End-to-end SaaS product engineering services.",
    images: ["https://www.alphasoft360.com/brand/hero-2.jpeg"],
  },
};

export default function SaasDevPage() {
  const pageUrl = "https://www.alphasoft360.com/web-development/saas-development";
  const breadcrumbItems = [
    { name: "Home", url: "https://www.alphasoft360.com" },
    { name: "Web Development", url: "https://www.alphasoft360.com/web-development" },
    { name: "SaaS Development", url: pageUrl }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      getWebPageSchema({
        name: "SaaS Application Development Services | AlphaSoft360",
        description: "Multi-tenant SaaS platform engineering, recurring subscription integrations, and scalable cloud architectures.",
        url: pageUrl,
        breadcrumbItems
      }),
      getBreadcrumbSchema(breadcrumbItems, pageUrl),
      getServiceSchema({
        name: "SaaS Application Development Services",
        description: "End-to-end multi-tenant SaaS product design and software engineering.",
        url: pageUrl,
        serviceType: "SaaS Development"
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
                Cloud Software Architecture
              </span>
              <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-gradient text-balance">
                SaaS Application Development
              </h1>
              <p className="mt-6 text-lg text-muted text-balance leading-relaxed">
                Turn your software product vision into a scalable, revenue-generating SaaS platform. We handle multi-tenancy, Stripe billing logic, user onboarding, role management, and analytics.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">
                  Build SaaS Product <ArrowRight className="h-4 w-4" />
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
                  <Rocket className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Multi-Tenant Architecture</h3>
                <p className="mt-2 text-sm text-muted">Strict database tenant isolation (schema-per-tenant or row-level security) ensuring absolute privacy across enterprise accounts.</p>
              </div>
              <div className="card-border rounded-2xl bg-surface p-8">
                <div className="h-10 w-10 rounded-xl bg-accent-2/10 flex items-center justify-center text-accent-2 mb-4">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Subscription &amp; Usage Billing</h3>
                <p className="mt-2 text-sm text-muted">Stripe Billing &amp; Merchant Webhooks for seat-based pricing, usage tiers, trial periods, and automated invoice management.</p>
              </div>
              <div className="card-border rounded-2xl bg-surface p-8">
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">RBAC &amp; SSO Authentication</h3>
                <p className="mt-2 text-sm text-muted">Role-Based Access Control (RBAC), team invite workflows, and Enterprise Single Sign-On (SAML/OAuth2).</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface-2/40 border-t border-line">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold text-foreground">Ready to Build Your SaaS Platform?</h2>
            <p className="mt-3 text-muted max-w-xl mx-auto text-sm">Schedule a technical consultation to define your SaaS product scope and database model.</p>
            <div className="mt-8 flex justify-center">
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">
                Start SaaS Project <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
