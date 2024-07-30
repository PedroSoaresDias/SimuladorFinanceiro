'use client'

import React, { useState } from "react"
import LciLcaPreFixadoComponent from "./LciLcaPreFixadoComponent";
import LciLcaPosFixadoComponent from "./LciLcaPosFixadoComponent";

export default function LciLcaComponent({ taxaCdi }) {
  const [showLciLcaPreFixado, setShowLciLcaPreFixado] = useState(true);

  const toggleToLciLcaPreFixada = () => {
    setShowLciLcaPreFixado(true);
  }

  const toggleToLciLcaPosFixada = () => {
    setShowLciLcaPreFixado(false);
  }

  return (
    <section className="simulador">
      <div className="container">
        <h2 className="text-center text-dark">
          Calculadora de LCI e LCA
        </h2>
        <br />
        <div className="button-group">
          <button
            className={showLciLcaPreFixado ? 'active' : ''}
            onClick={toggleToLciLcaPreFixada}
          >
            Pré Fixado
          </button>
          <button
            className={!showLciLcaPreFixado ? 'active' : ''}
            onClick={toggleToLciLcaPosFixada}
          >
            Pós Fixado
          </button>
        </div>

        {showLciLcaPreFixado ? <LciLcaPreFixadoComponent /> : <LciLcaPosFixadoComponent taxaCdi={taxaCdi} />}
      </div>
    </section >
  );
}