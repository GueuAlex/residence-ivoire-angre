import type { Teinte } from "@/content/site";

const teinte = (t: Teinte) => `var(--color-${t})`;
const TRAIT = "var(--color-nuit)";

type Props = {
  num: string;
  couleur: Teinte;
  encre: Teinte;
  // Lignes de texte sous le numero (format court, sur la photo d'ouverture)
  lignes?: readonly string[];
  format?: "long" | "court";
  className?: string;
};

// Porte-cle d'hotel : anneau, plaque arrondie percee, numero en gros
export function PorteCle({ num, couleur, encre, lignes = [], format = "long", className }: Props) {
  const long = format === "long";
  const largeur = long ? 86 : 78;
  const milieu = largeur / 2;
  const bas = long ? 238 : 156;
  const g = milieu - 27;

  return (
    <svg viewBox={`0 0 ${largeur} ${bas + 6}`} aria-hidden="true" className={className} overflow="visible">
      {long && <path d={`M${milieu} 0v22`} stroke={TRAIT} strokeWidth={3} />}
      <circle cx={milieu} cy={long ? 30 : 10} r={8} fill="none" stroke={TRAIT} strokeWidth={3} />
      {!long && <path d={`M${milieu} 18v10`} stroke={TRAIT} strokeWidth={3} />}
      <path
        className="plaque"
        d={`M${g} 64a27 27 0 0 1 54 0V${bas - 14}a14 14 0 0 1-14 14H${g + 14}a14 14 0 0 1-14-14Z`}
        transform={long ? undefined : "translate(0 -20)"}
        fill={teinte(couleur)}
        stroke={TRAIT}
        strokeWidth={2.5}
      />
      <circle cx={milieu} cy={long ? 54 : 34} r={6} fill="var(--color-ivoire)" stroke={TRAIT} strokeWidth={2} />
      <text x={milieu} y={long ? 218 : 92} textAnchor="middle" fill={teinte(encre)} fontFamily="var(--font-titre)" fontSize={26}>
        {num}
      </text>
      {lignes.map((l, i) => (
        <text key={l} x={milieu} y={118 + i * 14} textAnchor="middle" fill={teinte(encre)} fontFamily="var(--font-texte)" fontWeight={700} fontSize={11}>
          {l}
        </text>
      ))}
    </svg>
  );
}
