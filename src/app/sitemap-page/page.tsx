import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight, FolderTree } from "lucide-react";
import { servicesFull } from "@/data/content";
import projectsData from "@/data/projectsData";
import { getWebPageSchema, getBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Sitemap — AlphaSoft360",
  description:
    "Complete sitemap directory of all pages, services, portfolio case studies, and resources available on AlphaSoft360.",
  alternates: {
    canonical: "https://www.alphasoft360.com/sitemap-page",
  },
  keywords: [
    "AlphaSoft360 Sitemap",
    "Website Directory",
    "IT Services Index",
    "Case Studies Directory",
    "Resource Navigation"
  ],
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Sitemap — AlphaSoft360",
    description:
      "Complete sitemap directory of all pages, services, portfolio case studies, and resources available on AlphaSoft360.",
    url: "https://www.alphasoft360.com/sitemap-page",
    siteName: "AlphaSoft360",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.alphasoft360.com/brand/hero-2.jpeg",
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
    images: ["https://www.alphasoft360.com/brand/hero-2.jpeg"],
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
  const breadcrumbItems = [
    { name: "Home", url: "https://alphasoft360.com" },
    { name: "Sitemap", url: "https://alphasoft360.com/sitemap-page" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      getWebPageSchema({
        type: "WebPage",
        name: "Sitemap — AlphaSoft360",
        description:
          "Complete sitemap directory of all pages, services, portfolio case studies, and resources available on AlphaSoft360.",
        url: "https://alphasoft360.com/sitemap-page",
        breadcrumbItems
      }),
      getBreadcrumbSchema(breadcrumbItems, "https://alphasoft360.com/sitemap-page")
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
                  Services Index (13 Commercial Landing Pages)
                </h2>
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {[
                    { title: "Fintech Solutions", href: "/fintech" },
                    { title: "AI Development", href: "/ai-development" },
                    { title: "Web Development Hub", href: "/web-development" },
                    { title: "Custom Web Development", href: "/web-development/custom-web-development" },
                    { title: "Web Application Dev", href: "/web-development/web-application-development" },
                    { title: "React Development", href: "/web-development/react-development" },
                    { title: "Next.js Development", href: "/web-development/nextjs-development" },
                    { title: "Node.js Development", href: "/web-development/nodejs-development" },
                    { title: "E-Commerce Development", href: "/web-development/ecommerce-development" },
                    { title: "SaaS Development", href: "/web-development/saas-development" },
                    { title: "Software Development", href: "/software-development" },
                    { title: "Mobile App Development", href: "/mobile-app-development" },
                    { title: "Cloud & DevOps", href: "/cloud-devops" },
                  ].map((srv) => (
                    <li key={srv.href}>
                      <Link
                        href={srv.href}
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
