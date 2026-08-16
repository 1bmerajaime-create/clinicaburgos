export const SITE_URL = "https://clinicaburgos.net";
export const SITE_NAME = "Clínica Burgos";

export type SeoConfig = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
};

export const seoByPath: Record<string, SeoConfig> = {
  "/": {
    path: "/",
    title:
      "Clínica Burgos | Oftalmología y Medicina Estética en Alhaurín el Grande",
    description:
      "Clínica Burgos en Alhaurín el Grande (Málaga): oftalmólogo y medicina estética. Revisión oftalmológica, blefaroplastia, cataratas y rejuvenecimiento facial. Pide cita.",
    keywords:
      "Clínica Burgos Alhaurín el Grande, oftalmólogo Alhaurín el Grande, clínica oftalmológica Alhaurín el Grande, medicina estética Alhaurín el Grande, Clínica Burgos Málaga, blefaroplastia Málaga",
  },
  "/oftalmologia": {
    path: "/oftalmologia",
    title: "Oftalmólogo en Alhaurín el Grande | Clínica Burgos",
    description:
      "Oftalmólogo en Alhaurín el Grande, Málaga. Revisión oftalmológica, ojo seco, cataratas, glaucoma, retina y blefaroplastia. Clínica Burgos.",
    keywords:
      "oftalmólogo Alhaurín el Grande, clínica oftalmológica Alhaurín el Grande, oftalmólogo Málaga, clínica oftalmológica Málaga, blefaroplastia Alhaurín el Grande",
  },
  "/medicina-estetica": {
    path: "/medicina-estetica",
    title: "Medicina Estética en Alhaurín el Grande | Clínica Burgos",
    description:
      "Medicina estética en Alhaurín el Grande, Málaga: ácido hialurónico, ojeras, labios y rejuvenecimiento facial. Clínica Burgos.",
    keywords:
      "medicina estética Alhaurín el Grande, clínica estética Alhaurín el Grande, medicina estética Málaga, ácido hialurónico Alhaurín el Grande, rejuvenecimiento facial Alhaurín el Grande",
  },
  "/la-doctora": {
    path: "/la-doctora",
    title: "Dra. Teresa García Burgos | Clínica Burgos Alhaurín el Grande",
    description:
      "Dra. Teresa García Burgos, oftalmóloga y médica estética. Recorrido en el Hospital Clínico de Málaga y el Hospital Quirón Málaga. Clínica Burgos, Alhaurín el Grande.",
    keywords:
      "Dra. Teresa García Burgos, oftalmóloga Alhaurín el Grande, médica estética Alhaurín el Grande, Hospital Clínico Málaga, Hospital Quirón Málaga, Clínica Burgos",
  },
  "/contacto": {
    path: "/contacto",
    title: "Contacto | Clínica Burgos Alhaurín el Grande",
    description:
      "Contacto de Clínica Burgos: email info@clinicaburgos.net y consulta en Avenida Gerald Brenan 29, Alhaurín el Grande (Málaga).",
    keywords:
      "Clínica Burgos contacto, dirección Clínica Burgos Alhaurín el Grande, Clínica Burgos Málaga, Avenida Gerald Brenan 29",
  },
  "/aviso-legal": {
    path: "/aviso-legal",
    title: "Aviso legal | Clínica Burgos",
    description:
      "Aviso legal de Clínica Burgos. Información del titular, condiciones de uso y responsabilidad del sitio web clinicaburgos.net.",
  },
  "/politica-de-privacidad": {
    path: "/politica-de-privacidad",
    title: "Política de privacidad | Clínica Burgos",
    description:
      "Política de privacidad de Clínica Burgos. Información sobre el tratamiento de datos personales conforme al RGPD y la LOPDGDD.",
  },
};

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
