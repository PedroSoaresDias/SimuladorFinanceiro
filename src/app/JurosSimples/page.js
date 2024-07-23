"use client"

import { useReducer } from "react";
import InputField from "../../../Components/InputField";
import ResultadoJurosSimples from "../../../Components/ResultadoJurosSimples";
import { initialState, jurosSimplesReducer } from "../reducers/jurosSimplesReducer";
import ResultadoJurosGrafico from "../../../Components/ResultadoJurosGrafico";

export default function JurosSimples() {
  const [state, dispatch] = useReducer(jurosSimplesReducer, initialState);

  return (
    <section className="simulador">
      <div className="container text-dark">
        <h2 className="text-center">Calculadora de Juros Simples</h2>
        <br />
        <InputField label={"Capital inicial"} value={state.capital} onChange={e => dispatch({ type: "SET_CAPITAL", payload: parseFloat(e.target.value) })} prefix={"R$"} />
        <InputField label={"Taxa de Juros"} value={state.taxaJurosAnual} onChange={e => dispatch({ type: "SET_TAXA_JUROS_ANUAL", payload: parseFloat(e.target.value) })} suffix={"% ao ano"} />
        <InputField label={"Período"} value={state.periodo} onChange={e => dispatch({ type: "SET_PERIODO", payload: parseFloat(e.target.value) })} suffix={"anos"} />
        <br />

        <div className="d-flex justify-content-center">
          <button className="btn btn-success col-6" onClick={() => dispatch({ type: "CALCULAR_RESULTADO" })}>Calcular</button>
        </div>

        <br />

        <div className="text-center">
          {state.resultado > 0 && (
            <div>
              <ResultadoJurosGrafico totalInvestido={state.resultado} juros={state.juros} />
              <ResultadoJurosSimples capital={state.capital} resultado={state.resultado} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
