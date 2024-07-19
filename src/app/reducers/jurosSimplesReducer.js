import { calcularJurosSimples } from "../utils/financialCalculation";

export const initialState = {
  capital: "",
  taxaJurosAnual: "",
  periodo: "",
  resultado: "",
  totalInvestido: 0,
  juros: 0,
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
      const juros = resultado - state.capital;
      return {
        ...state,
        resultado,
        totalInvestido: state.capital,
        juros: juros.toFixed(2)
      };
    default:
      return state;
  }
}