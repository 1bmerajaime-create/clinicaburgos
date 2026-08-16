import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  ADDRESS,
  EMAIL,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "../data/content";
import {
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
  seoByPath,
  type SeoConfig,
} from "../data/seo";
import { servicePages } from "../data/servicePages";

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`,
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.content = content;
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

function resolveSeo(pathname: string): SeoConfig {
  const clean = pathname.replace(/\/$/, "") || "/";
  if (seoByPath[clean]) return seoByPath[clean];

  const service = servicePages.find((p) => p.path === clean);
  if (service) {
    return {
      path: service.path,
      title: service.title,
      description: service.description,
      keywords: service.keywords,
    };
  }

  return seoByPath["/"];
}

function buildLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": `${SITE_URL}/#clinic`,
    name: SITE_NAME,
    alternateName: "Clínica Burgos Alhaurín el Grande",
    url: SITE_URL,
    logo: `${SITE_URL}/favicon-192.png`,
    image: `${SITE_URL}/images/espera.jpg`,
    telephone: PHONE_HREF.replace("tel:", ""),
    email: EMAIL,
    description:
      "Clínica de oftalmología y medicina estética en Alhaurín el Grande, Málaga. Oftalmólogo, blefaroplastia y tratamientos faciales.",
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      postalCode: ADDRESS.zip,
      addressRegion: ADDRESS.region,
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.6428,
      longitude: -4.6872,
    },
    areaServed: [
      { "@type": "City", name: "Alhaurín el Grande" },
      { "@type": "City", name: "Coín" },
      { "@type": "City", name: "Cártama" },
      { "@type": "City", name: "Alhaurín de la Torre" },
      { "@type": "City", name: "Mijas" },
      { "@type": "AdministrativeArea", name: "Valle del Guadalhorce" },
      { "@type": "AdministrativeArea", name: "Málaga" },
      { "@type": "AdministrativeArea", name: "Costa del Sol" },
    ],
    medicalSpecialty: ["Ophthalmology", "PlasticSurgery"],
    founder: {
      "@type": "Physician",
      "@id": `${SITE_URL}/quienes-somos#physician`,
      name: "Teresa García Burgos",
      honorificPrefix: "Dra.",
      url: `${SITE_URL}/quienes-somos`,
    },
    priceRange: "€€",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+34 ${PHONE_DISPLAY.replace(/\s/g, "")}`,
      contactType: "reservations",
      availableLanguage: ["Spanish"],
    },
  };
}

export function Seo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const seo = resolveSeo(pathname);
    const url = absoluteUrl(seo.path === "/" ? "/" : seo.path);

    document.title = seo.title;
    upsertMeta("name", "description", seo.description);
    if (seo.keywords) upsertMeta("name", "keywords", seo.keywords);
    upsertMeta("name", "robots", "index, follow, max-image-preview:large");
    upsertMeta("name", "geo.region", "ES-MA");
    upsertMeta("name", "geo.placename", "Alhaurín el Grande");
    upsertMeta("name", "author", SITE_NAME);

    upsertLink("canonical", url);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:locale", "es_ES");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", seo.title);
    upsertMeta("property", "og:description", seo.description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", `${SITE_URL}/images/espera.jpg`);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", seo.title);
    upsertMeta("name", "twitter:description", seo.description);

    const scriptId = "cb-jsonld";
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    const physician = {
      "@type": "Physician",
      "@id": `${SITE_URL}/quienes-somos#physician`,
      name: "Teresa García Burgos",
      honorificPrefix: "Dra.",
      jobTitle: "Oftalmóloga y médica estética",
      url: `${SITE_URL}/quienes-somos`,
      worksFor: { "@id": `${SITE_URL}/#clinic` },
      medicalSpecialty: ["Ophthalmology"],
      address: {
        "@type": "PostalAddress",
        streetAddress: ADDRESS.street,
        addressLocality: ADDRESS.city,
        postalCode: ADDRESS.zip,
        addressRegion: ADDRESS.region,
        addressCountry: "ES",
      },
    };
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [buildLocalBusinessJsonLd(), physician],
    });
  }, [pathname]);

  return null;
}
