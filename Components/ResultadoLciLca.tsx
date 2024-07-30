import React from "react";
import { formatCurrency } from "../src/app/utils/financialCalculation";

export default function ResultadoLciLca({ capital, valorAporteMensal, periodo, resultado }) {
  const totalInvestido = capital + valorAporteMensal * periodo;
  const totalJuros = resultado - totalInvestido;

  return (
    <div className="text-center">
      <p>Rendimento Bruto: {formatCurrency(resultado)}</p>
      <p>Capital inicial: {formatCurrency(capital)}</p>
      <p>Total investido: {formatCurrency(totalInvestido)}</p>
      <p>Rendimento sobre os Juros: {formatCurrency(totalJuros)}</p>
      <p>Imposto sobre o Rendimento: Isento</p>
      <p>Rendimento Líquido: {formatCurrency(resultado)}</p>
    </div>
  );
}