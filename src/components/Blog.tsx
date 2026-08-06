"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code, Cloud, ShieldCheck } from "lucide-react";
import { articles } from "@/data/content";
import SpotlightCard from "./SpotlightCard";

const icons = [Code, Cloud, ShieldCheck];
const accents = ["from-accent to-accent-2", "from-accent-2 to-emerald-400", "from-fuchsia-500 to-accent"];

export default function Blog() {
  return (
    <section id="insights" className="relative py-28 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-accent-2 uppercase">Latest Articles</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
            Insights & technology updates
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {articles.map((article, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.a
                key={article.title}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <SpotlightCard className="group h-full card-border card-hover rounded-2xl bg-surface overflow-hidden hover:border-accent/50 transition-colors flex flex-col block">
                  <div className={`h-1.5 w-full bg-gradient-to-r ${accents[i % accents.length]}`} />
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center justify-between">
                      <span className="h-10 w-10 rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 flex items-center justify-center">
                        <Icon className="h-[18px] w-[18px] text-accent-2" />
                      </span>
                      <span className="text-xs text-muted">{article.date}</span>
                    </div>
                    <span className="mt-5 text-xs uppercase tracking-wide text-accent-2">{article.tag}</span>
                    <h3 className="mt-2 text-lg font-medium leading-snug flex-1">{article.title}</h3>
                    <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-2">{article.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                      Read more
                      <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </SpotlightCard>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
