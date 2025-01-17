"use client"

import React, { useReducer, ChangeEvent, lazy, useCallback, Suspense } from "react";
import { initialState, jurosSimplesReducer } from "../src/app/reducers/jurosSimplesReducer";

const InputField = lazy(() => import("./InputField"));
const ResultadoGraficoSemImposto = lazy(() => import("./ResultadoGraficoSemImposto"));
const ResultadoJurosSimples = lazy(() => import("./ResultadoJurosSimples"));

const JurosSimplesComponent: React.FC = () => {
  const [state, dispatch] = useReducer(jurosSimplesReducer, initialState);

  const handleChange = useCallback((field: keyof typeof initialState) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch({ type: "SET_FIELD", field, value });
  }, []);

  return (
    <>
      <InputField label={"Capital inicial"} value={state.capital} onChange={handleChange("capital")} prefix={"R$"} forId="capital-inicial-juros-simples" />
      <InputField label={"Taxa de Juros"} value={state.taxaJurosAnual} onChange={handleChange("taxaJurosAnual")} suffix={"% ao ano"} forId="taxa-juros-simples" />
      <InputField label={"Período"} value={state.periodo} onChange={handleChange("periodo")} suffix={"anos"} forId="periodo-juros-simples" />
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
            <ResultadoJurosSimples capital={state.capital} resultado={state.resultado} />
          </div>
        )}
      </Suspense>
    </>
  );
}

export default JurosSimplesComponent;