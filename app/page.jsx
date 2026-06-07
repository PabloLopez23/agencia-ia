import Image from "next/image";
import Header from "../components/Header";
import SectionHeader from "../components/SectionHeader";

const whatsappUrl =
  "https://wa.me/543794399803?text=Hola%20Tito%20Agencia%20de%20IA%2C%20quiero%20consultar%20por%20un%20servicio";
const whatsappDisplay = "+54 9 3794 39-9803";
const emailAddress = "titoagenciaia@gmail.com";
const facebookUrl = "https://www.facebook.com/profile.php?id=61590271606870";
const instagramUrl = "https://www.instagram.com/titoagenciaia/";

const contactLinks = [
  {
    label: "Facebook",
    href: facebookUrl,
    icon: "facebook",
    external: true
  },
  {
    label: "Instagram",
    href: instagramUrl,
    icon: "instagram",
    external: true
  },
  {
    label: whatsappDisplay,
    href: whatsappUrl,
    icon: "whatsapp",
    external: true,
    ariaLabel: `WhatsApp ${whatsappDisplay}`
  },
  {
    label: emailAddress,
    href: `mailto:${emailAddress}`,
    icon: "gmail",
    ariaLabel: `Gmail ${emailAddress}`
  }
];

const services = [
  {
    title: "Landing pages modernas",
    text: "Páginas rápidas, claras y listas para convertir visitas en consultas reales.",
    accent: "cyan"
  },
  {
    title: "Bots para WhatsApp e Instagram",
    text: "Respuestas iniciales, derivaciones y flujos simples para atender mejor.",
    accent: "violet"
  },
  {
    title: "Automatizaciones para negocios",
    text: "Procesos repetitivos más ordenados para ahorrar tiempo todos los días.",
    accent: "magenta"
  },
  {
    title: "Contenido con IA",
    text: "Edición, ideas, piezas visuales y textos para redes, campañas y ventas.",
    accent: "yellow"
  },
  {
    title: "Diseño web profesional",
    text: "Sitios prolijos y confiables sin presupuestos enormes ni meses de espera.",
    accent: "cyan"
  },
  {
    title: "Sistemas simples y soporte",
    text: "Formularios, soluciones a medida y acompañamiento digital para avanzar.",
    accent: "violet"
  }
];

const audiences = [
  "Emprendedores",
  "Comercios",
  "Profesionales",
  "Inmobiliarias",
  "Pymes",
  "Restaurantes",
  "Negocios locales",
  "Marcas en crecimiento"
];

const steps = [
  {
    title: "Consultamos tu necesidad",
    text: "Entendemos qué vendés, qué problema querés resolver y qué resultado necesitás."
  },
  {
    title: "Creamos una solucion rapida",
    text: "Armamos una primera versión funcional, clara y enfocada en el uso real."
  },
  {
    title: "La probas y la ajustamos",
    text: "Revisamos juntos, corregimos lo necesario y dejamos todo listo para usar."
  }
];

const benefits = [
  "Entrega rápida",
  "Precios accesibles",
  "Soluciones simples",
  "Diseño profesional",
  "IA aplicada a negocios reales"
];

