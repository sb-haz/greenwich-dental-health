import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SpeakToUsBanner } from "@/components/SpeakToUsBanner";
import { images, nervousPatientsContent, pageHeroImages, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Nervous Patients",
  description: "Gentle dentistry for anxious patients — IV and inhalation sedation at Greenwich Dental Health.",
};

export default function NervousPatientsPage() {
  const { intro, sedationOptions, steps, quote } = nervousPatientsContent;

  return (
    <>
      <PageHero
        title="Nervous Patients"
        subtitle="We specialise in caring for anxious patients. Our team takes time to explain every step, answer your questions, and help you feel at ease."
        image={pageHeroImages.nervous.src}
        imageAlt={pageHeroImages.nervous.alt}
      />

      <section className="section-light page-section">
        <div className="mx-auto grid max-w-7xl items-center gap-6 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="section-eyebrow">{intro.eyebrow}</p>
            <h2 className="heading-lg mt-2 text-foreground">{intro.title}</h2>
            <p className="section-lead mt-4">{intro.lead}</p>
            <p className="type-body mt-6 text-muted">
              Our clinical director, Dr Abhishek Agarwal, has advanced training in IV sedation alongside
              implant and restorative dentistry — so anxious patients are supported by an experienced team
              throughout.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md ring-1 ring-border/80 lg:aspect-[5/4]">
            <Image
              src={images.clinic}
              alt="Calm, modern treatment room at Greenwich Dental Health"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section-muted border-y border-border page-section">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-lg text-foreground">{nervousPatientsContent.sedationTitle}</h2>
          <p className="section-lead mt-3 max-w-2xl">{nervousPatientsContent.sedationLead}</p>
          <ul className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-3">
            {sedationOptions.map((option) => (
              <li
                key={option.title}
                className="flex flex-col rounded-xl border border-border bg-surface p-6 shadow-sm lg:p-8"
              >
                <p className="type-label text-brand-lime">{option.subtitle}</p>
                <h3 className="heading-sm mt-2 text-foreground">{option.title}</h3>
                <p className="type-body-sm mt-4 flex-1 text-muted">{option.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="page-section">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-lg text-foreground">{nervousPatientsContent.stepsTitle}</h2>
          <ol className="mt-8 grid gap-6 sm:mt-10 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <li key={step.title} className="relative pl-12">
                <span
                  className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-brand-lime text-base font-bold text-brand-dark"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <h3 className="heading-sm text-foreground">{step.title}</h3>
                <p className="type-body-sm mt-2 text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-dark page-section">
        <div className="mx-auto max-w-7xl">
          <blockquote className="lg:grid lg:grid-cols-[auto_1fr] lg:items-start lg:gap-10">
            <div className="relative mx-auto h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-white/20 lg:mx-0">
              <Image src={quote.image} alt="" fill className="object-cover" sizes="80px" />
            </div>
            <div className="mt-8 text-center lg:mt-0 lg:text-left">
              <p className="section-eyebrow">Patient story</p>
              <p className="heading-md mt-4 text-white">&ldquo;{quote.text}&rdquo;</p>
              <footer className="mt-6">
                <cite className="type-link not-italic text-brand-lime">{quote.author}</cite>
                <span className="type-body-sm mt-1 block text-muted-on-dark">{quote.detail}</span>
              </footer>
            </div>
          </blockquote>
        </div>
      </section>

      <SpeakToUsBanner variant="nervous" />
    </>
  );
}
