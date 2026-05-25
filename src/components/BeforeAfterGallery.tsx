import Image from "next/image";
import Link from "next/link";
import { resultsCases, site } from "@/lib/content";

export function BeforeAfterGallery() {
  return (
    <section className="section-light mesh-bg mesh-bg--light px-5 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="section-eyebrow">Real patient results</p>
          <h2 className="heading-lg mt-2 text-foreground">See the difference</h2>
          <p className="section-lead mt-3">
            Before and after outcomes from cosmetic, orthodontic and restorative treatments at our Greenwich
            practice.
          </p>
        </div>

        <div className="mt-12 space-y-10">
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

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
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
