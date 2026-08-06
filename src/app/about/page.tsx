import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import Story from "@/components/about/Story";
import AboutStats from "@/components/about/AboutStats";
import Values from "@/components/about/Values";
import Team from "@/components/about/Team";

export const metadata: Metadata = {
  title: "About Us — AlphaSoft360",
  description:
    "AlphaSoft360 is a technology partner delivering high-performance web applications, IoT solutions, and API integrations for clients worldwide. Meet the team behind the work.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <AboutHero />
        <Story />
        <AboutStats />
        <Values />
        <Team />
      </main>
      <Footer />
    </>
  );
}
