import { about } from "@/lib/content";

export default function About() {
  const paragraphs = about.split("\n\n");

  return (
    <section id="about" className="perforation">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="exhibit-label">EXHIBIT A</p>
        <h2 className="mt-2 font-headline text-2xl text-dossier-ink">
          Background
        </h2>
        <div className="mt-6 max-w-xl space-y-4 font-mono text-sm leading-relaxed text-dossier-ink sm:text-base">
          {paragraphs.map((p, i) => (
            <p key={i}>{p.replace(/\n/g, " ")}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
