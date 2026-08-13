"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, MessageCircle, Clock, CheckCheck } from "lucide-react";
import { contact } from "@/data/content";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-16 lg:pt-48 lg:pb-20">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.nav
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              aria-label="Breadcrumb"
              className="flex items-center gap-1.5 text-sm text-muted"
            >
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground">Contact</span>
            </motion.nav>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="mt-8 text-xs font-semibold tracking-widest text-accent-2 uppercase"
            >
              Contact Us
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 max-w-3xl text-4xl sm:text-5xl lg:text-6xl leading-[1.08] font-semibold tracking-tight text-gradient text-balance"
            >
              Let&apos;s build something together
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-6 max-w-2xl text-lg text-muted text-balance"
            >
              Send us a message and our team will get back to you within one
              business day or chat with us directly on WhatsApp.
            </motion.p>
          </div>

          <div className="hidden lg:block lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="relative h-[340px]"
            >
              <div className="absolute top-1/2 right-10 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-accent-2/20 glow-blob" />

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="absolute top-2 right-2 w-[300px] rotate-2 card-border card-hover rounded-2xl bg-surface p-5"
              >
                <div className="flex items-center gap-2.5">
                  <span className="h-9 w-9 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                    <MessageCircle className="h-4 w-4 text-accent-2" />
                  </span>
                  <div>
                    <p className="text-sm font-medium">AlphaSoft360</p>
                    <p className="text-xs text-muted">Typically replies within a day</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted leading-relaxed rounded-xl rounded-tl-sm bg-background px-4 py-3">
                  Hi! Tell us a bit about your project and we&apos;ll get back
                  to you shortly. 👋
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.55 }}
                className="absolute bottom-6 left-0 -rotate-3 card-border card-hover rounded-2xl bg-surface px-5 py-4 flex items-center gap-3"
              >
                <span className="h-10 w-10 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5 text-accent-2" />
                </span>
                <div>
                  <p className="text-sm font-medium leading-none">{contact.hours}</p>
                  <p className="text-xs text-muted mt-1">Working hours</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="absolute bottom-0 right-6 card-border card-hover rounded-full bg-background px-4 py-2 flex items-center gap-2 shadow-lg"
              >
                <CheckCheck className="h-4 w-4 text-accent-2" />
                <span className="text-xs font-medium">1 business day reply</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
