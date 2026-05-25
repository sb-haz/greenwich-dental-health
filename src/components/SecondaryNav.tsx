"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { secondaryNavLinks } from "@/lib/content";

export function SecondaryNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Treatments and quick links"
      className="hidden border-b border-border bg-surface-alt lg:block"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ul className="flex items-center gap-1 overflow-x-auto py-2.5">
          {secondaryNavLinks.map((link) => {
            const isHighlight = "highlight" in link && link.highlight;
            return (
              <li key={link.label} className="shrink-0">
                <Link
                  href={link.href}
                  className={`type-nav block whitespace-nowrap rounded-md px-3 py-1.5 transition-colors duration-200 ${
                    isHighlight
                      ? "font-semibold text-red-600 hover:bg-red-50"
                      : pathname === link.href
                        ? "bg-primary-light text-primary"
                        : "text-muted hover:bg-surface hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
