import { Globe, Database, Code2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-32 pb-16 md:px-10 md:pt-40">
      {/* soft glow, single deliberate accent */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[520px] w-[520px] rounded-full border border-line-strong opacity-40 blur-[1px] md:-right-24" />

      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        {/* Copy */}
        <div>
          <h1 className="text-5xl leading-[1.05] tracking-tight md:text-7xl">
            <span className="block text-paper">Tu negocio</span>
            <span className="block text-paper">ya tiene la visión.</span>
            <span className="block font-semibold text-paper">Hagámosla</span>
            <span className="block font-semibold text-paper">funcionar.</span>
          </h1>

          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-paper/60">
            Soluciones digitales a medida para empresas en crecimiento.
            Convertimos procesos dispersos en herramientas que tu equipo
            puede usar, entender y hacer crecer.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-paper px-6 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-85"
            >
              Solicitar consulta ↗
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 border border-line-strong px-6 py-3 text-sm text-paper transition-colors hover:border-paper"
            >
              Pedir cotización ↗
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-3 text-xs text-muted">
            <span>WEB</span>
            <span className="h-1 w-1 rounded-full bg-muted" />
            <span>E-COMMERCE</span>
            <span className="h-1 w-1 rounded-full bg-muted" />
            <span>SISTEMAS</span>
          </div>
        </div>

        {/* Operation card mockup */}
        <div className="relative">
          <p className="mb-3 text-xs tracking-wide text-muted">MAPA DE OPERACIÓN</p>
          <h2 className="mb-5 text-xl text-paper">Una idea, varias conexiones.</h2>

          <div className="border border-line bg-ink/60 p-5">
            <div className="mb-5 flex items-center justify-between text-xs text-muted">
              <span>PALACIOTECH / 2024—25</span>
              <Code2 size={14} />
            </div>

            <div className="mb-4 flex items-center gap-3 bg-paper px-4 py-3 text-ink">
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
                  className="flex flex-col items-center gap-2 border border-line py-4 text-center"
                >
                  <Icon size={16} className="text-paper/70" />
                  <span className="text-xs text-paper/80">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-center justify-between border-t border-line pt-4 text-xs text-muted">
              <span>Diseño · Desarrollo · Acompañamiento</span>
              <span className="flex items-center gap-2 text-paper/70">
                <span className="h-1.5 w-1.5 rounded-full bg-paper" />
                En marcha
              </span>
            </div>
          </div>

          <p className="mt-4 text-right text-xs tracking-wide text-muted">
            DIGITAL, PERO HUMANO.
          </p>
        </div>
      </div>
    </section>
  );
}
