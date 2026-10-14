import type { ReactNode } from "react";
import type { NomIcone } from "@/content/site";

// Icones au trait des equipements (32 x 32)
const traces: Record<NomIcone, ReactNode> = {
  lit: (
    <>
      <path d="M4 25V9M4 18h24v7M28 18v-3a3 3 0 0 0-3-3H13v6" />
      <circle cx="8.5" cy="14.5" r="2.5" />
    </>
  ),
  clim: (
    <>
      <rect x="3" y="6" width="26" height="9" rx="2" />
      <path d="M7 12h18M10 19v6M16 19v8M22 19v6" />
    </>
  ),
  tv: (
    <>
      <rect x="3" y="6" width="26" height="17" rx="2" />
      <path d="M11 27h10M16 23v4" />
    </>
  ),
  flamme: (
    <>
      <rect x="4" y="18" width="24" height="10" rx="2" />
      <path d="M16 6c3 4 5 6 5 9a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3 0-5 1-8Z" />
    </>
  ),
  led: (
    <>
      <path d="M4 8h24M4 8v4M28 8v4M9 16l-2 4M16 16v5M23 16l2 4" />
      <circle cx="8" cy="8" r="1.4" />
      <circle cx="13" cy="8" r="1.4" />
      <circle cx="18" cy="8" r="1.4" />
      <circle cx="23" cy="8" r="1.4" />
    </>
  ),
  fauteuil: <path d="M7 15V10a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v5M5 15a2 2 0 0 1 4 0v4h14v-4a2 2 0 0 1 4 0v8H5ZM8 23v4M24 23v4" />,
  placard: (
    <>
      <rect x="5" y="3" width="22" height="26" rx="1.5" />
      <path d="M16 3v26M13 15v3M19 15v3M9 7l3 3M20 7l3 3" />
    </>
  ),
  gaziniere: (
    <>
      <rect x="5" y="4" width="22" height="25" rx="2" />
      <circle cx="11" cy="10" r="2.5" />
      <circle cx="21" cy="10" r="2.5" />
      <rect x="9" y="16" width="14" height="9" rx="1" />
    </>
  ),
  microondes: (
    <>
      <rect x="3" y="8" width="26" height="16" rx="2" />
      <rect x="6" y="11" width="15" height="10" rx="1" />
      <path d="M25 12v1M25 16v1M25 20v1" />
    </>
  ),
  balcon: <path d="M3 9h26l-3-4H6ZM6 9v4M26 9v4M4 28h24M6 28V19h20v9M10 19v9M14 19v9M18 19v9M22 19v9" />,
  douche: <path d="M8 29V8a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v1M15 9h10l-1 3H16ZM17 16v2M20 16v3M23 16v2M18.5 21v2M21.5 21v2" />,
  miroir: (
    <>
      <circle cx="16" cy="14" r="9" />
      <circle cx="16" cy="14" r="5.5" />
      <path d="M12 27h8M16 23v4" />
    </>
  ),
};

export function IconeEquipement({ nom, className }: { nom: NomIcone; className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className={className}>
      {traces[nom]}
    </svg>
  );
}

export function IconeWhatsapp({ className = "size-[18px]" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M4 18.5 5.2 15A8 8 0 1 1 8.6 18.6Z" fill="none" stroke="currentColor" strokeWidth={2} />
    </svg>
  );
}
