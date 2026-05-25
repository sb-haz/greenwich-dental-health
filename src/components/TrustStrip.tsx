import { trustItems } from "@/lib/content";

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-surface-alt py-3.5">
      <ul className="type-body-sm mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 text-muted lg:px-8">
        {trustItems.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="font-bold text-brand-lime" aria-hidden>
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
