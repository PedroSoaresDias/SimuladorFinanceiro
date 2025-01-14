"use client"

import React, { useEffect, useReducer, ChangeEvent, useMemo } from "react";
import InputField from "./InputField";
import { initialState, cdbPosFixadoReducer, Action } from "../src/app/reducers/cdbPosFixadoReducer";
import ResultadoCdb from "./ResultadoCdb";
import ResultadoGraficoComImposto from "./ResultadoGraficoComImposto";

const CdbPosFixadoComponent = ({ taxaCdi }: { taxaCdi: { valor: string } }) => {
  const taxaJurosAnual = useMemo(() => parseFloat(taxaCdi.valor), [taxaCdi]);

  const [state, dispatch] = useReducer(cdbPosFixadoReducer, {
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
          <InputField label={"Capital inicial"} value={state.capital} onChange={handleChange("SET_CAPITAL")} prefix={"R$"} forId="capital-inicial-cdb-pos" />
          <InputField label={"Aportes mensais"} value={state.valorAporteMensal} onChange={handleChange("SET_VALOR_APORTE_MENSAL")} prefix={"R$"} forId="aportes-mensais-cdb-pos" />
          <InputField label={"Porcentagem em CDI"} value={state.porcentagemCdi} onChange={handleChange("SET_PORCENTAGEM_CDI")} suffix={"CDI"} forId="porcentagem-cdi-cdb-pos" />
          <InputField label={"Período"} value={state.periodo} onChange={handleChange("SET_PERIODO")} suffix={"meses"} forId="periodo-" />

          <br />

          <div className="d-flex justify-content-center">
            <button className="btn btn-success col-6" onClick={() => dispatch({ type: "CALCULAR_RESULTADO" })}>Calcular</button>
          </div>

          <br />

          {state.resultado > 0 && (
            <div>
              <ResultadoGraficoComImposto totalInvestido={state.totalInvestido} juros={state.juros} imposto={state.imposto} />
              <br />
              <ResultadoCdb capital={state.capital} valorAporteMensal={state.valorAporteMensal} periodo={state.periodo} resultado={state.resultado} />
            </div>
          )}
        </div>
      ) : (
        <p>Erro ao carregar a taxa Selic. Por favor, tente novamente mais tarde.</p>
      )}
    </>
  );
}

export default CdbPosFixadoComponent;