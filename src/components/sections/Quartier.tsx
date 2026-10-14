import Image from "next/image";
import { quartier } from "@/content/site";

export function Quartier() {
  return (
    <section aria-labelledby="titre-quartier" className="gouttiere mx-auto grid max-w-[1360px] items-center gap-6 py-[clamp(70px,9vw,120px)] md:grid-cols-2">
      <div>
        <p className="surtitre">{quartier.surtitre}</p>
        <h2 id="titre-quartier" className="titre mb-3.5 mt-2.5 text-[clamp(30px,4vw,56px)]">
          {quartier.titre}
        </h2>
        <p className="text-gris">{quartier.texte}</p>
        <ul className="mt-2">
          {quartier.reperes.map((r) => (
            <li key={r} className="flex items-center gap-2.5 border-b border-nuit/10 py-3.5">
              <span aria-hidden="true" className="size-2.5 shrink-0 rounded-full bg-peche" />
              {r}
            </li>
          ))}
        </ul>
      </div>
      <Image src={quartier.photo.src} alt={quartier.photo.alt} width={quartier.photo.largeur} height={quartier.photo.hauteur} sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[4/5] w-full rounded-[28px] object-cover object-[30%_50%]" />
    </section>
  );
}
