import { Globe, Database, Code2 } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-32 pb-16 md:px-10 md:pt-40">

      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Copy */}
        <div>
          <h1 className="text-5xl leading-[1.05] tracking-tight md:text-7xl">
            <Reveal as="span" className="block text-paper">
              Tu negocio
            </Reveal>
            <Reveal as="span" delay={80} className="block text-paper">
              ya tiene la visión.
            </Reveal>
            <Reveal as="span" delay={160} className="block font-semibold text-gold">
              Hagámosla
            </Reveal>
            <Reveal as="span" delay={240} className="block font-semibold text-gold">
              funcionar.
            </Reveal>
          </h1>

          <Reveal delay={320}>
            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-paper/60">
              Soluciones digitales a medida para empresas en crecimiento.
              Convertimos procesos dispersos en herramientas que tu equipo
              puede usar, entender y hacer crecer.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 bg-gold px-6 py-3 text-sm font-medium text-ink transition-transform duration-300 hover:scale-[1.04] hover:shadow-[0_0_28px_var(--color-gold-soft)]"
              >
                Solicitar consulta ↗
              </a>
              <a
                href="#contacto"
                className="btn-sweep inline-flex items-center gap-2 border border-line-strong px-6 py-3 text-sm text-paper transition-colors hover:border-paper"
              >
                Pedir cotización ↗
              </a>
            </div>
          </Reveal>

          <Reveal delay={480}>
            <div className="mt-14 flex flex-wrap items-center gap-3 text-xs text-muted">
              <span>WEB</span>
              <span className="h-1 w-1 rounded-full bg-gold" />
              <span>E-COMMERCE</span>
              <span className="h-1 w-1 rounded-full bg-gold" />
              <span>SISTEMAS</span>
            </div>
          </Reveal>
        </div>

        {/* Operation card mockup */}
        <Reveal delay={200} className="relative">
          <p className="mb-3 text-xs tracking-wide text-gold">MAPA DE OPERACIÓN</p>
          <h2 className="mb-5 text-xl text-paper">Una idea, varias conexiones.</h2>

          <div className="relative">
            {/* pulse: rings radiate from behind the card, card stays on top */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0"
            >
              <span className="pulse-core" />
              <span className="pulse-ring" style={{ animationDelay: "0s" }} />
              <span className="pulse-ring" style={{ animationDelay: "1.6s" }} />
              <span className="pulse-ring" style={{ animationDelay: "3.2s" }} />
            </div>

            <div className="relative z-10 border border-line bg-ink/70 p-5 backdrop-blur-sm">
              <div className="mb-5 flex items-center justify-between text-xs text-muted">
                <span>PALACIOTECH / 2024—25</span>
                <Code2 size={14} />
              </div>

              <div className="mb-4 flex items-center gap-3 bg-gold px-4 py-3 text-ink">
                <Globe size={18} />
                <div>
                  <p className="text-sm font-medium">Tu operación</p>
                  <p className="text-xs text-ink/60">Más clara. Más ágil.</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Globe, label: "Presencia" },
                  { icon: Database, label: "Datos" },
                  { icon: Code2, label: "Producto" },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2 border border-line py-4 text-center transition-colors hover:border-gold-line"
                  >
                    <Icon size={16} className="text-paper/70" />
                    <span className="text-xs text-paper/80">{label}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-xs text-muted">
                <span>Diseño · Desarrollo · Acompañamiento</span>
                <span className="flex items-center gap-2 text-paper/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  En marcha
                </span>
              </div>
            </div>
          </div>

          <p className="mt-4 text-right text-xs tracking-wide text-muted">
            DIGITAL, PERO HUMANO.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
