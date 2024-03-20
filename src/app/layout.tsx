import type { Metadata } from "next";
import { Grenze_Gotisch } from "next/font/google";
import "./globals.scss";
import { Footer } from "@/components/molecules/footer";

const GrenzeGotisch = Grenze_Gotisch({
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
      <body className={GrenzeGotisch.className}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
