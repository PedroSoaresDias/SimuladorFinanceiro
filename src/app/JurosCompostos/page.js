"use client"

import { useReducer } from "react";
import InputField from "../../../Components/InputField";
import ResultadoJurosCompostos from "../../../Components/ResultadoJurosCompostos";
import { initialState, jurosCompostosReducer } from "../reducers/jurosCompostosReducer";

export default function JurosCompostos() {
  const [state, dispatch] = useReducer(jurosCompostosReducer, initialState);

  return (
    <section className="composto">
      <div className="container">
        <h2 className="text-center text-dark">
          Calculadora de Juros Compostos
        </h2>
        <br />
        <InputField label={"Capital inicial"} value={state.capital} onChange={e => dispatch({ type: "SET_CAPITAL", payload: e.target.value })} prefix={"R$"} />
        <InputField label={"Aportes mensais"} value={state.valorAporteMensal} onChange={e => dispatch({ type: "SET_VALOR_APORTE_MENSAL", payload: e.target.value })} prefix={"R$"} />
        <InputField label={"Taxa de Juros"} value={state.taxaJurosAnual} onChange={e => dispatch({ type: "SET_TAXA_JUROS_ANUAL", payload: e.target.value })} suffix={"% ao ano"} />
        <InputField label={"Período"} value={state.periodo} onChange={e => dispatch({ type: "SET_PERIODO", payload: e.target.value })} suffix={"meses"} />

        <br />

        <div className="d-flex justify-content-center">
          <button className="btn btn-success" onClick={() => dispatch({ type: "CALCULAR_RESULTADO" })}>Calcular</button>
        </div>

        <br />

        {state.resultado > 0 && <ResultadoJurosCompostos capital={state.capital} resultado={state.resultado} />}
      </div>
    </section >
  );
}
