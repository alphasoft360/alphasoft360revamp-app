"use client";

import { motion } from "framer-motion";
import {
  Code2, Globe, BarChart3, Cloud, PenTool, Server, ArrowUpRight,
} from "lucide-react";
import { services } from "@/data/content";
import SpotlightCard from "./SpotlightCard";

const icons = [Code2, Globe, BarChart3, Cloud, PenTool, Server];

export default function Services() {
  return (
    <section id="services" className="relative py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest text-accent-2 uppercase">Services</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
              All the IT solutions your business needs, in one place
            </h2>
          </div>
          <a
            href="/services"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground shrink-0"
          >
            View all services
            <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = icons[i % icons.length];
            const isFeatured = i === 0 || i === 3;
            const colSpan = isFeatured ? "md:col-span-2 lg:col-span-2" : "";
            
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className={colSpan}
              >
                <SpotlightCard className={`group relative h-full card-border card-hover rounded-2xl bg-surface ${isFeatured ? 'p-10' : 'p-8'} overflow-hidden hover:border-accent/50 transition-colors block`}>
                  <span className={`absolute top-6 right-7 font-semibold text-line select-none leading-none ${isFeatured ? 'text-6xl' : 'text-5xl'}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className={`relative rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 flex items-center justify-center group-hover:from-accent group-hover:to-accent-2 transition-all ${isFeatured ? 'h-16 w-16' : 'h-12 w-12'}`}>
                    <Icon className={`text-accent-2 group-hover:text-white transition-colors ${isFeatured ? 'h-7 w-7' : 'h-5 w-5'}`} />
                  </div>
                  <h3 className={`relative mt-6 font-medium ${isFeatured ? 'text-2xl' : 'text-lg'}`}>{service.title}</h3>
                  <p className={`relative mt-3 text-muted leading-relaxed ${isFeatured ? 'text-base' : 'text-sm'}`}>{service.description}</p>
                  <a
                    href="/services"
                    className={`relative mt-5 inline-flex items-center gap-1.5 font-medium text-foreground ${isFeatured ? 'text-base' : 'text-sm'}`}
                  >
                    Learn more
                    <ArrowUpRight className={`group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${isFeatured ? 'h-4 w-4' : 'h-3.5 w-3.5'}`} />
                  </a>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
