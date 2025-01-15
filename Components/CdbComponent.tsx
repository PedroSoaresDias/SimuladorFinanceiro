'use client'

import React, { useState } from "react"
import CdbPreFixadoComponent from "./CdbPreFixadoComponent";
import CdbPosFixadoComponent from "./CdbPosFixadoComponent";
import "../src/app/css/button.css";

export default function CdbComponent({ taxaCdi }) {
  const [showCdbPreFixado, setShowCbdPreFixado] = useState(true);

  const toggleToCdbPreFixada = () => {
    setShowCbdPreFixado(true);
  }

  const toggleToCdbPosFixada = () => {
    setShowCbdPreFixado(false);
  }

  return (
    <>
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
    </>
  );
}