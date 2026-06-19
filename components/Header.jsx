import Image from "next/image";
import { siteConfig } from "../lib/site";

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Ir al inicio">
        <span className="brand-mark">
          <Image src="/tito-logo-square.webp" alt="" fill sizes="48px" />
        </span>
        <span>Tito Agencia de IA</span>
      </a>

      <nav className="nav-links" aria-label="Navegación principal">
        <a href="#servicios">Servicios</a>
        <a href="#publico">Para quién es</a>
        <a href="#proceso">Proceso</a>
        <a href="#beneficios">Beneficios</a>
      </nav>

      <a className="header-cta" href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">
        WhatsApp
      </a>
    </header>
  );
}
