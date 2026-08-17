import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Glasses, ShieldCheck, Sparkles, Star, Clock } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import atelier from "@/assets/atelier.jpg";
import { Reveal } from "@/components/Reveal";
import { products, testimonials, faqs } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Optique Saint Mathias — Opticien & fabricant de lunettes à Paris" },
      {
        name: "description",
        content:
          "Lunettes correctrices et solaires fabriquées dans notre atelier parisien : examen de vue, montures, lentilles et essayage virtuel. Rendez-vous en ligne.",
      },
      { property: "og:title", content: "Optique Saint Mathias — Votre vue, notre expertise" },
      {
        property: "og:description",
        content:
          "Opticiens diplômés depuis 1987 : verres progressifs, solaires, lentilles et montage en atelier.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink text-primary-foreground">
        <div className="container-page grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="eyebrow text-gold">Opticiens diplômés · Paris 11e</span>
            <h1 className="mt-5 font-display text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
              Votre vue,
              <br />
              notre expertise
            </h1>
            <p className="mt-6 max-w-lg text-base text-primary-foreground/75">
              Depuis 1987, Optique Saint Mathias conçoit et fabrique des lunettes correctrices et
              non correctrices dans son atelier parisien : verres sur mesure, montures
              sélectionnées à la main, lentilles de contact et suivi personnalisé.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/consultation" className="btn-gold">
                Réserver une consultation <ArrowRight className="size-4" />
              </Link>
              <Link
                to="/produits"
                className="btn-outline border-white/25 text-primary-foreground hover:bg-white/10"
              >
                Découvrir nos produits
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-gold" /> Garantie 2 ans
              </span>
              <span className="flex items-center gap-2">
                <Clock className="size-4 text-gold" /> Montage en 48h
              </span>
              <span className="flex items-center gap-2">
                <Star className="size-4 text-gold" /> 4,8/5 sur 412 avis
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[1.5rem] ring-1 ring-white/15">
              <img
                src={heroPortrait}
                alt="Cliente portant une monture fine en métal doré"
                width={1408}
                height={1200}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden rounded-2xl bg-background p-5 text-foreground shadow-xl sm:block">
              <p className="font-display text-3xl text-ink">1 200+</p>
              <p className="text-xs tracking-wide text-muted-foreground uppercase">
                montures en boutique
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container-page py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Glasses,
              title: "Examen de vue complet",
              text: "Bilan réalisé par nos opticiens diplômés, avec matériel de mesure numérique.",
            },
            {
              icon: Sparkles,
              title: "Fabrication en atelier",
              text: "Taillage et montage des verres sur place pour un ajustement au millimètre.",
            },
            {
              icon: ShieldCheck,
              title: "Tiers payant mutuelle",
              text: "Nous gérons la télétransmission : vous ne réglez que votre reste à charge.",
            },
          ].map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="h-full rounded-2xl border border-border bg-card p-7">
                <s.icon className="size-6 text-gold" />
                <h3 className="mt-4 text-lg">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Notre histoire */}
      <section className="bg-mist py-20">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={atelier}
              alt="Opticien ajustant une monture dans l'atelier de fabrication"
              width={1200}
              height={900}
              loading="lazy"
              className="rounded-2xl object-cover"
            />
          </Reveal>
          <Reveal delay={120}>
            <span className="eyebrow">Notre histoire</span>
            <h2 className="mt-4 text-3xl sm:text-4xl">Un savoir-faire artisanal, transmis depuis 1987</h2>
            <p className="mt-5 text-muted-foreground">
              Fondée par Mathias Rouvier, la maison est aujourd'hui tenue par une équipe de six
              opticiens diplômés. Nous croyons qu'une bonne paire de lunettes se mesure, se taille
              et s'ajuste — jamais elle ne se vend à la chaîne.
            </p>
            <p className="mt-3 text-muted-foreground">
              Chaque verre est contrôlé à la sortie de l'atelier, chaque monture réglée sur le
              visage, et chaque client revu autant de fois que nécessaire.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                ["38", "ans d'expérience"],
                ["24 000", "clients accompagnés"],
                ["1 200", "montures disponibles"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="font-display text-3xl text-ink">{n}</p>
                  <p className="text-xs text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
            <Link to="/a-propos" className="btn-outline mt-8">
              En savoir plus sur la maison
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Produits */}
      <section className="container-page py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="eyebrow">Nos produits</span>
            <h2 className="mt-3 text-3xl sm:text-4xl">Des solutions pour chaque regard</h2>
          </div>
          <Link to="/produits" className="btn-outline">
            Voir le catalogue complet
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <article className="group h-full overflow-hidden rounded-2xl border border-border bg-card">
                <img
                  src={p.image}
                  alt={p.name}
                  width={900}
                  height={700}
                  loading="lazy"
                  className="h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="p-5">
                  <h3 className="text-base">{p.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                  <Link
                    to="/produits"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink"
                  >
                    Voir plus <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Essayage teaser */}
      <section className="container-page">
        <div className="grid items-center gap-8 rounded-3xl bg-ink px-8 py-14 text-primary-foreground md:grid-cols-2 md:px-14">
          <div>
            <span className="eyebrow text-gold">Essayage virtuel</span>
            <h2 className="mt-4 text-3xl">Essayez nos montures depuis chez vous</h2>
            <p className="mt-4 text-primary-foreground/75">
              Importez une photo de votre visage, choisissez une monture et ajustez-la en quelques
              secondes pour visualiser le rendu.
            </p>
            <p className="mt-3 text-xs text-primary-foreground/50">
              Aperçu indicatif, essayage réel recommandé en boutique.
            </p>
          </div>
          <div className="md:justify-self-end">
            <Link to="/essayage-virtuel" className="btn-gold">
              Lancer l'essayage <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Avis */}
      <section className="container-page py-20">
        <div className="text-center">
          <span className="eyebrow">Avis clients</span>
          <h2 className="mt-3 text-3xl sm:text-4xl">4,8/5 sur 412 avis vérifiés</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.slice(0, 3).map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="h-full rounded-2xl border border-border bg-card p-7">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: t.rating }).map((_, k) => (
                    <Star key={k} className="size-4 fill-current" />
                  ))}
                </div>
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
        <div className="mt-8 text-center">
          <Link to="/avis" className="btn-outline">
            Lire tous les avis
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-mist py-20">
        <div className="container-page max-w-3xl">
          <span className="eyebrow">Questions fréquentes</span>
          <h2 className="mt-3 text-3xl">Tout ce qu'il faut savoir</h2>
          <div className="mt-8 divide-y divide-border rounded-2xl border border-border bg-card">
            {faqs.map((f) => (
              <details key={f.q} className="group p-5">
                <summary className="cursor-pointer list-none text-sm font-semibold text-ink">
                  {f.q}
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-20 text-center">
        <h2 className="text-3xl sm:text-4xl">Prêt à y voir plus clair ?</h2>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
          Réservez un examen de vue ou passez simplement en boutique : nos opticiens vous
          accueillent sans rendez-vous pour un réglage ou une réparation.
        </p>
        <Link to="/consultation" className="btn-primary mt-8">
          Prendre rendez-vous
        </Link>
      </section>
    </div>
  );
}
