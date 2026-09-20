import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Experiencias en Bodega Chandon | Demo conceptual",
  description:
    "Una propuesta conceptual para descubrir visitas, degustaciones y gastronomía en la bodega Chandon de Mendoza.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    title: "Experiencias en Bodega Chandon",
    description:
      "Visitas, degustaciones y una mesa para compartir en Mendoza.",
    images: [
      {
        url: "/images/hero-mendoza.png",
        width: 1536,
        height: 1024,
        alt: "Imagen conceptual de una mesa entre viñedos en Mendoza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Experiencias en Bodega Chandon",
    description:
      "Visitas, degustaciones y una mesa para compartir en Mendoza.",
    images: ["/images/hero-mendoza.png"],
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-AR">
      <body className={`${geist.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
