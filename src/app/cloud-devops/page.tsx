import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Server, ArrowRight, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { getWebPageSchema, getBreadcrumbSchema, getServiceSchema } from "@/lib/schema";
import { contact } from "@/data/content";

export const metadata: Metadata = {
  title: "Cloud Engineering & DevOps Services | AWS & Vercel | AlphaSoft360",
  description:
    "Cloud infrastructure automation and DevOps engineering services. We build automated CI/CD pipelines, Docker & Kubernetes container setups, AWS cloud deployment, and 24/7 monitoring.",
  alternates: {
    canonical: "https://www.alphasoft360.com/cloud-devops",
  },
  keywords: [
    "Cloud Engineering Services",
    "DevOps Consulting",
    "AWS Cloud Architecture",
    "CI/CD Pipeline Automation",
    "Docker Kubernetes Setup",
    "Vercel Edge Deployment"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Cloud Engineering & DevOps Services | AWS & Vercel | AlphaSoft360",
    description:
      "Cloud infrastructure automation and DevOps engineering services. We build automated CI/CD pipelines, Docker container setups, and AWS cloud deployment.",
    url: "https://www.alphasoft360.com/cloud-devops",
    siteName: "AlphaSoft360",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.alphasoft360.com/brand/hero-2.jpeg",
        width: 1200,
        height: 630,
        alt: "AlphaSoft360 Cloud & DevOps Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cloud Engineering & DevOps Services | AWS & Vercel | AlphaSoft360",
    description:
      "Cloud infrastructure automation and DevOps engineering services.",
    images: ["https://www.alphasoft360.com/brand/hero-2.jpeg"],
  },
};

export default function CloudDevOpsPage() {
  const pageUrl = "https://www.alphasoft360.com/cloud-devops";
  const breadcrumbItems = [
    { name: "Home", url: "https://www.alphasoft360.com" },
    { name: "Cloud & DevOps", url: pageUrl }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      getWebPageSchema({
        name: "Cloud Engineering & DevOps Services | AlphaSoft360",
        description: "Enterprise cloud migration, automated CI/CD deployment pipelines, container orchestration, and server monitoring.",
        url: pageUrl,
        breadcrumbItems
      }),
      getBreadcrumbSchema(breadcrumbItems, pageUrl),
      getServiceSchema({
        name: "Cloud & DevOps Services",
        description: "Cloud infrastructure setup and DevOps pipeline automation for web platforms.",
        url: pageUrl,
        serviceType: "Cloud & DevOps"
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
                Infrastructure &amp; Automation
              </span>
              <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-gradient text-balance">
                Cloud Engineering &amp; DevOps
              </h1>
              <p className="mt-6 text-lg text-muted text-balance leading-relaxed">
                Build resilient, auto-scaling cloud infrastructure that ensures zero-downtime deployments. We manage AWS, Vercel, Docker containers, Terraform IaC, and automated CI/CD pipelines.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">
                  Automate Infrastructure <ArrowRight className="h-4 w-4" />
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
                  <Server className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">AWS &amp; Vercel Cloud Architecture</h3>
                <p className="mt-2 text-sm text-muted">Architecting multi-region EC2, S3, RDS, ECS, Lambda, and CloudFront edge networks for maximum global reliability.</p>
              </div>
              <div className="card-border rounded-2xl bg-surface p-8">
                <div className="h-10 w-10 rounded-xl bg-accent-2/10 flex items-center justify-center text-accent-2 mb-4">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Automated CI/CD Pipelines</h3>
                <p className="mt-2 text-sm text-muted">GitHub Actions &amp; GitLab CI workflows for automated linting, unit testing, security scanning, and seamless deployments.</p>
              </div>
              <div className="card-border rounded-2xl bg-surface p-8">
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Containerization &amp; IaC</h3>
                <p className="mt-2 text-sm text-muted">Docker containerization, Kubernetes cluster management, and Infrastructure as Code (Terraform) reproducibility.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface-2/40 border-t border-line">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold text-foreground">Need Cloud &amp; DevOps Optimization?</h2>
            <p className="mt-3 text-muted max-w-xl mx-auto text-sm">Let our DevOps engineers review your cloud infrastructure and CI/CD pipelines.</p>
            <div className="mt-8 flex justify-center">
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">
                Contact Cloud Team <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
