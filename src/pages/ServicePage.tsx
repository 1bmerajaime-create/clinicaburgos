import { Link } from "react-router-dom";
import type { ServicePage as ServicePageData } from "../data/servicePages";

export function ServicePageView({ page }: { page: ServicePageData }) {
  return (
    <main className="page">
      <section className="page-hero page-hero-sm">
        <div className="page-hero-media">
          <img src={page.image} alt={page.imageAlt} />
        </div>
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="eyebrow" style={{ color: "rgba(255,255,255,0.75)" }}>
            {page.eyebrow}
          </p>
          <h1 className="display">{page.h1}</h1>
          <p>{page.lead}</p>
        </div>
      </section>

      <section className="section section-compact">
        <div className="shell">
          <nav className="seo-breadcrumb" aria-label="Miga de pan">
            <Link to="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <Link to={page.parent}>{page.parentLabel}</Link>
            <span aria-hidden="true">/</span>
            <span>{page.h1}</span>
          </nav>
        </div>
      </section>

      <section className="section section-compact">
        <div className="shell split">
          <div className="panel-media panel-media-sm">
            <img src={page.image} alt={page.imageAlt} loading="eager" />
          </div>
          <div className="panel-copy">
            <h2 className="display h2">{page.sections[0]?.heading}</h2>
            <p className="body">{page.sections[0]?.body}</p>
            <Link className="btn btn-primary btn-sm" to="/contacto#cita">
              {page.ctaLabel ?? "Pedir cita"}
            </Link>
          </div>
        </div>
      </section>

      {page.sections.slice(1).map((section) => (
        <section key={section.heading} className="section section-cream">
          <div className="shell seo-prose">
            <h2 className="display h2">{section.heading}</h2>
            <p className="body">{section.body}</p>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="shell seo-prose">
          <h2 className="display h2">Reserva tu consulta</h2>
          <p className="body">
            Estamos en Avenida Gerald Brenan 29, Alhaurín el Grande (Málaga).
            Pide cita de oftalmología o medicina estética y te orientamos con
            claridad.
          </p>
          <div className="cta-row-actions" style={{ marginTop: "1rem" }}>
            <Link className="btn btn-primary btn-sm" to="/contacto#cita">
              Pedir cita
            </Link>
            <Link className="btn btn-outline btn-sm" to={page.parent}>
              Volver a {page.parentLabel}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
