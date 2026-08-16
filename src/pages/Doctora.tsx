import { Link } from "react-router-dom";
import { CitaButton } from "../components/CitaContext";

export function Doctora() {
  return (
    <main className="page">
      <section className="page-hero page-hero-sm">
        <div className="page-hero-media">
          <img
            src="/images/espacio.jpg"
            alt="Consulta de la Dra. Teresa García Burgos en Clínica Burgos, Alhaurín el Grande, Málaga"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="page-hero-overlay" />
        <div className="page-hero-content">
          <h1 className="display">Dra. Teresa García Burgos</h1>
          <p>
            Oftalmóloga y especialista en medicina estética. Dirige Clínica
            Burgos en Alhaurín el Grande, Málaga.
          </p>
        </div>
      </section>

      <section className="section section-compact">
        <div className="shell split-xl">
          <div className="panel-media panel-media-sm">
            <img
              src="/images/sala-espera.jpg"
              alt="Clínica Burgos, consulta de la Dra. Teresa García Burgos"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="panel-copy">
            <p className="eyebrow">Quiénes somos</p>
            <h2 className="display h2">
              Un criterio médico para tu mirada y tu rostro
            </h2>
            <p className="body">
              La Dra. Teresa García Burgos es oftalmóloga y médica estética. En
              Clínica Burgos, en Alhaurín el Grande, Málaga, une el rigor del
              diagnóstico ocular con un enfoque sereno del rostro y de la
              mirada.
            </p>
            <p className="body">
              Atiende cada caso de forma personalizada: desde la revisión
              oftalmológica hasta los tratamientos de medicina estética y la
              estética de la mirada, con el mismo criterio clínico.
            </p>
            <CitaButton className="btn btn-outline btn-sm">Pedir cita</CitaButton>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="shell">
          <div className="services-head-row">
            <div>
              <p className="eyebrow">Recorrido</p>
              <h2 className="display h2">Experiencia hospitalaria en Málaga</h2>
            </div>
            <p className="body services-head-lead">
              Su trayectoria se ha formado en dos centros de referencia de la
              ciudad, que sostienen su práctica actual en Alhaurín el Grande,
              Málaga.
            </p>
          </div>
          <div className="split doctor-track">
            <div>
              <p className="eyebrow">Hospital público</p>
              <h3 className="display h2">Hospital Clínico de Málaga</h3>
              <p className="body">
                Ha desarrollado parte de su recorrido en el Hospital Clínico de
                Málaga, un entorno hospitalario que refuerza su base en
                oftalmología y el diagnóstico visual.
              </p>
            </div>
            <div>
              <p className="eyebrow">Hospital privado</p>
              <h3 className="display h2">Hospital Quirón Málaga</h3>
              <p className="body">
                También ha ejercido en el Hospital Quirón Málaga, donde ha
                ampliado su práctica clínica en un entorno privado, con la
                misma exigencia de trato y de criterio médico.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="services-head-row">
            <div>
              <p className="eyebrow">Especialidades</p>
              <h2 className="display h2">Oftalmología y medicina estética</h2>
            </div>
            <p className="body services-head-lead">
              Dos áreas que se complementan en consulta: salud visual y
              tratamientos faciales con resultado natural.
            </p>
          </div>
          <div className="seo-link-grid">
            <Link className="seo-link-chip" to="/oftalmologia">
              Oftalmología
            </Link>
            <Link className="seo-link-chip" to="/medicina-estetica">
              Medicina Estética
            </Link>
            <Link className="seo-link-chip" to="/oftalmologia#blefaroplastia">
              Blefaroplastia
            </Link>
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <CitaButton className="btn btn-primary btn-sm">Pedir cita</CitaButton>
          </div>
        </div>
      </section>
    </main>
  );
}
