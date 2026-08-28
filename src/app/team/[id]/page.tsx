import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, GraduationCap, Briefcase, ChevronRight } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaStackOverflow } from "react-icons/fa6";
import { Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamMemberCard from "@/components/team/TeamMemberCard";
import IdCard3D from "@/components/team/IdCard3D";
import teamMembers from "@/data/teamData";

const socialIcons = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  stackoverflow: FaStackOverflow,
  portfolio: Globe,
};

export async function generateStaticParams() {
  return teamMembers.map((member) => ({ id: member.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const member = teamMembers.find((m) => m.id === id);
  if (!member) return { title: "Team Member Not Found — AlphaSoft360" };
  return {
    title: `${member.name} — AlphaSoft360`,
    description: member.bio,
    alternates: {
      canonical: `https://alphasoft360.org/team/${id}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: `${member.name} — AlphaSoft360`,
      description: member.bio,
      url: `https://alphasoft360.org/team/${id}`,
      siteName: "AlphaSoft360",
      locale: "en_US",
      type: "profile",
      images: [
        {
          url: `https://alphasoft360.org${member.image}`,
          alt: member.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${member.name} — AlphaSoft360`,
      description: member.bio,
      images: [`https://alphasoft360.org${member.image}`],
    },
  };
}

export default async function TeamMemberPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = teamMembers.find((m) => m.id === id);

  if (!member) notFound();

  const socialEntries = Object.entries(member.socials ?? {}).filter(([, url]) => Boolean(url));
  const otherMembers = teamMembers.filter((m) => m.id !== member.id).slice(0, 3);

  const socialUrls = Object.values(member.socials ?? {}).filter(Boolean);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": member.name,
    "jobTitle": member.role,
    "description": member.bio,
    "image": `https://alphasoft360.org${member.image}`,
    "worksFor": {
      "@type": "Organization",
      "name": "AlphaSoft360",
      "url": "https://alphasoft360.org"
    },
    "sameAs": socialUrls
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-24">

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted">
              <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href="/team" className="hover:text-foreground transition-colors">Team</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground">{member.name}</span>
            </nav>

            <div className="mt-10 grid xl:grid-cols-12 gap-8 items-center">
              {/* Left Column: Image */}
              <div className="xl:col-span-3 relative aspect-square rounded-3xl overflow-hidden card-border shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Middle Column: Info */}
              <div className="xl:col-span-4">
                <p className="text-xs font-semibold tracking-widest text-accent-2 uppercase">{member.role}</p>
                <h1 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-gradient text-balance">
                  {member.name}
                </h1>
                <p className="mt-4 text-sm text-muted leading-relaxed">{member.bio}</p>

                <div className="mt-6 flex flex-wrap items-center gap-2.5">
                  {member.contact?.email && (
                    <a href={`mailto:${member.contact.email}`} className="btn-secondary text-xs sm:text-sm">
                      <Mail className="h-3.5 w-3.5" />
                      {member.contact.email}
                    </a>
                  )}
                  {member.contact?.phone && member.contact.phone !== "none" && (
                    <a href={`tel:${member.contact.phone.replace(/\s/g, "")}`} className="btn-secondary text-xs sm:text-sm">
                      <Phone className="h-3.5 w-3.5" />
                      {member.contact.phone}
                    </a>
                  )}
                </div>

                {socialEntries.length > 0 && (
                  <div className="mt-4 flex items-center gap-2">
                    {socialEntries.map(([key, url]) => {
                      const Icon = socialIcons[key as keyof typeof socialIcons];
                      if (!Icon) return null;
                      return (
                        <a
                          key={key}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on ${key}`}
                          className="h-9 w-9 rounded-full border border-line flex items-center justify-center text-muted hover:text-foreground hover:border-accent/50 transition-colors"
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Right Column: Interactive 3D ID Badge Card */}
              <div className="xl:col-span-5 flex justify-center border-t xl:border-t-0 xl:border-l border-line/60 pt-8 xl:pt-0 xl:pl-6">
                <IdCard3D member={member} />
              </div>
            </div>
          </div>
        </section>

        {member.biography?.length > 0 && (
          <section className="relative py-20 border-t border-line">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-2xl font-semibold">About</h2>
              <div className="mt-8 space-y-4 max-w-3xl">
                {member.biography.map((paragraph: string, i: number) => (
                  <p key={i} className="text-muted leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>
        )}

        {member.skills?.length > 0 && (
          <section className="relative py-20 border-t border-line">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-2xl font-semibold">Skills</h2>
              <div className="mt-8 grid sm:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl">
                {member.skills.map((skill: { name: string; percentage: number }) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted">{skill.percentage}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-surface overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {member.experience && member.experience.length > 0 && (
          <section className="relative py-20 border-t border-line">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-2xl font-semibold">Experience</h2>
              <div className="mt-8 space-y-5 max-w-3xl">
                {member.experience.map((job: { company: string; role: string; duration: string; details: string[] }, i: number) => (
                  <div key={i} className="card-border rounded-2xl bg-surface p-7">
                    <div className="flex items-start gap-3">
                      <span className="h-10 w-10 shrink-0 rounded-xl bg-accent/15 flex items-center justify-center">
                        <Briefcase className="h-4 w-4 text-accent-2" />
                      </span>
                      <div>
                        <h3 className="font-medium">{job.role}</h3>
                        <p className="text-sm text-accent-2">{job.company}</p>
                        <p className="text-xs text-muted mt-0.5">{job.duration}</p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {job.details.map((detail, j) => (
                        <li key={j} className="text-sm text-muted leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-line">
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {member.education && (
          <section className="relative py-20 border-t border-line">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <h2 className="text-2xl font-semibold">Education</h2>
              <div className="mt-8 max-w-3xl card-border rounded-2xl bg-surface p-7 flex items-start gap-3">
                <span className="h-10 w-10 shrink-0 rounded-xl bg-accent/15 flex items-center justify-center">
                  <GraduationCap className="h-4 w-4 text-accent-2" />
                </span>
                <div>
                  <h3 className="font-medium">
                    {member.education.degree}
                    {member.education.currentStudy ? ` · ${member.education.currentStudy}` : ""}
                  </h3>
                  {member.education.institution && (
                    <p className="text-sm text-muted mt-1">{member.education.institution}</p>
                  )}
                  {(member.education.year || member.education.status) && (
                    <p className="text-xs text-muted mt-1">{member.education.year ?? member.education.status}</p>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {otherMembers.length > 0 && (
          <section className="relative py-20 border-t border-line">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-accent-2 uppercase">
                    Explore More
                  </p>
                  <h2 className="mt-2 text-2xl sm:text-3xl font-semibold tracking-tight">
                    Other Team Members
                  </h2>
                </div>
                <Link href="/team" className="btn-secondary text-xs sm:text-sm shrink-0">
                  View All Team Members →
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                {otherMembers.map((otherMember) => (
                  <TeamMemberCard key={otherMember.id} member={otherMember} />
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="relative py-20 border-t border-line">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <Link href="/team" className="btn-secondary inline-flex">
              ← Back to all team members
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