function ContactIcon({ name }) {
  if (name === "facebook") {
    return (
      <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12Z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3.7" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.4" cy="6.6" r="1.2" />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M12.1 2C6.6 2 2.2 6.4 2.2 11.8c0 1.8.5 3.5 1.4 5L2 22l5.3-1.4c1.4.8 3.1 1.2 4.8 1.2 5.5 0 9.9-4.4 9.9-9.9S17.6 2 12.1 2Zm5.8 14c-.2.6-1.1 1.1-1.6 1.2-.4.1-.9.2-3-.7-2.5-1-4.1-3.6-4.2-3.8-.1-.2-1-1.3-1-2.5s.6-1.8.9-2c.2-.2.5-.3.8-.3h.6c.2 0 .4 0 .6.5.2.5.8 1.9.8 2.1.1.2.1.4 0 .6-.1.2-.2.3-.4.5l-.5.6c-.2.2-.3.4-.1.7.2.3.8 1.3 1.7 2.1 1.2 1.1 2.2 1.4 2.5 1.6.3.1.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.3.7-.2.3.1 1.8.9 2.1 1 .3.2.5.3.6.4.1.2.1.8-.1 1.4Z" />
      </svg>
    );
  }

  return (
    <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4.5 6h15A2.5 2.5 0 0 1 22 8.5v7A2.5 2.5 0 0 1 19.5 18h-15A2.5 2.5 0 0 1 2 15.5v-7A2.5 2.5 0 0 1 4.5 6Zm.2 2 7.3 5 7.3-5H4.7Zm15.3 2.2-7.4 5.1a1 1 0 0 1-1.2 0L4 10.2v5.3c0 .3.2.5.5.5h15c.3 0 .5-.2.5-.5v-5.3Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" id="inicio">
          <Image
            className="hero-bg-image"
            src="/tito-space-bg.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
          <div className="hero-inner section-shell">
            <div className="hero-copy">
            <p className="eyebrow">Agencia digital con IA aplicada</p>
            <h1>Soluciones digitales con IA para hacer crecer tu negocio</h1>
            <p className="hero-subtitle">
              Creamos landing pages, bots, automatizaciones y contenido con IA para
              emprendedores, comercios y pymes que quieren vender más sin gastar una
              fortuna.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                Hablar por WhatsApp
              </a>
              <a className="btn btn-secondary" href="#servicios">
                Ver servicios
              </a>
            </div>
            <div className="hero-stats" aria-label="Puntos fuertes">
              <span>IA practica</span>
              <span>Diseño premium</span>
              <span>Soluciones simples</span>
            </div>
            </div>
          </div>
        </section>

        <section className="section-shell" id="servicios">
          <SectionHeader
            eyebrow="Servicios"
            title="Soluciones digitales para empezar rápido y verse profesional"
          >
            Elegimos herramientas prácticas, las adaptamos a tu negocio y priorizamos
            que puedas usarlas sin complicarte.
          </SectionHeader>

          <div className="cards-grid">
            {services.map((service) => (
              <article className={`service-card accent-${service.accent}`} key={service.title}>
                <div className="card-signal" />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell audience-section" id="publico">
          <SectionHeader eyebrow="Para quién es" title="Pensada para negocios que quieren moverse mejor">
            Una landing provisoria, un bot simple o una automatización puntual pueden
            ordenar mucho sin convertir tu negocio en un proyecto eterno.
          </SectionHeader>

          <div className="audience-grid">
            {audiences.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </section>

        <section className="section-shell process-section" id="proceso">
          <SectionHeader eyebrow="Cómo trabajamos" title="Tres pasos claros, sin vueltas">
            Bajamos la idea a algo concreto, lo construimos y lo ajustamos con feedback real.
          </SectionHeader>

          <div className="steps">
            {steps.map((step, index) => (
              <article className="step-card" key={step.title}>
                <span className="step-number">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell benefits-section" id="beneficios">
          <SectionHeader eyebrow="Beneficios" title="Tecnología útil, precio razonable y buen criterio visual" />

          <div className="benefits-list">
            {benefits.map((benefit) => (
              <div className="benefit-item" key={benefit}>
                <span className="benefit-dot" />
                {benefit}
              </div>
            ))}
          </div>
        </section>

        <section className="section-shell final-cta" id="contacto">
          <div>
            <p className="eyebrow">Empecemos por algo simple</p>
            <h2>Contame qué querés mejorar y vemos una solución rápida con IA.</h2>
          </div>
          <a className="btn btn-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Hablar por WhatsApp
          </a>
        </section>
      </main>

      <footer className="footer">
        <strong>Tito Agencia de IA</strong>
        <div className="contact-links" aria-label="Contacto y redes sociales">
          {contactLinks.map((item) => (
            <a
              className={`contact-link contact-link-${item.icon}`}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              aria-label={item.ariaLabel ?? item.label}
              key={item.label}
            >
              <ContactIcon name={item.icon} />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
