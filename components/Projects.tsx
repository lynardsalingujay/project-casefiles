import { projects, type Project } from "@/lib/content";

const statusStamp: Record<Project["status"], string> = {
  Shipped: "CLOSED — SHIPPED",
  "In progress": "OPEN — ACTIVE",
  Learning: "OPEN — TRAINING",
};

function CaseFile({ project, index }: { project: Project; index: number }) {
  const caseNumber = `LS-${String(index + 1).padStart(2, "0")}`;

  return (
    <div className="border-2 border-dossier-ink bg-dossier-panel">
      <div className="flex items-center justify-between border-b-2 border-dossier-ink px-4 py-2">
        <span className="font-mono text-xs text-dossier-muted">
          CASE {caseNumber}
        </span>
        <span className="font-mono text-[10px] text-dossier-stamp">
          {statusStamp[project.status]}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-headline text-lg text-dossier-ink">
          {project.title}
        </h3>
        <p className="mt-2 font-mono text-sm leading-relaxed text-dossier-ink">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-1">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="border border-dossier-line px-2 py-0.5 font-mono text-[11px] text-dossier-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
        {(project.href || project.demoHref || project.links?.length) && (
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-dossier-phosphor hover:underline"
              >
                Source record
              </a>
            )}
            {project.demoHref && (
              <a
                href={project.demoHref}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-dossier-stamp hover:underline"
              >
                Live evidence
              </a>
            )}
            {project.links?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-dossier-phosphor hover:underline"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="perforation">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="exhibit-label">EXHIBIT C</p>
        <h2 className="mt-2 font-headline text-2xl text-dossier-ink">
          Case Files
        </h2>
        <p className="mt-3 max-w-lg font-mono text-sm text-dossier-muted">
          Shipped work and active investigations, filed as they close.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <CaseFile key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
