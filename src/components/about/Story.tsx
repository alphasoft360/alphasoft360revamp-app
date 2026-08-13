"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aboutStory } from "@/data/content";

export default function Story() {
  return (
    <section className="relative py-24 lg:py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-6"
          >
            {aboutStory.paragraphs.map((p, i) => (
              <p key={i} className="text-lg text-muted leading-relaxed text-balance first:text-foreground first:font-medium first:text-xl">
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 relative rounded-3xl overflow-hidden card-border card-hover min-h-[320px]"
          >
            <Image
              src="/brand/hero-3.jpeg"
              alt="AlphaSoft360 modern workspace collaboration and agile software development planning"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
