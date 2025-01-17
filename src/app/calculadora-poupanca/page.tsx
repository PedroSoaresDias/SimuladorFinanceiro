import React, { lazy } from 'react';
import { getTaxaSelic } from '../services/data';
import "../css/simulador.css"

const PoupancaComponent = lazy(() => import("../../../Components/PoupancaComponent"))

export default async function page() {
  const taxaCdi = await getTaxaSelic();

  return (
    <section className="simulador">
      <div className="container">
        <h2 className="text-center text-dark">
          Calculadora de Rendimento da Poupança
        </h2>
        <br />
        <PoupancaComponent taxaCdi={taxaCdi} />
      </div>
    </section>
  )
}