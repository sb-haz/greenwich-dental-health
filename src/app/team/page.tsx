import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SpeakToUsBanner } from "@/components/SpeakToUsBanner";
import { pageHeroImages, teamMembers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the dentists, hygienists and support team at Greenwich Dental Health in Greenwich.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        title="Meet Our Team"
        subtitle="Experienced clinicians dedicated to exceptional, patient-centred care in Greenwich."
        image={pageHeroImages.team.src}
        imageAlt={pageHeroImages.team.alt}
      />

      <section className="page-section page-section--loose">
        <div className="mx-auto max-w-6xl space-y-16">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm lg:grid lg:grid-cols-[320px_1fr]"
            >
              <div className="relative aspect-square lg:aspect-auto lg:min-h-[22.5rem]">
                <Image src={member.image} alt={member.name} fill className="object-cover" sizes="320px" />
              </div>
              <div className="p-8 lg:p-10">
                <h2 className="heading-md text-foreground">{member.name}</h2>
                <p className="type-body-sm mt-1 font-medium text-brand-lime">{member.role}</p>
                {member.gdc ? <p className="type-caption mt-2 text-muted">GDC {member.gdc}</p> : null}
                <p className="type-label mt-4 text-foreground">Qualifications</p>
                <ul className="type-body-sm mt-2 space-y-1 text-muted">
                  {member.qualifications.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
                <div className="mt-4">
                  <p className="type-label text-foreground">Specialties</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {member.specialties.map((s) => (
                      <li
                        key={s}
                        className="type-caption rounded-md bg-soft-green px-2.5 py-1 text-foreground"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="type-body-sm mt-6 text-muted">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SpeakToUsBanner />
    </>
  );
}
