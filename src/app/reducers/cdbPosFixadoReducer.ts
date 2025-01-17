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
  | { type: "SET_FIELD"; field: keyof State; value: number }
  | { type: "CALCULAR_RESULTADO" };

export function cdbPosFixadoReducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "CALCULAR_RESULTADO":
      const montanteTotal = calcularInvestimentoPosFixado(
        state.capital,
        state.taxaJurosAnual,
        state.valorAporteMensal,
        state.periodo,
        state.porcentagemCdi
      );
      const totalInvestido = state.capital + state.valorAporteMensal * state.periodo;
      const juros = montanteTotal - totalInvestido;
      const imposto = calcularImposto(state.periodo, juros);
  
      return {
        ...state,
        resultado: montanteTotal,
        totalInvestido,
        juros: parseFloat(juros.toFixed(2)),
        imposto: parseFloat(imposto.toFixed(2))
      };
    default:
      return state;
  }
}