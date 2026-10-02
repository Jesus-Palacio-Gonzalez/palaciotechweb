import { Globe, Layers, Link2, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const ITEMS = [
  {
    icon: Globe,
    title: "Presencia que trabaja",
    text: "Sitios web claros, rápidos y pensados para convertir visitas en conversaciones reales.",
  },
  {
    
    icon: Layers,
    title: "Ventas sin fricción",
    text: "Tiendas en línea con pagos, catálogo y operaciones conectadas para que vender sea más sencillo.",
  },
  {
    icon: Link2,
    title: "Operaciones a medida",
    text: "Aplicaciones, APIs y sistemas internos que eliminan tareas repetitivas y ordenan el trabajo.",
  },
];

export default function WhatWeDo() {
  return (
    <section id="servicios" className="border-t border-line bg-ink px-6 py-24 md:px-10">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="mb-5 text-xs tracking-wide text-gold">LO QUE HACEMOS</p>
          <h2 className="max-w-sm text-3xl leading-tight tracking-tight md:text-4xl">
            La tecnología debe quitar peso, no añadirlo.
          </h2>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-paper/60">
            Empezamos por la fricción cotidiana: las tareas manuales, los
            datos que no se hablan y las oportunidades que se quedan en una
            hoja de cálculo.
          </p>
          <div className="mt-8 flex items-center gap-3 text-xs text-muted">
            <span className="h-px w-8 bg-gold-line" />
            DE LA NECESIDAD AL SISTEMA
          </div>
        </Reveal>

        <ul>
          {ITEMS.map(({ n, icon: Icon, title, text }, i) => (
            <Reveal as="li" key={n} delay={i * 100}>
              <div className="group grid grid-cols-[auto_auto_1fr_auto] items-start gap-5 border-t border-line px-4 py-7 transition-colors last:border-b hover:bg-gold-soft md:px-6">
                <span className="pt-1 text-sm text-gold">{n}</span>
                <Icon size={20} className="mt-0.5 text-paper/70 transition-colors group-hover:text-gold" />
                <div>
                  <h3 className="text-lg text-paper">{title}</h3>
                  <p className="mt-1 max-w-md text-sm leading-relaxed text-paper/55">
                    {text}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="mt-1 text-paper/30 transition-colors group-hover:text-gold"
                />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
