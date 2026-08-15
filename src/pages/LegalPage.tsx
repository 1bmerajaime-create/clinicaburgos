import { Link } from "react-router-dom";
import type { LegalPageData } from "../data/legal";

export function LegalPageView({ page }: { page: LegalPageData }) {
  return (
    <main className="page">
      <section className="section service-detail legal-page">
        <div className="shell">
          <nav className="seo-breadcrumb" aria-label="Miga de pan">
            <Link to="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <span>{page.h1}</span>
          </nav>
          <p className="eyebrow">Información legal</p>
          <h1 className="display h2">{page.h1}</h1>
          <p className="body legal-updated">
            Última actualización: {page.updated}
          </p>
          <div className="legal-prose">
            {page.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
