import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const LINKS = [
  { label: "Servicios", href: "#servicios" },
  { label: "Cómo trabajamos", href: "#proceso" },
  { label: "Conócenos", href: "#nosotros" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "bg-ink/85 backdrop-blur-md border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" onClick={() => setOpen(false)} className="flex items-center">
          <img src={logo} alt="PalacioTECH" className="h-9 w-auto md:h-10" />
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="link-underline text-sm text-paper/75 transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center bg-gold px-5 py-2 text-sm font-medium text-ink transition-transform duration-300 hover:scale-[1.04] hover:shadow-[0_0_24px_var(--color-gold-soft)]"
        >
          Hablemos
        </a>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-paper"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-8 pt-2">
          {LINKS.map((link, i) => (
            <li
              key={link.href}
              className={`border-t border-line py-4 transition-all duration-500 ${
                open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
              style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
            >
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg text-paper/90 hover:text-paper"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li
            className={`pt-5 transition-all duration-500 ${
              open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
            }`}
            style={{ transitionDelay: open ? `${LINKS.length * 60}ms` : "0ms" }}
          >
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="inline-flex items-center bg-gold px-5 py-2 text-sm font-medium text-ink"
            >
              Hablemos
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
