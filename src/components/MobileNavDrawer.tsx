"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { navLinks, secondaryNavLinks, site } from "@/lib/content";

const primaryNav = navLinks.filter((l) => !("external" in l && l.external));
const reviewsLink = navLinks.find((l) => "external" in l && l.external);

type MobileNavDrawerProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileNavDrawer({ open, onClose }: MobileNavDrawerProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={`mobile-drawer lg:hidden ${open ? "mobile-drawer--open" : ""}`}
      aria-hidden={!open}
    >
      <button
        type="button"
        className="mobile-drawer__backdrop"
        aria-label="Close menu"
        tabIndex={open ? 0 : -1}
        onClick={onClose}
      />

      <aside
        className="mobile-drawer__panel"
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
      >
        <div className="mobile-drawer__header">
          <p className="type-label text-muted">Menu</p>
          <button
            type="button"
            className="mobile-drawer__close"
            aria-label="Close menu"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <nav className="mobile-drawer__nav" aria-label="Main">
          {primaryNav.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`mobile-drawer__link ${isActive ? "mobile-drawer__link--active" : ""}`}
                onClick={onClose}
              >
                <span>{link.label}</span>
                <span className="mobile-drawer__chevron" aria-hidden>
                  →
                </span>
              </Link>
            );
          })}
          {reviewsLink && (
            <a
              href={reviewsLink.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-drawer__link"
              onClick={onClose}
            >
              <span>{reviewsLink.label}</span>
              <span className="mobile-drawer__chevron" aria-hidden>
                ↗
              </span>
            </a>
          )}
        </nav>

        <div className="mobile-drawer__secondary">
          <p className="type-label mb-2 text-muted">Treatments &amp; more</p>
          <ul className="mobile-drawer__chips">
            {secondaryNavLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`mobile-drawer__chip ${
                    "highlight" in link && link.highlight ? "mobile-drawer__chip--urgent" : ""
                  }`}
                  onClick={onClose}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mobile-drawer__footer">
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            onClick={onClose}
          >
            Book online
          </a>
          <a href={site.phoneHref} className="btn-dark" onClick={onClose}>
            Call {site.phone}
          </a>
        </div>
      </aside>
    </div>
  );
}
