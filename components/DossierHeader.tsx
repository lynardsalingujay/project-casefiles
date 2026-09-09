const exhibits = [
  { href: "#about", label: "Exhibit A — Background" },
  { href: "#skills", label: "Exhibit B — Skills" },
  { href: "#projects", label: "Exhibit C — Case Files" },
  { href: "#experience", label: "Exhibit D — Service Record" },
  { href: "#contact", label: "Exhibit E — Contact" },
];

export default function DossierHeader() {
  return (
    <div className="sticky top-0 z-10 border-b-2 border-dossier-ink bg-dossier-paper">
      <div className="flex items-center justify-between px-6 py-3">
        <span className="font-mono text-xs tracking-wide text-dossier-muted">
          FILE NO. LS-2026
        </span>
        <span className="stamp text-dossier-stamp">OPEN TO WORK</span>
      </div>
      <nav className="scrollbar-none flex gap-6 overflow-x-auto border-t border-dossier-line px-6">
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
    </div>
  );
}
