import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_HREF } from "../data/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-bar">
        <div className="footer-brand">
          <Logo />
          <p>Oftalmología y medicina estética.</p>
        </div>

        <div className="footer-col">
          <h4>Ubicación</h4>
          <p>
            {ADDRESS.street}
            <br />
            {ADDRESS.city}, {ADDRESS.zip}
          </p>
        </div>

        <div className="footer-col">
          <h4>Especialidades</h4>
          <Link to="/oftalmologia">Oftalmología</Link>
          <Link to="/estetica">Medicina Estética</Link>
          <Link to="/oftalmologia#mirada">Estética de la Mirada</Link>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </div>

      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Clínica Burgos</span>
        <span>
          {ADDRESS.city} · {ADDRESS.region}
        </span>
      </div>
    </footer>
  );
}
