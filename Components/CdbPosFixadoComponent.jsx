"use client"

import { useEffect, useReducer } from "react";
import InputField from "./InputField";
import { initialState, cdbPosFixadoReducer } from "../src/app/reducers/cdbPosFixadoReducer";
import ResultadoCdb from "./ResultadoCdb";
import ResultadoCdbGrafico from "./ResultadoCdbGrafico";

export default function CdbPosFixadoComponent({ taxaCdi }) {
  const [state, dispatch] = useReducer(cdbPosFixadoReducer, {
    ...initialState,
    taxaJurosAnual: parseFloat(taxaCdi.valor)
  });

  useEffect(() => {
    dispatch({ type: "SET_TAXA_JUROS_ANUAL", payload: parseFloat(taxaCdi.valor) });
  }, [taxaCdi])

  return (
    <>
      <p>Valor do CDI considerado {taxaCdi.valor}%</p>
      <InputField label={"Capital inicial"} value={state.capital} onChange={e => dispatch({ type: "SET_CAPITAL", payload: parseFloat(e.target.value) })} prefix={"R$"} />
      <InputField label={"Aportes mensais"} value={state.valorAporteMensal} onChange={e => dispatch({ type: "SET_VALOR_APORTE_MENSAL", payload: parseFloat(e.target.value) })} prefix={"R$"} />
      <InputField label={"Porcentagem em CDI"} value={state.porcentagemCdi} onChange={e => dispatch({ type: "SET_PORCENTAGEM_CDI", payload: parseFloat(e.target.value) })} suffix={"CDI"} />
      <InputField label={"Período"} value={state.periodo} onChange={e => dispatch({ type: "SET_PERIODO", payload: parseFloat(e.target.value) })} suffix={"meses"} />

      <br />

      <div className="d-flex justify-content-center">
        <button className="btn btn-success col-6" onClick={() => dispatch({ type: "CALCULAR_RESULTADO" })}>Calcular</button>
      </div>

      <br />

      {state.resultado > 0 && (
        <div>
          <ResultadoCdbGrafico totalInvestido={state.totalInvestido} juros={state.juros} imposto={state.imposto} />
          <br />
          <ResultadoCdb capital={state.capital} valorAporteMensal={state.valorAporteMensal} periodo={state.periodo} resultado={state.resultado} />
        </div>
      )}
    </>
  );
}