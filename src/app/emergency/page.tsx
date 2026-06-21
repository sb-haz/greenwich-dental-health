import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SpeakToUsBanner } from "@/components/SpeakToUsBanner";
import { emergencyContent, images, pageHeroImages, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Dental Emergency",
  description: "Emergency dental appointments at Greenwich Dental Health, Greenwich SE10.",
};

export default function EmergencyPage() {
  const { situations, visitSteps, quote } = emergencyContent;

  return (
    <>
      <PageHero
        title="Have a dental emergency?"
        image={pageHeroImages.emergency.src}
        imageAlt={pageHeroImages.emergency.alt}
        prominentCall={{
          eyebrow: emergencyContent.callEyebrow,
          lead: emergencyContent.callLead,
          phone: site.phone,
          phoneHref: site.phoneHref,
          address: site.address,
          bookingHref: site.bookingUrl,
        }}
      />

      <section className="section-light page-section">
        <div className="mx-auto grid max-w-7xl gap-6 sm:gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <h2 className="heading-lg text-foreground">{emergencyContent.situationsTitle}</h2>
            <ul className="mt-5 space-y-2.5 sm:mt-8 sm:space-y-3">
              {situations.map((item) => (
                <li key={item} className="flex gap-3 text-base text-foreground/90">
                  <span className="mt-1 shrink-0 font-bold text-brand-lime" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md ring-1 ring-border/80">
            <Image
              src={images.clinic}
              alt="Emergency dental care at Greenwich Dental Health"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section-muted border-y border-border page-section">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-lg text-foreground">{emergencyContent.feeTitle}</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-surface p-6 lg:p-8">
              <p className="type-label text-muted">Standard emergency visit</p>
              <p className="heading-lg mt-2 text-brand-lime">{emergencyContent.feeStandard}</p>
              <p className="type-body-sm mt-2 text-muted">{emergencyContent.feeStandardDetail}</p>
            </div>
            <div className="rounded-xl border border-brand-lime/30 bg-soft-green p-6 lg:p-8">
              <p className="type-label text-foreground">Existing patients</p>
              <p className="heading-lg mt-2 text-foreground">{emergencyContent.feeExisting}</p>
              <p className="type-body-sm mt-2 text-muted">{emergencyContent.feeExistingDetail}</p>
            </div>
          </div>
          <p className="type-body-sm mt-8">
            <Link href="/fees" className="type-link text-brand-lime hover:underline">
              View full fee guide →
            </Link>
          </p>
        </div>
      </section>

      <section className="border-l-4 border-red-500 bg-red-50 page-section page-section--compact">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-sm text-red-800">{emergencyContent.urgentWarningTitle}</h2>
          <p className="type-body mt-3 max-w-3xl text-red-900/90">{emergencyContent.urgentWarning}</p>
        </div>
      </section>

      <section className="page-section">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-lg text-foreground">{emergencyContent.visitTitle}</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {visitSteps.map((step, i) => (
              <li key={step.title} className="border-t-2 border-brand-lime pt-6">
                <span className="type-label text-muted">Step {i + 1}</span>
                <h3 className="heading-sm mt-2 text-foreground">{step.title}</h3>
                <p className="type-body-sm mt-2 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-muted page-section">
        <div className="mx-auto max-w-7xl">
          <blockquote className="lg:grid lg:grid-cols-[auto_1fr] lg:items-start lg:gap-10">
            <div className="relative mx-auto h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-border lg:mx-0">
              <Image src={quote.image} alt="" fill className="object-cover" sizes="80px" />
            </div>
            <div className="mt-8 text-center lg:mt-0 lg:text-left">
              <p className="section-eyebrow">Patient story</p>
              <p className="heading-md mt-4 text-foreground">&ldquo;{quote.text}&rdquo;</p>
              <footer className="mt-6">
                <cite className="type-link not-italic text-brand-lime">{quote.author}</cite>
                <span className="type-body-sm mt-1 block text-muted">{quote.detail}</span>
              </footer>
            </div>
          </blockquote>
        </div>
      </section>

      <SpeakToUsBanner variant="emergency" />
    </>
  );
}
