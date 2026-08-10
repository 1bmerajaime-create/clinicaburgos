import { useState } from "react";

type Item = { title: string; body: string };

export function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="accordion">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.title} className={`accordion-item ${isOpen ? "open" : ""}`}>
            <button
              type="button"
              className="accordion-trigger"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span>{item.title}</span>
              <span className="accordion-icon" aria-hidden="true">
                {isOpen ? "–" : "+"}
              </span>
            </button>
            <div className="accordion-panel" hidden={!isOpen}>
              <p>{item.body}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
