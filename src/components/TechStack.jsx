import {
  ReactGlyph,
  NodeGlyph,
  TypeScriptGlyph,
  TailwindGlyph,
  ViteGlyph,
  PostgresGlyph,
  DockerGlyph,
  VercelGlyph,
} from "./techIcons";

const W = 800;
const H = 560;
const CX = W / 2;
const CY = H / 2;
const R = 210;

const TECHS = [
  { name: "React", Glyph: ReactGlyph },
  { name: "Vite", Glyph: ViteGlyph },
  { name: "TypeScript", Glyph: TypeScriptGlyph },
  { name: "Tailwind CSS", Glyph: TailwindGlyph },
  { name: "Node.js", Glyph: NodeGlyph },
  { name: "PostgreSQL", Glyph: PostgresGlyph },
  { name: "Docker", Glyph: DockerGlyph },
  { name: "Vercel", Glyph: VercelGlyph },
].map((t, i, arr) => {
  const angle = (i / arr.length) * Math.PI * 2 - Math.PI / 2;
  return { ...t, x: CX + R * Math.cos(angle), y: CY + R * Math.sin(angle) };
});

export default function TechStack() {
  return (
    <section id="stack" className="border-t border-line bg-ink px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-xl">
          <p className="mb-5 text-xs tracking-wide text-muted">STACK TECNOLÓGICO</p>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl">
            Herramientas probadas, conectadas entre sí.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-paper/60">
            Elegimos tecnología madura y la integramos como un solo sistema,
            no como piezas sueltas.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-3xl">
          <svg viewBox={`0 0 ${W} ${H}`} className="w-full">
            {/* hub */}
            <circle cx={CX} cy={CY} r="34" fill="none" stroke="var(--color-line-strong)" strokeWidth="1.4" />
            <text
              x={CX}
              y={CY + 4}
              textAnchor="middle"
              fontSize="11"
              fill="var(--color-paper)"
              opacity="0.8"
            >
              PalacioTECH
            </text>

            {/* spokes: hub -> node */}
            {TECHS.map((t) => (
              <line
                key={`spoke-${t.name}`}
                x1={CX}
                y1={CY}
                x2={t.x}
                y2={t.y}
                stroke="var(--color-line-strong)"
                strokeWidth="1"
              />
            ))}

            {/* ring: node -> next node */}
            {TECHS.map((t, i) => {
              const next = TECHS[(i + 1) % TECHS.length];
              return (
                <line
                  key={`ring-${t.name}`}
                  x1={t.x}
                  y1={t.y}
                  x2={next.x}
                  y2={next.y}
                  stroke="var(--color-line)"
                  strokeWidth="1"
                />
              );
            })}

            {/* node circles */}
            {TECHS.map((t) => (
              <circle
                key={`node-${t.name}`}
                cx={t.x}
                cy={t.y}
                r="30"
                fill="var(--color-ink)"
                stroke="var(--color-line-strong)"
                strokeWidth="1.4"
              />
            ))}
          </svg>

          {/* icon + label overlay, positioned to match the SVG nodes */}
          {TECHS.map((t) => (
            <div
              key={`label-${t.name}`}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 text-paper"
              style={{ left: `${(t.x / W) * 100}%`, top: `${(t.y / H) * 100}%` }}
            >
              <t.Glyph />
              <span className="whitespace-nowrap text-[11px] text-paper/70">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
