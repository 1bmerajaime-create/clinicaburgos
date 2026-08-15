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
    path: "/oftalmologia/revision-oftalmologica",
    parent: "/oftalmologia",
    parentLabel: "Oftalmología",
    eyebrow: "Diagnóstico",
    h1: "Revisión oftalmológica en Alhaurín el Grande",
    title: "Revisión oftalmológica en Alhaurín el Grande | Clínica Burgos",
    description:
      "Revisión oftalmológica y examen ocular en Clínica Burgos, Alhaurín el Grande. Graduación de la vista, fondo de ojo y control de presión ocular. Pide cita con tu oftalmólogo.",
    keywords:
      "revisión oftalmológica Alhaurín el Grande, revisión ocular, examen ocular, consulta oftalmólogo, graduación de la vista, presión ocular",
    lead: "Una revisión oftalmológica completa permite detectar a tiempo problemas de visión, ojo seco, glaucoma, cataratas o alteraciones de retina.",
    image: "/images/espacio.jpg",
    imageAlt: "Consulta oftalmológica en Clínica Burgos Alhaurín el Grande",
    sections: [
      {
        heading: "¿En qué consiste la consulta?",
        body: "Valoramos antecedentes, síntomas y necesidades visuales. Realizamos refracción (graduación de la vista), exploración del segmento anterior, fondo de ojo y, cuando procede, medición de la presión ocular o tensión ocular.",
      },
      {
        heading: "¿Cuándo hacer una revisión de la vista?",
        body: "Si notas visión borrosa, fatiga visual, moscas volantes, dolor o enrojecimiento, o si hace más de un año de tu última revisión. También en niños, diabéticos y personas con antecedentes familiares de glaucoma o DMAE.",
      },
      {
        heading: "Oftalmólogo en el Valle del Guadalhorce",
        body: "Atendemos en Alhaurín el Grande a pacientes de Coín, Cártama, Alhaurín de la Torre, Mijas y el resto de la provincia de Málaga que buscan un oftalmólogo privado cercano.",
      },
    ],
  },
  {
    path: "/oftalmologia/ojo-seco",
    parent: "/oftalmologia",
    parentLabel: "Oftalmología",
    eyebrow: "Superficie ocular",
    h1: "Tratamiento de ojo seco en Alhaurín el Grande",
    title: "Ojo seco en Alhaurín el Grande | Clínica Burgos",
    description:
      "Especialista en ojo seco en Alhaurín el Grande y Málaga. Diagnóstico y tratamiento del síndrome de ojo seco: escozor, arenilla y fatiga ocular. Clínica Burgos.",
    keywords:
      "ojo seco Alhaurín el Grande, tratamiento ojo seco, especialista ojo seco Málaga, síndrome ojo seco, ojos secos",
    lead: "El ojo seco causa escozor, arenilla, visión fluctuante y fatiga. Diagnosticamos la causa y diseñamos un tratamiento personalizado.",
    image: "/images/generated/oft-ojoseco.jpg",
    imageAlt: "Tratamiento de ojo seco en Clínica Burgos",
    sections: [
      {
        heading: "Síntomas frecuentes",
        body: "Sequedad, picor, enrojecimiento, sensibilidad a la luz, visión borrosa intermitente o sensación de cuerpo extraño. También puede aparecer lagrimeo paradoxal.",
      },
      {
        heading: "Diagnóstico y tratamiento",
        body: "Estudiamos la calidad de la lágrima, los párpados y factores ambientales o farmacológicos. El tratamiento puede incluir lubricantes, higiene palpebral, antiinflamatorios o terapias específicas según el tipo de ojo seco.",
      },
      {
        heading: "Especialista cerca de ti",
        body: "Si buscas tratamiento para ojos secos en Alhaurín el Grande, Coín, Cártama o Málaga, en Clínica Burgos te ofrecemos una valoración oftalmológica cercana y rigurosa.",
      },
    ],
  },
  {
    path: "/oftalmologia/cataratas",
    parent: "/oftalmologia",
    parentLabel: "Oftalmología",
    eyebrow: "Cirugía del cristalino",
    h1: "Cataratas en Alhaurín el Grande",
    title: "Cataratas en Alhaurín el Grande | Clínica Burgos",
    description:
      "Especialista en cataratas en Alhaurín el Grande y Málaga. Diagnóstico, valoración y orientación sobre operación de cataratas. Oftalmólogo en Clínica Burgos.",
    keywords:
      "cataratas Alhaurín el Grande, especialista cataratas Málaga, operación cataratas, cirugía cataratas, oftalmólogo cataratas",
    lead: "Las cataratas provocan visión borrosa, deslumbramiento y pérdida progresiva de nitidez. Te acompañamos en el diagnóstico y la decisión quirúrgica.",
    image: "/images/generated/oft-cataratas.jpg",
    imageAlt: "Diagnóstico de cataratas en Clínica Burgos",
    sections: [
      {
        heading: "¿Cómo saber si tengo cataratas?",
        body: "Visión nublada, colores apagados, halos nocturnos, necesidad de más luz para leer o cambios frecuentes de graduación. Una exploración oftalmológica lo confirma.",
      },
      {
        heading: "Tratamiento",
        body: "Cuando la catarata limita tu calidad de vida, la cirugía del cristalino es el tratamiento definitivo. Valoramos el momento adecuado y te explicamos el proceso con claridad.",
      },
      {
        heading: "Atención en Málaga provincia",
        body: "Pacientes de Alhaurín el Grande, Valle del Guadalhorce y Costa del Sol acuden a Clínica Burgos para valoración de cataratas con un oftalmólogo de referencia local.",
      },
    ],
  },
  {
    path: "/oftalmologia/glaucoma",
    parent: "/oftalmologia",
    parentLabel: "Oftalmología",
    eyebrow: "Nervio óptico",
    h1: "Glaucoma en Alhaurín el Grande",
    title: "Glaucoma en Alhaurín el Grande | Clínica Burgos",
    description:
      "Especialista en glaucoma en Alhaurín el Grande y Málaga. Revisión de presión ocular, diagnóstico precoz y tratamiento del glaucoma. Clínica Burgos.",
    keywords:
      "glaucoma Alhaurín el Grande, especialista glaucoma Málaga, tratamiento glaucoma, presión ocular glaucoma, oftalmólogo glaucoma",
    lead: "El glaucoma puede dañar el nervio óptico de forma silenciosa. El control de la presión ocular y el diagnóstico precoz son esenciales.",
    image: "/images/generated/oft-glaucoma.jpg",
    imageAlt: "Revisión de glaucoma y presión ocular",
    sections: [
      {
        heading: "Primeros signos",
        body: "A menudo no hay síntomas iniciales. En fases avanzadas puede aparecer pérdida de campo visual. Por eso las revisiones periódicas son tan importantes, especialmente a partir de los 40 años o con antecedentes familiares.",
      },
      {
        heading: "Diagnóstico y seguimiento",
        body: "Medimos la tensión ocular, evaluamos el nervio óptico y, si es preciso, realizamos pruebas de campo visual. El tratamiento puede incluir gotas, láser o cirugía según el caso.",
      },
      {
        heading: "Oftalmólogo glaucoma cerca de ti",
        body: "Si buscas especialista en glaucoma en Alhaurín el Grande o Málaga, reserva tu revisión en Clínica Burgos.",
      },
    ],
  },
  {
    path: "/oftalmologia/retina",
    parent: "/oftalmologia",
    parentLabel: "Oftalmología",
    eyebrow: "Fondo de ojo",
    h1: "Especialista en retina en Alhaurín el Grande",
    title: "Retina en Alhaurín el Grande | Clínica Burgos",
    description:
      "Oftalmólogo especialista en retina en Alhaurín el Grande y Málaga. Revisión de retina, desprendimiento, retinopatía diabética y moscas volantes. Clínica Burgos.",
    keywords:
      "especialista retina Alhaurín el Grande, oftalmólogo retina Málaga, problemas retina, desprendimiento retina, revisión retina",
    lead: "La retina es clave para una visión nítida. Valoramos moscas volantes, destellos, manchas o pérdida súbita de visión con exploración de fondo de ojo.",
    image: "/images/generated/oft-desprendimiento.jpg",
    imageAlt: "Exploración de retina en Clínica Burgos",
    sections: [
      {
        heading: "Problemas frecuentes de retina",
        body: "Desprendimiento de vítreo, moscas volantes (miodesopsias), desprendimiento de retina, retinopatía diabética o trombosis retiniana. Algunos requieren atención urgente.",
      },
      {
        heading: "Cuándo consultar",
        body: "Ante sombra en el campo visual, destellos, aumento brusco de moscas volantes o pérdida de visión, solicita valoración oftalmológica sin demora.",
      },
      {
        heading: "Atención local",
        body: "Clínica Burgos ofrece revisión de retina en Alhaurín el Grande para pacientes del Valle del Guadalhorce y alrededores de Málaga.",
      },
    ],
  },
  {
    path: "/oftalmologia/dmae",
    parent: "/oftalmologia",
    parentLabel: "Oftalmología",
    eyebrow: "Visión central",
    h1: "DMAE y degeneración macular en Alhaurín el Grande",
    title: "DMAE en Alhaurín el Grande | Clínica Burgos",
    description:
      "Especialista en DMAE y degeneración macular asociada a la edad en Alhaurín el Grande y Málaga. Diagnóstico precoz y seguimiento. Clínica Burgos.",
    keywords:
      "DMAE Málaga, degeneración macular, especialista DMAE, tratamiento DMAE, degeneración macular asociada a la edad",
    lead: "La DMAE afecta la mácula y puede reducir la visión central. La detección precoz permite preservar visión el mayor tiempo posible.",
    image: "/images/generated/oft-dmae.jpg",
    imageAlt: "Valoración de DMAE en Clínica Burgos",
    sections: [
      {
        heading: "Síntomas de alerta",
        body: "Visión central borrosa, líneas torcidas, dificultad para leer o reconocer caras, o una mancha fija en el centro del campo visual.",
      },
      {
        heading: "Diagnóstico",
        body: "Exploración de fondo de ojo y, cuando está indicado, pruebas de imagen de retina. Te explicamos el tipo de DMAE y el plan de seguimiento.",
      },
      {
        heading: "Especialista DMAE Málaga",
        body: "Si buscas valoración de degeneración macular cerca de Alhaurín el Grande o en la provincia de Málaga, pide cita en Clínica Burgos.",
      },
    ],
  },
  {
    path: "/oftalmologia/miopia",
    parent: "/oftalmologia",
    parentLabel: "Oftalmología",
    eyebrow: "Defectos refractivos",
    h1: "Miopía, hipermetropía y astigmatismo en Alhaurín el Grande",
    title: "Miopía y defectos refractivos | Clínica Burgos Alhaurín",
    description:
      "Revisión y tratamiento de miopía, hipermetropía y astigmatismo en Alhaurín el Grande. Oftalmólogo para graduación de la vista. Clínica Burgos.",
    keywords:
      "miopía Alhaurín el Grande, astigmatismo Alhaurín el Grande, hipermetropía Málaga, oftalmólogo miopía, defectos refractivos",
    lead: "Los defectos refractivos impiden ver nítido de lejos o de cerca. Realizamos una refracción completa y orientamos la mejor corrección.",
    image: "/images/generated/oft-refractivos.jpg",
    imageAlt: "Revisión de miopía y graduación de la vista",
    sections: [
      {
        heading: "Miopía, hipermetropía y astigmatismo",
        body: "La miopía dificulta la visión de lejos; la hipermetropía, la de cerca o el esfuerzo visual; el astigmatismo deforma la imagen. Pueden combinarse entre sí.",
      },
      {
        heading: "Qué ofrecemos",
        body: "Graduación precisa, consejo sobre gafas o lentes de contacto y seguimiento, especialmente en niños y jóvenes con miopía en progresión.",
      },
      {
        heading: "Consulta en Alhaurín el Grande",
        body: "Si buscas oftalmólogo para miopía o astigmatismo en Alhaurín el Grande o municipios cercanos, reserva tu revisión en Clínica Burgos.",
      },
    ],
  },
  {
    path: "/oftalmologia/presbicia",
    parent: "/oftalmologia",
    parentLabel: "Oftalmología",
    eyebrow: "Vista cansada",
    h1: "Presbicia o vista cansada en Alhaurín el Grande",
    title: "Presbicia (vista cansada) en Alhaurín el Grande | Clínica Burgos",
    description:
      "Tratamiento de presbicia y vista cansada en Alhaurín el Grande y Málaga. Oftalmólogo para visión de cerca a partir de los 40–45 años. Clínica Burgos.",
    keywords:
      "presbicia Alhaurín el Grande, vista cansada, tratamiento presbicia Málaga, oftalmólogo presbicia, visión de cerca",
    lead: "La presbicia o vista cansada dificulta enfocar de cerca a partir de los 40–45 años. Estudiamos tus hábitos y proponemos la solución más adecuada.",
    image: "/images/generated/oft-presbicia.jpg",
    imageAlt: "Consulta de presbicia o vista cansada",
    sections: [
      {
        heading: "Síntomas",
        body: "Alejar el móvil o el libro, fatiga al leer, necesidad de más luz o dolor de cabeza tras trabajo de cerca.",
      },
      {
        heading: "Opciones de tratamiento",
        body: "Gafas monofocales o progresivas, lentes de contacto y, en casos seleccionados, alternativas quirúrgicas. Te explicamos pros y contras de cada opción.",
      },
      {
        heading: "Oftalmólogo cerca de ti",
        body: "Atendemos presbicia en Alhaurín el Grande para pacientes del Valle del Guadalhorce y Málaga que buscan una consulta clara y cercana.",
      },
    ],
  },
  {
    path: "/oftalmologia/oftalmologia-infantil",
    parent: "/oftalmologia",
    parentLabel: "Oftalmología",
    eyebrow: "Salud visual infantil",
    h1: "Oftalmología infantil en Alhaurín el Grande",
    title: "Oftalmólogo infantil en Alhaurín el Grande | Clínica Burgos",
    description:
      "Oftalmólogo infantil y revisión de la vista en niños en Alhaurín el Grande. Detección precoz de problemas de visión. Clínica Burgos.",
    keywords:
      "oftalmología infantil Alhaurín el Grande, oftalmólogo infantil Málaga, oculista infantil, revisión vista niños, oftalmólogo niños",
    lead: "Una revisión ocular a tiempo en la infancia previene problemas de aprendizaje y desarrollo visual. Atendemos a niños con cercanía y rigor.",
    image: "/images/generated/oftalmo-hero.jpg?v=5",
    imageAlt: "Oftalmología infantil en Clínica Burgos",
    sections: [
      {
        heading: "¿Cuándo llevar a un niño al oftalmólogo?",
        body: "En revisiones rutinarias, si entrecierra los ojos, se acerca mucho a pantallas o libros, se queja de dolor de cabeza, tiene ojo desviado o antecedentes familiares de ambliopía o estrabismo.",
      },
      {
        heading: "Qué evaluamos",
        body: "Agudeza visual, refracción, alineación ocular y salud del ojo. Detectamos miopía, hipermetropía, astigmatismo u otras alteraciones de forma precoz.",
      },
      {
        heading: "Oftalmólogo niños cerca de ti",
        body: "Clínica Burgos ofrece oftalmología infantil en Alhaurín el Grande para familias del Valle del Guadalhorce y alrededores.",
      },
    ],
  },
  {
    path: "/medicina-estetica/acido-hialuronico",
    parent: "/medicina-estetica",
    parentLabel: "Medicina Estética",
    eyebrow: "Rellenos dérmicos",
    h1: "Ácido hialurónico en Alhaurín el Grande",
    title: "Ácido hialurónico en Alhaurín el Grande | Clínica Burgos",
    description:
      "Tratamiento con ácido hialurónico en Alhaurín el Grande y Málaga: rellenos faciales, labios, pómulos, ojeras y surcos. Resultados naturales. Clínica Burgos.",
    keywords:
      "ácido hialurónico Alhaurín el Grande, ácido hialurónico Málaga, relleno ácido hialurónico, rellenos faciales, clínica ácido hialurónico Málaga",
    lead: "El ácido hialurónico restaura volumen y armonía facial con resultados inmediatos, personalizados y naturales.",
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
    title: "Relleno de labios en Alhaurín el Grande | Clínica Burgos",
    description:
      "Aumento, perfilado e hidratación de labios con ácido hialurónico en Alhaurín el Grande y Málaga. Resultado natural. Clínica Burgos.",
    keywords:
      "relleno labios Alhaurín el Grande, aumento labios Málaga, perfilado labios, ácido hialurónico labios, hidratación de labios",
    lead: "Perfilamos, hidratamos o aumentamos los labios con ácido hialurónico buscando un resultado armónico y natural.",
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
    title: "Tratamiento de ojeras en Alhaurín el Grande | Clínica Burgos",
    description:
      "Tratamiento de ojeras con ácido hialurónico en Alhaurín el Grande y Málaga. Reduce ojeras y rejuvenece la mirada. Clínica Burgos.",
    keywords:
      "tratamiento ojeras Alhaurín el Grande, tratamiento ojeras Málaga, ácido hialurónico ojeras, eliminar ojeras, rejuvenecimiento mirada",
    lead: "Valoramos el tipo de ojera —vasculada o pigmentada— y el surco, para indicar el tratamiento más adecuado a cada caso.",
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
    title: "Armonización facial en Alhaurín el Grande | Clínica Burgos",
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
    title: "Rejuvenecimiento facial en Alhaurín el Grande | Clínica Burgos",
    description:
      "Rejuvenecimiento facial sin cirugía en Alhaurín el Grande y Málaga: arrugas, calidad de piel, luminosidad y firmeza. Clínica Burgos.",
    keywords:
      "rejuvenecimiento facial Alhaurín el Grande, rejuvenecimiento facial Málaga, rejuvenecimiento facial sin cirugía, tratamiento antiedad, medicina antienvejecimiento",
    lead: "Combinamos tratamientos médicos para rejuvenecer el rostro de forma natural: expresión, volumen y calidad de la piel.",
    image: "/images/generated/estetica-hero.jpg?v=6",
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
    title: "Bioestimulación facial en Alhaurín el Grande | Clínica Burgos",
    description:
      "Bioestimulación facial y de colágeno en Alhaurín el Grande y Málaga. Mejora firmeza y regeneración de la piel. Clínica Burgos.",
    keywords:
      "bioestimulación facial Málaga, bioestimulación colágeno, inductores de colágeno, regeneración facial, tratamiento bioestimulación",
    lead: "Los inductores de colágeno estimulan la regeneración natural de la piel para mejorar firmeza y contorno de forma progresiva.",
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
    title: "Mesoterapia facial en Alhaurín el Grande | Clínica Burgos",
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
    title: "Tratamiento de arrugas en Alhaurín el Grande | Clínica Burgos",
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
