"use client"

import { useEffect, useReducer } from "react";
import InputField from "./InputField";
import ResultadoJurosCompostos from "./ResultadoJurosCompostos";
import { initialState, cdbReducer } from "@/app/reducers/cdbReducer";
import ResultadoCdb from "./ResultadoCdb";

export default function CdbComponent({ taxaCdi }) {
  const [state, dispatch] = useReducer(cdbReducer, {
    ...initialState,
    taxaJurosAnual: parseFloat(taxaCdi.valor)
  });

  useEffect(() => {
    dispatch({ type: "SET_TAXA_JUROS_ANUAL", payload: parseFloat(taxaCdi.valor) });
  }, [taxaCdi])

  return (
    <section className="composto">
      <div className="container">
        <h2 className="text-center text-dark">
          Calculadora de CDB
        </h2>
        <br />
        <p>Valor do CDI considerado {taxaCdi.valor}%</p>
        <br />
        <InputField label={"Capital inicial"} value={state.capital} onChange={e => dispatch({ type: "SET_CAPITAL", payload: parseFloat(e.target.value) })} prefix={"R$"} />
        <InputField label={"Aportes mensais"} value={state.valorAporteMensal} onChange={e => dispatch({ type: "SET_VALOR_APORTE_MENSAL", payload: parseFloat(e.target.value) })} prefix={"R$"} />
        <InputField label={"Taxa de Juros"} value={state.porcentagemCdi} onChange={e => dispatch({ type: "SET_PORCENTAGEM_CDI", payload: parseFloat(e.target.value) })} suffix={"CDI"} />
        <InputField label={"Período"} value={state.periodo} onChange={e => dispatch({ type: "SET_PERIODO", payload: parseFloat(e.target.value) })} suffix={"meses"} />

        <br />

        <div className="d-flex justify-content-center">
          <button className="btn btn-success col-6" onClick={() => dispatch({ type: "CALCULAR_RESULTADO" })}>Calcular</button>
        </div>

        <br />

        {state.resultado > 0 && (
          <div>
            <ResultadoCdb totalInvestido={state.totalInvestido} juros={state.juros} />
            <br />
            <ResultadoJurosCompostos capital={state.capital} valorAporteMensal={state.valorAporteMensal} periodo={state.periodo} resultado={state.resultado} />
          </div>
        )}
      </div>
    </section >
  );
}