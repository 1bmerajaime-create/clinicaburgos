import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export type ServiceSlide = {
  to: string;
  title: string;
  text: string;
  image: string;
};

export function ServiceCarousel({
  items,
  heading = "Especialidades",
}: {
  items: ServiceSlide[];
  heading?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slides = Array.from(track.children) as HTMLElement[];
    const target = slides[i];
    if (!target) return;
    track.scrollTo({ left: target.offsetLeft - track.offsetLeft, behavior: "smooth" });
    setIndex(i);
  }, []);

  const next = useCallback(() => {
    goTo((index + 1) % items.length);
  }, [goTo, index, items.length]);

  const prev = useCallback(() => {
    goTo((index - 1 + items.length) % items.length);
  }, [goTo, index, items.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const slides = Array.from(track.children) as HTMLElement[];
      const mid = track.scrollLeft + track.clientWidth / 2;
      let closest = 0;
      let best = Infinity;
      slides.forEach((slide, i) => {
        const center = slide.offsetLeft - track.offsetLeft + slide.offsetWidth / 2;
        const dist = Math.abs(center - mid);
        if (dist < best) {
          best = dist;
          closest = i;
        }
      });
      setIndex(closest);
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (paused || items.length < 2) return;
    const id = window.setInterval(next, 5200);
    return () => window.clearInterval(id);
  }, [paused, next, items.length]);

  return (
    <div
      className="svc-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="svc-carousel-top">
        <h2 className="display h2">{heading}</h2>
        <div className="svc-carousel-controls">
          <button type="button" className="svc-nav" aria-label="Anterior" onClick={prev}>
            ←
          </button>
          <button type="button" className="svc-nav" aria-label="Siguiente" onClick={next}>
            →
          </button>
        </div>
      </div>

      <div className="svc-carousel-track" ref={trackRef} tabIndex={0}>
        {items.map((item) => (
          <Link key={item.title} to={item.to} className="service-card svc-slide">
            <div className="service-card-media">
              <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
            </div>
            <div className="service-card-body">
              <h3 className="display">{item.title}</h3>
              <p>{item.text}</p>
              <span className="text-link">Ver más</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
