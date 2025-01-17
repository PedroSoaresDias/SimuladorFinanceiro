'use client'

import React, { useState, lazy } from "react"
import "../src/app/css/button.css";

const LciLcaPosFixadoComponent = lazy(() => import("./LciLcaPosFixadoComponent"));
const LciLcaPreFixadoComponent = lazy(() => import("./LciLcaPreFixadoComponent"));

export default function LciLcaComponent({ taxaCdi }) {
  const [showLciLcaPreFixado, setShowLciLcaPreFixado] = useState(true);

  const toggleToLciLcaPreFixada = () => {
    setShowLciLcaPreFixado(true);
  }

  const toggleToLciLcaPosFixada = () => {
    setShowLciLcaPreFixado(false);
  }

  return (
    <>
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
    </>
  );
}