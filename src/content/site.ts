// Contenu du site : Ivoire Residence Agency et L'Ivoire Suite Room, separes de la presentation.
// Sources : publication de la suite, Instagram et Facebook de l'agence (voir brief/infos.md).
// Aucun tarif n'est publie : le site invite a le demander. Les equipements sont ceux visibles sur les photos.

export type Photo = { src: string; largeur: number; hauteur: number; alt: string };

const photo = (nom: string, alt: string): Photo => ({ src: `/images/${nom}.jpg`, largeur: 720, hauteur: 900, alt });

export const agence = {
  marque: "Ivoire Résidence",
  nom: "Ivoire Residence Agency",
  sousTitre: "Residence Agency · Abidjan",
  description:
    "Ivoire Residence Agency : résidences meublées haut standing à Abidjan, Assinie et Bouaké. L'Ivoire Suite, à Cocody-Angré : lit capitonné, coin salon devant le marbre, balcon avec cuisine en plein air et rubans LED.",
  logo: { src: "/images/logo.jpg", largeur: 828, hauteur: 828, alt: "" },
  // Villes affichees sur l'image de partage
  villes: ["Angré", "Cocody", "Assinie", "Bouaké"],
} as const;

const APPEL = "2250574688108";
const WHATSAPP = "2250153540829";
export const contact = {
  appelAffiche: "05 74 68 81 08",
  appelLien: `tel:+${APPEL}`,
  whatsappAffiche: "01 53 54 08 29",
  whatsapp: (message: string) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`,
} as const;

export const ouverture = {
  surtitre: "Résidences meublées haut standing",
  titre: ["Vos clés vous", "attendent."],
  texte:
    "Ivoire Residence Agency vous loge à Abidjan, à Assinie et à l'intérieur du pays, avec un service humain, rapide et fiable. Première clé : L'Ivoire Suite, à Cocody-Angré.",
  ctaWhatsapp: "Réserver sur WhatsApp",
  message: "Bonjour, je souhaite réserver une résidence Ivoire Residence Agency.",
  ctaAdresses: "Voir les adresses",
  photo: photo("chambre-lustre", "L'Ivoire Suite : chambre au lit noir, lustre spirale, lambris et tableau de montagnes"),
  pendentif: { num: "01", lignes: ["SUITE", "ANGRÉ"] },
} as const;

// Couleurs des porte-cles : noms de tokens du theme (globals.css)
export type Teinte = "peche" | "nuit" | "sauge" | "sable" | "nuit-2" | "peche-fonce" | "ivoire";

export type Adresse = {
  num: string;
  court: string;
  nom: string;
  lieu: string;
  couleur: Teinte;
  encre: Teinte;
  // Seule la suite a des photos et un descriptif ; les autres adresses n'ont aucun detail public
  suite?: boolean;
};

export const adresses: Adresse[] = [
  { num: "01", court: "Angré", nom: "L'Ivoire Suite", lieu: "Cocody-Angré, Abidjan", couleur: "peche", encre: "nuit", suite: true },
  { num: "02", court: "Faya", nom: "Cocody", lieu: "Cocody (Faya), Abidjan", couleur: "nuit", encre: "ivoire" },
  { num: "03", court: "Koumassi", nom: "Koumassi · Marcory", lieu: "Sud d'Abidjan", couleur: "sauge", encre: "nuit" },
  { num: "04", court: "Jacuzzi", nom: "Résidence avec jacuzzi", lieu: "Abidjan", couleur: "sable", encre: "nuit" },
  { num: "05", court: "Assinie", nom: "Villa avec piscine", lieu: "Assinie", couleur: "nuit-2", encre: "peche" },
  { num: "06", court: "Bouaké", nom: "Bouaké", lieu: "Centre du pays", couleur: "peche-fonce", encre: "ivoire" },
];

export const trousseau = {
  titre: "Les adresses d'Ivoire Residence Agency",
  groupe: "Choisissez une adresse",
  cle: (a: Adresse) => `Clé n° ${a.num} · ${a.lieu}`,
  suite: {
    texte: "Chambre au lit capitonné, coin salon devant le marbre, salle d'eau, balcon avec cuisine en plein air. Rubans LED au plafond.",
    vignettes: ["chambre-jour", "coin-salon-marbre", "balcon-cuisine"].map((n) => photo(n, "")),
    ctaVisite: "Visiter la suite",
    ctaTarif: "Demander le tarif",
    message: "Bonjour, je souhaite connaître le tarif et les disponibilités de L'Ivoire Suite Room (Angré).",
  },
  autre: {
    texte: "Une autre adresse d'Ivoire Residence Agency.",
    attente: "Photos, tarif et disponibilités sur demande : l'agence vous répond sur WhatsApp.",
    cta: "Demander sur WhatsApp",
    message: (a: Adresse) => `Bonjour, je souhaite des photos et le tarif de votre résidence : ${a.nom} (${a.lieu}).`,
  },
} as const;

export type NomIcone = "lit" | "clim" | "tv" | "flamme" | "led" | "fauteuil" | "placard" | "gaziniere" | "microondes" | "balcon" | "douche" | "miroir";

export const suite = {
  surtitre: "Clé n° 01 · L'Ivoire Suite",
  titre: "La suite, de la chambre au balcon",
  aide: "Glissez pour visiter →",
  pieces: [
    { nom: "La chambre", photo: photo("chambre-jour", "La chambre de jour : grand lit noir, deux fauteuils, rideaux clairs") },
    { nom: "La chambre, le soir", photo: photo("chambre-nuit-led", "La même chambre le soir, éclairée par les rubans LED rouges") },
    { nom: "Le coin salon", photo: photo("coin-salon-marbre", "Coin salon : deux fauteuils noirs devant un mur de marbre avec télévision et cheminée décorative") },
    { nom: "Le placard à miroirs", photo: photo("chambre-placard-miroirs", "Placard à portes miroirs, lit noir et rubans LED au plafond") },
    { nom: "La cuisine du balcon", photo: photo("balcon-cuisine", "Cuisine en plein air sur le balcon, sous une guirlande d'ampoules") },
    { nom: "Le balcon", photo: photo("balcon-salon", "Coin détente du balcon : deux fauteuils bleus, table, gazon synthétique et store") },
    { nom: "La salle d'eau", photo: photo("salle-d-eau-douche", "Salle d'eau avec douche à pommeau pluie") },
    { nom: "Le miroir lumineux", photo: photo("salle-d-eau-miroir", "Lavabo et miroir rond lumineux") },
  ],
  equipements: [
    { icone: "lit", nom: "Grand lit capitonné" },
    { icone: "clim", nom: "Climatisation" },
    { icone: "tv", nom: "Télévision écran plat" },
    { icone: "flamme", nom: "Cheminée décorative" },
    { icone: "led", nom: "Rubans LED d'ambiance" },
    { icone: "fauteuil", nom: "Coin salon" },
    { icone: "placard", nom: "Placard à miroirs" },
    { icone: "gaziniere", nom: "Cuisine au balcon" },
    { icone: "microondes", nom: "Micro-ondes" },
    { icone: "balcon", nom: "Balcon avec store" },
    { icone: "douche", nom: "Douche pluie" },
    { icone: "miroir", nom: "Miroir lumineux" },
  ] satisfies { icone: NomIcone; nom: string }[],
} as const;

export const demande = {
  surtitre: "Réserver",
  titre: "Quelle clé, et pour quand ?",
  aide: "La clé choisie dans le trousseau :",
  choix: [
    { libelle: "Ce soir", valeur: "ce soir" },
    { libelle: "Ce week-end", valeur: "ce week-end" },
    { libelle: "Autre date", valeur: "à une autre date" },
  ],
  apercu: "Votre message, prêt à envoyer",
  cta: "Envoyer sur WhatsApp",
  message: (a: Adresse, quand: string) =>
    `Bonjour, je souhaite réserver ${a.suite ? "L'Ivoire Suite Room (Angré)" : `votre résidence : ${a.nom} (${a.lieu})`}, arrivée ${quand}. Quel est le tarif ?`,
} as const;

export const quartier = {
  surtitre: "L'Ivoire Suite",
  titre: "Cocody-Angré",
  texte: "Au nord-est d'Abidjan. L'adresse exacte vous est envoyée à la réservation.",
  reperes: ["Balcon avec vue dégagée sur le quartier", `Réservation par appel : ${contact.appelAffiche}`, `Ou sur WhatsApp : ${contact.whatsappAffiche}`],
  photo: photo("balcon-salon", "Le balcon de la suite et la vue sur Angré"),
} as const;

export const pied = {
  ligne: "Ivoire Residence Agency · L'Ivoire Suite Room, Cocody-Angré",
  credits: "Photos : Ivoire Residence Agency",
  signature: "Proposition de site réalisée par Digifaz",
} as const;
