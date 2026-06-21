import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { DentalInsuranceSection } from "@/components/DentalInsuranceBlock";
import { FeeTabs } from "@/components/FeeTabs";
import { PageHero } from "@/components/PageHero";
import { SpeakToUsBanner } from "@/components/SpeakToUsBanner";
import { feeIntro, feePolicies, pageHeroImages, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Fees & Pricing",
  description:
    "Private dental fees at Greenwich Dental Health — examinations, Invisalign, implants, cosmetic dentistry, and more.",
};

export default function FeesPage() {
  return (
    <>
      <PageHero
        title="Fees & Pricing"
        subtitle="Outstanding dental care at accessible prices. All fees are indicative — your dentist will provide a personalised estimate at your consultation."
        image={pageHeroImages.fees.src}
        imageAlt={pageHeroImages.fees.alt}
      />

      <section className="section-muted page-section page-section--loose">
        <div className="mx-auto max-w-6xl">
          <h2 className="heading-lg text-foreground">{feeIntro.feesTitle}</h2>
          <p className="section-lead mt-3 max-w-2xl">{feeIntro.feesLead}</p>
          <div className="mt-10">
            <FeeTabs />
          </div>
        </div>
      </section>

      <DentalInsuranceSection />

      <section className="page-section page-section--loose">
        <div className="mx-auto max-w-6xl">
          <h2 className="heading-lg text-foreground">Practice policies</h2>
          <ul className="mt-8 space-y-4">
            {feePolicies.map((policy) => (
              <li key={policy} className="type-body-sm flex gap-3 text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {policy}
              </li>
            ))}
          </ul>
          <p className="type-body-sm mt-8 text-muted">
            Ready to book?{" "}
            <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="type-link text-primary hover:underline">
              Book online
            </a>{" "}
            or call{" "}
            <a href={site.phoneHref} className="type-link text-primary hover:underline">
              {site.phone}
            </a>
            .
          </p>
        </div>
      </section>

      <section className="bg-surface-alt page-section page-section--loose">
        <div className="mx-auto max-w-3xl">
          <h2 className="heading-lg text-foreground">Frequently asked questions</h2>
          <div className="mt-10">
            <FAQAccordion />
          </div>
          <p className="type-body-sm mt-10 text-center text-muted">
            More questions?{" "}
            <Link href="/contact" className="type-link text-primary hover:underline">
              Contact us
            </Link>
          </p>
        </div>
      </section>
      <SpeakToUsBanner variant="fees" />
    </>
  );
}
