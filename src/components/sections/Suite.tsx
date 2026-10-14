"use client";

import Image from "next/image";
import { useRef } from "react";
import { IconeEquipement } from "@/components/ui/Icones";
import { suite } from "@/content/site";
import { AVEC_ANIMATIONS, gsap, useGSAP } from "@/lib/gsap";

// Cle n° 01 : la suite en photos (rail au doigt) et ses equipements
export function Suite() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(AVEC_ANIMATIONS, () => {
        gsap.from(".piece", { y: 60, autoAlpha: 0, duration: 1, ease: "expo.out", stagger: 0.08, scrollTrigger: { trigger: ".rail", start: "top 85%" } });
        gsap.from(".puce", { y: 20, autoAlpha: 0, duration: 0.7, ease: "expo.out", stagger: 0.03, scrollTrigger: { trigger: ".puces", start: "top 90%" } });
      });
    },
    { scope: ref },
  );

  return (
    <section ref={ref} id="suite" aria-labelledby="titre-suite" className="bg-nuit py-[clamp(70px,9vw,120px)] text-ivoire">
      <div className="gouttiere mx-auto mb-[26px] flex max-w-[1360px] flex-wrap items-end justify-between gap-5">
        <div>
          <p className="surtitre !text-peche">{suite.surtitre}</p>
          <h2 id="titre-suite" className="titre mt-2.5 text-[clamp(32px,4.4vw,64px)]">
            {suite.titre}
          </h2>
        </div>
        <p className="text-ivoire/70">{suite.aide}</p>
      </div>
      <ul className="rail gouttiere flex snap-x snap-mandatory gap-3.5 overflow-x-auto pb-2.5 [scrollbar-width:none]">
        {suite.pieces.map((p) => (
          <li key={p.nom} className="piece w-[min(70vw,300px)] shrink-0 snap-start">
            <Image src={p.photo.src} alt={p.photo.alt} width={p.photo.largeur} height={p.photo.hauteur} sizes="(min-width: 768px) 300px, 70vw" className="aspect-[4/5] w-full rounded-[22px] object-cover" />
            <p className="mt-2 font-bold">{p.nom}</p>
          </li>
        ))}
      </ul>
      <ul className="puces gouttiere mx-auto flex max-w-[1360px] flex-wrap gap-2 pt-[34px]">
        {suite.equipements.map((e) => (
          <li key={e.nom} className="puce inline-flex items-center gap-2.5 rounded-full bg-nuit-2 py-2 pl-2 pr-3.5 font-semibold">
            <IconeEquipement nom={e.icone} className="size-7 rounded-full bg-peche p-[5px] text-nuit" />
            {e.nom}
          </li>
        ))}
      </ul>
    </section>
  );
}
