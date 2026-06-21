import Image from "next/image";
import Link from "next/link";
import { resultsCases, site } from "@/lib/content";

export function BeforeAfterGallery() {
  return (
    <section className="section-light page-section page-section--loose border-t border-border">
      <div className="mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-[minmax(0,16rem)_1fr] lg:gap-12 xl:gap-16">
          <div className="sticky-below-header">
            <h2 className="heading-lg text-foreground">Before &amp; after</h2>
            <p className="type-body-sm mt-3 text-muted">
              Cosmetic, orthodontic and restorative work at our Greenwich practice. Photos shown at consultation
              until our full gallery is live.
            </p>
            <div className="mt-6 hidden flex-col gap-3 lg:flex">
              <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-dark">
                Book a consultation
              </a>
              <Link href="/treatments" className="btn-outline text-center">
                Browse treatments
              </Link>
            </div>
          </div>

          <div className="mt-8 space-y-8 lg:mt-0">
            {resultsCases.map((item) => (
              <article key={item.treatment} className="card-friendly overflow-hidden">
                <div className="border-b border-border px-5 py-4 sm:px-6">
                  <h3 className="heading-md text-foreground">{item.treatment}</h3>
                  <p className="type-body-sm mt-1 text-muted">{item.description}</p>
                </div>
                <div className="grid sm:grid-cols-2">
                  <div className="relative aspect-[4/3] border-b border-border sm:border-b-0 sm:border-r">
                    <Image
                      src={item.image}
                      alt={`${item.treatment} — before`}
                      fill
                      className="object-cover grayscale"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <span className="type-label absolute left-3 top-3 rounded-md bg-brand-dark/90 px-2.5 py-1 text-white">
                      Before
                    </span>
                  </div>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.image}
                      alt={`${item.treatment} — after`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <span className="type-label absolute left-3 top-3 rounded-md bg-brand-dark px-2.5 py-1 text-white">
                      After
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:hidden">
          <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer" className="btn-dark">
            Book a consultation
          </a>
          <Link href="/treatments" className="btn-outline text-center">
            Browse treatments
          </Link>
        </div>
      </div>
    </section>
  );
}
