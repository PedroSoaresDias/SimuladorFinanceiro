"use client"

import React, { useReducer, ChangeEvent } from "react";
import { InputField } from "../../../Components/InputField";
import ResultadoJurosSimples from "../../../Components/ResultadoJurosSimples";
import { initialState, jurosSimplesReducer, Action } from "../reducers/jurosSimplesReducer";
import ResultadoGraficoSemImposto from "../../../Components/ResultadoGraficoSemImposto";

const JurosSimples: React.FC = () => {
  const [state, dispatch] = useReducer(jurosSimplesReducer, initialState);

  const handleChange = (type: Action["type"]) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch({ type, payload: value });
  };

  return (
    <section className="simulador">
      <div className="container text-dark">
        <h2 className="text-center">Calculadora de Juros Simples</h2>
        <br />
        <InputField label={"Capital inicial"} value={state.capital} onChange={handleChange("SET_CAPITAL")} prefix={"R$"} />
        <InputField label={"Taxa de Juros"} value={state.taxaJurosAnual} onChange={handleChange("SET_TAXA_JUROS_ANUAL")} suffix={"% ao ano"} />
        <InputField label={"Período"} value={state.periodo} onChange={handleChange("SET_PERIODO")} suffix={"anos"} />
        <br />

        <div className="d-flex justify-content-center">
          <button className="btn btn-success col-6" onClick={() => dispatch({ type: "CALCULAR_RESULTADO" })}>Calcular</button>
        </div>

        <br />

        <div className="text-center">
          {state.resultado > 0 && (
            <div>
              <ResultadoGraficoSemImposto totalInvestido={state.resultado} juros={state.juros} />
              <ResultadoJurosSimples capital={state.capital} resultado={state.resultado} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default JurosSimples;