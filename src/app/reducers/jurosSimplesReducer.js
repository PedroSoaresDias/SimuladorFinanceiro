import { calcularJurosSimples } from "../utils/financialCalculation";

export const initialState = {
  capital: "",
  taxaJurosAnual: "",
  periodo: "",
  resultado: ""
};

export function jurosSimplesReducer(state, action) {
  switch (action.type) {
    case "SET_CAPITAL":
      return { ...state, capital: action.payload };
    case "SET_TAXA_JUROS_ANUAL":
      return { ...state, taxaJurosAnual: action.payload };
    case "SET_PERIODO":
      return { ...state, periodo: action.payload };
    case "CALCULAR_RESULTADO":
      const resultado = calcularJurosSimples(state.capital, state.taxaJurosAnual, state.periodo);
      return { ...state, resultado };
    default:
      return state;
  }
}