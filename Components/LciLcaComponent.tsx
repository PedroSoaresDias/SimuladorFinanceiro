'use client'

import React, { useState } from "react"
import LciLcaPreFixadoComponent from "./LciLcaPreFixadoComponent";
import LciLcaPosFixadoComponent from "./LciLcaPosFixadoComponent";
import "../src/app/css/button.css";

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