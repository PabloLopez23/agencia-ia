import Image from "next/image";
import Header from "../components/Header";
import SectionHeader from "../components/SectionHeader";

const whatsappUrl =
  "https://wa.me/543794399803?text=Hola%20Tito%20Agencia%20de%20IA%2C%20quiero%20consultar%20por%20un%20servicio";

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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero section-shell" id="inicio">
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

          <div className="hero-visual" aria-hidden="true">
            <Image
              src="/tito-ai-hero.png"
              alt=""
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <div className="visual-logo-card">
              <Image
                src="/tito-logo-square.png"
                alt="Tito Agencia de IA"
                width={616}
                height={616}
              />
            </div>
            <div className="floating-panel panel-one">
              <span>Bot IA</span>
              <strong>24/7</strong>
            </div>
            <div className="floating-panel panel-two">
              <span>Landing</span>
              <strong>Lista para vender</strong>
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
        <a href="mailto:pabloexelopezh@gmail.com">pabloexelopezh@gmail.com</a>
        <span>WhatsApp: 3794399803</span>
      </footer>
    </>
  );
}
