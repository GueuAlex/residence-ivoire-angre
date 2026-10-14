import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { agence, ouverture } from "@/content/site";

// Image d'apercu des partages (WhatsApp, Facebook...)
export const alt = `${agence.nom} · Vos clés vous attendent`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Couleurs du theme (globals.css), en clair car l'image est rendue hors CSS
const C = { ivoire: "#f7f2ea", sable: "#e8dccb", nuit: "#0d1520", peche: "#f9a16a", pecheFonce: "#a34a15", gris: "#6a655d" };

const racine = process.cwd();
const [alfa, outfit, photo] = await Promise.all([
  readFile(join(racine, "node_modules/@fontsource/alfa-slab-one/files/alfa-slab-one-latin-400-normal.woff")),
  readFile(join(racine, "node_modules/@fontsource/outfit/files/outfit-latin-700-normal.woff")),
  readFile(join(racine, "public", ouverture.photo.src)),
]);
const image = `data:image/jpeg;base64,${photo.toString("base64")}`;

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", background: C.ivoire, padding: "0 70px", gap: 56, color: C.nuit }}>
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ fontFamily: "Outfit", fontSize: 20, letterSpacing: 3, color: C.pecheFonce }}>IVOIRE RESIDENCE AGENCY · ABIDJAN</div>
          <div style={{ fontFamily: "Alfa", fontSize: 92, lineHeight: 1, marginTop: 20 }}>Vos clés vous</div>
          <div style={{ fontFamily: "Alfa", fontSize: 92, lineHeight: 1, color: C.pecheFonce }}>attendent.</div>
          <div style={{ display: "flex", marginTop: 34, gap: 10 }}>
            {agence.villes.map((l) => (
              <div key={l} style={{ display: "flex", padding: "10px 20px", borderRadius: 999, border: `2px solid ${C.sable}`, background: "#fff", fontFamily: "Outfit", fontSize: 22 }}>
                {l}
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", position: "relative" }}>
          <img src={image} width={360} height={450} alt="" style={{ borderRadius: 28, objectFit: "cover" }} />
          <svg width="86" height="190" viewBox="0 0 78 170" style={{ position: "absolute", right: 24, top: -24 }}>
            <circle cx="39" cy="10" r="8" fill="none" stroke={C.nuit} strokeWidth="3" />
            <path d="M39 18v10" stroke={C.nuit} strokeWidth="3" />
            <path d="M12 44a27 27 0 0 1 54 0v100a14 14 0 0 1-14 14H26a14 14 0 0 1-14-14Z" fill={C.peche} stroke={C.nuit} strokeWidth="2.5" />
            <circle cx="39" cy="34" r="6" fill={C.ivoire} stroke={C.nuit} strokeWidth="2" />
          </svg>
          <div style={{ position: "absolute", right: 24, top: 52, width: 86, display: "flex", justifyContent: "center", fontFamily: "Alfa", fontSize: 30 }}>01</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Alfa", data: alfa, style: "normal", weight: 400 },
        { name: "Outfit", data: outfit, style: "normal", weight: 700 },
      ],
    },
  );
}
