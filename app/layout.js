import "./globals.css";

export const metadata = {
  title: "Contagem para o fim do semestre",
  description:
    "Relógio digital com contagem regressiva para o final do semestre e timeline dos trabalhos do curso.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
