"use client"

import React, { useState, useEffect } from "react";
import CdbPreFixadoComponent from "../../../Components/CdbPreFixadoComponent";
import CdbPosFixadoComponent from "../../../Components/CdbPosFixadoComponent";
import { getTaxaSelic } from "../services/data";

export default function Cdb() {
  const [showCdbPreFixado, setShowCbdPreFixado] = useState(true);
  const [taxaCdi, setTaxaCdi] = useState<{ valor: string } | null>(null);
  
  useEffect(() => {
    async function fetchTaxaCdi() {
      const data = await getTaxaSelic();
      if (data) {
        setTaxaCdi(data);
      } else {
        console.error("Erro ao carregar a taxa Selic")
      }
    }

    fetchTaxaCdi();

    const intervalId = setInterval(fetchTaxaCdi, 3600 * 1000);

    return () => clearInterval(intervalId);
  }, [])

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
  )
}