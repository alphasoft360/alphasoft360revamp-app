"use client";

import { motion } from "framer-motion";
import {
  Smartphone, Globe, ShoppingCart, Cloud, Building2, GraduationCap,
  HeartPulse, Bot, Cpu, PenTool, Server, Database, ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { servicesFull } from "@/data/content";
import SpotlightCard from "@/components/SpotlightCard";

const icons: Record<string, LucideIcon> = {
  smartphone: Smartphone,
  globe: Globe,
  "shopping-cart": ShoppingCart,
  cloud: Cloud,
  building: Building2,
  "graduation-cap": GraduationCap,
  "heart-pulse": HeartPulse,
  bot: Bot,
  cpu: Cpu,
  "pen-tool": PenTool,
  server: Server,
  database: Database,
};

export default function ServicesGrid() {
  return (
    <section id="services" className="relative py-24 lg:py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[minmax(280px,auto)]">
          {servicesFull.map((service, i) => {
            const Icon = icons[service.icon];
            const isFeatured = i === 0 || i === 3 || i === 5;
            const colSpan = isFeatured ? "md:col-span-2 lg:col-span-2" : "";
            
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.06 }}
                className={colSpan}
              >
                <SpotlightCard className={`group h-full card-border card-hover rounded-2xl bg-surface ${isFeatured ? 'p-10' : 'p-8'} hover:border-accent/50 transition-colors flex flex-col`}>
                  <div className={`rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 flex items-center justify-center group-hover:from-accent group-hover:to-accent-2 transition-all ${isFeatured ? 'h-16 w-16' : 'h-12 w-12'}`}>
                    <Icon className={`text-accent-2 group-hover:text-white transition-colors ${isFeatured ? 'h-7 w-7' : 'h-5 w-5'}`} />
                  </div>
                  <h3 className={`mt-6 font-medium ${isFeatured ? 'text-2xl' : 'text-lg'}`}>{service.title}</h3>
                  <p className={`mt-3 text-muted leading-relaxed flex-1 ${isFeatured ? 'text-base' : 'text-sm'}`}>{service.description}</p>
                  <a
                    href="/contact"
                    className={`mt-6 inline-flex items-center gap-1.5 font-medium text-foreground ${isFeatured ? 'text-base' : 'text-sm'}`}
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
