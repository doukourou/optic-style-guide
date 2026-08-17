import { createFileRoute, Link } from "@tanstack/react-router";
import atelier from "@/assets/atelier.jpg";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Optique Saint Mathias, opticiens depuis 1987" },
      {
        name: "description",
        content:
          "Découvrez l'histoire d'Optique Saint Mathias : savoir-faire artisanal, atelier de fabrication et équipe d'opticiens diplômés à Paris.",
      },
      { property: "og:title", content: "Notre histoire — Optique Saint Mathias" },
      {
        property: "og:description",
        content: "38 ans de savoir-faire optique, un atelier de fabrication et six opticiens diplômés.",
      },
    ],
  }),
  component: APropos,
});

function APropos() {
  return (
    <div>
      <PageHero
        eyebrow="Notre histoire"
        title="Une maison d'opticiens, pas une chaîne"
        subtitle="Depuis 1987, nous fabriquons et ajustons des lunettes rue Saint Mathias, avec la même exigence artisanale."
      />

      <section className="container-page grid items-center gap-12 py-20 lg:grid-cols-2">
        <Reveal>
          <img
            src={atelier}
            alt="Atelier de fabrication de lunettes d'Optique Saint Mathias"
            width={1200}
            height={900}
            loading="lazy"
            className="rounded-2xl"
          />
        </Reveal>
        <Reveal delay={120}>
          <h2 className="text-3xl">Le geste avant le produit</h2>
          <p className="mt-5 text-muted-foreground">
            Mathias Rouvier ouvre son premier atelier en 1987 avec une conviction simple : une
            lunette bien faite est une lunette mesurée, taillée et ajustée par la même personne.
            Trente-huit ans plus tard, nous fabriquons toujours nos montages sur place.
          </p>
          <p className="mt-3 text-muted-foreground">
            Notre équipe réunit six opticiens diplômés, dont deux spécialisés en contactologie et
            une optométriste formée à la basse vision. Chaque client bénéficie d'un temps d'échange
            réel, d'un contrôle de vue rigoureux et d'un suivi dans la durée.
          </p>
          <ul className="mt-7 space-y-3 text-sm">
            {[
              "Opticiens diplômés BTS OL et licence professionnelle",
              "Atelier de taillage numérique sur place",
              "Contrôle qualité systématique avant remise",
              "Réglages et nettoyage offerts à vie",
            ].map((v) => (
              <li key={v} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                {v}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="bg-mist py-16">
        <div className="container-page grid gap-8 text-center sm:grid-cols-4">
          {[
            ["38", "ans d'expérience"],
            ["24 000", "clients satisfaits"],
            ["1 200", "montures disponibles"],
            ["6", "opticiens diplômés"],
          ].map(([n, l], i) => (
            <Reveal key={l} delay={i * 80}>
              <p className="font-display text-4xl text-ink">{n}</p>
              <p className="mt-1 text-sm text-muted-foreground">{l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page py-20">
        <span className="eyebrow">Nos valeurs</span>
        <h2 className="mt-3 text-3xl">Ce qui guide notre travail</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            {
              t: "Précision",
              d: "Des mesures rigoureuses et un contrôle systématique : la correction juste, dès le premier port.",
            },
            {
              t: "Transparence",
              d: "Des devis clairs, le détail du reste à charge et aucun produit imposé.",
            },
            {
              t: "Proximité",
              d: "Une équipe stable qui connaît ses clients et les revoit d'année en année.",
            },
          ].map((v, i) => (
            <Reveal key={v.t} delay={i * 90}>
              <div className="h-full rounded-2xl border border-border p-7">
                <h3 className="text-lg">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Link to="/consultation" className="btn-primary mt-10">
          Rencontrer notre équipe
        </Link>
      </section>
    </div>
  );
}
