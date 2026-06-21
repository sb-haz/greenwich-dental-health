"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks, site } from "@/lib/content";
import { MobileNavDrawer } from "./MobileNavDrawer";
import { SecondaryNav } from "./SecondaryNav";
import { TopBar } from "./TopBar";

const CONDENSE_AT = 72;
const EXPAND_AT = 24;

const primaryNav = navLinks.filter((l) => !("external" in l && l.external));

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const condensedRef = useRef(false);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      const next = condensedRef.current ? y > EXPAND_AT : y > CONDENSE_AT;
      if (next !== condensedRef.current) {
        condensedRef.current = next;
        setCondensed(next);
      }
    };

    update();
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    const syncHeaderHeight = () => {
      document.documentElement.style.setProperty("--site-header-height", `${header.offsetHeight}px`);
    };

    syncHeaderHeight();
    const observer = new ResizeObserver(syncHeaderHeight);
    observer.observe(header);

    return () => observer.disconnect();
  }, [condensed]);

  const navLinkClass = (isActive: boolean) =>
    `type-nav rounded-lg px-3 py-2 transition-colors duration-200 ${
      isActive
        ? "bg-primary-light text-primary-dark"
        : "text-muted hover:bg-surface-alt hover:text-foreground"
    }`;

  const reviewsLink = navLinks.find((l) => "external" in l && l.external);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-surface">
      <div
        className="grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
        style={{ gridTemplateRows: condensed ? "0fr" : "1fr" }}
        aria-hidden={condensed}
      >
        <div className="overflow-hidden">
          <TopBar />
        </div>
      </div>
      <div
        className={`border-b border-border bg-surface/95 backdrop-blur-sm transition-shadow duration-300 ${
          condensed ? "shadow-md shadow-black/5" : ""
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:h-[4.25rem] sm:gap-4 sm:px-5 lg:px-8">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src={site.logo}
              alt="Greenwich Dental Health"
              width={site.logoWidth}
              height={site.logoHeight}
              className="h-11 w-auto max-w-[12rem] object-contain object-left sm:h-14 sm:max-w-[17rem]"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Main">
            {primaryNav.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link key={link.label} href={link.href} className={navLinkClass(isActive)}>
                  {link.label}
                </Link>
              );
            })}
            {reviewsLink && (
              <a
                href={reviewsLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className={navLinkClass(false)}
              >
                {reviewsLink.label}
              </a>
            )}
            <a
              href={site.phoneHref}
              className={`type-link ml-1 rounded-lg px-3 py-2 text-primary transition-colors duration-200 hover:bg-primary-light ${
                condensed ? "" : "lg:hidden"
              }`}
            >
              {site.phone}
            </a>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={site.phoneHref}
              className="type-link rounded-lg border border-border bg-surface-alt px-3 py-2 text-foreground"
            >
              Call
            </a>
            <button
              type="button"
              className={`mobile-menu-trigger ${open ? "mobile-menu-trigger--open" : ""}`}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              <span aria-hidden />
              <span aria-hidden />
              <span aria-hidden />
            </button>
          </div>
        </div>
      </div>
      <SecondaryNav />

      <MobileNavDrawer open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
