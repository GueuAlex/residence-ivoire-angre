"use client";

import { createContext, use, useState, type ReactNode } from "react";

// Cle du trousseau choisie : partagee par le trousseau et le message de reservation
type Valeur = { choisie: number; choisir: (i: number) => void };
const Contexte = createContext<Valeur | null>(null);

export function CleChoisieProvider({ children }: { children: ReactNode }) {
  const [choisie, choisir] = useState(0);
  return <Contexte value={{ choisie, choisir }}>{children}</Contexte>;
}

export function useCleChoisie() {
  const valeur = use(Contexte);
  if (!valeur) throw new Error("useCleChoisie doit etre utilise dans CleChoisieProvider");
  return valeur;
}
