import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { ADDRESS, EMAIL, PHONE_DISPLAY, PHONE_HREF } from "../data/content";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-bar">
        <div className="footer-brand">
          <Logo />
          <p>NICA: 69168</p>
        </div>

        <div className="footer-col">
          <h4>Ubicación</h4>
          <p>
            {ADDRESS.street}
            <br />
            {ADDRESS.city}, {ADDRESS.zip}
            <br />
            {ADDRESS.region}
          </p>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>

        <div className="footer-col">
          <h4>Legal</h4>
          <Link to="/aviso-legal">Aviso legal</Link>
          <Link to="/politica-de-privacidad">Política de privacidad</Link>
        </div>
      </div>
    </footer>
  );
}
