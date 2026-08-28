"use client";

import React, { useEffect, useState } from "react";
import { List, ChevronRight, Compass } from "lucide-react";

export type TocSection = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  subItems?: { id: string; label: string }[];
};

export default function TableOfContents({ sections }: { sections: TocSection[] }) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");

  useEffect(() => {
    // Collect all target element IDs
    const allIds: string[] = [];
    sections.forEach((sec) => {
      allIds.push(sec.id);
      if (sec.subItems) {
        sec.subItems.forEach((sub) => allIds.push(sub.id));
      }
    });

    const observerCallback: IntersectionObserverCallback = (entries) => {
      // Find the entry highest up in viewport that is intersecting
      const visibleEntries = entries.filter((entry) => entry.isIntersecting);

      if (visibleEntries.length > 0) {
        // Pick the top-most visible section
        const topEntry = visibleEntries.reduce((prev, current) => {
          return prev.boundingClientRect.top < current.boundingClientRect.top ? prev : current;
        });
        setActiveId(topEntry.target.id);
      }
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-100px 0px -55% 0px",
      threshold: [0, 0.2, 0.5, 1.0],
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    allIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [sections]);

  const scrollToId = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -110; // Sticky header offset
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setActiveId(id);
    }
  };

  return (
    <div className="w-full">
      {/* Mobile Bar View (visible on mobile / tablet) */}
      <div className="lg:hidden sticky top-20 z-30 mb-8 bg-surface/90 backdrop-blur-md border border-line rounded-2xl p-3 shadow-md">
        <div className="flex items-center gap-2 mb-2 px-1 text-xs font-semibold text-accent-2 uppercase tracking-wider">
          <Compass className="h-3.5 w-3.5" />
          <span>Quick Navigation</span>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar text-xs">
          {sections.map((sec) => {
            const isActive = activeId === sec.id || sec.subItems?.some((sub) => sub.id === activeId);
            return (
              <button
                key={sec.id}
                onClick={(e) => scrollToId(e, sec.id)}
                className={`whitespace-nowrap px-3 py-1.5 rounded-full font-medium transition-all ${
                  isActive
                    ? "bg-accent text-white shadow-sm"
                    : "bg-background text-muted hover:text-foreground border border-line"
                }`}
              >
                {sec.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Desktop Sticky Sidebar (visible on lg+) */}
      <div className="hidden lg:block sticky top-28 rounded-2xl card-border bg-surface p-6 shadow-md">
        <div className="flex items-center justify-between border-b border-line/60 pb-4 mb-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
            <List className="h-4 w-4 text-accent" />
            <span>On This Page</span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-accent/10 text-accent font-medium">
            TOC
          </span>
        </div>

        <nav className="relative space-y-1">
          {sections.map((sec) => {
            const isMainActive = activeId === sec.id;
            const isSubActive = sec.subItems?.some((sub) => sub.id === activeId);
            const isActive = isMainActive || isSubActive;

            return (
              <div key={sec.id} className="space-y-1">
                <a
                  href={`#${sec.id}`}
                  onClick={(e) => scrollToId(e, sec.id)}
                  className={`group flex items-center justify-between px-3 py-2 text-xs font-medium rounded-xl transition-all ${
                    isMainActive
                      ? "bg-accent/10 text-accent font-semibold border border-accent/20"
                      : isActive
                      ? "text-accent font-medium"
                      : "text-muted hover:text-foreground hover:bg-background/80"
                  }`}
                >
                  <span className="truncate flex items-center gap-2">
                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-all ${
                        isMainActive
                          ? "bg-accent scale-125"
                          : isActive
                          ? "bg-accent-2"
                          : "bg-line group-hover:bg-muted"
                      }`}
                    />
                    {sec.label}
                  </span>
                  {sec.subItems && sec.subItems.length > 0 && (
                    <ChevronRight
                      className={`h-3 w-3 transition-transform ${
                        isActive ? "rotate-90 text-accent" : "text-muted/50"
                      }`}
                    />
                  )}
                </a>

                {/* Sub-items (Topics inside Biography/Section) */}
                {sec.subItems && sec.subItems.length > 0 && (
                  <div className="pl-4 ml-2.5 border-l border-line/60 space-y-1 my-1">
                    {sec.subItems.map((sub) => {
                      const isThisSubActive = activeId === sub.id;
                      return (
                        <a
                          key={sub.id}
                          href={`#${sub.id}`}
                          onClick={(e) => scrollToId(e, sub.id)}
                          className={`block px-2.5 py-1 text-[11px] rounded-lg transition-all truncate ${
                            isThisSubActive
                              ? "text-accent font-semibold bg-accent/5"
                              : "text-muted hover:text-foreground hover:bg-background/50"
                          }`}
                        >
                          {sub.label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
