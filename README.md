# Ivoire Residence Agency · L'Ivoire Suite · site vitrine

Proposition de site pour **Ivoire Residence Agency**, agence de résidences meublées haut standing (Abidjan, Assinie, Bouaké), avec en tête **L'Ivoire Suite Room** à Cocody-Angré.

- **Démo** : https://residence-ivoire-angre.vercel.app (non indexée par les moteurs de recherche)
- **Approche** : piste C « Trousseau ». Au défilement, l'anneau tourne et six porte-clés s'ouvrent en éventail, un par adresse de l'agence ; une clé ouvre sa fiche. Puis la visite de la suite, ses équipements, un message WhatsApp qui reprend la clé choisie et la date d'arrivée, et le quartier. Les maquettes des trois pistes sont dans `docs/maquettes/`.
- Aucun tarif n'est publié par l'agence : le site invite à le demander.
- Proposition de site réalisée par **Digifaz**.

## Stack
Next.js 16 (App Router, TypeScript) · Tailwind CSS 4 · GSAP 3.15 (ScrollTrigger) · Lenis

## Commandes
```bash
pnpm install
pnpm dev --port 3006
pnpm lint
pnpm build
```

## Organisation
- `src/content/site.ts` : **tout le contenu** (adresses du trousseau, pièces, équipements, textes, contact). C'est le seul fichier à modifier pour changer une information.
- `src/components/sections/` : une section par fichier (ouverture, trousseau, suite, demande, quartier).
- `src/components/ui/` : le porte-clé et les icônes.
- `src/components/providers/CleChoisie.tsx` : la clé choisie, partagée entre le trousseau et le message WhatsApp.
- `src/app/globals.css` : tokens du thème.
- `brief/infos.md` : brief, sources et infos à faire confirmer.
