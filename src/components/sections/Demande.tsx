"use client";

import { useState } from "react";
import { useCleChoisie } from "@/components/providers/CleChoisie";
import { IconeWhatsapp } from "@/components/ui/Icones";
import { adresses, contact, demande } from "@/content/site";

// Message WhatsApp prepare : reprend la cle choisie dans le trousseau et la date d'arrivee
export function Demande() {
  const { choisie } = useCleChoisie();
  const [quand, setQuand] = useState<string>(demande.choix[0].valeur);
  const adresse = adresses[choisie];
  const message = demande.message(adresse, quand);

  return (
    <section aria-labelledby="titre-demande" className="gouttiere pt-[clamp(70px,9vw,120px)]">
      <div className="mx-auto grid max-w-[1360px] items-center gap-8 rounded-[32px] bg-peche p-[clamp(28px,5vw,64px)] md:grid-cols-2">
        <div>
          <p className="surtitre !text-nuit">{demande.surtitre}</p>
          <h2 id="titre-demande" className="titre mt-2 text-[clamp(30px,4vw,56px)]">
            {demande.titre}
          </h2>
          <p className="mt-4 font-semibold">
            {demande.aide} <a href="#trousseau" className="underline underline-offset-4">{adresse.nom}</a>
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {demande.choix.map((c) => (
              <button
                key={c.valeur}
                type="button"
                aria-pressed={quand === c.valeur}
                onClick={() => setQuand(c.valeur)}
                className="rounded-full border-[1.5px] border-nuit px-4 py-2.5 font-semibold aria-pressed:bg-nuit aria-pressed:text-ivoire"
              >
                {c.libelle}
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-[22px] bg-ivoire p-6">
          <p className="text-sm text-gris">{demande.apercu}</p>
          <blockquote aria-live="polite" className="mb-[18px] mt-2.5 rounded-[4px_18px_18px_18px] bg-whatsapp px-[18px] py-4 leading-snug text-white">
            {message}
          </blockquote>
          <a href={contact.whatsapp(message)} className="bouton bouton-plein w-full justify-center">
            <IconeWhatsapp />
            {demande.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
