import { calcularJurosCompostos } from "../utils/financialCalculation";

export const initialState = {
  capital: 0,
  taxaJurosAnual: 0,
  valorAporteMensal: 0,
  periodo: 0,
  resultado: ""
};

export function jurosCompostosReducer(state, action) {
  switch (action.type) {
    case "SET_CAPITAL":
      return { ...state, capital: action.payload };
    case "SET_TAXA_JUROS_ANUAL":
      return { ...state, taxaJurosAnual: action.payload };
    case "SET_VALOR_APORTE_MENSAL":
      return { ...state, valorAporteMensal: action.payload };
    case "SET_PERIODO":
      return { ...state, periodo: action.payload };
    case "CALCULAR_RESULTADO":
      const resultado = calcularJurosCompostos(state.capital, state.taxaJurosAnual, state.valorAporteMensal, state.periodo);
      return { ...state, resultado };
    default:
      return state;
  }
}