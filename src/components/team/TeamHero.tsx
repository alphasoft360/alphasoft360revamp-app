"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Users } from "lucide-react";
import teamMembers from "@/data/teamData";

export default function TeamHero() {
  const preview = teamMembers.slice(0, 5);

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
              <span className="text-foreground">Team</span>
            </motion.nav>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-8 text-xs font-semibold tracking-widest text-accent-2 uppercase"
            >
              Our Team — {teamMembers.length} People
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl leading-[1.08] font-semibold tracking-tight text-gradient text-balance"
            >
              The people building AlphaSoft360
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-2xl text-lg text-muted text-balance"
            >
              A team of engineers and designers spanning leadership, core
              development, and the interns learning alongside them.
            </motion.p>
          </div>

          <div className="hidden lg:block lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative h-[380px] flex flex-col items-center justify-center"
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[320px] w-[320px] rounded-full bg-accent/20 glow-blob" />

              <div className="relative flex items-center">
                {preview.map((member, i) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className={`relative h-20 w-20 rounded-full overflow-hidden border-4 border-background card-hover ${
                      i > 0 ? "-ml-6" : ""
                    }`}
                    style={{ zIndex: preview.length - i }}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + preview.length * 0.1 }}
                  className="relative -ml-6 h-20 w-20 rounded-full border-4 border-background bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center text-white text-sm font-semibold"
                >
                  +{teamMembers.length - preview.length}
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-8 card-border card-hover rounded-full bg-surface px-5 py-2.5 flex items-center gap-2"
              >
                <Users className="h-4 w-4 text-accent-2" />
                <span className="text-sm font-medium">Leadership · Team · Interns</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
