import { calcularFinanciamento } from "../utils/financialCalculation";

export const initialState = {
  emprestimo: "",
  valorParcela: [],
  prazoPagamento: "",
  taxaJurosAnual: "",
  totalParcelas: ""
};

export function financiamentoSacReducer(state, action) {
  switch (action.type){
    case "SET_EMPRESTIMO":
      return { ...state, emprestimo: action.payload };
    case "SET_TAXA_JUROS_ANUAL":
      return { ...state, taxaJurosAnual: action.payload };
    case "SET_PRAZO_PAGAMENTO":
      return { ...state, prazoPagamento: action.payload };
    case "CALCULAR_PARCELAS":
      const { parcelas, total } = calcularFinanciamento(state.emprestimo, state.taxaJurosAnual, state.prazoPagamento);
      return { ...state, valorParcela: parcelas, totalParcelas: total };
    default:
      return state;
  }
}