import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-primary-foreground">
      <div className="container-page grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <h3 className="font-display text-lg">Optique Saint Mathias</h3>
          <p className="mt-3 text-sm text-primary-foreground/70">
            Fabricant et opticien de quartier depuis 1987. Lunettes correctrices, solaires et
            lentilles, montées dans notre atelier.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Facebook" className="rounded-full border border-white/20 p-2">
              <Facebook className="size-4" />
            </a>
            <a href="#" aria-label="Instagram" className="rounded-full border border-white/20 p-2">
              <Instagram className="size-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="rounded-full border border-white/20 p-2">
              <Linkedin className="size-4" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.18em] text-gold uppercase">Coordonnées</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
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
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.18em] text-gold uppercase">Horaires</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            {contact.hours.map((h) => (
              <li key={h.d} className="flex justify-between gap-4">
                <span>{h.d}</span>
                <span>{h.h}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold tracking-[0.18em] text-gold uppercase">Liens rapides</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/75">
            <li>
              <Link to="/produits">Nos produits</Link>
            </li>
            <li>
              <Link to="/essayage-virtuel">Essayage virtuel</Link>
            </li>
            <li>
              <Link to="/consultation">Prendre rendez-vous</Link>
            </li>
            <li>
              <Link to="/partenaires">Partenaires</Link>
            </li>
            <li>
              <Link to="/avis">Avis clients</Link>
            </li>
            <li>
              <Link to="/mentions-legales">Mentions légales</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-5 text-xs text-primary-foreground/55 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} Optique Saint Mathias — SIRET 342 918 447 00021</span>
          <span>Mentions légales · Politique de confidentialité</span>
        </div>
      </div>
    </footer>
  );
}
