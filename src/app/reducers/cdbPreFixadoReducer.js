import { calcularImposto, calcularInvestimento } from "../utils/financialCalculation";

export const initialState = {
  capital: "",
  taxaJurosAnual: "",
  valorAporteMensal: "",
  periodo: "",
  resultado: "",
  totalInvestido: 0,
  juros: 0,
  imposto: 0
};

export function cdbPreFixadoReducer(state, action) {
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
      const montanteTotal = calcularInvestimento(state.capital, state.taxaJurosAnual, state.valorAporteMensal, state.periodo);
      const totalInvestido = (state.valorAporteMensal * state.periodo) + state.capital;
      const juros = montanteTotal - totalInvestido;
      const imposto = calcularImposto(state.periodo, juros);
      return {
        ...state,
        resultado: montanteTotal,
        totalInvestido,
        juros: juros.toFixed(2),
        imposto: imposto.toFixed(2)
      };
    default:
      return state;
  }
}