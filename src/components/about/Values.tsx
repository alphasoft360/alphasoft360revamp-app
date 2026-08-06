"use client";

import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck, Award, TrendingUp } from "lucide-react";
import { values } from "@/data/content";
import SpotlightCard from "@/components/SpotlightCard";

const icons = [Lightbulb, ShieldCheck, Award, TrendingUp];

export default function Values() {
  return (
    <section className="relative py-24 lg:py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-accent-2 uppercase">What Drives Us</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
            The values behind every product we ship
          </h2>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((value, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              >
                <SpotlightCard className="group h-full card-border card-hover rounded-2xl bg-surface p-8 hover:border-accent/50 transition-colors block">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 flex items-center justify-center group-hover:from-accent group-hover:to-accent-2 transition-all">
                    <Icon className="h-5 w-5 text-accent-2 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="mt-6 text-lg font-medium">{value.title}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{value.description}</p>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
