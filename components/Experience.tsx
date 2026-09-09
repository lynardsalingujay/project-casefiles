import { experience } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="perforation bg-dossier-panel">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="exhibit-label">EXHIBIT D</p>
        <h2 className="mt-2 font-headline text-2xl text-dossier-ink">
          Service Record
        </h2>
        <div className="mt-8 divide-y-2 divide-dotted divide-dossier-line">
          {experience.map((role) => (
            <div key={role.org} className="grid gap-1 py-5 sm:grid-cols-4">
              <p className="font-mono text-xs text-dossier-muted sm:col-span-1">
                {role.period || "Date on file"}
              </p>
              <div className="sm:col-span-3">
                <h3 className="font-mono text-sm font-bold text-dossier-ink sm:text-base">
                  {role.role} — {role.org}
                </h3>
                <p className="mt-1 font-mono text-sm text-dossier-muted">
                  {role.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
