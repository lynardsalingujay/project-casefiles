import { skills } from "@/lib/content";

const groups: {
  key: keyof typeof skills;
  stampLabel: string;
  note: string;
}[] = [
  {
    key: "stable",
    stampLabel: "VERIFIED",
    note: "Confirmed through direct field experience.",
  },
  {
    key: "beta",
    stampLabel: "IN REVIEW",
    note: "Active use, assessment ongoing.",
  },
  {
    key: "experimental",
    stampLabel: "TRAINING",
    note: "Under active development.",
  },
  {
    key: "tools",
    stampLabel: "STANDARD ISSUE",
    note: "Daily equipment.",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="perforation bg-dossier-panel">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="exhibit-label">EXHIBIT B</p>
        <h2 className="mt-2 font-headline text-2xl text-dossier-ink">
          Skills Assessment
        </h2>
        <div className="mt-8 space-y-8">
          {groups.map((group) => (
            <div key={group.key}>
              <div className="flex flex-wrap items-center gap-3">
                <span className="stamp text-dossier-stamp">
                  {group.stampLabel}
                </span>
                <span className="font-mono text-xs text-dossier-muted">
                  {group.note}
                </span>
              </div>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                {skills[group.key].map((item) => (
                  <li
                    key={item}
                    className="font-mono text-sm text-dossier-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
