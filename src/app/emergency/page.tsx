import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SpeakToUsBanner } from "@/components/SpeakToUsBanner";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Dental Emergency",
  description: "Emergency dental appointments at Greenwich Dental Health, Greenwich SE10.",
};

export default function EmergencyPage() {
  return (
    <>
      <PageHero
        title="Have a dental emergency?"
        subtitle="We aim to see emergency patients as soon as possible. Call us immediately — do not wait if you are in severe pain or have suffered dental trauma."
      />
      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="gradient-card rounded-2xl border border-primary/30 p-8">
            <h2 className="heading-sm text-foreground">Call us now</h2>
            <a
              href={site.phoneHref}
              className="type-display mt-4 block text-brand-lime hover:text-primary"
            >
              {site.phone}
            </a>
            <p className="type-body-sm mt-6 text-muted">{site.address}</p>
          </div>
          <div className="type-body-sm mt-10 space-y-6 text-muted">
            <p>
              Emergency appointment — assessment including small x-ray: <strong className="text-foreground">£120</strong>{" "}
              (£85 for regular existing patients who have had check-ups).
            </p>
            <p>
              If you are experiencing severe swelling, difficulty breathing, or uncontrolled bleeding, please call{" "}
              <strong className="text-foreground">999</strong> or attend A&amp;E immediately.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap gap-4">
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
