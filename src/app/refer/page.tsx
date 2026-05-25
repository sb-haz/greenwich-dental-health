import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { SpeakToUsBanner } from "@/components/SpeakToUsBanner";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Refer a Patient",
  description: "Refer a patient to Greenwich Dental Health — private dentistry in Greenwich, London.",
};

export default function ReferPage() {
  return (
    <>
      <PageHero
        title="Refer a Patient"
        subtitle="We welcome referrals from dental and medical colleagues. Contact our team with patient details and we will arrange an appointment promptly."
      />
      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="heading-sm text-foreground">How to refer</h2>
            <ul className="type-body-sm mt-6 space-y-4 text-muted">
              <li className="flex gap-3">
                <span className="type-link text-primary">1.</span>
                Call us on{" "}
                <a href={site.phoneHref} className="type-link text-primary">
                  {site.phone}
                </a>
              </li>
              <li className="flex gap-3">
                <span className="type-link text-primary">2.</span>
                Email{" "}
                <a href={`mailto:${site.email}`} className="type-link text-primary">
                  {site.email}
                </a>
              </li>
              <li className="flex gap-3">
                <span className="type-link text-primary">3.</span>
                Complete the enquiry form with referral details
              </li>
            </ul>
            <p className="type-body-sm mt-8 text-muted">{site.address}</p>
          </div>
          <div className="gradient-card rounded-2xl border border-border p-8">
            <h2 className="heading-sm text-foreground">Referral enquiry</h2>
            <p className="type-body-sm mt-2 text-muted">Include patient name, contact, and reason for referral in your message.</p>
            <div className="mt-6">
              <ContactForm defaultSubject="Patient referral" />
            </div>
          </div>
        </div>
      </section>
      <SpeakToUsBanner />
    </>
  );
}
