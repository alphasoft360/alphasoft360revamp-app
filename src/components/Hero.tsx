"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { contact } from "@/data/content";
import HeroBackgroundSlider from "./HeroBackgroundSlider";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-28 lg:pt-48 lg:pb-40">
      <HeroBackgroundSlider />

      <div className="relative mx-auto max-w-7xl ">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs text-white/90"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent-2" />
            Trusted by businesses across 3 continents, for over a decade
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-8 text-4xl sm:text-6xl lg:text-[5.25rem] leading-[1.05] font-semibold tracking-tight text-gradient-light text-balance"
          >
            Software, cloud &amp; AI engineering that moves your business forward
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-white/80 max-w-2xl text-balance"
          >
            AlphaSoft360 is a technology partner for founders and enterprises
            building web platforms, mobile apps, and AI-driven products with
            the discipline of a decade of shipped work.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          >
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 text-white px-7 py-3.5 text-sm font-medium shadow-lg shadow-accent/20 hover:opacity-90 transition-opacity"
            >
              Schedule Your Appointment
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white hover:bg-white/10 transition-colors"
            >
              View Our Work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
