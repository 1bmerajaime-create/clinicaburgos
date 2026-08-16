export const PHONE_DISPLAY = "692 353 245";
export const PHONE_HREF = "tel:+34692353245";
export const WHATSAPP_HREF =
  "https://wa.me/34692353245?text=" +
  encodeURIComponent("Hola, me gustaría pedir información / cita en Clínica Burgos.");
export const EMAIL = "info@clinicaburgos.net";
export const ADDRESS = {
  street: "Avenida Gerald Brenan 29",
  city: "Alhaurín el Grande",
  zip: "29120",
  region: "Málaga",
};

export type TreatmentItem = {
  title: string;
  subtitle: string;
  image: string;
  body: string;
  href?: string;
};

export const oftalmologiaTreatments: TreatmentItem[] = [
  {
    title: "Cataratas",
    subtitle: "Cirugía del cristalino",
    image: "/images/generated/oft-cataratas.jpg",
    body: "Opacidad del cristalino que genera visión borrosa y deslumbramiento. En Clínica Burgos, en Alhaurín el Grande (Málaga), valoramos el grado de afectación y, cuando procede, orientamos la operación de cataratas para recuperar nitidez y calidad visual.",
  },
  {
    title: "Presbicia o vista cansada",
    subtitle: "Visión de cerca",
    image: "/images/generated/oft-presbicia.jpg",
    body: "Dificultad progresiva para enfocar de cerca a partir de los 40–45 años. Estudiamos tus hábitos visuales y te proponemos la solución más adecuada: gafas, lentes de contacto o alternativas quirúrgicas. Tratamiento de presbicia en Alhaurín el Grande y Málaga.",
  },
  {
    title: "Defectos refractivos",
    subtitle: "Miopía, hipermetropía, astigmatismo",
    image: "/images/generated/oft-refractivos.jpg",
    body: "Alteraciones del enfoque que impiden ver nítido de lejos o de cerca. Realizamos una refracción completa (graduación de la vista) y orientamos la corrección óptima según tu caso: miopía, hipermetropía o astigmatismo.",
  },
  {
    title: "Degeneración macular (DMAE)",
    subtitle: "Retina · visión central",
    image: "/images/generated/oft-dmae.jpg",
    body: "La degeneración macular asociada a la edad afecta la mácula y puede reducir la visión central. La detección precoz y el seguimiento con pruebas de retina son clave para preservar la visión el mayor tiempo posible.",
  },
  {
    title: "Desprendimiento de vítreo",
    subtitle: "Moscas volantes y destellos",
    image: "/images/generated/oft-vitreo.jpg",
    body: "Separación del gel vítreo que puede provocar moscas volantes (miodesopsias), manchas o destellos. Evaluamos el fondo de ojo para descartar complicaciones y te indicamos el seguimiento necesario.",
  },
  {
    title: "Síndrome de ojo seco",
    subtitle: "Confort ocular",
    image: "/images/generated/oft-ojoseco.jpg",
    body: "Sequedad, escozor, fatiga o sensación de arenilla. Diagnosticamos la causa (lágrima, párpados, ambiente) y diseñamos un tratamiento personalizado. Especialistas en ojo seco en Alhaurín el Grande, Málaga.",
  },
  {
    title: "Blefaritis",
    subtitle: "Borde palpebral",
    image: "/images/generated/oft-blefaritis.jpg",
    body: "Inflamación del borde del párpado que causa molestias, costras o enrojecimiento. Tratamos con higiene palpebral, cuidados específicos y control de brotes.",
  },
  {
    title: "Conjuntivitis",
    subtitle: "Inflamación ocular",
    image: "/images/generated/oft-conjuntivitis.jpg",
    body: "Enrojecimiento, picor o secreción por causa infecciosa, alérgica o irritativa. Identificamos el origen y pautamos el tratamiento adecuado para aliviar síntomas y evitar complicaciones.",
  },
  {
    title: "Herpes ocular",
    subtitle: "Infección viral",
    image: "/images/generated/oft-herpes.jpg",
    body: "Infección viral que puede afectar córnea, párpados y retina. Requiere valoración especializada y tratamiento precoz para proteger la visión y reducir recidivas.",
  },
  {
    title: "Retinopatía diabética",
    subtitle: "Retina · diabetes",
    image: "/images/generated/oft-retinopatia.jpg",
    body: "Complicación de la diabetes que daña los vasos de la retina. Controlamos el fondo de ojo de forma periódica y actuamos a tiempo para preservar la visión.",
  },
  {
    title: "Glaucoma",
    subtitle: "Presión intraocular",
    image: "/images/generated/oft-glaucoma.jpg",
    body: "Enfermedad del nervio óptico ligada a menudo a la presión ocular o tensión ocular. El diagnóstico precoz y el seguimiento permiten frenar la pérdida de campo visual. Revisión de glaucoma en Alhaurín el Grande, Málaga.",
  },
  {
    title: "Desprendimiento de retina",
    subtitle: "Urgencia retiniana",
    image: "/images/generated/oft-desprendimiento.jpg",
    body: "Separación de la retina que puede causar sombra, destellos o pérdida brusca de visión. Es una urgencia: valoramos de inmediato y orientamos el tratamiento quirúrgico si procede.",
  },
  {
    title: "Trombosis de retina",
    subtitle: "Vascular retiniana",
    image: "/images/generated/oft-trombosis.jpg",
    body: "Obstrucción de una vena o arteria retiniana que altera la visión de forma súbita. Estudiamos el fondo de ojo y el riesgo vascular para pautar seguimiento y tratamiento.",
  },
  {
    title: "Pterigion / Pingüécula",
    subtitle: "Superficie ocular",
    image: "/images/generated/oft-pterigion.jpg",
    body: "Crecimientos en la superficie del ojo por sol o irritación crónica. Valoramos si basta con lubricación y protección o si conviene cirugía.",
  },
  {
    title: "Uveítis",
    subtitle: "Inflamación intraocular",
    image: "/images/generated/oft-uveitis.jpg",
    body: "Inflamación de las capas internas del ojo: dolor, fotofobia o visión borrosa. Diagnosticamos el tipo de uveítis y controlamos la inflamación para proteger la visión.",
  },
];

