import Reveal from "./Reveal";

const FACTS = [
  { label: "Sede", value: "Santa Marta, Colombia" },
  { label: "Enfoque", value: "Negocios en crecimiento de LatAm" },
  { label: "Forma de trabajo", value: "Equipos pequeños, directos" },
];

export default function About() {
  return (
    <section id="nosotros" className="border-t border-ink bg-paper px-6 py-24 text-ink md:px-10">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <p className="mb-5 text-xs tracking-wide text-[#b9812a]">CONÓCENOS</p>
          <h2 className="max-w-lg text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Una agencia pequeña, hecha para moverse rápido.
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/60">
            PalacioTECH nació en la Costa Caribe colombiana con una idea
            simple: los negocios en crecimiento necesitan software que
            entienden y controlan, no cajas negras. Diseñamos, desarrollamos
            y acompañamos cada producto de cerca, sin capas de intermediarios.
          </p>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink/60">
            Trabajamos con comercios, marcas y operaciones que están listas
            para dejar las hojas de cálculo y los procesos manuales atrás.
          </p>
        </Reveal>

        <Reveal delay={150} as="dl" className="flex flex-col gap-6">
          {FACTS.map((f, i) => (
            <div
              key={f.label}
              className="border-t border-ink/10 pt-6 first:border-t-0 first:pt-0"
            >
              <dt className="text-xs tracking-wide text-ink/45">{f.label.toUpperCase()}</dt>
              <dd className="mt-2 text-lg font-medium">{f.value}</dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
