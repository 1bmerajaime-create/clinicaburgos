import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "./Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className={`site-header ${scrolled || open ? "is-scrolled" : ""}`}>
        <div className="nav-inner">
          <Logo />

          <nav className="nav-links" aria-label="Principal">
            <NavLink to="/oftalmologia">Oftalmología</NavLink>
            <NavLink to="/medicina-estetica">Medicina Estética</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
            <Link to="/contacto#cita" className="btn btn-primary btn-sm">
              Pedir cita
            </Link>
          </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </button>
        </div>
      </header>

      <div className={`mobile-panel ${open ? "open" : ""}`}>
        <NavLink to="/oftalmologia" onClick={close}>
          Oftalmología
        </NavLink>
        <NavLink to="/medicina-estetica" onClick={close}>
          Medicina Estética
        </NavLink>
        <NavLink to="/contacto" onClick={close}>
          Contacto
        </NavLink>
        <Link to="/contacto#cita" className="btn btn-primary btn-sm" onClick={close}>
          Pedir cita
        </Link>
      </div>
    </>
  );
}
