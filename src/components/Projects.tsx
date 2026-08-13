"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";
import SpotlightCard from "./SpotlightCard";

const MotionLink = motion(Link);

export default function Projects() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p !== featured);

  return (
    <section id="work" className="relative py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-accent-2 uppercase">Our Latest Projects</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
            Empowering businesses through technology innovation
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-3 gap-5">
          <MotionLink
            href={`/projects/${featured.slug}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 lg:row-span-2"
          >
            <SpotlightCard className="group h-full card-border card-hover rounded-3xl bg-surface overflow-hidden hover:border-accent/50 transition-colors block">
              <div className="relative h-64 lg:h-full overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 66vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-background/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div className="text-white">
                    <span className="text-xs uppercase tracking-wide text-accent-2">{featured.category}</span>
                    <h3 className="mt-1 text-2xl font-medium">{featured.name}</h3>
                    <p className="mt-2 text-sm  leading-relaxed max-w-md">{featured.description}</p>
                  </div>
                  <span className="shrink-0 h-10 w-10 rounded-full bg-background/70 backdrop-blur-md border border-line flex items-center justify-center group-hover:bg-accent transition-colors">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </SpotlightCard>
          </MotionLink>

          {rest.map((project, i) => (
            <MotionLink
              href={`/projects/${project.slug}`}
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            >
              <SpotlightCard className="group h-full card-border card-hover rounded-2xl bg-surface overflow-hidden hover:border-accent/50 transition-colors block">
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wide text-accent-2">{project.category}</span>
                    <ArrowUpRight className="h-4 w-4 text-muted group-hover:text-foreground transition-colors" />
                  </div>
                  <h3 className="mt-3 font-medium">{project.name}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </SpotlightCard>
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
}
