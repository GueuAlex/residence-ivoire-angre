"use client";

import Image from "next/image";
import { useRef } from "react";
import { useCleChoisie } from "@/components/providers/CleChoisie";
import { IconeWhatsapp } from "@/components/ui/Icones";
import { PorteCle } from "@/components/ui/PorteCle";
import { adresses, contact, trousseau } from "@/content/site";
import { AVEC_ANIMATIONS, gsap, useGSAP } from "@/lib/gsap";

// Angle final de chaque porte-cle, en eventail sous l'anneau
const ANGLES = [-45, -27, -9, 9, 27, 45];
const DECALAGE_CHOISIE = 16;

// Fiche de l'adresse choisie : seule la suite a photos et descriptif
function Fiche({ i }: { i: number }) {
  const a = adresses[i];
  return (
    <article aria-live="polite" className="fiche rounded-[28px] bg-white p-[clamp(24px,3vw,36px)] shadow-[0_20px_50px_rgb(13_21_32/0.08)]">
      <p className="surtitre">{trousseau.cle(a)}</p>
      <h3 className="titre mb-2.5 mt-2 text-[clamp(30px,3.4vw,50px)]">{a.nom}</h3>
      {a.suite ? (
        <>
          <p className="text-gris">{trousseau.suite.texte}</p>
          <div className="my-[18px] grid grid-cols-3 gap-2">
            {trousseau.suite.vignettes.map((v) => (
              <Image key={v.src} src={v.src} alt={v.alt} width={v.largeur} height={v.hauteur} sizes="(min-width: 900px) 160px, 30vw" className="aspect-[4/5] w-full rounded-[14px] object-cover" />
            ))}
          </div>
          <div className="flex flex-wrap gap-2.5">
            <a href="#suite" className="bouton bouton-plein">
              {trousseau.suite.ctaVisite}
            </a>
            <a href={contact.whatsapp(trousseau.suite.message)} className="bouton bouton-trait">
              {trousseau.suite.ctaTarif}
            </a>
          </div>
        </>
      ) : (
        <>
          <p className="text-gris">{trousseau.autre.texte}</p>
          <p className="my-[18px] rounded-2xl border-[1.5px] border-dashed border-sable p-[18px] text-gris">{trousseau.autre.attente}</p>
          <a href={contact.whatsapp(trousseau.autre.message(a))} className="bouton bouton-plein">
            <IconeWhatsapp />
            {trousseau.autre.cta}
          </a>
        </>
      )}
    </article>
  );
}

