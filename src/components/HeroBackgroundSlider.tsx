"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const slides = [
  { src: "/hero-slides/slide-1-team.jpg", alt: "Software engineers collaborating around a workstation in a modern office" },
  { src: "/hero-slides/slide-2-workspace.jpg", alt: "Clean modern developer workspace with a keyboard and dual monitors" },
  { src: "/hero-slides/slide-3-servers.jpg", alt: "Server and networking equipment rack with cabling" },
  { src: "/hero-slides/slide-4-ai-chip.jpg", alt: "AI chip on a circuit board" },
];

const SLIDE_DURATION = 6500;
const FADE_DURATION = 2.2;

export default function HeroBackgroundSlider() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#05060d]">
      {slides.map((slide, i) => {
        const isActive = i === index;
        return (
          <motion.div
            key={slide.src}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: reduceMotion ? 0 : FADE_DURATION, ease: [0.42, 0, 0.2, 1] }}
          >
            <motion.div
              className="absolute inset-0"
              initial={false}
              animate={{ scale: isActive && !reduceMotion ? 1.08 : 1 }}
              transition={{ duration: SLIDE_DURATION / 1000, ease: "easeOut" }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        );
      })}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
    </div>
  );
}
