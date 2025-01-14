"use client"

import React, { useState, useEffect } from "react";
import { getTaxaSelic } from "../services/data";
import LciLcaPreFixadoComponent from "../../../Components/LciLcaPreFixadoComponent";
import LciLcaPosFixadoComponent from "../../../Components/LciLcaPosFixadoComponent";

export default function LciLca() {
  const [showLciLcaPreFixado, setShowLciLcaPreFixado] = useState(true);
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