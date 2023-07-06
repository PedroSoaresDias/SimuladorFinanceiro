import Head from 'next/head'
import Inicio from '../../Components/Inicio'

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Faça uma simulação de investimento como Juros Simples e Compostos, e financiamento tipo SAC" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Inicio />
    </>
  )
}
