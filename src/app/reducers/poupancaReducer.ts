import { calcularInvestimentoPreFixado } from "../utils/financialCalculation";

export interface State {
  capital: number;
  taxaJurosAnual: number;
  valorAporteMensal: number;
  periodo: number;
  resultado: number;
  totalInvestido: number;
  juros: number;
}

export const initialState: State = {
  capital: 0,
  taxaJurosAnual: 0,
  valorAporteMensal: 0,
  periodo: 0,
  resultado: 0,
  totalInvestido: 0,
  juros: 0,
};

export type Action =
  | { type: "SET_CAPITAL"; payload: number }
  | { type: "SET_TAXA_JUROS_ANUAL"; payload: number }
  | { type: "SET_VALOR_APORTE_MENSAL"; payload: number }
  | { type: "SET_PERIODO"; payload: number }
  | { type: "CALCULAR_RESULTADO" };

export function poupancaReducer(state: State, action: Action) {
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
      const resultado = calcularInvestimentoPreFixado(state.capital, state.taxaJurosAnual, state.valorAporteMensal, state.periodo);
      const totalInvestido = (state.valorAporteMensal * state.periodo) + state.capital;
      const juros = resultado - totalInvestido;
      const valorJuros = juros.toFixed(2);
      return {
        ...state,
        resultado,
        totalInvestido,
        juros: parseFloat(valorJuros)
      };
    default:
      return state;
  }
}