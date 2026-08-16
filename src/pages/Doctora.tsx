import { useState } from "react";
import { Link } from "react-router-dom";
import { CitaButton } from "../components/CitaContext";

const doctorNotes = [
  {
    label: "Formación",
    title: "Hospital Clínico Universitario Virgen de la Victoria",
    body: "La Dra. Teresa García Burgos es especialista en Oftalmología, formada en el Hospital Clínico Universitario Virgen de la Victoria de Málaga, con especial interés en cirugía y patología periocular.",
  },
  {
    label: "Actividad hospitalaria",
    title: "Hospital Quirónsalud Málaga",
    body: "Actualmente ejerce como oftalmóloga en el Hospital Quirónsalud Málaga y compagina su actividad hospitalaria con la Medicina Estética y el cuidado de la mirada.",
  },
  {
    label: "Clínica Burgos",
    title: "Alhaurín el Grande, Málaga",
    body: "Es fundadora de Clínica Burgos, en Alhaurín el Grande, Málaga, un espacio que integra Oftalmología y Medicina Estética con especial atención a la salud ocular y la estética periocular.",
  },
  {
    label: "Filosofía",
    title: "Medicina rigurosa y personalizada",
    body: "Su filosofía combina una medicina rigurosa y personalizada, buscando resultados naturales y priorizando siempre la seguridad y el bienestar de cada paciente.",
  },
];

export function Doctora() {
  const [openNote, setOpenNote] = useState(0);
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
            <p className="doctor-quote">
              Resultados naturales, priorizando siempre la seguridad y el
              bienestar de cada paciente.
            </p>
            <div className="doctor-notes">
              {doctorNotes.map((note, index) => {
                const isOpen = openNote === index;
                return (
                  <article
                    key={note.label}
                    className={`doctor-note ${isOpen ? "is-open" : ""}`}
                  >
                    <button
                      type="button"
                      className="doctor-note-trigger"
                      aria-expanded={isOpen}
                      onClick={() => setOpenNote(isOpen ? -1 : index)}
                    >
                      <span className="doctor-note-label">{note.label}</span>
                      <span className="doctor-note-title display">
                        {note.title}
                      </span>
                      <span className="doctor-note-icon" aria-hidden="true">
                        {isOpen ? "–" : "+"}
                      </span>
                    </button>
                    <div className="doctor-note-panel" hidden={!isOpen}>
                      <p>{note.body}</p>
                    </div>
                  </article>
                );
              })}
            </div>
            <CitaButton className="btn btn-outline btn-sm">Pedir cita</CitaButton>
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
