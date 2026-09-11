import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Globe,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Zap,
  ShieldCheck,
  Server,
  ShoppingBag,
  Rocket
} from "lucide-react";
import { getWebPageSchema, getBreadcrumbSchema, getServiceSchema } from "@/lib/schema";
import { contact } from "@/data/content";
import ServiceHeroVisual from "@/components/services/ServiceHeroVisual";

export const metadata: Metadata = {
  title: "Web Development Services | Custom Web Platforms | AlphaSoft360",
  description:
    "AlphaSoft360 offers full-stack web development services. We engineer custom web platforms, Next.js & React web applications, SaaS products, and e-commerce systems built for performance, security, and scale.",
  alternates: {
    canonical: "https://www.alphasoft360.com/web-development",
  },
  keywords: [
    "Web Development Services",
    "Custom Web Development",
    "Web Application Development",
    "React Development Agency",
    "Next.js Development Services",
    "SaaS Development Company",
    "E-commerce Web Development",
    "Full-Stack Web Engineering"
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Web Development Services | Custom Web Platforms | AlphaSoft360",
    description:
      "AlphaSoft360 offers full-stack web development services. We engineer custom web platforms, Next.js & React web applications, SaaS products, and e-commerce systems.",
    url: "https://www.alphasoft360.com/web-development",
    siteName: "AlphaSoft360",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.alphasoft360.com/brand/hero-2.jpeg",
        width: 1200,
        height: 630,
        alt: "AlphaSoft360 Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services | Custom Web Platforms | AlphaSoft360",
    description:
      "AlphaSoft360 offers full-stack web development services. We engineer custom web platforms, Next.js & React web applications, SaaS products, and e-commerce systems.",
    images: ["https://www.alphasoft360.com/brand/hero-2.jpeg"],
  },
};

const subServices = [
  {
    title: "Custom Web Development",
    slug: "/web-development/custom-web-development",
    icon: Code2,
    description: "Bespoke digital web platforms tailored to complex business logic, enterprise integration, and high-conversion workflows."
  },
  {
    title: "Web Application Development",
    slug: "/web-development/web-application-development",
    icon: Layers,
    description: "Interactive, real-time single-page and multi-page web applications with rich user interfaces and secure backend APIs."
  },
  {
    title: "React Development",
    slug: "/web-development/react-development",
    icon: Cpu,
    description: "High-speed frontend applications built with React 19, TypeScript, dynamic state management, and reusable UI components."
  },
  {
    title: "Next.js Development",
    slug: "/web-development/nextjs-development",
    icon: Zap,
    description: "SEO-driven web platforms leveraging Next.js App Router, Server-Side Rendering (SSR), SSG, and edge deployment."
  },
  {
    title: "Node.js Backend Engineering",
    slug: "/web-development/nodejs-development",
    icon: Server,
    description: "High-throughput microservices, REST APIs, GraphQL endpoints, and real-time WebSocket servers built on Node.js."
  },
  {
    title: "E-Commerce Development",
    slug: "/web-development/ecommerce-development",
    icon: ShoppingBag,
    description: "Scalable online storefronts with instant product filtering, payment gateway integrations, and SKU inventory management."
  },
  {
    title: "SaaS Application Development",
    slug: "/web-development/saas-development",
    icon: Rocket,
    description: "Multi-tenant Software-as-a-Service platforms featuring subscription billing, role permissions, and tenant isolation."
  }
];

const faqs = [
  {
    q: "What web development technologies does AlphaSoft360 specialize in?",
    a: "We specialize in modern JavaScript/TypeScript ecosystems including React, Next.js, Node.js, Express, Vue.js, Angular, along with database systems like PostgreSQL, MongoDB, and Redis. For cloud delivery, we deploy on Vercel, AWS, and GCP."
  },
  {
    q: "How long does a custom web development project take to complete?",
    a: "Project timelines vary by scope. A standard custom web application or MVP typically ships within 4 to 8 weeks. Larger enterprise platforms or multi-tenant SaaS products range from 12 to 24 weeks."
  },
  {
    q: "Do you ensure web applications are optimized for SEO and core web vitals?",
    a: "Yes, every web platform we build undergoes rigorous Core Web Vitals optimization, server-side rendering setup, structured data integration, clean semantic HTML structure, and responsive mobile rendering."
  },
  {
    q: "Can you upgrade or migrate our existing legacy web application?",
    a: "Absolutely. We perform seamless migrations from legacy monolithic apps to modern Next.js/React architectures, ensuring zero data loss and uninterrupted user experience."
  }
];

