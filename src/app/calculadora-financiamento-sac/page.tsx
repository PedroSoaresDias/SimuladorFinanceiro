import React, { lazy } from "react";
import "../css/simulador.css";
import "../css/simulador-aviso.css";

const FinanciamentoSacComponent = lazy(() => import("../../../Components/FinanciamentoSacComponent"))

export default function FinanciamentoSac() {
  return (
    <section className="simulador">
      <div className="container text-dark">
        <h2 className="text-center">Financiamento SAC</h2>
        <br />
        <FinanciamentoSacComponent />
        <br />
        <div className="row">
          <div className="col">
            <div className="card aviso">
              <div className="card-body">
                <p><strong>Aviso:</strong> A simulação do financiamento SAC, foi desenvolvida para calcular esse tipo de financiamento da forma mais precisa possível, é recomendado consultar o gerente do banco ou da instituição financeira de sua confiança para que possa orientar sobre o financiamento.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
