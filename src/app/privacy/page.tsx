import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — AlphaSoft360",
  description:
    "Privacy Policy for AlphaSoft360. Learn how we collect, process, and safeguard your personal and business data.",
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-muted">Last updated: February 2026</p>

            <div className="mt-12 space-y-8 text-muted leading-relaxed text-sm">
              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">1. Introduction</h2>
                <p>
                  At AlphaSoft360 (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we respect your privacy and are committed to protecting personal data collected through our website, web applications, and services. This Privacy Policy outlines how we handle data when you visit our site or communicate with us.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">2. Information We Collect</h2>
                <p>We may collect information directly provided by you, including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Contact details (e.g., name, email address, phone number, company name).</li>
                  <li>Project scope details, message contents, and inquiries submitted via contact forms.</li>
                  <li>Technical metadata such as IP addresses, browser types, and analytics data.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">3. How We Use Your Data</h2>
                <p>Information collected is used strictly to:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Respond to inquiries, provide proposals, and deliver requested services.</li>
                  <li>Improve website usability, performance, and user experience.</li>
                  <li>Fulfill legal, security, and contractual obligations.</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">4. Data Protection &amp; Security</h2>
                <p>
                  We implement robust technical and organizational security measures, including HTTPS encryption, restricted access controls, and regular vulnerability checks to protect your data from unauthorized access or disclosure.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">5. Third-Party Services</h2>
                <p>
                  We do not sell or rent your personal data to third parties. We may utilize trusted third-party providers (such as Resend for email delivery and Vercel for hosting) bound by strict confidentiality standards.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-foreground">6. Contact Us</h2>
                <p>
                  If you have questions regarding this Privacy Policy or wish to request data updates, please contact our data protection team at{" "}
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
