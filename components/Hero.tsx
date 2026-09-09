import { profile } from "@/lib/content";

export default function Hero() {
  return (
    <section className="border-b-2 border-dossier-ink bg-dossier-panel">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <p className="exhibit-label">PERSONNEL FILE</p>
        <h1 className="mt-3 font-headline text-3xl leading-tight text-dossier-ink sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-xl font-mono text-sm leading-relaxed text-dossier-ink sm:text-base">
          {profile.tagline}
        </p>

        <div className="perforation mt-8 grid grid-cols-2 gap-y-4 py-6 sm:grid-cols-4">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-dossier-muted">
              Designation
            </p>
            <p className="mt-1 font-mono text-sm text-dossier-ink">
              {profile.title}
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-dossier-muted">
              Location
            </p>
            <p className="mt-1 font-mono text-sm text-dossier-ink">
              {profile.location}
            </p>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-dossier-muted">
              Status
            </p>
            <span className="stamp stamp-drop mt-1 text-dossier-stamp">
              ACTIVE
            </span>
          </div>
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-dossier-muted">
              Adaptability
            </p>
            <p className="mt-1 font-mono text-sm text-dossier-ink">
              Cross-Stack Engineer
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="border-2 border-dossier-ink bg-dossier-ink px-5 py-2.5 font-mono text-sm text-dossier-paper transition-colors hover:bg-transparent hover:text-dossier-ink"
          >
            Review case files
          </a>
          <a
            href="#contact"
            className="border-2 border-dossier-ink px-5 py-2.5 font-mono text-sm text-dossier-ink transition-colors hover:bg-dossier-ink hover:text-dossier-paper"
          >
            Request contact
          </a>
        </div>
      </div>
    </section>
  );
}
