"use client";

import Image from "next/image";
import { FaLinkedinIn, FaGithub, FaStackOverflow } from "react-icons/fa6";
import { Globe } from "lucide-react";

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

export default function TeamMemberCard({ member }: { member: Member }) {
  const socialEntries = Object.entries(member.socials ?? {}).filter(([, url]) => Boolean(url));

  return (
    <div className="group card-border card-hover rounded-2xl bg-surface overflow-hidden">
      <a href={`/team/${member.id}`} className="block">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover grayscale-[10%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
          />
          {/* <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" /> */}
        </div>
        <div className="p-5 pb-0">
          <h3 className="font-medium">{member.name}</h3>
          <p className="mt-1 text-sm text-accent-2">{member.role}</p>
          <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">{member.bio}</p>
        </div>
      </a>

      <div className="p-5 pt-4 flex items-center justify-between">
        {socialEntries.length > 0 ? (
          <div className="flex items-center gap-2">
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
                  className="h-8 w-8 rounded-full border border-line flex items-center justify-center text-muted hover:text-foreground hover:border-accent/50 transition-colors"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              );
            })}
          </div>
        ) : (
          <span />
        )}
        <a href={`/team/${member.id}`} className="text-xs font-medium text-foreground hover:text-accent-2 transition-colors">
          View Profile
        </a>
      </div>
    </div>
  );
}
