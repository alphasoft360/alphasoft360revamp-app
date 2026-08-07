"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiLaravel, SiPython, SiDocker, SiKubernetes,
} from "react-icons/si";
import {
  FaAws, FaLinkedinIn, FaGithub, FaXTwitter, FaFacebookF, FaInstagram, FaYoutube,
} from "react-icons/fa6";
import type { IconType } from "react-icons";
import { footerLinks, footerTech, socials, contact } from "@/data/content";

const techIcons: Record<string, IconType> = {
  react: SiReact,
  nextdotjs: SiNextdotjs,
  nodedotjs: SiNodedotjs,
  laravel: SiLaravel,
  python: SiPython,
  aws: FaAws,
  docker: SiDocker,
  kubernetes: SiKubernetes,
};

const techLabels: Record<string, string> = {
  react: "React",
  nextdotjs: "Next.js",
  nodedotjs: "Node.js",
  laravel: "Laravel",
  python: "Python",
  aws: "AWS",
  docker: "Docker",
  kubernetes: "Kubernetes",
};

const socialIcons: Record<string, IconType> = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  x: FaXTwitter,
  facebook: FaFacebookF,
  instagram: FaInstagram,
  youtube: FaYoutube,
};

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h3 className="text-xs font-semibold tracking-widest uppercase text-muted">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden py-20 lg:py-24">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full bg-accent/15 blur-[110px]" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl card-border bg-gradient-to-br from-surface to-accent/[0.06] p-10 sm:p-14 text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
              Ready to build your next digital product?
            </h2>
            <p className="mt-4 text-muted max-w-xl mx-auto text-balance">
              Tell us about your idea and our team will help you scope, design, and
              ship it from the first sketch to production.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Get Started
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="/contact" className="btn-secondary">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="relative border-t border-line">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12"
          >
            <div className="col-span-2 sm:col-span-3 lg:col-span-2">
              <a href="/" className="inline-flex">
                <Image
                  src="/brand/logo-alt.png"
                  alt="AlphaSoft360"
                  width={168}
                  height={73}
                  className="h-16 w-auto"
                />
              </a>
              <p className="mt-5 text-sm text-muted leading-relaxed max-w-xs">
                AlphaSoft360 is a technology partner for founders and enterprises —
                building software, cloud, and AI-driven products for over a decade.
              </p>
              <p className="mt-3 text-xs font-medium tracking-wide text-accent-2">
                Building the future with modern technology.
              </p>

              <div className="mt-6 flex items-center gap-2.5">
                {socials.map((social) => {
                  const Icon = socialIcons[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="h-9 w-9 rounded-full border border-line flex items-center justify-center text-muted hover:text-foreground hover:bg-surface hover:border-accent/50 hover:-translate-y-0.5 transition-all"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            <FooterColumn title="Company" links={footerLinks.company} />
            <FooterColumn title="Services" links={footerLinks.services} />

            <div>
              <h3 className="text-xs font-semibold tracking-widest uppercase text-muted">Technologies</h3>
              <ul className="mt-5 space-y-3">
                {footerTech.map((slug) => {
                  const Icon = techIcons[slug];
                  return (
                    <li key={slug} className="flex items-center gap-2.5 text-sm text-muted">
                      <Icon className="h-3.5 w-3.5 text-muted shrink-0" />
                      {techLabels[slug]}
                    </li>
                  );
                })}
              </ul>
            </div>

            <FooterColumn title="Resources" links={footerLinks.resources} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-14 pt-10 border-t border-line grid sm:grid-cols-3 gap-6"
          >
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-3 text-sm text-muted hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4 text-accent-2 shrink-0" />
              {contact.email}
            </a>
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 text-sm text-muted hover:text-foreground transition-colors"
            >
              <Phone className="h-4 w-4 ml-0 lg:ml-10 text-accent-2 shrink-0" />
              {contact.phone}
            </a>
            <span className="flex items-center gap-3 text-sm text-muted">
              <MapPin className="h-4 w-4 text-accent-2 shrink-0" />
              {contact.location}
            </span>
            {/* <span className="flex items-center gap-3 text-sm text-muted sm:col-span-3">
              <Clock className="h-4 w-4 text-accent-2 shrink-0" />
              {contact.hours}
            </span> */}
          </motion.div>
        </div>

        <div className="border-t border-line">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
            <p>© {new Date().getFullYear()} AlphaSoft360. All rights reserved.</p>
            <nav aria-label="Legal" className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="/cookies" className="hover:text-foreground transition-colors">Cookies Policy</a>
              <a href="/sitemap-page" className="hover:text-foreground transition-colors">Sitemap</a>
            </nav>
            {/* <p>Built with ❤️ using modern web technologies.</p> */}
          </div>
        </div>
      </footer>
    </div>
  );
}
