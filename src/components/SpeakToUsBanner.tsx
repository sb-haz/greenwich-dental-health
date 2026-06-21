import Link from "next/link";
import {
  contactBanner,
  emergencyContent,
  feeIntro,
  nervousPatientsContent,
  site,
  treatmentsCta,
} from "@/lib/content";

type SpeakToUsBannerProps = {
  variant?: "default" | "treatments" | "emergency" | "nervous" | "fees";
};

export function SpeakToUsBanner({ variant = "default" }: SpeakToUsBannerProps) {
  const content = (() => {
    switch (variant) {
      case "treatments":
        return {
          eyebrow: treatmentsCta.eyebrow,
          title: treatmentsCta.title,
          lead: treatmentsCta.lead,
          actions: (
            <>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark text-center"
              >
                Book free consultation
              </a>
              <Link href="/fees" className="btn-outline-light text-center">
                View fees
              </Link>
              <Link href="/contact" className="btn-outline-light text-center">
                Contact us
              </Link>
            </>
          ),
        };
      case "emergency":
        return {
          eyebrow: "Still need help?",
          title: emergencyContent.ctaTitle,
          lead: emergencyContent.ctaLead,
          actions: (
            <>
              <a href={site.phoneHref} className="btn-dark text-center">
                Call {site.phone}
              </a>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light text-center"
              >
                Book online
              </a>
              <Link href="/contact" className="btn-outline-light text-center">
                Directions
              </Link>
            </>
          ),
        };
      case "nervous":
        return {
          eyebrow: "Ready when you are",
          title: nervousPatientsContent.ctaTitle,
          lead: nervousPatientsContent.ctaLead,
          actions: (
            <>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark text-center"
              >
                Book free consultation
              </a>
              <Link href="/contact" className="btn-outline-light text-center">
                Contact us
              </Link>
              <Link href="/fees" className="btn-outline-light text-center">
                View fees
              </Link>
            </>
          ),
        };
      case "fees":
        return {
          title: feeIntro.ctaTitle,
          lead: feeIntro.ctaLead,
          actions: (
            <>
              <Link href="/contact" className="btn-outline-light text-center">
                {feeIntro.ctaContactLabel}
              </Link>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-dark text-center"
              >
                {feeIntro.ctaBookLabel}
              </a>
            </>
          ),
        };
      default:
        return {
          eyebrow: "Get in touch",
          title: (
            <>
              {contactBanner.headline}{" "}
              <a href={site.phoneHref} className="text-brand-lime hover:underline">
                {contactBanner.phone}
              </a>
            </>
          ),
          lead: contactBanner.address,
          actions: (
            <>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-white px-6 py-3 text-center text-base font-semibold text-brand-dark transition-colors hover:bg-white/90"
              >
                Book online
              </a>
              <a href={site.phoneHref} className="btn-outline-light text-center">
                Call us
              </a>
              <Link href="/contact" className="btn-outline-light text-center">
                Directions →
              </Link>
            </>
          ),
        };
    }
  })();

  return (
    <section className="section-dark border-t border-white/10 page-section">
      <div className="mx-auto w-full max-w-7xl">
        <div className="site-cta">
          <div className="site-cta__content">
            {content.eyebrow && <p className="section-eyebrow">{content.eyebrow}</p>}
            <h2 className={`heading-lg text-white ${content.eyebrow ? "mt-2" : ""}`}>{content.title}</h2>
            <p className="section-lead mt-3 text-muted-on-dark">{content.lead}</p>
          </div>
          <div className="site-cta__actions">{content.actions}</div>
        </div>
      </div>
    </section>
  );
}
