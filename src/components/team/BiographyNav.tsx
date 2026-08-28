"use client";

import React, { useEffect, useState } from "react";
import { Compass } from "lucide-react";

export type BioTopic = {
  id: string;
  title: string;
};

export default function BiographyNav({ topics }: { topics: BioTopic[] }) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [progressHeightPercentage, setProgressHeightPercentage] = useState<number>(0);

  useEffect(() => {
    if (topics.length === 0) return;

    const handleScroll = () => {
      // Focal target line in viewport (35% down from top)
      const focalLine = window.innerHeight * 0.35;
      let currentIdx = 0;

      for (let i = 0; i < topics.length; i++) {
        const el = document.getElementById(topics[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= focalLine) {
            currentIdx = i;
          }
        }
      }

      setActiveIndex(currentIdx);

      // Dynamic vertical line height percentage
      const total = topics.length;
      if (total > 1) {
        const minPct = 6;
        const maxPct = 100;
        const pct = minPct + (currentIdx / (total - 1)) * (maxPct - minPct);
        setProgressHeightPercentage(Math.min(100, Math.max(minPct, pct)));
      } else {
        setProgressHeightPercentage(100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [topics]);

  const scrollToTopic = (e: React.MouseEvent, id: string, index: number) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -140;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  if (topics.length === 0) return null;

  return (
    <div className="sticky top-32 rounded-2xl card-border bg-surface/95 backdrop-blur-md p-6 shadow-xl border border-line transition-all duration-300">
      {/* Header Badge */}
      <div className="flex items-center justify-between border-b border-line/60 pb-4 mb-5">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <Compass className="h-4 w-4 text-accent" />
          <span>Biography Focus</span>
        </div>
        <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-accent/10 text-accent font-semibold border border-accent/20">
          {activeIndex + 1} / {topics.length}
        </span>
      </div>

      {/* Topics Timeline Track */}
      <div className="relative">
        {/* Background Track Line (Centered on 16px axis) */}
        <div className="absolute left-[15px] top-3 bottom-3 w-[2px] bg-line/70 rounded-full z-0" />

        {/* Dynamic Vertical Progress Bar (Centered on 16px axis) */}
        <div
          className="absolute left-[14px] top-3 w-[4px] bg-gradient-to-b from-accent via-accent-2 to-accent rounded-full transition-all duration-300 ease-out shadow-sm z-0"
          style={{ height: `${progressHeightPercentage}%` }}
        />

        {/* Topic Links List */}
        <nav className="space-y-4">
          {topics.map((topic, idx) => {
            const isActive = idx === activeIndex;
            const isPassed = idx <= activeIndex;

            return (
              <a
                key={topic.id}
                href={`#${topic.id}`}
                onClick={(e) => scrollToTopic(e, topic.id, idx)}
                className={`group relative flex items-center min-h-[26px] pl-8 text-xs transition-colors duration-200 ${
                  isActive
                    ? "text-accent font-semibold"
                    : isPassed
                    ? "text-foreground font-medium hover:text-accent"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {/* Timeline Dot Indicator (Strictly Centered on 16px axis) */}
                <span
                  className={`absolute left-[10px] top-1/2 -translate-y-1/2 h-3 w-3 rounded-full border-2 transition-all duration-300 shrink-0 z-10 origin-center ${
                    isActive
                      ? "bg-accent border-surface shadow-md ring-4 ring-accent/25 scale-125"
                      : isPassed
                      ? "bg-accent-2 border-surface"
                      : "bg-surface border-line group-hover:border-accent"
                  }`}
                />
                {/* Text Label (Translates independently without moving the dot) */}
                <span
                  className={`leading-snug text-[13px] line-clamp-2 transition-transform duration-200 ${
                    isActive ? "translate-x-1" : "group-hover:translate-x-0.5"
                  }`}
                >
                  {topic.title}
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
