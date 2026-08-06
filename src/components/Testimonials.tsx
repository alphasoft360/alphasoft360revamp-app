"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/content";

const gradients = [
  "from-accent to-accent-2",
  "from-accent-2 to-emerald-400",
  "from-fuchsia-500 to-accent",
  "from-amber-400 to-accent-2",
];

function initials(name: string) {
  return name.split(" ").map((p) => p[0]).join("").slice(0, 2);
}

function Card({ t, i }: { t: (typeof testimonials)[number]; i: number }) {
  return (
    <div className="w-[380px] shrink-0 card-border card-hover rounded-2xl bg-surface p-8 flex flex-col">
      <Quote className="h-6 w-6 text-accent-2" />
      <p className="mt-5 text-sm text-foreground/90 leading-relaxed flex-1">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="mt-6 pt-6 border-t border-line flex items-center gap-3">
        <span
          className={`h-10 w-10 shrink-0 rounded-full bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center text-xs font-semibold text-white`}
        >
          {initials(t.name)}
        </span>
        <div>
          <p className="text-sm font-medium">{t.name}</p>
          <p className="text-xs text-muted mt-0.5">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const half = Math.ceil(testimonials.length / 2);
  const row1 = [...testimonials.slice(0, half), ...testimonials.slice(0, half)];
  const row2 = [...testimonials.slice(half), ...testimonials.slice(half)];

  return (
    <section className="relative py-28 border-t border-line overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold tracking-widest text-accent-2 uppercase">Testimonials</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
            What our clients say about AlphaSoft360
          </h2>
        </motion.div>
      </div>

      <div className="relative mt-14 space-y-5">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-max gap-5 animate-marquee">
          {row1.map((t, i) => (
            <Card t={t} i={i} key={`${t.name}-r1-${i}`} />
          ))}
        </div>
        <div className="flex w-max gap-5 animate-marquee-reverse">
          {row2.map((t, i) => (
            <Card t={t} i={i + half} key={`${t.name}-r2-${i}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
