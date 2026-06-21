import Image from "next/image";
import Link from "next/link";
import { navLinks, secondaryNavLinks, site } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="border-b border-white/10 px-4 py-8 sm:px-5 sm:py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-block rounded-lg bg-white px-3 py-2">
            <Image
              src={site.logo}
              alt="Greenwich Dental Health"
              width={site.logoWidth}
              height={site.logoHeight}
              className="h-auto max-h-14 w-auto object-contain"
            />
          </span>
          <div className="text-left sm:text-right">
            <p className="type-link">
              <a href={site.phoneHref} className="text-brand-lime hover:underline">
                {site.phone}
              </a>
            </p>
            <p className="type-body-sm mt-1 text-white/70">{site.address}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:gap-10 sm:px-5 sm:py-12 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="type-body-sm text-white/75">
            Private dental practice at New Capital Quay, Greenwich — five minutes from Cutty Sark DLR.
          </p>
        </div>
        <div>
          <p className="type-label text-brand-lime">Practice</p>
          <ul className="mt-4 space-y-2">
            {navLinks
              .filter((l) => !("external" in l && l.external))
              .map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="type-body-sm text-white/75 hover:text-brand-lime">
                    {link.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div>
          <p className="type-label text-brand-lime">Treatments</p>
          <ul className="mt-4 space-y-2">
            {secondaryNavLinks.slice(0, 5).map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="type-body-sm text-white/75 hover:text-brand-lime">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="type-caption border-t border-white/10 py-6 text-center text-white/50">
        © {new Date().getFullYear()} Greenwich Dental Health
      </div>
    </footer>
  );
}
