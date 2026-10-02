import { useState } from "react";
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
import Reveal from "./Reveal";

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
  const [hovered, setHovered] = useState(null);

  return (
    <section id="stack" className="border-t border-line bg-ink px-6 py-24 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-14 max-w-xl">
          <p className="mb-5 text-xs tracking-wide text-gold">STACK TECNOLÓGICO</p>
          <h2 className="text-3xl leading-tight tracking-tight md:text-4xl">
            Herramientas probadas, conectadas entre sí.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-paper/60">
            Elegimos tecnología madura y la integramos como un solo sistema,
            no como piezas sueltas.
          </p>
        </Reveal>

        <Reveal delay={150} className="mx-auto w-full max-w-3xl">
        <div className="relative w-full" style={{ aspectRatio: `${W} / ${H}` }}>
          <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full">
            {/* hub */}
            <circle
              cx={CX}
              cy={CY}
              r="34"
              fill="none"
              stroke={hovered !== null ? "var(--color-gold)" : "var(--color-gold-line)"}
              strokeWidth="1.4"
              style={{ transition: "stroke 0.3s" }}
            />
            <text
              x={CX}
              y={CY + 4}
              textAnchor="middle"
              fontSize="11"
              fill="var(--color-paper)"
              opacity="0.85"
            >
              PalacioTECH
            </text>

            {/* spokes: hub -> node */}
            {TECHS.map((t, i) => (
              <line
                key={`spoke-${t.name}`}
                x1={CX}
                y1={CY}
                x2={t.x}
                y2={t.y}
                stroke={hovered === i ? "var(--color-gold)" : "var(--color-gold-line)"}
                strokeWidth={hovered === i ? 1.6 : 1}
                style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
              />
            ))}

            {/* ring: node -> next node */}
            {TECHS.map((t, i) => {
              const next = TECHS[(i + 1) % TECHS.length];
              const active = hovered === i || hovered === (i + 1) % TECHS.length;
              return (
                <line
                  key={`ring-${t.name}`}
                  x1={t.x}
                  y1={t.y}
                  x2={next.x}
                  y2={next.y}
                  stroke={active ? "var(--color-gold)" : "var(--color-line)"}
                  strokeWidth={active ? 1.4 : 1}
                  style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
                />
              );
            })}

            {/* node circles */}
            {TECHS.map((t, i) => (
              <circle
                key={`node-${t.name}`}
                cx={t.x}
                cy={t.y}
                r="30"
                fill="var(--color-ink)"
                stroke={hovered === i ? "var(--color-gold)" : "var(--color-line-strong)"}
                strokeWidth={hovered === i ? 1.8 : 1.4}
                style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
              />
            ))}
          </svg>

          {/* icon + label overlay, positioned to match the SVG nodes */}
          {TECHS.map((t, i) => (
            <div
              key={`label-${t.name}`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="absolute flex flex-col items-center gap-2 text-paper transition-transform duration-300"
              style={{
                left: `${(t.x / W) * 100}%`,
                top: `${(t.y / H) * 100}%`,
                transform: `translate(-50%, -50%) scale(${hovered === i ? 1.12 : 1})`,
                color: hovered === i ? "var(--color-gold)" : undefined,
              }}
            >
              <t.Glyph />
              <span className="whitespace-nowrap text-[11px] text-paper/70">{t.name}</span>
            </div>
          ))}
        </div>
        </Reveal>
      </div>
    </section>
  );
}
