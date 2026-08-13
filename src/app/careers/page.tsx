import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Briefcase, ArrowUpRight, CheckCircle2, HeartHandshake, Zap, Globe, Sparkles } from "lucide-react";
import { contact } from "@/data/content";

export const metadata: Metadata = {
  title: "Careers — AlphaSoft360",
  description:
    "Join the team at AlphaSoft360. Explore career opportunities in software engineering, AI, cloud computing, and digital product design.",
  alternates: {
    canonical: "https://alphasoft360.org/careers",
  },
  keywords: [
    "AlphaSoft360 Careers",
    "Software Engineer Jobs Pakistan",
    "AI Developer Vacancies",
    "DevOps Remote Careers",
    "UI/UX Design Jobs Sahiwal",
    "Web Developer Internships"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Careers — AlphaSoft360",
    description:
      "Join the team at AlphaSoft360. Explore career opportunities in software engineering, AI, cloud computing, and digital product design.",
    url: "https://alphasoft360.org/careers",
    siteName: "AlphaSoft360",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://alphasoft360.org/brand/hero-2.jpeg",
        width: 1200,
        height: 630,
        alt: "Careers at AlphaSoft360",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers — AlphaSoft360",
    description:
      "Join the team at AlphaSoft360. Explore career opportunities in software engineering, AI, cloud computing, and digital product design.",
    images: ["https://alphasoft360.org/brand/hero-2.jpeg"],
  },
};

const jobOpenings = [
  {
    id: "senior-fullstack-engineer",
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote / Sahiwal, PK",
    type: "Full-Time",
    experience: "5+ Years",
    description:
      "Architect and build high-performance web applications using React, Next.js, Node.js, and cloud databases for global clients.",
  },
  {
    id: "ai-ml-solutions-architect",
    title: "AI & Machine Learning Engineer",
    department: "Artificial Intelligence",
    location: "Remote",
    type: "Full-Time",
    experience: "3+ Years",
    description:
      "Design and deploy intelligent automation, LLM integrations, and predictive data pipelines into enterprise software systems.",
  },
  {
    id: "cloud-devops-specialist",
    title: "Cloud & DevOps Specialist",
    department: "Infrastructure",
    location: "Hybrid",
    type: "Full-Time",
    experience: "4+ Years",
    description:
      "Oversee AWS/GCP cloud environments, CI/CD automation, Kubernetes clusters, and 24/7 high-availability infrastructure.",
  },
  {
    id: "ui-ux-product-designer",
    title: "Senior Product & UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-Time",
    experience: "3+ Years",
    description:
      "Craft modern design systems, interactive prototypes, and conversion-focused user interfaces for web and mobile products.",
  },
];

const perks = [
  {
    icon: Globe,
    title: "Remote & Flexible Work",
    description: "Work from anywhere with flexible hours and focus on delivering impact.",
  },
  {
    icon: Zap,
    title: "Cutting-Edge Tech Stack",
    description: "Build with React 19, Next.js, AI APIs, Docker, and enterprise cloud tools.",
  },
  {
    icon: HeartHandshake,
    title: "Continuous Professional Growth",
    description: "Generous learning stipend for certifications, conferences, and courses.",
  },
  {
    icon: Sparkles,
    title: "Competitive Compensation",
    description: "Top-tier salary packages, performance bonuses, and health coverage.",
  },
];

export default function CareersPage() {
  const jsonLd = jobOpenings.map((job) => ({
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "datePosted": "2026-02-15",
    "validThrough": "2027-02-15",
    "employmentType": job.type === "Full-Time" ? "FULL_TIME" : "PART_TIME",
    "hiringOrganization": {
      "@type": "Organization",
      "name": "AlphaSoft360",
      "sameAs": "https://alphasoft360.org",
      "logo": "https://alphasoft360.org/brand/logo.png"
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Main Pakavenue Road",
        "addressLocality": "Sahiwal",
        "postalCode": "57000",
        "addressCountry": "PK"
      }
    },
    "jobLocationType": job.location.toLowerCase().includes("remote") ? "TELECOMMUTE" : undefined
  }));

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
                Join Our Team
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gradient text-balance">
                Build the future of digital software with us
              </h1>
              <p className="mt-6 text-lg text-muted text-balance">
                At AlphaSoft360, we bring together passionate engineers, creative thinkers, and problem solvers to build scalable technology for global businesses.
              </p>
            </div>

            {/* Perks */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {perks.map((perk) => {
                const Icon = perk.icon;
                return (
                  <div key={perk.title} className="card-border rounded-2xl bg-surface p-6 flex flex-col">
                    <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-semibold text-foreground text-base">{perk.title}</h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{perk.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Open Roles */}
            <div className="mt-24">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-line pb-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Open Positions</h2>
                  <p className="mt-1 text-sm text-muted">Explore current career openings and find your fit.</p>
                </div>
                <span className="text-xs font-medium px-3 py-1.5 rounded-full bg-accent/10 text-accent shrink-0">
                  {jobOpenings.length} Positions Available
                </span>
              </div>

              <div className="mt-8 space-y-4">
                {jobOpenings.map((job) => (
                  <div
                    key={job.id}
                    className="card-border card-hover rounded-2xl bg-surface p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors hover:border-accent/40"
                  >
                    <div className="max-w-2xl">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-medium">
                        <span className="px-2.5 py-1 rounded-md bg-accent-2/10 text-accent-2">{job.department}</span>
                        <span className="px-2.5 py-1 rounded-md bg-line text-muted">{job.type}</span>
                        <span className="px-2.5 py-1 rounded-md bg-line text-muted">{job.location}</span>
                      </div>
                      <h3 className="mt-3 text-xl font-semibold text-foreground">{job.title}</h3>
                      <p className="mt-2 text-sm text-muted leading-relaxed">{job.description}</p>
                    </div>

                    <a
                      href={`${contact.whatsapp}?text=Hi! I am applying for the ${encodeURIComponent(job.title)} position at AlphaSoft360.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary shrink-0 self-start md:self-center text-xs"
                    >
                      Apply Now
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* General Application */}
            <div className="mt-16 rounded-3xl card-border bg-gradient-to-r from-accent/10 via-transparent to-accent-2/10 p-8 sm:p-12 text-center">
              <h3 className="text-2xl font-semibold text-foreground">Don&apos;t see your role?</h3>
              <p className="mt-3 text-muted max-w-lg mx-auto text-balance">
                We are always looking for exceptional talent. Send your resume and portfolio to our talent acquisition team.
              </p>
              <a href={`mailto:${contact.email}?subject=General Application - AlphaSoft360`} className="btn-secondary mt-6">
                Send Speculative Application
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
