export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.URL ||
  "http://localhost:3000"
).replace(/\/$/, "");

export const siteConfig = {
  name: "Tito Agencia de IA",
  description:
    "Landing pages, bots, automatizaciones y contenido con IA para emprendedores, comercios y pymes.",
  keywords: [
    "agencia de IA",
    "landing pages",
    "bots para WhatsApp",
    "automatizaciones",
    "contenido con IA",
    "diseño web",
    "negocios locales",
    "pymes"
  ],
  url: siteUrl,
  locale: "es_AR",
  whatsappDisplay: "+54 9 3794 39-9803",
  whatsappPhone: "+543794399803",
  whatsappUrl:
    "https://wa.me/543794399803?text=Hola%20Tito%20Agencia%20de%20IA%2C%20quiero%20consultar%20por%20un%20servicio",
  email: "titoagenciaia@gmail.com",
  facebookUrl: "https://www.facebook.com/profile.php?id=61590271606870",
  instagramUrl: "https://www.instagram.com/titoagenciaia/"
};
