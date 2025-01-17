import { calcularParcelasFinanciamentoSac } from "../utils/financialCalculation";

export interface State {
  valorFinanciamento: number;
  valorParcela: number[];
  prazoPagamento: number;
  taxaJurosAnual: number;
  totalParcelas: number;
}

export const initialState: State = {
  valorFinanciamento: 0,
  valorParcela: [],
  prazoPagamento: 0,
  taxaJurosAnual: 0,
  totalParcelas: 0
};

type PayloadAction<T extends keyof State> = {
  type: `SET_${T}`;
  payload: State[T];
}

export type Action =
  | PayloadAction<"valorFinanciamento">
  | PayloadAction<"prazoPagamento">
  | PayloadAction<"taxaJurosAnual">
  | { type: "CALCULAR_PARCELAS" };

export function financiamentoSacReducer(state: State, action: Action) {
  switch (action.type){
    case "SET_valorFinanciamento":
    case "SET_prazoPagamento":
    case "SET_taxaJurosAnual":
      return {...state, [action.type.split("_")[1]]: action.payload}
    case "CALCULAR_PARCELAS":
      const { parcelas, total } = calcularParcelasFinanciamentoSac(
        state.valorFinanciamento,
        state.taxaJurosAnual,
        state.prazoPagamento
      );
      return { ...state, valorParcela: parcelas, totalParcelas: parseFloat(total) };
    default:
      return state;
  }
}