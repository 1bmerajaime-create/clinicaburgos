export type ServicePage = {
  path: string;
  parent: "/oftalmologia" | "/medicina-estetica";
  parentLabel: string;
  h1: string;
  title: string;
  description: string;
  keywords: string;
  eyebrow: string;
  lead: string;
  sections: { heading: string; body: string }[];
  ctaLabel?: string;
  image: string;
  imageAlt: string;
};

export const servicePages: ServicePage[] = [
  {
    path: "/medicina-estetica/acido-hialuronico",
    parent: "/medicina-estetica",
    parentLabel: "Medicina Estética",
    eyebrow: "Rellenos dérmicos",
    h1: "Ácido hialurónico en Alhaurín el Grande",
    title: "Ácido hialurónico en Alhaurín el Grande, Málaga | Clínica Burgos",
    description:
      "Tratamiento con ácido hialurónico en Alhaurín el Grande y Málaga: rellenos faciales, labios, pómulos, ojeras y surcos. Resultados naturales. Clínica Burgos.",
    keywords:
      "ácido hialurónico Alhaurín el Grande, ácido hialurónico Málaga, relleno ácido hialurónico, rellenos faciales, clínica ácido hialurónico Málaga",
    lead: "El ácido hialurónico restaura volumen y armonía facial con resultados inmediatos y naturales. Tratamiento en Clínica Burgos, Alhaurín el Grande.",
    image: "/images/generated/rellenos.jpg?v=3",
    imageAlt: "Tratamiento de ácido hialurónico en Clínica Burgos",
    sections: [
      {
        heading: "¿Para qué sirve?",
        body: "Labios, ojeras, pómulos, mentón, mandíbula, surcos nasogenianos y remodelación facial suave. Cada plan se adapta a tu anatomía.",
      },
      {
        heading: "Resultados naturales",
        body: "Priorizamos proporciones equilibradas y expresión natural. Te explicamos duración aproximada, cuidados y qué esperar antes y después.",
      },
      {
        heading: "Clínica en Alhaurín el Grande",
        body: "Si buscas dónde hacerse ácido hialurónico en Málaga o cerca de Alhaurín el Grande, Coín o Cártama, reserva tu valoración en Clínica Burgos.",
      },
    ],
  },
  {
    path: "/medicina-estetica/labios",
    parent: "/medicina-estetica",
    parentLabel: "Medicina Estética",
    eyebrow: "Perfilado e hidratación",
    h1: "Relleno y perfilado de labios en Alhaurín el Grande",
    title: "Relleno de labios en Alhaurín el Grande, Málaga | Clínica Burgos",
    description:
      "Aumento, perfilado e hidratación de labios con ácido hialurónico en Alhaurín el Grande y Málaga. Resultado natural. Clínica Burgos.",
    keywords:
      "relleno labios Alhaurín el Grande, aumento labios Málaga, perfilado labios, ácido hialurónico labios, hidratación de labios",
    lead: "Perfilamos, hidratamos o aumentamos los labios con ácido hialurónico en Alhaurín el Grande, Málaga, buscando un resultado armónico y natural.",
    image: "/images/generated/rellenos.jpg?v=3",
    imageAlt: "Perfilado de labios con ácido hialurónico",
    sections: [
      {
        heading: "Opciones de tratamiento",
        body: "Hidratación, perfilado del borde, proyección suave o corrección de asimetrías. Definimos el objetivo contigo antes de tratar.",
      },
      {
        heading: "Enfoque natural",
        body: "Evitamos volúmenes exagerados. El objetivo es labios bien definidos, proporcionados y coherentes con tu rostro.",
      },
      {
        heading: "Cita cerca de ti",
        body: "Tratamiento de labios en Alhaurín el Grande para pacientes de Málaga, Valle del Guadalhorce y Costa del Sol.",
      },
    ],
  },
  {
    path: "/medicina-estetica/ojeras",
    parent: "/medicina-estetica",
    parentLabel: "Medicina Estética",
    eyebrow: "Rejuvenecimiento de la mirada",
    h1: "Tratamiento de ojeras en Alhaurín el Grande",
    title: "Tratamiento de ojeras en Alhaurín el Grande, Málaga | Clínica Burgos",
    description:
      "Tratamiento de ojeras con ácido hialurónico en Alhaurín el Grande y Málaga. Reduce ojeras y rejuvenece la mirada. Clínica Burgos.",
    keywords:
      "tratamiento ojeras Alhaurín el Grande, tratamiento ojeras Málaga, ácido hialurónico ojeras, eliminar ojeras, rejuvenecimiento mirada",
    lead: "En Clínica Burgos, en Alhaurín el Grande, valoramos el tipo de ojera —vasculada o pigmentada— y el surco, para indicar el tratamiento más adecuado a cada caso.",
    image: "/images/generated/estetica-mirada-card.jpg?v=1",
    imageAlt: "Tratamiento de ojeras en Clínica Burgos",
    sections: [
      {
        heading: "Cómo tratamos las ojeras",
        body: "Trabajamos tratamientos no quirúrgicos, como rellenos de ácido hialurónico para atenuar el surco y la sombra, y opciones quirúrgicas cuando el caso lo requiere. El objetivo es una mirada más descansada, sin perder naturalidad.",
      },
      {
        heading: "Mirada descansada",
        body: "Buscamos un resultado sutil: menos cansancio, sin cambiar tu expresión. Ideal si buscas rejuvenecimiento de la mirada sin cirugía.",
      },
      {
        heading: "Medicina estética local",
        body: "Tratamiento de ojeras en Alhaurín el Grande, con fácil acceso desde Coín, Cártama, Alhaurín de la Torre y Mijas.",
      },
    ],
  },
  {
    path: "/medicina-estetica/armonizacion-facial",
    parent: "/medicina-estetica",
    parentLabel: "Medicina Estética",
    eyebrow: "Equilibrio facial",
    h1: "Armonización facial en Alhaurín el Grande",
    title: "Armonización facial en Alhaurín el Grande, Málaga | Clínica Burgos",
    description:
      "Armonización facial en Alhaurín el Grande y Málaga: perfilado, pómulos, mentón y mandíbula con enfoque natural. Clínica Burgos.",
    keywords:
      "armonización facial Alhaurín el Grande, armonización facial Málaga, perfilado facial, remodelación facial, medicina estética facial",
    lead: "La armonización facial equilibra proporciones de pómulos, mentón, mandíbula y labios para un resultado coherente y natural.",
    image: "/images/generated/estetica-persona.jpg",
    imageAlt: "Armonización facial en Clínica Burgos",
    sections: [
      {
        heading: "Qué incluye",
        body: "Estudio de tu perfil y tercios faciales. Podemos combinar ácido hialurónico en zonas clave para definir, proyectar o suavizar sin sobrecargar.",
      },
      {
        heading: "Sin perder naturalidad",
        body: "El objetivo no es cambiar tu cara, sino equilibrarla. Trabajamos con criterio médico y estética serena.",
      },
      {
        heading: "Clínica estética Alhaurín",
        body: "Armonización facial en Clínica Burgos, Alhaurín el Grande, para pacientes de Málaga y el Valle del Guadalhorce.",
      },
    ],
  },
  {
    path: "/medicina-estetica/rejuvenecimiento-facial",
    parent: "/medicina-estetica",
    parentLabel: "Medicina Estética",
    eyebrow: "Antiedad natural",
    h1: "Rejuvenecimiento facial en Alhaurín el Grande",
    title: "Rejuvenecimiento facial en Alhaurín el Grande, Málaga | Clínica Burgos",
    description:
      "Rejuvenecimiento facial sin cirugía en Alhaurín el Grande y Málaga: arrugas, calidad de piel, luminosidad y firmeza. Clínica Burgos.",
    keywords:
      "rejuvenecimiento facial Alhaurín el Grande, rejuvenecimiento facial Málaga, rejuvenecimiento facial sin cirugía, tratamiento antiedad, medicina antienvejecimiento",
    lead: "Combinamos tratamientos médicos para rejuvenecer el rostro de forma natural: expresión, volumen y calidad de la piel.",
    image: "/images/generated/estetica-hero.jpg?v=7",
    imageAlt: "Rejuvenecimiento facial en Clínica Burgos",
    sections: [
      {
        heading: "Enfoque integral",
        body: "Neuromoduladores para líneas de expresión, ácido hialurónico para volúmenes, mesoterapia o inductores para luminosidad y firmeza, e IPL o resurfacing según la piel.",
      },
      {
        heading: "Resultados progresivos y naturales",
        body: "Priorizamos un aspecto descansado y armónico, no artificial. El plan se adapta a tu edad, piel y objetivos.",
      },
      {
        heading: "Cerca de Alhaurín el Grande",
        body: "Si buscas rejuvenecimiento facial natural en Málaga o tratamientos para rejuvenecer el rostro cerca de ti, pide cita en Clínica Burgos.",
      },
    ],
  },
  {
    path: "/medicina-estetica/bioestimulacion",
    parent: "/medicina-estetica",
    parentLabel: "Medicina Estética",
    eyebrow: "Colágeno y firmeza",
    h1: "Bioestimulación facial en Alhaurín el Grande",
    title: "Bioestimulación facial en Alhaurín el Grande, Málaga | Clínica Burgos",
    description:
      "Bioestimulación facial y de colágeno en Alhaurín el Grande y Málaga. Mejora firmeza y regeneración de la piel. Clínica Burgos.",
    keywords:
      "bioestimulación facial Málaga, bioestimulación colágeno, inductores de colágeno, regeneración facial, tratamiento bioestimulación",
    lead: "Los inductores de colágeno estimulan la regeneración natural de la piel. Bioestimulación facial en Alhaurín el Grande, Málaga, para mejorar firmeza y contorno.",
    image: "/images/generated/colageno.jpg?v=2",
    imageAlt: "Bioestimulación facial en Clínica Burgos",
    sections: [
      {
        heading: "Para quién",
        body: "Ideal si notas flacidez suave, pérdida de definición o quieres mejorar la calidad de la piel.",
      },
      {
        heading: "Cómo actúa",
        body: "Estimulan la producción de colágeno propio. El efecto es gradual y sostenido, con aspecto natural.",
      },
      {
        heading: "Medicina estética en Alhaurín",
        body: "Bioestimulación facial en Clínica Burgos, con atención a pacientes de Alhaurín el Grande, Coín, Cártama y Málaga.",
      },
    ],
  },
  {
    path: "/medicina-estetica/mesoterapia",
    parent: "/medicina-estetica",
    parentLabel: "Medicina Estética",
    eyebrow: "Hidratación y luminosidad",
    h1: "Mesoterapia facial en Alhaurín el Grande",
    title: "Mesoterapia facial en Alhaurín el Grande, Málaga | Clínica Burgos",
    description:
      "Mesoterapia facial y vitaminas faciales en Alhaurín el Grande y Málaga. Hidratación profunda, luminosidad y revitalización. Clínica Burgos.",
    keywords:
      "mesoterapia facial Málaga, vitaminas faciales, hidratación facial profunda, revitalización facial, mesoterapia facial Alhaurín",
    lead: "La mesoterapia facial hidrata en profundidad y revitaliza la piel con vitaminas, aminoácidos y ácido hialurónico.",
    image: "/images/generated/mesoterapia.jpg?v=2",
    imageAlt: "Mesoterapia facial en Clínica Burgos",
    sections: [
      {
        heading: "Beneficios",
        body: "Más luminosidad, mejor textura, hidratación y aspecto saludable. Útil como tratamiento de mantenimiento o complemento de otros procedimientos.",
      },
      {
        heading: "Calidad de la piel",
        body: "Ayuda a mejorar poros, opacidad y fatiga cutánea cuando el objetivo es revitalizar sin cambiar volúmenes.",
      },
      {
        heading: "Cita en Alhaurín el Grande",
        body: "Mesoterapia facial en Clínica Burgos para quienes buscan tratamientos estéticos cercanos en el Valle del Guadalhorce.",
      },
    ],
  },
  {
    path: "/medicina-estetica/tratamiento-arrugas",
    parent: "/medicina-estetica",
    parentLabel: "Medicina Estética",
    eyebrow: "Líneas de expresión",
    h1: "Tratamiento de arrugas en Alhaurín el Grande",
    title: "Tratamiento de arrugas en Alhaurín el Grande, Málaga | Clínica Burgos",
    description:
      "Tratamiento de arrugas, patas de gallo, entrecejo y frente en Alhaurín el Grande y Málaga. Neuromoduladores y rejuvenecimiento sin cirugía. Clínica Burgos.",
    keywords:
      "tratamiento arrugas Alhaurín el Grande, tratamiento arrugas Málaga, patas de gallo, entrecejo, líneas de expresión, neuromoduladores",
    lead: "Suavizamos arrugas de expresión en frente, entrecejo y patas de gallo manteniendo un gesto natural y descansado.",
    image: "/images/generated/toxina.jpg",
    imageAlt: "Tratamiento de arrugas con neuromoduladores",
    sections: [
      {
        heading: "Qué tratamos",
        body: "Líneas de expresión dinámicas: frente, entrecejo y patas de gallo. También valoramos surcos y arrugas estáticas que puedan beneficiarse de rellenos u otros tratamientos.",
      },
      {
        heading: "Resultado natural",
        body: "Buscamos una expresión relajada, no congelada. Ideal si quieres rejuvenecimiento facial sin cirugía.",
      },
      {
        heading: "Médico estético cerca de ti",
        body: "Tratamiento de arrugas en Alhaurín el Grande, con pacientes de Málaga, Mijas, Fuengirola y el Valle del Guadalhorce.",
      },
    ],
  },
];

export function getServicePage(path: string) {
  const clean = path.replace(/\/$/, "") || "/";
  return servicePages.find((p) => p.path === clean);
}
