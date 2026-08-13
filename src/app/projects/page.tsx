import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Our Projects — AlphaSoft360",
  description:
    "Explore AlphaSoft360's portfolio of successful projects across e-commerce, education, mobile apps, and startup platforms. See our innovative solutions in action.",
  alternates: {
    canonical: "https://alphasoft360.org/projects",
  },
  keywords: [
    "AlphaSoft360 Projects",
    "Software Portfolio Pakistan",
    "E-Commerce Case Studies Sahiwal",
    "Mobile Apps Portfolio",
    "Web Application Projects"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Our Projects — AlphaSoft360",
    description:
      "Explore AlphaSoft360's portfolio of successful projects across e-commerce, education, mobile apps, and startup platforms. See our innovative solutions in action.",
    url: "https://alphasoft360.org/projects",
    siteName: "AlphaSoft360",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://alphasoft360.org/brand/hero-2.jpeg",
        width: 1200,
        height: 630,
        alt: "AlphaSoft360 Project Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Projects — AlphaSoft360",
    description:
      "Explore AlphaSoft360's portfolio of successful projects across e-commerce, education, mobile apps, and startup platforms. See our innovative solutions in action.",
    images: ["https://alphasoft360.org/brand/hero-2.jpeg"],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ProjectsHero />
        <ProjectsGrid />
      </main>
      <Footer />
    </>
  );
}
