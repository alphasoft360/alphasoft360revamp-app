import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";

export const metadata: Metadata = {
  title: "Contact Us — AlphaSoft360",
  description:
    "Get in touch with AlphaSoft360 — send us a message, call, email, or chat with us on WhatsApp. We reply within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ContactHero />
        <ContactFormSection />
      </main>
      <Footer />
    </>
  );
}
