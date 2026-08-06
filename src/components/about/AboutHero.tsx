"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight, Users, Award } from "lucide-react";

export default function AboutHero() {
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
              <span className="text-foreground">About</span>
            </motion.nav>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-8 text-xs font-semibold tracking-widest text-accent-2 uppercase"
            >
              About Us
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl leading-[1.08] font-semibold tracking-tight text-gradient text-balance"
            >
              Empowering business growth through innovative technology
            </motion.h1>
          </div>

          <div className="hidden lg:block lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative h-[380px]"
            >
              <div className="absolute top-1/2 right-10 -translate-y-1/2 h-[320px] w-[320px] rounded-full bg-accent/20 glow-blob" />

              <div className="absolute top-4 right-4 w-[280px] rotate-3 rounded-3xl overflow-hidden card-border card-hover">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/brand/hero-2.jpeg"
                    alt="AlphaSoft360 team at work"
                    fill
                    sizes="280px"
                    className="object-cover"
                  />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute bottom-6 left-0 -rotate-3 card-border card-hover rounded-2xl bg-surface px-5 py-4 flex items-center gap-3"
              >
                <span className="h-10 w-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                  <Award className="h-5 w-5 text-accent-2" />
                </span>
                <div>
                  <p className="text-lg font-semibold text-gradient leading-none">10+</p>
                  <p className="text-xs text-muted mt-1">Years of expertise</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.65 }}
                className="absolute top-10 left-0 rotate-2 card-border card-hover rounded-2xl bg-surface px-5 py-4 flex items-center gap-3"
              >
                <span className="h-10 w-10 rounded-xl bg-accent-2/15 flex items-center justify-center shrink-0">
                  <Users className="h-5 w-5 text-accent-2" />
                </span>
                <div>
                  <p className="text-lg font-semibold text-gradient leading-none">12</p>
                  <p className="text-xs text-muted mt-1">People on the team</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
