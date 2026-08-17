import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CalendarCheck, CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { contact } from "@/data/site";

export const Route = createFileRoute("/consultation")({
  head: () => ({
    meta: [
      { title: "Prendre rendez-vous — Consultation | Optique Saint Mathias" },
      {
        name: "description",
        content:
          "Réservez un examen de vue, un conseil monture, une adaptation de lentilles ou une réparation chez Optique Saint Mathias à Paris.",
      },
      { property: "og:title", content: "Prendre rendez-vous — Optique Saint Mathias" },
      {
        property: "og:description",
        content: "Examen de vue, choix de monture, réparation : réservez votre créneau en ligne.",
      },
    ],
  }),
  component: Consultation,
});

const slots = ["09h30", "10h30", "11h30", "14h00", "15h00", "16h00", "17h00", "18h00"];
const motifs = ["Examen de vue", "Choix de monture", "Adaptation de lentilles", "Réparation", "Autre"];

type Errors = Record<string, string>;

function Consultation() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const next: Errors = {};
    if (get("prenom").length < 2) next['prenom'] = "Merci d'indiquer votre prénom.";
    if (get("nom").length < 2) next['nom'] = "Merci d'indiquer votre nom.";
    if (!/^[+0-9 ().-]{8,}$/.test(get("telephone"))) next['telephone'] = "Numéro de téléphone invalide.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(get("email"))) next['email'] = "Adresse e-mail invalide.";
    if (!get("date")) next['date'] = "Choisissez une date souhaitée.";
    if (!get("creneau")) next['creneau'] = "Choisissez un créneau.";
    if (!get("motif")) next['motif'] = "Précisez le motif du rendez-vous.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  const field =
    "mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-gold";
  const label = "text-xs font-semibold tracking-wide text-muted-foreground uppercase";

  return (
    <div>
      <PageHero
        eyebrow="Consultation"
        title="Prendre rendez-vous"
        subtitle="Un créneau dédié avec un opticien diplômé, en boutique rue Saint Mathias. Réponse de confirmation sous 24 heures ouvrées."
      />

      <section className="container-page grid gap-10 py-16 lg:grid-cols-[1.2fr_1fr]">
        <div className="rounded-2xl border border-border p-7">
          {sent ? (
            <div className="py-10 text-center">
              <CheckCircle2 className="mx-auto size-12 text-gold" />
              <h2 className="mt-5 text-2xl">Votre demande est bien enregistrée</h2>
              <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
                Nous vous recontactons par téléphone ou e-mail sous 24 heures ouvrées pour confirmer
                votre créneau. En cas d'urgence, appelez-nous au {contact.phone}.
              </p>
              <button className="btn-outline mt-7" onClick={() => setSent(false)}>
                Prendre un autre rendez-vous
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <h2 className="text-2xl">Formulaire de réservation</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {[
                  { n: "prenom", l: "Prénom", t: "text" },
                  { n: "nom", l: "Nom", t: "text" },
                  { n: "telephone", l: "Téléphone", t: "tel" },
                  { n: "email", l: "E-mail", t: "email" },
                  { n: "date", l: "Date souhaitée", t: "date" },
                ].map((f) => (
                  <div key={f.n} className={f.n === "date" ? "sm:col-span-1" : ""}>
                    <label className={label} htmlFor={f.n}>
                      {f.l}
                    </label>
                    <input id={f.n} name={f.n} type={f.t} className={field} />
                    {errors[f.n] && (
                      <p className="mt-1 text-xs text-destructive">{errors[f.n]}</p>
                    )}
                  </div>
                ))}

                <div>
                  <label className={label} htmlFor="creneau">
                    Créneau horaire
                  </label>
                  <select id="creneau" name="creneau" defaultValue="" className={field}>
                    <option value="">Sélectionner</option>
                    {slots.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors['creneau'] && <p className="mt-1 text-xs text-destructive">{errors['creneau']}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className={label} htmlFor="motif">
                    Motif
                  </label>
                  <select id="motif" name="motif" defaultValue="" className={field}>
                    <option value="">Sélectionner</option>
                    {motifs.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                  {errors['motif'] && <p className="mt-1 text-xs text-destructive">{errors['motif']}</p>}
                </div>

                <div className="sm:col-span-2">
                  <label className={label} htmlFor="message">
                    Précisions (facultatif)
                  </label>
                  <textarea id="message" name="message" rows={4} className={field} />
                </div>
              </div>

              <button type="submit" className="btn-gold mt-7">
                <CalendarCheck className="size-4" /> Confirmer la demande
              </button>
              <p className="mt-3 text-xs text-muted-foreground">
                Vos données servent uniquement à traiter votre demande de rendez-vous.
              </p>
            </form>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl bg-mist p-7">
            <h2 className="text-lg">Informations pratiques</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                {contact.address}
              </li>
              <li className="flex gap-2">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
                {contact.phone}
              </li>
              <li className="flex gap-2">
                <Clock className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>
                  {contact.hours.map((h) => (
                    <span key={h.d} className="block">
                      {h.d} : {h.h}
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Carte de localisation d'Optique Saint Mathias"
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.3660%2C48.8530%2C2.3860%2C48.8650&layer=mapnik"
              className="h-64 w-full"
              loading="lazy"
            />
          </div>
        </aside>
      </section>
    </div>
  );
}
