import {
  InstagramIcon,
  FacebookIcon,
  WhatsappIcon,
  GithubIcon,
} from "./socialIcons";

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/jesuspalaciog/", Icon: InstagramIcon },
  { label: "Facebook", href: "https://www.facebook.com/Palaciotechsas", Icon: FacebookIcon },
  { label: "WhatsApp", href: "https://wa.me/", Icon: WhatsappIcon },
  { label: "GitHub", href: "https://github.com/Jesus-Palacio-Gonzalez", Icon: GithubIcon },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex flex-col items-center gap-1 text-xs text-muted md:items-start">
          <span>PalacioTECH © {new Date().getFullYear()}</span>
          <span>Santa Marta, Colombia</span>
        </div>

        <div className="flex items-center gap-4">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="opacity-80 transition-all duration-300 hover:scale-110 hover:opacity-100"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-line pt-6 text-center">
        <a
          href="https://infojesuspalacio.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-muted transition-colors hover:text-paper"
        >
          Hecho con <span className="text-red-500">♥</span> by Jesús Palacio
        </a>
      </div>
    </footer>
  );
}
