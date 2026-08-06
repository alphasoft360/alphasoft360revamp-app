import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamHero from "@/components/team/TeamHero";
import TeamSection from "@/components/team/TeamSection";
import teamMembers from "@/data/teamData";

export const metadata: Metadata = {
  title: "Our Team — AlphaSoft360",
  description:
    "Meet the leadership, engineers, and interns building AlphaSoft360 — the people behind our software, cloud, and AI products.",
};

export default function TeamPage() {
  const leadership = teamMembers.filter((m) => m.tier === "leadership");
  const core = teamMembers.filter((m) => m.tier === "team");
  const interns = teamMembers.filter((m) => m.tier === "intern");

  return (
    <>
      <Header />
      <main className="flex-1">
        <TeamHero />
        <TeamSection
          eyebrow="Leadership"
          title="Setting the direction"
          members={leadership}
          cols="lg:grid-cols-2"
          first
        />
        <TeamSection
          eyebrow="Our Team"
          title="Building the products"
          members={core}
          cols="lg:grid-cols-4"
        />
        <TeamSection
          eyebrow="Interns"
          title="Learning alongside us"
          members={interns}
          cols="lg:grid-cols-3"
        />
      </main>
      <Footer />
    </>
  );
}
