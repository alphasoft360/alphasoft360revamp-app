import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone, GraduationCap, Briefcase, ChevronRight } from "lucide-react";
import { FaLinkedinIn, FaGithub, FaStackOverflow } from "react-icons/fa6";
import { Globe } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  };
}

export default async function TeamMemberPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = teamMembers.find((m) => m.id === id);

  if (!member) notFound();

  const socialEntries = Object.entries(member.socials ?? {}).filter(([, url]) => Boolean(url));

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden pt-40 pb-20 lg:pt-48 lg:pb-24">

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-muted">
              <a href="/" className="hover:text-foreground transition-colors">Home</a>
              <ChevronRight className="h-3.5 w-3.5" />
              <a href="/team" className="hover:text-foreground transition-colors">Team</a>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground">{member.name}</span>
            </nav>

            <div className="mt-10 grid lg:grid-cols-5 gap-10 items-start">
              <div className="lg:col-span-2 relative aspect-square rounded-3xl overflow-hidden card-border">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="lg:col-span-3">
                <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-gradient text-balance">
                  {member.name}
                </h1>
                <p className="mt-3 text-lg text-accent-2 font-medium">{member.role}</p>
                <p className="mt-5 text-muted leading-relaxed text-balance max-w-xl">{member.bio}</p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {member.contact?.email && (
                    <a href={`mailto:${member.contact.email}`} className="btn-secondary">
                      <Mail className="h-3.5 w-3.5" />
                      {member.contact.email}
                    </a>
                  )}
                  {member.contact?.phone && member.contact.phone !== "none" && (
                    <a href={`tel:${member.contact.phone.replace(/\s/g, "")}`} className="btn-secondary">
                      <Phone className="h-3.5 w-3.5" />
                      {member.contact.phone}
                    </a>
                  )}
                </div>

                {socialEntries.length > 0 && (
                  <div className="mt-5 flex items-center gap-2.5">
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
                          className="h-10 w-10 rounded-full border border-line flex items-center justify-center text-muted hover:text-foreground hover:border-accent/50 transition-colors"
                        >
                          <Icon className="h-4 w-4" />
                        </a>
                      );
                    })}
                  </div>
                )}
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

        <section className="relative py-20 border-t border-line">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <a href="/team" className="btn-secondary inline-flex">
              ← Back to all team members
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
