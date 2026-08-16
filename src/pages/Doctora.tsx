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
              periocular. Actualmente ejerce como oftalmóloga en el Hospital
              Quirónsalud Málaga y compagina su actividad hospitalaria con la
              Medicina Estética y el cuidado de la mirada.
            </p>
            <p className="body">
              Es fundadora de Clínica Burgos, en Alhaurín el Grande, Málaga, un
              espacio que integra Oftalmología y Medicina Estética con especial
              atención a la salud ocular y la estética periocular. Su
              filosofía combina una medicina rigurosa y personalizada,
              buscando resultados naturales y priorizando siempre la seguridad
              y el bienestar de cada paciente.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-compact doctor-gallery">
        <div className="shell">
          <div className="doctor-gallery-grid">
            <figure>
              <img
                src="/images/dra-consulta.jpg"
                alt="Dra. Teresa García Burgos en consulta, revisando un informe clínico"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <figure>
              <img
                src="/images/dra-exploracion.jpg"
                alt="Exploración oftalmológica con lámpara de hendidura"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <figure>
              <img
                src="/images/dra-cirugia.jpg"
                alt="Cirugía oculoplástica y periocular"
                loading="lazy"
                decoding="async"
              />
            </figure>
            <figure>
              <img
                src="/images/dra-estetica.jpg"
                alt="Tratamiento de medicina estética facial"
                loading="lazy"
                decoding="async"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="section section-cream">
        <div className="shell">
          <p className="eyebrow">Especialidades</p>
          <h2 className="display h2">Oftalmología y medicina estética</h2>
          <p className="body">
            La Dra. García Burgos combina su especialización en Oftalmología,
            con especial interés en la región periocular y la cirugía
            oculoplástica, con su formación en Medicina Estética.
          </p>
          <p className="body">
            Esta visión integral es la esencia de Clínica Burgos: cuidar la
            salud visual y la mirada desde un enfoque médico, personalizado y
            natural, priorizando siempre la seguridad y el bienestar del
            paciente.
          </p>
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
