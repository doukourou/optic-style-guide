import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { contact } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Optique Saint Mathias, Paris 11e" },
      {
        name: "description",
        content:
          "Adresse, horaires, téléphone et formulaire de contact d'Optique Saint Mathias, 12 rue Saint Mathias, Paris 11e.",
      },
      { property: "og:title", content: "Contact — Optique Saint Mathias" },
      {
        property: "og:description",
        content: "Écrivez-nous ou passez en boutique du lundi au samedi.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const next: Record<string, string> = {};
    if (get("nom").length < 2) next.nom = "Merci d'indiquer votre nom.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(get("email"))) next.email = "Adresse e-mail invalide.";
    if (get("message").length < 10) next.message = "Votre message est trop court.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  const field =
    "mt-1.5 w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-sm outline-none focus:border-gold";
  const label = "text-xs font-semibold tracking-wide text-muted-foreground uppercase";

  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre vue"
        subtitle="Une question sur un équipement, un remboursement ou une réparation ? Notre équipe vous répond rapidement."
      />

      <section className="container-page grid gap-10 py-16 lg:grid-cols-2">
        <div className="rounded-2xl border border-border p-7">
          {sent ? (
            <div className="py-10 text-center">
              <CheckCircle2 className="mx-auto size-12 text-gold" />
              <h2 className="mt-5 text-2xl">Message envoyé</h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Merci, nous revenons vers vous sous 24 heures ouvrées.
              </p>
              <button className="btn-outline mt-6" onClick={() => setSent(false)}>
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <h2 className="text-2xl">Nous écrire</h2>
              <div className="mt-6 space-y-5">
                <div>
                  <label className={label} htmlFor="nom">
                    Nom et prénom
                  </label>
                  <input id="nom" name="nom" className={field} />
                  {errors.nom && <p className="mt-1 text-xs text-destructive">{errors.nom}</p>}
                </div>
                <div>
                  <label className={label} htmlFor="email">
                    E-mail
                  </label>
                  <input id="email" name="email" type="email" className={field} />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>
                <div>
                  <label className={label} htmlFor="message">
                    Message
                  </label>
                  <textarea id="message" name="message" rows={5} className={field} />
                  {errors.message && (
                    <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                  )}
                </div>
              </div>
              <button type="submit" className="btn-gold mt-7">
                Envoyer le message
              </button>
            </form>
          )}
        </div>

        <aside className="space-y-6">
          <div className="rounded-2xl bg-mist p-7">
            <h2 className="text-lg">La boutique</h2>
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
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
                {contact.email}
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
            <Link to="/consultation" className="btn-primary mt-6">
              Prendre rendez-vous
            </Link>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Carte de localisation d'Optique Saint Mathias"
              src="https://www.openstreetmap.org/export/embed.html?bbox=2.3660%2C48.8530%2C2.3860%2C48.8650&layer=mapnik"
              className="h-72 w-full"
              loading="lazy"
            />
          </div>
        </aside>
      </section>
    </div>
  );
}
