import Reveal from "./Reveal";
import entenderImg from "../assets/proceso-entender.jpg";
import ordenarImg from "../assets/proceso-ordenar.png";
import construirImg from "../assets/proceso-construir.png";

const ITEMS = [
  {
    n: "Paso 1",
    title: "Entender",
    text: "Ponemos nombre a los cuellos de botella y a las oportunidades que ya existen.",
    image: entenderImg,
    alt: "Diagrama del flujo entre cliente, API gateway, base de datos y servidor de aplicación",
  },
  {
    n: "Paso 2",
    title: "Ordenar",
    text: "Definimos una primera versión útil, con alcance claro y decisiones que sí se pueden sostener.",
    image: ordenarImg,
    alt: "Cuadrícula editorial con bloques de imagen y texto ordenados",
  },
  {
    n: "Paso 3",
    title: "Construir",
    text: "Diseñamos y desarrollamos la solución con tus procesos, datos y personas en el centro.",
    image: construirImg,
    alt: "Pantalla con código y un modelo 3D en construcción",
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
          {ITEMS.map(({ n, title, text, image, alt }, i) => (
            <Reveal as="li" key={n} delay={i * 100}>
              <div className="flex flex-col gap-5 border-t border-ink/10 py-7 last:border-b md:flex-row md:items-center md:gap-8">
                <div className="flex items-baseline gap-6 md:w-[210px] md:flex-shrink-0">
                  <span className="text-sm font-medium text-[#b9812a]">{n}</span>
                  <h3 className="text-xl font-semibold">{title}</h3>
                </div>

                <p className="flex-1 text-sm leading-relaxed text-ink/60">
                  {text}
                </p>

                <img
                  src={image}
                  alt={alt}
                  className="h-32 w-full border border-ink/10 object-cover md:h-20 md:w-44 md:flex-shrink-0"
                />
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
