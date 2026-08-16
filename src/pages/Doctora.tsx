import { Link } from "react-router-dom";
import { CitaButton } from "../components/CitaContext";

export function Doctora() {
  return (
    <main className="page doctor-page">
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
            Especialista en Oftalmología y fundadora de Clínica Burgos, en
            Alhaurín el Grande, Málaga.
          </p>
        </div>
      </section>

      <section className="section section-compact doctor-intro">
        <div className="shell split-xl">
          <div className="panel-media tall doctor-photo">
            <img
              src="/images/dra-teresa-garcia-burgos.jpg"
              alt="Dra. Teresa García Burgos, oftalmóloga y médica estética en Clínica Burgos, Alhaurín el Grande, Málaga"
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
              La Dra. Teresa García Burgos es especialista en Oftalmología,
              formada en el Hospital Clínico Universitario Virgen de la
              Victoria de Málaga, con especial interés en cirugía y patología
              periocular.
            </p>
            <p className="body">
              Actualmente ejerce como oftalmóloga en el Hospital Quirónsalud
              Málaga y compagina su actividad hospitalaria con la Medicina
              Estética y el cuidado de la mirada.
            </p>
            <p className="body">
              Es fundadora de Clínica Burgos, en Alhaurín el Grande, Málaga, un
              espacio que integra Oftalmología y Medicina Estética con especial
              atención a la salud ocular y la estética periocular.
            </p>
            <p className="body">
              Su filosofía combina una medicina rigurosa y personalizada,
              buscando resultados naturales y priorizando siempre la seguridad
              y el bienestar de cada paciente.
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
              Formación y práctica actual en dos centros de referencia de
              Málaga, junto a su consulta en Alhaurín el Grande.
            </p>
          </div>
          <div className="split doctor-track">
            <div>
              <p className="eyebrow">Formación</p>
              <h3 className="display h2">
                Hospital Clínico Universitario Virgen de la Victoria
              </h3>
              <p className="body">
                Especialista en Oftalmología formada en Málaga, con especial
                interés en cirugía y patología periocular.
              </p>
            </div>
            <div>
              <p className="eyebrow">Actividad hospitalaria</p>
              <h3 className="display h2">Hospital Quirónsalud Málaga</h3>
              <p className="body">
                Ejerce como oftalmóloga y compagina la actividad hospitalaria
                con la Medicina Estética y el cuidado de la mirada.
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
