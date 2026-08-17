import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { contact } from "@/data/site";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: "Mentions légales & confidentialité — Optique Saint Mathias" },
      {
        name: "description",
        content:
          "Mentions légales, éditeur, hébergement et politique de confidentialité du site Optique Saint Mathias.",
      },
      { property: "og:title", content: "Mentions légales — Optique Saint Mathias" },
      {
        property: "og:description",
        content: "Informations légales et traitement des données personnelles.",
      },
    ],
  }),
  component: Mentions,
});

function Mentions() {
  return (
    <div>
      <PageHero
        eyebrow="Informations légales"
        title="Mentions légales & confidentialité"
        subtitle="Transparence sur l'éditeur du site et le traitement de vos données personnelles."
      />
      <section className="container-page max-w-3xl space-y-8 py-16 text-sm text-muted-foreground">
        <div>
          <h2 className="text-xl text-foreground">Éditeur du site</h2>
          <p className="mt-3">
            Optique Saint Mathias — SARL au capital de 30 000 € — SIRET 342 918 447 00021 — TVA
            FR62342918447. {contact.address}. Téléphone : {contact.phone}. E-mail : {contact.email}.
          </p>
        </div>
        <div>
          <h2 className="text-xl text-foreground">Hébergement</h2>
          <p className="mt-3">
            Le site est hébergé sur une infrastructure cloud européenne. Les demandes relatives à
            l'hébergement peuvent être adressées à l'éditeur.
          </p>
        </div>
        <div>
          <h2 className="text-xl text-foreground">Données personnelles</h2>
          <p className="mt-3">
            Les informations transmises via les formulaires de rendez-vous et de contact sont
            utilisées uniquement pour traiter votre demande et ne sont ni revendues ni cédées. Les
            photos importées dans l'essayage virtuel restent sur votre appareil et ne sont jamais
            transmises à nos serveurs.
          </p>
          <p className="mt-3">
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de
            suppression de vos données en écrivant à {contact.email}.
          </p>
        </div>
        <div>
          <h2 className="text-xl text-foreground">Propriété intellectuelle</h2>
          <p className="mt-3">
            L'ensemble des contenus (textes, visuels, logos) est la propriété d'Optique Saint
            Mathias, sauf mention contraire.
          </p>
        </div>
      </section>
    </div>
  );
}
