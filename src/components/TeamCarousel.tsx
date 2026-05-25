"use client";

import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "@/lib/content";

type TeamMember = (typeof teamMembers)[number];

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="card-friendly team-card flex w-[min(100vw-2.5rem,20rem)] shrink-0 flex-col p-5 sm:w-80">
      <div className="shrink-0 text-center">
        <div className="relative mx-auto h-24 w-24 overflow-hidden rounded-full ring-2 ring-border">
          <Image src={member.image} alt={member.name} fill className="object-cover" sizes="96px" />
        </div>
        <h3 className="heading-md mt-4 text-foreground">{member.name}</h3>
        <p className="type-body-sm mt-1 font-medium text-brand-lime">{member.role}</p>
        <p className="type-caption mt-1 min-h-[1.25rem] text-muted">{member.gdc ? `GDC ${member.gdc}` : "\u00A0"}</p>
      </div>

      <div className="mt-4 flex min-h-0 flex-1 flex-col text-left">
        <div className="team-card-qual border-t border-border pt-4">
          <p className="type-label text-foreground">Qualifications</p>
          <ul className="type-caption mt-2 space-y-1 text-muted">
            {member.qualifications.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
        </div>

        <div className="team-card-specialties mt-4 border-t border-border pt-4">
          <p className="type-label text-foreground">Specialties</p>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {member.specialties.map((s) => (
              <li
                key={s}
                className="type-caption rounded-md bg-soft-green px-2 py-0.5 font-medium text-foreground"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-auto shrink-0 border-t border-border pt-4">
        <Link
          href="/team"
          className="type-link block w-full text-center text-foreground hover:text-brand-lime"
        >
          Full profile →
        </Link>
      </div>
    </article>
  );
}

export function TeamCarousel() {
  const loop = [...teamMembers, ...teamMembers];

  return (
    <div className="team-marquee-mask relative mt-10 overflow-hidden">
      <div className="team-marquee-track flex w-max items-stretch gap-5">
        {loop.map((member, index) => (
          <TeamCard key={`${member.name}-${index}`} member={member} />
        ))}
      </div>
    </div>
  );
}
