export function PageHero({ title, subtitle, dark = true }: { title: string; subtitle?: string; dark?: boolean }) {
  return (
    <section
      className={
        dark
          ? "section-dark mesh-bg mesh-bg--dark border-b border-white/10 px-5 py-10 lg:px-8 lg:py-14"
          : "section-muted mesh-bg mesh-bg--muted border-b border-border px-5 py-10 lg:px-8 lg:py-14"
      }
    >
      <div className="mx-auto max-w-7xl">
        <h1 className={`heading-lg ${dark ? "text-white" : "text-foreground"}`}>
          {title}
        </h1>
        {subtitle && (
          <p className={`section-lead mt-4 max-w-2xl ${dark ? "text-muted-on-dark" : ""}`}>{subtitle}</p>
        )}
      </div>
    </section>
  );
}
