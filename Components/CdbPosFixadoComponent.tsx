"use client"

import React, { useEffect, useReducer, ChangeEvent, useMemo, lazy, useCallback, Suspense } from "react";
import { initialState, cdbPosFixadoReducer } from "../src/app/reducers/cdbPosFixadoReducer";

const InputField = lazy(() => import("./InputField"));
const ResultadoCdb = lazy(() => import("./ResultadoCdb"));
const ResultadoGraficoComImposto = lazy(() => import("./ResultadoGraficoComImposto"));

const CdbPosFixadoComponent = ({ taxaCdi }: { taxaCdi: { valor: string } }) => {
  const taxaJurosAnual = useMemo(() => parseFloat(taxaCdi.valor), [taxaCdi]);

  const [state, dispatch] = useReducer(cdbPosFixadoReducer, {
    ...initialState,
    taxaJurosAnual
  });

  const handleChange = useCallback((field: keyof typeof initialState) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch({ type: "SET_FIELD", field, value });
  }, []);

  useEffect(() => {
    if (taxaCdi?.valor) {
      dispatch({ type: "SET_FIELD", field: "taxaJurosAnual", value: taxaJurosAnual });
    }
  }, [taxaCdi])

  return (
    <>
      {taxaCdi && taxaCdi.valor !== undefined ? (
        <div>
          <p>Valor do CDI considerado {taxaCdi.valor}%</p>
          <InputField label={"Capital inicial"} value={state.capital} onChange={handleChange("capital")} prefix={"R$"} forId="capital-inicial-cdb-pos" />
          <InputField label={"Aportes mensais"} value={state.valorAporteMensal} onChange={handleChange("valorAporteMensal")} prefix={"R$"} forId="aportes-mensais-cdb-pos" />
          <InputField label={"Porcentagem em CDI"} value={state.porcentagemCdi} onChange={handleChange("porcentagemCdi")} suffix={"CDI"} forId="porcentagem-cdi-cdb-pos" />
          <InputField label={"Período"} value={state.periodo} onChange={handleChange("periodo")} suffix={"meses"} forId="periodo-" />

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
        </div>
      ) : (
        <p>Erro ao carregar a taxa Selic. Por favor, tente novamente mais tarde.</p>
      )}
    </>
  );
}

export default CdbPosFixadoComponent;