import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { testimonials } from "@/data/site";

export const Route = createFileRoute("/avis")({
  head: () => ({
    meta: [
      { title: "Avis clients — 4,8/5 sur 412 avis | Optique Saint Mathias" },
      {
        name: "description",
        content:
          "Les témoignages de nos clients sur l'accueil, l'examen de vue, la fabrication en atelier et le suivi chez Optique Saint Mathias.",
      },
      { property: "og:title", content: "Avis clients — Optique Saint Mathias" },
      { property: "og:description", content: "Note moyenne de 4,8/5 sur 412 avis vérifiés." },
    ],
  }),
  component: Avis,
});

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`size-4 ${i < n ? "fill-current" : "opacity-25"}`} />
      ))}
    </div>
  );
}

function Avis() {
  const [i, setI] = useState(0);
  const current = testimonials[i]!;

  return (
    <div>
      <PageHero
        eyebrow="Avis clients"
        title="Ce que disent nos clients"
        subtitle="Une note moyenne de 4,8/5 sur 412 avis vérifiés, recueillis en boutique et en ligne."
      />

      <section className="container-page py-16">
        <div className="rounded-3xl bg-mist p-10 text-center">
          <p className="font-display text-5xl text-ink">4,8/5</p>
          <div className="mt-3 flex justify-center">
            <Stars n={5} />
          </div>
          <p className="mt-2 text-sm text-muted-foreground">sur 412 avis vérifiés</p>
        </div>

        {/* Carrousel */}
        <div className="mt-14 rounded-2xl border border-border p-8 sm:p-12">
          <Stars n={current.rating} />
          <blockquote className="mt-5 font-display text-xl leading-relaxed text-ink sm:text-2xl">
            "{current.text}"
          </blockquote>
          <div className="mt-8 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-mist text-xs font-bold text-ink">
                {current.initials}
              </span>
              <span className="text-sm font-semibold">{current.name}</span>
            </div>
            <div className="flex gap-2">
              <button
                aria-label="Avis précédent"
                onClick={() => setI((v) => (v - 1 + testimonials.length) % testimonials.length)}
                className="rounded-full border border-border p-2 hover:bg-mist"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                aria-label="Avis suivant"
                onClick={() => setI((v) => (v + 1) % testimonials.length)}
                className="rounded-full border border-border p-2 hover:bg-mist"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, k) => (
            <Reveal key={t.name} delay={(k % 3) * 80}>
              <figure className="h-full rounded-2xl border border-border bg-card p-7">
                <Stars n={t.rating} />
                <blockquote className="mt-4 text-sm text-muted-foreground">"{t.text}"</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-full bg-mist text-xs font-bold text-ink">
                    {t.initials}
                  </span>
                  <span className="text-sm font-semibold">{t.name}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Laisser un avis
          </a>
        </div>
      </section>
    </div>
  );
}
