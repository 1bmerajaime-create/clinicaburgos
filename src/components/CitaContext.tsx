import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type CitaContextValue = {
  open: boolean;
  openCita: () => void;
  closeCita: () => void;
};

const CitaContext = createContext<CitaContextValue | null>(null);

export function CitaProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const openCita = useCallback(() => setOpen(true), []);
  const closeCita = useCallback(() => setOpen(false), []);
  const value = useMemo(
    () => ({ open, openCita, closeCita }),
    [open, openCita, closeCita],
  );

  return <CitaContext.Provider value={value}>{children}</CitaContext.Provider>;
}

export function useCita() {
  const ctx = useContext(CitaContext);
  if (!ctx) {
    throw new Error("useCita must be used within CitaProvider");
  }
  return ctx;
}

export function CitaButton({
  className,
  children = "Pedir cita",
}: {
  className?: string;
  children?: ReactNode;
}) {
  const { openCita } = useCita();
  return (
    <button type="button" className={className} onClick={openCita}>
      {children}
    </button>
  );
}
