export default function Contact() {
  return (
    <section id="contacto" className="border-t border-line bg-ink px-6 py-28 md:px-10">
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 text-xs tracking-wide text-muted">HABLEMOS</p>
        <h2 className="max-w-2xl text-4xl leading-tight tracking-tight md:text-5xl">
          Contanos qué proceso quieres hacer funcionar.
        </h2>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed text-paper/60">
          Escribinos y coordinamos una primera llamada de 20 minutos, sin
          costo, para entender tu operación.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="mailto:hola@palaciotech.com"
            className="inline-flex items-center gap-2 bg-paper px-6 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-85"
          >
            Escribir un correo ↗
          </a>
          <a
            href="https://wa.me/"
            className="inline-flex items-center gap-2 border border-line-strong px-6 py-3 text-sm text-paper transition-colors hover:border-paper"
          >
            Escribir por WhatsApp ↗
          </a>
        </div>
      </div>
    </section>
  );
}
