"use client";

import { useRef, useState } from "react";

const exhibits = [
  { href: "#about", label: "Exhibit A — Background" },
  { href: "#skills", label: "Exhibit B — Skills" },
  { href: "#projects", label: "Exhibit C — Case Files" },
  { href: "#experience", label: "Exhibit D — Service Record" },
  { href: "#contact", label: "Exhibit E — Contact" },
];

export default function DossierHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  return (
    <div
      className="sticky top-0 z-10 border-b-2 border-dossier-ink bg-dossier-paper"
      onKeyDown={(event) => {
        if (event.key === "Escape" && menuOpen) {
          setMenuOpen(false);
          menuButtonRef.current?.focus();
        }
      }}
    >
      <div className="flex items-center justify-between px-4 py-3 md:px-6">
        <span className="whitespace-nowrap font-mono text-xs tracking-wide text-dossier-muted">
          FILE NO. LS-2026
        </span>
        <div className="flex items-center gap-4">
          <span className="stamp whitespace-nowrap text-dossier-stamp">
            OPEN TO WORK
          </span>
          <button
            ref={menuButtonRef}
            type="button"
            className="flex size-10 items-center justify-center border-2 border-dossier-ink text-dossier-ink focus-visible:outline-dossier-stamp md:hidden"
            aria-label={menuOpen ? "Close exhibit navigation" : "Open exhibit navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-exhibit-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="flex w-4 flex-col gap-1" aria-hidden="true">
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-full bg-current" />
              <span className="h-0.5 w-full bg-current" />
            </span>
          </button>
        </div>
      </div>
      <nav
        aria-label="Exhibit navigation"
        className="scrollbar-none hidden gap-6 overflow-x-auto border-t border-dossier-line px-6 md:flex"
      >
        {exhibits.map((exhibit) => (
          <a
            key={exhibit.href}
            href={exhibit.href}
            className="whitespace-nowrap border-b-2 border-transparent py-2 font-mono text-xs text-dossier-muted transition-colors hover:border-dossier-stamp hover:text-dossier-ink"
          >
            {exhibit.label}
          </a>
        ))}
      </nav>
      <nav
        id="mobile-exhibit-navigation"
        aria-label="Mobile exhibit navigation"
        className={`${menuOpen ? "flex" : "hidden"} flex-col border-t border-dossier-line px-4 py-2 md:hidden`}
      >
        {exhibits.map((exhibit) => (
          <a
            key={exhibit.href}
            href={exhibit.href}
            className="border-l-2 border-transparent px-3 py-3 font-mono text-sm text-dossier-muted transition-colors hover:border-dossier-stamp hover:text-dossier-ink"
            onClick={() => setMenuOpen(false)}
          >
            {exhibit.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
