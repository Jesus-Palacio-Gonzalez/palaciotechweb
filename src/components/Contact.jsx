import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contacto" className="border-t border-line bg-ink px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-5 text-xs tracking-wide text-gold">HABLEMOS</p>
          <h2 className="max-w-2xl text-4xl leading-tight tracking-tight md:text-5xl">
            Cuentanos qué proceso quieres hacer funcionar.
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/60">
            Escribenos y coordinamos una primera llamada de 20 minutos, sin
            costo, para entender tu operación.
          </p>
        </Reveal>

        <Reveal delay={150} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="mailto:hola@palaciotech.com"
            className="inline-flex items-center gap-2 bg-gold px-6 py-3 text-sm font-medium text-ink transition-transform duration-300 hover:scale-[1.04] hover:shadow-[0_0_28px_var(--color-gold-soft)]"
          >
            Escribir un correo ↗
          </a>
          <a
            href="https://wa.me/"
            className="btn-sweep inline-flex items-center gap-2 border border-line-strong px-6 py-3 text-sm text-paper transition-colors hover:border-paper"
          >
            Escribir por WhatsApp ↗
          </a>
        </Reveal>
      </div>
    </section>
  );
}
