import type { Metadata } from "next";
import { Grenze_Gotisch } from "next/font/google";
import "./globals.scss";

const inter = Grenze_Gotisch({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "My Studio Tattoo",
  description:
    "Descubre una experiencia única en My Studio Tattoo, donde nuestros artistas expertos te ofrecen los mejores diseños de tatuajes personalizados y servicios de alta calidad. ¡Haz tu cita hoy mismo!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="256x256"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
