import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Oftalmologia } from "./pages/Oftalmologia";
import { Estetica } from "./pages/Estetica";
import { Doctora } from "./pages/Doctora";
import { Contacto } from "./pages/Contacto";
import { ServicePageView } from "./pages/ServicePage";
import { LegalPageView } from "./pages/LegalPage";
import { servicePages } from "./data/servicePages";
import { legalPages } from "./data/legal";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="oftalmologia" element={<Oftalmologia />} />
          <Route
            path="oftalmologia/:slug"
            element={<Navigate to="/oftalmologia" replace />}
          />
          <Route path="medicina-estetica" element={<Estetica />} />
          <Route path="estetica" element={<Navigate to="/medicina-estetica" replace />} />
          <Route path="quienes-somos" element={<Doctora />} />
          <Route path="la-doctora" element={<Navigate to="/quienes-somos" replace />} />
          <Route
            path="dra-teresa-garcia-burgos"
            element={<Navigate to="/quienes-somos" replace />}
          />
          <Route path="contacto" element={<Contacto />} />
          {servicePages.map((page) => (
            <Route
              key={page.path}
              path={page.path.replace(/^\//, "")}
              element={<ServicePageView page={page} />}
            />
          ))}
          {legalPages.map((page) => (
            <Route
              key={page.path}
              path={page.path.replace(/^\//, "")}
              element={<LegalPageView page={page} />}
            />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
