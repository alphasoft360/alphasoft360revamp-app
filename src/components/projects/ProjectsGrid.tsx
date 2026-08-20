"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import projectsData from "@/data/projectsData";
import SpotlightCard from "@/components/SpotlightCard";

const MotionLink = motion(Link);

export default function ProjectsGrid() {
  return (
    <section className="relative py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, i) => {
            const isFeatured = i === 0 || i === 3 || i === 4 || i === 9 || i === 12 || i === 13;
            const colSpan = isFeatured ? "md:col-span-2 lg:col-span-2" : "";
            
            return (
              <MotionLink
                href={`/projects/${project.slug}`}
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 8) * 0.08 }}
                className={`group ${colSpan}`}
              >
                <SpotlightCard className="h-full card-border card-hover rounded-3xl bg-surface overflow-hidden hover:border-accent/50 transition-colors block">
                  <div className="relative h-80 overflow-hidden bg-background">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      priority={i < 2}
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 via-accent/20 to-transparent" /> */}
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
          })}
        </div>
      </div>
    </section>
  );
}
