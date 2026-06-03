import Image from "next/image";

const whatsappUrl =
  "https://wa.me/543794399803?text=Hola%20Tito%20Agencia%20de%20IA%2C%20quiero%20consultar%20por%20un%20servicio";

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Ir al inicio">
        <span className="brand-mark">
          <Image src="/tito-logo-square.png" alt="" fill sizes="48px" />
        </span>
        <span>Tito Agencia de IA</span>
      </a>

      <nav className="nav-links" aria-label="Navegación principal">
        <a href="#servicios">Servicios</a>
        <a href="#publico">Para quién es</a>
        <a href="#proceso">Proceso</a>
        <a href="#beneficios">Beneficios</a>
      </nav>

      <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">
        WhatsApp
      </a>
    </header>
  );
}
