"use client";

import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiTailwindcss,
  SiMongodb, SiPostgresql, SiDocker, SiGraphql, SiRedis, SiFirebase,
  SiAngular, SiVuedotjs, SiLaravel, SiApachekafka, SiGooglecloud, SiKubernetes,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import type { IconType } from "react-icons";

const icons: Record<string, { icon: IconType; label: string; color: string }> = {
  aws: { icon: FaAws, label: "AWS", color: "#FF9900" },
  react: { icon: SiReact, label: "React", color: "#61DAFB" },
  nextdotjs: { icon: SiNextdotjs, label: "Next.js", color: "#000000" },
  typescript: { icon: SiTypescript, label: "TypeScript", color: "#3178C6" },
  nodedotjs: { icon: SiNodedotjs, label: "Node.js", color: "#5FA04E" },
  tailwindcss: { icon: SiTailwindcss, label: "TailwindCSS", color: "#38BDF8" },
  mongodb: { icon: SiMongodb, label: "MongoDB", color: "#47A248" },
  postgresql: { icon: SiPostgresql, label: "PostgreSQL", color: "#4169E1" },
  docker: { icon: SiDocker, label: "Docker", color: "#2496ED" },
  graphql: { icon: SiGraphql, label: "GraphQL", color: "#E10098" },
  redis: { icon: SiRedis, label: "Redis", color: "#FF4438" },
  firebase: { icon: SiFirebase, label: "Firebase", color: "#FFCA28" },
  angular: { icon: SiAngular, label: "Angular", color: "#E23237" },
  vuedotjs: { icon: SiVuedotjs, label: "Vue.js", color: "#4FC08D" },
  laravel: { icon: SiLaravel, label: "Laravel", color: "#FF2D20" },
  apachekafka: { icon: SiApachekafka, label: "Kafka", color: "#000000" },
  googlecloud: { icon: SiGooglecloud, label: "Google Cloud", color: "#4285F4" },
  kubernetes: { icon: SiKubernetes, label: "Kubernetes", color: "#326CE5" },
};

function Row({ slugs, reverse = false }: { slugs: string[]; reverse?: boolean }) {
  const looped = [...slugs, ...slugs];
  return (
    <div className="relative">
      <div
        className={`flex w-max gap-4 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {looped.map((slug, i) => {
          const item = icons[slug];
          if (!item) return null;
          const Icon = item.icon;
          return (
            <span
              key={`${slug}-${i}`}
              className="flex items-center gap-2.5 card-border rounded-full bg-surface px-5 py-3 text-sm text-muted whitespace-nowrap hover:border-accent/50 hover:text-foreground transition-colors"
            >
              <Icon className="h-4 w-4 shrink-0" style={{ color: item.color }} />
              {item.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function TechStack({ row1, row2 }: { row1: string[]; row2: string[] }) {
  return (
    <section className="relative py-20 border-t border-line overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-10">
        <p className="text-xs font-semibold tracking-widest text-accent-2 uppercase text-center">
          Trusted by modern frameworks
        </p>
      </div>

      <div className="relative space-y-4">
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <Row slugs={row1} />
        <Row slugs={row2} reverse />
      </div>
    </section>
  );
}
