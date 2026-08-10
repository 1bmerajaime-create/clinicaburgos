import { useState, type FormEvent, type ReactNode } from "react";

const STORAGE_KEY = "cb-access-ok";
const ACCESS_PASSWORD = "teremoto";

function isUnlocked() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

export function AccessGate({ children }: { children: ReactNode }) {
  const [ok, setOk] = useState(isUnlocked);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (password.trim() === ACCESS_PASSWORD) {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        /* ignore */
      }
      setOk(true);
      setError(false);
      return;
    }
    setError(true);
  }

  if (ok) return children;

  return (
    <div className="access-gate">
      <div className="access-gate-card">
        <p className="eyebrow">Clínica Burgos</p>
        <h1 className="display">Acceso privado</h1>
        <p className="body">
          Introduce la contraseña para continuar.
        </p>
        <form className="access-gate-form" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="access-password">
            Contraseña
          </label>
          <input
            id="access-password"
            type="password"
            autoComplete="current-password"
            autoFocus
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              if (error) setError(false);
            }}
            placeholder="Contraseña"
          />
          {error && (
            <p className="access-gate-error" role="alert">
              Contraseña incorrecta
            </p>
          )}
          <button className="btn btn-primary btn-sm" type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
