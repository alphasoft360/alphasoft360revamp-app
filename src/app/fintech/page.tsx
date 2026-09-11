import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Landmark, ArrowRight, ShieldCheck, CreditCard, LineChart } from "lucide-react";
import { getWebPageSchema, getBreadcrumbSchema, getServiceSchema } from "@/lib/schema";
import { contact } from "@/data/content";
import ServiceHeroVisual from "@/components/services/ServiceHeroVisual";

export const metadata: Metadata = {
  title: "Fintech Software Development Services | AlphaSoft360",
  description:
    "Secure, compliant fintech platforms including digital banking, payment gateways, lending systems, and financial dashboards built with bank-grade security and scalability.",
  alternates: {
    canonical: "https://www.alphasoft360.com/fintech",
  },
  keywords: [
    "Fintech Software Development",
    "Digital Banking Platform",
    "Payment Gateway Integration",
    "Lending Software Development",
    "Financial Software Solutions",
    "Bank-Grade Security"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Fintech Software Development Services | AlphaSoft360",
    description:
      "Secure, compliant fintech platforms including digital banking, payments, and lending systems built with bank-grade security and scalability.",
    url: "https://www.alphasoft360.com/fintech",
    siteName: "AlphaSoft360",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.alphasoft360.com/brand/hero-2.jpeg",
        width: 1200,
        height: 630,
        alt: "AlphaSoft360 Fintech Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fintech Software Development Services | AlphaSoft360",
    description:
      "Secure, compliant fintech platforms built with bank-grade security and scalability.",
    images: ["https://www.alphasoft360.com/brand/hero-2.jpeg"],
  },
};

export default function FintechPage() {
  const pageUrl = "https://www.alphasoft360.com/fintech";
  const breadcrumbItems = [
    { name: "Home", url: "https://www.alphasoft360.com" },
    { name: "Fintech Solutions", url: pageUrl }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      getWebPageSchema({
        name: "Fintech Software Development Services | AlphaSoft360",
        description: "Secure, compliant fintech platforms including digital banking, payments, and lending systems.",
        url: pageUrl,
        breadcrumbItems
      }),
      getBreadcrumbSchema(breadcrumbItems, pageUrl),
      getServiceSchema({
        name: "Fintech Solutions",
        description: "Digital banking, payment gateway, and lending platform development with bank-grade security.",
        url: pageUrl,
        serviceType: "Fintech Software Development"
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
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-semibold tracking-widest text-accent-2 uppercase">
                  Financial Technology
                </span>
                <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-gradient text-balance">
                  Fintech Solutions
                </h1>
                <p className="mt-6 text-lg text-muted text-balance leading-relaxed">
                  Secure, compliant financial platforms built for scale. We engineer digital banking systems, payment gateways, lending platforms, and real-time financial dashboards with bank-grade security.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">
                    Discuss Your Project <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="hidden lg:block lg:col-span-5">
                <ServiceHeroVisual
                  mainIcon={<Landmark className="h-4 w-4" />}
                  title="Fintech Solutions"
                  items={[
                    { icon: <Landmark className="h-5 w-5" />, label: "Digital Banking Platforms" },
                    { icon: <CreditCard className="h-5 w-5" />, label: "Payments & Lending" },
                    { icon: <ShieldCheck className="h-5 w-5" />, label: "Security & Compliance" },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-border rounded-2xl bg-surface p-8">
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <Landmark className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Digital Banking Platforms</h3>
                <p className="mt-2 text-sm text-muted">Core banking systems, digital wallets, and neobank platforms with real-time account management and transaction processing.</p>
              </div>
              <div className="card-border rounded-2xl bg-surface p-8">
                <div className="h-10 w-10 rounded-xl bg-accent-2/10 flex items-center justify-center text-accent-2 mb-4">
                  <CreditCard className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Payments &amp; Lending</h3>
                <p className="mt-2 text-sm text-muted">Payment gateway integrations, P2P transfers, and automated lending platforms with credit scoring and risk assessment.</p>
              </div>
              <div className="card-border rounded-2xl bg-surface p-8">
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Security &amp; Compliance</h3>
                <p className="mt-2 text-sm text-muted">PCI-DSS compliant architecture, end-to-end encryption, fraud detection, and KYC/AML workflows built in from day one.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface-2/40 border-t border-line">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <div className="mx-auto h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
              <LineChart className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-semibold text-foreground">Ready to Build Your Fintech Product?</h2>
            <p className="mt-3 text-muted max-w-xl mx-auto text-sm">Let our engineers help you launch a secure, compliant financial platform.</p>
            <div className="mt-8 flex justify-center">
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">
                Contact Our Team <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
