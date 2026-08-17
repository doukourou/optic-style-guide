import prodVue from "@/assets/prod-vue.jpg";
import prodSolaire from "@/assets/prod-solaire.jpg";
import prodMontures from "@/assets/prod-montures.jpg";
import prodLentilles from "@/assets/prod-lentilles.jpg";
import frameGold from "@/assets/frame-gold.png";
import frameBlack from "@/assets/frame-black.png";
import frameEcaille from "@/assets/frame-ecaille.png";
import frameAviator from "@/assets/frame-aviator.png";

export type Category = "correcteur" | "non-correcteur" | "lentilles";

export const products = [
  {
    id: "verres-unifocaux",
    name: "Verres unifocaux",
    category: "correcteur" as Category,
    image: prodVue,
    description:
      "Correction simple de la myopie, l'hypermétropie ou l'astigmatisme, avec traitement antireflet inclus.",
  },
  {
    id: "verres-progressifs",
    name: "Verres progressifs",
    category: "correcteur" as Category,
    image: prodVue,
    description:
      "Vision de près, intermédiaire et de loin sur un seul verre, personnalisée selon votre morphologie.",
  },
  {
    id: "anti-lumiere-bleue",
    name: "Anti-lumière bleue",
    category: "correcteur" as Category,
    image: prodVue,
    description:
      "Filtrage des écrans pour réduire la fatigue visuelle des journées de travail prolongées.",
  },
  {
    id: "solaires",
    name: "Lunettes solaires",
    category: "non-correcteur" as Category,
    image: prodSolaire,
    description:
      "Protection UV catégorie 3, verres polarisés en option, pour la ville comme pour la route.",
  },
  {
    id: "mode",
    name: "Montures mode",
    category: "non-correcteur" as Category,
    image: prodMontures,
    description:
      "Des montures sans correction pensées comme un accessoire de style, en acétate ou en titane.",
  },
  {
    id: "montures-classiques",
    name: "Montures classiques & tendance",
    category: "non-correcteur" as Category,
    image: prodMontures,
    description:
      "Catalogue par style : classique, tendance, enfant et sport, plus de 1 200 modèles en boutique.",
  },
  {
    id: "journalieres",
    name: "Lentilles journalières",
    category: "lentilles" as Category,
    image: prodLentilles,
    description: "Confort quotidien sans entretien, idéales pour le sport et les usages ponctuels.",
  },
  {
    id: "mensuelles",
    name: "Lentilles mensuelles",
    category: "lentilles" as Category,
    image: prodLentilles,
    description: "Solution économique au port régulier, avec suivi et adaptation par nos opticiens.",
  },
  {
    id: "couleur",
    name: "Lentilles couleur",
    category: "lentilles" as Category,
    image: prodLentilles,
    description: "Changez de regard, avec ou sans correction, sous contrôle de nos spécialistes.",
  },
];

export const categoryLabels: Record<Category | "tous", string> = {
  tous: "Tous les produits",
  correcteur: "Lunettes correctrices",
  "non-correcteur": "Non correctrices",
  lentilles: "Lentilles de contact",
};

export const frames = [
  { id: "gold", name: "Aurore — métal doré", src: frameGold },
  { id: "black", name: "Mathias — acétate noir", src: frameBlack },
  { id: "ecaille", name: "Louvre — écaille", src: frameEcaille },
  { id: "aviator", name: "Riviera — solaire aviateur", src: frameAviator },
];

export const testimonials = [
  {
    name: "Claire M.",
    initials: "CM",
    rating: 5,
    text: "Un accueil remarquable et un examen de vue très complet. Mes progressifs sont parfaitement adaptés dès le premier jour.",
  },
  {
    name: "Julien D.",
    initials: "JD",
    rating: 5,
    text: "L'équipe a réparé ma monture en quinze minutes, sans rendez-vous. Des professionnels de confiance.",
  },
  {
    name: "Amina B.",
    initials: "AB",
    rating: 4,
    text: "Large choix de montures et de vrais conseils sur les formes de visage. Le tiers payant mutuelle simplifie tout.",
  },
  {
    name: "Patrick L.",
    initials: "PL",
    rating: 5,
    text: "Fabrication en atelier sur place : mes lunettes étaient prêtes en 48 heures. Bluffant.",
  },
  {
    name: "Sofia R.",
    initials: "SR",
    rating: 5,
    text: "Première adaptation de lentilles très bien accompagnée, avec un suivi une semaine plus tard.",
  },
  {
    name: "Thomas V.",
    initials: "TV",
    rating: 5,
    text: "Des solaires à ma vue, montées rapidement et à un prix juste. Je recommande sans hésiter.",
  },
];

export const partners = {
  montures: ["Maison Verrière", "Atelier Bleu", "Nord Optik", "Lignes & Formes", "Studio Iris"],
  mutuelles: ["Mutuelle Horizon", "Santéclair", "Alliance Prévoyance", "Vitalis", "MutuaSoin"],
  laboratoires: ["Verres Lumina", "Optilab France", "Cristalis", "Laboratoire Méridien"],
};

export const faqs = [
  {
    q: "Comment fonctionne le remboursement par ma mutuelle ?",
    a: "Nous pratiquons le tiers payant avec la plupart des mutuelles partenaires : vous ne réglez que le reste à charge. Nous nous chargeons de la télétransmission avec la Sécurité sociale et votre complémentaire santé.",
  },
  {
    q: "Quel est le délai de fabrication de mes lunettes ?",
    a: "Les verres unifocaux simples sont montés en atelier sous 48 heures. Comptez 3 à 5 jours ouvrés pour des verres progressifs ou des traitements spécifiques.",
  },
  {
    q: "Quelle garantie proposez-vous ?",
    a: "Deux ans de garantie sur la monture et les verres, adaptation progressive garantie 3 mois, et réglages à vie offerts en boutique.",
  },
  {
    q: "Comment entretenir mes lunettes ?",
    a: "Rincez à l'eau tiède, séchez avec un chiffon microfibre propre et évitez les produits alcoolisés. Nous proposons un nettoyage aux ultrasons gratuit en boutique.",
  },
  {
    q: "Faut-il une ordonnance pour un examen de vue ?",
    a: "Non. Nos opticiens diplômés réalisent un contrôle de vue en boutique et peuvent renouveler certaines corrections dans le cadre légal en vigueur.",
  },
];

export const contact = {
  address: "12 rue Saint Mathias, 75011 Paris",
  phone: "01 84 25 63 40",
  email: "contact@optique-saint-mathias.fr",
  hours: [
    { d: "Lundi", h: "14h00 – 19h00" },
    { d: "Mardi – Vendredi", h: "09h30 – 19h00" },
    { d: "Samedi", h: "09h30 – 18h00" },
    { d: "Dimanche", h: "Fermé" },
  ],
};
