import { calcularJurosSimples } from "../utils/financialCalculation";

export interface State {
  capital: number;
  taxaJurosAnual: number;
  periodo: number;
  resultado: number;
  totalInvestido: number;
  juros: number;
}

export const initialState: State = {
  capital: 0,
  taxaJurosAnual: 0,
  periodo: 0,
  resultado: 0,
  totalInvestido: 0,
  juros: 0,
};

export type Action =
  | { type: "SET_CAPITAL"; payload: number }
  | { type: "SET_TAXA_JUROS_ANUAL"; payload: number }
  | { type: "SET_PERIODO"; payload: number }
  | { type: "CALCULAR_RESULTADO" };

export function jurosSimplesReducer(state: State, action: Action) {
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
      const valorJuros = juros.toFixed(2)
      return {
        ...state,
        resultado,
        totalInvestido: state.capital,
        juros: parseFloat(valorJuros)
      };
    default:
      return state;
  }
}