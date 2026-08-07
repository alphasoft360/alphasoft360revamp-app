"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Sparkles } from "lucide-react";
import projectsData from "@/data/projectsData";

export default function ProjectsHero() {
  const preview = projectsData.slice(0, 3);

  return (
    <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-24">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.nav
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-sm text-muted"
            >
              <a href="/" className="hover:text-foreground transition-colors">Home</a>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground">Projects</span>
            </motion.nav>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-8 text-xs font-semibold tracking-widest text-accent-2 uppercase"
            >
              Our Projects — {projectsData.length} Shipped
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl leading-[1.08] font-semibold tracking-tight text-gradient text-balance"
            >
              Explore our portfolio of innovative solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-2xl text-lg text-muted text-balance"
            >
              Successful projects across e-commerce, education, mobile, and
              startup platforms built end to end, from first sketch to launch.
            </motion.p>
          </div>

          <div className="hidden lg:block lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative h-[380px]"
            >
              <div className="absolute top-1/2 right-16 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-accent/20 glow-blob" />

              {preview.map((project, i) => {
                const rotate = ["-rotate-6", "rotate-3", "-rotate-2"][i];
                const pos = [
                  "top-0 left-4 w-[210px] z-10",
                  "top-16 right-0 w-[220px] z-20",
                  "bottom-0 left-16 w-[200px] z-30",
                ][i];
                return (
                  <motion.div
                    key={project.slug ?? project.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
                    className={`absolute ${pos} ${rotate} card-border card-hover rounded-2xl overflow-hidden bg-surface`}
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="220px"
                        className="object-cover object-top"
                      />
                    </div>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="absolute -bottom-2 right-0 z-40 card-border card-hover rounded-full bg-background px-5 py-2.5 flex items-center gap-2 shadow-lg"
              >
                <Sparkles className="h-4 w-4 text-accent-2" />
                <span className="text-sm font-medium">{projectsData.length} Projects Shipped</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
