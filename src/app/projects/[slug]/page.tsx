import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import projectsData from "@/data/projectsData";

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) {
    return {
      title: "Project Not Found — AlphaSoft360",
    };
  }
  return {
    title: `${project.title} — AlphaSoft360`,
    description: project.description,
    alternates: {
      canonical: `https://alphasoft360.org/projects/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `${project.title} — AlphaSoft360`,
      description: project.description,
      url: `https://alphasoft360.org/projects/${slug}`,
      siteName: "AlphaSoft360",
      locale: "en_US",
      type: "article",
      images: [
        {
          url: `https://alphasoft360.org${project.image}`,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — AlphaSoft360`,
      description: project.description,
      images: [`https://alphasoft360.org${project.image}`],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "image": `https://alphasoft360.org${project.image}`,
    "author": {
      "@type": "Organization",
      "name": "AlphaSoft360",
      "url": "https://alphasoft360.org"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-24">

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <nav className="flex items-center gap-1.5 text-sm text-muted mb-8">
              <Link href="/projects" className="hover:text-foreground transition-colors">Projects</Link>
              <span className="text-muted">/</span>
              <span className="text-foreground">{project.title}</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-2 bg-accent-2/10 rounded-full border border-accent-2/20 mb-4">
                  {project.category}
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gradient text-balance mb-6">
                  {project.title}
                </h1>
                <p className="text-lg text-muted leading-relaxed text-balance mb-8">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm text-muted">
                    <span className="font-medium text-foreground">Duration:</span>
                    {project.duration}
                  </div>
                </div>
              </div>

              <div className="relative aspect-video rounded-3xl overflow-hidden card-border">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="relative py-20 border-t border-line">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-8">Project Overview</h2>
            <div className="space-y-4">
              {project.overview.map((paragraph, i) => (
                <p key={i} className="text-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-20 border-t border-line">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-8">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-surface rounded-xl border border-line">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                    <svg className="h-4 w-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="relative py-20 border-t border-line">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-2xl font-semibold mb-8">Technologies Used</h2>
            <div className="flex flex-wrap gap-3">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 text-sm font-medium bg-surface border border-line rounded-full hover:border-accent/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges & Solutions Section */}
        <section className="relative py-20 border-t border-line">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-8">Challenges</h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge, i) => (
                    <div key={i} className="p-4 bg-surface rounded-xl border border-line">
                      <p className="text-sm text-muted">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-8">Solutions</h2>
                <div className="space-y-4">
                  {project.solutions.map((solution, i) => (
                    <div key={i} className="p-4 bg-surface rounded-xl border border-accent/20">
                      <p className="text-sm text-muted">{solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-20 border-t border-line">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance mb-6">
              Want to build something similar?
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
              Let's discuss your project and bring your ideas to life with our expertise.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-8 py-4 text-sm font-medium text-white hover:opacity-90 transition-opacity"
            >
              Start a Project
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
