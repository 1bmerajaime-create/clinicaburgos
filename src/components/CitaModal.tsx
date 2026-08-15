import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { EMAIL, PHONE_DISPLAY, PHONE_HREF } from "../data/content";
import { useCita } from "./CitaContext";

export function CitaModal() {
  const { open, closeCita } = useCita();
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">(
    "idle",
  );

  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = dialogRef.current?.querySelector<HTMLElement>(
      "input, select, textarea, button",
    );
    first?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCita();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, closeCita]);

  useEffect(() => {
    if (!open) setStatus("idle");
  }, [open]);

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

  if (!open) return null;

  return (
    <div className="cita-modal-root">
      <button
        type="button"
        className="cita-modal-backdrop"
        aria-label="Cerrar"
        onClick={closeCita}
      />
      <div
        className="cita-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={dialogRef}
      >
        <div className="cita-modal-head">
          <p className="eyebrow">Reserva</p>
          <h2 className="display h2" id={titleId}>
            Pedir cita
          </h2>
          <button
            type="button"
            className="cita-modal-close"
            onClick={closeCita}
            aria-label="Cerrar formulario"
          >
            ×
          </button>
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
              <label htmlFor="cita-nombre">Nombre (obligatorio)</label>
              <input
                id="cita-nombre"
                name="nombre"
                required
                autoComplete="given-name"
              />
            </div>
            <div className="field-line">
              <label htmlFor="cita-apellido">Apellido (obligatorio)</label>
              <input
                id="cita-apellido"
                name="apellido"
                required
                autoComplete="family-name"
              />
            </div>
          </div>
          <div className="field-line">
            <label htmlFor="cita-email">Correo electrónico (obligatorio)</label>
            <input
              id="cita-email"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
          </div>
          <div className="field-line">
            <label htmlFor="cita-telefono">Teléfono</label>
            <input
              id="cita-telefono"
              name="telefono"
              type="tel"
              autoComplete="tel"
            />
          </div>
          <div className="field-line">
            <label htmlFor="cita-interes">Interés</label>
            <select id="cita-interes" name="interes" defaultValue="Blefaroplastia">
              <option>Blefaroplastia</option>
              <option>Oftalmología</option>
              <option>Medicina Estética</option>
              <option>Estética de la Mirada</option>
              <option>Consulta general</option>
            </select>
          </div>
          <div className="field-line">
            <label htmlFor="cita-mensaje">Mensaje (obligatorio)</label>
            <textarea id="cita-mensaje" name="mensaje" required rows={4} />
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
    </div>
  );
}
