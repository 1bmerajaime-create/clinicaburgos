import { Link } from "react-router-dom";
import type { ServicePage as ServicePageData } from "../data/servicePages";
import { CitaButton } from "../components/CitaContext";

function shortTitle(h1: string) {
  return h1.replace(/\s+en Alhaurín el Grande$/i, "");
}

export function ServicePageView({ page }: { page: ServicePageData }) {
  const name = shortTitle(page.h1);

  return (
    <main className="page">
      <section className="page-hero page-hero-title">
        <div className="page-hero-media">
          <img src={page.image} alt={page.imageAlt} fetchPriority="high" decoding="async" />
        </div>
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <p className="eyebrow" style={{ color: "rgba(255,255,255,0.78)" }}>
            {page.eyebrow}
          </p>
          <h1 className="display">{name}</h1>
        </div>
      </section>

      <section className="section service-detail">
        <div className="shell">
          <nav className="seo-breadcrumb" aria-label="Miga de pan">
            <Link to="/">Inicio</Link>
            <span aria-hidden="true">/</span>
            <Link to={page.parent}>{page.parentLabel}</Link>
            <span aria-hidden="true">/</span>
            <span>{name}</span>
          </nav>
          <div className="split">
            <div className="panel-media panel-media-sm">
              <img src={page.image} alt={page.imageAlt} loading="lazy" decoding="async" />
            </div>
            <div className="panel-copy">
              <p className="eyebrow">{page.eyebrow}</p>
              <p className="body">{page.lead}</p>
              {page.sections[0]?.body ? (
                <p className="body">{page.sections[0].body}</p>
              ) : null}
              <CitaButton className="btn btn-primary btn-sm">
                {page.ctaLabel ?? "Pedir cita"}
              </CitaButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
