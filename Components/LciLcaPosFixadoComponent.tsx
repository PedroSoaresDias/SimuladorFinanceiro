"use client"

import React, { useEffect, useReducer, ChangeEvent, useMemo } from "react";
import InputField from "./InputField";
import { initialState, lcilcaPosFixadoReducer, Action } from "../src/app/reducers/lcilcaPosFixadoReducer";
import ResultadoLciLca from "./ResultadoLciLca";
import ResultadoGraficoSemImposto from "./ResultadoGraficoSemImposto";

export default function LciLcaPosFixadoComponent({ taxaCdi }: { taxaCdi: { valor: string } }) {
  const taxaJurosAnual = useMemo(() => parseFloat(taxaCdi.valor), [taxaCdi]);

  const [state, dispatch] = useReducer(lcilcaPosFixadoReducer, {
    ...initialState,
    taxaJurosAnual
  });

  const handleChange = (type: Action["type"]) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch({ type, payload: value });
  };

  useEffect(() => {
    if (taxaCdi && taxaCdi.valor) {
      dispatch({ type: "SET_TAXA_JUROS_ANUAL", payload: parseFloat(taxaCdi.valor) });
    }
  }, [taxaCdi])

  return (
    <>
      {taxaCdi && taxaCdi.valor !== undefined ? (
        <div>
          <p>Valor do CDI considerado {taxaCdi.valor}%</p>
          <InputField label={"Capital inicial"} value={state.capital} onChange={handleChange("SET_CAPITAL")} prefix={"R$"} forId="capital-inicial-lci-lca-pos" />
          <InputField label={"Aportes mensais"} value={state.valorAporteMensal} onChange={handleChange("SET_VALOR_APORTE_MENSAL")} prefix={"R$"} forId="aportes-mensais-lci-lca-pos" />
          <InputField label={"Porcentagem em CDI"} value={state.porcentagemCdi} onChange={handleChange("SET_PORCENTAGEM_CDI")} suffix={"CDI"} forId="porcentagem-cdi-lci-lca-pos" />
          <InputField label={"Período"} value={state.periodo} onChange={handleChange("SET_PERIODO")} suffix={"meses"} forId="periodo-lci-lca-pos" />

          <br />

          <div className="d-flex justify-content-center">
            <button className="btn btn-success col-6" onClick={() => dispatch({ type: "CALCULAR_RESULTADO" })}>Calcular</button>
          </div>

          <br />

          {state.resultado > 0 && (
            <div>
              <ResultadoGraficoSemImposto totalInvestido={state.totalInvestido} juros={state.juros} />
              <br />
              <ResultadoLciLca capital={state.capital} valorAporteMensal={state.valorAporteMensal} periodo={state.periodo} resultado={state.resultado} />
            </div>
          )}
        </div>
      ) : (
        <p>Erro ao carregar a taxa Selic. Por favor, tente novamente mais tarde.</p>
      )}
    </>
  );
}