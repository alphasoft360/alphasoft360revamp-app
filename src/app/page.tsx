import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlight from "@/components/Highlight";
import About from "@/components/About";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { techStackRow1, techStackRow2 } from "@/data/content";

export default function Home() {
  return (
    <>
      <Header photoHero />
      <main className="flex-1">
        <Hero />
        <TechStack row1={techStackRow1} row2={techStackRow2} />
        <Highlight />
        <About />
        <Services />
        <Process />
        <Projects />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
