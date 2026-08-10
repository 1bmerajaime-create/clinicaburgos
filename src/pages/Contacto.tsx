import { useState, type FormEvent } from "react";
import {
  ADDRESS,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "../data/content";

export function Contacto() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle",
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.append("_subject", "Nueva solicitud de cita — Clínica Burgos");
    data.append("_template", "table");
    data.append("_captcha", "false");

    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("send-failed");
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="page">
      <section className="section contact-page" id="cita">
        <div className="shell contact-split">
          <div className="contact-copy">
            <h1 className="display">Pedir cita en Clínica Burgos</h1>
            <p className="body">
              Reserva tu consulta de oftalmología o medicina estética en Alhaurín
              el Grande. Escríbenos, llámanos o completa el formulario: te
              responderemos lo antes posible.
            </p>

            <div className="contact-mini">
              <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <span>
                {ADDRESS.street}, {ADDRESS.city} ({ADDRESS.region}) {ADDRESS.zip}
              </span>
            </div>

            {status === "ok" && (
              <div className="form-success" role="status">
                Gracias. Hemos recibido tu solicitud y te contactaremos pronto.
              </div>
            )}
            {status === "error" && (
              <div className="form-error" role="alert">
                No hemos podido enviar el formulario. Llámanos al{" "}
                <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>.
              </div>
            )}

            <form className="line-form" onSubmit={handleSubmit}>
              <div className="line-form-grid">
                <div className="field-line">
                  <label htmlFor="nombre">Nombre (obligatorio)</label>
                  <input id="nombre" name="nombre" required autoComplete="given-name" />
                </div>
                <div className="field-line">
                  <label htmlFor="apellido">Apellido (obligatorio)</label>
                  <input id="apellido" name="apellido" required autoComplete="family-name" />
                </div>
              </div>
              <div className="field-line">
                <label htmlFor="email">Correo electrónico (obligatorio)</label>
                <input id="email" name="email" type="email" required autoComplete="email" />
              </div>
              <div className="field-line">
                <label htmlFor="telefono">Teléfono</label>
                <input id="telefono" name="telefono" type="tel" autoComplete="tel" />
              </div>
              <div className="field-line">
                <label htmlFor="interes">Interés</label>
                <select id="interes" name="interes" defaultValue="Blefaroplastia">
                  <option>Blefaroplastia</option>
                  <option>Oftalmología</option>
                  <option>Medicina Estética</option>
                  <option>Estética de la Mirada</option>
                  <option>Consulta general</option>
                </select>
              </div>
              <div className="field-line">
                <label htmlFor="mensaje">Mensaje (obligatorio)</label>
                <textarea id="mensaje" name="mensaje" required rows={4} />
              </div>
              <button
                className="btn btn-primary btn-sm"
                type="submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Enviando…" : "Enviar"}
              </button>
            </form>
          </div>

          <div className="media-frame contact-visual">
            <img
              src="/images/cristal.jpg"
              alt="Detalle interior Clínica Burgos"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
