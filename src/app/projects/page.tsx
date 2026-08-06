import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export const metadata: Metadata = {
  title: "Our Projects — AlphaSoft360",
  description:
    "Explore AlphaSoft360's portfolio of successful projects across e-commerce, education, mobile apps, and startup platforms. See our innovative solutions in action.",
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
