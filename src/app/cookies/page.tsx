import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookies Policy — AlphaSoft360",
  description:
    "Information regarding the cookies and tracking technologies used by AlphaSoft360.",
  alternates: {
    canonical: "https://alphasoft360.org/cookies",
  },
  keywords: [
    "AlphaSoft360 Cookies Policy",
    "Cookie Consent Information",
    "Website Tracking Technologies",
    "Privacy and Cookies Info"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Cookies Policy — AlphaSoft360",
    description:
      "Information regarding the cookies and tracking technologies used by AlphaSoft360.",
    url: "https://alphasoft360.org/cookies",
    siteName: "AlphaSoft360",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Cookies Policy — AlphaSoft360",
    description:
      "Information regarding the cookies and tracking technologies used by AlphaSoft360.",
  },
};

export default function CookiesPage() {
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
              Cookie Policy
            </h1>
            <p className="mt-4 text-sm text-muted">Last updated: February 2026</p>

            <div className="mt-12 space-y-8 text-muted leading-relaxed text-sm">
              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">1. What Are Cookies</h2>
                <p>
                  Cookies are small text files stored on your device by your web browser when you visit a website. They help improve site performance, remember session preferences, and provide analytical data.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">2. Cookies We Use</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-foreground">Essential Cookies:</strong> Required for fundamental website functionality, routing, and security.
                  </li>
                  <li>
                    <strong className="text-foreground">Analytical Cookies:</strong> Help us analyze web traffic, page visits, and feature usage to optimize performance.
                  </li>
                  <li>
                    <strong className="text-foreground">Preference Cookies:</strong> Store user preferences such as theme settings and language selection.
                  </li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">3. Managing Cookie Preferences</h2>
                <p>
                  You can modify or disable cookies at any time through your browser settings. Note that disabling essential cookies may impact certain interactive features on our site.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">4. Contact Us</h2>
                <p>
                  If you have questions about our Cookie Policy, please contact us at{" "}
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
