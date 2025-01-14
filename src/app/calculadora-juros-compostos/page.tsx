"use client"

import React, { useReducer, ChangeEvent } from "react";
import InputField from "../../../Components/InputField";
import ResultadoJurosCompostos from "../../../Components/ResultadoJurosCompostos";
import { initialState, jurosCompostosReducer, Action } from "../reducers/jurosCompostosReducer";
import ResultadoGraficoSemImposto from "../../../Components/ResultadoGraficoSemImposto";
import "../css/simulador.css";

const JurosCompostos: React.FC = () => {
  const [state, dispatch] = useReducer(jurosCompostosReducer, initialState);

  const handleChange = (type: Action["type"]) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch({ type, payload: value });
  };

  return (
    <section className="simulador">
      <div className="container">
        <h2 className="text-center text-dark">
          Calculadora de Juros Compostos
        </h2>
        <br />
        <InputField label={"Capital inicial"} value={state.capital} onChange={handleChange("SET_CAPITAL")} prefix={"R$"} forId="capital-inicial-juros-compostos" />
        <InputField label={"Aportes mensais"} value={state.valorAporteMensal} onChange={handleChange("SET_VALOR_APORTE_MENSAL")} prefix={"R$"} forId="aportes-mensais-juros-compostos" />
        <InputField label={"Taxa de Juros"} value={state.taxaJurosAnual} onChange={handleChange("SET_TAXA_JUROS_ANUAL")} suffix={"% ao ano"} forId="taxa-juros-compostos" />
        <InputField label={"Período"} value={state.periodo} onChange={handleChange("SET_PERIODO")} suffix={"meses"} forId="periodo-juros-compostos" />

        <br />

        <div className="d-flex justify-content-center">
          <button className="btn btn-success col-6" onClick={() => dispatch({ type: "CALCULAR_RESULTADO" })}>Calcular</button>
        </div>

        <br />

        {state.resultado > 0 && (
          <div>
            <ResultadoGraficoSemImposto totalInvestido={state.totalInvestido} juros={state.juros} />
            <br />
            <ResultadoJurosCompostos capital={state.capital} valorAporteMensal={state.valorAporteMensal} periodo={state.periodo} resultado={state.resultado} />
          </div>
        )}
      </div>
    </section >
  );
}

export default JurosCompostos;