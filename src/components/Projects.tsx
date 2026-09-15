"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import projectsData from "@/data/projectsData";
import SpotlightCard from "./SpotlightCard";

const MotionLink = motion.create(Link);
const FEATURED_COUNT = 6;

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

type Project = (typeof projectsData)[number];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <MotionLink
      href={`/projects/${project.slug}`}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: (index % 6) * 0.07 }}
      className="group block"
    >
      <SpotlightCard className="h-full rounded-3xl bg-[#0b0f19] border border-white/10 hover:border-accent/60 transition-all duration-300 overflow-hidden shadow-xl block">
        <div className="relative aspect-[16/11] overflow-hidden bg-[#0b0f19]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/50 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-accent-2 bg-black/80 backdrop-blur-md rounded-full border border-white/20">
              {project.category}
            </span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <h3 className="text-lg font-semibold text-white leading-snug">{project.title}</h3>
            <p className="mt-2 text-sm text-gray-300/90 leading-relaxed line-clamp-2">
              {project.description}
            </p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-xs text-white/70">{project.duration}</span>
              <span className="shrink-0 h-8 w-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                <ArrowUpRight className="h-4 w-4 text-white" />
              </span>
            </div>
          </div>
        </div>
      </SpotlightCard>
    </MotionLink>
  );
}

export default function Projects() {
  const categories = useMemo(() => {
    const order: string[] = [];
    const counts = new Map<string, number>();
    projectsData.forEach((p) => {
      if (!counts.has(p.category)) {
        counts.set(p.category, 0);
        order.push(p.category);
      }
      counts.set(p.category, counts.get(p.category)! + 1);
    });
    return order.map((name) => ({ name, slug: slugify(name), count: counts.get(name)! }));
  }, []);

  const [active, setActive] = useState<string>("featured");

  const visibleProjects = useMemo(() => {
    if (active === "featured") return projectsData.slice(0, FEATURED_COUNT);
    return projectsData.filter((p) => slugify(p.category) === active);
  }, [active]);

  return (
    <section id="work" className="relative py-28 border-t border-line overflow-hidden">
      {/* Decorative glow accents */}
      <div className="pointer-events-none absolute -top-24 right-0 h-[380px] w-[380px] rounded-full bg-accent/15 glow-blob" />
      <div className="pointer-events-none absolute bottom-0 -left-24 h-[320px] w-[320px] rounded-full bg-accent-2/15 glow-blob" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-accent-2 uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              Our Latest Projects
            </p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
              Empowering businesses through technology innovation
            </h2>
          </div>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground shrink-0"
          >
            View all projects
            <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Category tabs with animated active pill */}
        <div className="mt-10 flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => setActive("featured")}
            className={`relative whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              active === "featured"
                ? "border-transparent"
                : "border-line bg-surface hover:border-accent/50 hover:text-foreground"
            }`}
          >
            {active === "featured" && (
              <motion.span
                layoutId="home-projects-active-pill"
                className="absolute inset-0 rounded-full bg-accent shadow-sm"
                transition={{ type: "spring", stiffness: 400, damping: 32 }}
              />
            )}
            <span className={`relative z-10 ${active === "featured" ? "text-white" : "text-muted"}`}>
              Featured
            </span>
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActive(cat.slug)}
              className={`relative whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                active === cat.slug
                  ? "border-transparent"
                  : "border-line bg-surface hover:border-accent/50 hover:text-foreground"
              }`}
            >
              {active === cat.slug && (
                <motion.span
                  layoutId="home-projects-active-pill"
                  className="absolute inset-0 rounded-full bg-accent shadow-sm"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className={`relative z-10 ${active === cat.slug ? "text-white" : "text-muted"}`}>
                {cat.name}
                <span className="ml-1.5 text-xs opacity-70">{cat.count}</span>
              </span>
            </button>
          ))}
        </div>

        {/* Animated project grid */}
        <div className="mt-10 min-h-[200px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {visibleProjects.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
