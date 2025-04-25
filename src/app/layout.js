import "./globals.css";
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";

export const metadata = {
  title: "Riorep – Repuestos y Accesorios",
  description: "Venta de repuestos, autopartes y accesorios para Toyota y Chevrolet",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="min-h-screen w-full">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

