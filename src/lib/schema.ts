export const ORGANIZATION_ID = "https://www.alphasoft360.com/#organization";
export const WEBSITE_ID = "https://www.alphasoft360.com/#website";
export const BASE_URL = "https://www.alphasoft360.com";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function getOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    "name": "AlphaSoft360",
    "url": BASE_URL,
    "logo": {
      "@type": "ImageObject",
      "url": `${BASE_URL}/brand/logo.png`,
      "caption": "AlphaSoft360 Logo"
    },
    "image": {
      "@type": "ImageObject",
      "url": `${BASE_URL}/brand/hero-2.jpeg`,
      "caption": "AlphaSoft360 Software Engineering"
    },
    "description":
      "AlphaSoft360 is an AI-driven technology partner and software engineering consultancy building web applications, mobile apps, fintech systems, cloud DevOps, and AI automation solutions for global clients.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+923704857471",
      "contactType": "customer service",
      "email": "alphasoft360@gmail.com",
      "areaServed": "Worldwide",
      "availableLanguage": ["English", "Urdu"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Main Pakavenue Road",
      "addressLocality": "Sahiwal",
      "postalCode": "57000",
      "addressCountry": "PK"
    },
    "sameAs": [
      "https://www.linkedin.com/company/alphasoft360",
      "https://github.com/alphasoft360",
      "https://twitter.com/alphasoft360"
    ]
  };
}

export function getWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    "url": BASE_URL,
    "name": "AlphaSoft360",
    "description": "AI-Driven Software Solutions, Built to Scale",
    "publisher": {
      "@id": ORGANIZATION_ID
    }
  };
}

export function getBreadcrumbSchema(items: BreadcrumbItem[], pageUrl: string) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export function getWebPageSchema({
  type = "WebPage",
  name,
  description,
  url,
  breadcrumbItems
}: {
  type?: string;
  name: string;
  description: string;
  url: string;
  breadcrumbItems?: BreadcrumbItem[];
}) {
  const pageSchema: Record<string, any> = {
    "@type": type,
    "@id": `${url}#webpage`,
    "url": url,
    "name": name,
    "description": description,
    "isPartOf": {
      "@id": WEBSITE_ID
    },
    "publisher": {
      "@id": ORGANIZATION_ID
    }
  };

  if (breadcrumbItems && breadcrumbItems.length > 0) {
    pageSchema.breadcrumb = {
      "@id": `${url}#breadcrumb`
    };
  }

  return pageSchema;
}

export function getServiceSchema({
  name,
  description,
  url,
  serviceType
}: {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}) {
  return {
    "@type": "Service",
    "@id": `${url}#service`,
    "name": name,
    "description": description,
    "serviceType": serviceType,
    "provider": {
      "@id": ORGANIZATION_ID
    },
    "areaServed": "Worldwide",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": name,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": name
          }
        }
      ]
    }
  };
}
