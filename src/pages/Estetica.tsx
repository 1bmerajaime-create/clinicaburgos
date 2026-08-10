import { useState } from "react";
import { Link } from "react-router-dom";
import { esteticaTreatments } from "../data/content";

const serviceLinks = [
  { to: "/medicina-estetica/acido-hialuronico", label: "Ácido hialurónico" },
  { to: "/medicina-estetica/labios", label: "Labios" },
  { to: "/medicina-estetica/ojeras", label: "Ojeras" },
  { to: "/medicina-estetica/armonizacion-facial", label: "Armonización facial" },
  { to: "/medicina-estetica/rejuvenecimiento-facial", label: "Rejuvenecimiento facial" },
  { to: "/medicina-estetica/bioestimulacion", label: "Bioestimulación" },
  { to: "/medicina-estetica/mesoterapia", label: "Mesoterapia" },
  { to: "/medicina-estetica/tratamiento-arrugas", label: "Tratamiento de arrugas" },
];

export function Estetica() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="page">
      <section className="page-hero page-hero-sm">
        <div className="page-hero-media">
          <img
            src="/images/generated/estetica-hero.jpg?v=6"
            alt="Medicina estética en Alhaurín el Grande — Clínica Burgos"
          />
        </div>
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <h1 className="display">Medicina Estética</h1>
          <p>
            Tratamientos faciales médicos para realzar tu belleza natural con
            resultados equilibrados y elegantes.
          </p>
        </div>
      </section>

      <section className="section section-compact">
        <div className="shell split-xl">
          <div className="panel-media panel-media-sm">
            <img
              src="/images/generated/estetica-persona.jpg"
              alt="Rejuvenecimiento facial natural en Clínica Burgos"
              loading="eager"
            />
          </div>
          <div className="panel-copy">
            <p className="eyebrow">Clínica Burgos</p>
            <h2 className="display h2">
              Tratamientos estéticos con criterio médico
            </h2>
            <p className="body">
              Un enfoque sereno en Alhaurín el Grande: armonización facial,
              ácido hialurónico, ojeras, labios y rejuvenecimiento facial sin
              cirugía, sin perder naturalidad.
            </p>
            <Link className="btn btn-outline btn-sm" to="/contacto#cita">
              Pedir cita
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="shell">
          <div className="services-head-row">
            <div>
              <p className="eyebrow">Guías de servicio</p>
              <h2 className="display h2">Tratamientos más buscados</h2>
            </div>
            <p className="body services-head-lead">
              Información sobre ácido hialurónico, arrugas, ojeras y
              rejuvenecimiento facial.
            </p>
          </div>
          <div className="seo-link-grid">
            {serviceLinks.map((item) => (
              <Link key={item.to} className="seo-link-chip" to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="tratamientos">
        <div className="shell">
          <div className="services-head-row">
            <div>
              <p className="eyebrow">Tratamientos</p>
              <h2 className="display h2">Medicina estética facial</h2>
            </div>
            <p className="body services-head-lead">
              Procedimientos seleccionados para luminosidad, firmeza y
              equilibrio. Pulsa cada uno para conocer más detalle.
            </p>
          </div>

          <div className="treatments-expand">
            {esteticaTreatments.map((item, index) => {
              const isOpen = open === index;
              return (
                <article
                  key={item.title}
                  className={`treatment-expand ${isOpen ? "is-open" : ""}`}
                >
                  <button
                    type="button"
                    className="treatment-expand-trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <div className="treatment-h-media">
                      <img src={item.image} alt="" loading="eager" />
                    </div>
                    <div className="treatment-expand-titles">
                      <h3 className="display">{item.title}</h3>
                      <p>{item.subtitle}</p>
                    </div>
                    <span className="treatment-expand-icon" aria-hidden="true">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>
                  <div className="treatment-expand-panel" hidden={!isOpen}>
                    <p>{item.body}</p>
                    {item.href ? (
                      <p style={{ marginTop: "0.85rem" }}>
                        <Link to={item.href}>Más información →</Link>
                      </p>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <Link className="btn btn-primary btn-sm" to="/contacto#cita">
              Pedir cita
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
