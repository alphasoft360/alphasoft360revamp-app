import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LifeBuoy, Mail, Phone, MessageSquare, Clock, ShieldCheck, ArrowUpRight } from "lucide-react";
import { contact } from "@/data/content";

export const metadata: Metadata = {
  title: "Support Center — AlphaSoft360",
  description:
    "Get technical support, system assistance, and SLA maintenance for AlphaSoft360 products and custom software solutions.",
  alternates: {
    canonical: "https://alphasoft360.com/support",
  },
  keywords: [
    "AlphaSoft360 Support",
    "Technical Support Center",
    "SLA Software Maintenance",
    "IT Support Pakistan",
    "24/7 Incident Response",
    "Server Monitoring SLA"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Support Center — AlphaSoft360",
    description:
      "Get technical support, system assistance, and SLA maintenance for AlphaSoft360 products and custom software solutions.",
    url: "https://alphasoft360.com/support",
    siteName: "AlphaSoft360",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://alphasoft360.com/brand/hero-2.jpeg",
        width: 1200,
        height: 630,
        alt: "AlphaSoft360 Support Center",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Support Center — AlphaSoft360",
    description:
      "Get technical support, system assistance, and SLA maintenance for AlphaSoft360 products and custom software solutions.",
    images: ["https://alphasoft360.com/brand/hero-2.jpeg"],
  },
};

const supportChannels = [
  {
    icon: Mail,
    title: "Email Technical Support",
    description: "For non-urgent technical questions, bug reports, and general inquiries.",
    action: `mailto:${contact.email}`,
    label: contact.email,
  },
  {
    icon: Phone,
    title: "Direct Phone Support",
    description: "Immediate telephone assistance for critical production issues and SLA clients.",
    action: `tel:${contact.phone.replace(/\s/g, "")}`,
    label: contact.phone,
  },
  {
    icon: MessageSquare,
    title: "Live Instant WhatsApp Chat",
    description: "Instant chat support for ongoing active project development sprints.",
    action: contact.whatsapp,
    label: "Start WhatsApp Chat",
  },
];

export default function SupportPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="text-xs font-semibold tracking-widest text-accent-2 uppercase">
                Support &amp; Maintenance
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gradient text-balance">
                Help &amp; Technical Support Center
              </h1>
              <p className="mt-6 text-lg text-muted text-balance">
                Our engineering team is committed to keeping your software, cloud platforms, and mobile applications fast, secure, and running smoothly.
              </p>
            </div>

            {/* Cards */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              {supportChannels.map((channel, i) => {
                const Icon = channel.icon;
                return (
                  <div key={i} className="card-border card-hover rounded-2xl bg-surface p-8 flex flex-col justify-between">
                    <div>
                      <div className="h-12 w-12 rounded-xl bg-accent-2/10 flex items-center justify-center text-accent-2 mb-6">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">{channel.title}</h3>
                      <p className="mt-2 text-sm text-muted leading-relaxed">{channel.description}</p>
                    </div>
                    <a
                      href={channel.action}
                      target={channel.action.startsWith("http") ? "_blank" : undefined}
                      rel={channel.action.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="mt-8 btn-secondary text-xs w-full justify-center"
                    >
                      {channel.label}
                      <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
                    </a>
                  </div>
                );
              })}
            </div>

            {/* SLA Guarantee Box */}
            <div className="mt-16 card-border rounded-3xl bg-surface p-8 sm:p-12 grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8">
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-accent-2 uppercase tracking-wider mb-2">
                  <ShieldCheck className="h-4 w-4" /> 24/7 SLA Protection
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Enterprise Support Agreements</h2>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  For enterprise clients with dedicated SLA agreements, our incident response team provides guaranteed response times for critical vulnerabilities and uptime maintenance.
                </p>
              </div>
              <div className="md:col-span-4 flex justify-start md:justify-end">
                <Link href="/contact" className="btn-primary text-xs">
                  Request SLA Terms
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
