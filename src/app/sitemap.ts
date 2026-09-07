import { MetadataRoute } from "next";
import projectsData from "@/data/projectsData";
import teamMembers from "@/data/teamData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.alphasoft360.com";
  const now = new Date();

  const staticPages = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/web-development", priority: 0.95, changeFrequency: "weekly" as const },
    { url: "/web-development/custom-web-development", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/web-development/web-application-development", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/web-development/react-development", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/web-development/nextjs-development", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/web-development/nodejs-development", priority: 0.85, changeFrequency: "weekly" as const },
    { url: "/web-development/ecommerce-development", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/web-development/saas-development", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/software-development", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/mobile-app-development", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/ai-development", priority: 0.85, changeFrequency: "weekly" as const },
    { url: "/cloud-devops", priority: 0.85, changeFrequency: "weekly" as const },
    { url: "/projects", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/team", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/careers", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/faqs", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/cookies", priority: 0.3, changeFrequency: "yearly" as const },
  ].map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: now,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));

  const projectPages = projectsData.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const teamPages = teamMembers.map((member) => ({
    url: `${baseUrl}/team/${member.id}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages, ...teamPages];
}
