import React from "react";
import LciLcaComponent from "../../../Components/LciLcaComponent";
import "../css/simulador.css";
import { getTaxaSelic } from "../services/data";

export default async function LciLca() {
  const taxaCdi = await getTaxaSelic();

  return (
    <section className="simulador">
      <div className="container">
        <h2 className="text-center text-dark">
          Calculadora de LCI e LCA
        </h2>
        <br />
        <LciLcaComponent taxaCdi={taxaCdi}/>
        {/* <div className="button-group">
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

        {showLciLcaPreFixado ? <LciLcaPreFixadoComponent /> : <LciLcaPosFixadoComponent taxaCdi={taxaCdi} />} */}
      </div>
    </section >
  );
}