"use client"

import React, { useReducer, ChangeEvent, lazy, useCallback, Suspense } from "react";
import { initialState, cdbPreFixadoReducer } from "../src/app/reducers/cdbPreFixadoReducer";

const InputField = lazy(() => import("./InputField"));
const ResultadoCdb = lazy(() => import("./ResultadoCdb"));
const ResultadoGraficoComImposto = lazy(() => import("./ResultadoGraficoComImposto"));

export default function CdbPreFixadoComponent() {
  const [state, dispatch] = useReducer(cdbPreFixadoReducer, initialState);

  const handleChange = useCallback((field: keyof typeof initialState) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch({ type: "SET_FIELD", field, value });
  }, []);

  return (
    <>
      <InputField label={"Capital inicial"} value={state.capital} onChange={handleChange("capital")} prefix={"R$"} forId="capital-inicial-cdb-pre" />
      <InputField label={"Aportes mensais"} value={state.valorAporteMensal} onChange={handleChange("valorAporteMensal")} prefix={"R$"} forId="aportes-mensais-cdb-pre" />
      <InputField label={"Taxa de juros"} value={state.taxaJurosAnual} onChange={handleChange("taxaJurosAnual")} suffix={"% ao ano"} forId="taxa-juros-cdb-pre" />
      <InputField label={"Período"} value={state.periodo} onChange={handleChange("periodo")} suffix={"meses"} forId="periodo-cdb-pre" />

      <br />

      <div className="d-flex justify-content-center">
        <button className="btn btn-success col-6" onClick={() => dispatch({ type: "CALCULAR_RESULTADO" })}>Calcular</button>
      </div>

      <br />

      <Suspense fallback={<div className="text-center">Loading...</div>}>
        {state.resultado > 0 && (
          <div>
            <ResultadoGraficoComImposto totalInvestido={state.totalInvestido} juros={state.juros} imposto={state.imposto} />
            <br />
            <ResultadoCdb capital={state.capital} valorAporteMensal={state.valorAporteMensal} periodo={state.periodo} resultado={state.resultado} />
          </div>
        )}
      </Suspense>
    </>
  );
}