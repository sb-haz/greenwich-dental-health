import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SpeakToUsBanner } from "@/components/SpeakToUsBanner";
import { site, treatments } from "@/lib/content";

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
        subtitle="From routine check-ups to smile makeovers — comprehensive private dentistry for the whole family."
      />

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl space-y-20">
          {treatments.map((treatment, i) => (
            <article
              key={treatment.id}
              id={treatment.id}
              className={`scroll-mt-40 grid items-center gap-10 border border-border bg-surface p-6 lg:grid-cols-2 lg:p-10 ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative aspect-[4/3] overflow-hidden border border-border">
                <Image src={treatment.image} alt={treatment.title} fill className="object-cover" sizes="50vw" />
              </div>
              <div>
                <h2 className="heading-md text-foreground">{treatment.title}</h2>
                <p className="type-body-sm mt-4 text-muted">{treatment.description}</p>
                <ul className="type-body-sm mt-6 space-y-2">
                  {treatment.items.map((item) => (
                    <li key={item} className="flex gap-2 text-muted">
                      <span className="text-primary">✓</span>
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
            </article>
          ))}
        </div>
      </section>

      <section className="section-muted border-y border-border px-5 py-14 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="heading-lg text-foreground">Not sure which treatment is right for you?</h2>
          <p className="type-body-sm mt-3 text-muted">Book a consultation and our team will create a personalised plan.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark"
            >
              Book online
            </a>
            <Link href="/fees" className="btn-outline">
              View fees
            </Link>
          </div>
        </div>
      </section>
      <SpeakToUsBanner />
    </>
  );
}
