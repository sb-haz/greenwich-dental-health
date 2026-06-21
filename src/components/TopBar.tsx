import { contactBanner, site } from "@/lib/content";

export function TopBar() {
  return (
    <div className="type-body-sm border-b border-white/10 bg-brand-dark py-2.5 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-5 lg:px-8">
        <p className="min-w-0 font-medium text-white/90">
          {contactBanner.headline}{" "}
          <a href={site.phoneHref} className="font-semibold text-brand-lime hover:text-white">
            {contactBanner.phone}
          </a>
        </p>
        <p className="hidden max-w-lg truncate text-muted-on-dark lg:block">{contactBanner.address}</p>
      </div>
    </div>
  );
}
