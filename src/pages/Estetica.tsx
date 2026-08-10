import { useState } from "react";
import { Link } from "react-router-dom";
import { esteticaTreatments } from "../data/content";

export function Estetica() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="page">
      <section className="page-hero page-hero-sm">
        <div className="page-hero-media">
          <img
            src="/images/generated/estetica-hero.jpg?v=6"
            alt="Doctora realizando tratamiento de medicina estética"
          />
        </div>
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <h1 className="display">Medicina Estética</h1>
          <p>
            Tratamientos faciales médicos orientados a realzar tu belleza natural
            con resultados equilibrados y elegantes.
          </p>
        </div>
      </section>

      <section className="section section-compact">
        <div className="shell split-xl">
          <div className="panel-media panel-media-sm">
            <img
              src="/images/generated/estetica-persona.jpg"
              alt="Belleza natural"
              loading="eager"
            />
          </div>
          <div className="panel-copy">
            <p className="eyebrow">Clínica Burgos</p>
            <h2 className="display h2">Realzamos tu belleza natural</h2>
            <p className="body">
              Un enfoque médico sereno, con tratamientos pensados para armonizar
              tu expresión sin perder naturalidad.
            </p>
            <Link className="btn btn-outline btn-sm" to="/contacto#cita">
              Pedir cita
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-cream" id="tratamientos">
        <div className="shell">
          <div className="services-head-row">
            <div>
              <p className="eyebrow">Tratamientos</p>
              <h2 className="display h2">Medicina estética facial</h2>
            </div>
            <p className="body services-head-lead">
              Procedimientos seleccionados para luminosidad, firmeza y equilibrio.
              Pulsa cada uno para conocer más detalle.
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
