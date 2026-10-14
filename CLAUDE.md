# L'Ivoire Suite Room (Ivoire Residence Agency, Angré) : site vitrine

> Ce site fait partie de l'espace de travail `sites/`. Les règles globales sont dans `../README.md` et `../CLAUDE.md`.
> Ce fichier ne contient que ce qui est propre à ce site.

## Fiche
- Établissement : L'Ivoire Suite Room, résidence meublée de l'agence Ivoire Residence Agency
- Type, ville : résidence meublée haut standing, Cocody-Angré (Abidjan)
- Statut : en ligne (démo à proposer à l'agence)
- Repo : https://github.com/GueuAlex/residence-ivoire-angre
- Démo : https://residence-ivoire-angre.vercel.app
- Brief : `brief/infos.md`

## Direction artistique
Demande de l'utilisateur (2026-10-13) : rester **dans le style du site Merryke** (piste B « Valise » : fond clair, titres très gras, illustration vectorielle animée au défilement, section épinglée, rail de photos verticales). Trois pistes dans `docs/maquettes/` (sommaire : `index.html`) :
- **A · Interrupteur** : un interrupteur illustré ; au défilement, les rubans LED se dessinent, la chambre passe du jour au rouge du soir et la page bascule en mode nuit.
- **B · Guirlande** : la guirlande du balcon s'allume ampoule par ampoule ; chaque ampoule révèle un équipement.
- **C · Trousseau** : un trousseau de clés de l'agence ; chaque clé ouvre une adresse (la suite d'Angré en tête, puis Cocody, Koumassi-Marcory, Assinie, Bouaké).

**Validée : piste C · Trousseau** (2026-10-14)
- Concept : « Vos clés vous attendent » ; le site devient la vitrine de toute l'agence, la suite d'Angré en clé n° 01.
- Palette (tokens dans `src/app/globals.css`, en `@theme static` car les porte-clés lisent les couleurs par leur nom) : `ivoire` #F7F2EA, `sable` #E8DCCB, `nuit` #0D1520, `nuit-2` #26303E, `peche` #F9A16A, `peche-fonce` #A34A15 (petits textes), `sauge` #A3D98B, `gris` #6A655D.
- Typographies : Alfa Slab One (titres, l'empattement du logo) et Outfit (textes).
- Expérience : ouverture (photo de la suite, porte-clé n° 01 qui se balance) ; trousseau épinglé sur ordinateur (l'anneau tourne, six porte-clés s'ouvrent en éventail), simple défilement sur mobile ; légende cliquable sous le trousseau et fiche de l'adresse choisie ; visite de la suite sur fond nuit et équipements ; message WhatsApp qui reprend la clé choisie et la date ; quartier.

## Contraintes propres à ce site
- Aucun tarif publié : pas de prix ni de calcul de séjour ; l'action est « demander le tarif et les disponibilités » sur WhatsApp.
- N'affirmer que ce que montrent les photos (pas de Wi-Fi, parking ni sécurité sans confirmation).
- Les autres adresses de l'agence n'ont ni photo ni détail : les présenter sans rien inventer.
- Appel : 05 74 68 81 08 ; WhatsApp : 01 53 54 08 29.

## Stack et commandes
- Stack : Next.js 16.4, Tailwind 4.3, GSAP 3.15 + `@gsap/react` (ScrollTrigger), Lenis 1.3.
- React rend l'éventail final (inline `rotate`) ; GSAP regroupe les clés puis les ouvre au défilement, et décale la clé choisie. Les porte-clés sont cliquables à la souris mais masqués aux lecteurs d'écran : la légende sert au clavier.
- La clé choisie est partagée par un contexte (`CleChoisieProvider`) entre le trousseau et le message de réservation.
- Maquettes : `preview_start` avec la config `ivoire-maquettes` (port 4106) de `../.claude/launch.json`
- Dev : `preview_start` avec la config `ivoire-dev` (port 3006)
- `pnpm dev` · `pnpm build` · `pnpm lint`

## Exceptions aux règles globales
- Règle 7 du README (changer d'approche UI/UX à chaque site) : l'utilisateur a demandé le 2026-10-13 un style proche du site Merryke. Le concept et l'animation signature restent propres à ce lieu.

## Journal de session
> Entrée la plus récente en haut. Chaque entrée indique la date, le travail fait, les décisions et la **prochaine étape précise**.

### 2026-10-14
- Fait :
  - piste C « Trousseau » validée par l'utilisateur ;
  - site Next.js : barre, ouverture, trousseau, suite, demande, quartier, pied de page, favicon (porte-clé), image de partage ;
  - vérifié en desktop, en mobile et en mode animations réduites ; lint et build OK ;
  - Lighthouse mobile : performance 90 à 98, accessibilité 100, bonnes pratiques 100 ; images servies en AVIF (le LCP est la photo d'ouverture) ;
  - repo GitHub créé et démo déployée.
- Prochaine étape : l'utilisateur autorise le repo dans l'application GitHub de Vercel, puis `vercel git connect`. Ensuite : faire confirmer l'adresse de la suite, les tarifs, et obtenir photos et détails des autres adresses.

### 2026-10-13
- Fait :
  - logo et 9 photos rangés dans `brief/sources/` ;
  - recherche : Instagram (bio, surlignages, lieu « Cocody-Angré » de la publication de la suite), page Facebook, recherche Google et Google Maps (aucune fiche) ;
  - brief rempli ; 3 maquettes dans le style Merryke.
- Décisions : nom de dossier `residence-ivoire-angre` ; pas de prix affiché.
- Prochaine étape : obtenir la validation d'une piste, puis initialiser Next.js (port 3006).
