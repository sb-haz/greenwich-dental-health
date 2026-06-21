"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { homeHero, site } from "@/lib/content";

export function HeroVideo({ variant = "card" }: { variant?: "card" | "bleed" }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const frameClass =
    variant === "bleed"
      ? "hero-video__frame hero-video__frame--bleed"
      : "hero-video__frame hero-video__frame--card";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const play = () => {
      video.play().catch(() => {
        /* Autoplay blocked — poster still shows */
      });
    };

    if (video.readyState >= 2) play();
    else video.addEventListener("loadeddata", play, { once: true });
  }, []);

  return (
    <div className={frameClass}>
      <video
        ref={videoRef}
        className="hero-video__media"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={homeHero.videoPoster}
        aria-hidden
      >
        <source src={homeHero.video} type="video/mp4" />
      </video>
      {variant === "card" && (
        <div className="hero-video__frame-overlay pointer-events-none absolute inset-0" aria-hidden />
      )}
    </div>
  );
}

export function HeroContent() {
  return (
    <div className="home-hero__content">
      <div className="max-w-xl space-y-3 sm:space-y-4">
        <h1 className="heading-xl home-hero__title">{homeHero.headline}</h1>
        <p className="section-lead home-hero__subtitle max-w-lg">{homeHero.subtitle}</p>
      </div>

      <div className="home-hero__actions">
        <a
          href={site.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full sm:w-auto"
        >
          Book online
        </a>
        <a href={site.phoneHref} className="home-hero__btn-call w-full sm:w-auto">
          Call {site.phone}
        </a>
        <Link href="/treatments" className="home-hero__btn-secondary w-full sm:w-auto">
          View treatments
        </Link>
      </div>
    </div>
  );
}
