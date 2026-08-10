import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AccessGate } from "./components/AccessGate";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Oftalmologia } from "./pages/Oftalmologia";
import { Estetica } from "./pages/Estetica";
import { Contacto } from "./pages/Contacto";

export default function App() {
  return (
    <AccessGate>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="oftalmologia" element={<Oftalmologia />} />
            <Route path="estetica" element={<Estetica />} />
            <Route path="contacto" element={<Contacto />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AccessGate>
  );
}
