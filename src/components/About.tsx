"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { skills } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="relative py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold tracking-widest text-accent-2 uppercase">About Us</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
            We increase business success with technology
          </h2>
          <p className="mt-5 text-muted leading-relaxed">
            With extensive experience in IT services, we specialize in
            developing innovative software applications and mobile
            solutions for clients worldwide — delivering excellence and
            driving digital transformation for over a decade.
          </p>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-5 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 relative rounded-3xl overflow-hidden card-border card-hover min-h-[320px]"
          >
            <Image
              src="/brand/hero-2.jpeg"
              alt="AlphaSoft360 team workspace"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-sm text-foreground/90 leading-relaxed">
                &ldquo;We measure success by the businesses we help build —
                not just the code we ship.&rdquo;
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3 card-border card-hover rounded-3xl bg-surface p-8"
          >
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.label}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-foreground font-medium">{skill.label}</span>
                    <span className="text-muted">{skill.value}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-background overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
