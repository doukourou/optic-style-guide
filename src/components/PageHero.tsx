export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="bg-ink text-primary-foreground">
      <div className="container-page max-w-3xl py-16 sm:py-20">
        <span className="eyebrow text-gold">{eyebrow}</span>
        <h1 className="mt-4 font-display text-4xl sm:text-5xl">{title}</h1>
        <p className="mt-5 text-primary-foreground/75">{subtitle}</p>
      </div>
    </section>
  );
}
