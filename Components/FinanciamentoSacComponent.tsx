"use client"

import React, { useReducer, ChangeEvent, lazy, useCallback, Suspense } from "react";
import { initialState, financiamentoSacReducer, Action } from "../src/app/reducers/financiamentoSacReducer";

const InputField = lazy(() => import("./InputField"));
const TabelaParcelas = lazy(() => import("./TabelaParcelas"));

export default function FinanciamentoSacComponent() {
  const [state, dispatch] = useReducer(financiamentoSacReducer, initialState);

  const handleChange = useCallback((type: Action["type"]) => (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    dispatch({ type, payload: value });
  }, []);

  return (
    <>
      <InputField
        label="Valor do financiamento"
        value={state.valorFinanciamento}
        onChange={handleChange("SET_valorFinanciamento")}
        prefix="R$"
        forId="valor-financiamento-sac"
      />
      <InputField
        label="Taxa de juros"
        value={state.taxaJurosAnual}
        onChange={handleChange("SET_taxaJurosAnual")}
        suffix="% ao ano"
        forId="taxa-juros-financiamento-sac"
      />
      <InputField
        label="Prazo de pagamento"
        value={state.prazoPagamento}
        onChange={handleChange("SET_prazoPagamento")}
        suffix="meses"
        forId="prazo-financiamento-sac"
      />

      <br />

      <div className="d-flex justify-content-center">
        <button className="btn btn-success col-6" onClick={() => dispatch({ type: "CALCULAR_PARCELAS" })}>Calcular</button>
      </div>

      <br />
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        {state.valorParcela.length > 0 && (
          <TabelaParcelas parcelas={state.valorParcela} total={state.totalParcelas} />
        )}
      </Suspense>
    </>
  );
}
