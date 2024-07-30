import { calcularInvestimentoPosFixado, calcularImposto } from "../utils/financialCalculation";

export interface State {
  capital: number;
  taxaJurosAnual: number;
  porcentagemCdi: number;
  valorAporteMensal: number;
  periodo: number;
  resultado: number;
  totalInvestido: number;
  juros: number;
  imposto: number;
}

export const initialState: State = {
  capital: 0,
  taxaJurosAnual: 0,
  porcentagemCdi: 0,
  valorAporteMensal: 0,
  periodo: 0,
  resultado: 0,
  totalInvestido: 0,
  juros: 0,
  imposto: 0
};

export type Action =
  | { type: "SET_CAPITAL"; payload: number }
  | { type: "SET_TAXA_JUROS_ANUAL"; payload: number }
  | { type: "SET_PORCENTAGEM_CDI"; payload: number }
  | { type: "SET_VALOR_APORTE_MENSAL"; payload: number }
  | { type: "SET_PERIODO"; payload: number }
  | { type: "CALCULAR_RESULTADO" };

export function cdbPosFixadoReducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_CAPITAL":
      return { ...state, capital: action.payload };
    case "SET_TAXA_JUROS_ANUAL":
      return { ...state, taxaJurosAnual: action.payload };
    case "SET_PORCENTAGEM_CDI":
      return { ...state, porcentagemCdi: action.payload };
    case "SET_VALOR_APORTE_MENSAL":
      return { ...state, valorAporteMensal: action.payload };
    case "SET_PERIODO":
      return { ...state, periodo: action.payload };
    case "CALCULAR_RESULTADO":
      const montanteTotal = calcularInvestimentoPosFixado(state.capital, state.taxaJurosAnual, state.valorAporteMensal, state.periodo, state.porcentagemCdi);
      const totalInvestido = (state.valorAporteMensal * state.periodo) + state.capital;
      const juros = montanteTotal - totalInvestido;
      const imposto = calcularImposto(state.periodo, juros);
      const valorJuros = juros.toFixed(2);
      const valorImposto = imposto.toFixed(2);
      return {
        ...state,
        resultado: montanteTotal,
        totalInvestido,
        juros: parseFloat(valorJuros),
        imposto: parseFloat(valorImposto)
      };
    default:
      return state;
  }
}