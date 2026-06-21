import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { SpeakToUsBanner } from "@/components/SpeakToUsBanner";
import { pageHeroImages, site, treatments } from "@/lib/content";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Cosmetic dentistry, dental implants, Invisalign, general and advanced dentistry at Greenwich Dental Health.",
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        title="Our Treatments"
        subtitle="From routine check-ups to implants and Invisalign — private dentistry for the whole family."
        image={pageHeroImages.treatments.src}
        imageAlt={pageHeroImages.treatments.alt}
      />

      {treatments.map((treatment, i) => {
        const isAlt = i % 2 === 1;
        return (
          <section
            key={treatment.id}
            id={treatment.id}
            className={`scroll-mt-40 border-b border-border page-section ${
              isAlt ? "section-muted" : "section-light"
            }`}
          >
            <div
              className={`mx-auto grid max-w-7xl items-center gap-6 sm:gap-10 lg:grid-cols-2 lg:gap-16 ${
                isAlt ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md ring-1 ring-border/80 lg:aspect-[5/4]">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="section-eyebrow">Treatment</p>
                <h2 className="heading-lg mt-2 text-foreground">{treatment.title}</h2>
                <p className="type-body mt-4 text-muted">{treatment.description}</p>
                <ul className="mt-6 space-y-2.5">
                  {treatment.items.map((item) => (
                    <li key={item} className="flex gap-2.5 text-base text-foreground/90">
                      <span className="mt-0.5 shrink-0 font-bold text-brand-lime" aria-hidden>
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={site.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dark mt-8"
                >
                  Book a consultation
                </a>
              </div>
            </div>
          </section>
        );
      })}

      <SpeakToUsBanner variant="treatments" />
    </>
  );
}
