"use client";

import { motion } from "framer-motion";
import TeamMemberCard from "./TeamMemberCard";

type Member = {
  id: string;
  image: string;
  name: string;
  role: string;
  bio: string;
  socials?: Partial<Record<string, string>>;
};

export default function TeamSection({
  eyebrow,
  title,
  members,
  first = false,
  cols = "lg:grid-cols-4",
}: {
  eyebrow: string;
  title: string;
  members: Member[];
  first?: boolean;
  cols?: string;
}) {
  return (
    <section className={`relative py-24 lg:py-28 ${first ? "" : "border-t border-line"}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-widest text-accent-2 uppercase">{eyebrow}</p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-balance">{title}</h2>
        </div>

        <div className={`mt-10 sm:mt-14 grid grid-cols-1 min-[440px]:grid-cols-2 ${cols} gap-4 sm:gap-6 items-stretch`}>
          {members.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="h-full"
            >
              <TeamMemberCard member={member} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
