"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import projectsData from "@/data/projectsData";
import SpotlightCard from "@/components/SpotlightCard";

const MotionLink = motion.create(Link);

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

type Project = (typeof projectsData)[number];

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

function ProjectCard({ project, index, featured = false }: ProjectCardProps) {
  return (
    <MotionLink
      href={`/projects/${project.slug}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 8) * 0.08 }}
      className={`group ${featured ? "md:col-span-2 lg:col-span-2" : ""}`}
    >
      <SpotlightCard className="h-full card-border card-hover rounded-3xl bg-surface overflow-hidden hover:border-accent/50 transition-colors block">
        <div className="relative h-80 overflow-hidden bg-background">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            className="object-fit  group-hover:scale-105 transition-transform duration-500"
            priority={index < 2}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-2/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-2 bg-black/80 backdrop-blur-md rounded-full border border-white/20">
              {project.category}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
            <h3 className="mt-2 text-2xl font-medium text-white drop-shadow-lg">{project.title}</h3>
            <p className="mt-2 text-sm text-white/95 leading-relaxed line-clamp-2 drop-shadow-lg">
              {project.description}
            </p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-xs text-white/90 drop-shadow-lg">{project.duration}</span>
              <span className="shrink-0 h-8 w-8 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:bg-accent transition-colors">
                <ArrowUpRight className="h-4 w-4 text-white" />
              </span>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </MotionLink>
  );
}

export default function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const gridTopRef = useRef<HTMLDivElement>(null);

  const categories = useMemo(() => {
    const order: string[] = [];
    const groups = new Map<string, Project[]>();

    projectsData.forEach((project) => {
      if (!groups.has(project.category)) {
        groups.set(project.category, []);
        order.push(project.category);
      }
      groups.get(project.category)!.push(project);
    });

    return order.map((name) => ({
      name,
      slug: slugify(name),
      projects: groups.get(name)!,
    }));
  }, []);

  const visibleCategories = activeCategory
    ? categories.filter((c) => c.slug === activeCategory)
    : categories;

  const handleSelect = (slug: string | null) => {
    setActiveCategory(slug);
    requestAnimationFrame(() => {
      gridTopRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <section className="relative py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Category filter nav */}
        <div ref={gridTopRef} className="scroll-mt-28 flex flex-wrap items-center gap-2.5 mb-16">
          <button
            onClick={() => handleSelect(null)}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === null
                ? "bg-accent text-white shadow-sm"
                : "bg-surface text-muted hover:text-foreground border border-line"
            }`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => handleSelect(cat.slug)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.slug
                  ? "bg-accent text-white shadow-sm"
                  : "bg-surface text-muted hover:text-foreground border border-line"
              }`}
            >
              {cat.name}
              <span className="ml-1.5 text-xs opacity-70">{cat.projects.length}</span>
            </button>
          ))}
        </div>

        {/* All: irregular masonry-style grid across every project (yesterday's layout). A category: grouped section. */}
        {activeCategory === null ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, i) => {
              const isFeatured = i === 0 || i === 3 || i === 4 || i === 7 || i === 8 || i === 11 || i === 12;
              return (
                <ProjectCard key={project.slug} project={project} index={i} featured={isFeatured} />
              );
            })}
          </div>
        ) : (
          <div className="space-y-20">
            {visibleCategories.map((cat) => (
              <div key={cat.slug} id={`category-${cat.slug}`} className="scroll-mt-28">
                <div className="flex items-end justify-between gap-6 mb-8 pb-6 border-b border-line">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{cat.name}</h2>
                    <p className="mt-2 text-sm text-muted">
                      {cat.projects.length} {cat.projects.length === 1 ? "project" : "projects"} in this category
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {cat.projects.map((project, i) => (
                    <ProjectCard key={project.slug} project={project} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
