import type { Metadata } from "next";
import Link from "next/link";
import { FAQAccordion } from "@/components/FAQAccordion";
import { FeeTabs } from "@/components/FeeTabs";
import { PageHero } from "@/components/PageHero";
import { SpeakToUsBanner } from "@/components/SpeakToUsBanner";
import { feeIntro, feePolicies, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Fees & Pricing",
  description:
    "Transparent private dental fees at Greenwich Dental Health — examinations, Invisalign, implants, cosmetic dentistry, and more.",
};

export default function FeesPage() {
  return (
    <>
      <PageHero
        title="Fees & Pricing"
        subtitle="Outstanding dental care at accessible prices. All fees are indicative — your dentist will provide a personalised estimate at your consultation."
      />

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="type-lead max-w-3xl">{feeIntro.headline}</p>
          <div className="mt-10 rounded-2xl border border-primary/20 bg-soft-green p-8">
            <h2 className="heading-sm text-foreground">Dental insurance</h2>
            <p className="type-body-sm mt-3 text-muted">{feeIntro.insurance}</p>
          </div>
        </div>
      </section>

      <section className="bg-surface-alt px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="heading-lg text-foreground">Treatment fees</h2>
          <p className="type-body-sm mt-3 text-muted">Select a category to view prices.</p>
          <div className="mt-10">
            <FeeTabs />
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
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

      <section className="bg-surface-alt px-5 py-16 lg:px-8 lg:py-24">
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
      <SpeakToUsBanner />
    </>
  );
}
