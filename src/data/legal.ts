export type LegalSection = {
  heading: string;
  body: string[];
};

export type LegalPageData = {
  path: string;
  title: string;
  h1: string;
  description: string;
  updated: string;
  sections: LegalSection[];
};

export const avisoLegal: LegalPageData = {
  path: "/aviso-legal",
  title: "Aviso legal | Clínica Burgos",
  h1: "Aviso legal",
  description:
    "Aviso legal de Clínica Burgos. Información del titular, condiciones de uso y responsabilidad del sitio web clinicaburgos.net.",
  updated: "15 de agosto de 2026",
  sections: [
    {
      heading: "1. Datos identificativos",
      body: [
        "En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos identificativos del titular de este sitio web:",
        "Titular: Clínica Burgos.",
        "Domicilio: Avenida Gerald Brenan 29, 29120 Alhaurín el Grande, Málaga, España.",
        "Teléfono: 692 353 245.",
        "Correo electrónico: info@clinicaburgos.net.",
        "Sitio web: https://clinicaburgos.net.",
        "Autorización sanitaria (NICA): 69168.",
      ],
    },
    {
      heading: "2. Objeto",
      body: [
        "El presente aviso legal regula el acceso, navegación y uso del sitio web clinicaburgos.net, así como las responsabilidades derivadas de la utilización de sus contenidos, incluidos textos, imágenes, información de servicios y formularios de contacto.",
        "El sitio tiene carácter informativo sobre los servicios de oftalmología y medicina estética de Clínica Burgos y permite solicitar información o cita. La información publicada no sustituye una consulta médica presencial ni constituye un diagnóstico.",
      ],
    },
    {
      heading: "3. Condiciones de uso",
      body: [
        "El acceso al sitio es gratuito. El usuario se compromete a utilizarlo de forma lícita, de acuerdo con la legislación vigente, la buena fe y el orden público, y a no emplearlo con fines ilícitos o lesivos para Clínica Burgos o terceros.",
        "Queda prohibido introducir o difundir virus, alterar o dañar sistemas, o utilizar los contenidos con fines comerciales no autorizados.",
      ],
    },
    {
      heading: "4. Propiedad intelectual e industrial",
      body: [
        "Todos los contenidos del sitio (textos, fotografías, logotipos, diseño, estructura y código) son titularidad de Clínica Burgos o se utilizan con la autorización correspondiente. Quedan reservados todos los derechos.",
        "Queda prohibida la reproducción, distribución, comunicación pública o transformación de los contenidos sin autorización previa y por escrito del titular, salvo los actos de reproducción temporal necesarios para la navegación lícita.",
      ],
    },
    {
      heading: "5. Responsabilidad",
      body: [
        "Clínica Burgos procura que la información del sitio sea veraz y actualizada, pero no garantiza la ausencia de errores u omisiones ni que el contenido sea permanente o válido en todo momento.",
        "No se asume responsabilidad por daños derivados del uso del sitio, de la imposibilidad de acceso, de fallos técnicos, de virus o de contenidos de sitios de terceros a los que se pueda acceder mediante enlaces.",
      ],
    },
    {
      heading: "6. Enlaces",
      body: [
        "Este sitio puede incluir enlaces a páginas de terceros (por ejemplo, WhatsApp). Clínica Burgos no controla ni se responsabiliza de los contenidos, políticas o prácticas de dichos sitios. El usuario accede a ellos bajo su propia responsabilidad.",
      ],
    },
    {
      heading: "7. Protección de datos",
      body: [
        "El tratamiento de datos personales se rige por la Política de privacidad de este sitio, de conformidad con el Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).",
      ],
    },
    {
      heading: "8. Legislación y fuero",
      body: [
        "Las presentes condiciones se rigen por la legislación española. Para cualquier controversia, las partes se someten a los Juzgados y Tribunales de Málaga, sin perjuicio de los derechos que asistan a los consumidores y usuarios.",
      ],
    },
  ],
};

