"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks, secondaryNavLinks, site } from "@/lib/content";
import { SecondaryNav } from "./SecondaryNav";
import { TopBar } from "./TopBar";

const CONDENSE_AT = 72;
const EXPAND_AT = 24;

const primaryNav = navLinks.filter((l) => !("external" in l && l.external));

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const [showNavLogo, setShowNavLogo] = useState(!isHome);
  const condensedRef = useRef(false);

  useEffect(() => {
    if (!isHome) {
      setShowNavLogo(true);
      return;
    }

    setShowNavLogo(false);
    const trigger = document.getElementById("hero-logo-trigger");
    if (!trigger) {
      setShowNavLogo(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setShowNavLogo(!entry.isIntersecting),
      { threshold: 0, rootMargin: `-${CONDENSE_AT}px 0px 0px 0px` },
    );
    observer.observe(trigger);
    return () => observer.disconnect();
  }, [isHome, pathname]);

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

  const navLinkClass = (isActive: boolean) =>
    `type-nav rounded-lg px-3 py-2 transition-colors duration-200 ${
      isActive
        ? "bg-primary-light text-primary-dark"
        : "text-muted hover:bg-surface-alt hover:text-foreground"
    }`;

  const reviewsLink = navLinks.find((l) => "external" in l && l.external);

  return (
    <header className="sticky top-0 z-50 bg-surface">
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
        <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
          <div
            className={`flex shrink-0 items-center overflow-hidden transition-all duration-300 ease-out ${
              showNavLogo ? "max-w-[17rem] opacity-100" : "pointer-events-none max-w-0 opacity-0"
            }`}
            aria-hidden={!showNavLogo}
          >
            <Link href="/" className="flex items-center" tabIndex={showNavLogo ? 0 : -1}>
              <Image
                src={site.logo}
                alt="Greenwich Dental Health"
                width={280}
                height={72}
                className="h-14 w-auto max-w-[17rem] object-contain object-left"
                priority={!isHome}
              />
            </Link>
          </div>

          <nav
            className={`hidden items-center gap-0.5 lg:flex ${!showNavLogo && isHome ? "ml-auto" : ""}`}
            aria-label="Main"
          >
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

          <div className={`flex items-center gap-2 lg:hidden ${!showNavLogo && isHome ? "ml-auto" : ""}`}>
            <a
              href={site.phoneHref}
              className="type-link rounded-lg border border-border bg-surface-alt px-3 py-2 text-foreground"
            >
              Call
            </a>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground"
              aria-expanded={open}
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>
      <SecondaryNav />

      {open && (
        <nav className="border-b border-border bg-surface px-5 py-5 shadow-lg lg:hidden">
          <div className="flex flex-col gap-1">
            {primaryNav.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="type-nav rounded-lg px-4 py-3 text-foreground hover:bg-surface-alt"
              >
                {link.label}
              </Link>
            ))}
            {reviewsLink && (
              <a
                href={reviewsLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="type-nav rounded-lg px-4 py-3 text-foreground"
              >
                {reviewsLink.label}
              </a>
            )}
          </div>
          <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4">
            {secondaryNavLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`type-caption rounded-full px-3 py-1.5 font-medium ${
                  "highlight" in link && link.highlight
                    ? "bg-red-50 font-semibold text-red-600"
                    : "bg-surface-alt text-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
