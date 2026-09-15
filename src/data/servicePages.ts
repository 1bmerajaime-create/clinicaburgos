export type ServicePage = {
  path: string;
  parent: "/oftalmologia" | "/medicina-estetica";
  parentLabel: string;
  h1: string;
  title: string;
  description: string;
  keywords: string;
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
    h1: "Rellenos Dérmicos en Alhaurín el Grande",
    title: "Rellenos dérmicos en Alhaurín el Grande, Málaga | Clínica Burgos",
    description:
      "Rellenos dérmicos con ácido hialurónico en Alhaurín el Grande y Málaga: labios, pómulos, ojeras y surcos. Resultados naturales. Clínica Burgos.",
    keywords:
      "rellenos dérmicos Alhaurín el Grande, ácido hialurónico Málaga, relleno ácido hialurónico, rellenos faciales, clínica ácido hialurónico Málaga",
    lead: "Los rellenos dérmicos con ácido hialurónico restauran volumen y armonía facial con resultados inmediatos y naturales. Tratamiento en Clínica Burgos, Alhaurín el Grande, Málaga.",
    image: "/images/generated/rellenos.jpg?v=3",
    imageAlt: "Rellenos dérmicos con ácido hialurónico en Clínica Burgos",
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
        body: "Si buscas dónde hacerse ácido hialurónico cerca de Alhaurín el Grande, Málaga, Coín o Cártama, reserva tu valoración en Clínica Burgos.",
      },
    ],
  },
  {
    path: "/medicina-estetica/labios",
    parent: "/medicina-estetica",
    parentLabel: "Medicina Estética",
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
        body: "Tratamiento de labios en Alhaurín el Grande, Málaga, para pacientes del Valle del Guadalhorce y Costa del Sol.",
      },
    ],
  },
  {
    path: "/medicina-estetica/ojeras",
    parent: "/medicina-estetica",
    parentLabel: "Medicina Estética",
    h1: "Tratamiento de ojeras en Alhaurín el Grande",
    title: "Tratamiento de ojeras en Alhaurín el Grande, Málaga | Clínica Burgos",
    description:
      "Tratamiento de ojeras con ácido hialurónico en Alhaurín el Grande y Málaga. Reduce ojeras y rejuvenece la mirada. Clínica Burgos.",
    keywords:
      "tratamiento ojeras Alhaurín el Grande, tratamiento ojeras Málaga, ácido hialurónico ojeras, eliminar ojeras, rejuvenecimiento mirada",
    lead: "En Clínica Burgos, en Alhaurín el Grande, Málaga, valoramos el tipo de ojera —vasculada o pigmentada— y el surco, para indicar el tratamiento más adecuado a cada caso.",
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
        body: "Tratamiento de ojeras en Alhaurín el Grande, Málaga, con fácil acceso desde Coín, Cártama, Alhaurín de la Torre y Mijas.",
      },
    ],
  },
  {
    path: "/medicina-estetica/armonizacion-facial",
    parent: "/medicina-estetica",
    parentLabel: "Medicina Estética",
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
        body: "Armonización facial en Clínica Burgos, Alhaurín el Grande, Málaga, para pacientes del Valle del Guadalhorce.",
      },
    ],
  },
  {
    path: "/medicina-estetica/rejuvenecimiento-facial",
    parent: "/medicina-estetica",
    parentLabel: "Medicina Estética",
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
    h1: "Inductores de Colágeno en Alhaurín el Grande",
    title: "Inductores de colágeno en Alhaurín el Grande, Málaga | Clínica Burgos",
    description:
      "Inductores de colágeno y bioestimulación facial en Alhaurín el Grande y Málaga. Mejora firmeza y regeneración de la piel. Clínica Burgos.",
    keywords:
      "inductores de colágeno Alhaurín el Grande, bioestimulación facial Málaga, bioestimulación colágeno, regeneración facial, tratamiento bioestimulación",
    lead: "Los inductores de colágeno estimulan la regeneración natural de la piel. Bioestimulación facial en Alhaurín el Grande, Málaga, para mejorar firmeza y contorno.",
    image: "/images/generated/colageno.jpg?v=2",
    imageAlt: "Inductores de colágeno en Clínica Burgos",
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
        body: "Inductores de colágeno en Clínica Burgos, con atención a pacientes de Alhaurín el Grande, Málaga, Coín y Cártama.",
      },
    ],
  },
  {
    path: "/medicina-estetica/mesoterapia",
    parent: "/medicina-estetica",
    parentLabel: "Medicina Estética",
    h1: "Mesoterapia en Alhaurín el Grande",
    title: "Mesoterapia en Alhaurín el Grande, Málaga | Clínica Burgos",
    description:
      "Mesoterapia facial y vitaminas faciales en Alhaurín el Grande y Málaga. Hidratación profunda, luminosidad y revitalización. Clínica Burgos.",
    keywords:
      "mesoterapia facial Málaga, vitaminas faciales, hidratación facial profunda, revitalización facial, mesoterapia facial Alhaurín",
    lead: "La mesoterapia hidrata en profundidad y revitaliza la piel con vitaminas, aminoácidos y ácido hialurónico.",
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
        body: "Mesoterapia en Clínica Burgos, Alhaurín el Grande, Málaga, para quienes buscan tratamientos estéticos cercanos en el Valle del Guadalhorce.",
      },
    ],
  },
  {
    path: "/medicina-estetica/tratamiento-arrugas",
    parent: "/medicina-estetica",
    parentLabel: "Medicina Estética",
    h1: "Neuromoduladores en Alhaurín el Grande",
    title: "Neuromoduladores en Alhaurín el Grande, Málaga | Clínica Burgos",
    description:
      "Neuromoduladores para arrugas, patas de gallo, entrecejo y frente en Alhaurín el Grande y Málaga. Rejuvenecimiento sin cirugía. Clínica Burgos.",
    keywords:
      "neuromoduladores Alhaurín el Grande, tratamiento arrugas Málaga, patas de gallo, entrecejo, líneas de expresión, neuromoduladores",
    lead: "Suavizamos arrugas de expresión en frente, entrecejo y patas de gallo manteniendo un gesto natural y descansado.",
    image: "/images/generated/toxina.jpg",
    imageAlt: "Tratamiento con neuromoduladores en Clínica Burgos",
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
        body: "Neuromoduladores en Alhaurín el Grande, Málaga, con pacientes de Mijas, Fuengirola y el Valle del Guadalhorce.",
      },
    ],
  },
  {
    path: "/medicina-estetica/ipl",
    parent: "/medicina-estetica",
    parentLabel: "Medicina Estética",
    h1: "IPL en Alhaurín el Grande",
    title: "IPL en Alhaurín el Grande, Málaga | Clínica Burgos",
    description:
      "Tratamiento IPL (luz pulsada intensa) en Alhaurín el Grande y Málaga. Unifica el tono, reduce manchas y rojeces. Clínica Burgos.",
    keywords:
      "IPL Alhaurín el Grande, IPL Málaga, luz pulsada intensa, tratamiento manchas solares, rojeces faciales, fotorejuvenecimiento",
    lead: "La luz pulsada intensa (IPL) unifica el tono, reduce manchas solares y rojeces, y mejora la luminosidad general del rostro.",
    image: "/images/generated/ipl.jpg?v=2",
    imageAlt: "Tratamiento IPL en Clínica Burgos",
    sections: [
      {
        heading: "Para qué sirve",
        body: "Manchas solares, enrojecimiento, tono irregular y falta de luminosidad. Ideal como fotorejuvenecimiento sin cirugía.",
      },
      {
        heading: "Resultado progresivo",
        body: "La piel gana uniformidad y brillo de forma gradual. El número de sesiones se adapta a tu fototipo y objetivo.",
      },
      {
        heading: "Cita en Alhaurín el Grande",
        body: "Tratamiento IPL en Clínica Burgos, Alhaurín el Grande, Málaga, con acceso fácil desde Coín, Cártama y el Valle del Guadalhorce.",
      },
    ],
  },
  {
    path: "/medicina-estetica/resurfacing",
    parent: "/medicina-estetica",
    parentLabel: "Medicina Estética",
    h1: "Resurfacing en Alhaurín el Grande",
    title: "Resurfacing en Alhaurín el Grande, Málaga | Clínica Burgos",
    description:
      "Resurfacing facial en Alhaurín el Grande y Málaga. Renovación cutánea para textura, poros y marcas superficiales. Clínica Burgos.",
    keywords:
      "resurfacing Alhaurín el Grande, resurfacing facial Málaga, renovación cutánea, calidad de piel, textura facial, poros",
    lead: "Los tratamientos de resurfacing renuevan la piel para refinar textura, poros y marcas superficiales, con un resultado más uniforme y luminoso.",
    image: "/images/generated/resurfacing.jpg?v=2",
    imageAlt: "Resurfacing facial en Clínica Burgos",
    sections: [
      {
        heading: "Qué mejora",
        body: "Textura irregular, poros visibles, marcas superficiales y falta de suavidad. Recuperamos una piel más uniforme y luminosa.",
      },
      {
        heading: "Enfoque personalizado",
        body: "Valoramos tu tipo de piel y el tiempo de recuperación disponible para indicar la intensidad adecuada.",
      },
      {
        heading: "Medicina estética local",
        body: "Resurfacing en Clínica Burgos, Alhaurín el Grande, Málaga, para pacientes del Valle del Guadalhorce y Costa del Sol.",
      },
    ],
  },
];

export function getServicePage(path: string) {
  const clean = path.replace(/\/$/, "") || "/";
  return servicePages.find((p) => p.path === clean);
}
