"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { contact } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 border-t border-line overflow-hidden">
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full bg-accent/15 glow-blob" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl card-border bg-surface p-10 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold tracking-widest text-accent-2 uppercase">Chat With Us 24/7</p>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
                Have an idea or project in mind?
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                Chat with us on WhatsApp or schedule an appointment. Our
                representative will reply to you shortly.
              </p>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 btn-primary"
              >
                Let&apos;s Chat
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5"
            >
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-4 rounded-2xl border border-line bg-background/40 p-5 card-hover hover:border-accent/50"
              >
                <span className="h-11 w-11 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-accent-2" />
                </span>
                <div>
                  <p className="text-xs text-muted">Call us</p>
                  <p className="text-sm font-medium mt-0.5">{contact.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-4 rounded-2xl border border-line bg-background/40 p-5 card-hover hover:border-accent/50"
              >
                <span className="h-11 w-11 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-accent-2" />
                </span>
                <div>
                  <p className="text-xs text-muted">Email us</p>
                  <p className="text-sm font-medium mt-0.5">{contact.email}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-line bg-background/40 p-5">
                <span className="h-11 w-11 rounded-xl bg-accent/15 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-accent-2" />
                </span>
                <div>
                  <p className="text-xs text-muted">Our location</p>
                  <p className="text-sm font-medium mt-0.5">{contact.location}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
