import Link from "next/link";
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ServiceCard } from "@/components/ServiceCard";
import { SpeakToUsBanner } from "@/components/SpeakToUsBanner";
import { TeamCarousel } from "@/components/TeamCarousel";
import { TrustStrip } from "@/components/TrustStrip";
import { invisalignPromo, services, site } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <TrustStrip />

      <section className="section-muted page-section border-t border-border">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-[minmax(0,15rem)_1fr] lg:gap-14 xl:grid-cols-[minmax(0,17rem)_1fr] xl:gap-16">
          <div className="sticky-below-header">
            <h2 className="heading-lg text-foreground">Treatments</h2>
            <p className="type-body-sm mt-3 text-muted">
              From routine check-ups to implants and Invisalign. Full fee guide on each treatment page.
            </p>
            <Link href="/treatments" className="btn-outline mt-6 inline-flex">
              View all treatments
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:mt-0">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                image={service.image}
                href={service.href}
              />
            ))}
          </div>
        </div>
      </section>

      <BeforeAfterGallery />

      <section className="section-dark page-section page-section--compact border-t border-white/10">
        <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <h2 className="heading-lg text-white">{invisalignPromo.title}</h2>
            <p className="type-body-sm mt-2 font-medium text-brand-lime">{invisalignPromo.date}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {invisalignPromo.offers.map((offer) => (
                <li
                  key={offer}
                  className="type-caption rounded-md border border-white/15 bg-white/5 px-3 py-1 text-white/90"
                >
                  {offer}
                </li>
              ))}
            </ul>
          </div>
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-6 shrink-0 lg:mt-0"
          >
            Reserve your place
          </a>
        </div>
      </section>

      <GoogleReviewsSection />

      <section className="section-light page-section border-t border-border">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="heading-lg text-foreground">The team</h2>
              <p className="type-body-sm mt-2 max-w-lg text-muted">
                Six clinicians and coordinators — ask for someone by name when you book, or we&apos;ll match you to
                the right dentist.
              </p>
            </div>
            <Link href="/team" className="type-link shrink-0 text-brand-lime hover:underline">
              Full profiles →
            </Link>
          </div>
          <div className="mt-8">
            <TeamCarousel />
          </div>
        </div>
      </section>

      <SpeakToUsBanner />
    </>
  );
}
