import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesProcess from "@/components/services/ServicesProcess";

export const metadata: Metadata = {
  title: "Services — AlphaSoft360",
  description:
    "App development, web development, e-commerce, cloud & DevOps, AI automation, and more — twelve specialized IT service lines from AlphaSoft360.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ServicesHero />
        <ServicesGrid />
        <ServicesProcess />
      </main>
      <Footer />
    </>
  );
}
