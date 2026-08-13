"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/content";
import StatCounter from "@/components/StatCounter";

export default function AboutStats() {
  return (
    <section className="relative py-20 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-6 sm:gap-x-0 sm:divide-x sm:divide-line list-none p-0"
        >
          {stats.map((stat) => (
            <li key={stat.label} className="text-center sm:px-4 sm:first:pl-0 sm:last:pr-0">
              <div className="text-3xl sm:text-4xl font-semibold text-gradient">
                <StatCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-sm text-muted">{stat.label}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
