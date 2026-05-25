import Link from "next/link";
import { contactBanner, site } from "@/lib/content";

export function SpeakToUsBanner() {
  return (
    <section className="section-dark mesh-bg mesh-bg--dark px-5 py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-xl border border-white/10 bg-brand-dark-elevated p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="section-eyebrow">Get in touch</p>
            <p className="heading-sm mt-2 text-white">
              {contactBanner.headline}{" "}
              <a href={site.phoneHref} className="text-brand-lime hover:underline">
                {contactBanner.phone}
              </a>
            </p>
            <p className="type-body-sm mt-2 text-muted-on-dark">{contactBanner.address}</p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="type-link rounded-lg bg-white px-5 py-3 text-center text-brand-dark hover:bg-white/90"
            >
              Book online
            </a>
            <a href={site.phoneHref} className="btn-outline-light text-center">
              Call us
            </a>
            <Link href="/contact" className="btn-outline-light text-center">
              Directions →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
