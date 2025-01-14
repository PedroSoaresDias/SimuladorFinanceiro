"use client"

import React, { useReducer, ChangeEvent } from "react";
import InputField from "../../../Components/InputField";
import { initialState, financiamentoSacReducer, Action } from "../reducers/financiamentoSacReducer";
import { formatCurrency } from "../utils/financialCalculation";

export default function Financiamento() {
  const [state, dispatch] = useReducer(financiamentoSacReducer, initialState);

  const handleChange = (type: Action["type"]) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch({ type, payload: value });
  };

  return (
    <section className="simulador">
      <div className="container text-dark">
        <h2 className="text-center">Financiamento SAC</h2>

        <br />

        <InputField
          label="Valor do empréstimo"
          value={state.emprestimo}
          onChange={handleChange("SET_EMPRESTIMO")}
          prefix="R$"
          forId="valor-financiamento-sac"
        />
        <InputField
          label="Taxa de juros"
          value={state.taxaJurosAnual}
          onChange={handleChange("SET_TAXA_JUROS_ANUAL")}
          suffix="% ao ano"
          forId="taxa-juros-financiamento-sac"
        />
        <InputField
          label="Prazo de Pagamento"
          value={state.prazoPagamento}
          onChange={handleChange("SET_PRAZO_PAGAMENTO")}
          suffix="meses"
          forId="prazo-financiamento-sac"
        />

        <br />

        <div className="d-flex justify-content-center">
          <button className="btn btn-success col-6" onClick={() => dispatch({ type: "CALCULAR_PARCELAS" })}>Calcular</button>
        </div>

        <br />
        {state.valorParcela.length > 0 && (
          <div className="text-center text-dark">
            <h4>Parcelas:</h4>
            <div className="table-responsive my-3">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Nº de parcelas</th>
                    <th>Valor da parcela</th>
                  </tr>
                </thead>
                <tbody>
                  {state.valorParcela.map((parcela, index) => (
                    <tr key={index}>
                      <td>{index + 1}ª Parcela</td>
                      <td>{formatCurrency(parcela)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p>Valor total: {formatCurrency(state.totalParcelas)}</p>
            </div>
          </div>
        )}
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
