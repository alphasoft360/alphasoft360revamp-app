"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Briefcase, Award } from "lucide-react";
import { stats } from "@/data/content";
import StatCounter from "./StatCounter";

const iconMap = {
  "Happy Clients": Users,
  "Companies Served": Briefcase,
  "Projects Delivered": TrendingUp,
  "Years of Expertise": Award,
};

export default function Highlight() {
  return (
    <section className="relative py-20 lg:py-28 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-muted text-balance">
            We measure our success by the results we deliver for our clients
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.label as keyof typeof iconMap] || TrendingUp;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="relative p-8 rounded-2xl bg-background border border-line card-hover text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent-2 mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="text-4xl sm:text-5xl font-bold text-gradient mb-2">
                    <StatCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm sm:text-base text-muted font-medium">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
