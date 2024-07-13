import { calcularCdb } from "../utils/financialCalculation";

export const initialState = {
  capital: "",
  taxaJurosAnual: "",
  valorAporteMensal: "",
  periodo: "",
  resultado: ""
};

export function cdbReducer(state, action) {
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
      const resultado = calcularCdb(state.capital, state.taxaJurosAnual, state.valorAporteMensal, state.periodo);
      return { ...state, resultado };
    default:
      return state;
  }
}