export default function WebDevelopmentPage() {
  const pageUrl = "https://www.alphasoft360.com/web-development";
  const breadcrumbItems = [
    { name: "Home", url: "https://www.alphasoft360.com" },
    { name: "Services", url: "https://www.alphasoft360.com/services" },
    { name: "Web Development", url: pageUrl }
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      getWebPageSchema({
        name: "Web Development Services | Custom Web Platforms | AlphaSoft360",
        description: "AlphaSoft360 offers full-stack web development services including Next.js, React, Node.js, SaaS, and E-commerce platforms.",
        url: pageUrl,
        breadcrumbItems
      }),
      getBreadcrumbSchema(breadcrumbItems, pageUrl),
      getServiceSchema({
        name: "Full-Stack Web Development Services",
        description: "Custom web development, web applications, React & Next.js solutions, SaaS, and e-commerce platforms.",
        url: pageUrl,
        serviceType: "Web Development"
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
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-28 bg-surface-2/30">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent mb-6">
                  <Globe className="h-3.5 w-3.5" /> Full-Stack Engineering Agency
                </div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-gradient text-balance">
                  Full-Stack Web Development Services
                </h1>
                <p className="mt-6 text-lg text-muted text-balance leading-relaxed">
                  We design and engineer high-performance web applications, custom software platforms, and scalable digital products engineered for speed, conversion, and global reach.
                </p>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs"
                  >
                    Start Your Web Project <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link href="/projects" className="btn-secondary text-xs">
                    View Web Portfolio
                  </Link>
                </div>
              </div>
              <div className="hidden lg:block lg:col-span-5">
                <ServiceHeroVisual
                  mainIcon={<Globe className="h-4 w-4" />}
                  title="Web Development"
                  items={[
                    { icon: <Code2 className="h-5 w-5" />, label: "React & Next.js Engineering" },
                    { icon: <Rocket className="h-5 w-5" />, label: "Speed & Conversion Focused" },
                    { icon: <ShoppingBag className="h-5 w-5" />, label: "E-Commerce Platforms" },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sub-Services Grid */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-widest text-accent-2 uppercase">
                Specialized Web Capabilities
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-foreground">
                Tailored Web Development Solutions
              </h2>
              <p className="mt-4 text-muted">
                Explore our specialized web engineering capabilities built to address your specific technical requirements and growth goals.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subServices.map((sub, i) => {
                const Icon = sub.icon;
                return (
                  <Link
                    key={i}
                    href={sub.slug}
                    className="card-border card-hover rounded-2xl bg-surface p-8 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                        {sub.title}
                      </h3>
                      <p className="mt-3 text-sm text-muted leading-relaxed">
                        {sub.description}
                      </p>
                    </div>
                    <div className="mt-8 flex items-center gap-1.5 text-xs font-semibold text-accent group-hover:translate-x-1 transition-transform">
                      Learn More <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="py-20 bg-surface-2/20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-semibold tracking-widest text-accent-2 uppercase">
                  Engineering Standards
                </span>
                <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-foreground">
                  Why Leading Brands Choose AlphaSoft360 for Web Development
                </h2>
                <p className="mt-4 text-muted leading-relaxed">
                  Building web platforms requires more than writing HTML and JS. We combine clean architectural design with performance optimization and rigorous security protocols.
                </p>
                <div className="mt-8 space-y-4">
                  {[
                    "Server-Side Rendering (SSR) & Static Site Generation for instant load times",
                    "Modular React & TypeScript codebases that prevent technical debt",
                    "Strict security controls including CSP, CORS, and vulnerability scanning",
                    "Automated CI/CD pipelines for seamless, multi-stage cloud deployments",
                    "Full accessibility (WCAG 2.1) & mobile-first responsive execution"
                  ].map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card-border rounded-3xl bg-surface p-8 sm:p-10">
                <h3 className="text-xl font-semibold text-foreground border-b border-line pb-4">
                  Web Stack Technology Radar
                </h3>
                <div className="mt-6 space-y-6 text-sm">
                  <div>
                    <span className="font-semibold text-accent">Frontend Standards:</span>
                    <p className="text-muted mt-1">React 19, Next.js 16, TypeScript, TailwindCSS v4, Framer Motion, Redux Toolkit.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-accent-2">Backend Architecture:</span>
                    <p className="text-muted mt-1">Node.js, Express, NestJS, GraphQL, RESTful APIs, WebSockets (Socket.io).</p>
                  </div>
                  <div>
                    <span className="font-semibold text-accent">Databases & Caching:</span>
                    <p className="text-muted mt-1">PostgreSQL, MongoDB, Prisma ORM, Mongoose, Redis, Elasticsearch.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-accent-2">Cloud Delivery:</span>
                    <p className="text-muted mt-1">Vercel, AWS EC2/S3/Lambda, Cloudflare Edge CDN, Docker containerization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="text-center">
              <span className="text-xs font-semibold tracking-widest text-accent-2 uppercase">
                Frequently Asked Questions
              </span>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">
                Web Development Insights
              </h2>
            </div>
            <div className="mt-12 space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="card-border rounded-2xl bg-surface p-6">
                  <h3 className="text-lg font-semibold text-foreground">{faq.q}</h3>
                  <p className="mt-3 text-sm text-muted leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-surface-2/40 border-t border-line">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-semibold text-foreground">Ready to Build Your Web Platform?</h2>
            <p className="mt-3 text-muted max-w-xl mx-auto text-sm">
              Schedule a technical consultation with our lead web architects to discuss your project requirements and receive a structured timeline.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary text-xs">
                Schedule Consultation <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
