import { useState } from "react";
import { Link } from "react-router-dom";
import { miradaTreatments, oftalmologiaTreatments } from "../data/content";

const serviceLinks = [
  { to: "/oftalmologia/revision-oftalmologica", label: "Revisión oftalmológica" },
  { to: "/oftalmologia/ojo-seco", label: "Ojo seco" },
  { to: "/oftalmologia/cataratas", label: "Cataratas" },
  { to: "/oftalmologia/glaucoma", label: "Glaucoma" },
  { to: "/oftalmologia/retina", label: "Retina" },
  { to: "/oftalmologia/dmae", label: "DMAE" },
  { to: "/oftalmologia/miopia", label: "Miopía y refracción" },
  { to: "/oftalmologia/presbicia", label: "Presbicia" },
  { to: "/oftalmologia/oftalmologia-infantil", label: "Oftalmología infantil" },
];

export function Oftalmologia() {
  const [open, setOpen] = useState<number | null>(0);
  const [openMirada, setOpenMirada] = useState<number | null>(0);

  return (
    <main className="page">
      <section className="page-hero page-hero-sm">
        <div className="page-hero-media">
          <img
            src="/images/generated/oftalmo-hero.jpg?v=5"
            alt="Oftalmólogo en Alhaurín el Grande — Clínica Burgos"
          />
        </div>
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <h1 className="display">Oftalmólogo en Alhaurín el Grande</h1>
          <p>
            Clínica oftalmológica en Alhaurín el Grande (Málaga): revisión de la
            vista, diagnóstico y tratamiento con precisión clínica y
            acompañamiento cercano.
          </p>
        </div>
      </section>

      <section className="section section-compact">
        <div className="shell split">
          <div className="panel-media panel-media-sm">
            <img
              src="/images/espacio.jpg"
              alt="Consulta de oftalmología Clínica Burgos Alhaurín el Grande"
              loading="eager"
            />
          </div>
          <div className="panel-copy">
            <h2 className="display h2">Primera consulta oftalmológica</h2>
            <p className="body">
              Si buscas un oftalmólogo en Alhaurín el Grande o una clínica de
              ojos cercana en el Valle del Guadalhorce, en Clínica Burgos
              valoramos tu caso de forma personalizada: antecedentes, síntomas y
              necesidades visuales. Te explicamos con claridad el diagnóstico y
              las opciones de tratamiento.
            </p>
            <Link className="btn btn-primary btn-sm" to="/contacto#cita">
              Pedir cita oftalmólogo
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="shell">
          <div className="services-head-row">
            <div>
              <p className="eyebrow">Guías de servicio</p>
              <h2 className="display h2">Especialidades más buscadas</h2>
            </div>
            <p className="body services-head-lead">
              Información detallada sobre revisión oftalmológica, patologías y
              tratamientos en Alhaurín el Grande y Málaga.
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

      <section className="section" id="especialidades">
        <div className="shell">
          <div className="services-head-row">
            <div>
              <p className="eyebrow">Áreas de atención</p>
              <h2 className="display h2">Especialidades en oftalmología</h2>
            </div>
            <p className="body services-head-lead">
              Diagnóstico y tratamiento de las patologías oculares más
              frecuentes: ojo seco, cataratas, glaucoma, retina, DMAE, miopía,
              presbicia y más. Pulsa cada una para conocer detalle.
            </p>
          </div>

          <div className="treatments-expand">
            {oftalmologiaTreatments.map((item, index) => {
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
                      <img src={item.image} alt="" loading="lazy" />
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

      <section className="section blefaro-home" id="blefaroplastia">
        <div className="shell split-xl">
          <div className="panel-copy">
            <p className="eyebrow">Estética de la mirada</p>
            <h2 className="display h2">Blefaroplastia</h2>
            <p className="body">
              Cirugía de párpados para rejuvenecer la mirada: corrige el exceso
              de piel y las bolsas, recuperando una expresión más descansada,
              abierta y natural.
            </p>
            <ul className="blefaro-list">
              <li>Párpado superior e inferior</li>
              <li>Valoración médica personalizada</li>
              <li>Resultado armónico y natural</li>
            </ul>
            <Link className="btn btn-primary btn-sm" to="/contacto#cita">
              Solicitar valoración
            </Link>
          </div>
          <figure className="panel-media tall blefaro-shot">
            <img
              src="/images/generated/blefaroplastia.jpg?v=4"
              alt="Blefaroplastia en Clínica Burgos Alhaurín el Grande"
              loading="eager"
            />
            <figcaption>Blefaroplastia</figcaption>
          </figure>
        </div>
      </section>

      <section className="section" id="mirada">
        <div className="shell">
          <div className="services-head-row">
            <div>
              <p className="eyebrow">Contorno ocular</p>
              <h2 className="display h2">Estética de la Mirada</h2>
            </div>
            <p className="body services-head-lead">
              La mirada define tu rostro. En Clínica Burgos devolvemos frescura,
              corregimos lo que molesta y realzamos lo que ya está. Cirugía de
              párpados, tratamiento de ojeras y soluciones para cada caso.
            </p>
          </div>

          <div className="treatments-expand">
            {miradaTreatments.map((item, index) => {
              const isOpen = openMirada === index;
              return (
                <article
                  key={item.title}
                  className={`treatment-expand ${isOpen ? "is-open" : ""}`}
                >
                  <button
                    type="button"
                    className="treatment-expand-trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpenMirada(isOpen ? null : index)}
                  >
                    <div className="treatment-h-media">
                      <img src={item.image} alt="" loading="lazy" />
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
              Solicitar valoración
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="shell seo-prose">
          <h2 className="display h2">Oftalmólogo cerca de Alhaurín el Grande</h2>
          <p className="body">
            Atendemos a pacientes de Alhaurín el Grande, Coín, Cártama, Alhaurín
            de la Torre, Mijas, Fuengirola y el resto del Valle del Guadalhorce
            y la Costa del Sol que buscan un oftalmólogo privado o una clínica
            oftalmológica cercana.
          </p>
        </div>
      </section>
    </main>
  );
}
