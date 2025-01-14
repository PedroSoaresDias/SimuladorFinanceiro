import React from "react";
import { formatCurrency } from "../src/app/utils/financialCalculation";

function ResultadoJurosCompostos({ capital, valorAporteMensal, periodo, resultado }) {
  const totalInvestido = capital + valorAporteMensal * periodo;
  const totalJuros = resultado - totalInvestido;

  return (
    <div className="text-center">
      <p>Capital inicial: {formatCurrency(capital)}</p>
      <p>Total investido: {formatCurrency(totalInvestido)}</p>
      <p>Total de Juros: {formatCurrency(totalJuros)}</p>
      <p>O montante é: {formatCurrency(resultado)}</p>
    </div>
  );
}

export default React.memo(ResultadoJurosCompostos);