"use client";

import { motion } from "framer-motion";
import { ClipboardList, FileText, Rocket, CheckCircle2 } from "lucide-react";
import { servicesProcess } from "@/data/content";
import SpotlightCard from "@/components/SpotlightCard";

const icons = [ClipboardList, FileText, Rocket, CheckCircle2];

export default function ServicesProcess() {
  return (
    <section className="relative py-24 lg:py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-accent-2 uppercase">Working Process</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
            How AlphaSoft delivers your project, start to finish
          </h2>
        </div>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-11 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesProcess.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <SpotlightCard className="h-full card-border card-hover rounded-2xl bg-surface p-7 hover:border-accent/50 transition-colors block">
                    <div className="flex items-center justify-between">
                      <span className="h-11 w-11 rounded-xl bg-gradient-to-br from-accent to-accent-2 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-white" />
                      </span>
                      <span className="text-4xl font-semibold text-line select-none">{item.step}</span>
                    </div>
                    <h3 className="mt-5 text-lg font-medium">{item.title}</h3>
                    <p className="mt-3 text-sm text-muted leading-relaxed">{item.description}</p>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
