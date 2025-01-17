"use client"

import React, { useReducer, ChangeEvent, useEffect, useMemo, useCallback, lazy, Suspense } from "react";
import { initialState, poupancaReducer } from "../src/app/reducers/poupancaReducer";

const InputField = lazy(() => import("./InputField"));
const ResultadoGraficoSemImposto = lazy(() => import("./ResultadoGraficoSemImposto"));
const ResultadoJurosCompostos = lazy(() => import("./ResultadoJurosCompostos"));

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

  const [state, dispatch] = useReducer(poupancaReducer, {
    ...initialState,
    taxaJurosAnual: parseFloat(taxaPoupanca),
  });

  useEffect(() => {
    dispatch({ type: "SET_FIELD", field: "taxaJurosAnual", value: parseFloat(taxaPoupanca) });
  }, [taxaPoupanca]);

  const handleChange = useCallback((field: keyof typeof initialState) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch({ type: "SET_FIELD", field, value });
  }, []);

  return (
    <>
      <InputField label={"Capital inicial"} value={state.capital} onChange={handleChange("capital")} prefix={"R$"} forId="capital-inicial-poupanca" />
      <InputField label={"Aportes mensais"} value={state.valorAporteMensal} onChange={handleChange("valorAporteMensal")} prefix={"R$"} forId="aportes-mensais-poupanca" />
      <InputField label={"Rendimento da poupança"} value={state.taxaJurosAnual} readonly suffix={"% ao ano"} forId="taxa-juros-poupanca" />
      <InputField label={"Poupar por"} value={state.periodo} onChange={handleChange("periodo")} suffix={"meses"} forId="periodo-poupanca" />

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