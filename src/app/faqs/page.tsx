"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HelpCircle, ChevronDown, ArrowUpRight, Search } from "lucide-react";
import { contact } from "@/data/content";

const faqCategories = ["All", "Services & Scope", "Workflow & Delivery", "Security & IP", "Support & SLAs"];

const faqs = [
  {
    category: "Services & Scope",
    question: "What services does AlphaSoft360 specialize in?",
    answer:
      "We provide end-to-end IT consulting and software engineering — including custom web development, mobile app development (iOS & Android), AI & automation solutions, cloud infrastructure/DevOps, UI/UX product design, and 24/7 dedicated support.",
  },
  {
    category: "Workflow & Delivery",
    question: "How do you handle project timelines and milestone delivery?",
    answer:
      "We follow Agile delivery practices. Every project begins with a clear scope definition and milestone plan. We deliver bi-weekly sprint demos and communicate via dedicated Slack/Teams channels to maintain complete transparency.",
  },
  {
    category: "Services & Scope",
    question: "Can you help migrate existing systems to the Cloud or modern tech stacks?",
    answer:
      "Yes. We specialize in legacy system modernization, database migrations (SQL & NoSQL), containerization with Docker/Kubernetes, and cloud refactoring (AWS, GCP, Azure).",
  },
  {
    category: "Security & IP",
    question: "How do you ensure data security and code confidentiality?",
    answer:
      "We sign strict Non-Disclosure Agreements (NDAs) before project commencement. All source code repository access is encrypted and IP rights are transferred 100% to your organization upon project completion.",
  },
  {
    category: "Support & SLAs",
    question: "What happens after our product is launched?",
    answer:
      "We offer comprehensive post-launch SLA support and maintenance plans, including 24/7 server monitoring, performance tuning, security patches, and feature additions.",
  },
  {
    category: "Workflow & Delivery",
    question: "How quickly can we start a new project with your team?",
    answer:
      "Typically, after our initial discovery call and requirements review, we can onboard engineering resources and commence sprint 1 within 5 to 10 business days.",
  },
  {
    category: "Services & Scope",
    question: "Do you build custom mobile apps for both iOS and Android?",
    answer:
      "Yes, we build high-performance cross-platform mobile apps using React Native and Flutter, as well as native Swift and Kotlin applications depending on project requirements.",
  },
  {
    category: "Security & IP",
    question: "Who owns the code and intellectual property produced?",
    answer:
      "You own 100% of the code, intellectual property, graphics, and architectural documentation created during the project upon milestone settlement.",
  },
];

export default function FaqsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = activeCategory === "All"
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            {/* Header section */}
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-xs font-semibold tracking-widest text-accent-2 uppercase">
                Got Questions?
              </span>
              <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gradient text-balance">
                Frequently Asked Questions
              </h1>
              <p className="mt-6 text-base sm:text-lg text-muted text-balance max-w-2xl mx-auto">
                Everything you need to know about working with AlphaSoft360, our engineering workflow, project delivery, and SLAs.
              </p>

              {/* Category Filter Pills */}
              <div className="mt-10 flex flex-wrap justify-center gap-2">
                {faqCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setOpenIndex(0);
                    }}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${activeCategory === cat
                      ? "bg-accent text-white shadow-md shadow-accent/20"
                      : "bg-surface card-border text-muted hover:text-foreground hover:border-accent/40"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Accordion List */}
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
              {filteredFaqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    className="card-border rounded-2xl bg-surface overflow-hidden transition-all duration-300 hover:border-accent/40"
                  >
                    <button
                      onClick={() => toggleAccordion(i)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-medium text-foreground hover:text-accent transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-base sm:text-lg flex items-center gap-3">
                        <HelpCircle className="h-5 w-5 text-accent-2 shrink-0" />
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`h-5 w-5 text-muted shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-accent" : ""
                          }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-muted leading-relaxed border-t border-line/40 pt-4 pl-12 sm:pl-14">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CTA Box */}
            <div className="mt-16 rounded-3xl card-border bg-gradient-to-br from-surface to-accent/5 p-8 sm:p-12 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-foreground">Still have questions?</h2>
              <p className="mt-2 text-sm text-muted max-w-lg mx-auto">
                Can&apos;t find the answer you&apos;re looking for? Reach out directly to our team for personalized assistance.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-4">
                <a href="/contact" className="btn-primary text-xs">
                  Contact Support
                </a>
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-secondary text-xs">
                  Chat on WhatsApp <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
