import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { products, categoryLabels, type Category } from "@/data/site";

export const Route = createFileRoute("/produits")({
  head: () => ({
    meta: [
      { title: "Nos produits — Lunettes, montures et lentilles | Optique Saint Mathias" },
      {
        name: "description",
        content:
          "Verres unifocaux, progressifs, anti-lumière bleue, solaires, montures classiques ou sport et lentilles journalières, mensuelles et couleur.",
      },
      { property: "og:title", content: "Catalogue Optique Saint Mathias" },
      {
        property: "og:description",
        content: "Lunettes correctrices, non correctrices, montures et lentilles de contact.",
      },
    ],
  }),
  component: Produits,
});

const filters: (Category | "tous")[] = ["tous", "correcteur", "non-correcteur", "lentilles"];

function Produits() {
  const [active, setActive] = useState<Category | "tous">("tous");
  const list = active === "tous" ? products : products.filter((p) => p.category === active);

  return (
    <div>
      <PageHero
        eyebrow="Nos produits"
        title="Un catalogue pensé pour chaque usage"
        subtitle="Lunettes correctrices et non correctrices, montures par style et lentilles de contact : tout est disponible en boutique et monté dans notre atelier."
      />

      <section className="container-page py-16">
        <div className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                active === f
                  ? "border-transparent bg-ink text-primary-foreground"
                  : "border-border text-muted-foreground hover:bg-mist"
              }`}
            >
              {categoryLabels[f]}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 80}>
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card">
                <img
                  src={p.image}
                  alt={p.name}
                  width={900}
                  height={700}
                  loading="lazy"
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-6">
                  <span className="eyebrow text-[0.6rem]">{categoryLabels[p.category]}</span>
                  <h2 className="mt-2 text-lg">{p.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                  <Link
                    to="/consultation"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink"
                  >
                    Voir plus <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 rounded-3xl bg-mist p-10 text-center">
          <h2 className="text-2xl">Un doute sur le verre adapté ?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            Nos opticiens analysent votre correction, vos habitudes visuelles et votre morphologie
            pour vous orienter vers la solution la plus confortable.
          </p>
          <Link to="/consultation" className="btn-primary mt-6">
            Demander conseil
          </Link>
        </div>
      </section>
    </div>
  );
}
