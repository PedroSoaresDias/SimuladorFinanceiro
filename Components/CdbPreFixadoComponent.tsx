"use client"

import React, { useReducer, ChangeEvent } from "react";
import { InputField } from "./InputField";
import { initialState, cdbPreFixadoReducer, State, Action } from "../src/app/reducers/cdbPreFixadoReducer";
import ResultadoCdb from "./ResultadoCdb";
import ResultadoGraficoComImposto from "./ResultadoGraficoComImposto";

export default function CdbPreFixadoComponent() {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(cdbPreFixadoReducer, initialState);

  const handleChange = (type: Action["type"]) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch({ type, payload: value });
  };

  return (
    <>
      <InputField label={"Capital inicial"} value={state.capital} onChange={handleChange("SET_CAPITAL")} prefix={"R$"} />
      <InputField label={"Aportes mensais"} value={state.valorAporteMensal} onChange={handleChange("SET_VALOR_APORTE_MENSAL")} prefix={"R$"} />
      <InputField label={"Taxa de Juros"} value={state.taxaJurosAnual} onChange={handleChange("SET_TAXA_JUROS_ANUAL")} suffix={"% ao ano"} />
      <InputField label={"Período"} value={state.periodo} onChange={handleChange("SET_PERIODO")} suffix={"meses"} />

      <br />

      <div className="d-flex justify-content-center">
        <button className="btn btn-success col-6" onClick={() => dispatch({ type: "CALCULAR_RESULTADO" })}>Calcular</button>
      </div>

      <br />

      {state.resultado > 0 && (
        <div>
          <ResultadoGraficoComImposto totalInvestido={state.totalInvestido} juros={state.juros} imposto={state.imposto} />
          <br />
          <ResultadoCdb capital={state.capital} valorAporteMensal={state.valorAporteMensal} periodo={state.periodo} resultado={state.resultado} />
        </div>
      )}
    </>
  );
}