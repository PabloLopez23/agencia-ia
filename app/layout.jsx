import "./globals.css";

export const metadata = {
  title: "Tito Agencia de IA",
  description:
    "Landing pages, bots, automatizaciones y contenido con IA para emprendedores, comercios y pymes."
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
