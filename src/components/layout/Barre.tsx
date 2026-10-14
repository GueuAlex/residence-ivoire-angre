import Image from "next/image";
import { agence, contact } from "@/content/site";

export function Barre() {
  return (
    <header className="gouttiere fixed inset-x-0 top-0 z-40 flex items-center justify-between gap-4 bg-ivoire/90 py-2.5 backdrop-blur">
      <a href="#accueil" className="flex items-center gap-2.5">
        <Image src={agence.logo.src} alt={agence.logo.alt} width={agence.logo.largeur} height={agence.logo.hauteur} sizes="42px" className="size-[42px] rounded-xl" />
        <span className="leading-tight">
          <b className="block font-titre text-[17px] font-normal">{agence.marque}</b>
          <small className="block text-[11px] font-semibold text-gris max-[379px]:hidden">{agence.sousTitre}</small>
        </span>
      </a>
      <a href={contact.appelLien} className="whitespace-nowrap rounded-full bg-nuit px-3 py-2.5 text-[13px] font-bold text-ivoire sm:px-4 sm:text-sm">
        {contact.appelAffiche}
      </a>
    </header>
  );
}
