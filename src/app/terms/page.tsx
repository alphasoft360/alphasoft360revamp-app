import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions — AlphaSoft360",
  description:
    "Terms & Conditions governing the use of AlphaSoft360 website, engineering services, and digital products.",
  alternates: {
    canonical: "https://alphasoft360.org/terms",
  },
  keywords: [
    "AlphaSoft360 Terms and Conditions",
    "Terms of Service",
    "Client Service Agreement",
    "User Agreement Pakistan"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Terms & Conditions — AlphaSoft360",
    description:
      "Terms & Conditions governing the use of AlphaSoft360 website, engineering services, and digital products.",
    url: "https://alphasoft360.org/terms",
    siteName: "AlphaSoft360",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms & Conditions — AlphaSoft360",
    description:
      "Terms & Conditions governing the use of AlphaSoft360 website, engineering services, and digital products.",
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <span className="text-xs font-semibold tracking-widest text-accent-2 uppercase">
              Legal Information
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight text-gradient">
              Terms &amp; Conditions
            </h1>
            <p className="mt-4 text-sm text-muted">Last updated: February 2026</p>

            <div className="mt-12 space-y-8 text-muted leading-relaxed text-sm">
              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">1. Agreement to Terms</h2>
                <p>
                  By accessing or using the website and services operated by AlphaSoft360 (&quot;Company,&quot; &quot;we,&quot; &quot;our&quot;), you agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use of our site.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">2. Intellectual Property Rights</h2>
                <p>
                  Unless explicitly specified in a formal Master Services Agreement (MSA), all content, branding, UI designs, code samples, and trademarks on this site are the property of AlphaSoft360 and protected under international copyright laws.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">3. Client Services &amp; Contracts</h2>
                <p>
                  Engineering engagements, deliverables, milestones, payment schedules, and IP transfers for custom software projects are governed by individual client contracts and Statements of Work (SOW) executed between the parties.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">4. Limitation of Liability</h2>
                <p>
                  AlphaSoft360 will not be liable for indirect, incidental, or consequential damages arising from website downtime, third-party hosting interruptions, or unauthorized access beyond our control.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">5. Governing Law</h2>
                <p>
                  These Terms are governed by the applicable laws of Pakistan. Any disputes shall be resolved through good-faith negotiation or local arbitration courts.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">6. Contact Information</h2>
                <p>
                  For questions regarding our Terms &amp; Conditions, please write to us at{" "}
                  <a href="mailto:alphasoft360@gmail.com" className="text-accent-2 hover:underline">
                    alphasoft360@gmail.com
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