// Signature : au defilement, l'anneau tourne et les porte-cles s'ouvrent en eventail.
// React rend l'etat final (eventail) ; GSAP gere ensuite rotation et decalage des cles.
export function Trousseau() {
  const ref = useRef<HTMLElement>(null);
  const premier = useRef(true);
  const { choisie, choisir } = useCleChoisie();

  useGSAP(
    () => {
      gsap.matchMedia().add({ grandEcran: "(min-width: 900px)", anime: AVEC_ANIMATIONS }, (contexte) => {
        const { grandEcran, anime } = contexte.conditions!;
        if (!anime) return;
        const cles = gsap.utils.toArray<HTMLElement>(".cle");
        gsap.set(cles, { rotation: () => gsap.utils.random(-6, 6) });
        gsap
          .timeline({
            scrollTrigger: {
              trigger: ref.current,
              start: grandEcran ? "top top" : "top 70%",
              end: grandEcran ? "+=110%" : "center 50%",
              scrub: 1,
              pin: grandEcran,
            },
          })
          .to(".anneau", { rotation: -50, duration: 1, ease: "none" }, 0)
          .to(cles, { rotation: (i: number) => ANGLES[i], duration: 0.8, ease: "back.out(1.4)", stagger: 0.05 }, 0.1)
          .from(".fiche-zone", { x: 40, autoAlpha: 0, duration: 0.4 }, 0.5);
      });
    },
    { scope: ref },
  );

  // La cle choisie descend un peu, comme tiree du trousseau ; la fiche change avec un fondu
  useGSAP(
    () => {
      const anime = window.matchMedia(AVEC_ANIMATIONS).matches;
      gsap.utils.toArray<HTMLElement>(".cle").forEach((c, k) => {
        gsap.to(c, { y: k === choisie ? DECALAGE_CHOISIE : 0, duration: anime ? 0.4 : 0, ease: "back.out(2)" });
      });
      if (anime && !premier.current) gsap.from(".fiche > *", { y: 16, autoAlpha: 0, duration: 0.5, ease: "expo.out", stagger: 0.05 });
      premier.current = false;
    },
    { scope: ref, dependencies: [choisie] },
  );

  const survol = (i: number, y: number) => () => {
    if (i !== choisie && window.matchMedia(AVEC_ANIMATIONS).matches) gsap.to(`.cle-${i}`, { y, duration: 0.3, ease: "power2.out" });
  };

  return (
    <section
      ref={ref}
      id="trousseau"
      aria-labelledby="titre-trousseau"
      className="gouttiere mx-auto grid max-w-[1360px] items-center gap-[clamp(20px,4vw,64px)] py-[70px] min-[900px]:h-svh min-[900px]:min-h-[680px] min-[900px]:grid-cols-[minmax(320px,1.1fr)_1fr] min-[900px]:pb-[30px] min-[900px]:pt-20"
    >
      <h2 id="titre-trousseau" className="sr-only">
        {trousseau.titre}
      </h2>
      <div className="relative pt-[300px] min-[900px]:h-[min(560px,74svh)] min-[900px]:pt-0">
        <svg viewBox="0 0 120 120" aria-hidden="true" className="anneau absolute left-1/2 top-0 -ml-[45px] w-[90px] overflow-visible min-[900px]:-ml-[60px] min-[900px]:w-[120px]">
          <circle cx="60" cy="60" r="44" fill="none" stroke="var(--color-nuit)" strokeWidth="7" strokeDasharray="250 26" strokeLinecap="round" />
          <circle cx="60" cy="60" r="44" fill="none" stroke="var(--color-ivoire)" strokeWidth="2" strokeDasharray="250 26" opacity=".5" />
        </svg>
        {adresses.map((a, i) => (
          // Cles cliquables a la souris ; la legende ci-dessous sert au clavier et aux lecteurs d'ecran
          <button
            key={a.num}
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            onClick={() => choisir(i)}
            onMouseEnter={survol(i, 8)}
            onMouseLeave={survol(i, 0)}
            style={{ transform: `rotate(${ANGLES[i]}deg)` }}
            className={`cle cle-${i} absolute left-1/2 top-[70px] -ml-8 w-16 origin-[32px_0] min-[900px]:top-24 min-[900px]:-ml-[42px] min-[900px]:w-[84px] min-[900px]:origin-[42px_0] ${i === choisie ? "drop-shadow-[0_14px_22px_rgb(13_21_32/0.3)]" : ""}`}
          >
            <PorteCle num={a.num} couleur={a.couleur} encre={a.encre} className="w-full" />
          </button>
        ))}
        <div role="group" aria-label={trousseau.groupe} className="flex flex-wrap justify-center gap-1.5 min-[900px]:absolute min-[900px]:inset-x-0 min-[900px]:bottom-0">
          {adresses.map((a, i) => (
            <button
              key={a.num}
              type="button"
              aria-pressed={i === choisie}
              onClick={() => choisir(i)}
              className="inline-flex items-center gap-1.5 rounded-full border-[1.5px] border-sable py-[7px] pl-[7px] pr-3 text-sm font-semibold aria-pressed:border-nuit aria-pressed:bg-white"
            >
              <b aria-hidden="true" className="grid size-6 place-items-center rounded-full border-[1.5px] border-nuit text-[11px]" style={{ background: `var(--color-${a.couleur})`, color: `var(--color-${a.encre})` }}>
                {a.num}
              </b>
              {a.court}
              <span className="sr-only">
                {" "}
                : {a.nom}, {a.lieu}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div className="fiche-zone">
        <Fiche i={choisie} />
      </div>
    </section>
  );
}
