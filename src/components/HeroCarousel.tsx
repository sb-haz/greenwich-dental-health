import { AwardBadges } from "@/components/AwardBadges";
import { HeroContent, HeroVideo } from "@/components/HeroVideo";

export function HeroCarousel() {
  return (
    <div>
      <section id="home-hero" className="home-hero home-hero--video-bg border-b border-border" aria-label="Welcome">
        <div className="home-hero__video-bg" aria-hidden>
          <HeroVideo variant="bleed" />
        </div>
        <div className="home-hero__video-overlay" aria-hidden />

        <div className="page-hero__inner home-hero__inner relative z-10 mx-auto max-w-7xl">
          <HeroContent />
        </div>
      </section>

      <section className="section-dark page-section page-section--compact border-t border-white/10">
        <div className="mx-auto max-w-7xl">
          <h2 className="heading-lg text-white">2024 Private Dentistry Awards</h2>
          <p className="type-body-sm mt-2 max-w-2xl text-muted-on-dark">
            Practice of the Year winner. Highly commended for digital dentistry. Invisalign Elite Provider.
          </p>
          <div className="mt-6 sm:mt-8">
            <AwardBadges onDark />
          </div>
        </div>
      </section>
    </div>
  );
}
