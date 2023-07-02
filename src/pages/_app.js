import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import { useEffect } from "react";
import Head from "next/head";
import Layout from "../../Components/Layout";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Head>
        <title>Simulador Financeiro</title>
        <meta name="description" content="Faça uma simulação de investimento como Juros Simples e Compostos, e financiamento tipo SAC" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
