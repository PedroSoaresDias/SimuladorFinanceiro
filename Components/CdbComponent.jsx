'use client'

import { useState } from "react"
import CdbPreFixadoComponent from "./CdbPreFixadoComponent";
import CdbPosFixadoComponent from "./CdbPosFixadoComponent";

export default function CdbComponent({ taxaCdi }) {
  const [showCdbPreFixado, setShowCbdPreFixado] = useState(true);

  const toggleToCdbPreFixada = () => {
    setShowCbdPreFixado(true);
  }

  const toggleToCdbPosFixada = () => {
    setShowCbdPreFixado(false);
  }

  return (
    <section className="simulador">
      <div className="container">
        <h2 className="text-center text-dark">
          Calculadora de CDB
        </h2>
        <br />
        <div className="button-group">
          <button
            className={showCdbPreFixado ? 'active' : ''}
            onClick={toggleToCdbPreFixada}
          >
            Pré Fixado
          </button>
          <button
            className={!showCdbPreFixado ? 'active' : ''}
            onClick={toggleToCdbPosFixada}
          >
            Pós Fixado
          </button>
        </div>

        {showCdbPreFixado ? <CdbPreFixadoComponent /> : <CdbPosFixadoComponent taxaCdi={taxaCdi} />}
      </div>
    </section >
  );
}