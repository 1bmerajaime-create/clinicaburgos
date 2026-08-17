import { Link } from "react-router-dom";

export function Doctora() {
  return (
    <main className="page doctor-page">
      <section className="section doctor-intro">
        <div className="shell split-xl">
          <div className="panel-media tall doctor-photo">
            <img
              src="/images/dra-teresa-garcia-burgos.jpg"
              alt="Dra. Teresa García Burgos, oftalmóloga y médica estética en Clínica Burgos, Alhaurín el Grande, Málaga"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="panel-copy">
            <p className="eyebrow">Quiénes somos</p>
            <h1 className="display h2">Dra. Teresa García Burgos</h1>
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

      <section className="section section-cream">
        <div className="shell split-xl">
          <div className="panel-copy">
            <p className="eyebrow">Especialidades</p>
            <h2 className="display h2">Oftalmología</h2>
            <p className="body">
              Especialista en Oftalmología, con particular interés en la
              región periocular y la cirugía oculoplástica. Diagnóstico y
              tratamiento de la salud visual con criterio médico, de forma
              precisa y personalizada.
            </p>
            <div className="seo-link-grid">
              <Link className="seo-link-chip" to="/oftalmologia">
                Oftalmología
              </Link>
              <Link className="seo-link-chip" to="/oftalmologia#blefaroplastia">
                Blefaroplastia
              </Link>
            </div>
          </div>
          <div className="panel-media tall">
            <img
              src="/images/dra-cirugia.jpg"
              alt="Cirugía oculoplástica y periocular en Clínica Burgos"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell split-xl">
          <div className="panel-media tall">
            <img
              src="/images/dra-estetica.jpg?v=2"
              alt="Tratamiento de medicina estética facial en Clínica Burgos, Alhaurín el Grande, Málaga"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="panel-copy">
            <h2 className="display h2">Medicina Estética</h2>
            <p className="body">
              En Medicina Estética trabaja el rostro y el contorno ocular con
              un enfoque médico y natural: armonización facial, rejuvenecimiento
              y cuidado de la mirada, priorizando siempre la seguridad y el
              bienestar de cada paciente.
            </p>
            <div className="seo-link-grid">
              <Link className="seo-link-chip" to="/medicina-estetica">
                Medicina Estética
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
