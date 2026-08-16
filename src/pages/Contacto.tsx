import { ADDRESS, EMAIL } from "../data/content";

const MAPS_HREF = `https://maps.google.com/?q=${encodeURIComponent(
  `${ADDRESS.street}, ${ADDRESS.zip} ${ADDRESS.city}, ${ADDRESS.region}`,
)}`;

export function Contacto() {
  return (
    <main className="page">
      <section className="section contact-page">
        <div className="shell">
          <h1 className="display contact-title">Contacto</h1>
          <p className="body contact-lead">
            Estamos en Alhaurín el Grande, Málaga. Escríbenos o visítanos; para
            reservar una consulta, usa Pedir cita.
          </p>

          <div className="split contact-layout">
            <div className="media-frame contact-visual">
              <img
                src="/images/cristal.jpg"
                alt="Detalle interior Clínica Burgos"
                loading="eager"
                decoding="async"
              />
            </div>
            <div className="contact-cards">
              <div className="contact-card">
                <p className="eyebrow">Email</p>
                <a className="display contact-mail" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </a>
                <a className="text-link" href={`mailto:${EMAIL}`}>
                  Escribir un correo
                </a>
              </div>
              <a
                className="contact-card"
                href={MAPS_HREF}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="eyebrow">Dirección</p>
                <h2 className="display">
                  {ADDRESS.street}
                  <span>
                    {ADDRESS.zip} {ADDRESS.city}
                  </span>
                  <span>{ADDRESS.region}</span>
                </h2>
                <span className="text-link">Ver en el mapa</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
