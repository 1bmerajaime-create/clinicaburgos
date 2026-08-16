import { useState } from "react";
import { miradaTreatments, oftalmologiaTreatments } from "../data/content";
import { CitaButton } from "../components/CitaContext";

export function Oftalmologia() {
  const [open, setOpen] = useState<number | null>(null);
  const [openMirada, setOpenMirada] = useState<number | null>(null);

  return (
    <main className="page oft-page">
      <section className="page-hero page-hero-sm">
        <div className="page-hero-media">
          <img
            src="/images/generated/oftalmo-hero.jpg?v=6"
            alt="Oftalmología en Clínica Burgos, Alhaurín el Grande, Málaga"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <h1 className="display">Oftalmología</h1>
          <p>
            Cuidamos tu salud visual con precisión clínica, tecnología
            diagnóstica y un acompañamiento cercano en cada etapa.
          </p>
        </div>
      </section>

      <section className="section section-compact">
        <div className="shell split">
          <div className="panel-media tall">
            <img
              src="/images/oft-primera-consulta.jpg"
              alt="Primera consulta oftalmológica en Clínica Burgos, Alhaurín el Grande, Málaga"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="panel-copy">
            <h2 className="display h2">Primera consulta oftalmológica</h2>
            <p className="body">
              Valoramos tu caso de forma personalizada: antecedentes, síntomas
              y necesidades visuales. Te explicamos con claridad el
              diagnóstico y las opciones de tratamiento.
            </p>
            <CitaButton className="btn btn-primary btn-sm">Pedir cita</CitaButton>
          </div>
        </div>
      </section>

      <section className="section section-compact oft-pair-wrap">
        <div className="shell oft-pair">
          <figure>
            <img
              src="/images/dra-consulta.jpg"
              alt="Dra. Teresa García Burgos revisando un informe en consulta"
              loading="lazy"
              decoding="async"
            />
          </figure>
          <figure>
            <img
              src="/images/espacio.jpg"
              alt="Consulta de oftalmología en Clínica Burgos, Alhaurín el Grande, Málaga"
              loading="lazy"
              decoding="async"
            />
          </figure>
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
              frecuentes. Pulsa cada una para conocer más detalle.
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
                  </div>
                </article>
              );
            })}
          </div>

          <div style={{ marginTop: "1.5rem" }}>
            <CitaButton className="btn btn-primary btn-sm">Pedir cita</CitaButton>
          </div>
        </div>
      </section>

      <section className="section blefaro-home" id="blefaroplastia">
        <div className="shell split-xl">
          <div className="panel-copy">
            <p className="eyebrow">Estética de la mirada</p>
            <h2 className="display h2">Blefaroplastia</h2>
            <p className="body">
              Cirugía de párpados para rejuvenecer la mirada. En Clínica
              Burgos corregimos el exceso de piel y las bolsas, recuperando
              una expresión más descansada, abierta y natural.
            </p>
            <ul className="blefaro-list">
              <li>Párpado superior e inferior</li>
              <li>Valoración médica personalizada</li>
              <li>Resultado armónico y natural</li>
            </ul>
            <CitaButton className="btn btn-primary btn-sm">
              Solicitar valoración
            </CitaButton>
          </div>
          <figure className="panel-media tall blefaro-shot">
            <img
              src="/images/dra-cirugia.jpg"
              alt="Cirugía periocular y blefaroplastia en Clínica Burgos, Alhaurín el Grande, Málaga"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="section" id="mirada">
        <div className="shell">
          <div className="split-xl oft-mirada-intro">
            <div className="panel-media tall">
              <img
                src="/images/dra-estetica.jpg"
                alt="Cuidado de la mirada y medicina estética periocular en Clínica Burgos"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="panel-copy">
              <p className="eyebrow">Contorno ocular</p>
              <h2 className="display h2">Estética de la Mirada</h2>
              <p className="body">
                La mirada define tu rostro. Devolvemos frescura, corregimos lo
                que molesta y realzamos lo que ya está. Pulsa cada opción para
                más detalle.
              </p>
            </div>
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
            <CitaButton className="btn btn-primary btn-sm">
              Solicitar valoración
            </CitaButton>
          </div>
        </div>
      </section>
    </main>
  );
}
