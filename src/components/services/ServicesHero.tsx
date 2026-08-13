"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, Smartphone, Globe, Cloud, Bot, Layers } from "lucide-react";

const icons = [
  { Icon: Smartphone, label: "App Development" },
  { Icon: Globe, label: "Web Development" },
  { Icon: Cloud, label: "Cloud & DevOps" },
  { Icon: Bot, label: "AI Automation" },
];

export default function ServicesHero() {
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
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground">Services</span>
            </motion.nav>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-8 text-xs font-semibold tracking-widest text-accent-2 uppercase"
            >
              Services
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl leading-[1.08] font-semibold tracking-tight text-gradient text-balance"
            >
              Comprehensive IT solutions and software development services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-2xl text-lg text-muted text-balance"
            >
              From mobile apps to enterprise infrastructure twelve specialized
              service lines, one team accountable for the outcome.
            </motion.p>
          </div>

          <div className="hidden lg:block lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative h-[380px]"
            >
              <div className="absolute top-1/2 right-16 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-accent-2/20 glow-blob" />

              <div className="absolute inset-0 grid grid-cols-2 gap-5 max-w-[320px] mx-auto">
                {icons.map(({ Icon, label }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className={`card-border card-hover rounded-2xl bg-surface p-5 flex flex-col items-start justify-between h-[140px] ${i % 2 === 0 ? "mt-6" : "-mt-6"
                      }`}
                  >
                    <span className="h-10 w-10 rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-accent-2" />
                    </span>
                    <p className="text-sm font-medium leading-snug">{label}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 card-border card-hover rounded-full bg-background px-5 py-2.5 flex items-center gap-2 shadow-lg"
              >
                <Layers className="h-4 w-4 text-accent-2" />
                <span className="text-sm font-medium">12 Services</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
