import type { Metadata, Viewport } from "next";
import { Alfa_Slab_One, Outfit } from "next/font/google";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { agence } from "@/content/site";
import "./globals.css";

const alfa = Alfa_Slab_One({ subsets: ["latin"], weight: "400", variable: "--font-alfa", display: "swap" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://residence-ivoire-angre.vercel.app"),
  title: `${agence.nom} · L'Ivoire Suite, résidence meublée à Cocody-Angré`,
  description: agence.description,
  // Site de prospection : pas d'indexation avant la signature
  robots: { index: false, follow: false },
  openGraph: {
    title: `${agence.marque} · Vos clés vous attendent`,
    description: agence.description,
    siteName: agence.nom,
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f2ea",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${alfa.variable} ${outfit.variable}`}>
      <body>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
