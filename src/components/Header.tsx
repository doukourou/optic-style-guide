import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Eye } from "lucide-react";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/a-propos", label: "À propos" },
  { to: "/produits", label: "Nos produits" },
  { to: "/essayage-virtuel", label: "Essayage virtuel" },
  { to: "/consultation", label: "Consultation" },
  { to: "/partenaires", label: "Partenaires" },
  { to: "/avis", label: "Avis clients" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="container-page flex h-18 items-center justify-between gap-4 py-3">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex size-9 items-center justify-center rounded-full bg-ink text-primary-foreground">
            <Eye className="size-4.5" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold text-ink">
              Optique Saint Mathias
            </span>
            <span className="block text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase">
              Opticiens depuis 1987
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-ink" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link to="/consultation" className="btn-gold hidden text-sm sm:inline-flex">
            Prendre rendez-vous
          </Link>
          <button
            aria-label="Ouvrir le menu"
            className="rounded-full border border-border p-2 xl:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="container-page grid gap-1 border-t border-border py-4 xl:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2.5 text-sm font-medium text-muted-foreground hover:bg-mist hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <Link to="/consultation" onClick={() => setOpen(false)} className="btn-gold mt-2">
            Prendre rendez-vous
          </Link>
        </nav>
      )}
    </header>
  );
}
