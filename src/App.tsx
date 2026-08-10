import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AccessGate } from "./components/AccessGate";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Oftalmologia } from "./pages/Oftalmologia";
import { Estetica } from "./pages/Estetica";
import { Contacto } from "./pages/Contacto";
import { ServicePageView } from "./pages/ServicePage";
import { servicePages } from "./data/servicePages";

export default function App() {
  return (
    <AccessGate>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="oftalmologia" element={<Oftalmologia />} />
            <Route path="medicina-estetica" element={<Estetica />} />
            <Route path="estetica" element={<Navigate to="/medicina-estetica" replace />} />
            <Route path="contacto" element={<Contacto />} />
            {servicePages.map((page) => (
              <Route
                key={page.path}
                path={page.path.replace(/^\//, "")}
                element={<ServicePageView page={page} />}
              />
            ))}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AccessGate>
  );
}
