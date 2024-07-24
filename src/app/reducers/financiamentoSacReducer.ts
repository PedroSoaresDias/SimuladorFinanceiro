import { calcularFinanciamento } from "../utils/financialCalculation";

export interface State {
  emprestimo: number;
  valorParcela: number[];
  prazoPagamento: number;
  taxaJurosAnual: number;
  totalParcelas: number;
}

export const initialState: State = {
  emprestimo: 0,
  valorParcela: [],
  prazoPagamento: 0,
  taxaJurosAnual: 0,
  totalParcelas: 0
};

export type Action =
  | { type: "SET_EMPRESTIMO"; payload: number }
  | { type: "SET_TAXA_JUROS_ANUAL"; payload: number }
  | { type: "SET_PRAZO_PAGAMENTO"; payload: number }
  | { type: "CALCULAR_PARCELAS" };

export function financiamentoSacReducer(state: State, action: Action) {
  switch (action.type){
    case "SET_EMPRESTIMO":
      return { ...state, emprestimo: action.payload };
    case "SET_TAXA_JUROS_ANUAL":
      return { ...state, taxaJurosAnual: action.payload };
    case "SET_PRAZO_PAGAMENTO":
      return { ...state, prazoPagamento: action.payload };
    case "CALCULAR_PARCELAS":
      const { parcelas, total } = calcularFinanciamento(state.emprestimo, state.taxaJurosAnual, state.prazoPagamento);
      const valorTotal = parseFloat(total)
      return { ...state, valorParcela: parcelas, totalParcelas: valorTotal };
    default:
      return state;
  }
}