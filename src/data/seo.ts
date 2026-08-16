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
    title: "Clínica Burgos | Oftalmología y Medicina Estética en Málaga",
    description:
      "Clínica Burgos en Málaga: clínica oftalmológica y de medicina estética en Alhaurín el Grande. Oftalmólogo, blefaroplastia, cataratas y rejuvenecimiento facial. Pide cita.",
    keywords:
      "Clínica Burgos Málaga, clínica oftalmológica Málaga, clínica medicina estética Málaga, blefaroplastia Málaga, oftalmólogo Alhaurín el Grande, medicina estética Alhaurín el Grande",
  },
  "/oftalmologia": {
    path: "/oftalmologia",
    title: "Clínica oftalmológica en Málaga | Clínica Burgos",
    description:
      "Clínica oftalmológica en Málaga. Oftalmólogo en Alhaurín el Grande: revisión, ojo seco, cataratas, glaucoma, retina y blefaroplastia. Clínica Burgos.",
    keywords:
      "clínica oftalmológica Málaga, oftalmólogo Málaga, Clínica Burgos Málaga, blefaroplastia Málaga, oftalmólogo Alhaurín el Grande, oculista Málaga",
  },
  "/medicina-estetica": {
    path: "/medicina-estetica",
    title: "Medicina estética en Málaga | Clínica Burgos",
    description:
      "Clínica de medicina estética en Málaga: ácido hialurónico, ojeras, labios y rejuvenecimiento facial en Alhaurín el Grande. Clínica Burgos.",
    keywords:
      "clínica medicina estética Málaga, medicina estética Málaga, Clínica Burgos Málaga, clínica estética Málaga, ácido hialurónico Málaga, rejuvenecimiento facial Málaga",
  },
  "/contacto": {
    path: "/contacto",
    title: "Contacto | Clínica Burgos Málaga",
    description:
      "Contacto de Clínica Burgos en Málaga: email info@clinicaburgos.net y consulta en Avenida Gerald Brenan 29, Alhaurín el Grande.",
    keywords:
      "Clínica Burgos Málaga, contacto Clínica Burgos, dirección Clínica Burgos Alhaurín el Grande, Avenida Gerald Brenan 29",
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
