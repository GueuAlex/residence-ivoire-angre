import Image from "next/image";
import type { CSSProperties } from "react";
import { IconeWhatsapp } from "@/components/ui/Icones";
import { PorteCle } from "@/components/ui/PorteCle";
import { contact, ouverture } from "@/content/site";

const delai = (i: number) => ({ "--i": i }) as CSSProperties;

export function Ouverture() {
  return (
    <section id="accueil" className="gouttiere mx-auto grid min-h-svh max-w-[1360px] items-center gap-[clamp(24px,4vw,64px)] pb-10 pt-[84px] md:grid-cols-[1.05fr_0.95fr] md:pt-[90px]">
      <div>
        <p style={delai(0)} className="entree surtitre">
          {ouverture.surtitre}
        </p>
        <h1 style={delai(1)} className="entree titre mb-[18px] mt-3.5 text-[clamp(46px,6.4vw,104px)]">
          {ouverture.titre[0]} <span className="text-peche-fonce">{ouverture.titre[1]}</span>
        </h1>
        <p style={delai(2)} className="entree max-w-[480px] text-lg text-gris">
          {ouverture.texte}
        </p>
        <div style={delai(3)} className="entree mt-[26px] flex flex-wrap gap-2.5">
          <a href={contact.whatsapp(ouverture.message)} className="bouton bouton-plein">
            <IconeWhatsapp />
            {ouverture.ctaWhatsapp}
          </a>
          <a href="#trousseau" className="bouton bouton-trait">
            {ouverture.ctaAdresses}
          </a>
        </div>
      </div>

      <figure className="relative order-first w-[min(100%,300px)] justify-self-center md:order-none md:w-[min(100%,420px)]">
        <Image
          src={ouverture.photo.src}
          alt={ouverture.photo.alt}
          width={ouverture.photo.largeur}
          height={ouverture.photo.hauteur}
          sizes="(min-width: 768px) 420px, 300px"
          preload
          className="aspect-[4/4.2] w-full rounded-[28px] object-cover md:aspect-[4/5]"
        />
        <PorteCle
          format="court"
          num={ouverture.pendentif.num}
          lignes={ouverture.pendentif.lignes}
          couleur="peche"
          encre="nuit"
          className="balance absolute -top-[18px] right-[22px] w-[64px] origin-[50%_6%] drop-shadow-[0_12px_18px_rgb(13_21_32/0.25)] md:w-[78px]"
        />
      </figure>
    </section>
  );
}
