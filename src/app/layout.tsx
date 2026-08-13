import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GlobalBackground from "@/components/GlobalBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alphasoft360.org"),
  title: "AlphaSoft360 — IT Consulting & Software Engineering",
  description:
    "AlphaSoft360 builds software, web, mobile, cloud, and AI solutions for businesses worldwide. A decade of proven engineering expertise.",
  icons: {
    icon: [
      { url: "/brand/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://alphasoft360.org/#organization",
        "name": "AlphaSoft360",
        "url": "https://alphasoft360.org",
        "logo": {
          "@type": "ImageObject",
          "url": "https://alphasoft360.org/brand/logo.png",
          "width": "168",
          "height": "73"
        },
        "image": "https://alphasoft360.org/brand/hero-2.jpeg",
        "description": "AlphaSoft360 is a technology partner for founders and enterprises — building software, cloud, and AI-driven products for over a decade.",
        "foundingDate": "2022",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Main Pakavenue Road",
          "addressLocality": "Sahiwal",
          "postalCode": "57000",
          "addressCountry": "PK",
          "addressRegion": "Punjab"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+923704857471",
          "contactType": "customer service",
          "email": "alphasoft360@gmail.com",
          "areaServed": "Worldwide",
          "availableLanguage": ["English", "Urdu"]
        },
        "sameAs": [
          "https://www.linkedin.com/company/alphasoft360",
          "https://github.com/alphasoft360",
          "https://twitter.com/alphasoft360"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "AlphaSoft360 Services Catalog",
          "itemListElement": [
            {
              "@type": "OfferCatalog",
              "name": "Core IT & Development Services",
              "itemListElement": [
                {
                  "@type": "Service",
                  "name": "Mobile App Development",
                  "description": "Comprehensive mobile application development services creating native, hybrid, and cross-platform apps for iOS and Android with modern technologies.",
                  "serviceType": "Software Development",
                  "areaServed": "Worldwide",
                  "provider": { "@id": "https://alphasoft360.org/#organization" }
                },
                {
                  "@type": "Service",
                  "name": "Web Application Development",
                  "description": "Custom web application development using modern frameworks and technologies to create responsive, user-friendly websites and web platforms.",
                  "serviceType": "Software Development",
                  "areaServed": "Worldwide",
                  "provider": { "@id": "https://alphasoft360.org/#organization" }
                },
                {
                  "@type": "Service",
                  "name": "E-Commerce Platform Development",
                  "description": "Complete e-commerce platform development with secure payment gateways, inventory management, and user-friendly shopping experiences.",
                  "serviceType": "E-Commerce Services",
                  "areaServed": "Worldwide",
                  "provider": { "@id": "https://alphasoft360.org/#organization" }
                },
                {
                  "@type": "Service",
                  "name": "Cloud Engineering & DevOps",
                  "description": "Comprehensive cloud migration, infrastructure automation, and DevOps practices to accelerate development cycles and improve deployment reliability.",
                  "serviceType": "IT Infrastructure Services",
                  "areaServed": "Worldwide",
                  "provider": { "@id": "https://alphasoft360.org/#organization" }
                },
                {
                  "@type": "Service",
                  "name": "Real Estate Management Solutions",
                  "description": "Comprehensive property management solutions to streamline real estate operations and enhance tenant experiences.",
                  "serviceType": "Enterprise Software",
                  "areaServed": "Worldwide",
                  "provider": { "@id": "https://alphasoft360.org/#organization" }
                },
                {
                  "@type": "Service",
                  "name": "LMS & Education Technology Solutions",
                  "description": "Comprehensive learning management systems and educational technology solutions for modern education.",
                  "serviceType": "Enterprise Software",
                  "areaServed": "Worldwide",
                  "provider": { "@id": "https://alphasoft360.org/#organization" }
                },
                {
                  "@type": "Service",
                  "name": "Healthcare Management Systems",
                  "description": "Integrated healthcare solutions to improve patient care and streamline medical practice operations.",
                  "serviceType": "Enterprise Software",
                  "areaServed": "Worldwide",
                  "provider": { "@id": "https://alphasoft360.org/#organization" }
                },
                {
                  "@type": "Service",
                  "name": "AI & Automation Engineering",
                  "description": "Leverage artificial intelligence to automate processes, enhance decision-making, and drive business growth.",
                  "serviceType": "Artificial Intelligence",
                  "areaServed": "Worldwide",
                  "provider": { "@id": "https://alphasoft360.org/#organization" }
                },
                {
                  "@type": "Service",
                  "name": "Internet of Things (IoT) Apps",
                  "description": "Innovative Internet of Things solutions to connect devices, collect data, and enable smart automation.",
                  "serviceType": "Software Development",
                  "areaServed": "Worldwide",
                  "provider": { "@id": "https://alphasoft360.org/#organization" }
                },
                {
                  "@type": "Service",
                  "name": "UI/UX Product & Design",
                  "description": "Comprehensive product design services including UI/UX design, user research, prototyping, and brand identity.",
                  "serviceType": "Design Services",
                  "areaServed": "Worldwide",
                  "provider": { "@id": "https://alphasoft360.org/#organization" }
                },
                {
                  "@type": "Service",
                  "name": "Data Center & Hosting Solutions",
                  "description": "Enterprise-grade data center solutions providing secure hosting, colocation, disaster recovery, and 24/7 monitoring.",
                  "serviceType": "IT Infrastructure Services",
                  "areaServed": "Worldwide",
                  "provider": { "@id": "https://alphasoft360.org/#organization" }
                },
                {
                  "@type": "Service",
                  "name": "ERP & CRM System Integrations",
                  "description": "Comprehensive ERP and CRM solutions to streamline business operations, enhance customer relationships, and improve decision-making.",
                  "serviceType": "Enterprise Software",
                  "areaServed": "Worldwide",
                  "provider": { "@id": "https://alphasoft360.org/#organization" }
                }
              ]
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://alphasoft360.org/#website",
        "url": "https://alphasoft360.org",
        "name": "AlphaSoft360",
        "description": "IT Consulting & Software Engineering Solutions",
        "publisher": {
          "@id": "https://alphasoft360.org/#organization"
        }
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GlobalBackground />
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
