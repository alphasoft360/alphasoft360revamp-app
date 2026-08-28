import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight, FolderTree } from "lucide-react";
import { servicesFull } from "@/data/content";
import projectsData from "@/data/projectsData";

export const metadata: Metadata = {
  title: "Sitemap — AlphaSoft360",
  description:
    "Complete sitemap directory of all pages, services, portfolio case studies, and resources available on AlphaSoft360.",
  alternates: {
    canonical: "https://alphasoft360.com/sitemap-page",
  },
  keywords: [
    "AlphaSoft360 Sitemap",
    "Website Directory",
    "IT Services Index",
    "Case Studies Directory",
    "Resource Navigation"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Sitemap — AlphaSoft360",
    description:
      "Complete sitemap directory of all pages, services, portfolio case studies, and resources available on AlphaSoft360.",
    url: "https://alphasoft360.com/sitemap-page",
    siteName: "AlphaSoft360",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://alphasoft360.com/brand/hero-2.jpeg",
        width: 1200,
        height: 630,
        alt: "AlphaSoft360 Website Sitemap",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sitemap — AlphaSoft360",
    description:
      "Complete sitemap directory of all pages, services, portfolio case studies, and resources available on AlphaSoft360.",
    images: ["https://alphasoft360.com/brand/hero-2.jpeg"],
  },
};

const sitemapSections = [
  {
    title: "Main Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
      { label: "Our Team", href: "/team" },
      { label: "Services Catalog", href: "/services" },
      { label: "Portfolio Projects", href: "/projects" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Developer & Support",
    links: [
      { label: "Documentation & SDKs", href: "/docs" },
      { label: "Frequently Asked Questions (FAQs)", href: "/faqs" },
      { label: "Help & Technical Support", href: "/support" },
    ],
  },
  {
    title: "Legal & Policies",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold tracking-widest text-accent-2 uppercase">
                Directory
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gradient">
                Website Sitemap
              </h1>
              <p className="mt-6 text-lg text-muted text-balance">
                Explore a full index of all pages, services, portfolio case studies, and technical resources across AlphaSoft360.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {sitemapSections.map((section, i) => (
                <div key={i} className="card-border rounded-2xl bg-surface p-6">
                  <h2 className="text-base font-semibold text-foreground pb-3 border-b border-line">
                    {section.title}
                  </h2>
                  <ul className="mt-4 space-y-2.5 text-sm">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-muted hover:text-accent transition-colors flex items-center gap-1.5"
                        >
                          <ArrowUpRight className="h-3.5 w-3.5 text-accent-2 shrink-0" />
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Dynamic Services & Projects List */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Services Index */}
              <div className="card-border rounded-2xl bg-surface p-6">
                <h2 className="text-lg font-semibold text-foreground pb-3 border-b border-line">
                  Services Index ({servicesFull.length})
                </h2>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {servicesFull.map((srv) => (
                    <li key={srv.slug}>
                      <Link
                        href={`/services#${srv.slug}`}
                        className="text-muted hover:text-accent-2 transition-colors flex items-center gap-1.5"
                      >
                        <ArrowUpRight className="h-3.5 w-3.5 text-accent shrink-0" />
                        {srv.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Projects Index */}
              <div className="card-border rounded-2xl bg-surface p-6">
                <h2 className="text-lg font-semibold text-foreground pb-3 border-b border-line">
                  Case Studies Index ({projectsData.length})
                </h2>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {projectsData.map((proj) => (
                    <li key={proj.slug}>
                      <Link
                        href={`/projects/${proj.slug}`}
                        className="text-muted hover:text-accent-2 transition-colors flex items-center gap-1.5"
                      >
                        <ArrowUpRight className="h-3.5 w-3.5 text-accent shrink-0" />
                        {proj.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
