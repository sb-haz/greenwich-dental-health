import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AwardBadges } from "@/components/AwardBadges";
import { PageHero } from "@/components/PageHero";
import { SpeakToUsBanner } from "@/components/SpeakToUsBanner";
import { aboutContent, images, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Greenwich Dental Health — award-winning private dentistry near Cutty Sark, Greenwich.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Greenwich Dental Health" subtitle={aboutContent.headline} />

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2">
          <div className="space-y-5">
            {aboutContent.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="type-body-sm text-muted">
                {p}
              </p>
            ))}
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark"
            >
              Book an appointment
            </a>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
            <Image src={images.hero} alt="Greenwich Dental Health practice" fill className="object-cover" sizes="50vw" />
          </div>
        </div>
      </section>

      <section className="bg-surface-alt px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="heading-lg text-foreground">Award-winning care</h2>
          <p className="section-lead mt-3 max-w-xl">
            Recognised nationally for clinical excellence, digital dentistry and leading Invisalign providers.
          </p>
          <div className="mt-10">
            <AwardBadges variant="grid" />
          </div>
        </div>
      </section>

      <section className="bg-surface-alt px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="heading-lg text-foreground">What we stand for</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {aboutContent.values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="heading-sm text-foreground">{value.title}</h3>
                <p className="type-body-sm mt-3 text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="heading-lg text-foreground">Visit us in Greenwich</h2>
          <p className="type-body-sm mt-4 text-muted">{site.address}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-outline">
              Contact us
            </Link>
            <Link href="/team" className="btn-outline">
              Meet the team
            </Link>
          </div>
        </div>
      </section>
      <SpeakToUsBanner />
    </>
  );
}
