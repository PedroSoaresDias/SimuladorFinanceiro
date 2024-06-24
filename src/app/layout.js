import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import BootstrapClient from "../../Components/BootstrapClient";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "Simulador Financeiro",
  description: "Faça uma simulação de Juros Simples e Compostos, e financiamento tipo SAC"
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  )
}