import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Agustín Sasson - Músico, Productor, DJ",
  description: "Agustín Sasson es músico, productor, ingeniero de mezcla y DJ argentino, actualmente radicado en España. Con más de 10 años en la industria musical.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
