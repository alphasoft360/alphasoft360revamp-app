"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import projectsData from "@/data/projectsData";
import SpotlightCard from "@/components/SpotlightCard";

const MotionLink = motion.create(Link);

interface RelatedProjectsProps {
  /** Keywords matched (case-insensitive) against each project's category and tech stack. */
  keywords: string[];
  limit?: number;
}

export default function RelatedProjects({ keywords, limit = 3 }: RelatedProjectsProps) {
  const needles = keywords.map((k) => k.toLowerCase());

  const matches = projectsData.filter((project) => {
    const haystack = [project.category, ...project.techStack].join(" ").toLowerCase();
    return needles.some((needle) => haystack.includes(needle));
  });

  const projects = matches.slice(0, limit);

  if (projects.length === 0) return null;

  return (
    <section className="relative py-20 lg:py-24 border-t border-line overflow-hidden">
      <div className="pointer-events-none absolute -top-16 right-0 h-[300px] w-[300px] rounded-full bg-accent/10 glow-blob" />
      <div className="pointer-events-none absolute bottom-0 -left-16 h-[260px] w-[260px] rounded-full bg-accent-2/10 glow-blob" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest text-accent-2 uppercase">
              <Sparkles className="h-3.5 w-3.5" />
              Related Work
            </p>
            <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-balance">
              Projects built with this expertise
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

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <MotionLink
              key={project.slug}
              href={`/projects/${project.slug}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group block"
            >
              <SpotlightCard className="h-full rounded-3xl bg-[#0b0f19] border border-white/10 hover:border-accent/60 transition-all duration-300 overflow-hidden shadow-xl block">
                <div className="relative aspect-[14/9] overflow-hidden bg-[#0b0f19]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className=" group-hover:scale-105 transition-transform duration-500"
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
          ))}
        </div>
      </div>
    </section>
  );
}
