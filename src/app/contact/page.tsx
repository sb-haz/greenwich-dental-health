import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { SpeakToUsBanner } from "@/components/SpeakToUsBanner";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Greenwich Dental Health — phone, address, opening hours, and enquiry form.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We would love to hear from you. Book online, call us, or send an enquiry below."
      />

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="heading-sm text-foreground">Get in touch</h2>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="type-label text-muted">Phone</dt>
                <dd className="mt-1">
                  <a href={site.phoneHref} className="type-link text-primary hover:underline">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="type-label text-muted">Address</dt>
                <dd className="type-body-sm mt-1 text-muted">{site.address}</dd>
              </div>
              <div>
                <dt className="type-label text-muted">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${site.email}`} className="type-link text-primary hover:underline">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="type-label text-muted">Book online</dt>
                <dd className="mt-1">
                  <a
                    href={site.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="type-link text-primary hover:underline"
                  >
                    book.dentr.net/greenwichdentalhealth
                  </a>
                </dd>
              </div>
              <div>
                <dt className="type-label text-muted">Opening hours</dt>
                <dd className="mt-3">
                  <ul className="type-body-sm space-y-2 text-muted">
                    {site.hours.map((h) => (
                      <li key={h.day}>
                        <span className="font-semibold text-foreground">{h.day}</span> — {h.time}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
            <div className="mt-10 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Greenwich Dental Health location"
                src="https://maps.google.com/maps?q=14-16+Victoria+Parade,+Greenwich,+London+SE10+9FR&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <h2 className="heading-sm text-foreground">Send an enquiry</h2>
            <p className="type-body-sm mt-2 text-muted">
              This form opens your email client — we do not store submissions on this site.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <SpeakToUsBanner />
    </>
  );
}
