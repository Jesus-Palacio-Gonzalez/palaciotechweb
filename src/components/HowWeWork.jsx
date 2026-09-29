import Reveal from "./Reveal";

const ITEMS = [
  {
    n: "01",
    title: "Entender",
    text: "Ponemos nombre a los cuellos de botella y a las oportunidades que ya existen.",
  },
  {
    n: "02",
    title: "Ordenar",
    text: "Definimos una primera versión útil, con alcance claro y decisiones que sí se pueden sostener.",
  },
  {
    n: "03",
    title: "Construir",
    text: "Diseñamos y desarrollamos la solución con tus procesos, datos y personas en el centro.",
  },
];

export default function HowWeWork() {
  return (
    <section id="proceso" className="border-t border-ink bg-paper px-6 py-24 text-ink md:px-10">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="mb-5 text-xs tracking-wide text-ink/50">CÓMO TRABAJAMOS</p>
          <h2 className="max-w-sm text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Claridad antes que complejidad.
          </h2>
          <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-ink/60">
            No llegamos con una solución prefabricada. Llegamos con
            preguntas, criterio y un plan que se puede explicar a todo el
            equipo.
          </p>
        </Reveal>

        <ul>
          {ITEMS.map(({ n, title, text }, i) => (
            <Reveal as="li" key={n} delay={i * 100}>
              <div className="grid grid-cols-[auto_auto_1fr] items-baseline gap-6 border-t border-ink/10 py-7 last:border-b md:grid-cols-[auto_140px_1fr]">
                <span className="text-sm font-medium text-[#b9812a]">{n}</span>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="max-w-md text-sm leading-relaxed text-ink/60">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