export const politicaPrivacidad: LegalPageData = {
  path: "/politica-de-privacidad",
  title: "Política de privacidad | Clínica Burgos",
  h1: "Política de privacidad",
  description:
    "Política de privacidad de Clínica Burgos. Información sobre el tratamiento de datos personales conforme al RGPD y la LOPDGDD.",
  updated: "15 de agosto de 2026",
  sections: [
    {
      heading: "1. Responsable del tratamiento",
      body: [
        "Responsable: Clínica Burgos.",
        "Domicilio: Avenida Gerald Brenan 29, 29120 Alhaurín el Grande, Málaga, España.",
        "Teléfono: 692 353 245.",
        "Correo electrónico: info@clinicaburgos.net.",
        "Autorización sanitaria (NICA): 69168.",
      ],
    },
    {
      heading: "2. Datos que recabamos",
      body: [
        "A través del formulario de cita o de comunicaciones por teléfono, correo electrónico o WhatsApp podemos recabar: nombre, teléfono, correo electrónico y el mensaje o motivo de la consulta que nos facilite.",
        "No recabamos categorías especiales de datos a través del sitio web. Cualquier información de salud se trata, en su caso, en el marco de la asistencia sanitaria presencial y con las garantías propias de la normativa sanitaria.",
      ],
    },
    {
      heading: "3. Finalidad del tratamiento",
      body: [
        "Gestionar solicitudes de información y de cita.",
        "Atender consultas y mantener la comunicación necesaria para prestar el servicio solicitado.",
        "Cumplir obligaciones legales aplicables a un centro sanitario.",
        "En su caso, enviar comunicaciones relacionadas con su cita o con el servicio solicitado.",
      ],
    },
    {
      heading: "4. Base jurídica",
      body: [
        "Ejecución de medidas precontractuales o de un contrato, cuando solicita cita o información sobre un tratamiento (art. 6.1.b RGPD).",
        "Consentimiento, cuando nos envía un formulario o se pone en contacto de forma voluntaria (art. 6.1.a RGPD).",
        "Cumplimiento de obligaciones legales, en particular las propias de la actividad sanitaria y de protección de datos (art. 6.1.c RGPD).",
        "Interés legítimo, para la gestión básica de la web y la seguridad del sitio (art. 6.1.f RGPD).",
      ],
    },
    {
      heading: "5. Conservación",
      body: [
        "Los datos de contacto y de solicitudes de cita se conservarán el tiempo necesario para gestionar su petición y, posteriormente, durante los plazos legalmente exigibles o mientras puedan derivarse responsabilidades.",
        "La historia clínica y demás documentación sanitaria, cuando exista, se conserva conforme a la normativa sanitaria aplicable.",
      ],
    },
    {
      heading: "6. Destinatarios",
      body: [
        "No cedemos sus datos a terceros, salvo obligación legal o cuando sea necesario para prestar el servicio (por ejemplo, proveedores tecnológicos que actúan como encargados del tratamiento, con las garantías exigidas por el RGPD).",
        "El formulario de contacto puede gestionarse a través de un proveedor de envío de formularios. WhatsApp es un servicio de un tercero; si nos escribe por ese canal, se aplicarán además sus propias condiciones y política de privacidad.",
      ],
    },
    {
      heading: "7. Transferencias internacionales",
      body: [
        "Con carácter general no realizamos transferencias internacionales de datos. Si algún proveedor estuviera ubicado fuera del Espacio Económico Europeo, se adoptarán las garantías adecuadas previstas en el RGPD.",
      ],
    },
    {
      heading: "8. Derechos",
      body: [
        "Puede ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, así como retirar el consentimiento cuando este sea la base del tratamiento, dirigiéndose a info@clinicaburgos.net o por escrito al domicilio indicado, acreditando su identidad.",
        "También puede presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) si considera que el tratamiento no se ajusta a la normativa.",
      ],
    },
    {
      heading: "9. Menores",
      body: [
        "El sitio no está dirigido a menores de 14 años. Si un menor facilita datos, el responsable podrá cancelarlos. Las consultas de oftalmología infantil se gestionan a través de los padres o tutores legales.",
      ],
    },
    {
      heading: "10. Cookies",
      body: [
        "Este sitio puede utilizar cookies técnicas necesarias para su funcionamiento. No se emplean cookies de publicidad de terceros. Si en el futuro se incorporaran cookies analíticas o similares, se informará y, cuando proceda, se recabará el consentimiento conforme a la normativa aplicable.",
      ],
    },
    {
      heading: "11. Actualización",
      body: [
        "Clínica Burgos podrá actualizar esta política para adaptarla a cambios legales o del sitio. La versión vigente es la publicada en esta página.",
      ],
    },
  ],
};

export const legalPages = [avisoLegal, politicaPrivacidad];
