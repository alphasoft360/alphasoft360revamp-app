"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { team } from "@/data/content";

export default function Team() {
  return (
    <section id="team" className="relative py-24 lg:py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest text-accent-2 uppercase">Our Team</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
              The people building AlphaSoft360
            </h2>
          </div>
          <a
            href="/team"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground shrink-0"
          >
            Meet the whole team
            <span className="group-hover:translate-x-0.5 transition-transform">→</span>
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group card-border card-hover rounded-2xl bg-surface overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-medium">{member.name}</h3>
                <p className="mt-1 text-sm text-muted">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
