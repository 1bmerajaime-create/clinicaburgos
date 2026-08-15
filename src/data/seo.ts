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
      "Clínica Burgos en Alhaurín el Grande (Málaga): oftalmólogo y medicina estética. Revisión oftalmológica, ojo seco, cataratas, glaucoma, ácido hialurónico y rejuvenecimiento facial. Pide cita.",
    keywords:
      "Clínica Burgos, oftalmólogo Alhaurín el Grande, oftalmología Alhaurín el Grande, clínica oftalmológica Alhaurín el Grande, medicina estética Alhaurín el Grande, clínica estética Alhaurín el Grande, médico estético Alhaurín el Grande",
  },
  "/oftalmologia": {
    path: "/oftalmologia",
    title: "Oftalmólogo en Alhaurín el Grande | Clínica Burgos",
    description:
      "Oftalmólogo en Alhaurín el Grande. Revisión oftalmológica, ojo seco, cataratas, glaucoma, retina, DMAE, miopía, presbicia y oftalmología infantil. Clínica Burgos, Valle del Guadalhorce.",
    keywords:
      "oftalmólogo Alhaurín el Grande, oftalmología Alhaurín el Grande, clínica oftalmológica Alhaurín el Grande, oculista Alhaurín el Grande, revisión oftalmológica Alhaurín el Grande, oftalmólogo Málaga",
  },
  "/medicina-estetica": {
    path: "/medicina-estetica",
    title: "Medicina Estética en Alhaurín el Grande | Clínica Burgos",
    description:
      "Medicina estética en Alhaurín el Grande: ácido hialurónico, labios, ojeras, armonización facial, rejuvenecimiento facial, mesoterapia y tratamiento de arrugas. Clínica Burgos.",
    keywords:
      "medicina estética Alhaurín el Grande, clínica estética Alhaurín el Grande, médico estético Alhaurín el Grande, tratamientos faciales Alhaurín el Grande, ácido hialurónico Alhaurín el Grande, rejuvenecimiento facial Alhaurín el Grande",
  },
  "/contacto": {
    path: "/contacto",
    title: "Pedir cita | Clínica Burgos Alhaurín el Grande",
    description:
      "Pide cita con el oftalmólogo o médico estético en Clínica Burgos. Av. Gerald Brenan 29, Alhaurín el Grande (Málaga). Teléfono 692 353 245.",
    keywords:
      "cita oftalmólogo Alhaurín el Grande, pedir cita medicina estética, cita oftalmología Alhaurín el Grande, Clínica Burgos contacto",
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
