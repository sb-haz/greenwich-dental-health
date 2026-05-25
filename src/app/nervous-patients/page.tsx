import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SpeakToUsBanner } from "@/components/SpeakToUsBanner";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Nervous Patients",
  description: "Gentle dentistry for anxious patients — IV and inhalation sedation at Greenwich Dental Health.",
};

export default function NervousPatientsPage() {
  return (
    <>
      <PageHero
        title="Nervous Patients"
        subtitle="We specialise in caring for anxious patients. Our team takes time to explain every step, answer your questions, and help you feel at ease."
      />
      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="gradient-card rounded-2xl border border-border p-8">
            <h2 className="heading-sm text-foreground">Sedation options</h2>
            <ul className="type-body-sm mt-6 space-y-4 text-muted">
              <li>
                <strong className="text-foreground">IV sedation</strong> — for adults who need deeper relaxation during
                treatment
              </li>
              <li>
                <strong className="text-foreground">Inhalation sedation (laughing gas)</strong> — available for children
                aged 5–14
              </li>
              <li>
                <strong className="text-foreground">Gentle approach</strong> — clear explanations, no rushing, and a calm
                environment throughout your visit
              </li>
            </ul>
          </div>
          <p className="type-body-sm text-muted">
            Many of our patients tell us they had avoided the dentist for years before finding us. We are proud of the
            feedback we receive from nervous patients who now feel confident attending regularly.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark"
            >
              Book a consultation
            </a>
            <Link href="/contact" className="btn-outline">
              Contact us
            </Link>
          </div>
        </div>
      </section>
      <SpeakToUsBanner />
    </>
  );
}
