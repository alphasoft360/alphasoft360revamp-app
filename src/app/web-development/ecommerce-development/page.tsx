import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ShoppingBag, ArrowRight, CheckCircle2, Zap, ShieldCheck } from "lucide-react";
import { getWebPageSchema, getBreadcrumbSchema, getServiceSchema } from "@/lib/schema";
import { contact } from "@/data/content";

export const metadata: Metadata = {
  title: "E-Commerce Web Development Services | Custom Storefronts | AlphaSoft360",
  description:
    "High-converting e-commerce web development services. We engineer custom online stores, headless commerce platforms, payment gateway integrations, and SKU inventory management systems.",
  alternates: {
    canonical: "https://www.alphasoft360.com/web-development/ecommerce-development",
  },
  keywords: [
    "E-Commerce Web Development",
    "Headless Commerce Development",
    "Custom E-Commerce Storefronts",
    "Online Shopping Platform",
    "Stripe Payment Gateway Integration",
    "Wholesale E-Commerce Solutions"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "E-Commerce Web Development Services | Custom Storefronts | AlphaSoft360",
    description:
      "High-converting e-commerce web development services. We engineer custom online stores, headless commerce platforms, and payment integrations.",
    url: "https://www.alphasoft360.com/web-development/ecommerce-development",
    siteName: "AlphaSoft360",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.alphasoft360.com/brand/hero-2.jpeg",
        width: 1200,
        height: 630,
        alt: "AlphaSoft360 E-Commerce Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Commerce Web Development Services | Custom Storefronts | AlphaSoft360",
    description:
      "High-converting e-commerce web development services.",
    images: ["https://www.alphasoft360.com/brand/hero-2.jpeg"],
  },
};

export default function EcommerceDevPage() {
  const pageUrl = "https://www.alphasoft360.com/web-development/ecommerce-development";
  const breadcrumbItems = [
    { name: "Home", url: "https://www.alphasoft360.com" },
    { name: "Web Development", url: "https://www.alphasoft360.com/web-development" },
    { name: "E-Commerce Development", url: pageUrl }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      getWebPageSchema({
        name: "E-Commerce Web Development Services | AlphaSoft360",
        description: "Custom e-commerce platforms, headless online stores, payment gateway integrations, and wholesale cart solutions.",
        url: pageUrl,
        breadcrumbItems
      }),
      getBreadcrumbSchema(breadcrumbItems, pageUrl),
      getServiceSchema({
        name: "E-Commerce Development Services",
        description: "High-converting custom e-commerce web platform engineering.",
        url: pageUrl,
        serviceType: "E-Commerce Development"
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
                High-Conversion Digital Stores
              </span>
              <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-gradient text-balance">
                E-Commerce Web Development
              </h1>
              <p className="mt-6 text-lg text-muted text-balance leading-relaxed">
                Drive sales and customer retention with custom e-commerce web platforms. We build lightning-fast storefronts featuring instant search, automated checkout workflows, and secure payment processing.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">
                  Launch E-Commerce Store <ArrowRight className="h-4 w-4" />
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
                  <ShoppingBag className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Headless Commerce Storefronts</h3>
                <p className="mt-2 text-sm text-muted">Decoupled Next.js frontend integrated with Shopify, WooCommerce, or custom GraphQL product APIs for sub-second page loads.</p>
              </div>
              <div className="card-border rounded-2xl bg-surface p-8">
                <div className="h-10 w-10 rounded-xl bg-accent-2/10 flex items-center justify-center text-accent-2 mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Multi-Gateway Payment Integration</h3>
                <p className="mt-2 text-sm text-muted">PCI-compliant integration with Stripe, PayPal, Apple Pay, Google Pay, and localized regional payment providers.</p>
              </div>
              <div className="card-border rounded-2xl bg-surface p-8">
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">SKU Inventory &amp; Wholesale Pricing</h3>
                <p className="mt-2 text-sm text-muted">Advanced product variation management, real-time inventory sync across channels, and tier-based B2B wholesale pricing.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface-2/40 border-t border-line">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold text-foreground">Ready to Scale Online Sales?</h2>
            <p className="mt-3 text-muted max-w-xl mx-auto text-sm">Consult with our e-commerce web architects to design your store architecture.</p>
            <div className="mt-8 flex justify-center">
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">
                Start E-Commerce Project <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
