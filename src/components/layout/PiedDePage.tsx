import { contact, pied } from "@/content/site";

export function PiedDePage() {
  return (
    <footer className="gouttiere flex flex-wrap justify-between gap-2.5 bg-white pb-10 pt-7 text-sm text-gris">
      <span>
        {pied.ligne} ·{" "}
        <a href={contact.appelLien} className="underline-offset-4 hover:underline">
          {contact.appelAffiche}
        </a>{" "}
        · {pied.credits}
      </span>
      <span>{pied.signature}</span>
    </footer>
  );
}
