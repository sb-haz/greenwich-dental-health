import Image from "next/image";
import { images } from "@/lib/content";

type ProminentCall = {
  eyebrow?: string;
  lead: string;
  phone: string;
  phoneHref: string;
  address?: string;
  bookingHref?: string;
};

type PageHeroProps = {
  title: string;
  subtitle?: string;
  dark?: boolean;
  image?: string;
  imageAlt?: string;
  prominentCall?: ProminentCall;
};

export function PageHero({
  title,
  subtitle,
  dark = true,
  image = images.clinic,
  imageAlt = "Greenwich Dental Health",
  prominentCall,
}: PageHeroProps) {
  return (
    <section
      className={
        dark
          ? "page-hero section-dark mesh-bg mesh-bg--dark relative overflow-hidden border-b border-white/10"
          : "page-hero section-muted relative overflow-hidden border-b border-border"
      }
    >
      {dark && image && (
        <div className="page-hero__media pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">
            <Image
              src={image}
              alt=""
              fill
              className="object-cover object-center opacity-[0.42] lg:object-right"
              sizes="(max-width: 1024px) 100vw, 58vw"
              priority
            />
          </div>
          <div className="page-hero__fade absolute inset-0" />
        </div>
      )}

      <div className="page-hero__inner relative z-10">
        <div className="mx-auto max-w-7xl">
          <div className={prominentCall ? "max-w-2xl" : "max-w-2xl lg:max-w-xl"}>
            {prominentCall?.eyebrow && (
              <p className="section-eyebrow text-red-300">{prominentCall.eyebrow}</p>
            )}
            <h1
              className={`heading-lg ${prominentCall ? "mt-2" : ""} ${dark ? "text-white" : "text-foreground"}`}
            >
              {title}
            </h1>
            {subtitle && !prominentCall && (
              <p className={`section-lead mt-3 sm:mt-4 ${dark ? "text-muted-on-dark" : "text-muted"}`}>
                {subtitle}
              </p>
            )}
            {prominentCall && (
              <div className="mt-5 sm:mt-6">
                <p className="section-lead text-muted-on-dark">{prominentCall.lead}</p>
                <a
                  href={prominentCall.phoneHref}
                  className="type-display mt-4 block text-brand-lime transition-colors hover:text-white"
                >
                  {prominentCall.phone}
                </a>
                {prominentCall.address && (
                  <p className="type-body-sm mt-3 text-muted-on-dark">{prominentCall.address}</p>
                )}
                {prominentCall.bookingHref && (
                  <a
                    href={prominentCall.bookingHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline-light mt-5 inline-flex"
                  >
                    Book online
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
