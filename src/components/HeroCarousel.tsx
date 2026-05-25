import Image from "next/image";
import Link from "next/link";
import { AwardBadges } from "@/components/AwardBadges";
import { homeHero, site } from "@/lib/content";

export function HeroCarousel() {
  return (
    <div>
      <section id="home-hero" className="hero-gradient border-b border-border">
        <div className="hero-gradient__backdrop" aria-hidden>
          <div className="hero-gradient__mesh" />
          <div className="hero-gradient__blob hero-gradient__blob--lime" />
          <div className="hero-gradient__blob hero-gradient__blob--mint" />
          <div className="hero-gradient__blob hero-gradient__blob--glow" />
        </div>
        {/* Nav logo appears once this line passes the header (~15% into hero) */}
        <div
          id="hero-logo-trigger"
          className="pointer-events-none absolute left-0 right-0 top-[15%] z-0 h-px"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 sm:py-16 lg:px-8 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:gap-7 lg:text-left">
              <Link href="/" className="group inline-block shrink-0">
                <Image
                  src={site.logo}
                  alt=""
                  width={420}
                  height={112}
                  className="block h-[4.5rem] w-auto max-w-[min(100%,22rem)] transition-transform duration-300 group-hover:scale-[1.02] sm:h-24 md:h-28 lg:h-32"
                  priority
                />
                <span className="sr-only">Greenwich Dental Health</span>
              </Link>

              <div className="max-w-xl space-y-4">
                <h1 className="heading-xl text-brand-lime">{homeHero.headline}</h1>
                <p className="section-lead max-w-lg">{homeHero.subtitle}</p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <a href={site.phoneHref} className="btn-dark">
                  Call {site.phone}
                </a>
                <Link href="/treatments" className="btn-outline">
                  View treatments
                </Link>
              </div>
            </div>

            <div className="relative mx-auto aspect-[5/4] w-full max-w-xl lg:mx-0 lg:max-w-none">
              <div className="relative h-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-border">
                <Image
                  src={homeHero.image}
                  alt={homeHero.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark px-5 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="section-eyebrow">Why patients choose us</p>
          <h2 className="heading-lg mt-2 text-white">Trusted for clinical excellence</h2>
          <p className="section-lead mt-3 max-w-2xl text-muted-on-dark">
            UK award winners and leading Invisalign providers — recognised for digital dentistry and patient care.
          </p>
          <div className="mt-8">
            <AwardBadges onDark />
          </div>
        </div>
      </section>
    </div>
  );
}
