"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ServiceHeroVisualProps {
  mainIcon: ReactNode;
  title: string;
  items: { icon: ReactNode; label: string }[];
}

export default function ServiceHeroVisual({
  mainIcon,
  title,
  items,
}: ServiceHeroVisualProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.15 }}
      className="relative h-[380px]"
    >
      <div className="absolute top-1/2 right-16 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-accent-2/20 glow-blob" />

      <div className="absolute inset-0 flex flex-col justify-center gap-5 max-w-[320px] mx-auto">
        {items.map(({ icon, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
            className={`card-border card-hover rounded-2xl bg-surface p-5 flex items-center gap-4 ${
              i % 2 === 0 ? "ml-0" : "ml-10"
            }`}
          >
            <span className="h-10 w-10 shrink-0 rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 flex items-center justify-center text-accent-2">
              {icon}
            </span>
            <p className="text-sm font-medium leading-snug">{label}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 card-border card-hover rounded-full bg-background px-5 py-2.5 flex items-center gap-2 shadow-lg text-accent-2"
      >
        {mainIcon}
        <span className="text-sm font-medium text-foreground">{title}</span>
      </motion.div>
    </motion.div>
  );
}
