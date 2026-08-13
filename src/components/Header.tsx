"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { nav, contact } from "@/data/content";

export default function Header({ photoHero = false }: { photoHero?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const overPhotoHero = photoHero && !scrolled;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-lg border-b border-line" : "bg-transparent"
        }`}
    >
      <div className="mx-auto max-w-7xl px-2 lg:px-4 flex items-center justify-between h-18 py-4">
        <Link href="/" className="flex items-center gap-2.5 font-semibold text-lg tracking-tight">
          <Image
            src={overPhotoHero ? "/brand/logo.png" : "/brand/logo-alt.png"}
            alt="AlphaSoft360 Logo"
            width={168}
            height={73}
            className="h-11 lg:h-15 w-auto"
            priority
          />
        </Link>

        <nav
          className={`hidden lg:flex items-center gap-8 text-lg transition-colors duration-300 ${overPhotoHero ? "text-white/90" : "text-muted"
            }`}
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors ${overPhotoHero ? "hover:text-white" : "hover:text-foreground"}`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Start a Project
          <ArrowUpRight className="h-4 w-4" />
        </a>

        <button
          className={`lg:hidden transition-colors ${overPhotoHero ? "text-white" : "text-foreground"}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-line bg-background/95 backdrop-blur-lg px-6 py-6 flex flex-col gap-5">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-base text-muted hover:text-foreground transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium"
          >
            Start a Project
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </header>
  );
}
