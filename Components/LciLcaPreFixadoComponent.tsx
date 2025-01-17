"use client"

import React, { useReducer, ChangeEvent, lazy, useCallback, Suspense } from "react";
import { initialState, lcilcaPreFixadoReducer } from "../src/app/reducers/lcilcaPreFixadoReducer";

const InputField = lazy(() => import("./InputField"));
const ResultadoLciLca = lazy(() => import("./ResultadoLciLca"));
const ResultadoGraficoSemImposto = lazy(() => import("./ResultadoGraficoSemImposto"));

export default function LciLcaPreFixadoComponent() {
  const [state, dispatch] = useReducer(lcilcaPreFixadoReducer, initialState);

  const handleChange = useCallback((field: keyof typeof initialState) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch({ type: "SET_FIELD", field, value });
  }, []);

  return (
    <>
      <InputField label={"Capital inicial"} value={state.capital} onChange={handleChange("capital")} prefix={"R$"} forId="capital-inicial-lci-lca-pre" />
      <InputField label={"Aportes mensais"} value={state.valorAporteMensal} onChange={handleChange("valorAporteMensal")} prefix={"R$"} forId="aportes-mensais-lci-lca-pre" />
      <InputField label={"Taxa de juros"} value={state.taxaJurosAnual} onChange={handleChange("taxaJurosAnual")} suffix={"% ao ano"} forId="taxa-juros-lci-lca-pre" />
      <InputField label={"Período"} value={state.periodo} onChange={handleChange("periodo")} suffix={"meses"} forId="periodo-lci-lca-pre" />

      <br />

      <div className="d-flex justify-content-center">
        <button className="btn btn-success col-6" onClick={() => dispatch({ type: "CALCULAR_RESULTADO" })}>Calcular</button>
      </div>

      <br />

      <Suspense fallback={<div className="text-center">Loading...</div>}>
        {state.resultado > 0 && (
          <div>
            <ResultadoGraficoSemImposto totalInvestido={state.totalInvestido} juros={state.juros} />
            <br />
            <ResultadoLciLca capital={state.capital} valorAporteMensal={state.valorAporteMensal} periodo={state.periodo} resultado={state.resultado} />
          </div>
        )}
      </Suspense>
    </>
  );
}