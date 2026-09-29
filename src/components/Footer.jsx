export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink px-6 py-8 md:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-muted md:flex-row">
        <span>PalacioTECH © {new Date().getFullYear()}</span>
        <span>Santa Marta, Colombia</span>
        <span>Hecho con mucho 💙 by <a href="https://infojesuspalacio.vercel.app/" className="text-gold hover:underline" target="_blank" rel="noopener noreferrer">Jesús Palacio</a></span>
      </div>
    </footer>
  );
}
