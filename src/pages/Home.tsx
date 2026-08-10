import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { ServiceCarousel } from "../components/ServiceCarousel";

const services = [
  {
    to: "/oftalmologia",
    title: "Oftalmología",
    text: "Oftalmólogo en Alhaurín el Grande: revisión, diagnóstico y tratamientos de salud visual.",
    image: "/images/generated/oftalmo-hero.jpg?v=5",
  },
  {
    to: "/medicina-estetica",
    title: "Medicina Estética",
    text: "Clínica estética en Alhaurín el Grande: tratamientos faciales con resultado natural.",
    image: "/images/generated/estetica-card.jpg?v=1",
  },
  {
    to: "/oftalmologia#mirada",
    title: "Estética de la Mirada",
    text: "Blefaroplastia, ojeras y rejuvenecimiento de la mirada con criterio médico.",
    image: "/images/generated/estetica-mirada-card.jpg?v=1",
  },
];

export function Home() {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ctaRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], reduce ? ["0%", "0%"] : ["-12%", "12%"]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduce) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const tryPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          /* Autoplay may still be blocked; poster remains visible. */
        });
      }
    };

    tryPlay();
    video.addEventListener("canplay", tryPlay);
    video.addEventListener("loadeddata", tryPlay);

    return () => {
      video.removeEventListener("canplay", tryPlay);
      video.removeEventListener("loadeddata", tryPlay);
    };
  }, [reduce]);

  const fade = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-media">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/espera.jpg"
          >
            <source src="/video/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay" />
        <div className="hero-content">
          <motion.h1
            className="display hero-seo-title"
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
          >
            Clínica de Oftalmología y Medicina Estética en Alhaurín el Grande
          </motion.h1>
          <motion.p
            className="hero-lead"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            Cuidamos tu visión. Realzamos tu bienestar. Clínica Burgos · Málaga
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.7 }}
          >
            <Link className="btn btn-light btn-sm" to="/contacto#cita">
              Pedir cita
            </Link>
          </motion.div>
        </div>
        <div className="hero-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
            <path
              fill="currentColor"
              d="M0,55 C320,95 560,10 820,40 C1080,70 1260,85 1440,45 L1440,90 L0,90 Z"
            />
          </svg>
        </div>
      </section>

      <section className="section intro intro-compact">
        <div className="shell split-xl">
          <motion.figure
            className="panel-media panel-media-sm"
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <img
              src="/images/espera.jpg"
              alt="Clínica Burgos oftalmología y medicina estética en Alhaurín el Grande"
              loading="lazy"
            />
          </motion.figure>
          <motion.div
            className="panel-copy"
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <p className="eyebrow">Clínica Burgos</p>
            <h2 className="display h2">
              Oftalmólogo y medicina estética en Alhaurín el Grande
            </h2>
            <p className="body">
              En Clínica Burgos unimos oftalmología y medicina estética en un
              espacio sereno en el corazón de Alhaurín el Grande. Si buscas un
              oftalmólogo privado, una clínica oftalmológica cercana o
              tratamientos de medicina estética facial con resultado natural,
              estás en el lugar adecuado.
            </p>
            <p className="body">
              Atendemos pacientes del Valle del Guadalhorce, Coín, Cártama,
              Alhaurín de la Torre, Mijas y el resto de la provincia de Málaga.
            </p>
            <Link className="btn btn-outline btn-sm" to="/contacto#cita">
              Pedir cita
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section services-visual" id="servicios">
        <div className="shell">
          <ServiceCarousel items={services} />
        </div>
      </section>

      <section className="section section-cream" id="especialidades-clave">
        <div className="shell seo-prose">
          <p className="eyebrow">Salud visual y estética</p>
          <h2 className="display h2">Qué tratamos en Clínica Burgos</h2>
          <p className="body">
            Ofrecemos{" "}
            <Link to="/oftalmologia/revision-oftalmologica">
              revisión oftalmológica
            </Link>
            , diagnóstico y seguimiento de{" "}
            <Link to="/oftalmologia/ojo-seco">ojo seco</Link>,{" "}
            <Link to="/oftalmologia/cataratas">cataratas</Link>,{" "}
            <Link to="/oftalmologia/glaucoma">glaucoma</Link>,{" "}
            <Link to="/oftalmologia/retina">retina</Link> y{" "}
            <Link to="/oftalmologia/dmae">DMAE</Link>, además de{" "}
            <Link to="/oftalmologia/presbicia">presbicia</Link> y{" "}
            <Link to="/oftalmologia/oftalmologia-infantil">
              oftalmología infantil
            </Link>
            .
          </p>
          <p className="body">
            En medicina estética trabajamos{" "}
            <Link to="/medicina-estetica/acido-hialuronico">
              ácido hialurónico
            </Link>
            ,{" "}
            <Link to="/medicina-estetica/labios">labios</Link>,{" "}
            <Link to="/medicina-estetica/ojeras">ojeras</Link>,{" "}
            <Link to="/medicina-estetica/armonizacion-facial">
              armonización facial
            </Link>
            ,{" "}
            <Link to="/medicina-estetica/tratamiento-arrugas">
              tratamiento de arrugas
            </Link>{" "}
            y{" "}
            <Link to="/medicina-estetica/rejuvenecimiento-facial">
              rejuvenecimiento facial
            </Link>{" "}
            sin cirugía.
          </p>
        </div>
      </section>

      <section className="section blefaro-home">
        <div className="shell split-xl">
          <motion.div
            className="panel-copy"
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="eyebrow">Estética de la mirada</p>
            <h2 className="display h2">Blefaroplastia</h2>
            <p className="body">
              Cirugía de párpados para rejuvenecer la mirada: corrige el exceso
              de piel y las bolsas, recuperando una expresión más descansada,
              abierta y natural.
            </p>
            <ul className="blefaro-list">
              <li>Párpado superior e inferior</li>
              <li>Valoración médica personalizada</li>
              <li>Resultado armónico y natural</li>
            </ul>
            <Link className="btn btn-primary btn-sm" to="/contacto#cita">
              Solicitar valoración
            </Link>
          </motion.div>
          <motion.figure
            className="panel-media tall blefaro-shot"
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <img
              src="/images/generated/blefaroplastia.jpg?v=4"
              alt="Blefaroplastia y estética de la mirada en Clínica Burgos Alhaurín el Grande"
              loading="eager"
            />
            <figcaption>Blefaroplastia</figcaption>
          </motion.figure>
        </div>
      </section>

      <section className="cta-parallax" ref={ctaRef}>
        <div className="cta-parallax-frame">
          <motion.div className="cta-parallax-bg" style={{ y: bgY }}>
            <img src="/images/generated/cta-banner.jpg" alt="" />
          </motion.div>
          <div className="cta-parallax-veil" />
          <div className="shell cta-parallax-content">
            <p className="eyebrow" style={{ color: "rgba(255,255,255,0.72)" }}>
              Pedir cita oftalmólogo o medicina estética
            </p>
            <h2 className="display">Reserva tu cita en Clínica Burgos</h2>
            <p>
              Primera consulta de oftalmología o medicina estética en Alhaurín
              el Grande. Te orientamos hacia el tratamiento más adecuado para
              ti.
            </p>
            <div className="cta-row-actions">
              <Link className="btn btn-light btn-sm" to="/contacto#cita">
                Pedir cita
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section gallery">
        <div className="shell">
          <div className="gallery-stack" aria-label="Espacios de la clínica">
            <figure className="gs gs-a">
              <img
                src="/images/doctora-1.jpg"
                alt="Recepción Clínica Burgos Alhaurín el Grande"
                loading="lazy"
              />
            </figure>
            <figure className="gs gs-b">
              <img
                src="/images/mirada.jpg"
                alt="Detalle de iluminación en Clínica Burgos"
                loading="lazy"
              />
            </figure>
            <figure className="gs gs-c">
              <img
                src="/images/espacio.jpg"
                alt="Consulta oftalmológica Clínica Burgos Málaga"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
