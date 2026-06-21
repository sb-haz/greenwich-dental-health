import Image from "next/image";
import { awards } from "@/lib/content";

export function AwardBadges({
  variant = "hero",
  onDark = false,
}: {
  variant?: "hero" | "grid";
  onDark?: boolean;
}) {
  const items = awards.slice(0, 3);

  if (variant === "grid") {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((award) => (
          <article key={award.title} className="overflow-hidden rounded-xl border border-border bg-surface">
            <div className="relative aspect-[5/3] bg-surface-alt">
              <Image
                src={award.image}
                alt={award.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="p-4">
              {award.year && (
                <p className="type-label text-primary">{award.year}</p>
              )}
              <h3 className="heading-sm mt-1 text-foreground">{award.title}</h3>
              <p className="type-body-sm mt-1 text-muted">
                {award.result} · {award.organisation}
              </p>
            </div>
          </article>
        ))}
      </div>
    );
  }

  return (
    <ul className="award-badges grid gap-4 sm:grid-cols-3">
      {items.map((award) => (
        <li key={award.title} className="list-none">
          <div
            className={`flex w-full items-center gap-3 rounded-lg border p-3 ${
              onDark
                ? "border-white/10 bg-brand-dark-elevated"
                : "border-border bg-surface shadow-sm"
            }`}
          >
          <div
            className={`relative h-14 w-14 shrink-0 overflow-hidden rounded-md ${
              onDark ? "bg-brand-dark" : "bg-surface-alt"
            }`}
          >
            <Image src={award.image} alt="" fill className="object-cover" sizes="56px" />
          </div>
          <div className="min-w-0">
            {award.year && (
              <p
                className={`type-label ${onDark ? "text-brand-lime" : "text-primary"}`}
              >
                {award.year}
              </p>
            )}
            <p className={`type-body-sm font-semibold leading-snug ${onDark ? "text-white" : "text-foreground"}`}>
              {award.title}
            </p>
            <p className={`type-caption truncate ${onDark ? "text-white/55" : "text-muted"}`}>{award.result}</p>
          </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
