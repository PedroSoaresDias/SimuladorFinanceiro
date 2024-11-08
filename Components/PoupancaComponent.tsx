"use client"

import React, { useReducer, ChangeEvent, useEffect, useMemo } from "react";
import { InputField } from "./InputField";
import { initialState, poupancaReducer, State, Action } from "../src/app/reducers/poupancaReducer";
import ResultadoGraficoSemImposto from "./ResultadoGraficoSemImposto";
import ResultadoJurosCompostos from "./ResultadoJurosCompostos";

interface TaxasProps {
  taxaCdi: {
    valor: string;
  };
}

export default function PoupancaComponent({ taxaCdi }: TaxasProps) {
  const taxaSelic = useMemo(() => parseFloat(taxaCdi.valor) + 0.10, [taxaCdi]);
  
  const taxaPoupanca = useMemo(() => {
    return taxaSelic <= 8.5 ? (taxaSelic * 0.7).toFixed(2) : "6.17"
  }, [taxaSelic]);

  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(poupancaReducer, {
    ...initialState,
    taxaJurosAnual: parseFloat(taxaPoupanca),
  });

  useEffect(() => {
    dispatch({ type: "SET_TAXA_JUROS_ANUAL", payload: parseFloat(taxaPoupanca) });
  }, [taxaPoupanca]);

  const handleChange = (type: Action["type"]) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch({ type, payload: value });
  };

  return (
    <section className="simulador">
      <div className="container">
        <h2 className="text-center text-dark">
          Calculadora de Rendimento da Poupança
        </h2>

        <br />

        <InputField label={"Valor inicial"} value={state.capital} onChange={handleChange("SET_CAPITAL")} prefix={"R$"} />
        <InputField label={"Valor mensal"} value={state.valorAporteMensal} onChange={handleChange("SET_VALOR_APORTE_MENSAL")} prefix={"R$"} />
        <InputField label={"Rendimento da poupança"} value={state.taxaJurosAnual} readonly suffix={"% ao ano"} />
        <InputField label={"Poupar por"} value={state.periodo} onChange={handleChange("SET_PERIODO")} suffix={"meses"} />

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