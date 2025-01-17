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
  | { type: "SET_FIELD"; field: keyof State; value: number }
  | { type: "CALCULAR_RESULTADO" };

export function lcilcaPreFixadoReducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "CALCULAR_RESULTADO":
      const montanteTotal = calcularInvestimentoPreFixado(
        state.capital, 
        state.taxaJurosAnual, 
        state.valorAporteMensal, 
        state.periodo
      );
      const totalInvestido = (state.valorAporteMensal * state.periodo) + state.capital;
      const juros = montanteTotal - totalInvestido;

      return {
        ...state,
        resultado: montanteTotal,
        totalInvestido,
        juros: parseFloat(juros.toFixed(2

        )),
      };
    default:
      return state;
  }
}