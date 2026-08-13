"use client";

import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaStackOverflow } from "react-icons/fa6";
import { Globe, ArrowUpRight } from "lucide-react";

const socialIcons = {
  linkedin: FaLinkedinIn,
  github: FaGithub,
  stackoverflow: FaStackOverflow,
  portfolio: Globe,
};

type Member = {
  id: string;
  image: string;
  name: string;
  role: string;
  bio: string;
  socials?: Partial<Record<string, string>>;
};

export default function TeamMemberCard({ member, loading = "lazy" }: { member: Member; loading?: "lazy" | "eager" }) {
  const socialEntries = Object.entries(member.socials ?? {}).filter(([, url]) => Boolean(url));

  return (
    <div className="group card-border card-hover rounded-2xl bg-surface overflow-hidden flex flex-col h-full">
      <a href={`/team/${member.id}`} className="block flex-1">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            loading={loading}
            className="object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          />
        </div>
        <div className="p-4 sm:p-5 pb-0">
          <h3 className="font-medium text-foreground text-base sm:text-lg group-hover:text-accent transition-colors">
            {member.name}
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-accent-2 font-medium leading-snug">
            {member.role}
          </p>
          <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed line-clamp-2">
            {member.bio}
          </p>
        </div>
      </a>

      <div className="p-4 sm:p-5 pt-3 sm:pt-4 mt-auto border-t border-line/50 flex flex-wrap items-center justify-between gap-y-2 gap-x-2">
        {socialEntries.length > 0 ? (
          <div className="flex items-center gap-1.5 shrink-0">
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
                  className="h-7 w-7 sm:h-8 sm:w-8 rounded-full border border-line flex items-center justify-center text-muted hover:text-foreground hover:border-accent/50 transition-colors shrink-0"
                >
                  <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                </a>
              );
            })}
          </div>
        ) : (
          <span />
        )}
        <a
          href={`/team/${member.id}`}
          className="text-xs font-medium text-foreground hover:text-accent-2 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1 ml-auto"
        >
          View Profile
          <ArrowUpRight className="h-3 w-3 text-accent-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
}
