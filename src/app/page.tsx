import { Barre } from "@/components/layout/Barre";
import { PiedDePage } from "@/components/layout/PiedDePage";
import { CleChoisieProvider } from "@/components/providers/CleChoisie";
import { Demande } from "@/components/sections/Demande";
import { Ouverture } from "@/components/sections/Ouverture";
import { Quartier } from "@/components/sections/Quartier";
import { Suite } from "@/components/sections/Suite";
import { Trousseau } from "@/components/sections/Trousseau";

export default function Accueil() {
  return (
    <>
      <Barre />
      <main>
        <Ouverture />
        <CleChoisieProvider>
          <Trousseau />
          <Suite />
          <Demande />
        </CleChoisieProvider>
        <Quartier />
      </main>
      <PiedDePage />
    </>
  );
}
