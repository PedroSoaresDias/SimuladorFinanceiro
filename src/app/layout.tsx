import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/globals.css";
import { Inter } from "next/font/google";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import BootstrapClient from "../../Components/BootstrapClient";
import { Metadata } from "next";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Simulador Financeiro",
  description: "Faça uma simulação de Juros Simples e Compostos, e financiamento tipo SAC"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
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