export const miradaTreatments: TreatmentItem[] = [
  {
    title: "Blefaroplastia",
    subtitle: "Cirugía de párpados",
    image: "/images/generated/blefaroplastia.jpg",
    body: "Cirugía de párpados para rejuvenecer la mirada. En Clínica Burgos corregimos el exceso de piel y las bolsas, recuperando una expresión más descansada, abierta y natural.",
  },
  {
    title: "Lagrimeo",
    subtitle: "Drenaje lagrimal",
    image: "/images/generated/oft-ojoseco.jpg",
    body: "Evaluamos las causas del lagrimeo excesivo (obstrucción, irritación o alteraciones del párpado) y proponemos el tratamiento médico o quirúrgico más adecuado.",
  },
  {
    title: "Tumores Palpebrales",
    subtitle: "Diagnóstico y tratamiento",
    image: "/images/generated/oft-blefaritis.jpg",
    body: "Valoración de lesiones en el párpado, diferenciación entre benignas y sospechosas, y tratamiento quirúrgico preciso cuando está indicado.",
  },
  {
    title: "Chalazión y orzuelo",
    subtitle: "Inflamación palpebral",
    image: "/images/generated/oft-conjuntivitis.jpg",
    body: "Quiste inflamatorio de las glándulas del párpado. Tratamos con medidas conservadoras y, si persiste, con drenaje quirúrgico ambulatorio.",
  },
  {
    title: "Problemas de pestañas",
    subtitle: "Triquiasis y alteraciones",
    image: "/images/generated/oft-vitreo.jpg",
    body: "Corrección de pestañas mal dirigidas u otras alteraciones que irritan la superficie ocular, para mejorar confort y proteger la córnea.",
  },
  {
    title: "Ectropión y Entropión",
    subtitle: "Malposición palpebral",
    image: "/images/generated/oft-herpes.jpg",
    body: "El párpado puede girarse hacia fuera (ectropión) o hacia dentro (entropión). Corregimos la posición para aliviar molestias y proteger el ojo.",
  },
  {
    title: "Xantelasmas",
    subtitle: "Depósitos palpebrales",
    image: "/images/generated/oft-xantelasma.jpg",
    body: "Placas amarillentas en los párpados por depósitos lipídicos. Valoramos su eliminación con técnicas quirúrgicas o procedimientos locales según el caso.",
  },
  {
    title: "Retracción Palpebral",
    subtitle: "Apertura excesiva",
    image: "/images/generated/estetica-mirada-card.jpg",
    body: "Cuando el párpado queda demasiado elevado o retraído, tratamos la causa y restablecemos una apertura armónica y cómoda de la mirada.",
  },
  {
    title: "Traumatismos Oculares",
    subtitle: "Urgencias del contorno",
    image: "/images/generated/oft-desprendimiento.jpg",
    body: "Atención de traumatismos que afectan párpados u órbita: valoración urgente, reparación cuando procede y seguimiento para preservar función y estética.",
  },
];

export const esteticaTreatments: TreatmentItem[] = [
  {
    title: "Neuromoduladores",
    subtitle: "Arrugas de expresión",
    image: "/images/generated/toxina.jpg",
    href: "/medicina-estetica/tratamiento-arrugas",
    body: "Suavizan arrugas de expresión en frente, entrecejo y patas de gallo, manteniendo un gesto natural y descansado. Tratamiento de líneas de expresión sin cirugía en Alhaurín el Grande, Málaga.",
  },
  {
    title: "Rellenos Dérmicos",
    subtitle: "Ácido hialurónico",
    image: "/images/generated/rellenos.jpg?v=3",
    href: "/medicina-estetica/acido-hialuronico",
    body: "Restaura volumen y armonía facial con ácido hialurónico: labios, ojeras, pómulos, surcos nasogenianos o mentón. Resultados inmediatos, personalizados y naturales en Clínica Burgos.",
  },
  {
    title: "Mesoterapia",
    subtitle: "Luminosidad e hidratación",
    image: "/images/generated/mesoterapia.jpg?v=2",
    href: "/medicina-estetica/mesoterapia",
    body: "Microinyecciones de vitaminas, aminoácidos y ácido hialurónico para hidratar en profundidad, mejorar el brillo y revitalizar la calidad de la piel. Mesoterapia facial en Alhaurín el Grande, Málaga.",
  },
  {
    title: "Inductores de Colágeno",
    subtitle: "Bioestimulación",
    image: "/images/generated/colageno.jpg?v=2",
    href: "/medicina-estetica/bioestimulacion",
    body: "Bioestimulación facial para estimular la producción natural de colágeno, mejorar firmeza y contorno de forma progresiva. Enfoque regenerativo con efecto sostenido.",
  },
  {
    title: "IPL",
    subtitle: "Luz pulsada",
    image: "/images/generated/ipl.jpg?v=2",
    body: "Luz pulsada intensa para unificar el tono, reducir manchas solares y rojeces, y mejorar la luminosidad general del rostro.",
  },
  {
    title: "Resurfacing",
    subtitle: "Calidad de piel",
    image: "/images/generated/resurfacing.jpg?v=2",
    body: "Tratamientos de renovación cutánea para refinar textura, poros y marcas superficiales. Recuperamos una piel más uniforme, suave y luminosa.",
  },
];
