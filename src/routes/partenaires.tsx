import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { partners } from "@/data/site";

export const Route = createFileRoute("/partenaires")({
  head: () => ({
    meta: [
      { title: "Nos partenaires — Marques, mutuelles et laboratoires | Optique Saint Mathias" },
      {
        name: "description",
        content:
          "Marques de montures, mutuelles santé en tiers payant et laboratoires de verres partenaires d'Optique Saint Mathias.",
      },
      { property: "og:title", content: "Nos partenariats — Optique Saint Mathias" },
      {
        property: "og:description",
        content: "Des collaborations choisies pour garantir la qualité de chaque équipement.",
      },
    ],
  }),
  component: Partenaires,
});

function Group({ title, items, note }: { title: string; items: string[]; note: string }) {
  return (
    <Reveal>
      <div>
        <h2 className="text-2xl">{title}</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{note}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {items.map((n) => (
            <div
              key={n}
              className="flex h-24 items-center justify-center rounded-xl border border-border bg-card px-4 text-center font-display text-sm text-ink"
            >
              {n}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

function Partenaires() {
  return (
    <div>
      <PageHero
        eyebrow="Nos partenariats"
        title="Des alliances au service de votre confort visuel"
        subtitle="Nous sélectionnons nos fournisseurs pour leur exigence de fabrication, et travaillons avec la majorité des complémentaires santé."
      />

      <section className="container-page space-y-16 py-20">
        <Group
          title="Marques de montures"
          items={partners.montures}
          note="Des maisons françaises et européennes, travaillant l'acétate, le titane et le bois."
        />
        <Group
          title="Mutuelles & assurances santé"
          items={partners.mutuelles}
          note="Tiers payant appliqué : vous ne réglez que votre reste à charge, nous gérons les démarches."
        />
        <Group
          title="Laboratoires de verres"
          items={partners.laboratoires}
          note="Verres traités antireflet, durcis et garantis deux ans, produits en Europe."
        />

        <div className="rounded-3xl bg-mist p-10 text-center">
          <h2 className="text-2xl">Une garantie de qualité, du verre au montage</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
            Chaque équipement est contrôlé à réception du laboratoire puis après montage dans notre
            atelier. En cas de défaut, la reprise est immédiate et sans frais.
          </p>
          <Link to="/contact" className="btn-primary mt-6">
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
}
