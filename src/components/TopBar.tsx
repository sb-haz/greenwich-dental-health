import { contactBanner, site } from "@/lib/content";

export function TopBar() {
  return (
    <div className="type-body-sm border-b border-border bg-soft-green py-2 text-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <p className="min-w-0 font-medium">
          {contactBanner.headline}{" "}
          <a href={site.phoneHref} className="font-semibold text-primary hover:text-primary-dark">
            {contactBanner.phone}
          </a>
        </p>
        <p className="hidden max-w-lg truncate text-muted lg:block">{contactBanner.address}</p>
      </div>
    </div>
  );
}
