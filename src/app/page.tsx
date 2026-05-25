import Image from "next/image";
import Link from "next/link";
import { BeforeAfterGallery } from "@/components/BeforeAfterGallery";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { TeamCarousel } from "@/components/TeamCarousel";
import { HeroCarousel } from "@/components/HeroCarousel";
import { SpeakToUsBanner } from "@/components/SpeakToUsBanner";
import { TrustStrip } from "@/components/TrustStrip";
import { images, invisalignPromo, services, site } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <TrustStrip />

      <section className="section-muted mesh-bg mesh-bg--muted px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-eyebrow">What we offer</p>
              <h2 className="heading-lg mt-2 text-foreground">Comprehensive dental care</h2>
              <p className="section-lead mt-3 max-w-xl">
                From check-ups to smile makeovers — clear advice, transparent fees, and treatment that fits your life.
              </p>
            </div>
            <Link href="/treatments" className="btn-outline shrink-0">
              View all treatments
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="card-friendly group overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="heading-md text-foreground">{service.title}</h3>
                  <p className="type-body-sm mt-2 text-muted">{service.description}</p>
                  <Link
                    href={service.href}
                    className="type-link mt-4 inline-flex items-center gap-1 text-brand-dark hover:text-brand-lime"
                  >
                    Find out more <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BeforeAfterGallery />

      <section className="section-dark px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-7xl lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="section-eyebrow">Limited time</p>
            <h2 className="heading-lg mt-2 text-white">{invisalignPromo.title}</h2>
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
            className="btn-dark mt-6 shrink-0 lg:mt-0"
          >
            Reserve your place
          </a>
        </div>
      </section>

      <GoogleReviewsSection />

      <section className="section-muted mesh-bg mesh-bg--muted px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="section-eyebrow">Our dentists</p>
              <h2 className="heading-lg mt-2 text-foreground">Meet the team</h2>
              <p className="section-lead mt-2">Experienced clinicians who explain your options clearly.</p>
            </div>
            <Link href="/team" className="type-link text-brand-lime hover:underline">
              Full profiles →
            </Link>
          </div>
          <TeamCarousel />
        </div>
      </section>

      <SpeakToUsBanner />
    </>
  );
}
