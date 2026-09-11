import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Smartphone, ArrowRight, CheckCircle2, Zap, Layers } from "lucide-react";
import { getWebPageSchema, getBreadcrumbSchema, getServiceSchema } from "@/lib/schema";
import { contact } from "@/data/content";
import ServiceHeroVisual from "@/components/services/ServiceHeroVisual";

export const metadata: Metadata = {
  title: "Mobile App Development Services | iOS & Android | AlphaSoft360",
  description:
    "Cross-platform and native mobile app development services. We build high-performance React Native and Expo applications for iOS and Android with offline sync and push notifications.",
  alternates: {
    canonical: "https://www.alphasoft360.com/mobile-app-development",
  },
  keywords: [
    "Mobile App Development Services",
    "React Native Development Agency",
    "iOS App Development",
    "Android App Development",
    "Cross-Platform Mobile Apps",
    "Mobile App Developers"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Mobile App Development Services | iOS & Android | AlphaSoft360",
    description:
      "Cross-platform and native mobile app development services. We build high-performance React Native applications for iOS and Android.",
    url: "https://www.alphasoft360.com/mobile-app-development",
    siteName: "AlphaSoft360",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.alphasoft360.com/brand/hero-2.jpeg",
        width: 1200,
        height: 630,
        alt: "AlphaSoft360 Mobile App Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development Services | iOS & Android | AlphaSoft360",
    description:
      "Cross-platform and native mobile app development services.",
    images: ["https://www.alphasoft360.com/brand/hero-2.jpeg"],
  },
};

export default function MobileAppDevPage() {
  const pageUrl = "https://www.alphasoft360.com/mobile-app-development";
  const breadcrumbItems = [
    { name: "Home", url: "https://www.alphasoft360.com" },
    { name: "Mobile App Development", url: pageUrl }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      getWebPageSchema({
        name: "Mobile App Development Services | AlphaSoft360",
        description: "Native and cross-platform mobile application development for iOS and Android using React Native and Expo.",
        url: pageUrl,
        breadcrumbItems
      }),
      getBreadcrumbSchema(breadcrumbItems, pageUrl),
      getServiceSchema({
        name: "Mobile App Development Services",
        description: "Full-lifecycle mobile application engineering for iOS and Android platforms.",
        url: pageUrl,
        serviceType: "Mobile App Development"
      })
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-24 bg-surface-2/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-semibold tracking-widest text-accent-2 uppercase">
                  iOS &amp; Android Engineering
                </span>
                <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-gradient text-balance">
                  Mobile App Development Services
                </h1>
                <p className="mt-6 text-lg text-muted text-balance leading-relaxed">
                  Transform your digital strategy into intuitive, fast-performing mobile applications. We build cross-platform React Native and Expo apps that feel native on every screen size.
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">
                    Build Mobile App <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="hidden lg:block lg:col-span-5">
                <ServiceHeroVisual
                  mainIcon={<Smartphone className="h-4 w-4" />}
                  title="Mobile Apps"
                  items={[
                    { icon: <Smartphone className="h-5 w-5" />, label: "React Native & Expo" },
                    { icon: <Zap className="h-5 w-5" />, label: "Offline Storage & Sync" },
                    { icon: <Layers className="h-5 w-5" />, label: "Native Performance" },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-border rounded-2xl bg-surface p-8">
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <Smartphone className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">React Native &amp; Expo Development</h3>
                <p className="mt-2 text-sm text-muted">Single codebase delivery for iOS and Android with 90%+ code sharing, reduced time-to-market, and native performance.</p>
              </div>
              <div className="card-border rounded-2xl bg-surface p-8">
                <div className="h-10 w-10 rounded-xl bg-accent-2/10 flex items-center justify-center text-accent-2 mb-4">
                  <Zap className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Offline Storage &amp; Sync</h3>
                <p className="mt-2 text-sm text-muted">Local SQLite/AsyncStorage persistence ensuring continuous app operation even during network disconnects.</p>
              </div>
              <div className="card-border rounded-2xl bg-surface p-8">
                <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Push Notifications &amp; In-App Purchases</h3>
                <p className="mt-2 text-sm text-muted">Integrated Firebase Cloud Messaging (FCM), Apple APNs, and RevenueCat subscription infrastructure.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-surface-2/40 border-t border-line">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold text-foreground">Ready to Build a Mobile App?</h2>
            <p className="mt-3 text-muted max-w-xl mx-auto text-sm">Discuss your app idea with our mobile developers and get a detailed timeline.</p>
            <div className="mt-8 flex justify-center">
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">
                Start Mobile Project <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
