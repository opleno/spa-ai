import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spanish Public Academy",
  description: "EFAC XYZ es una academia en la que tú das la clase. Con esta filosofía, ayudas a alumnos y alumnas que han pasado por los mismos problemas y a la vez cambias tu rol pasivo, el predominante en las clases típicas. Te conviertes así en una alumna o un alumno activa/o y comienzas a ver que el conocimiento no está solo en los libros de texto, sino que puedes aprender mucho más sobre lo que te apasiona ahí fuera. Te conviertes también en una referencia para la gente a tu alrededor, y a la vez valoras a las personas que te enseñan sobre un tema que te interesa (desde un idioma hasta los trucos de tu videojuego favorito) 🚀",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen py-8">{children}</main>
      </body>
    </html>
  );
} 