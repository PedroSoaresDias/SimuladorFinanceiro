"use client"

import React, { useReducer, ChangeEvent, lazy, useCallback, Suspense } from "react";
import { initialState, jurosCompostosReducer } from "../src/app/reducers/jurosCompostosReducer";

const InputField = lazy(() => import("./InputField"));
const ResultadoGraficoSemImposto = lazy(() => import("./ResultadoGraficoSemImposto"));
const ResultadoJurosCompostos = lazy(() => import("./ResultadoJurosCompostos"));

const JurosCompostosComponent: React.FC = () => {
  const [state, dispatch] = useReducer(jurosCompostosReducer, initialState);

  const handleChange = useCallback((field: keyof typeof initialState) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch({ type: "SET_FIELD", field, value });
  }, []);

  return (
    <>
      <InputField label={"Capital inicial"} value={state.capital} onChange={handleChange("capital")} prefix={"R$"} forId="capital-inicial-juros-compostos" />
      <InputField label={"Aportes mensais"} value={state.valorAporteMensal} onChange={handleChange("valorAporteMensal")} prefix={"R$"} forId="aportes-mensais-juros-compostos" />
      <InputField label={"Taxa de juros"} value={state.taxaJurosAnual} onChange={handleChange("taxaJurosAnual")} suffix={"% ao ano"} forId="taxa-juros-compostos" />
      <InputField label={"Período"} value={state.periodo} onChange={handleChange("periodo")} suffix={"meses"} forId="periodo-juros-compostos" />

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
            <ResultadoJurosCompostos capital={state.capital} valorAporteMensal={state.valorAporteMensal} periodo={state.periodo} resultado={state.resultado} />
          </div>
        )}
      </Suspense>
    </>
  );
}

export default JurosCompostosComponent;