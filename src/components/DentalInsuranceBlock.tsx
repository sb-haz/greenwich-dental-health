import { dentalInsurers, feeIntro } from "@/lib/content";

export function DentalInsuranceSection() {
  return (
    <section className="section-dark border-t border-white/10 page-section">
      <div className="mx-auto max-w-6xl">
        <p className="section-eyebrow">Insurance &amp; claims</p>
        <h2 className="heading-lg mt-2 text-white">{feeIntro.insuranceTitle}</h2>
        <p className="section-lead mt-4 max-w-3xl text-white/90">{feeIntro.insuranceLead}</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_minmax(16rem,22rem)] lg:items-start lg:gap-14">
          <div>
            <p className="type-label text-brand-lime">Providers we work with</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {dentalInsurers.map((name) => (
                <li
                  key={name}
                  className="rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-base font-semibold text-white"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="heading-sm text-white">Hassle-free claiming</p>
            <p className="type-body-sm mt-3 text-muted-on-dark">{feeIntro.insuranceDetail}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
