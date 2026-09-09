import { profile } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <p className="exhibit-label">EXHIBIT E</p>
        <h2 className="mt-2 font-headline text-2xl text-dossier-ink">
          Contact
        </h2>
        <p className="mt-3 max-w-md font-mono text-sm text-dossier-muted">
          Open to software engineering roles. Direct inquiries below.
        </p>

        <div className="perforation mt-8 space-y-4 pb-8">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-wider text-dossier-muted">
              Email
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="font-mono text-sm text-dossier-stamp hover:underline"
            >
              {profile.email}
            </a>
          </div>
          <div className="flex gap-8">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-dossier-muted">
                GitHub
              </p>
              <a
                href={profile.github}
                className="font-mono text-sm text-dossier-ink hover:text-dossier-stamp"
              >
                On file
              </a>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-wider text-dossier-muted">
                LinkedIn
              </p>
              <a
                href={profile.linkedin}
                className="font-mono text-sm text-dossier-ink hover:text-dossier-stamp"
              >
                On file
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="border-t-2 border-dossier-ink">
        <div className="mx-auto max-w-3xl px-6 py-6 font-mono text-xs text-dossier-muted">
          File closed {new Date().getFullYear()} — {profile.name}
        </div>
      </footer>
    </section>
  );
}
