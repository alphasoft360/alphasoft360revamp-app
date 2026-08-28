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
          {/* Featured Large 1st Card (Dark Themed) */}
          <MotionLink
            href={`/projects/${featured.slug}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 lg:row-span-2"
          >
            <SpotlightCard className="group h-full rounded-3xl bg-[#0b0f19] border border-white/10 hover:border-accent/60 transition-all duration-300 overflow-hidden shadow-xl block">
              <div className="relative h-64 lg:h-full overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 66vw"
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div className="text-white">
                    <span className="text-xs uppercase tracking-wider font-semibold text-accent-2">{featured.category}</span>
                    <h3 className="mt-1 text-2xl font-semibold text-white">{featured.name}</h3>
                    <p className="mt-2 text-sm text-gray-300/90 leading-relaxed max-w-md">{featured.description}</p>
                  </div>
                  <span className="shrink-0 h-10 w-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors text-white">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </SpotlightCard>
          </MotionLink>

          {/* Small Cards (Now Dark Themed to Match 1st Card) */}
          {rest.map((project, i) => (
            <MotionLink
              href={`/projects/${project.slug}`}
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
            >
              <SpotlightCard className="group h-full rounded-2xl bg-[#0b0f19] border border-white/10 hover:border-accent/60 transition-all duration-300 overflow-hidden shadow-xl block">
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-[#0b0f19]/30 to-transparent" />
                </div>
                <div className="p-6 pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-semibold text-accent-2">{project.category}</span>
                    <ArrowUpRight className="h-4 w-4 text-gray-400 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="mt-2.5 font-semibold text-base text-white group-hover:text-accent transition-colors">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-300/80 leading-relaxed line-clamp-2">
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
