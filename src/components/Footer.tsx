import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_HREF } from "../data/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-bar">
        <div className="footer-brand">
          <Logo />
          <p>
            Oftalmología y medicina estética en Alhaurín el Grande, Málaga.
          </p>
        </div>

        <div className="footer-col">
          <h4>Ubicación</h4>
          <p>
            {ADDRESS.street}
            <br />
            {ADDRESS.city}, {ADDRESS.zip}
            <br />
            {ADDRESS.region} · Valle del Guadalhorce
          </p>
        </div>

        <div className="footer-col">
          <h4>Especialidades</h4>
          <Link to="/oftalmologia">Oftalmólogo Alhaurín el Grande</Link>
          <Link to="/medicina-estetica">Medicina estética Alhaurín</Link>
          <Link to="/oftalmologia#mirada">Estética de la Mirada</Link>
          <Link to="/oftalmologia/ojo-seco">Ojo seco</Link>
          <Link to="/medicina-estetica/acido-hialuronico">Ácido hialurónico</Link>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <Link to="/contacto#cita">Pedir cita</Link>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Clínica Burgos</span>
        <span>
          {ADDRESS.city} · {ADDRESS.region} · Costa del Sol
        </span>
      </div>
    </footer>
  );
}
