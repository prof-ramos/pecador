import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  title: "Wrapped dos Pecados 2025 | Descubra seus pecados do ano",
  description: "Faça uma autoavaliação anônima dos seus pecados em 2025. Descubra seu nível de santidade e compartilhe com o mundo! 100% anônimo e divertido.",
  keywords: ["wrapped", "pecados", "2025", "viral", "ano novo", "autoavaliação", "anônimo"],
  authors: [{ name: "Gabriel Ramos" }],
  openGraph: {
    title: "Wrapped dos Pecados 2025",
    description: "Descubra seus pecados do ano de forma anônima e divertida!",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wrapped dos Pecados 2025 - Confissão Anônima",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wrapped dos Pecados 2025",
    description: "Descubra seus pecados do ano de forma anônima e divertida!",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
